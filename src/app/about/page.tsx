import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="About"
          subtitle="Content coming next. Background, process, and philosophy will live here."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-base-300 bg-base-100/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-base-content/60">
              Focus
            </p>
            <p className="mt-2 text-sm text-base-content/70">Content coming next.</p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-base-content/60">
              Values
            </p>
            <p className="mt-2 text-sm text-base-content/70">Content coming next.</p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-base-content/60">
              Tooling
            </p>
            <p className="mt-2 text-sm text-base-content/70">Content coming next.</p>
          </div>
        </div>
      </section>

      <Section
        title="Snapshot"
        subtitle="Content coming next. Short-form bio and timeline highlights."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Bio" description="Content coming next." variant="outline" />
          <Card
            title="Timeline"
            description="Content coming next."
            variant="outline"
          >
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-4 rounded-full border border-dashed border-base-300 bg-base-200/40"
                />
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
