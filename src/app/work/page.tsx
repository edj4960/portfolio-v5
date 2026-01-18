import Link from "next/link";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";

const caseStudies = [
  {
    title: "Pixel-Perfect Build: Design → Production Next.js Website",
    summary:
      "A complete implementation of a Figma design into a production-ready Next.js site with strong structure, reusable UI components, and performance-focused delivery.",
    highlightsLabel: "Highlights",
    highlights: [
      "Pixel-perfect implementation from Figma",
      "Responsive layout system built for reuse",
      "Accessible components and focus states",
      "SEO-ready structure using Next.js metadata",
    ],
    stack: "Next.js, TypeScript, CSS/SCSS, Component-driven architecture",
    href: "/work/pixel-perfect-build",
  },
  {
    title: "Production Debugging: Fixing 7 Real Next.js Issues",
    summary:
      "A debugging-focused project demonstrating how I isolate and fix common production problems in Next.js.",
    highlightsLabel: "Problems solved",
    highlights: [
      "Hydration mismatch issues",
      "Client/server boundary mistakes",
      "Incorrect caching and stale content",
      "Env configuration issues",
      "Slow pages and bundle bloat",
    ],
    stack: "Next.js App Router, TypeScript, Runtime env validation patterns",
    href: "/work/nextjs-debugging",
  },
  {
    title: "CMS Integration: Schema-Driven Page Builder + Preview Mode",
    summary:
      "A CMS-driven architecture for building flexible pages with reusable components and strict schema validation.",
    highlightsLabel: "Highlights",
    highlights: [
      "Modular content sections",
      "Schema validation and clear content contracts",
      "Preview workflow for editors",
      "Patterns that keep client/server concerns safe",
    ],
    stack:
      "Next.js, TypeScript, Headless CMS, Schema validation, Preview mode patterns",
    href: "/work/cms-integration",
  },
  {
    title: "Business Feature Build: Search + Checkout Flow",
    summary:
      "A production-style build demonstrating search/filtering and a monetization-ready flow.",
    highlightsLabel: "Highlights",
    highlights: [
      "Faceted filtering + pagination patterns",
      "UI performance and state management",
      "Checkout flow implementation approach",
      "Clean, maintainable code structure",
    ],
    stack: "Next.js, TypeScript, Search patterns, Payments/checkout patterns",
    href: "/work/search-checkout",
  },
];

const microProjects = [
  {
    title: "Env Validation Starter (Next.js + TypeScript)",
    description: "Runtime-safe env schema with strict public/server separation.",
  },
  {
    title: "App Router Layout System Starter",
    description: "Structured layout groups, loading states, reusable route organization.",
  },
  {
    title: "Performance Clinic (Before/After)",
    description:
      "A documented approach to improving performance, bundle size, and real UX metrics.",
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-20">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="Work"
          subtitle="A selection of Next.js-focused projects built to reflect the type of freelance and contract work I do: design builds, debugging, CMS architecture, and production features."
        />
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Case studies</h2>
          <p className="max-w-3xl text-base text-base-content/70">
            Deep dives into production builds, debugging work, and systems-level
            improvements.
          </p>
        </div>
        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} title={study.title} description={study.summary}>
              <div className="space-y-5 text-sm text-base-content/70">
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline">Case Study</span>
                  <span className="badge badge-outline">Next.js</span>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                    {study.highlightsLabel}
                  </p>
                  <ul className="space-y-2">
                    {study.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                  Stack
                </p>
                <p>{study.stack}</p>
                <Link href={study.href} className="btn btn-primary btn-sm">
                  View Case Study
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            Micro Projects (Quick Proof)
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Quick experiments and build kits that show the same quality and
            system thinking in smaller packages.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {microProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              variant="outline"
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-base-300 bg-base-200/40 p-10 md:p-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Want to see something specific?
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            If you have a project in mind, I can share relevant examples or walk
            through the approach.
          </p>
          <Link href="/contact" className="btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
