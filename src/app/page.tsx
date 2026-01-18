import Link from "next/link";

const featuredWork = [
  {
    title: "Pixel-Perfect Build: Design → Production Next.js Site",
    description:
      "A full marketing site implemented from a Figma design with accessible UI, responsive layout system, optimized images, and SEO.",
    category: "Design Implementation",
    href: "/work/pixel-perfect-build",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 4h12v12H6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6" />
      </svg>
    ),
  },
  {
    title: "Production Debugging: Fixing Real Next.js Issues",
    description:
      "A structured troubleshooting project showcasing solutions for hydration mismatches, caching bugs, env issues, and performance regressions.",
    category: "Debugging",
    href: "/work/nextjs-debugging",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12h16M12 4v16"
        />
      </svg>
    ),
  },
  {
    title: "CMS Integration: Modular Page Builder + Preview Workflow",
    description:
      "CMS-driven component architecture with schema validation, preview mode, editor-friendly structure, and clean separation of client/server concerns.",
    category: "CMS Architecture",
    href: "/work/cms-integration",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7h16M4 12h10M4 17h13"
        />
      </svg>
    ),
  },
  {
    title: "Business Feature Build: Search + Filtering + Checkout Flow",
    description:
      "Production-style implementation of faceted search and a clean checkout flow built with modern patterns and maintainable code structure.",
    category: "Business Feature",
    href: "/work/search-checkout",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 7h10v4H7z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 11h12l-1 9H7l-1-9z"
        />
      </svg>
    ),
  },
];

const techStack = [
  "Next.js (App Router)",
  "TypeScript",
  "React",
  "Node.js",
  "CMS architecture (schema-driven content)",
  "Stripe integrations",
  "Search: Algolia / ElasticSearch patterns",
  "Git workflows and modern CI pipelines",
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/70 via-base-100 to-base-200/10 px-8 py-14 md:px-14">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-outline">Limited availability — evenings/weekends</span>
            <span className="badge badge-ghost text-xs uppercase tracking-[0.3em] text-base-content/60">
              Full Stack Next.js Developer
            </span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              I build and rescue production Next.js websites.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-base-content/70 md:text-xl">
              I’m Evan Jones — a Full Stack Web Developer specializing in Next.js
              + TypeScript. I help teams ship faster by building pixel-perfect UI
              from designs, fixing hard production bugs, improving performance,
              and implementing CMS-driven architecture.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary btn-wide">
              Let’s talk
            </Link>
            <Link href="/work" className="btn btn-outline btn-wide">
              View work
            </Link>
          </div>
          <p className="text-sm text-base-content/60">
            5+ years shipping production web apps • Next.js • TypeScript • CMS
            workflows • Checkout/search systems
          </p>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">What I do</h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70">
            Conversion-focused execution across builds, production fixes, and
            CMS-driven systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card border border-base-300 bg-base-200/40">
            <div className="card-body gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Build from Designs</h3>
                <p className="text-sm text-base-content/70">
                  Pixel-perfect Figma → Next.js builds that ship fast.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Responsive layouts that match the design across breakpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Accessible components with clean interaction states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Reusable sections built for iteration</span>
                </li>
              </ul>
              <Link href="/services" className="link link-hover text-sm">
                Learn more
              </Link>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-200/40">
            <div className="card-body gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Debug + Troubleshoot</h3>
                <p className="text-sm text-base-content/70">
                  Fix production issues without risky rewrites.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Hydration + client/server boundary fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Caching, data consistency, and runtime issue diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Performance improvements and bundle cleanup</span>
                </li>
              </ul>
              <Link href="/services" className="link link-hover text-sm">
                Learn more
              </Link>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-200/40">
            <div className="card-body gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">CMS + Content Systems</h3>
                <p className="text-sm text-base-content/70">
                  CMS-driven sites that editors actually enjoy using.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Schema-driven sections and typed content contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Preview workflows and safe defaults</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Patterns that reduce production surprises</span>
                </li>
              </ul>
              <Link href="/services" className="link link-hover text-sm">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Featured work</h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70">
            Here are a few projects that represent the kind of work I take on
            most often — builds from designs, CMS systems, and production
            debugging.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredWork.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-base-300 bg-base-100 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60">
                <span className="inline-flex items-center gap-2">
                  {project.icon}
                  {project.category}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-base-content/70">
                  {project.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  View case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-base-300 bg-base-200/40 px-6 py-5">
        <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70">
          <span>5+ years in production web apps</span>
          <span className="hidden h-1 w-1 rounded-full bg-base-content/40 sm:inline-block" />
          <span>Next.js + TypeScript specialist</span>
          <span className="hidden h-1 w-1 rounded-full bg-base-content/40 sm:inline-block" />
          <span>Workflow + reliability improvements through tooling</span>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Tech I work with</h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70">
            Tools and patterns used across production builds, feature work, and
            platform rescue projects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Specialties</h3>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                <span>App Router architecture (RSC and client boundaries)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                <span>Hydration + caching debugging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                <span>CMS-driven layout systems + schema validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                <span>Performance tuning (bundle, LCP, loading states)</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span key={item} className="badge badge-outline px-4 py-3">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            Recognition &amp; feedback
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative rounded-2xl border border-base-300 bg-base-100 p-6">
            <span className="absolute right-6 top-6 text-5xl text-base-content/10">
              “
            </span>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-base-300 bg-base-200 text-sm font-semibold">
                FC
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-base-content/80">
                  “We can always count on Evan to get projects done on time as
                  well as finding new methods for working better.”
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
                  Former collaborator
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl border border-base-300 bg-base-100 p-6">
            <span className="absolute right-6 top-6 text-5xl text-base-content/10">
              “
            </span>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-base-300 bg-base-200 text-sm font-semibold">
                PL
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-base-content/80">
                  “He jumps in to every project with a positive attitude and
                  brings good ideas to the table… approaches [difficult tasks]
                  thoughtfully.”
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
                  Former collaborator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 px-8 py-12 md:px-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Have a Next.js site that needs shipping or fixing?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70 md:text-lg">
            Share your designs, the repo, or the blocker — I’ll suggest the
            fastest path to a clean solution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary btn-wide">
              Let’s talk
            </Link>
            <Link href="/services" className="btn btn-outline btn-wide">
              See services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
