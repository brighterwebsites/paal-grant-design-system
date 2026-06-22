# Paal Grant Design System

**Paal Grant Designs In Landscaping** is an award-winning landscape design studio based in Buninyong (Ballarat region), Victoria, Australia. Founded and led by **Paal Grant**, the studio has over 20 years of experience creating site-responsive residential landscapes across Victoria and internationally. The practice operates as a high-end architectural landscape design only studio — not a landscaping contractor.

**Primary Services:** 3D Garden Design Packages (Small $2,400 / Medium $3,200 / Large $3,800 inc. GST), (not Landscape Construction)

**Service Areas:** Victoria — Ballarat, Geelong, Daylesford, Castlemaine, Torquay, Surf Coast, Melbourne. Remote/virtual Australia-wide.

**Contact:** 0417 164 772 · info@paalgrant.com · Buninyong, Victoria

---

## Sources

This design system was built from two primary sources:

1. **`uploads/paalgrant-redesign (27).html`** — v27 website redesign mockup, provided by Paal Grant. The canonical visual reference. Contains all CSS, layout, animations, copy, and component structures. *(Attached to this project)*

2. **GitHub: `brighterwebsites/paal-grant-design-system`** — Earlier design system (v16 era), containing initial token files, components, guidelines cards, and a UI kit prototype.

   - Repo URL: `https://github.com/brighterwebsites/paal-grant-design-system`
   - Contains tokens, components (Button, Badge, ProjectCard, FormField, Nav), and assets.

**Note:** The v27 mockup supersedes v16 in all visual decisions. The latest update is **v28** (`uploads/paalgrant-redesign (32).html`), which refines v27:

- **Colours — more accessible:** body cream lightened `#c9bfaf → #c8c5be` and default body opacity raised (0.72 → 0.85) for stronger contrast on the warm-charcoal grounds. Parchment palette formalised for the inverted "Most Popular" package card — `#f9f2e2` bg, `#2d3022` headings, `#69614e` muted, with `#d5c7ad` / `#b8c0a0` / `#8a9178` (olive) on dark olivewood (`#1e2419`) cards.
- **Font weights — heavier where it counts:** added Raleway **500 / 600 / 700**; card meta labels, CTAs, deliverable names and process numerals are now medium–bold (display headings stay 100 thin)
- **Border radius — soft curves system-wide:** previously sharp; now buttons/inputs 6px, cards/photos/badges 8px, portfolio 10px, review/award/footer 12px. Badges, tags and the hero award pill now carry the 8px radius (were square).
- **Botanical sprig motif:** a gold sprig SVG, used **only in the awards section** (plaque crest + section header)
- **More text motion:** staggered line/word rise (`pg-text-rise`, `pg-text-mask-up`) reveal tokens

v27 changes (carried forward):

- Background changed from near-black (`#0a0d08`) to warm charcoal (`#2b2b2b`)
- New gold award plaque system (`rgba(210,170,80,x)`)
- New scrolling awards & reviews sections
- New hero tagline roll-in animation
- New home bio section with Paal's photo
- Contact email updated to `info@paalgrant.com`

---

## Content Fundamentals

### Voice & Tone

- **First-person singular + plural** — "Hi, I'm Paal." / "we design and build"
- **Premium studio language** — reads like an architectural practice, never a trades service
- **Direct and confident** — statements of fact; no superlatives or marketing fluff
- **Calm and considered** — never urgent, never pushy

### Casing

- **Headings:** ALL CAPS with wide letter-spacing (0.08–0.12em)
- **Section labels:** ALL CAPS micro text (0.45em tracking)
- **Body copy:** Sentence case
- **CTAs/buttons:** UPPERCASE with 0.25em tracking

### Punctuation & Numbers

- Smart quotes ("curly"), em dashes for clauses and ranges
- Mid-dots (·) for location lists: `Ballarat · Geelong · Torquay`
- Non-breaking hyphen (‑) for "Australia‑wide"
- Numerals always: `20 years`, `$2,400`, `15+`, `3D`

### Copy Length

Short. One idea per sentence. Paragraphs max 3–4 sentences. Hero tagline: 3–5 words.

### Emoji

