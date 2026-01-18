import Link from "next/link";

const badges = [
  "Next.js App Router",
  "TypeScript",
  "Debugging",
  "Runtime validation",
  "Performance",
];

export default function NextjsDebuggingPage() {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <Link href="/work" className="link link-hover">
          ← Back to Work
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Production Debugging: Fixing 7 Real Next.js Issues
        </h1>
        <p className="max-w-3xl text-base text-base-content/70 md:text-lg">
          A debugging-focused project demonstrating how I isolate and fix common
          production problems in Next.js.
        </p>
      </header>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-sm text-base-content/70">
              This demo case study shows a structured approach for diagnosing
              production issues and shipping targeted fixes without unnecessary
              rewrites.
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
                Demonstrate a repeatable approach to debugging production-grade
                Next.js issues.
              </li>
              <li>Fix root causes and add guardrails to prevent regressions.</li>
              <li>
                Improve performance and stability without unnecessary rewrites.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What I Built</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>A set of reproducible “broken scenarios” plus documented fixes.</li>
              <li>
                Examples for hydration mismatch resolution and client/server
                boundary corrections.
              </li>
              <li>Caching corrections to eliminate stale UI and inconsistent data.</li>
              <li>
                Bundle and render performance improvements with before/after
                notes.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Key Decisions</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Added env validation to fail fast with clear errors instead of
                mysterious runtime crashes.
              </li>
              <li>
                Moved server-only logic to server contexts and reduced client
                bundle weight.
              </li>
              <li>
                Used targeted fixes and tests/notes instead of broad refactors.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                Eliminated hydration mismatches and reduced client-side warnings.
              </li>
              <li>
                Improved reliability by preventing invalid runtime configuration.
              </li>
              <li>
                Reduced page load overhead by addressing bundle hotspots.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
        <p className="text-sm text-base-content/70">
          Next.js App Router, TypeScript, Runtime env validation patterns
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
