import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
        Section Overview
      </p>
      <div className="flex items-center gap-3">
        {icon ? <span className="inline-flex h-10 w-10">{icon}</span> : null}
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
      </div>
      <p className="max-w-2xl text-base text-base-content/70 md:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
