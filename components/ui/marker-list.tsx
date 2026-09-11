import { cn } from "@/lib/cn";

export function MarkerList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-muted"
        >
          <span aria-hidden="true" className="pt-[0.35em] text-fg-subtle">
            <span className="block h-px w-3 bg-current" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
