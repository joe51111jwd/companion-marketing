/**
 * Every user-facing string on the web surface lives here.
 *
 * Rules that bind this file (SPEC §8.10):
 *  - The product name is only ever PRODUCT_NAME.
 *  - Sentences that must be identical across the Mac app, the notice and this site are NOT
 *    written here: they are imported from `./canonical`, which `scripts/copy/gen.mjs`
 *    generates from `copy/canonical.json`. Reword them there or nowhere.
 *  - Never use the four banned words. The single exception in the whole app is
 *    `faq.notThat.answer`, which quotes §1.2's own negation — and it, too, is canonical.
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
  tagline: "Three things to hand to AI today, learned from your own work.",
  description:
    "A menu-bar Mac app that notices the repetitive work in the apps you pick and writes you a short morning digest: the three things worth handing to AI today, each with a walkthrough in a tool you already have.",
};

export const nav = {
  skipToContent: "Skip to content",
  brandHome: `${PRODUCT_NAME} home`,
  links: [
    { label: "Product", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Trust", href: "/privacy" },
  ],
  signIn: { label: "Sign in", href: "/signup" },
  primaryCta: { label: "Download for Mac", href: "/signup" },
};

export const hero = {
  eyebrow: "Native Mac app · menu bar only",
  headline: "Three things to hand to AI today, learned from your own work.",
  /** §8.10, sentence 1 — the primary copy on this page. */
  primary: TAGLINE.readsText,
  ctaPrimary: { label: "Download for Mac", href: "/signup" },
  ctaSecondary: { label: "See the digest", href: "#demo" },
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

/** §8.10 — the same four sentences the app's notice uses, from ./canonical. */
export const plainLanguage = {
  eyebrow: "In plain language",
  title: "The same four sentences, everywhere.",
  description:
    "The notice you see on first run, the README, and this page use identical wording. If any of it changes, all three change together.",
  sentences: TAGLINE_SENTENCES,
};

/** §8.1 — titles and one-line bodies, from ./canonical. */
export const promises = {
  eyebrow: "Five promises",
  title: "Each has a mechanism. You can check what holds from inside the app.",
  description:
    "These are not marketing lines. Each promise has a mechanism behind it. Only Promise 1 — the outbound serializer — is currently gated by a test that fails the build if any other field is sent.",
  items: PROMISES.map((promise) => ({ title: promise.title, line: promise.body })),
};

/**
 * The two opt-in exceptions, in the words of D5 and §5.3, shown wherever promise 1 is
 * (LEDGER ruling, 2026-09-09). The pair below is the same wording as the single
 * `PROMISE_1_EXCEPTIONS` sentence the README and the Mac app use; the generator fails if
 * the two ever drift apart.
 */
export const optInExceptions = {
  title: "Two exceptions, both off until you turn them on.",
  items: PROMISE_1_EXCEPTION_ITEMS.map((item) => ({
    title: item.title,
    body: `${item.body.charAt(0).toUpperCase()}${item.body.slice(1)}.`,
  })),
  note: "Neither one sends an image, and neither is on unless you switch it on.",
};

