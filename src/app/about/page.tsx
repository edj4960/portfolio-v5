import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageCascade from "@/components/PageCascade";

const strengths = [
  "Next.js, TypeScript, JavaScript",
  "React, HTML, CSS, SCSS, Bootstrap",
  "Node.js, PHP, Laravel",
  "Oracle, MySQL, Firebase",
  "ElasticSearch, Algolia, Stripe",
  "Git, ButterCMS",
];

export default function AboutPage() {
  return (
    <PageCascade className="space-y-20">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/60 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="About"
          subtitle="I’m Evan Jones — a Full Stack Web Developer with 5 years of experience."
        />
        <div className="mt-8 space-y-4 text-base text-base-content/70">
          <p>
            I build and maintain web applications across front-end and back-end
            stacks, with a focus on Next.js, TypeScript, and CMS-driven sites.
          </p>
          <p>
            My recent work includes CMS tooling, checkout and search flows, and
            internal productivity tools.
          </p>
          <p>
            I’m based in Vineyard, UT and open to full-time or contract work.
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
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Want to collaborate?
          </h2>
          <p className="text-base text-base-content/70">
            If you have a role or project, let’s connect.
          </p>
          <Link href="/contact" className="btn btn-primary btn-wide">
            Contact Me
          </Link>
        </div>
      </section>
    </PageCascade>
  );
}
