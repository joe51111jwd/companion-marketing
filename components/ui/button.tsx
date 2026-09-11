import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "pill";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out " +
  "disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg border border-transparent shadow-[var(--shadow-card)] hover:bg-accent-hover",
  secondary:
    "bg-surface text-fg border border-border-strong shadow-[var(--shadow-card)] hover:border-fg-subtle",
  ghost: "bg-transparent text-fg-muted border border-transparent hover:bg-bg-subtle hover:text-fg",
  dark: "hero-cta-primary border-0 shadow-none active:translate-y-0",
  pill: "hero-cta-secondary border-0 shadow-none active:translate-y-0",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-[0.8125rem]",
  md: "h-10 px-6 text-[0.9375rem]",
  lg: "h-12 px-8 text-base",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, size, className)} {...props} />;
}
