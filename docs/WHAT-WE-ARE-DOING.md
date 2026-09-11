# Companion — what we are doing (short)

**As of:** 2026-09-11  
**Main tip:** `f8814f8`  
**Host `.app`:** still `aaf37e2`  
**Gate:** RED / not accept-m0 · Nat HOLD

## What Companion is
Passive AI upskilling for company seats. Notices repetitive hand work, teaches people to use the AI tools they already have (lessons + walkthrough + Ask). Manager sees **content-free** team numbers only.

## How it gets info (capture)
- **Primary path: Accessibility text** (UI accessibility APIs), not “screenshot the screen and keep images.”
- App still requests **Screen Recording + Accessibility** (both gated until the person grants them).
- Product line: *Accessibility text first. On-device classification. Pixels discarded within seconds.*
- **Never uploaded:** screenshots, OCR text, window titles, descriptions, journal. Outbound is aggregates / content-free only.
- Not keystrokes, clipboard, files, audio, or browser history.


## Advertised main feature: Recorded Skills
**Turn your actions into skills automatically. It's safe.**

Notice → Teach → Offer to record once → AI streamlines → one-button run.
Capture stays local (accessibility-first). No bossware / no manager replays. Nothing uploaded in the background.

**Posture:** shipping Alpha now (teaching + walkthrough + Ask + `/team` aggregates). **Recorded Skills is the advertised next wedge** (post-M0) — lead marketing with it; do not claim it ships in the Alpha package yet.

## What is on main right now
| Piece | Status |
|-------|--------|
| Mac Decision-B first-run (utility feel) | landed |
| Ask + Lessons shells | landed |
| Lesson walkthrough (explicit done/skip) | landed |
| Alpha catalog (3 lessons, 4/4/3 min) | landed |
| Walkthrough-grounded Ask chips | landed (#29) |
| Web `/team` privacy-safe aggregates | landed (#30 @ `f8814f8`) |
| Cloud Mac package catch-up / live TCC | **not** done — `.app` frozen `aaf37e2` |

## Alpha lesson freeze
`alpha-agenda-v1` · `alpha-checklist-v1` · `alpha-announcement-v1`

## How we are working (ops)
- Build/test in **cloud only** — James’s Mac = git push/pull + status, no agent host builds.
- Coding via **Cursor included/default models** only (not frontier).
- Lean agent chat: score only on tip SHAs; land after Copy + Trust + QA.
- Gate stays **RED** until acceptance criteria (T-002 invite, package, privacy gate) clear.

## Demo story (employee → manager)
1. Mac: Access → Today → Lessons walkthrough → Ask chips (step-preserving, local).
2. Web `/team`: Tried / Completed / Minutes back · What’s working · Alpha Lessons — no seat drilldown.
3. Close: local-only Ask; manager never sees screen content.
