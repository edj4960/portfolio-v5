"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

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

    console.log({ ...formState });
    setFormState(initialState);
    setErrors({});
    setToastVisible(true);

    window.setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div className="space-y-16">
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
          subtitle="If you have a Next.js project — whether it’s a new build from designs or debugging something urgent — I can help."
        />
        <div className="mt-8 space-y-2 text-sm text-base-content/70">
          <p>Email: evandj423@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/evan-d-jones/</p>
        </div>
      </section>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Send a message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={formState.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  required
                />
                {errors.name && (
                  <span className="mt-2 text-xs text-error">{errors.name}</span>
                )}
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={formState.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  required
                />
                {errors.email && (
                  <span className="mt-2 text-xs text-error">{errors.email}</span>
                )}
              </label>
            </div>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What do you need help with?</span>
              </div>
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
                <span className="mt-2 text-xs text-error">{errors.help}</span>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Project details</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-36 w-full"
                value={formState.details}
                onChange={(event) =>
                  handleChange("details", event.target.value)
                }
                required
              />
              {errors.details && (
                <span className="mt-2 text-xs text-error">
                  {errors.details}
                </span>
              )}
            </label>

            <div className="space-y-2">
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
    </div>
  );
}
