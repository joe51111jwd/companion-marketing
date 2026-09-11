import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyPrompt } from "@/components/copy-prompt";
import { FeedbackButtons } from "@/components/feedback-buttons";
import { Badge } from "@/components/ui/badge";
import { tryPage } from "@/lib/copy";
import { getRecipe, listRecipeIds } from "@/lib/recipes";

type PageProps = { params: Promise<{ recipeId: string }> };

export function generateStaticParams() {
  return listRecipeIds().map((recipeId) => ({ recipeId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { recipeId } = await params;
  const recipe = getRecipe(recipeId);
  return {
    title: recipe ? recipe.title : tryPage.notFound,
    description: recipe?.evidence,
  };
}

export default async function TryPage({ params }: PageProps) {
  const { recipeId } = await params;
  const recipe = getRecipe(recipeId);

  if (!recipe) notFound();

  return (
    <article className="py-16 sm:py-24">
      <div className="container-page grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
        <div>
          <Link
            href={tryPage.backLink.href}
            className="rounded-md text-[0.8125rem] font-semibold text-fg-muted transition-colors duration-150 hover:text-fg"
          >
            <span aria-hidden="true">← </span>
            {tryPage.backLink.label}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="eyebrow">{tryPage.eyebrow}</p>
            <Badge tone="accent">{recipe.tool}</Badge>
          </div>

          <h1 className="display mt-6 max-w-[20ch] text-fg">{recipe.title}</h1>

          <div className="mt-12 rounded-2xl border border-border bg-bg-subtle p-8">
            <p className="eyebrow">{tryPage.evidenceLabel}</p>
            <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed text-fg tight">
              {recipe.evidence}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {recipe.manual_signals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-md border border-border bg-surface px-2 py-1 text-[0.75rem] text-fg-muted"
                >
                  {signal}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.8125rem] leading-relaxed text-fg-subtle">
              {tryPage.evidenceNote}
            </p>
          </div>

          <section aria-labelledby="steps-heading" className="mt-16">
            <h2 id="steps-heading" className="eyebrow">
              {tryPage.stepsLabel}
            </h2>
            <ol className="mt-6 border-t border-border">
              {recipe.steps_template.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-2 border-b border-border py-8 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="numeral text-[0.8125rem] font-semibold text-fg-subtle sm:pt-1"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="h3 text-fg">{step.title}</p>
                    <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-12">
            <CopyPrompt prompt={recipe.prompt_template} />
          </div>

          <div className="mt-12">
            <FeedbackButtons />
          </div>
        </div>

        <aside
          aria-label="Walkthrough details"
          className="space-y-6 lg:sticky lg:top-24"
        >
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-card)]">
            <dl className="space-y-6">
              <Meta label={tryPage.toolLabel} value={recipe.tool} />
              <Meta
                label={tryPage.timeToTry}
                value={`${recipe.est_minutes_to_try} minutes`}
              />
              <Meta
                label={tryPage.timeSaved}
                value={`${recipe.est_minutes_saved_per_occurrence} minutes`}
              />
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="eyebrow">{tryPage.prerequisitesLabel}</p>
            <ul className="mt-6 space-y-4">
              {recipe.prerequisites.map((prerequisite) => (
                <li
                  key={prerequisite}
                  className="text-[0.9375rem] leading-relaxed text-fg-muted"
                >
                  {prerequisite}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow">{label}</dt>
      <dd className="numeral mt-2 text-[1.0625rem] font-semibold text-fg">{value}</dd>
    </div>
  );
}