/** VERBATIM §8.2 (the six hops) plus the §3 summary line. */
export const ladder = {
  eyebrow: "What leaves your Mac",
  title: "Six hops, and what survives each one.",
  description:
    "Every piece of data the product touches, how long it lives, and where it lives. Nothing else exists to be asked for.",
  columns: ["Hop", "Data", "Lifetime", "Where"],
  rows: [
    {
      hop: "Screen",
      data: "AX text or one window frame",
      lifetime: "≤ 10 s, memory only",
      where: "Mac",
    },
    {
      hop: "Text sketch",
      data: "≤ 800 chars, redacted",
      lifetime: "≤ 10 s, memory only",
      where: "Mac",
    },
    {
      hop: "Observation (local)",
      data: "app, title, description, signals",
      lifetime: "30 d, encrypted",
      where: "Mac",
    },
    {
      hop: "Observation (sent)",
      data: "category, task type, signals, hashed key, minutes, AI-tool flag",
      lifetime: "90 d",
      where: "server",
    },
    {
      hop: "Daily aggregate",
      data: "AI minutes, active flag, items/tried/done",
      lifetime: "90 d, then org roll-up",
      where: "server",
    },
    {
      hop: "Digest",
      data: "3 items with local specifics",
      lifetime: "30 d local; server keeps only recipe ids",
      where: "Mac / server",
    },
  ],
  footnote:
    "Nothing on the server can reconstruct what a person was doing beyond “email-type task, template-like, 25 minutes.”",
  neverLeaves: {
    label: "Never leaves the Mac",
    items: ["pixels", "OCR text", "window titles", "descriptions", "the journal"],
  },
  /** VERBATIM §3 — the exact field lists that go over the wire. */
  leavesByDefault: {
    label: "Leaves the Mac by default",
    perObservationLabel: "Per observation",
    perObservation: [
      "task_type",
      "manual_signals",
      "repetition_key (hashed)",
      "est_minutes",
      "ai_tool_in_use",
      "app_category",
      "ts",
    ],
    perDayLabel: "Once a day",
    perDay: ["ai_tool_minutes", "active_days", "items_sent", "tried", "done"],
  },
};

/** §1.4, told as a quiet timeline. */
export const morning = {
  eyebrow: "How a morning looks",
  title: "Tuesday, 8:02 am.",
  description:
    "You are not asked to prompt anything, open anything, or learn a new tool. The digest arrives, and one click puts the walkthrough beside the work.",
  steps: [
    {
      time: "8:02 am",
      title: "A notification.",
      body: "“3 things to try with AI today.”",
    },
    {
      time: "Item #1",
      title: "Written from your own week.",
      body: "“You rewrote the same parent-update email in Gmail about 9 times last week. Claude can draft all of them from one bullet list — 4 steps, 6 minutes.”",
    },
    {
      time: "One click",
      title: "The walkthrough opens beside Gmail.",
      body: "Four steps, in the tool that is already on your Mac. Nothing to install, nothing to paste twice.",
    },
    {
      time: "Wednesday",
      title: "The digest opens with what worked.",
      body: "“You tried it — that's 34 minutes back.”",
    },
  ],
};

/** §1.6 pricing is locked; every number and guarantee string comes from ./canonical. */
export const pricing = {
  eyebrow: "Pricing",
  title: "Priced on the outcome, not the seat count.",
  description:
    "Seven-day free trial on both plans, no card. “Level up” is measured by the app, and the guarantee is priced on that measurement.",
  plans: [
    {
      id: "individual",
      name: "Individual",
      price: PRICING.individualPrice,
      period: PRICING.individualPeriod,
      summary: "For one person who already uses AI like a search box.",
      cta: { label: "Start the 7-day trial", href: "/signup?plan=individual" },
      features: [
        PRICING.trial,
        "Daily digest: three things to hand to AI",
        "Walkthroughs in the tools already on your Mac",
        "Onboarding helper installs and signs you in",
        PRICING.individualGuarantee,
      ],
      featured: false,
    },
    {
      id: "team",
      name: "Team",
      price: PRICING.teamPrice,
      period: PRICING.teamPeriod,
      summary: "For a manager who has to show AI adoption, not talk about it.",
      cta: { label: "Start the 7-day trial", href: "/signup?plan=team" },
      features: [
        PRICING.teamMinimum,
        PRICING.trial,
        "Per-seat consent, per-seat allowlist",
        "Dashboard built from content-free weekly aggregates",
        "Adoption record export",
        PRICING.teamGuarantee,
      ],
      featured: true,
    },
  ],
  featuredBadge: "Most teams start here",
  guarantee: {
    title: RISK_REVERSAL.headline,
    body: RISK_REVERSAL.body,
    individual: RISK_REVERSAL.individual,
    team: RISK_REVERSAL.team,
    claim: PRICING.claimRefundButton,
  },
};

