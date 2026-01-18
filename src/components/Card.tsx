import type { ReactNode } from "react";

type CardVariant = "default" | "outline" | "muted";

const variantStyles: Record<CardVariant, string> = {
  default: "bg-base-200/40",
  outline: "border border-base-300 bg-base-100",
  muted: "border border-base-300 bg-base-200/70",
};

interface CardProps {
  title: string;
  description: string;
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
    <div className={`card ${variantStyles[variant]}`}>
      <div className="card-body gap-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-base-content/70">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
