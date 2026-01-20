import Link from "next/link";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";

// const caseStudies = [
//   {
//     title: "Pixel-Perfect Build: Design → Production Next.js Website",
//     summary:
//       "A complete implementation of a Figma design into a production-ready Next.js site with strong structure, reusable UI components, and performance-focused delivery.",
//     highlightsLabel: "Highlights",
//     highlights: [
//       "Pixel-perfect implementation from Figma",
//       "Responsive layout system built for reuse",
//       "Accessible components and focus states",
//       "SEO-ready structure using Next.js metadata",
//     ],
//     stack: "Next.js, TypeScript, CSS/SCSS, Component-driven architecture",
//     href: "/work/pixel-perfect-build",
//   },
//   {
//     title: "Production Debugging: Fixing 7 Real Next.js Issues",
//     summary:
//       "A debugging-focused project demonstrating how I isolate and fix common production problems in Next.js.",
//     highlightsLabel: "Problems solved",
//     highlights: [
//       "Hydration mismatch issues",
//       "Client/server boundary mistakes",
//       "Incorrect caching and stale content",
//       "Env configuration issues",
//       "Slow pages and bundle bloat",
//     ],
//     stack: "Next.js App Router, TypeScript, Runtime env validation patterns",
//     href: "/work/nextjs-debugging",
//   },
//   {
//     title: "CMS Integration: Schema-Driven Page Builder + Preview Mode",
//     summary:
//       "A CMS-driven architecture for building flexible pages with reusable components and strict schema validation.",
//     highlightsLabel: "Highlights",
//     highlights: [
//       "Modular content sections",
//       "Schema validation and clear content contracts",
//       "Preview workflow for editors",
//       "Patterns that keep client/server concerns safe",
//     ],
//     stack:
//       "Next.js, TypeScript, Headless CMS, Schema validation, Preview mode patterns",
//     href: "/work/cms-integration",
//   },
//   {
//     title: "Business Feature Build: Search + Checkout Flow",
//     summary:
//       "A production-style build demonstrating search/filtering and a monetization-ready flow.",
//     highlightsLabel: "Highlights",
//     highlights: [
//       "Faceted filtering + pagination patterns",
//       "UI performance and state management",
//       "Checkout flow implementation approach",
//       "Clean, maintainable code structure",
//     ],
//     stack: "Next.js, TypeScript, Search patterns, Payments/checkout patterns",
//     href: "/work/search-checkout",
//   },
// ];

// const microProjects = [
//   {
//     title: "Env Validation Starter (Next.js + TypeScript)",
//     description: "Runtime-safe env schema with strict public/server separation.",
//   },
//   {
//     title: "App Router Layout System Starter",
//     description: "Structured layout groups, loading states, reusable route organization.",
//   },
//   {
//     title: "Performance Clinic (Before/After)",
//     description:
//       "A documented approach to improving performance, bundle size, and real UX metrics.",
//   },
// ];

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
      "Contributed to hackathon initiatives and internal tooling.",
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
      "Automated ButterCMS and Bitbucket workflows.",
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
      "ButterCMS",
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
      "Implemented token-based book purchase allocation.",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      "Stripe",
      "Firebase",
      "Algolia",
      "SCSS",
      "Git",
    ],
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
    tech: [
      "ASP.NET",
      "VB.NET",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Oracle",
      "Git",
    ],
  },
];

const skills = [
  {
    label: "Front-end",
    items: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    label: "Back-end",
    items: [
      "Node.js",
      "PHP",
      "Laravel",
      "Perl",
      "ASP.NET",
      "VB.NET",
      "Oracle",
      "MySQL",
      "Firebase",
    ],
  },
  {
    label: "Other",
    items: ["Git", "ButterCMS", "ElasticSearch", "Algolia", "Stripe", "VSCode"],
  },
];

const education = {
  school: "Brigham Young University",
  location: "Provo, UT",
  degree: "B.S. in Computer Science",
  date: "Apr 2021",
};

export default function WorkPage() {
  return (
    <div className="space-y-20">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="Work"
          subtitle="Career experience and shipped work across full stack web applications."
        />
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
          <p className="max-w-3xl text-base text-base-content/70">
            Roles, impact, and technologies used.
          </p>
        </div>
        <div className="grid gap-8">
          {experience.map((role) => (
            <Card
              key={`${role.company}-${role.title}`}
              title={`${role.company} — ${role.title}`}
              description={`${role.location} • ${role.dates}`}
            >
              <div className="space-y-5 text-sm text-base-content/70">
                <ul className="space-y-2">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.tech.map((item) => (
                    <span key={item} className="badge badge-outline">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Core tools and platforms.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <Card
              key={skill.label}
              title={skill.label}
              variant="outline"
            >
              <div className="flex flex-wrap gap-2 text-sm text-base-content/70">
                {skill.items.map((item) => (
                  <span key={item} className="badge badge-outline">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-base-300 bg-base-200/40 p-10 md:p-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <p className="text-base text-base-content/70">
            {education.school} — {education.degree}
          </p>
          <p className="text-sm text-base-content/60">
            {education.location} • {education.date}
          </p>
          <Link href="/contact" className="btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
