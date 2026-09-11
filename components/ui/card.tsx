import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "li" | "article";
  tone?: "surface" | "subtle" | "outline";
  padding?: "sm" | "md" | "lg";
};

const tones = {
  surface: "bg-surface border-border shadow-[var(--shadow-card)]",
  subtle: "bg-bg-subtle border-border",
  outline: "bg-transparent border-border",
} as const;

const paddings = {
  sm: "p-6",
  md: "p-8",
  lg: "p-8 sm:p-12",
} as const;

export function Card({
  as: Tag = "div",
  tone = "surface",
  padding = "md",
  className,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn("rounded-2xl border", tones[tone], paddings[padding], className)}
      {...props}
    />
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={cn("h3 text-fg", className)}>{children}</h3>;
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[0.9375rem] leading-relaxed text-fg-muted", className)}>{children}</p>
  );
}
