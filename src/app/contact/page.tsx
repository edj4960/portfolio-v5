  "use client";

  import { useMemo, useState } from "react";
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

  const GETFORM_ENDPOINT = "https://evandj423.getform.com/4zd1r";

  const helpOptions = [
    "Build from designs",
    "Debugging / troubleshooting",
    "CMS integration",
    "Performance / SEO",
    "Other",
  ];

  export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>(initialState);

    const composedMessage = useMemo(
      () => `Help needed: ${formState.help}\n\n${formState.details}`,
      [formState.details, formState.help]
    );

    const handleChange = (field: keyof FormState, value: string) => {
      setFormState((prev) => ({ ...prev, [field]: value }));
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
                This form opens your email client with the details pre-filled.
              </p>
            </div>
            <form
              className="space-y-6"
              action={GETFORM_ENDPOINT}
              method="POST"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="form-control w-full gap-2">
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

                <label className="form-control w-full gap-2">
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

              <label className="form-control w-full gap-2">
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

              <label className="form-control w-full gap-2">
                <span className="label-text text-sm text-base-content/70">
                  Project details
                </span>
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  value={formState.details}
                  onChange={(event) =>
                    handleChange("details", event.target.value)
                  }
                  required
                />
              </label>
              <input type="hidden" name="message" value={composedMessage} />

              <div className="space-y-3 pt-1">
                <button className="btn btn-primary btn-wide" type="submit">
                  Send Message
                </button>
                <p className="text-xs text-base-content/60">
                  I usually respond within 1–2 business days.
                </p>
              </div>
            </form>
          </div>
        </section>
      </PageCascade>
    );
  }