/** Interactive morning-digest demo — example content only. */
export const digestDemo = {
  eyebrow: "Interactive demo",
  title: "Tuesday morning, on your Mac.",
  description:
    "Click through an example digest. Nothing here is live data — every line is labeled example.",
  exampleBadge: "Example digest",
  exampleNote: "Example content for the product story — not measured results from a real week.",
  steps: [
    {
      id: "access",
      label: "Access",
      title: STATUS.needsPermission,
      body: `Screen Recording and Accessibility stay off until the person at this Mac grants them. The chip never says ${STATUS.observing} before that.`,
      panel: {
        kind: "access",
        headline: "Live proof",
        sub: "Watch one observation happen before the first real one. Grants are asked here, not assumed.",
      },
    },
    {
      id: "notify",
      label: "8:02 am",
      title: "A quiet notification.",
      body: "“3 things to try with AI today.” No dashboard. No timeline. Just three suggestions.",
      panel: {
        kind: "notification",
        headline: "3 things to try with AI today",
        sub: "From work you already did — on this Mac.",
      },
    },
    {
      id: "item1",
      label: "Item 1",
      title: "Written from an example week.",
      body: "A parent-update email pattern, with a walkthrough in a tool already on the Mac.",
      panel: {
        kind: "item",
        index: "01",
        evidence: "Example · Gmail · reply email · looks template-like · ~5 min",
        suggestion:
          "You rewrote the same parent-update email in Gmail about 9 times last week. Claude can draft all of them from one bullet list — 4 steps, 6 minutes.",
        tool: "Claude",
      },
    },
    {
      id: "walkthrough",
      label: "One click",
      title: "Walkthrough opens beside the work.",
      body: "Four steps in the tool already installed. Nothing new to learn, nothing to paste twice.",
      panel: {
        kind: "walkthrough",
        tool: "Claude · beside Gmail",
        steps: [
          "Open Claude on your Mac",
          "Paste the bullet list of updates",
          "Ask for parent-update drafts in your usual tone",
          "Review, send, and mark the digest item done",
        ],
      },
    },
    {
      id: "wednesday",
      label: "Wednesday",
      title: "The digest opens with what worked.",
      body: "Example follow-up only — Companion never invents hours-active or idle time.",
      panel: {
        kind: "followup",
        headline: "You tried it — that's 34 minutes back.",
        note: "Example outcome line from the product definition (§1.4).",
      },
    },
  ],
  controls: {
    prev: "Previous",
    next: "Next",
    restart: "Start over",
    stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
    askPermission: "Ask for Screen Recording and Accessibility",
    grantPermission: "Grant access",
    revokePermission: "Revoke grants",
    setupNote: STATUS.setupNeeded,
    askingNote: `${STATUS.needsPermission} — the live Mac app asks the OS. This example lets you grant or revoke.`,
    grantedNote: `${STATUS.observing} — both grants are on for this example.`,
  },
};

export const faq = {
  eyebrow: "Questions",
  title: "The ones people actually ask.",
  /** The ONLY place in this app where the spec's negation appears. */
  notThat: {
    question: "Can my employer use this to watch me?",
    /** §1.2 — the spec's own negation, quoted from ./canonical. */
    answer: NOT_A_MONITORING_TOOL,
    attribution: `From the ${PRODUCT_NAME} product definition, §1.2.`,
  },
  items: [
    {
      question: "What does it actually keep?",
      answer:
        "One short, content-free note per observation: “Gmail · reply email · looks template-like · 5 min.” The text it read is gone within ten seconds, and the note stays on your Mac for 30 days, encrypted.",
    },
    {
      question: "What does my manager see?",
      answer: TAGLINE.managerSees,
    },
    {
      question: "Does it need my password manager or my bank?",
      answer:
        "It refuses them. Password managers, secure fields, private browsing, banking, health, legal, HR, dating, and any window that looks like a login are skipped in code, with no user, admin, or support override.",
    },
    {
      question: "Can I turn it off?",
      answer: TAGLINE.pauseDelete,
    },
    {
      question: "Is this another AI tool to learn?",
      answer:
        `No. ${PRODUCT_NAME} is not a chatbot and you never have to prompt anything. It teaches the tools already on your machine — ChatGPT, Claude, Copilot, Gemini, Grok, Notion AI, Canva, Plaud.`,
    },
    {
      question: "Windows?",
      answer:
        "Mac only in v1. Windows is a later question, and we would rather do one platform properly than two badly.",
    },
  ],
};

