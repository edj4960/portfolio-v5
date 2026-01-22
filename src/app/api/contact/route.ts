import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "evandj423@gmail.com";
const FROM_EMAIL = "Evan Portfolio <onboarding@resend.dev>";

type ContactPayload = {
  name: string;
  email: string;
  help: string;
  details: string;
};

const isNonEmpty = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY configuration." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = payload?.name?.trim();
  const email = payload?.email?.trim();
  const help = payload?.help?.trim();
  const details = payload?.details?.trim();

  if (!isNonEmpty(name) || !isNonEmpty(email) || !isNonEmpty(help) || !isNonEmpty(details)) {
    return NextResponse.json(
      { error: "Please complete all fields before submitting." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = `New contact request from ${name}`;
  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Help:</strong> ${help}</p>
    <p><strong>Details:</strong></p>
    <p>${details.replace(/\n/g, "<br />")}</p>
  `;
  const message = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Help: ${help}`,
    "",
    details,
  ].join("\n");

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
      text: message,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to send the message right now.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
