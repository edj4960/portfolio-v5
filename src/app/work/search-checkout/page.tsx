import Link from "next/link";

const badges = [
  "Next.js",
  "TypeScript",
  "Search",
  "Payments",
  "State management",
];

export default function SearchCheckoutPage() {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <Link href="/work" className="link link-hover">
          ← Back to Work
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Business Feature Build: Search + Checkout Flow
        </h1>
        <p className="max-w-3xl text-base text-base-content/70 md:text-lg">
          A production-style build demonstrating search/filtering and a
          monetization-ready flow.
        </p>
      </header>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-sm text-base-content/70">
              This demo case study shows how I approach search UX and checkout
              flows with maintainable patterns and reliable state handling.
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
                Show production patterns for search UX, filtering, and
                pagination.
              </li>
              <li>
                Build a checkout-ready flow that handles state, errors, and edge
                cases cleanly.
              </li>
              <li>
                Keep the UI responsive and fast under realistic data loads.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What I Built</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>Faceted filters with pagination and URL-synced state.</li>
              <li>
                A clean data-fetching layer and loading states that avoid UI
                jank.
              </li>
              <li>
                A checkout flow pattern with validation, error handling, and
                clear user feedback.
              </li>
              <li>
                Component patterns that keep complex UI manageable and testable.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Key Decisions</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Synced filters to the URL for shareable, debuggable search
                states.
              </li>
              <li>
                Designed the UI to handle empty states and partial data
                gracefully.
              </li>
              <li>
                Kept business logic separated from components to reduce
                complexity.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>Fast, predictable search interactions with clear UX states.</li>
              <li>Checkout UX that prioritizes clarity and error recovery.</li>
              <li>
                A maintainable foundation for expanding search and purchase
                features.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
        <p className="text-sm text-base-content/70">
          Next.js, TypeScript, Search patterns, Payments/checkout patterns
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