export const closing = {
  title: `Try ${PRODUCT_NAME} now.`,
  body: `Seven days, no card. ${RISK_REVERSAL.headline} ${TAGLINE.pauseDelete}`,
  cta: { label: "Download for Mac", href: "/signup" },
};

export const footer = {
  /** Decision D13, from ./canonical. */
  statement: D13_FOOTER,
  groups: [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "/" },
        { label: "How a morning looks", href: "/#digest" },
        { label: "Pricing", href: "/pricing" },
        { label: "Onboarding", href: "/onboarding" },
        { label: "Try a walkthrough", href: "/try/sample" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: "Five promises", href: "/privacy" },
        { label: "What leaves your Mac", href: "/privacy#ladder" },
        { label: "What your manager sees", href: "/dashboard" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Start a trial", href: "/signup" },
        { label: "Sign in", href: "/signup" },
      ],
    },
  ],
  legalNote: "Mac app, macOS 15 or later. Screen Recording and Accessibility permissions, nothing else.",
  copyright: (year: number) => `© ${year} ${PRODUCT_NAME}`,
};

export const signup = {
  eyebrow: "Start a trial",
  title: "Seven days, no card.",
  description:
    "You will get the Mac app today and your first digest tomorrow morning. Seven days, no card, and you can delete everything before the week is out.",
  fields: {
    name: { label: "Name", placeholder: "Alex Rivera", autoComplete: "name" },
    email: { label: "Work email", placeholder: "alex@school.org", autoComplete: "email" },
  },
  plan: {
    label: "Who is this for?",
    options: [
      {
        value: "individual",
        label: "Just me",
        trialName: "individual",
        detail: `${PRICING.individualPrice}${PRICING.individualPeriod} after the trial · ${PRICING.individualGuarantee}`,
      },
      {
        value: "team",
        label: "My team",
        trialName: "team",
        detail: `${PRICING.teamPrice}${PRICING.teamPeriod}, ${PRICING.teamMinimum} · ${PRICING.teamGuarantee.toLowerCase()}`,
      },
    ],
  },
  trialNote: PRICING.trial,
  submit: "Start the trial",
  submitting: "Starting…",
  assurances: [
    "Nothing is captured until you read the notice and turn it on.",
    "You pick the apps it can see, one toggle at a time.",
    TAGLINE.pauseDelete,
  ],
  success: {
    title: "Trial started.",
    body: (name: string, plan: string) =>
      `Thanks, ${name}. Your 7-day ${plan} trial is open. The next step is the Mac app: it walks you through the notice, then you pick the apps it may read.`,
    next: [
      "Download the Mac app and open it once.",
      "Read the notice and choose your allowlist.",
      "Tomorrow, 8:02 am: your first digest.",
    ],
    mockNote:
      "Demo only — this page returns a mock trial state. Accounts, billing and email land with the server.",
    again: "Start another trial",
  },
  errors: {
    name: "Enter the name you want on the account.",
    email: "Enter an email address we can send the app to.",
  },
};

