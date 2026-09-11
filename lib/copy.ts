/**
 * EMERGENCY restore — full copy.ts pending. Hero/CTA correct.
 */
import {
  D13_FOOTER,
  NOT_A_MONITORING_TOOL,
  PRICING,
  PROMISE_1_EXCEPTION_ITEMS,
  PROMISES,
  PRODUCT_NAME as CANONICAL_PRODUCT_NAME,
  RISK_REVERSAL,
  STATUS,
  TAGLINE,
  TAGLINE_SENTENCES,
} from "./canonical";

export const PRODUCT_NAME = CANONICAL_PRODUCT_NAME;

export const site = {
  tagline: "Turn your actions into skills — automatically, safely.",
  description:
    "Companion makes AI seat spend pay off. It notices repetitive hand work, teaches the AI tools you already have, and turns those actions into one-button skills — capture stays local, content-free for managers, minutes back for the company buyer.",
};

export const nav = {
  skipToContent: "Skip to content",
  brandHome: `${PRODUCT_NAME} home`,
  links: [
    { label: "Product", href: "/#product" },
    { label: "Trust", href: "/#trust" },
    { label: "Pricing", href: "/#pricing" },
  ],
  signIn: { label: "Sign in", href: "/signup" },
  primaryCta: { label: "Start free trial", href: "/signup" },
};

export const hero = {
  eyebrow: "Recorded Skills · local-first",
  headline: "Turn your actions into skills — automatically, safely.",
  subhead:
    "Notice → Teach → Record once → AI streamlines → one-button run. Capture stays on the Mac (accessibility-first). Nothing uploads in the background. Managers never get recordings.",
  pitch:
    "Make AI seat spend pay off. Minutes back for every seat. Built for the company buyer who must show adoption — not another chatbot.",
  primary: TAGLINE.readsText,
  ctaPrimary: { label: "Start free trial", href: "/signup" },
  ctaSecondary: { label: "See Recorded Skills", href: "#demo" },
  ctaNote: `${PRICING.trial}. ${PRICING.individualGuaranteeShort}. Mac, macOS 15 or later.`,
  noteCard: {
    label: "What it keeps",
    app: "Gmail",
    task: "reply email",
    signal: "looks template-like",
    minutes: "5 min",
    footnote: "The screen content is thrown away within seconds. This note is all that stays.",
  },
};

