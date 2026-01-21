import Link from "next/link";
import WaveLottie from "@/components/WaveLottie";
import Image from "next/image";
import PageCascade from "@/components/PageCascade";

// const featuredWork = [
//   {
//     title: "Pixel-Perfect Build",
//     subtitle: "Design → Production Next.js Site",
//     description:
//       "A full marketing site implemented from a Figma design with accessible UI, responsive layout system, optimized images, and SEO.",
//     category: "Design Implementation",
//     href: "/work/pixel-perfect-build",
//     icon: (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 24 24"
//         className="h-4 w-4"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6 4h12v12H6z"
//         />
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6" />
//       </svg>
//     ),
//   },
//   {
//     title: "Production Debugging",
//     subtitle: "Fixing Real Next.js Issues",
//     description:
//       "A structured troubleshooting project showcasing solutions for hydration mismatches, caching bugs, env issues, and performance regressions.",
//     category: "Debugging",
//     href: "/work/nextjs-debugging",
//     icon: (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 24 24"
//         className="h-4 w-4"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M4 12h16M12 4v16"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "CMS Integration",
//     subtitle: "Modular Page Builder + Preview",
//     description:
//       "CMS-driven component architecture with schema validation, preview mode, editor-friendly structure, and clean separation of client/server concerns.",
//     category: "CMS Architecture",
//     href: "/work/cms-integration",
//     icon: (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 24 24"
//         className="h-4 w-4"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M4 7h16M4 12h10M4 17h13"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Search + Checkout",
//     subtitle: "Filtering + Checkout Flow",
//     description:
//       "Production-style implementation of faceted search and a clean checkout flow built with modern patterns and maintainable code structure.",
//     category: "Business Feature",
//     href: "/work/search-checkout",
//     icon: (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 24 24"
//         className="h-4 w-4"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M7 7h10v4H7z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6 11h12l-1 9H7l-1-9z"
//         />
//       </svg>
//     ),
//   },
// ];

const techStack = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "PHP / Laravel",
  "Oracle / MySQL",
  "ElasticSearch / Algolia",
  "Stripe",
  "ButterCMS",
];

const coreSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "SCSS",
  "Node.js",
  "PHP",
  "Laravel",
  "Oracle",
  "MySQL",
  "ElasticSearch",
  "Algolia",
  "Stripe",
];

const experience = [
  {
    company: "Traeger Grills",
    location: "Salt Lake City, UT",
    title: "Full Stack Developer II",
    dates: "Jan 2025 - Present",
    highlights: [
      "Built internal tooling to jump between site components and CMS edit pages.",
      "Led CMS schema management to reduce schema drift and deployment overhead.",
      "Standardized env validation and client/server boundaries.",
      "Shipped CMS tooling that accelerated content updates across brands.",
      "Recognized by leadership for reliable delivery and ownership.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Node",
      "Amplience CMS",
      "GitLab",
      "Shopify",
      "Zendesk",
    ],
  },
  {
    company: "Partner.Co",
    location: "American Fork, UT",
    title: "Full Stack Developer II",
    dates: "Sep 2021 - Present",
    highlights: [
      "Redesigned checkout flow to improve address and payment completion.",
      "Improved ElasticSearch integration for better accuracy and relevance.",
      "Built a faster product selection module with lazy loading.",
    ],
    tech: [
      "Next.js",
      "Vue",
      "JavaScript",
      "Laravel",
      "PHP",
      "ElasticSearch",
      "Oracle",
      "MySQL",
    ],
  },
  {
    company: "Storier",
    location: "Provo, UT",
    title: "Full Stack Developer",
    dates: "Apr 2021 - Sep 2021",
    highlights: [
      "Redesigned Storier.fm and integrated Algolia search.",
      "Built a 3-tier subscription flow with Stripe integration.",
      "Shipped the Storier app on schedule.",
    ],
    tech: ["React", "React Native", "Node.js", "Stripe", "Firebase", "Algolia"],
  },
  {
    company: "BYU Campus Accommodations",
    location: "Provo, UT",
    title: "Full Stack Developer",
    dates: "Apr 2019 - Apr 2021",
    highlights: [
      "Maintained Housing.byu.edu with bug fixes and new features.",
      "Promoted to Lead Developer and guided system architecture.",
    ],
    tech: ["ASP.NET", "VB.NET", "JavaScript", "jQuery", "Oracle"],
  },
];