export const dashboard = {
  orgLabel: "Demo org",
  statusBadge: "No data yet",
  title: "Adoption",
  subtitle: "Weekly buckets, content-free, identical to what every seat can see about themselves.",
  /** §8.10, sentence 3, from ./canonical. */
  parityLine: TAGLINE.managerSees,
  parityNote:
    "This page and each employee's “What my manager sees” page render from the same query. A test asserts they are identical.",
  nav: [
    { label: "Adoption", href: "/dashboard", current: true },
    { label: "Seats", href: "/dashboard", current: false },
    { label: "Consent", href: "/dashboard", current: false },
    { label: "Export", href: "/dashboard", current: false },
  ],
  stats: [
    { label: "Seats consented", value: "—", note: "Consent is per seat, given on the seat's own Mac." },
    { label: "Seats with 7 active days", value: "—", note: "Per-seat rows appear only after 7 active days." },
    { label: "Suggestions tried this week", value: "—", note: "Counted per week, never per day." },
    { label: "AI-tool minutes trend", value: "—", note: "A weekly trend, not a timeline." },
  ],
  seats: {
    title: "Seats",
    description: "By name, because the guarantee is per seat. Every metric is a weekly bucket.",
    columns: ["Seat", "Consent", "Weeks active", "Tried", "Done"],
    empty: {
      title: "No seat has reached 7 active days yet.",
      body: "Per-seat data appears only after 7 active days — there is no day-one snapshot, by design.",
    },
  },
  canSee: {
    title: "What you can see",
    items: [
      "Weekly aggregates per seat and for the whole org",
      "Consent status for each seat",
      "Tried and done counts",
      "The adoption record export",
    ],
  },
  cannotSee: {
    title: "What you cannot see",
    items: [
      "Anything on a seat's screen, and any window title or description",
      "App names",
      "Anything per-hour or per-day",
      "When a seat paused",
      "A seat's digest",
    ],
  },
  cannotDo: {
    title: "What you cannot do",
    items: [
      "Turn a seat on — only the person at that Mac can",
      "Change a seat's allowlist or schedule",
      "Ask support for anything above, because none of it is stored",
    ],
  },
  export: {
    title: "Adoption record",
    body: "One export, per closed week, for the seats that consented.",
    empty: "The export unlocks with the first closed week.",
    action: "Export",
  },
  controller:
    "For team seats, the employer is the data controller and we process on their behalf. The seat sees the same statement in the app's notice.",
};

export const tryPage = {
  eyebrow: "Walkthrough",
  backLink: { label: "All walkthroughs", href: "/" },
  evidenceLabel: "Why you're seeing this",
  evidenceNote:
    "On your Mac this line is written from your own local journal. This page is a sample, so it uses the example from the product definition.",
  prerequisitesLabel: "Before you start",
  stepsLabel: "Steps",
  promptLabel: "The prompt",
  promptNote: "Copy this into the tool. Edit anything in brackets first.",
  copy: "Copy prompt",
  copied: "Copied",
  copyFailed: "Press ⌘C to copy",
  feedbackTitle: "Did this help?",
  done: "Done",
  notUseful: "Not useful",
  feedbackDone: "Noted. Tomorrow's digest will lead with what worked.",
  feedbackNotUseful: "Noted. You'll see fewer like this one.",
  feedbackNote: "Nothing left your Mac — this sample page has no backend.",
  timeToTry: "Time to try",
  timeSaved: "Saved each time",
  toolLabel: "Tool",
  notFound: "That walkthrough isn't in the sample library.",
};

export const privacy = {
  eyebrow: "Privacy",
  title: "The whole design, in one page.",
  description:
    "This page is the same content as the notice inside the app and the privacy section of the spec. If you find a difference, the spec wins and we have a bug.",
  promisesTitle: "Five promises",
  promisesDescription:
    "Each has a mechanism behind it. You can check what holds from inside the app.",
  ladderTitle: "What is kept at each hop",
  ladderDescription:
    "The full data-minimization ladder. If a row is not here, the data does not exist.",
  languageTitle: "The sentences we use",
  languageDescription:
    "The notice, the README and the marketing page use the same sentences, on purpose.",
  controlsTitle: "Controls that are always yours",
  controls: [
    "Pause for an hour, a day, or until you turn it back on.",
    "Change the allowlist any time, one toggle at a time.",
    "See a live log of what it observed and an inspector of exactly what left the Mac.",
    "Purge everything, locally and on the server, and get a receipt.",
    "Export everything the server holds about you as JSON, in one click.",
  ],
  teamTitle: "If your employer bought the seats",
  teamDescription:
    "The employee is the user; the org is the customer. That ordering decides every question below.",
};

