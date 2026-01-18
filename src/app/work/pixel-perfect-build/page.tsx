import Link from "next/link";

const badges = ["Next.js", "TypeScript", "Tailwind", "DaisyUI", "SEO"];

export default function PixelPerfectBuildPage() {
  return (
    <div className="space-y-20">
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <Link href="/work" className="link link-hover">
          ← Back to Work
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Pixel-Perfect Build: Design → Production Next.js Website
        </h1>
        <p className="max-w-3xl text-base text-base-content/70 md:text-lg">
          A complete implementation of a Figma design into a production-ready
          Next.js site with strong structure, reusable UI components, and
          performance-focused delivery.
        </p>
      </header>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-sm text-base-content/70">
              This demo project shows how I translate high-fidelity designs into
              production-ready Next.js experiences while keeping structure clean
              and reusable.
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
                Translate a high-fidelity design into a polished, responsive
                website without visual drift.
              </li>
              <li>Build reusable components that scale beyond a single page.</li>
              <li>Ship production-ready SEO and performance defaults.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What I Built</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                A reusable component system (hero, feature grids, pricing, FAQ,
                CTAs).
              </li>
              <li>
                Responsive layout patterns that match the design across
                breakpoints.
              </li>
              <li>
                SEO-ready metadata, OpenGraph tags, and a clean routing structure.
              </li>
              <li>
                Accessible UI states: focus rings, keyboard navigation, and
                consistent contrast.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Key Decisions</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Created a consistent spacing/typography scale to keep the UI
                cohesive across pages.
              </li>
              <li>
                Used Next.js image optimization and sensible loading behavior for
                a fast LCP.
              </li>
              <li>
                Kept components small and composable to reduce future redesign
                cost.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Pixel-consistent UI across common breakpoints with reusable
                sections.
              </li>
              <li>Fast-loading pages with optimized images and clean markup.</li>
              <li>
                A maintainable structure designed for iterative content changes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
        <p className="text-sm text-base-content/70">
          Next.js, TypeScript, Tailwind CSS, DaisyUI
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
