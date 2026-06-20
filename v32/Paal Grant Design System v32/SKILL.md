---
name: paal-grant-design
description: Use this skill to generate well-branded interfaces and assets for Paal Grant Designs In Landscaping — an award-winning architectural landscape design studio based in Buninyong (Ballarat), Victoria. Contains essential design guidelines, color system, typography, assets, and UI kit components for prototyping and production design work.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, read the rules here to become an expert in designing with this brand.

## Quick Reference

**Brand essence:** High-end architectural landscape design studio. Quiet luxury, no noise.

**Font:** Raleway only — weights 100/200/300/400. Load via Google Fonts.

**Colors:**
- Page BG: `#2b2b2b` | Section alt: `#383838` | Footer: `#222222`
- Sage accent: `#8a9b7a` / `rgba(138,155,122,x)` — the sole accent
- Gold (awards only): `rgba(210,170,80,x)`
- Headings: `#eceae4` | Body: `rgba(201,191,175,0.72)` | Muted: `#a8a5a0`

**Logo:** Use `assets/logo-landscape-white.png` on dark backgrounds (default).

**Key design rules:**
- Sharp corners on all cards, sections, and sage/ghost buttons (no border-radius)
- 6px radius on inputs and nav CTA only; 12px on review cards and award plaques
- No box-shadows — depth through layered dark backgrounds
- No emoji anywhere
- No icon libraries — dots, diamonds, chevrons via CSS/Unicode only
- Never pure black — always `#2b2b2b` or deeper charcoal with green undertone
- Slow, assured animations — no bouncy, no fast snaps

**UI kit:** `ui_kits/website/index.html` — full interactive website (Home, About, Process, Packages, Portfolio, Contact)

If the user invokes this skill without other guidance, ask them what they want to build or design, ask some questions about their needs, and act as an expert designer who outputs HTML artifacts or production code depending on the need.
