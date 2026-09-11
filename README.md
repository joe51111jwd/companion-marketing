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

- Styles for the live redesign live in a single file: `app/redesign.css` (contains `mkt-hero`, `rs-frame`, etc.). Do not reintroduce an `redesign-a.css` / `redesign-b.css` barrel split.
- User-facing copy is centralized in `lib/copy.ts` (`PRODUCT_NAME`).
- Production deploys should stay in sync with `main` on this repo.
