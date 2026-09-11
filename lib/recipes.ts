/**
 * One static sample recipe for /try/[recipeId]. Shape follows SPEC §4.5:
 * {id, task_type, manual_signals[], tool, title, steps_template[], prompt_template,
 *  prerequisites[], est_minutes_to_try, est_minutes_saved_per_occurrence, affiliate_url?}
 *
 * The real library is 60 human-reviewed YAML recipes in digest/recipes/, versioned and
 * downloaded by the Mac app. This file exists so the walkthrough page can be designed and
 * reviewed before the library is wired up; it is not a second source of truth.
 */

export type Recipe = {
  id: string;
  task_type: string;
  manual_signals: string[];
  tool: string;
  title: string;
  evidence: string;
  steps_template: { title: string; detail: string }[];
  prompt_template: string;
  prerequisites: string[];
  est_minutes_to_try: number;
  est_minutes_saved_per_occurrence: number;
  affiliate_url?: string;
};

const SAMPLE: Recipe = {
  id: "sample",
  task_type: "reply_email",
  manual_signals: ["repeated 9× last week", "template-like", "same recipient pattern"],
  tool: "Claude",
  title: "Draft a week of parent updates from one bullet list",
  evidence:
    "You rewrote the same parent-update email in Gmail about 9 times last week. Claude can draft all of them from one bullet list — 4 steps, 6 minutes.",
  prerequisites: [
    "Claude installed and signed in — the onboarding helper can do this for you",
    "Two of last week's parent updates open in Gmail, to copy the tone from",
  ],
  steps_template: [
    {
      title: "Open Claude beside Gmail",
      detail:
        "Put the two windows side by side. You will move one block of text across, once.",
    },
    {
      title: "Write the week as bullets",
      detail:
        "One line per student: name, what changed, what you want the parent to do. Shorthand is fine — the point is that you write it once.",
    },
    {
      title: "Paste the prompt below, then your bullets",
      detail:
        "Paste one of last week's emails underneath when it asks, so the drafts sound like you and not like a template.",
    },
    {
      title: "Read, fix one, send",
      detail:
        "Fix the first draft properly and tell Claude what you changed; the rest of the batch picks it up. Never send a draft you have not read.",
    },
  ],
  prompt_template: `You are drafting parent update emails in my voice.

Here is one email I wrote last week — match its tone, length and level of formality:
[paste one of your own emails]

Here are this week's updates, one line per student:
[paste your bullets]

Write one short email per student. Rules:
- Open with something specific and true from the bullet, never a generic greeting.
- One clear ask at the end, or none at all if there is nothing to ask.
- No praise the bullet does not support.
- Under 120 words each.

Return them as a numbered list with the student's name as the heading.`,
  est_minutes_to_try: 6,
  est_minutes_saved_per_occurrence: 9,
};

const RECIPES: Record<string, Recipe> = { [SAMPLE.id]: SAMPLE };

export function getRecipe(id: string): Recipe | undefined {
  return RECIPES[id];
}

export function listRecipeIds(): string[] {
  return Object.keys(RECIPES);
}
