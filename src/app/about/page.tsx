import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const strengths = [
  "Pixel-perfect UI builds from Figma",
  "Next.js debugging + troubleshooting",
  "Performance improvements",
  "CMS architecture and schema-driven content",
  "Checkout / search patterns",
  "Clean, scalable code structure",
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="About"
          subtitle="I’m Evan Jones — a Full Stack Web Developer with 5+ years of experience building production web apps."
        />
        <div className="mt-8 space-y-4 text-base text-base-content/70">
          <p>
            I focus on Next.js + TypeScript, and I specialize in two areas that
            teams often struggle to hire for: 1) building high-quality UIs from
            designs, and 2) diagnosing and fixing real production issues in
            existing Next.js apps.
          </p>
          <p>
            In production environments, I’ve also worked heavily on CMS
            workflows and developer tooling — the kind of improvements that make
            teams faster long-term (not just ‘get it working once’).
          </p>
          <p>
            I’m comfortable working independently, integrating quickly into
            existing teams, and taking full ownership of deliverables.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">What I’m best at</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {strengths.map((item) => (
            <li key={item} className="rounded-2xl border border-base-300 bg-base-200/40 p-4">
              <p className="text-sm text-base-content/80">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Recognition</h2>
          <p className="text-base text-base-content/70">
            I’ve been recognized for high ownership and consistent delivery —
            shipping on time while also improving workflows and introducing
            better patterns.
          </p>
        </div>
      </section>

      <section className="card border border-base-300 bg-base-200/40">
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Want to collaborate?
          </h2>
          <p className="text-base text-base-content/70">
            If you need help shipping or fixing a Next.js site, I can jump in
            quickly.
          </p>
          <Link href="/contact" className="btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
