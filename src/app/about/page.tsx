import Image from "next/image";
import Link from "next/link";
import PageCascade from "@/components/PageCascade";

const principles = [
  "Craft with care: clean UI, accessible patterns, and thoughtful details.",
  "Keep it clear: simple plans, steady updates, and honest timelines.",
  "Own the outcome: I handle UI, data, and deployment so projects ship cleanly.",
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
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              About me
            </h1>
            <div className="space-y-4 text-base text-base-content/70">
              <p>
                Hi! I'm Evan,
              </p>
              <p>
                A full stack web developer specializing in building and
                shipping modern web applications with Next.js and TypeScript.
              </p>
              <p>
                I got into web development as a computer science major when I
                landed a job building the campus Housing site. I fell in
                love with the full stack nature of it: databases, deployments,
                and the UI all working together.
              </p>
              <p>
                Now many years later, I have had the priviledge of working on multiple
                ecommerce platforms, content management systems, and internal tools.
                Most recently, I have had the priviledge of leading web delivery for Traeger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-6 border rounded-3xl border-base-300 bg-base-100/70 md:p-8">
        <div className="mb-4 space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Principles</h2>
          <p className="text-base text-base-content/70">
            The way I approach work and collaboration.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-base-content/70">
          {principles.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex-none w-2 h-2 mt-1 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="p-6 border rounded-3xl border-base-300 bg-base-100/70 md:p-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Outside of work</h2>
          <p className="text-base text-base-content/70">
            Outside of work I enjoy activities like jogging on trails near Utah Lake, playing/composing piano music, and
            experimenting in the kitchen with new recipes.
          </p>
        </div>
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
