import { PRODUCT_NAME } from "@/lib/copy";

export function Wordmark({ muted = false }: { muted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Mark />
      <span
        className={`text-[0.9375rem] font-semibold tight ${muted ? "text-fg-muted" : "text-fg"}`}
      >
        {PRODUCT_NAME}
      </span>
    </span>
  );
}

export function Mark({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.75"
        y="0.75"
        width="18.5"
        height="18.5"
        rx="5.25"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      <rect x="5" y="7" width="10" height="1.75" rx="0.875" fill="currentColor" />
      <rect x="5" y="11.25" width="6" height="1.75" rx="0.875" fill="var(--accent)" />
    </svg>
  );
}
