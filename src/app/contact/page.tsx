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
        <section className="p-10 border rounded-3xl border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 md:p-14">
          <PageHeader
            title="Contact"
            subtitle="Reach out about roles, contracts, or projects."
          />
          <div className="mt-8 space-y-2 text-sm text-base-content/70">
            <p>
              Email:{" "}
            <a
              className="animated-link text-primary hover:text-primary/80"
              href="mailto:evandj423@gmail.com"
            >
              evandj423@gmail.com
            </a>
            </p>
            <p>
              LinkedIn:{" "}
            <a
              className="animated-link text-primary hover:text-primary/80"
              href="https://linkedin.com/in/evan-d-jones/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/evan-d-jones/
            </a>
            </p>
          </div>
        </section>

        <section className="border card border-base-300 bg-base-200/40">
          <div className="card-body space-y-7">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Send a message
              </h2>
            </div>
            {status === "success" ? (
              <div className="p-6 border rounded-2xl border-success/30 bg-success/10 text-success">
                <p className="text-lg font-semibold">{statusMessage}</p>
                <p className="mt-2 text-sm text-success/80">
                  I usually reply in 1–2 days.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="flex flex-col w-full gap-1 form-control">
                    <span className="text-sm label-text text-base-content/70">
                      Name
                    </span>
                    <input
                      type="text"
                      className="w-full input input-bordered"
                      value={formState.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      name="name"
                      required
                    />
                  </label>

                  <label className="flex flex-col w-full gap-1 form-control">
                    <span className="text-sm label-text text-base-content/70">
                      Email
                    </span>
                    <input
                      type="email"
                      className="w-full input input-bordered"
                      value={formState.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      name="email"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col w-full gap-1 form-control">
                  <span className="text-sm label-text text-base-content/70">
                    What do you need help with?
                  </span>
                  <select
                    className="w-full select select-bordered"
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

                <label className="flex flex-col w-full gap-1 form-control">
                  <span className="text-sm label-text text-base-content/70">
                    Project details
                  </span>
                  <textarea
                    className="w-full textarea textarea-bordered h-36"
                    value={formState.details}
                    onChange={(event) =>
                      handleChange("details", event.target.value)
                    }
                    name="details"
                    required
                  />
                </label>
                <div className="pt-1 space-y-3">
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
                    I usually reply in 1–2 days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </PageCascade>
    );
  }
