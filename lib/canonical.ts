// GENERATED from copy/canonical.json — do not edit
// Regenerate: node scripts/copy/gen.mjs   ·   Check: node scripts/copy/gen.mjs --check
// Target: web/lib/canonical.ts
//
// SPEC.md §8.10 — the notice, the README and the marketing page say the same
// sentences. Edit copy/canonical.json, never this file.

/** SPEC.md D14 — the product name has exactly one definition in this package. */
export const PRODUCT_NAME = "Companion";

export interface CanonicalPromise {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export interface CanonicalOptInException {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

/** SPEC.md §8.10 — the four sentences, in the order the spec lists them. */
export const TAGLINE = {
  readsText: "It reads text on screen in the apps you pick, every five minutes while you're working, and turns it into a short note like 'email · looks repetitive · 5 min.' Your screen never leaves your Mac.",
  neverRecords: "It never records audio, keystrokes, or your clipboard.",
  managerSees: "Your manager sees adoption numbers — never your screen, never titles, never descriptions. You can see exactly what they see.",
  pauseDelete: "Pause any time. Delete everything any time. We'll send you a receipt.",
} as const;

export const TAGLINE_SENTENCES: readonly string[] = [
  TAGLINE.readsText,
  TAGLINE.neverRecords,
  TAGLINE.managerSees,
  TAGLINE.pauseDelete,
];

/** SPEC.md §8.1 — the five promises, titles verbatim. */
export const PROMISES: readonly CanonicalPromise[] = [
  {
    id: "screen_never_leaves",
    title: "Your screen never leaves your Mac.",
    body: "No screenshot, OCR text, window title, or description is ever uploaded. Enforced by the single outbound serializer and a unit test that fails the build if any other field is sent.",
  },
  {
    id: "text_not_everything",
    title: "We read text, not everything.",
    body: "No audio, no keystrokes, no clipboard, no files, no browser history, no location. The app requests only Screen Recording and Accessibility, and the notice explains why each is needed.",
  },
  {
    id: "apps_you_chose",
    title: "Only in the apps you chose.",
    body: "An allowlist, confirmed one toggle at a time. Everything else is invisible to the app, always.",
  },
  {
    id: "never_captured",
    title: "Some things are never captured, even if you ask.",
    body: "Password managers, secure fields, private browsing, banking, health, legal, HR, dating, and any window that looks like a login.",
  },
  {
    id: "see_and_delete",
    title: "You can see everything and delete everything.",
    body: "A live log of what it observed, an inspector of exactly what left the Mac, and a purge that deletes local and server data and returns a receipt.",
  },
];

/** The two opt-ins promise 1 excepts (SPEC D5 and §5.3). Show it wherever promise 1 shows. */
export const PROMISE_1_EXCEPTIONS = "Two things are exceptions you turn on yourself: email is opt-in and explains that the digest text passes through our server, and cloud assist is opt-in, off by default, and sends only the redacted text sketch and the app category; the server classifies it and returns the observation, and the sketch is not stored server-side (in-memory only, deleted on response).";

export const PROMISE_1_EXCEPTION_ITEMS: readonly CanonicalOptInException[] = [
  {
    id: "email_digest",
    title: "Email digest",
    body: "email is opt-in and explains that the digest text passes through our server",
  },
  {
    id: "cloud_assist",
    title: "Cloud assist",
    body: "cloud assist is opt-in, off by default, and sends only the redacted text sketch and the app category; the server classifies it and returns the observation, and the sketch is not stored server-side (in-memory only, deleted on response)",
  },
];

/** SPEC.md D13 — the footer line on every surface. */
export const D13_FOOTER = "No ads, no data sales, no training on user data, affiliate links labeled";

/** docs/legal/notice.md §1 — the shipped Screen 1 string (≤ 150 words, §5.4). */
export const NOTICE_SCREEN1 = `What it does: ${PRODUCT_NAME} notices the repetitive things you do by hand and each morning shows you three you could hand to the AI tools you already have.\n\nWhat it reads: text on screen in the apps you pick, every five minutes while you're working, turned into a short note like "email, looks repetitive, 5 min." Your screen never leaves your Mac.\n\nWhat it never does: it never records audio, keystrokes, your clipboard, your files, or your browser history, and no screenshot ever leaves this Mac.\n\nWhat your manager sees: adoption numbers. Never your screen, never titles, never descriptions. You can see exactly what they see.\n\nKeeping, pausing, deleting: notes stay on this Mac for 30 days; the numbers your manager sees are kept 90 days. Pause any time from the menu bar. Delete everything any time, and we'll send you a receipt.`;

/** The tail of a "What it sees" line, after `time · app · task`. */
export const WHAT_IT_SEES_LINE_FORMATS = {
  keptSent: "kept on this Mac · content-free note sent",
  keptOffline: "kept on this Mac · nothing sent (offline)",
  skippedExcluded: "skipped (excluded app)",
  skippedSensitive: "skipped as sensitive",
} as const;

/** SPEC.md §8.8 — what a manager cannot see, as short lines. */
export const MANAGER_CANNOT_SEE: readonly string[] = [
  "Enable capture on a seat",
  "Change a seat's allowlist or schedule",
  "See when a seat paused",
  "See app names",
  "See anything per-hour or per-day",
  "See a seat's digest",
];

/** SPEC.md D9. */
export const RETENTION_SENTENCE = "Local journal retained 30 days (user-adjustable down to 7), encrypted with a Keychain-held key; server aggregates retained 90 days; one-click purge deletes both and returns a receipt";

export const UNINSTALL_NOTE = "Dragging the app to the Trash cannot delete data on our server — use Uninstall and purge.";

/** SPEC.md §1.2, quoted. The one string in the product that may carry a banned word. */
export const NOT_A_MONITORING_TOOL = "Not a monitoring or productivity-tracking tool. No hours-active, no idle time, no timelines, no per-day per-person activity views — by design, so it can't be misused as one.";

/** SPEC.md §1.6 — locked. */
export const PRICING = {
  summary: "$50/month individual; $49/seat/month teams, 10-seat minimum; 7-day free trial, no card; if it doesn't work, get your month back (individual, one-click); seats with no measured lift in 60 days free (teams).",
  individualPrice: "$50",
  individualPeriod: "/month",
  individualGuarantee: "If it doesn't work, get your month back — one-click refund, no questions asked",
  teamPrice: "$49",
  teamPeriod: "/seat/month",
  teamMinimum: "10-seat minimum",
  teamGuarantee: "Seats with no measured lift in 60 days are free",
  trial: "7-day free trial, no card",
  individualGuaranteeShort: "Month back if it doesn't work",
  claimRefundButton: "Claim your month back",
  offerOneLiner: "I help managers who must show AI adoption get their team handing three real tasks a day to the AI tools they already have — for $49/seat/month (individuals $50/month) — guaranteed by a one-click month back if it doesn't work, and free seats with no measured lift in 60 days.",
} as const;

/** Granola Offer risk reversal — month back / free seats. */
export const RISK_REVERSAL = {
  headline: "If it doesn't work, get your month back.",
  body: "One-click refund on the individual plan — no forms, no argument. Teams: any seat that doesn't show measured lift in 60 days is free. You should feel stupid saying no.",
  individual: "Month back if it doesn't work — claim your own refund.",
  team: "Seats with no measured lift in 60 days are free.",
} as const;

/** Locked status-icon labels (menu bar, Today pips, live proof, Try-it). */
export const STATUS = {
  observing: "Observing",
  notObserving: "Not observing",
  needsPermission: "Needs permission",
  digestReady: "3 things ready",
  tryItDone: "Tried it",
  paused: "Paused",
  setupNeeded: "Not observing — setup needed",
  observingApps: "Observing the apps you picked",
  offSchedule: "Not observing — outside your hours",
} as const;
