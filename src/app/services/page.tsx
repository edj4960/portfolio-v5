import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="Services"
          subtitle="Content coming next. Service lanes and scopes will be outlined here."
        />
        <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/50">
          <span className="badge badge-outline">Build</span>
          <span className="badge badge-outline">Debug</span>
          <span className="badge badge-outline">Optimize</span>
        </div>
      </section>

      <Section
        title="Core offerings"
        subtitle="Content coming next. Cards map to distinct engagement types."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Launch partner" description="Content coming next." variant="muted">
            <div className="flex items-center justify-between rounded-xl border border-dashed border-base-300 bg-base-100 px-4 py-3">
              <span className="text-xs uppercase tracking-[0.2em] text-base-content/60">
                2-4 weeks
              </span>
              <span className="text-sm text-base-content/70">Scope soon</span>
            </div>
          </Card>
          <Card title="Production rescue" description="Content coming next." variant="muted">
            <div className="flex items-center justify-between rounded-xl border border-dashed border-base-300 bg-base-100 px-4 py-3">
              <span className="text-xs uppercase tracking-[0.2em] text-base-content/60">
                1-2 weeks
              </span>
              <span className="text-sm text-base-content/70">Scope soon</span>
            </div>
          </Card>
          <Card title="Performance tune-up" description="Content coming next." variant="muted">
            <div className="flex items-center justify-between rounded-xl border border-dashed border-base-300 bg-base-100 px-4 py-3">
              <span className="text-xs uppercase tracking-[0.2em] text-base-content/60">
                3-5 days
              </span>
              <span className="text-sm text-base-content/70">Scope soon</span>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