**Never used.** The brand is entirely emoji-free. Award section icons in v27 use Unicode emoji (emoji/iconography not yet confirmed by paal grant) 

---

## Visual Foundations

### Color System

**Background palette (v27 — warm charcoal):**

- `#2b2b2b` — main page background
- `#383838` — alternate section fills (home-intro, process, about)
- `#222222` — footer
- `#323232` — cards, review cards, media items
- `#1a2018` — featured/highlighted package card (sage-tinted)
- `#1e1e1c` — award plaque background base
- `#0d1410` — dark panels (virtual box)

**Brand accent — Sage green:**

- `#8a9b7a` / `rgba(138,155,122,x)` — the sole accent color
- Used at 7%–100% opacity for borders, labels, highlights, hover states, CTA backgrounds
- `#a8b299` — lighter sage variant used for review stars and bio caption

**Gold — Awards only (new in v27):**

- `rgba(210,170,80,x)` — exclusively for award plaque borders, text, and top rules
- Never used in general UI

**Text hierarchy:**

- `#eceae4` — headings (slightly warm white)
- `rgba(201,191,175,0.72–0.85)` — body text (warm cream)
- `#a8a5a0` — muted/secondary text
- `#808080` — dim/tertiary/disabled

### Typography

**Single typeface: Raleway** (Google Fonts — no other fonts used)

Weights in use:

- **100 Thin** — all display headings, hero, large numerals
- **200 ExtraLight** — subheadings, section titles, nav drawer links
- **300 Light** — body italic, captions, fine descriptors
- **400 Regular** — body copy, nav links, form labels
- **500 Medium** — (v28) card meta labels, CTAs, project/review names
- **600 SemiBold** — (v28) featured-card meta, deliverable names
- **700 Bold** — (v28) process step numerals

Letter-spacing is a critical brand signal:

- Section labels: `0.45em` — ultra-wide, architectural
- Nav links: `0.20em`
- CTAs: `0.25em`
- Headings: `0.08–0.12em`
- Body: `0.04–0.06em`

Type is always rendered with `-webkit-font-smoothing: antialiased`.

### Accessibility/Readability (v28 improvements)

- v28 lightened body cream (`#c8c5be`) and raised default body opacity to 0.85, and shifted body/meta off 100-weight toward 400–600 — both lift measured contrast vs. v27.
- Prior v27 ratios were 2.55, 3.39, 4.48, 4.83, 4.95 against a 4.5:1 minimum (normal 400-weight text); small 100-weight text lowered effective legibility further.
- Remaining sub-4.5:1 combinations (e.g. sage labels on charcoal) are still flagged — client decision pending on whether to push sage lighter.

### Layout & Spacing

- Generous breathing room: `100px` vertical section padding, `52px` horizontal
- Wide sections (packages, portfolio): `64px` horizontal
- Mobile collapses to `24px` horizontal padding
- Navigation: 100px tall → 80px solid; fixed-position
- Image grids use **3px gap** — tight, editorial, never white space
- Max content widths: `1200–1300px` for text columns; image grids full-bleed

### Backgrounds & Imagery

- **Hero:** Full-bleed photography with Ken Burns zoom/pan (10s enter, 1.8s leave)
- **Section fills:** Flat dark fills only — no gradients, no textures on surfaces
- **Cards:** Dark fill + sage-tinted top border for "featured" variant
- **Imagery character:** Warm, natural light; stone, water, foliage, native plantings. Slightly desaturated. Exclusively real project photography — no stock.

### Animation & Motion

- **Scroll fade-in:** `opacity 0→1` + `translateY 24px→0`, 0.9s ease
- **Ken Burns hero:** 10s enter (scale 1.12→1.03, translateY) + 1.8s leave
- **Image hover:** `scale(1.05)`, 0.7s ease — slow, unhurried
- **Nav link underline:** `scaleX 0→1` from left, 0.32s
- **Button hover:** Background and border-color shift, 0.25–0.28s
- **Scrolling tracks:** Awards and reviews auto-scroll (30s / 40s loops), paused on hover
- **Hero tagline:** Roll-in from below with 3D perspective (`rotateX(40deg) → 0`), staggered word delays
- **Award plaques:** Gold shimmer sweep on hover, `translateY(-4px)`
- **Text reveal (v28):** section titles and body rise into place — `pg-text-rise` / `pg-text-mask-up`, staggered `0.08s` per line, `0.85s` `cubic-bezier(0.22,1,0.36,1)`
- **No bounce, no spring, no fast snaps.** Everything is slow and assured.

