export default function Home() {
  return (
    <section className="space-y-16">
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-xs uppercase tracking-[0.3em] text-base-content/70">
          Next.js Studio
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Pixel-perfect builds and production rescue for ambitious teams.
        </h1>
        <p className="max-w-2xl text-lg text-base-content/70 md:text-xl">
          I help product teams ship faster with clean, accessible UI, deep
          debugging, and performance work that keeps your Next.js app steady in
          the real world.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary btn-wide">Start a project</button>
          <button className="btn btn-ghost btn-wide">View recent work</button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card border border-base-300 bg-base-200/40">
          <div className="card-body">
            <p className="text-sm uppercase tracking-[0.3em] text-base-content/60">
              Build
            </p>
            <h2 className="text-2xl font-semibold">Figma to production</h2>
            <p className="text-base-content/70">
              Precise, responsive layouts with a focus on accessibility and a
              consistent design system.
            </p>
          </div>
        </div>
        <div className="card border border-base-300 bg-base-200/40">
          <div className="card-body">
            <p className="text-sm uppercase tracking-[0.3em] text-base-content/60">
              Debug
            </p>
            <h2 className="text-2xl font-semibold">Production triage</h2>
            <p className="text-base-content/70">
              Resolve hydration issues, flaky builds, and layout drift with a
              measured troubleshooting workflow.
            </p>
          </div>
        </div>
        <div className="card border border-base-300 bg-base-200/40">
          <div className="card-body">
            <p className="text-sm uppercase tracking-[0.3em] text-base-content/60">
              Optimize
            </p>
            <h2 className="text-2xl font-semibold">Performance wins</h2>
            <p className="text-base-content/70">
              Bundle analysis, route-level tuning, and CMS strategies that keep
              Core Web Vitals solid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