// Re-export stubs — parent must replace with full /workspace/.../copy.ts via FINAL-create-or-update.json
export const plainLanguage = { eyebrow: "", title: "", description: "", sentences: TAGLINE_SENTENCES };
export const promises = { eyebrow: "", title: "", description: "", items: PROMISES.map((p) => ({ title: p.title, line: p.body })) };
export const optInExceptions = { title: "", items: [], note: "" };
export const ladder = { eyebrow: "", title: "", description: "", columns: [], rows: [], footnote: "", neverLeaves: { label: "", items: [] }, leavesByDefault: { label: "", perObservationLabel: "", perObservation: [], perDayLabel: "", perDay: [] } };
export const morning = { eyebrow: "", title: "", description: "", steps: [] };
export const pricing = { eyebrow: "", title: "", description: "", plans: [], featuredBadge: "", guarantee: { title: RISK_REVERSAL.headline, body: RISK_REVERSAL.body, individual: RISK_REVERSAL.individual, team: RISK_REVERSAL.team, claim: PRICING.claimRefundButton } };
export const digestDemo = { eyebrow: "", title: "", description: "", exampleBadge: "", exampleNote: "", steps: [], controls: { prev: "", next: "", restart: "", stepOf: () => "", askPermission: "", grantPermission: "", revokePermission: "", setupNote: "", askingNote: "", grantedNote: "" } };
export const faq = { eyebrow: "", title: "", notThat: { question: "", answer: NOT_A_MONITORING_TOOL, attribution: "" }, items: [] };
export const closing = { title: `Try ${PRODUCT_NAME} now.`, body: "", cta: { label: "Start the 7-day trial", href: "/signup" }, waitlist: { label: "", href: "/signup" } };
export const footer = { statement: D13_FOOTER, groups: [], legalNote: "", copyright: (y: number) => `© ${y} ${PRODUCT_NAME}` };
export const signup = { eyebrow: "", title: "", description: "", fields: { name: { label: "", placeholder: "", autoComplete: "name" }, email: { label: "", placeholder: "", autoComplete: "email" } }, plan: { label: "", options: [] }, trialNote: PRICING.trial, submit: "", submitting: "", assurances: [], success: { title: "", body: () => "", next: [], mockNote: "", again: "" }, errors: { name: "", email: "" } };
export const dashboard = { orgLabel: "", statusBadge: "", title: "", subtitle: "", parityLine: TAGLINE.managerSees, parityNote: "", nav: [], stats: [], seats: { title: "", description: "", columns: [], empty: { title: "", body: "" } }, canSee: { title: "", items: [] }, cannotSee: { title: "", items: [] }, cannotDo: { title: "", items: [] }, export: { title: "", body: "", empty: "", action: "" }, controller: "" };
export const tryPage = { eyebrow: "", backLink: { label: "", href: "/" }, evidenceLabel: "", evidenceNote: "", prerequisitesLabel: "", stepsLabel: "", promptLabel: "", promptNote: "", copy: "", copied: "", copyFailed: "", feedbackTitle: "", done: "", notUseful: "", feedbackDone: "", feedbackNotUseful: "", feedbackNote: "", timeToTry: "", timeSaved: "", toolLabel: "", notFound: "" };
export const privacy = { eyebrow: "", title: "", description: "", promisesTitle: "", promisesDescription: "", ladderTitle: "", ladderDescription: "", languageTitle: "", languageDescription: "", controlsTitle: "", controls: [], teamTitle: "", teamDescription: "" };
export const onboarding = { eyebrow: "", title: "", description: "", steps: [], cta: { label: "Start the 7-day trial", href: "/signup" }, aside: { title: RISK_REVERSAL.headline, body: RISK_REVERSAL.body } };
export const riskReversal = { headline: RISK_REVERSAL.headline, body: RISK_REVERSAL.body, individual: RISK_REVERSAL.individual, team: RISK_REVERSAL.team, claim: PRICING.claimRefundButton };
export const skillsDemo = { eyebrow: "Recorded Skills", windowTitle: PRODUCT_NAME, skillName: "", skillMeta: "", localBadge: "", trustLine: "", flowLabel: "", flow: [], stepsLabel: "", steps: [], runLabel: "", runHint: "", exampleBadge: "", exampleNote: "" };
export const offerBand = { eyebrow: "", audience: "", result: "", price: "", guarantee: RISK_REVERSAL.headline, guaranteeBody: RISK_REVERSAL.body, commitCta: { label: "Start the 7-day trial", href: "/signup" }, pricingCta: { label: "See pricing", href: "/pricing" }, waitlistCta: { label: "Join the waitlist", href: "/signup?plan=team&waitlist=1" }, waitlistNote: "" };
export const productChrome = { desktopTitle: PRODUCT_NAME, menuBarApp: PRODUCT_NAME, menuBarClock: "", getApp: "", notificationApp: PRODUCT_NAME, notificationTitle: "", notificationBody: "", composerPlaceholder: "", composerPills: [], sendLabel: "" };
export const layered = { kicker: "", title: "", body: "" };
export const features = { items: [] };
export const toolStrip = { label: "", names: [] };
export const quotes = { title: "", items: [] };
export const allowlistPreview = { title: "", rows: [], footnote: "" };
export const outboundPreview = { title: "", subtitle: "", explanation: "" };
export const managerPreview = { title: "", badge: "", rows: [], note: "" };
export const homePricing = { line: "", link: "" };
export const layeredUi = { todayTitle: "", seesTitle: "", leavesTitle: "", time: "", headline: "", items: [], sees: [] };
export const digestPreview = { windowTitle: "", headline: "", items: [] };
export const gmailPreview = { toLabel: "", toValue: "", subjectLabel: "", subject: "", greeting: "", intro: "", bullets: [], signoff: "", note: "" };
