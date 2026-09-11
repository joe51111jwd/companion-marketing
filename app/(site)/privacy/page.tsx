import type { Metadata } from "next";

import { FieldLists, LadderTable } from "@/components/ladder-table";
import { PromiseList } from "@/components/promise-list";
import { Card } from "@/components/ui/card";
import { MarkerList } from "@/components/ui/marker-list";
import { Section } from "@/components/ui/section";
import { dashboard, plainLanguage, privacy } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacy.description,
};

export default function PrivacyPage() {
  return (
    <>
      <section aria-labelledby="privacy-heading" className="py-16 sm:py-24">
        <div className="container-page max-w-[72ch]">
          <p className="eyebrow">{privacy.eyebrow}</p>
          <h1 id="privacy-heading" className="display mt-6 text-fg">
            {privacy.title}
          </h1>
          <p className="lede mt-8">{privacy.description}</p>
        </div>
      </section>

      <Section
        id="promises"
        tone="subtle"
        eyebrow="Five promises"
        title={privacy.promisesTitle}
        description={privacy.promisesDescription}
      >
        <PromiseList />
      </Section>

      <Section
        id="ladder"
        eyebrow="The ladder"
        title={privacy.ladderTitle}
        description={privacy.ladderDescription}
      >
        <div className="space-y-6">
          <LadderTable />
          <FieldLists />
        </div>
      </Section>

      <Section
        id="language"
        tone="subtle"
        eyebrow="Wording"
        title={privacy.languageTitle}
        description={privacy.languageDescription}
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

      <Section id="controls" eyebrow="Controls" title={privacy.controlsTitle}>
        <ul className="grid gap-6 md:grid-cols-2">
          {privacy.controls.map((control) => (
            <Card as="li" key={control} padding="sm">
              <p className="text-[0.9375rem] leading-relaxed text-fg">{control}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section
        id="teams"
        tone="subtle"
        eyebrow="Teams"
        title={privacy.teamTitle}
        description={privacy.teamDescription}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card padding="lg">
            <h3 className="h3 text-fg">{dashboard.canSee.title}</h3>
            <MarkerList items={dashboard.canSee.items} className="mt-6" />
          </Card>
          <Card padding="lg">
            <h3 className="h3 text-fg">{dashboard.cannotSee.title}</h3>
            <MarkerList
              items={[...dashboard.cannotSee.items, ...dashboard.cannotDo.items]}
              className="mt-6"
            />
          </Card>
        </div>

        <p className="mt-8 max-w-[72ch] text-[0.9375rem] leading-relaxed text-fg-muted">
          {dashboard.controller}
        </p>
      </Section>
    </>
  );
}
