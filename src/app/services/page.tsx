import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import PageCascade from "@/components/PageCascade";

const services = [
  {
    title: "Design → Next.js Build",
    bestFor: "marketing sites, landing pages, ecommerce front-ends, UI rebuilds",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "Pixel-perfect implementation from design files",
      "Responsive layouts and reusable components",
      "SEO-ready Next.js structure",
      "Clean code with scalable organization",
    ],
    deliverables: [
      "Next.js site/pages",
      "Component library + patterns",
      "Deployment-ready output",
    ],
    cta: "Contact for Availability",
  },
  {
    title: "Next.js Troubleshooting / Rescue",
    bestFor: "broken builds, urgent bugs, weird production behavior",
    whatYouGetLabel: "What I handle",
    whatYouGet: [
      "Hydration mismatches",
      "Broken builds",
      "Caching issues + stale content",
      "Performance bottlenecks and bundle bloat",
    ],
    deliverables: [
      "Fix PR(s)",
      "Written summary of root cause and prevention steps",
      "Optional cleanup/refactor plan",
    ],
    cta: "Request Debug Help",
  },
  {
    title: "CMS Architecture + Content Systems",
    bestFor: "teams building editable websites without chaos",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "Schema-driven component architecture",
      "CMS integrations and page builder setup",
      "Preview workflow",
      "Practical tooling to reduce dev/editor friction",
    ],
    extra:
      "I focus on content systems that stay stable over time: clear schemas, typed content contracts, and patterns that reduce production surprises.",
    cta: "Discuss CMS Project",
  },
  {
    title: "Next.js Performance + SEO Audit",
    bestFor: "sites that load too slowly or don’t rank well",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "Performance bottleneck analysis",
      "Bundle + dependency review",
      "SEO review (metadata, indexing, crawling)",
      "Clear prioritized plan",
    ],
    cta: "Request Audit",
  },
];

const faq = [
  {
    question: "Are you available for small jobs?",
    answer: "Yes, I take on small fixes as well as larger builds.",
  },
  {
    question: "Can you work inside an existing repo?",
    answer:
      "Yes. I’m comfortable joining existing workflows and shipping PRs cleanly.",
  },
  {
    question: "Do you do UI only, or full stack too?",
    answer:
      "Both. I’m full stack and can handle integrations and backend work, but I specialize in Next.js front-end architecture and production debugging.",
  },
];

export default function ServicesPage() {
  return (
    <PageCascade className="space-y-20">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 p-10 md:p-14">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-base-content/50">
            <span className="badge badge-ghost text-[11px]">Next.js</span>
            <span className="badge badge-ghost text-[11px]">UI Delivery</span>
            <span className="badge badge-ghost text-[11px]">Rescue Work</span>
            <span className="badge badge-ghost text-[11px]">CMS</span>
          </div>
          <PageHeader
            title="Services"
            subtitle="Focused engagements to ship UI, fix production issues, and modernize content systems."
          />
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            Service options
          </h2>
          <p className="max-w-3xl text-base text-base-content/70">
            Clear scopes and deliverables.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description="">
              <div className="space-y-6 text-sm text-base-content/70">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                    Best for
                  </p>
                  <p>{service.bestFor}</p>
                </div>
                <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                      {service.whatYouGetLabel}
                    </p>
                  <ul className="space-y-2">
                    {service.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {service.deliverables && (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-base-content/50">
                      Deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.extra && (
                  <p className="text-sm text-base-content/70">{service.extra}</p>
                )}
                <Link href="/contact" className="btn btn-primary btn-sm">
                  {service.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Common questions.
          </p>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.question} className="collapse collapse-arrow border border-base-300 bg-base-100">
              <input type="checkbox" />
              <div className="collapse-title text-base font-medium">
                {item.question}
              </div>
              <div className="collapse-content text-sm text-base-content/70">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Let’s talk about your project.
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Share the scope and I’ll suggest a plan.
          </p>
          <Link href="/contact" className="btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </PageCascade>
  );
}
