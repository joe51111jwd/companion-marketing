# Companion marketing redesign — engineering brief
**For:** AI Teach CEO → eng · **Bar:** cursor.com density · **Pitch:** Joe · **Live temp:** https://temporary-express-flint-bt04wtp.vercel.app  
**Headline feature:** Recorded Skills (accessibility-first capture → one-button run; managers get content-free aggregates only)

---

## 1. Design system (tokens)

```css
:root {
  /* Surfaces */
  --canvas: #f7f7f4;
  --surface: #f2f1ed;
  --surface-alt: #ebeae5;
  --hairline: #e6e5e0;
  --ink: #26251e;
  --ink-muted: #606055;
  --white: #ffffff;

  /* Accent — one voltage only */
  --accent: #f54e00; /* Cursor-orange parity; use ONLY primary CTA + wordmark */

  /* Product chrome (inside demo window) */
  --chrome-bg: #201e18;
  --chrome-panel: #2a2820;
  --chrome-hairline: rgba(247, 247, 244, 0.12);
  --chrome-text: #f7f7f4;
  --chrome-muted: rgba(247, 247, 244, 0.55);

  /* Type */
  --font-display: "CursorGothic", Inter, system-ui, sans-serif;
  --font-body: Inter, system-ui, -apple-system, sans-serif;
  --font-mono: "Berkeley Mono", "JetBrains Mono", ui-monospace, Menlo, monospace;

  /* Radii / borders — sharp, not bubbly */
  --r-sm: 4px;
  --r-md: 6px;
  --r-lg: 8px; /* CTA max */
  --border: 1px solid var(--hairline);

  /* Rhythm */
  --section-y: 80px;
  --page-x: clamp(20px, 4vw, 48px);
  --max: 1080px;
  --max-wide: 1200px;
}
```

**Type scale (marketing)**
| Token | Size / weight / tracking |
|-------|--------------------------|
| Hero | **26px / 400** / -0.02em · max-width ~28ch |
| Section H2 | 22px / 400 / -0.01em |
| Body | 15–16px / 400 / normal · ink-muted for secondary |
| Label / mono | 12–13px mono · uppercase tracking optional sparingly |
| CTA | 14px / 500 · pill `border-radius: 999px` or 8px max |

**Rules**
- No drop shadows. Depth = hairline + surface shift only.
- No grain, gradients-as-vibe, neon, glassmorphism, AI illustration fills.
- No stock “handshake with robot.” Product chrome is CSS UI, not paintings.
- One chromatic accent. Everything else cream/ink.

---

## 2. Kill list (current page)

1. **Repetition wall** — privacy / “stays on Mac” / content-free JSON shown 4–6 times. Say it **once** in a Trust strip + once inside the demo.
2. **Soft sales mush** — “You should feel stupid saying no,” overlong guarantee paragraphs. One calm guarantee line.
3. **Thin mock chat** — fake chips without a real Recorded Skills loop. Replace with interactive demo window.
4. **Scattered Alpha lessons** as hero clutter. Move to Resources or cut for pitch.
5. **Tool logo laundry** without context. One row max, or fold into demo (“opens beside Claude”).
6. **Multiple competing CTAs** with same weight. One primary (Start free trial), one ghost (Watch how Recorded Skills works).
7. **Any AI-slop imagery** (surreal portraits, neon, dither wallpaper). Out.

---

## 3. Page IA (lean — Joe pitch)

```
[Nav] Companion · Product · Trust · Pricing · [Start free trial]
[Hero] 26/400 line + sub + CTAs + LIVE DEMO WINDOW (primary visual)
[How] 4-step Recorded Skills strip (Notice → Teach → Record → Run)
[Trust] One panel: local capture · content-free manager view · allowlist
[Pricing] Individual $50 · Teams $49/seat (10 min) · trial · guarantee (1 line)
[Footer] Mac 15+ · permissions · legal one-liner
```

Optional below fold if needed: 1 short “For managers” metrics mock (aggregates only). **No** second privacy essay.

---

## 4. Section copy (use as-is or tighten)

### Nav
`Companion` · Product · Trust · Pricing · **Start free trial**

### Hero
**H1 (26/400):**  
`Turn your actions into skills — automatically, safely.`

**Sub:**  
`Recorded Skills notices repeats, teaches a walkthrough in the AI tool you already have, then records once into a one-button run. Capture stays on the Mac. Managers see content-free adoption numbers — never your screen.`

