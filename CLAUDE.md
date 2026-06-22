# Paal Grant Design System — CLAUDE.md

Knowledge base for translating design system files into Breakdance-compatible WordPress DB imports. Intended to eventually become a skill that generates working output in one pass.

---

## Repository Structure

```
v2/                        — live production design system
  tokens/                  — standalone CSS token files (colors, typography, spacing, effects)
  breakdance/
    globalsettings.json    — Breakdance global settings (DB import)
    globalclasses.json     — Breakdance selectors/classes (DB import)

v32/                       — v32 redesign (in progress)
  design-system.html       — 18-section standalone HTML reference (open in browser)
  breakdance/
    globalsettings.json    — v32 global settings ready for DB import
    global-css.css         — human-readable version of stylesheet[0] code
```

The `design-system.html` files are the source of truth for visual intent. The Breakdance JSON files are derived from those.

---

## Breakdance WordPress DB Architecture

Two `wp_options` keys control all global styling:

| Option key | Content | File in repo |
|---|---|---|
| `breakdance_global_settings_json_string` | Colors palette, typography, global CSS stylesheets, JS scripts, button defaults, container widths, form radius | `*/breakdance/globalsettings.json` |
| `breakdance_breakdance_classes_json_string` | Array of named CSS selector objects ("Selectors" panel in builder) | `*/breakdance/globalclasses.json` |

**Import method (Breakdance UI):** Builder top-left `⋯` menu → Global Settings → `⋯` → Import Global Settings (uploads `globalsettings.json` directly).

**Import method (DB):** For `globalclasses.json`, the value must be stored double-encoded — see encoding section below.

---

## `globalsettings.json` Schema

Top-level shape:
```json
{
  "settings": {
    "colors": { ... },
    "typography": { ... },
    "code": { "stylesheets": [...], "scripts": [...] },
    "buttons": { ... },
    "containers": { ... },
    "forms": { ... },
    "other": { ... }
  },
  "code": {
    "scripts": [...]
  }
}
```

### Colors

```json
"colors": {
  "brand":      "var(--color-sage)",
  "text":       "var(--color-cream-72)",
  "headings":   "var(--color-eggshell)",
  "links":      "var(--color-sage)",
  "background": "var(--color-page)",
  "palette": {
    "colors":    [ /* solid color entries */ ],
    "gradients": [ /* gradient entries */ ]
  }
}
```

#### Solid color entry
```json
{
  "cssVariableName": "color-sage",
  "label": "Sage",
  "value": "#8a9b7a"
}
```
`cssVariableName` becomes `var(--color-sage)` in the palette picker. The `value` is always a hex string (no `var()`, no `rgba()`).

**Alpha colors use 8-digit hex** `#RRGGBBAA`:
- AA = `Math.round(alpha * 255).toString(16).toUpperCase().padStart(2,'0')`
- Common values: 0.9→E6, 0.85→D9, 0.75→BF, 0.70→B3, 0.60→99, 0.45→73, 0.28→47, 0.22→38, 0.15→26, 0.10→1A, 0.08→14, 0.07→12, 0.06→0F, 0.04→0A

#### Gradient entry
```json
{
  "cssVariableName": "overlay-hero",
  "label": "Overlay Hero",
  "value": {
    "points": [
      { "left": 0,   "red": 6, "green": 9, "blue": 5, "alpha": 0.38 },
      { "left": 38,  "red": 6, "green": 9, "blue": 5, "alpha": 0.04 },
      { "left": 100, "red": 6, "green": 9, "blue": 5, "alpha": 0.72 }
    ],
    "type": "linear",
    "degree": 180,
    "svgValue": "<linearGradient ...>...</linearGradient>",
    "value": "linear-gradient(180deg, rgba(6,9,5,0.38) 0%, ...)"
  }
}
```
`svgValue` uses `%%GRADIENTID%%` as a placeholder Breakdance substitutes at render time. `value` is the plain CSS string used outside of SVG contexts.

### Typography

