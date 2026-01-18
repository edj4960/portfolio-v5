import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function WorkPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/10 p-10 md:p-14">
        <PageHeader
          title="Work"
          subtitle="Content coming next. Highlights and case studies will live here once the archive is curated."
        />
        <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/50">
          <span className="badge badge-outline">Launches</span>
          <span className="badge badge-outline">Refactors</span>
          <span className="badge badge-outline">Scale-ups</span>
        </div>
      </section>

      <Section
        title="Selected case studies"
        subtitle="Content coming next. Each card will link to a detailed breakdown."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Product rebuild"
            description="Content coming next."
            variant="outline"
          >
            <div className="h-28 rounded-xl border border-dashed border-base-300 bg-base-200/50" />
          </Card>
          <Card
            title="Performance sprint"
            description="Content coming next."
            variant="outline"
          >
            <div className="h-28 rounded-xl border border-dashed border-base-300 bg-base-200/50" />
          </Card>
          <Card
            title="Design system rollout"
            description="Content coming next."
            variant="outline"
          >
            <div className="h-28 rounded-xl border border-dashed border-base-300 bg-base-200/50" />
          </Card>
        </div>
      </Section>
    </div>
  );
}