**Primary CTA:** `Start free trial`  
**Secondary:** `See Recorded Skills` (scroll/anchor to demo)

**Micro:** `7-day free trial · no card · Mac, macOS 15+`

### How (4 columns / steps)
1. **Notice** — Same reply shape, nine times last week.  
2. **Teach** — Walkthrough opens beside the work (Claude, ChatGPT, Copilot…).  
3. **Record once** — You opt in. Steps stay on this Mac. Accessibility-first — not screenshot-and-keep.  
4. **Run** — AI streamlines redundant clicks. One-button skill.

### Trust (single strip — three cells)
| Local by default | Managers see aggregates | You stay in control |
|---|---|---|
| Accessibility capture. Pixels classified on-device and discarded. Nothing uploads in the background. | Seats consented · active days · suggestions tried · AI-tool minutes. No screen, titles, or descriptions. | Allowlist apps. Pause anytime. Delete everything anytime. |

### Pricing
**Individual** — `$50/mo` · 7-day free trial  
**Teams** — `$49/seat/mo` · 10-seat minimum  

**Guarantee (one line):**  
`If it doesn’t work, get your month back. Teams: any seat without measured lift in 60 days is free.`

### Footer microcopy
`Mac app · Screen Recording + Accessibility only · No ads · No training on your data`

---

## 5. Hero interaction — Recorded Skills demo window

**Goal:** Cursor-style interactive product chrome on cream canvas. Real UI, not a painting.

**Frame**
- Outer: `max-width: 920px`, `border: var(--border)`, `border-radius: var(--r-lg)`, `background: var(--chrome-bg)`, hairline top bar (traffic lights CSS-only, title `Companion · Recorded Skills`).
- Inner split: **left** timeline / skill builder · **right** “beside the work” panel (Gmail or Notes mock, CSS only).

**Interaction loop (click-through, ~4 states)**
1. **Notice** — chip: `Gmail · parent update · ~9× last week`  
2. **Teach** — show 4-step walkthrough list beside compose mock  
3. **Record** — toggle `Record this as a skill` → progress steps (App focus → Clipboard local → Claude draft → Review/send)  
4. **Run** — skill card `Friday parent update` with **Run** button → success state `One-button · 4 steps · ~6 min`

**Constraints**
- CSS/HTML/JS only. No video required for v1.
- No real network. Local state machine.
- Optional: keyboard `1–4` to step states for demos to Joe.
- Monospace only for payload peek (one collapsed `<details>`): show content-free JSON fields — not a full trust sermon.

**Component sketch**
```
┌─ Companion · Recorded Skills ───────────────── ● ● ●─┐
│ [Notice] [Teach] [Record] [Run]     ← step tabs     │
├──────────────────────┬──────────────────────────────┤
│ Skill timeline       │ Work surface (Gmail mock)    │
│ • notice chip        │ Subject / body CSS chrome    │
│ • 4 steps            │ Walkthrough overlay card     │
│ [ Record / Run CTA ] │                              │
└──────────────────────┴──────────────────────────────┘
```

---

## 6. Layout / CSS notes for eng

- Page bg: `--canvas`. Sections alternate canvas / surface only if needed; prefer continuous cream + hairline section rules.
- Hero: 2-col desktop (copy left ~40% / demo right ~60%); stack mobile (copy → demo).
- Primary button: `background: var(--ink); color: var(--canvas);` OR accent fill for the single primary — pick **one** system and stick (recommend ink pill primary, accent only on wordmark + trial micro-link).
- Ghost button: `border: var(--border); color: var(--ink); background: transparent`.
- Cards: `background: var(--surface); border: var(--border); border-radius: var(--r-md); padding: 20px;`.
- Section padding: `var(--section-y)` vertical; content `max-width: var(--max); margin-inline: auto`.
- Prefer `gap` grids over nested margins. 12-col optional; 2/4-col enough.

---

## 7. Acceptance (Joe-ready)

- [ ] Hero reads at 26/400 on cream; no bold bombast  
- [ ] Interactive Recorded Skills window works (4 states)  
- [ ] Privacy said once (Trust strip), not a scroll essay  
- [ ] Zero AI-illustration / grain / neon  
- [ ] One primary CTA path to trial  
- [ ] Pricing + guarantee in one calm band  
- [ ] Feels like cursor.com sibling, not a Notion doc or Midjourney moodboard  

**Out of scope for this pass:** blog, full changelog, animated landscape wallpapers, multi-page marketing.

— learn design · 2026-09-11
