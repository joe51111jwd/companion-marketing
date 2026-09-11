import { cn } from "@/lib/cn";
import type { MenuBarStatus, RailStatus, StepStatus } from "@/lib/status-language";

type PipKind = MenuBarStatus | RailStatus;

export function StatusMark({
  kind,
  label,
  className,
}: {
  kind: PipKind;
  /** Accessible name. Omit for decorative marks (aria-hidden). */
  label?: string;
  className?: string;
}) {
  const showCheck = kind === "done";
  return (
    <span
      className={cn("status-mark", `is-${kind}`, className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      {showCheck ? <CheckGlyph /> : null}
    </span>
  );
}

export function StepMark({
  index,
  state,
}: {
  index: number;
  state: StepStatus;
}) {
  return (
    <span className={cn("step-mark", `is-${state}`)} data-step-status={state} aria-hidden="true">
      {state === "finished" ? <CheckGlyph /> : <span>{index + 1}</span>}
    </span>
  );
}

function CheckGlyph() {
  return (
    <svg viewBox="0 0 12 12" width="8" height="8" fill="none" aria-hidden="true">
      <path
        d="M2.4 6.2 4.9 8.7 9.6 3.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
