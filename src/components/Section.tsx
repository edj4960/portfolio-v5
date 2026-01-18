import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function Section({ children, title, subtitle }: SectionProps) {
  return (
    <section className="space-y-8">
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-2xl text-sm text-base-content/60 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
