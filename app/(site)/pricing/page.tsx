import type { Metadata } from "next";
import Link from "next/link";

import { GuaranteeBand } from "@/components/guarantee-band";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { pricing, riskReversal } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricing.description,
};

export default function PricingPage() {
  return (
    <>
      <section aria-labelledby="pricing-heading" className="py-16 sm:py-24">
        <div className="container-page max-w-[72ch]">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h1 id="pricing-heading" className="display mt-6 text-fg">
            {pricing.title}
          </h1>
          <p className="lede mt-8">{pricing.description}</p>
          <p className="mt-8 text-[1.25rem] leading-snug font-semibold text-fg tight">
            {riskReversal.headline}
          </p>
        </div>
      </section>

      <Section id="plans" tone="subtle" title="Plans">
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.plans.map((plan) => (
            <Card
              as="article"
              key={plan.id}
              padding="lg"
              className={
                plan.featured
                  ? "border-fg-subtle/40 shadow-[var(--shadow-lift)] ring-1 ring-accent/25"
                  : undefined
              }
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="h3 text-fg">{plan.name}</h2>
                {plan.featured && <Badge tone="accent">{pricing.featuredBadge}</Badge>}
              </div>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="numeral text-[2.75rem] leading-none font-semibold text-fg">
                  {plan.price}
                </span>
                <span className="text-[0.9375rem] text-fg-muted">{plan.period}</span>
              </p>

              <p className="mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                {plan.summary}
              </p>

              <Link
                href={plan.cta.href}
                className={buttonStyles(
                  plan.featured ? "primary" : "secondary",
                  "md",
                  "mt-8 w-full",
                )}
              >
                {plan.cta.label}
              </Link>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[0.9375rem] text-fg-muted">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card padding="lg" tone="subtle">
            <h3 className="h3 text-fg">Individual guarantee</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
              {riskReversal.individual}
            </p>
            <p className="mt-4 text-[0.8125rem] text-fg-subtle">{pricing.guarantee.claim}</p>
          </Card>
          <Card padding="lg" tone="subtle">
            <h3 className="h3 text-fg">Team guarantee</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
              {riskReversal.team}
            </p>
          </Card>
        </div>
      </Section>

      <GuaranteeBand />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-1 shrink-0 text-accent"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
