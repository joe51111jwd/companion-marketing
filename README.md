# web

Marketing site, trial signup, manager dashboard shell and walkthrough pages for the
product whose name lives in `lib/copy.ts` as `PRODUCT_NAME`. Next.js 15 (App Router),
TypeScript, Tailwind v4, no external UI kit.

## Commands

```bash
pnpm install
pnpm lint
NODE_OPTIONS=--max-old-space-size=3072 pnpm build
pnpm start -p 3411
```

`pnpm dev` runs the dev server on :3000.

## Routes

| Route             | What it is                                                        |
| ----------------- | ----------------------------------------------------------------- |
| `/`               | Marketing: hero, plain-language sentences, five promises, the data ladder, a morning, pricing, FAQ |
| `/signup`         | Name, email, individual/team, 7-day trial. Posts to a server-action stub |
| `/dashboard`      | Manager shell and empty states: what a manager can and cannot see  |
| `/try/[recipeId]` | One static sample walkthrough (`/try/sample`): evidence, steps, prompt |
| `/privacy`        | Five promises + the full data-minimization ladder                  |

## Rules this directory follows

- **All user-facing text lives in `lib/copy.ts`.** Nothing else renders a literal
  sentence. Strings marked VERBATIM are copied from the spec and must not be reworded.
- **The product name only ever comes from `PRODUCT_NAME`.**
- **Banned words** (SPEC §8.10 lists the four words the product never uses about
  itself). The single permitted occurrence in this whole directory is
  `faq.notThat.answer`, which quotes the spec's own negation from §1.2. This README
  does not spell the words either, so the check stays clean:

  ```bash
  # the word list is read out of SPEC §8.10, so it is never duplicated in this repo
  words=$(sed -n 's/.*Never use:\(.*\)Use:.*/\1/p' ../SPEC.md \
    | tr -cd 'a-zA-Z ' | tr -s ' ' '\n' | grep -v '^$' | paste -sd'|' -)
  grep -rniE "$words" . --exclude-dir=node_modules --exclude-dir=.next \
    --exclude-dir=_screens --exclude=pnpm-lock.yaml
  # expected: exactly one line, lib/copy.ts (faq.notThat.answer)
  ```

  Note for future edits: Tailwind's letter-spacing utility family is deliberately
  unused, because its class prefix is itself one of the four words. `.tight` and the
  type classes in `app/globals.css` set letter-spacing instead.
- **Design tokens** are the `:root` variables in `app/globals.css` (light) and the
  `prefers-color-scheme: dark` block (dark). One accent, neutral grays, 8-pt spacing
  (only even Tailwind steps), system font stack, motion only via `.rise` and honouring
  `prefers-reduced-motion`.

## Not built here yet

Accounts, billing, email and real dashboard data are the server's job (SPEC §6).
`app/(site)/signup/actions.ts` is a stub that validates and returns a mock trial state;
`lib/recipes.ts` holds one sample recipe until `digest/recipes.json` is served.

`_screens/` holds the review screenshots (1440×900 and 400×800) for each page.
