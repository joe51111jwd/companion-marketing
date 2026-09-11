import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "subtle";
  align?: "start" | "center";
  container?: "page" | "prose";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "default",
  align = "start",
  container = "page",
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      aria-label={!title && eyebrow ? eyebrow : undefined}
      className={cn(
        "scroll-mt-24 border-t border-border py-16 sm:py-24",
        tone === "subtle" && "bg-bg-subtle",
        className,
      )}
    >
      <div className={container === "prose" ? "container-prose" : "container-page"}>
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-12 max-w-[64ch]",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <h2 id={headingId} className="h2 text-fg">
                {title}
              </h2>
            )}
            {description && <p className="lede mt-4">{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
