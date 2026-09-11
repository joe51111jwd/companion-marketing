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

const PRODUCT_NAME = CANONICAL_PRODUCT_NAME;

export const dashboard = {
  orgLabel: "Demo org",
  statusBadge: "No data yet",
  title: "Adoption",
  subtitle: "Weekly buckets, content-free, identical to what every seat can see about themselves.",
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

export const hero = {
  eyebrow: "Recorded Skills · local-first",
  headline: "Turn your actions into skills automatically. It's safe.",
  subhead:
    "Notice → Teach → Record once → AI streamlines → one-button run. Capture stays on the Mac (accessibility-first). Nothing uploads in the background. Managers never get recordings.",
  pitch:
    "Make AI seat spend pay off. Minutes back for every seat. Built for the company buyer who must show adoption — not another chatbot.",
  primary: TAGLINE.readsText,
  ctaPrimary: { label: "Start the 7-day trial", href: "/signup" },
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

export const promises = {
  eyebrow: "Five promises",
  title: "Each has a mechanism. You can check what holds from inside the app.",
  description:
    "These are not marketing lines. Each promise has a mechanism behind it. Only Promise 1 — the outbound serializer — is currently gated by a test that fails the build if any other field is sent.",
  items: PROMISES.map((promise) => ({ title: promise.title, line: promise.body })),
};

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

export const toolStrip = {
  label: "Walkthroughs in the tools already on the Mac",
  names: ["ChatGPT", "Claude", "Copilot", "Gemini", "Grok", "Notion AI", "Canva", "Plaud"],
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