### Borders & Cards

- Default border: `1px solid rgba(255,255,255,0.07)` — structural, near-invisible
- Accent border: `1px solid rgba(138,155,122,0.45–0.7)` — highlighted states
- Top accent rule: `2px solid rgba(138,155,122,0.85)` — "featured" card top
- Gold top rule: `2px solid rgba(210,170,80,0.75)` — award plaques
- **No box-shadows** — depth through background color layering only

### Border Radius

```
v28 — soft curves applied across the system (was sharp in v27):
0px  — full-bleed image grids only
4px  — hamburger spans (--radius-sm)
6px  — buttons, CTAs, form inputs, thumbnails (--radius-md / --radius-button / --radius-input)
8px  — cards, photos, package cards (--radius-lg / --radius-card / --radius-photo)
10px — portfolio cards (--radius-xl)
12px — review cards, award plaques, footer top corners (--radius-2xl / --radius-card-feature)
```

### Hover & Press States

- **Buttons:** Background fills to sage-30, border to full sage opacity
- **Nav links:** Color to `#fff`, underline `scaleX(1)`
- **Cards/images:** `scale(1.05)` on inner image, parent clips overflow
- **Footer links:** Color to `rgba(255,255,255,0.8)`
- **Award plaques:** Gold border intensifies, `translateY(-4px)`, shimmer sweep
- **Review cards:** Border to `rgba(168,178,153,0.4)`, `translateY(-4px)`
- **No press/shrink states** — brand does not use scale-down on click

### Divider Motifs

- **Botanical sprig (v28):** gold laurel/olive sprig SVG (`assets/botanical-sprig.svg`, also inline via `currentColor`) — used **only in the awards section** as plaque crest and section-header flourish. Never in general UI.
- **Diamond divider:** 7×7px sage square `rotate(45deg)` flanked by 88px lines at `rgba(138,155,122,0.38)`
- **Dot accent:** 4×4px circle `border-radius:50%`, sage — used for bullets and list dots
- **Vertical rule:** 1px gradient (transparent → sage-75), used as section breathing space
- **Progress bar:** 2px, sage-70 — hero slide progress at page bottom

---

## Iconography

**No icon library is used.** The brand uses pure CSS geometry and Unicode characters.

- **Dot accent:** `4×4px circle`, `border-radius:50%`, sage — list items, credential bullets, check marks
- **Diamond:** `7×7px square rotate(45deg)` — divider motif
- **Chevron SVG:** Inline `<polyline points="15 18 9 12 15 6">` — back navigation only
- **Stars:** Unicode `★` (★) — award badge and review stars only
- **Arrow:** `→` — text link suffixes
- **No icon fonts, no Lucide, no Heroicons**

NOTE: emojis appear in the v27 mockup and appear inconsistent with high end premium positioning and assessment of v16 design appear to elicit entirely emoji-free and no icon library. All geometry is pure CSS dots, diamonds, vertical rules, underlines. And in Sage at varying opacities.

---

## File Index