```json
"typography": {
  "heading_font": "gfont-raleway",
  "body_font":    "gfont-raleway",
  "base_size": {
    "breakpoint_base": { "number": 16, "unit": "px", "style": "16px" }
  },
  "advanced": {
    "headings": {
      "all_headings": { "typography": { "custom": { "customTypography": {
        "fontWeight":   { "breakpoint_base": "100" },
        "lineHeight":   { "breakpoint_base": { "number": "1.1", "unit": "custom", "style": "1.1" } },
        "advanced": {
          "textWrap":      { "breakpoint_base": "balance" },
          "letterSpacing": { "breakpoint_base": { "number": 0.12, "unit": "em", "style": "0.12em" } }
        }
      }}}},
      "h1": { "typography": { "custom": { "customTypography": {
        "fontSize":   { "breakpoint_base": { "number": "clamp(3.5rem, 7.5vw, 6.5rem)", "unit": "custom", "style": "clamp(3.5rem, 7.5vw, 6.5rem)" } },
        "fontWeight": { "breakpoint_base": "100" }
      }}}},
      "h2": { ... },
      "h3": { ... },
      "h4": { ... }
    },
    "body": { "typography": { "custom": { "customTypography": {
      "fontSize":   { "breakpoint_base": { "number": "0.92", "unit": "rem", "style": "0.92rem" } },
      "fontWeight": { "breakpoint_base": "300" },
      "lineHeight": { "breakpoint_base": { "number": "1.75", "unit": "custom", "style": "1.75" } },
      "advanced": {
        "letterSpacing": { "breakpoint_base": { "number": 0.04, "unit": "em", "style": "0.04em" } },
        "textWrap":      { "breakpoint_base": "balance" }
      }
    }}}}
  },
  "ratio": { "breakpoint_base": 1.62 },
  "global_typography": { "typography_presets": [] }
}
```

Key encoding rules:
- `fontWeight` is always a **string** (`"100"`, `"300"`) not a number
- `clamp()` values use `"unit": "custom"` and the full expression in both `number` and `style`
- Unitless values (line-height) also use `"unit": "custom"`

### Code (Stylesheets & Scripts)

```json
"code": {
  "stylesheets": [
    { "code": "/* full :root CSS + base rules + component overrides */" },
    { "code": "/* @keyframe animations only */" }
  ],
  "scripts": [
    { "code": "/* accordion breakpoint toggle */" },
    { "code": "/* patchBreakdanceForms */" }
  ]
}
```

The `code` strings are regular CSS/JS stored as JSON-escaped strings (newlines as `\n`, quotes as `\"`). The two-stylesheet split is conventional: tokens+components in [0], keyframes in [1].

**Important:** The `scripts` array appears twice — once under `settings.code.scripts` and again under the top-level `code.scripts`. Both must be populated identically.

### Buttons

```json
"buttons": {
  "primary":   { "background": "var(--color-sage)", "color": "var(--color-page)", "background_hover": "var(--color-sage-alt)", "corners": "square" },
  "secondary": { "outline": true, "color": "var(--color-sage)", "corners": "square", "size": { ... padding ... } },
  "button_presets": { "button_presets": [ { "id": "uuid", "name": "Preset 1", "styles": { ... } } ] }
}
```

`"corners": "square"` means 0 radius at the Breakdance UI level. Actual border-radius for v32 (6–8px) is applied via component class rules in the global stylesheet — this avoids Breakdance overriding per-element radius settings.

### Containers

```json
"containers": {
  "sections": {
    "container_width": { "number": 1400, "unit": "px", "style": "1400px" },
    "horizontal_padding": {
      "breakpoint_base":          { "number": 52, "unit": "px", "style": "52px" },
      "breakpoint_phone_portrait": { "number": 24, "unit": "px", "style": "24px" }
    },
    "vertical_padding": {
      "breakpoint_base":           { "number": 100, "unit": "px", "style": "100px" },
      "breakpoint_tablet_portrait": { "number": 80,  "unit": "px", "style": "80px" },
      "breakpoint_phone_portrait":  { "number": 64,  "unit": "px", "style": "64px" }
    }
  }
}
```

