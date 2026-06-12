Render a Paal Grant branded button in one of four variants.

```jsx
<Button variant="sage">View Design Packages</Button>
<Button variant="ghost">Our Process</Button>
<Button variant="nav-cta" size="sm">Contact</Button>
<Button variant="pkg">View Full Details</Button>
```

**Variants:**
- `sage` — primary CTA; sage-tinted fill, sage border. Used for main page CTAs.
- `ghost` — secondary CTA; transparent fill, white-30 border. Used alongside sage.
- `nav-cta` — compact bordered button in the nav bar, radius-md (6px).
- `pkg` — full-width package card footer CTA; center-aligned.

**Notes:**
- All text is uppercase with 0.25em letter-spacing.
- No border-radius on sage/ghost/pkg (sharp, architectural).
- Hover states should shift background toward sage-30 and border to sage-90.
- `href` prop renders an `<a>` tag instead of `<button>`.
