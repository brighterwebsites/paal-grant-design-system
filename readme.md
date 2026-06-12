# Paal Grant — Design System

Visual Design System v 16 (https://github.com/brighterwebsites/paal-grant-design-system/blob/main/design-system.html)

**Paal Grant Designs In Landscaping** is an award-winning landscape designer based in Regional, Victoria (Primary Ballarat/Physically Bunningyong). The studio is founded and led by Paal Grant, with over 20 years of experience creating site-responsive residential landscapes across Victoria and internationally.

**Sources used:** `uploads/paalgrant-redesign (16).html` — full multi-page website redesign, including all CSS, components, content, and JavaScript interactions.

---

## Brand Overview

Paal Grant is a design-led practice, not a generic landscaping contractor. The brand conveys:
- **Authority** — international and national awards, 20+ years experience
- **Precision** — 3D visualisation before construction, meticulous documentation
- **Nature-rooted craft** — organic materials, green-tinged neutrals, earthy cream tones
- **Quiet luxury** — refined restraint, never loud; sparse copy; lots of breathing room

**Primary services:** 3D Garden Design Packages (Small $2,400 / Medium $3,200 / Large $3,800 inc. GST) and virtual design delivery Australia-wide.

**Service areas:** Victoria — Ballarat, Geelong, Daylesford, Castlemaine, Torquay. Remote via Australia.

**Contact:** 0417 164 772 · paalgrant@gmail.com · Victoria

**Target Primary Service Location** Ballarat, but physically located in Buninyong

---

## Content Fundamentals

- **Voice:** First-person plural ("we", "our"), never second-person gimmicks. Direct and confident without being pushy.
- **Tone:** Calm, considered, premium. Reads like a design studio, not a tradesperson.
- **Casing:** Headings are uppercase with wide tracking. Body copy is sentence case. Section labels are all-caps micro text.
- **Emoji:** Never used — brand is entirely emoji-free.
- **Numbers:** Written as numerals always (3D, 15+, 20 years, $2,400).
- **Punctuation:** Smart quotes (curly), em dashes for ranges and clauses, mid-dots for location lists.
- **Copy length:** Short. 
---

## Visual Foundations
Client provided from mockup

### Colors
- **Page background** — `#0a0d08` — near-black with a green undertone, never pure black
- **Section fills** — `#242422` (primary), `#161a14` (secondary) — subtle warm/green separation
- **Card backgrounds** — `#0d1710` (sage-tinted), `#0d1210` (media/inc items)
- **Sage green** — `#8a9b7a` — the sole accent color; used at 7%–100% opacity for borders, labels, highlights, hover states, CTA backgrounds
- **Cream text** — `rgba(201,191,175,*)` — warm beige for body text, ranges 32%–85% opacity
- **White** — pure `#fff` for headings and active UI; sub-white `rgba(255,255,255,0.82)` for nav

### Typography
- **Font:** Raleway (Google Fonts) — weights 100 (Thin), 200 (ExtraLight), 300 (Light), 400 (Regular); italic 200 and 300
- **Display headings:** Weight 100 (Thin), uppercase, 0.08–0.12em letter-spacing. Size via fluid `clamp()`.
- **Section labels:** 0.58rem, weight 300, 0.45em letter-spacing, uppercase, sage color
- **Body:** 0.88–0.92rem, weight 300, line-height 1.85–1.95, cream text color
- **CTA/Button text:** 0.65rem, weight 400, 0.25em letter-spacing, uppercase
- **Nav links:** 0.72rem, weight 400, 0.2em letter-spacing, uppercase
- No serif, no monospace — Raleway only across all surfaces.

### Spacing & Layout
- Generous breathing room: 100px vertical section padding, 52px horizontal
- Mobile collapses to 24px horizontal padding
- Nav is 100px tall (solid: 80px), fixed-position with scroll-based glassmorphism
- Page width is unconstrained full-bleed (max-width 1200–1300px for text columns)
- Image grids use a 3px gap, never white space — creates tight editorial feel

### Backgrounds & Imagery
- Hero: full-bleed photography with Ken Burns zoom/pan animation, dark overlay gradient
- Section backgrounds: flat dark fills, no gradients or textures on surfaces
- Cards: dark fill + subtle sage-tinted top border for the "featured" variant
- Imagery: warm, natural light; stone, water, foliage. Color graded with subtle desaturation.

### Animation & Motion
- Fade-in scroll reveals: `opacity 0→1` + `translateY 24px→0`, 0.9s ease
- Ken Burns hero: 10s enter (scale 1.12→1.03, translateY) + 1.8s leave
- Hover on images: `scale(1.05)`, 0.7s ease — smooth and unhurried
- Nav link underline: scaleX 0→1 from left, 0.32s ease
- Button hover: background and border-color shift, 0.25–0.28s ease
- No bounce, no spring, no fast snaps. Everything is slow and assured.

### Hover & Press States
- **Buttons:** Background fills to `rgba(138,155,122,0.3)`, border lightens to full sage opacity
- **Nav links:** Color to `#fff`, underline `scaleX(1)`
- **Cards/images:** Scale(1.05) on the inner image, parent clips overflow
- **Footer/drawer links:** Color to `rgba(255,255,255,0.8)`
- **No press/shrink states** — brand does not use scale-down on click

### Borders & Cards
- Default border: `1px solid rgba(255,255,255,0.07)` — almost invisible, structural only
- Accent border: `1px solid rgba(138,155,122,0.4–0.7)` — used for featured/highlighted states
- Top accent rule: `2px solid rgba(138,155,122,0.7)` — "Most Popular" card top
- Border radius: **8px** universal for all cards, panels, images; **6px** for small UI (inputs, nav CTA, thumbnails); **12px** for footer top corners
- No box-shadows anywhere — depth is created purely through background color layering

### Dividers
- Diamond divider: 7×7px sage square rotated 45° flanked by 88px horizontal lines
- Vertical rule: 1px wide, gradient to sage — used as section entry/exit breathing element
- Horizontal rule: `1px solid rgba(255,255,255,0.07)` between sections and card sections

### Iconography
No icon library is used. Iconography is minimal and geometric:
- **Dot accent:** 4×4px circle, `border-radius: 50%`, sage color — used instead of bullet points and as section decorators
- **Diamond:** 7×7px square `rotate(45deg)` — divider motif
- **Chevron SVG:** inline `<polyline points="15 18 9 12 15 6">` — back navigation only
- **Stars:** Unicode `&#9733;` — award badge only
- **Arrow:** `→` (HTML entity) — text links
- No icon fonts, no Heroicons, no Lucide. All decorative needs are met with pure CSS geometry.

### Corner Radius System
```
4px  — hamburger button
6px  — nav CTA button, form inputs, thumbnails
8px  — all cards, panels, media cards, gallery, images, virtual box, callouts, buttons
12px — footer (top two corners only: border-radius: 12px 12px 0 0)
0px  — hero sections (full-bleed, no radius)
```

---

## File Index

```
styles.css                  — Entry point (@imports only)
readme.md                   — This file

tokens/
  colors.css                — All color custom properties
  typography.css            — Font imports + type scale tokens
  spacing.css               — Spacing scale, layout, border-radius tokens
  effects.css               — Transitions, keyframes, blur, animation tokens

assets/
  logo-landscape-black.png  — Landscape logo, black on transparent
  logo-landscape-white.png  — Landscape logo, white on transparent
  logo-landscape-on-black.png — Landscape logo, white on black background
  logo-stacked-black.png    — Stacked logo, black on transparent
  logo-stacked-white.png    — Stacked logo, white on transparent
  logo-stacked-on-black.png — Stacked logo, white on black background

guidelines/
  colors.card.html          — Color palette specimen
  colors-semantic.card.html — Semantic color aliases
  typography.card.html      — Type scale specimen
  spacing.card.html         — Spacing + radius tokens
  effects.card.html         — Animations & transitions
  brand-logos.card.html     — Logo usage
  brand-dividers.card.html  — Divider + dot motifs

components/
  buttons/
    Button.jsx              — Primary sage, ghost, nav CTA variants
    Button.d.ts
    Button.prompt.md
    buttons.card.html
  badges/
    Badge.jsx               — Section label, award badge, size badge, tag
    Badge.d.ts
    Badge.prompt.md
    badges.card.html
  cards/
    ProjectCard.jsx         — Image + overlay project card
    ProjectCard.d.ts
    ProjectCard.prompt.md
    cards.card.html
  forms/
    FormField.jsx           — Input, textarea, select
    FormField.d.ts
    FormField.prompt.md
    forms.card.html
  navigation/
    Nav.jsx                 — Site navigation bar
    Nav.d.ts
    Nav.prompt.md
    navigation.card.html

ui_kits/website/
  index.html                — Interactive website prototype
  README.md
```
