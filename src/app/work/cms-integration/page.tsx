import Link from "next/link";

const badges = [
  "Next.js",
  "TypeScript",
  "Headless CMS",
  "Schema validation",
  "Preview mode",
];

export default function CmsIntegrationPage() {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <Link href="/work" className="link link-hover">
          ← Back to Work
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          CMS Integration: Schema-Driven Page Builder + Preview Mode
        </h1>
        <p className="max-w-3xl text-base text-base-content/70 md:text-lg">
          A CMS-driven architecture for building flexible pages with reusable
          components and strict schema validation.
        </p>
      </header>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-sm text-base-content/70">
              This demo project shows how I design CMS-powered architecture so
              editors can move fast without breaking layout or content contracts.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="badge badge-outline">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">The Goal</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Create an editor-friendly system for assembling pages from
                modular sections.
              </li>
              <li>
                Keep content contracts strict to avoid runtime failures and
                broken layouts.
              </li>
              <li>
                Support preview workflows so changes can be reviewed before
                publishing.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What I Built</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                A library of CMS-driven content sections mapped to typed UI
                components.
              </li>
              <li>Schema validation to enforce required fields and safe defaults.</li>
              <li>
                Preview mode and draft rendering patterns for accurate editor
                previews.
              </li>
              <li>
                A clean separation of server data fetching and client
                interactions.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Key Decisions</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Used typed contracts to keep CMS content reliable across
                refactors.
              </li>
              <li>
                Designed components to fail gracefully when optional content is
                missing.
              </li>
              <li>
                Structured the app so content rendering remains fast and
                cache-friendly.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Editors can build pages without engineering support for every
                layout change.
              </li>
              <li>
                Fewer runtime issues due to strict validation and clear content
                contracts.
              </li>
              <li>
                A scalable foundation for expanding page types and shared
                sections.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
        <p className="text-sm text-base-content/70">
          Next.js, TypeScript, Headless CMS, Schema validation, Preview mode
          patterns
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Links</h2>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="btn btn-primary btn-wide">
            Live Demo (Placeholder)
          </a>
          <a href="#" className="btn btn-ghost btn-wide">
            GitHub Repo (Placeholder)
          </a>
        </div>
      </section>
    </div>
  );
}
