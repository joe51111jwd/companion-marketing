import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "accent" | "quiet";
  className?: string;
};

const tones = {
  neutral: "border-border-strong text-fg-muted bg-surface",
  accent: "border-transparent text-accent bg-accent-soft",
  quiet: "border-border text-fg-subtle bg-transparent",
} as const;

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[0.75rem] font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("size-1.5 rounded-full bg-current opacity-60", className)}
    />
  );
}
