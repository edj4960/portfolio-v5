import Link from "next/link";
import Card from "@/components/Card";

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

const featuredWork = [
  {
    title: "Pixel-Perfect Build: Design → Production Next.js Site",
    description:
      "A full marketing site implemented from a Figma design with accessible UI, responsive layout system, optimized images, and SEO.",
    href: "/work#pixel-perfect-build",
  },
  {
    title: "Production Debugging: Fixing Real Next.js Issues",
    description:
      "A structured troubleshooting project showcasing solutions for hydration mismatches, caching bugs, env issues, and performance regressions.",
    href: "/work#production-debugging",
  },
  {
    title: "CMS Integration: Modular Page Builder + Preview Workflow",
    description:
      "CMS-driven component architecture with schema validation, preview mode, editor-friendly structure, and clean separation of client/server concerns.",
    href: "/work#cms-integration",
  },
  {
    title: "Business Feature Build: Search + Filtering + Checkout Flow",
    description:
      "Production-style implementation of faceted search and a clean checkout flow built with modern patterns and maintainable code structure.",
    href: "/work#search-and-checkout",
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 px-8 py-14 md:px-14">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.35em] text-base-content/60">
            Full Stack Next.js Developer
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              I build and rescue production Next.js websites.
            </h1>
            <p className="max-w-3xl text-lg text-base-content/70 md:text-xl">
              I’m Evan Jones — a Full Stack Web Developer specializing in Next.js
              + TypeScript. I help teams ship faster by building pixel-perfect UI
              from designs, fixing hard production bugs, improving performance,
              and implementing CMS-driven architecture.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/work" className="btn btn-primary btn-wide">
              View Work
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-wide">
              Contact Me
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
          <h2 className="text-3xl font-semibold tracking-tight">
            What I do
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Focused, production-ready work that keeps your Next.js stack steady
            and your UI polished.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Build from Designs"
            description="Design → Next.js implementation with clean, accessible UI, responsive systems, and a predictable build process."
          />
          <Card
            title="Debug + Troubleshoot"
            description="Fix broken Next.js apps, reduce regressions, and untangle performance or hydration issues in production."
          />
          <Card
            title="CMS + Content Systems"
            description="CMS-powered sites that editors actually enjoy using, with schema-driven content and clear authoring workflows."
          />
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured work
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Here are a few projects that represent the kind of work I take on
            most often — builds from designs, CMS systems, and production
            debugging.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredWork.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              variant="outline"
            >
              <Link href={project.href} className="btn btn-ghost btn-sm">
                Read Case Study
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            Tech I work with
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Tools and patterns used across production builds, feature work, and
            platform rescue projects.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((item) => (
            <span key={item} className="badge badge-outline px-4 py-3">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            What you get when you work with me
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-base-300 bg-base-200/40 p-6">
            <p className="text-base text-base-content/80">
              A fast start: I can step into existing codebases and contribute
              immediately
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-200/40 p-6">
            <p className="text-base text-base-content/80">
              Strong ownership: I take unclear problems and turn them into clear
              outcomes
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-200/40 p-6">
            <p className="text-base text-base-content/80">
              Production thinking: I focus on maintainability, performance, and
              real-world constraints
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-200/40 p-6">
            <p className="text-base text-base-content/80">
              High-quality UX: clean UI, clean interactions, and attention to
              detail
            </p>
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
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
            <p className="text-lg text-base-content/80">
              “We can always count on Evan to get projects done on time as well
              as finding new methods for working better.”
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-base-content/60">
              Former collaborator
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
            <p className="text-lg text-base-content/80">
              “He jumps in to every project with a positive attitude and brings
              good ideas to the table… approaches [difficult tasks]
              thoughtfully.”
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-base-content/60">
              Product lead
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 px-8 py-12 md:px-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Need help with a Next.js project?
          </h2>
          <p className="max-w-2xl text-base text-base-content/70 md:text-lg">
            Let’s talk about your roadmap, your blockers, and how I can help you
            ship with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary btn-wide">
              Contact Me
            </Link>
            <Link href="/services" className="btn btn-ghost btn-wide">
              See Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