### Forms

```json
"forms": {
  "fields": {
    "borders": {
      "radius": {
        "breakpoint_base": {
          "all": { "number": 6, "unit": "px", "style": "6px" },
          "topLeft": { "number": 6, "unit": "px", "style": "6px" },
          "topRight": { "number": 6, "unit": "px", "style": "6px" },
          "bottomLeft": { "number": 6, "unit": "px", "style": "6px" },
          "bottomRight": { "number": 6, "unit": "px", "style": "6px" },
          "editMode": "all"
        }
      }
    }
  }
}
```

v2 used `0px` everywhere. v32 uses `6px`.

---

## `globalclasses.json` Schema

### Encoding

The git file is a **JSON-encoded string** whose inner value is the array. i.e., the file contains a quoted string literal, not a bare array:

```
"[{\"name\":\".nav-logo\", ...}]"
```

When stored in `wp_options`, this is the raw `option_value` — no further encoding needed. The file as committed IS what goes into the DB column.

To decode for inspection:
```python
import json
arr = json.loads(json.loads(open('globalclasses.json').read()))
```

To re-encode after editing an array in Python:
```python
db_value = json.dumps(json.dumps(arr, separators=(',', ':')))
# or without the outer quotes if you're writing the git file:
git_value = json.dumps(arr, separators=(',', ':'))
```

### Entry Schema

Each entry is a class/selector object:

```json
{
  "name": ".card-name",
  "type": "class",
  "properties": {
    "custom_css": {
      "css": {
        "breakpoint_base":           "%%SELECTOR%% {\n  font-size: var(--text-heading-sm);\n  font-weight: 400;\n}",
        "breakpoint_tablet_landscape": null,
        "breakpoint_tablet_portrait":  null,
        "breakpoint_phone_landscape":  null,
        "breakpoint_phone_portrait":   null
      }
    }
  }
}
```

Key rules:
- `name` always starts with `.` (dot prefix)
- `type` is always `"class"`
- `%%SELECTOR%%` is Breakdance's placeholder — replaced with the class name at render. **Never use the actual class name in the CSS value.**
- Null breakpoints are omitted from output but the keys should still be present (set to null)
- Responsive overrides go in their respective breakpoint keys using the same `%%SELECTOR%% { ... }` pattern
- The CSS value is a raw string — newlines as `\n` in the JSON encoding
- CSS inside can use any `var(--token)` from the `:root` block in globalsettings stylesheet

### Breakpoint key names

| Key | Viewport |
|---|---|
| `breakpoint_base` | Desktop (default, ≥1120px) |
| `breakpoint_tablet_landscape` | ≤1119px |
| `breakpoint_tablet_portrait` | ≤1023px |
| `breakpoint_phone_landscape` | ≤767px |
| `breakpoint_phone_portrait` | ≤479px |

The v2 file uses `breakpoint_tablet_landscape` and `breakpoint_phone_landscape` only (portrait keys are absent in most entries).

---

## CSS Token Strategy

### `:root` in `globalsettings.json` stylesheet

All design tokens live in `settings.code.stylesheets[0].code` as a `:root { }` block. This makes them available everywhere: in globalclasses entries, in per-element custom CSS, and in the builder's CSS fields.

Token naming conventions used in this project:
- `--color-*` — color values (hex or rgba)
- `--fw-*` — font weights (100, 200 … 800)
- `--text-*` — font sizes (rem or clamp)
- `--ls-*` — letter-spacing (em)
- `--lh-*` — line-heights (unitless)
- `--space-*` — spacing scale (px, 4px grid)
- `--radius-*` — border radius (px)
- `--gap-*` — layout gaps (px)
- `--transition-*`, `--ease-*`, `--blur-*` — motion tokens

### Using tokens in globalclasses entries