/** First-run storyboard — mirrors the Mac notice + allowlist flow. */
export const onboarding = {
  eyebrow: "Onboarding",
  title: "From download to first digest.",
  description:
    "A quiet storyboard of what happens on the Mac. Capture stays off until the person at the seat finishes these steps.",
  steps: [
    {
      n: "01",
      title: "Install and open once.",
      body: "Menu-bar only. No Electron, no helper daemons. The app asks for Screen Recording and Accessibility — and explains why.",
    },
    {
      n: "02",
      title: "Read the notice.",
      body: "The same four sentences on this site, in the README, and on first run. Acknowledge before anything is read.",
    },
    {
      n: "03",
      title: "Pick apps, one toggle at a time.",
      body: "Allowlist only. Everything else is invisible. Hard exclusions (password managers, banking, private browsing…) cannot be overridden.",
    },
    {
      n: "04",
      title: "Watch one live proof.",
      body: "Before the first real observation, you watch one end-to-end: read → short note → what would leave the Mac.",
    },
    {
      n: "05",
      title: "Tomorrow morning.",
      body: `Three things to hand to AI, written from work already done. ${TAGLINE.pauseDelete}`,
    },
  ],
  cta: { label: "Start the 7-day trial", href: "/signup" },
  aside: {
    title: RISK_REVERSAL.headline,
    body: RISK_REVERSAL.body,
  },
};

export const riskReversal = {
  headline: RISK_REVERSAL.headline,
  body: RISK_REVERSAL.body,
  individual: RISK_REVERSAL.individual,
  team: RISK_REVERSAL.team,
  claim: PRICING.claimRefundButton,
};

/** Homepage product-stage chrome — example UI only. */
export const productChrome = {
  desktopTitle: `${PRODUCT_NAME} Desktop`,
  menuBarApp: PRODUCT_NAME,
  menuBarClock: "Fri 8:02 AM",
  getApp: `Get ${PRODUCT_NAME}`,
  notificationApp: PRODUCT_NAME,
  notificationTitle: "3 things to try with AI today.",
  notificationBody: "From work you already did — on this Mac.",
  composerPlaceholder: "Open the walkthrough beside the work…",
  composerPills: ["Example", "Try-it"],
  sendLabel: "Open next step",
};

/** Overlapping desktop windows under the hero. */
export const layered = {
  kicker: "On the Mac",
  title: "A short note. Then the screen is gone.",
  body: "Accessibility text first. On-device classification. Pixels discarded within seconds. The digest is assembled on this Mac from the local journal.",
};

/** Wide two-column feature rows — sparse copy, dense UI. */
export const features = {
  items: [
    {
      id: "digest",
      kicker: "Morning digest",
      title: "Three things. In a tool you already have.",
      body: "Written from your own week. One click opens a walkthrough beside the work — ChatGPT, Claude, Copilot, Gemini, Grok, the tool that is already installed.",
      href: "/try/sample",
      link: "See a walkthrough",
    },
    {
      id: "allowlist",
      kicker: "Allowlist",
      title: PROMISES[2].title,
      body: PROMISES[2].body,
      href: "/onboarding",
      link: "How onboarding works",
    },
    {
      id: "screen",
      kicker: "On this Mac",
      title: PROMISES[0].title,
      body: PROMISES[0].body,
      href: "/privacy#ladder",
      link: "What leaves this Mac",
    },
    {
      id: "teams",
      kicker: "For teams",
      title: "Adoption numbers. Never a screen.",
      body: TAGLINE.managerSees,
      href: "/dashboard",
      link: "What a manager sees",
      aside: NOT_A_MONITORING_TOOL,
    },
  ],
};

/** Tools already on the machine — not customer logos. */
export const toolStrip = {
  label: "Walkthroughs in the tools already on the Mac",
  names: ["ChatGPT", "Claude", "Copilot", "Gemini", "Grok", "Notion AI", "Canva", "Plaud"],
};

