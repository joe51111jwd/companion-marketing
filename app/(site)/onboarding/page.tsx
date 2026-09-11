import type { Metadata } from "next";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { onboarding, plainLanguage } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Onboarding",
  description: onboarding.description,
};

export default function OnboardingPage() {
  return (
    <>
      <section aria-labelledby="onboarding-heading" className="py-16 sm:py-24">
        <div className="container-page max-w-[72ch]">
          <p className="eyebrow">{onboarding.eyebrow}</p>
          <h1 id="onboarding-heading" className="display mt-6 text-fg">
            {onboarding.title}
          </h1>
          <p className="lede mt-8">{onboarding.description}</p>
        </div>
      </section>

      <Section id="storyboard" tone="subtle" title="Storyboard">
        <ol className="relative space-y-0 border-l border-border pl-8 sm:pl-10">
          {onboarding.steps.map((step) => (
            <li key={step.n} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-0 -left-[2.55rem] flex size-8 items-center justify-center rounded-full border border-border bg-surface text-[0.6875rem] font-semibold text-fg sm:-left-[3.05rem]"
              >
                {step.n}
              </span>
              <h2 className="h3 text-fg">{step.title}</h2>
              <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="same-words"
        eyebrow={plainLanguage.eyebrow}
        title="The notice uses these exact sentences."
        description={plainLanguage.description}
      >
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {plainLanguage.sentences.map((sentence, index) => (
            <li key={sentence} className="bg-surface p-8">
              <span
                aria-hidden="true"
                className="numeral text-[0.75rem] font-semibold text-fg-subtle"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-fg tight">{sentence}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="aside">
        <Card padding="lg" className="bg-fg text-[var(--bg)]">
          <h2 className="h2 text-[var(--bg)]">{onboarding.aside.title}</h2>
          <p className="mt-4 max-w-[60ch] text-[1.0625rem] leading-relaxed opacity-80">
            {onboarding.aside.body}
          </p>
          <Link href={onboarding.cta.href} className={`${buttonStyles("primary", "lg")} mt-8`}>
            {onboarding.cta.label}
          </Link>
        </Card>
      </Section>
    </>
  );
}
