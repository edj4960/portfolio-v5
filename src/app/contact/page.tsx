import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="Contact"
          subtitle="Content coming next. A short form and availability details will live here."
        />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button className="btn btn-primary btn-wide">Start a project</button>
          <button className="btn btn-ghost btn-wide">Check availability</button>
        </div>
      </section>

      <Section
        title="Ways to connect"
        subtitle="Content coming next. Replace placeholders with real links."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Email" description="Content coming next." variant="outline">
            <div className="rounded-xl border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm text-base-content/70">
              hello@example.com
            </div>
          </Card>
          <Card title="LinkedIn" description="Content coming next." variant="outline">
            <div className="rounded-xl border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm text-base-content/70">
              linkedin.com/in/placeholder
            </div>
          </Card>
          <Card title="Scheduling" description="Content coming next." variant="outline">
            <div className="rounded-xl border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm text-base-content/70">
              Calendar link placeholder
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