export default function Home() {
  return (
    <PageCascade className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-base-300 bg-linear-to-br from-base-200/70 via-base-100 to-base-200/10 px-8 py-16 md:px-14 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-50 h-60 w-60 rounded-full bg-secondary/5 blur-3xl" />
        <div className="relative flex flex-col justify-center space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-ghost text-xs uppercase tracking-[0.3em] text-base-content/60">
              Full Stack Web Developer
            </span>
          </div>
          <div className="space-y-8">
            <h1 className="text-4xl font-semibold leading-snug tracking-tight md:text-6xl">
              I build Next.js websites.
            </h1>
            <div className="flex items-start gap-3">
              <span className="max-w-3xl text-xl leading-relaxed text-base-content/70 md:text-2xl">
                <WaveLottie className="inline-flex h-8 w-8 mr-2" />
                I’m{" "}
                <Link
                  href="/about"
                  className="relative font-semibold text-primary after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary/80 hover:after:scale-x-100"
                >
                  Evan
                </Link>
                , a Full Stack Web Developer specializing in Next.js
                + TypeScript. I help teams ship faster by building pixel-perfect UI
                from designs, fixing hard production bugs, improving performance,
                and implementing CMS-driven architecture.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary btn-wide">
              Let’s talk
            </Link>
            <Link href="/work" className="btn btn-outline btn-wide">
              View experience
            </Link>
          </div>
          <p className="text-sm text-base-content/60">
            5 years experience • Next.js • TypeScript • CMS • Search • Checkout
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-base-300/80 bg-base-100/60 px-8 py-12 md:px-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Focus areas</h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70">
            UI delivery, production debugging, and CMS/integration work.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card border border-base-300 bg-base-200/40 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/50 hover:shadow-lg">
            <div className="card-body gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">UI Delivery</h3>
                <p className="text-sm text-base-content/70">
                  Implement designs in Next.js with clean, reusable components.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Responsive layouts matched across breakpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Accessible components and interaction states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Reusable sections for iterative updates</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-200/40 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/50 hover:shadow-lg">
            <div className="card-body gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Debugging + Reliability</h3>
                <p className="text-sm text-base-content/70">
                  Fix production issues without disruptive rewrites.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Hydration and client/server boundary fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Caching, data consistency, and runtime diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Performance tuning and bundle cleanup</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-200/40 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/50 hover:shadow-lg">
            <div className="card-body gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">CMS + Integrations</h3>
                <p className="text-sm text-base-content/70">
                  CMS architecture and backend integrations.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Schema-driven sections and typed contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Preview workflows for editors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>Stripe, ElasticSearch, Algolia integrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-base-300/80 bg-base-200/30 px-8 py-12 md:px-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70">
            Recent roles and the work shipped.
          </p>
        </div>
        <div className="mt-10 grid gap-6">
          {experience.map((role) => (
            <div
              key={`${role.company}-${role.title}`}
              className="card border border-base-300 bg-base-100/70"
            >
              <div className="card-body gap-5 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-base-content/60">
                      {role.company} • {role.location}
                    </p>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                  </div>
                  <span className="text-xs text-base-content/60">
                    {role.dates}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-base-content/70">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                  Tech
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-base-content/70">
                  {role.tech.map((item) => (
                    <span key={item} className="badge badge-outline">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="grid gap-4 md:grid-cols-3">
        {[
          { top: "5 years", bottom: "Production web apps" },
          { top: "Full stack", bottom: "UI + backend integrations" },
          { top: "Next.js + TypeScript", bottom: "Primary stack" },
        ].map((item) => (
          <div
            key={item.top}
            className="rounded-2xl border border-base-300 bg-base-100/60 p-5 transition duration-200 hover:bg-base-200/50"
          >
            <p className="text-lg font-semibold">{item.top}</p>
            <p className="text-sm text-base-content/60">{item.bottom}</p>
          </div>
        ))}
      </section> */}

      {/* <section className="rounded-3xl border border-base-300/80 bg-base-100/60 px-8 py-12 md:px-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70">
            Tools used in recent roles.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Core</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((item) => (
                <span key={item} className="badge badge-outline px-4 py-3">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="badge badge-outline px-4 py-3 transition duration-200 hover:border-base-200 hover:bg-base-200/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      <section className="rounded-3xl border border-base-300/80 bg-base-200/30 px-8 py-12 md:px-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Recognition</h2>
          <p className="text-sm text-base-content/60">
            Feedback from past collaborators.
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          <div className="relative flex h-full flex-col rounded-2xl border border-base-300 bg-base-100 p-6">
            <div className="flex items-start gap-4">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-base-content/80">
                  “Evan is the legit Dev Ninja. He's a little quite and
                  unassuming, then out of nowhere he'll smash you in the face
                  with great work. He's very smart and works without complaint,
                  even on projects that no one is excited about. We can always
                  count on Evan to get projects done on time as well as finding
                  new methods for working better.”
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
                  Former collaborator
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex h-full flex-col rounded-2xl border border-base-300 bg-base-100 p-6">
            <div className="flex items-start gap-4">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-base-content/80">
                  “Evan is exactly the sort of person you want on your team. He
                  jumps in to every project with a positive attitude and brings
                  good ideas to the table. He doesn't shy away from difficult
                  tasks and approaches them thoughtfully. On top of all this, he
                  is just fun to have around.”
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
            Need help shipping or fixing a web app?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-base-content/70 md:text-lg">
            Share the details and I’ll outline next steps.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Let’s talk
            </Link>
            <Link href="/services" className="btn btn-outline btn-md">
              See services
            </Link>
          </div>
        </div>
      </section>
    </PageCascade>
  );
}
