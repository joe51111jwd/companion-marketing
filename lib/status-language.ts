/**
 * Color / state helpers for the locked status language.
 *
 * User-visible status words come from STATUS (copy/canonical.json → web/lib/canonical.ts).
 * This file must not invent parallel Observing / Needs permission / Tried it strings.
 *
 * Colors: soft blue = alive; amber = needs the person; green = finished Try-it only;
 * gray = idle / seen. Never a green fill or green check for idle observing.
 */

import { STATUS } from "./canonical";

export type MenuBarStatus =
  | "idle"
  | "setup"
  | "observing"
  | "digest-ready"
  | "needs-you"
  | "done";

export type RailStatus = "selected" | "unread" | "seen" | "done";
export type StepStatus = "todo" | "current" | "complete" | "finished";

export type DigestPanelKind =
  | "access"
  | "notification"
  | "item"
  | "walkthrough"
  | "followup";

/** Live-proof / Access grant path. Granted is the only phase that may show Observing. */
export type GrantPhase = "setup" | "asking" | "granted";

export function menuBarLabel(kind: MenuBarStatus): string {
  switch (kind) {
    case "idle":
      return STATUS.notObserving;
    case "setup":
      return STATUS.setupNeeded;
    case "observing":
      return STATUS.observing;
    case "digest-ready":
      return STATUS.digestReady;
    case "needs-you":
      return STATUS.needsPermission;
    case "done":
      return STATUS.tryItDone;
  }
}

/**
 * Digest rail a11y — match Mac `DigestPipView`.
 * Selected / New / Seen are list-pip names, not menu-bar STATUS labels.
 */
export function railLabel(kind: RailStatus): string {
  switch (kind) {
    case "selected":
      return "Selected";
    case "unread":
      return "New";
    case "seen":
      return "Seen";
    case "done":
      return STATUS.tryItDone;
  }
}

/**
 * Menu-bar / live-proof chip.
 * Missing grants never return observing or digest-ready.
 * Try-it finished wins (green check) even if grants were revoked.
 */
export function menuBarStatusForPanel(
  kind: DigestPanelKind | string,
  grantPhase: GrantPhase = "granted",
): MenuBarStatus {
  if (kind === "followup") return "done";
  if (grantPhase === "setup") return "setup";
  if (grantPhase !== "granted") return "needs-you";
  if (kind === "notification") return "digest-ready";
  return "observing";
}

/** Live-proof chip. Never Observing unless grants exist. */
export function liveProofChipKind(
  canCapture: boolean,
): Extract<MenuBarStatus, "observing" | "needs-you"> {
  return canCapture ? "observing" : "needs-you";
}

/**
 * Digest rail pips.
 * Orange = selected, blue = unread, gray = seen, green check = Try-it done
 * (the walkthrough row, once the Wednesday follow-up is open).
 */
export function railStatusForStep(
  index: number,
  current: number,
  tryItIndex: number,
  followupIndex: number,
): RailStatus {
  if (index === tryItIndex && followupIndex >= 0 && current >= followupIndex) {
    return "done";
  }
  if (index === current) return "selected";
  if (index < current) return "seen";
  return "unread";
}

/**
 * Try-it steps: numbered hollow → blue fill on completed (not last) →
 * green check only on the last step when it is itself complete.
 */
export function tryItStepStatus(
  stepIndex: number,
  filledCount: number,
  total: number,
): StepStatus {
  if (stepIndex < 0 || total <= 0 || stepIndex >= total) return "todo";
  if (stepIndex < filledCount) {
    return stepIndex === total - 1 ? "finished" : "complete";
  }
  if (stepIndex === filledCount) return "current";
  return "todo";
}
