import Link from "next/link";

import { ClosingCta } from "@/components/marketing/closing-cta";
import { FeatureRows } from "@/components/marketing/feature-rows";
import { LayeredWindows } from "@/components/marketing/layered-windows";
import { QuoteGrid } from "@/components/marketing/quote-grid";
import { ToolStrip } from "@/components/marketing/tool-strip";
import { DigestDemo } from "@/components/digest-demo";
import { SkillsDemo } from "@/components/skills-demo";
import {
  hero,
  homePricing,
  offerBand,
  optInExceptions,
  pricing,
  riskReversal,
} from "@/lib/copy";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <OfferBand />
      <ToolStrip />
      <LayeredWindows />
      <FeatureRows />
      <section id="digest" className="hero digest-stack" aria-labelledby="digest-demo-heading">
        <div className="hero-copy">
          <p className="feature-kicker">Morning digest</p>
          <h2 id="digest-demo-heading" className="feature-title">
            Three things to hand to AI today.
          </h2>
          <p className="feature-body">
            Digests teach the AI tools already on the Mac. Recorded Skills is the one-button
            follow-through.
          </p>
        </div>
        <div className="hero-demo">
          <DigestDemo />
        </div>
      </section>
      <QuoteGrid />
      <PricingLine />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero">
      <div className="hero-copy">
        <p className="feature-kicker">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="hero-headline">
          {hero.headline}
        </h1>
        <p className="hero-subhead">{hero.subhead}</p>
        <p className="hero-pitch">{hero.pitch}</p>
        <div className="hero-actions">
          <Link href={hero.ctaPrimary.href} className="hero-cta-primary">
            {hero.ctaPrimary.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 2v7.2M4.2 7.4 7 10.2l2.8-2.8M2.5 12h9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href={hero.ctaSecondary.href} className="hero-cta-secondary">
            {hero.ctaSecondary.label} →
          </Link>
        </div>
        <p className="hero-note">{hero.ctaNote}</p>
      </div>

      <div id="demo" className="hero-demo">
        <SkillsDemo />
      </div>
    </section>
  );
}

function OfferBand() {
  return (
    <section className="offer-band" aria-labelledby="offer-heading">
      <p className="feature-kicker">{offerBand.eyebrow}</p>
      <h2 id="offer-heading" className="offer-audience">
        {offerBand.audience}
      </h2>
      <p className="offer-result">{offerBand.result}</p>
      <dl className="offer-grid">
        <div>
          <dt>Price</dt>
          <dd>{offerBand.price}</dd>
        </div>
        <div>
          <dt>Guarantee</dt>
          <dd>
            <strong>{offerBand.guarantee}</strong>
            <span>{offerBand.guaranteeBody}</span>
          </dd>
        </div>
      </dl>
      <div className="offer-actions">
        <Link href={offerBand.commitCta.href} className="hero-cta-primary">
          {offerBand.commitCta.label}
        </Link>
        <Link href={offerBand.pricingCta.href} className="hero-cta-secondary">
          {offerBand.pricingCta.label} →
        </Link>
        <Link href={offerBand.waitlistCta.href} className="offer-waitlist">
          {offerBand.waitlistCta.label} →
        </Link>
      </div>
      <p className="offer-waitlist-note">{offerBand.waitlistNote}</p>
    </section>
  );
}

function PricingLine() {
  return (
    <section className="pricing-line" aria-labelledby="pricing-line-heading">
      <p className="feature-kicker">{pricing.eyebrow}</p>
      <h2 id="pricing-line-heading" className="pricing-line-title">
        {riskReversal.headline}
      </h2>
      <p className="pricing-line-body">{homePricing.line}</p>
      <p className="pricing-line-optin">
        {optInExceptions.title} {optInExceptions.note}
      </p>
      <Link href="/pricing" className="feature-link">
        {homePricing.link} →
      </Link>
    </section>
  );
}
