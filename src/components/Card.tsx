import type { ReactNode } from "react";

type CardVariant = "default" | "outline" | "muted";

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-base-200/80 border-base-300/70 shadow-sm hover:shadow-md",
  outline:
    "bg-transparent border-base-300/80 ring-1 ring-base-200/60 hover:bg-base-100/60",
  muted:
    "bg-base-200/60 border-base-200/70 border-dashed text-base-content/80",
};

interface CardProps {
  title: string;
  description?: string;
  variant?: CardVariant;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  variant = "default",
  children,
}: CardProps) {
  return (
    <div
      className={`card border transition duration-200 hover:-translate-y-0.5 ${variantStyles[variant]}`}
    >
      <div className="card-body gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {description ? (
            <p className="text-sm text-base-content/70">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