```
"%%SELECTOR%% {\n  color: var(--color-eggshell);\n  font-size: var(--text-heading-sm);\n  font-weight: var(--fw-medium);\n}"
```

Using tokens in classes means a single token value change in globalsettings propagates to all classes automatically — no need to regenerate globalclasses.json for palette tweaks.

---

## v2 → v32 Delta Summary

### New v32 color palette entries (not in v2)

| cssVariableName | Label | Value |
|---|---|---|
| `color-parchment` | Parchment | `#f9f2e2` |
| `color-parchment-dark` | Parchment Dark | `#2d3022` |
| `color-parchment-mid` | Parchment Mid | `#69614e` |
| `color-parchment-warm` | Parchment Warm | `#d5c7ad` |
| `color-olivewood` | Olivewood | `#1e2419` |
| `color-olive` | Olive | `#8a9178` |
| `color-olive-light` | Olive Light | `#b8c0a0` |
| `color-awards-strip` | Awards Strip | `#ece8de` |
| `color-gold-botanical` | Gold Botanical | `#C8A550E6` (90% alpha) |

### New v32 font weight tokens (not in v2)

```css
--fw-medium:   500;
--fw-semibold: 600;
--fw-bold:     700;
--fw-extrabold: 800;
```

Google Fonts import must include these weights: `wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300`

### Component-level changes (v2 → v32)

| Selector | Property | v2 | v32 |
|---|---|---|---|
| `img` | border-radius | 5px | 8px |
| Form fields | border-radius | 0px | 6px |
| `.hpk:not(.mid)`, `.pcard:not(.star)` | background | `var(--color-card-featured)` | `var(--color-olivewood)` |
| `.hpk.mid`, `.pcard.star` | background | `var(--color-card-featured)` | `var(--color-parchment)` |
| `.card-name`, `.hpk-name` | font-weight | 200 | 400 (500 on star card) |
| `.card-size`, `.hpk-size`, `.inc-label` | font-weight | 300 | 500–600 |
| `.del-name`, `.inc-title` | font-weight | 200–300 | 500 |
| `.hpk-cta`, `.pc-cta`, `.pkgd-cta` | font-weight | 400 | 500 |
| Package card outer row | gap | 0px | 12px (`--gap-pkg-cards`) |

---

## Generating `globalclasses.json` — Future Skill

### What the skill needs to do

Given a `global-css.css` file (or a `design-system.html` source), parse every named CSS class and produce a valid `globalclasses.json` ready for DB insert.

**Input format expected:** CSS file where each component block is a flat class:

```css
.card-name {
  font-size: var(--text-heading-sm);
  font-weight: var(--fw-medium);
  color: var(--color-eggshell);
}
/* @breakpoint phone-portrait */
.card-name {
  font-size: var(--text-heading-xs);
}
```

**Output per class:**
```json
{
  "name": ".card-name",
  "type": "class",
  "properties": {
    "custom_css": {
      "css": {
        "breakpoint_base": "%%SELECTOR%% {\n  font-size: var(--text-heading-sm);\n  font-weight: var(--fw-medium);\n  color: var(--color-eggshell);\n}",
        "breakpoint_tablet_landscape": null,
        "breakpoint_tablet_portrait": null,
        "breakpoint_phone_landscape": null,
        "breakpoint_phone_portrait": null
      }
    }
  }
}
```

### Encoding pipeline

```python
import json

def build_globalclasses(entries: list[dict]) -> str:
    """Returns the string to write to the git file / insert into wp_options."""
    inner = json.dumps(entries, separators=(',', ':'), ensure_ascii=False)
    return json.dumps(inner, ensure_ascii=False)

def parse_globalclasses(git_file_content: str) -> list[dict]:
    """Read entries from the git file."""
    return json.loads(json.loads(git_file_content))
```

### Selector grouping rules

Some classes target child elements or pseudo-states within `%%SELECTOR%%`:

```css
/* All of the following become part of ONE entry for .nav-links */
.nav-links { display: flex; gap: 40px; }
.nav-links a { font-size: 0.72rem; color: var(--color-eggshell); }
.nav-links a:hover { color: var(--color-sage); }
```

