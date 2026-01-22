  "use client";

  import { useState, type FormEvent } from "react";
  import PageHeader from "@/components/PageHeader";
  import PageCascade from "@/components/PageCascade";

  type FormState = {
    name: string;
    email: string;
    help: string;
    details: string;
  };

  const initialState: FormState = {
    name: "",
    email: "",
    help: "",
    details: "",
  };

  const helpOptions = [
    "Build from designs",
    "Debugging / troubleshooting",
    "CMS integration",
    "Performance / SEO",
    "Other",
  ];

  export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>(initialState);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
      "idle"
    );
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (field: keyof FormState, value: string) => {
      setFormState((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("loading");
      setStatusMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            help: formState.help,
            details: formState.details,
          }),
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            payload?.error || "Something went wrong sending your message."
          );
        }

        setStatus("success");
        setStatusMessage("Thanks! Your message is on its way.");
        setFormState(initialState);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong sending your message.";
        setStatus("error");
        setStatusMessage(message);
      }
    };

    return (
      <PageCascade className="space-y-20">
        <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 p-10 md:p-14">
          <PageHeader
            title="Contact"
            subtitle="Contact me about roles, contracts, or project work."
          />
          <div className="mt-8 space-y-2 text-sm text-base-content/70">
            <p>
              Email:{" "}
              <a
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80"
                href="mailto:evandj423@gmail.com"
              >
                evandj423@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80"
                href="https://linkedin.com/in/evan-d-jones/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/evan-d-jones/
              </a>
            </p>
          </div>
        </section>

        <section className="card border border-base-300 bg-base-200/40">
          <div className="card-body space-y-7">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Send a message
              </h2>
              <p className="text-sm text-base-content/60">
                This form sends your message directly to my inbox.
              </p>
            </div>
            {status === "success" ? (
              <div className="rounded-2xl border border-success/30 bg-success/10 p-6 text-success">
                <p className="text-lg font-semibold">{statusMessage}</p>
                <p className="mt-2 text-sm text-success/80">
                  I usually respond within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="form-control w-full flex flex-col gap-1">
                    <span className="label-text text-sm text-base-content/70">
                      Name
                    </span>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={formState.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      name="name"
                      required
                    />
                  </label>

                  <label className="form-control w-full flex flex-col gap-1">
                    <span className="label-text text-sm text-base-content/70">
                      Email
                    </span>
                    <input
                      type="email"
                      className="input input-bordered w-full"
                      value={formState.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      name="email"
                      required
                    />
                  </label>
                </div>

                <label className="form-control w-full flex flex-col gap-1">
                  <span className="label-text text-sm text-base-content/70">
                    What do you need help with?
                  </span>
                  <select
                    className="select select-bordered w-full"
                    value={formState.help}
                    onChange={(event) => handleChange("help", event.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {helpOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="form-control w-full flex flex-col gap-1">
                  <span className="label-text text-sm text-base-content/70">
                    Project details
                  </span>
                  <textarea
                    className="textarea textarea-bordered h-36 w-full"
                    value={formState.details}
                    onChange={(event) =>
                      handleChange("details", event.target.value)
                    }
                    name="details"
                    required
                  />
                </label>
                <div className="space-y-3 pt-1">
                  <button
                    className="btn btn-primary btn-wide"
                    type="submit"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-error">{statusMessage}</p>
                  )}
                  <p className="text-xs text-base-content/60">
                    I usually respond within 1–2 business days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </PageCascade>
    );
  }
