import Link from "next/link";

import { SkillsDemo } from "@/components/skills-demo";

const HOW = [
  {
    title: "Notice",
    body: "Same reply shape, nine times last week.",
  },
  {
    title: "Teach",
    body: "Walkthrough opens beside the work (Claude, ChatGPT, Copilot…).",
  },
  {
    title: "Record once",
    body: "You opt in. Steps stay on this Mac. Accessibility-first — not screenshot-and-keep.",
  },
  {
    title: "Run",
    body: "AI streamlines redundant clicks. One-button skill.",
  },
] as const;

const TRUST = [
  {
    title: "Local by default",
    body: "Accessibility capture. Pixels classified on-device and discarded. Nothing uploads in the background.",
  },
  {
    title: "Managers see aggregates",
    body: "Seats consented · active days · suggestions tried · AI-tool minutes. No screen, titles, or descriptions.",
  },
  {
    title: "You stay in control",
    body: "Allowlist apps. Pause anytime. Delete everything anytime.",
  },
] as const;

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <How />
      <Trust />
      <Pricing />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="mkt-hero">
      <div className="mkt-hero-copy">
        <h1 id="hero-heading" className="mkt-hero-h1">
          Turn your actions into skills — automatically, safely.
        </h1>
        <p className="mkt-hero-sub">
          Recorded Skills notices repeats, teaches a walkthrough in the AI tool you already have,
          then records once into a one-button run. Capture stays on the Mac. Managers see
          content-free adoption numbers — never your screen.
        </p>
        <div className="mkt-hero-actions">
          <Link href="/signup" className="hero-cta-primary">
            Start free trial
          </Link>
          <a href="#demo" className="hero-cta-secondary">
            See Recorded Skills
          </a>
        </div>
        <p className="mkt-hero-micro">7-day free trial · no card · Mac, macOS 15+</p>
      </div>

      <div id="demo" className="mkt-hero-demo">
        <SkillsDemo />
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="product" className="mkt-section" aria-labelledby="how-heading">
      <div className="mkt-section-inner">
        <h2 id="how-heading" className="mkt-h2">
          How Recorded Skills works
        </h2>
        <ol className="mkt-how-grid">
          {HOW.map((item, index) => (
            <li key={item.title} className="mkt-card">
              <span className="mkt-step-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="trust" className="mkt-section mkt-section-rule" aria-labelledby="trust-heading">
      <div className="mkt-section-inner">
        <h2 id="trust-heading" className="mkt-h2">
          Built to stay local
        </h2>
        <div className="mkt-trust-grid">
          {TRUST.map((cell) => (
            <article key={cell.title} className="mkt-card">
              <h3>{cell.title}</h3>
              <p>{cell.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mkt-section mkt-section-rule" aria-labelledby="pricing-heading">
      <div className="mkt-section-inner">
        <h2 id="pricing-heading" className="mkt-h2">
          Pricing
        </h2>
        <div className="mkt-pricing-grid">
          <article className="mkt-card">
            <h3>Individual</h3>
            <p className="mkt-price">
              $50<span>/mo</span>
            </p>
            <p>7-day free trial</p>
            <Link href="/signup?plan=individual" className="hero-cta-primary mkt-price-cta">
              Start free trial
            </Link>
          </article>
          <article className="mkt-card">
            <h3>Teams</h3>
            <p className="mkt-price">
              $49<span>/seat/mo</span>
            </p>
            <p>10-seat minimum</p>
            <Link href="/signup?plan=team" className="hero-cta-secondary mkt-price-cta">
              Start free trial
            </Link>
          </article>
        </div>
        <p className="mkt-guarantee">
          If it doesn’t work, get your month back. Teams: any seat without measured lift in 60 days
          is free.
        </p>
      </div>
    </section>
  );
}
