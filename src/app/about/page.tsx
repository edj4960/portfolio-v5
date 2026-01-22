import Image from "next/image";
import Link from "next/link";
import PageCascade from "@/components/PageCascade";

const strengths = [
  "Next.js, TypeScript, JavaScript",
  "React, HTML, CSS, SCSS, Bootstrap",
  "Node.js, PHP, Laravel",
  "Oracle, MySQL, Firebase",
  "ElasticSearch, Algolia, Stripe",
  "Git, ButterCMS",
];

const focusAreas = [
  {
    title: "CMS + tooling",
    description: "Schema management, previews, and editor-friendly workflows.",
  },
  {
    title: "Commerce flows",
    description: "Checkout, search, and data-driven UI optimization.",
  },
  {
    title: "Full stack delivery",
    description: "Frontend UI paired with API and data integrations.",
  },
];

export default function AboutPage() {
  return (
    <PageCascade className="space-y-16">
      <section className="relative overflow-hidden rounded-[32px] border border-base-300 bg-base-100/70 px-8 py-12 md:px-12 lg:px-14">
        <div className="absolute right-0 w-48 h-48 rounded-full pointer-events-none -top-24 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 w-40 h-40 rounded-full pointer-events-none left-10 bg-secondary/10 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="space-y-4">
            <div className="w-full max-w-sm p-3 mx-auto border rounded-3xl border-base-300/80 bg-base-200/40 md:mx-0">
              <Image
                src="/profile.jpeg"
                alt="Evan Jones"
                width={700}
                height={880}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline">Vineyard, UT</span>
              <span className="badge badge-outline">5 years experience</span>
              <span className="badge badge-outline">Full stack</span>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
              About
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Full Stack Web Developer focused on clean UI and reliable
              integrations.
            </h1>
            <div className="space-y-4 text-base text-base-content/70">
              <p>
                I build and maintain web applications across front-end and
                back-end stacks, with a focus on Next.js, TypeScript, and
                CMS-driven sites.
              </p>
              <p>
                Recent work includes CMS tooling, checkout, and
                internal productivity tools.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 border rounded-2xl border-base-300 bg-base-200/40">
                <p className="text-xs uppercase tracking-[0.25em] text-base-content/60">
                  Now
                </p>
                <p className="text-sm text-base-content/80">
                  Full Stack Developer II
                </p>
              </div>
              <div className="p-4 border rounded-2xl border-base-300 bg-base-200/40">
                <p className="text-xs uppercase tracking-[0.25em] text-base-content/60">
                  Open to
                </p>
                <p className="text-sm text-base-content/80">
                  Part Time and Contract Roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-start">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Toolkit</h2>
          <p className="text-base text-base-content/70">
            Technologies used across recent roles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {strengths.map((item) => (
            <span key={item} className="px-4 py-3 text-sm badge badge-outline">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {focusAreas.map((area, index) => (
          <div
            key={area.title}
            className={`rounded-3xl border border-base-300 bg-base-100/70 p-6 ${
              index === 1 ? "lg:translate-y-6" : ""
            }`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-base-content/60">
              {area.title}
            </p>
            <p className="mt-3 text-base text-base-content/70">
              {area.description}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-[28px] border border-base-300 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/10 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want to collaborate?
            </h2>
            <p className="text-base text-base-content/70">
              If you have a role or project, let’s connect.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </PageCascade>
  );
}