```
styles.css                          — Entry point (@import only)
readme.md                           — This file
SKILL.md                            — Agent skill definition

tokens/
  colors.css                        — All color custom properties (v27)
  typography.css                    — Raleway import + full type scale
  spacing.css                       — Spacing scale, layout, gap, radius tokens
  effects.css                       — Transitions, keyframes, animation tokens

assets/
  logo-landscape-white.png          — Landscape logo, white (primary — on dark BGs)
  logo-landscape-black.png          — Landscape logo, black (on light BGs)
  logo-landscape-on-black.png       — Landscape logo, reversed on black
  logo-stacked-white.png            — Stacked logo, white
  logo-stacked-black.png            — Stacked logo, black
  logo-stacked-on-black.png         — Stacked logo, reversed on black
  botanical-sprig.svg               — Gold botanical sprig motif (v28 — awards section only)
  mandala-stone-moon-gate-paal-grant-074.jpg
  mt-buninyong-country-estate-brick-archway-entrance-paal-grant-050-1200x630.webp
  gisborne-country-garden-curved-aggregate-paths-paal-grant-014-1200x630.webp
  paalgrant.jpeg                    — Portrait photo of Paal Grant

guidelines/
  colors-backgrounds.card.html      — Page & section background swatches
  colors-sage.card.html             — Sage green at all opacities
  colors-gold.card.html             — Gold awards palette (v27 new)
  colors-text.card.html             — Text/cream hierarchy
  type-specimen.card.html           — Raleway weights specimen
  type-display.card.html            — Display & heading scale
  type-body.card.html               — Body & UI type scale
  spacing.card.html                 — Spacing scale visual
  spacing-radius.card.html          — Border radius + border styles
  effects.card.html                 — Transitions & animation reference
  brand-logos.card.html             — All six logo lockups
  brand-dividers.card.html          — Diamond, dot, rule motifs
  brand-imagery.card.html           — Project photography style

components/
  buttons/
    Button.jsx / .d.ts / .prompt.md
    buttons.card.html               — sage, ghost, nav-cta, pkg variants
  badges/
    Badge.jsx / .d.ts / .prompt.md
    badges.card.html                — section-label, award, size, tag, breadcrumb, gold-title
  cards/
    ProjectCard.jsx / .d.ts / .prompt.md
    cards.card.html                 — Portfolio/featured image cards
  forms/
    FormField.jsx / .d.ts / .prompt.md
    forms.card.html                 — input, textarea, select
  navigation/
    Nav.jsx / .d.ts / .prompt.md
    navigation.card.html            — Fixed top nav (transparent → solid)
  awards/
    AwardPlaque.jsx / .d.ts         — Gold award plaque (new in v27)
    awards.card.html
  reviews/
    ReviewCard.jsx / .d.ts          — Google review card (new in v27)
    reviews.card.html

ui_kits/website/
  index.html                        — Full interactive website prototype (v27)
```

---

## Components

| Component | Variants | Notes |
| --- | --- | --- |
| `Button` | sage, ghost, nav-cta, pkg | 6px soft corners (v28); medium weight |
| `Badge` | section-label, award, size, tag, breadcrumb, gold-title, size-badge | Meta labels medium weight (v28) |
| `ProjectCard` | — | 8px radius, hover scale, gradient overlay |
| `FormField` | text, email, tel, textarea, select | 6px radius inputs |
| `Nav` | — | Scroll-based glassmorphism |
| `AwardPlaque` | — | Gold bordered, 12px radius, botanical sprig crest (v28) |
| `ReviewCard` | — | 12px radius, scrolling track |

**Namespace:** `window.PaalGrantDesignSystem_0e25b8`

---

## Fonts

**Raleway** — loaded from Google Fonts CDN. No font files are bundled locally (the Google CDN version is used).

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300&display=swap');
```

If offline font files are needed, the closest match on Google Fonts is Raleway itself. A self-hosted version can be downloaded from Google Fonts or purchased from MyFonts.

> **Note to Paal Grant:** If you have the original Raleway font files (.woff2/.ttf), please share them so they can be bundled into the design system for fully offline use.

---

## Website Pages

The website has six pages accessible via the top navigation:

1. **Home** — Hero slideshow, bio, intro CTA, featured projects, packages preview, awards strip, reviews
2. **About** — Paal's photo, biography, credentials list, media & awards grid
3. **Process** — 4-step process: Consultation → Design → Quote → Construction
4. **Design Packages** — 3 tiers (Small/Medium/Large), virtual delivery banner, full inclusions
5. **Projects** — Portfolio grid (12-column masonry)
6. **Contact** — Enquiry form + contact details

---

## Explore Further

The GitHub repository `brighterwebsites/paal-grant-design-system` contains the earlier v16 codebase and may have additional assets not yet imported. Explore it for:

- Additional project photography
- Any `.woff2` font files
- Earlier component iterations

Repository: https://github.com/brighterwebsites/paal-grant-design-system
