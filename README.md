# Companion marketing

Source of truth for the Companion marketing site (Recorded Skills lean redesign).

**Live:** https://companion-marketing.vercel.app

## Clone and build

```bash
git clone https://github.com/joe51111jwd/companion-marketing.git
cd companion-marketing
pnpm install   # or: npm install
pnpm build     # or: npm run build
pnpm start     # or: npm start
```

Dev server: `pnpm dev` (or `npm run dev`).

## Routes

| Route | What it is |
| --- | --- |
| `/` | Marketing home (lean redesign: hero, product frame, CTAs) |
| `/team` | Team / manager landing |
| `/signup` | Trial signup |
| `/pricing` | Pricing |
| `/onboarding` | Onboarding |
| `/dashboard` | Manager dashboard shell |
| `/try/[recipeId]` | Sample walkthrough (e.g. `/try/sample`) |
| `/privacy` | Privacy |

## Notes for agents

- Redesign styles: `app/redesign.css` is an `@import` barrel of `app/redesign-a.css` + `app/redesign-b.css`. Together they define `mkt-hero`, `rs-frame`, and the rest of the lean redesign. Keep both part files; do not replace the barrel with `PLACEHOLDER`.
- User-facing copy is centralized in `lib/copy.ts` (`PRODUCT_NAME`).
- Production deploys should stay in sync with `main` on this repo.
