interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
        Section Overview
      </p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base text-base-content/70 md:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
