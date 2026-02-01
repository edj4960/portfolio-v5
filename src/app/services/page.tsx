import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import PageCascade from "@/components/PageCascade";
import EmojiLottie from "@/components/EmojiLottie";

const services = [
  {
    title: "Design to Next.js",
    bestFor: "marketing sites, landing pages, storefronts, UI rebuilds",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "Design-accurate build from files",
      "Responsive layouts and reusable components",
      "SEO-ready structure",
      "Clean, maintainable code",
    ],
    deliverables: [
      "Next.js site/pages",
      "Component library + patterns",
      "Deployment-ready output",
    ],
    cta: "Check availability",
  },
  {
    title: "Next.js Rescue",
    bestFor: "broken builds, urgent bugs, weird production behavior",
    whatYouGetLabel: "What I handle",
    whatYouGet: [
      "Hydration issues",
      "Broken builds",
      "Caching issues + stale content fixes",
      "Perf bottlenecks + bundle bloat",
    ],
    deliverables: [
      "Fix PR(s)",
      "Root cause summary + prevention steps",
      "Optional cleanup/refactor plan",
    ],
    cta: "Request Debug Help",
  },
  {
    title: "CMS, but sane",
    bestFor: "teams building editable websites",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "Schema-driven components",
      "CMS integrations and page builder setup",
      "Preview workflow",
      "Tools that cut dev/editor friction",
    ],
    extra:
      "I build content systems that stay steady: clear schemas, typed contracts, fewer surprises.",
    cta: "Discuss CMS Project",
  },
  {
    title: "Performance + SEO checkup",
    bestFor: "sites that load too slowly or don’t rank well",
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "Performance bottleneck review",
      "Bundle + dependency review",
      "SEO check (metadata, indexing, crawling)",
      "Prioritized plan",
    ],
    cta: "Request checkup",
  },
];

const faq = [
  {
    question: "How do engagements usually work?",
    answer:
      "We usually start with a short call or message, whichever you prefer. Then I’ll send over the project scope and timeline.",
  },
  {
    question: "Hourly or fixed scope?",
    answer:
      "Both. Audits and rescue work are typically billed hourly due to their fast-moving nature. Full builds can be done on a fixed scope or as an ongoing monthly retainer, depending on the project needs.",
  },
  {
    question: "How soon can you start?",
    answer:
      "If I’m open, I can start in 1–2 weeks. I’ll confirm timing after a quick call.",
  },
  {
    question: "Can you jump into an existing codebase?",
    answer:
      "Yes. I work in your repo, follow your workflow, and ship clean PRs with notes.",
  },
];

export default function ServicesPage() {
  return (
    <PageCascade className="space-y-20">
      <section className="p-10 border rounded-3xl border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 md:p-14">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-base-content/50">
            <span className="badge badge-ghost text-[11px]">Next.js</span>
            <span className="badge badge-ghost text-[11px]">UI Delivery</span>
            <span className="badge badge-ghost text-[11px]">Rescue Work</span>
            <span className="badge badge-ghost text-[11px]">CMS</span>
          </div>
          <PageHeader
            title="Services"
            subtitle="Focused help to ship UI, fix production issues, and modernize content systems."
          />
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              What I provide
            </h2>
            <EmojiLottie
              url="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/lottie.json"
              className="h-9 w-9"
              playDurationMs={3000}
            />
          </div>
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
                        <span className="flex-none w-2 h-2 mt-1 rounded-full bg-primary" />
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
                          <span className="flex-none w-2 h-2 mt-1 rounded-full bg-primary" />
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
            Common stuff people ask.
          </p>
        </div>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.question} className="border collapse collapse-arrow border-base-300 bg-base-100">
              <input type="checkbox" />
              <div className="text-base font-medium collapse-title">
                {item.question}
              </div>
              <div className="text-sm collapse-content text-base-content/70">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border card border-base-300 bg-base-200/40">
        <div className="space-y-2 card-body">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tell me about your project.
          </h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Send scope and I’ll reply with a plan.
          </p>
          <Link href="/contact" className="mt-2 btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </PageCascade>
  );
}
