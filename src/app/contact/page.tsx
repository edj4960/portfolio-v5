"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageCascade from "@/components/PageCascade";

type FormState = {
  name: string;
  email: string;
  help: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastVisible, setToastVisible] = useState(false);

  const validate = (values: FormState) => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.help) {
      nextErrors.help = "Select an option.";
    }

    if (!values.details.trim()) {
      nextErrors.details = "Project details are required.";
    }

    return nextErrors;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formState);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = encodeURIComponent("Portfolio inquiry");
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nHelp needed: ${formState.help}\n\nDetails:\n${formState.details}`
    );
    window.location.href = `mailto:evandj423@gmail.com?subject=${subject}&body=${body}`;
    setFormState(initialState);
    setErrors({});
    setToastVisible(true);

    window.setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <PageCascade className="space-y-20">
      {toastVisible && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>Message sent (demo). I’ll get back to you soon.</span>
          </div>
        </div>
      )}

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
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
                  required
                />
                {errors.name && (
                  <span className="text-xs text-error">{errors.name}</span>
                )}
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
                  required
                />
                {errors.email && (
                  <span className="text-xs text-error">{errors.email}</span>
                )}
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
              {errors.help && (
                <span className="text-xs text-error">{errors.help}</span>
              )}
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
              {errors.details && (
                <span className="text-xs text-error">{errors.details}</span>
              )}
            </label>

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