In the `breakpoint_base` CSS value:
```
%%SELECTOR%% {display:flex;gap:40px}
%%SELECTOR%% a {font-size:0.72rem;color:var(--color-eggshell)}
%%SELECTOR%% a:hover {color:var(--color-sage)}
```

The rule: a selector becomes one entry. All rules whose selector starts with `.classname` are grouped under that entry, with `.classname` replaced by `%%SELECTOR%%`.

### Pseudo-element / nested state handling

- `.foo { ... }` → `%%SELECTOR%% { ... }`
- `.foo:hover { ... }` → `%%SELECTOR%%:hover { ... }`
- `.foo .bar { ... }` → `%%SELECTOR%% .bar { ... }`
- `.foo::before { ... }` → `%%SELECTOR%%::before { ... }`
- `.foo.active { ... }` → `%%SELECTOR%%.active { ... }`

### Entry ordering

Breakdance preserves insertion order. Entries should follow page-flow order (nav → hero → sections → footer) to match the builder's Selectors panel display.

### Classes that exist in the builder but have empty CSS

The v2 globalclasses.json contains entries with `"%%SELECTOR%% {\n}"` — empty bodies. These register the class name in the Selectors panel without adding any CSS. They exist so the builder shows them as "Existing Classes" when you start typing in the Classes field. Include these for any class name that's used on elements even if all styling comes from the global stylesheet.

---

## Workflow: Design File → DB Import

1. **Start from** `design-system.html` (standalone HTML mockup) — this is the single source of truth
2. **Extract color tokens** → populate `palette.colors` (solid) and `palette.gradients` (gradient objects) in globalsettings.json
3. **Extract typography** → populate `settings.typography.advanced.headings` and `.body` with breakpoint_base objects
4. **Write `:root` CSS** → goes in `settings.code.stylesheets[0].code`. Include all `--token: value` declarations. Reference palette values as `rgba()` not `var()` here (these are the canonical token definitions)
5. **Write component CSS** → also in `stylesheets[0].code` after the `:root` block. Use `var(--token)` throughout so palette changes propagate
6. **Write keyframes** → `settings.code.stylesheets[1].code`
7. **Write scripts** → both `settings.code.scripts` and top-level `code.scripts` (must match)
8. **Build globalclasses.json** → parse the component CSS, one entry per root class name, apply `%%SELECTOR%%` substitution, add null breakpoint keys, double-encode
9. **Import globalsettings.json** via Breakdance UI (Global Settings → Import)
10. **Insert globalclasses.json** value directly to `breakdance_breakdance_classes_json_string` in wp_options via phpMyAdmin or WP-CLI:
    ```sql
    UPDATE wp_options SET option_value = '<git file content>' WHERE option_name = 'breakdance_breakdance_classes_json_string';
    ```
    or via WP-CLI:
    ```bash
    wp option update breakdance_breakdance_classes_json_string "$(cat globalclasses.json)"
    ```
11. **Clear Breakdance caches** (Breakdance → Settings → Clear Cache)

---

## Project Notes

- **Font:** Raleway only. v2 uses weights 100–400. v32 adds 500/600/700/800 for package card components.
- **Grid:** 4px base spacing scale (`--space-1` = 4px through `--space-30` = 120px)
- **Max container width:** 1400px
- **Breakdance builder** is Breakdance for WordPress (not Elementor). Schema is specific to Breakdance and will not work with other builders.
- **v32 package cards** have two distinct palette variants: `.pcard.star` / `.hpk.mid` (parchment bg, olivewood text) and `.pcard:not(.star)` / `.hpk:not(.mid)` (olivewood bg, olive/parchment text).
- **Awards section (v32):** award logos use `filter: brightness(0) invert(1)` on dark bg; media/"As Seen In" logos use `filter: brightness(0)` on parchment bg. Gold botanical SVG uses `color: var(--color-gold-botanical)` via `currentColor`.