/**
 * Quote cards use the product's own sentences and the §1.4 moment.
 * No invented customers, no invented results.
 */
export const quotes = {
  title: "The same sentences, everywhere.",
  items: [
    {
      quote: TAGLINE.readsText,
      attribution: "Notice, README, and this page",
    },
    {
      quote: TAGLINE.neverRecords,
      attribution: "Notice, README, and this page",
    },
    {
      quote: TAGLINE.managerSees,
      attribution: "Notice, README, and this page",
    },
    {
      quote: TAGLINE.pauseDelete,
      attribution: "Notice, README, and this page",
    },
    {
      quote: "3 things to try with AI today.",
      attribution: "The Tuesday morning · product moment",
    },
    {
      quote: "You tried it — that's 34 minutes back.",
      attribution: "The Wednesday follow-up · product moment",
    },
  ],
};

export const allowlistPreview = {
  title: "Apps it may read",
  rows: [
    { name: "Gmail", on: true, locked: false },
    { name: "Notes", on: true, locked: false },
    { name: "Numbers", on: true, locked: false },
    { name: "Safari", on: false, locked: false },
    { name: "1Password", on: false, locked: true, note: "Hard exclusion" },
  ],
  footnote: "Hard exclusions cannot be overridden by you, an admin, or support.",
};

export const outboundPreview = {
  title: "What leaves this Mac",
  subtitle: "Last outbound payload · example",
  explanation: "Content-free. No pixels, no OCR text, no window titles, no descriptions.",
};

export const managerPreview = {
  title: "What a manager sees",
  badge: "Example week",
  rows: [
    { label: "Seats consented", value: "—" },
    { label: "Seats with 7 active days", value: "—" },
    { label: "Suggestions tried this week", value: "—" },
    { label: "AI-tool minutes trend", value: "—" },
  ],
  note: "Weekly buckets only. Per-seat rows appear after 7 active days. This preview is empty on purpose.",
};

export const homePricing = {
  line: `${PRICING.individualPrice}${PRICING.individualPeriod} individual · ${PRICING.teamPrice}${PRICING.teamPeriod} teams, ${PRICING.teamMinimum} · ${PRICING.trial}.`,
  link: "Full pricing",
};

export const layeredUi = {
  todayTitle: `${PRODUCT_NAME} · Today`,
  seesTitle: "What it sees",
  leavesTitle: "What leaves this Mac",
  time: "Tuesday 8:02 am",
  headline: "3 things to try with AI today",
  items: [
    { index: "01", title: "Gmail · reply email · template-like", meta: "Claude · 4 steps · 6 min" },
    { index: "02", title: "Notes · meeting notes · manual formatting", meta: "ChatGPT · 5 min" },
    { index: "03", title: "Numbers · repeated lookup", meta: "Copilot · 8 min" },
  ],
  sees: [
    { time: "2:35 pm", line: "Gmail · reply email, template-like · kept on this Mac · content-free note sent" },
    { time: "2:40 pm", line: "skipped (excluded app)" },
    { time: "2:45 pm", line: "skipped as sensitive" },
  ],
};

export const digestPreview = {
  windowTitle: "Today",
  headline: "3 things to try with AI today",
  items: [
    { title: "Gmail · parent update", meta: "Claude · 4 steps · 6 min" },
    { title: "Notes · meeting notes", meta: "ChatGPT · 5 min" },
    { title: "Numbers · repeated lookup", meta: "Copilot · 8 min" },
  ],
};

export const gmailPreview = {
  toLabel: "To",
  toValue: "[PERSON]",
  subjectLabel: "Subject",
  subject: "Friday update — three notes",
  greeting: "Hi [PERSON] —",
  intro: "Three notes from this week, same shape as last Friday:",
  bullets: [
    "Reading group finished chapter four",
    "Field trip permission still out",
    "Early pickup on Thursday",
  ],
  signoff: "Thank you,",
  note: "Example compose surface. Names are redacted the way the on-device pass would.",
};
