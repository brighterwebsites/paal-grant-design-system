Primary action button for Paal Grant — three variants: sage (filled), ghost (outline), nav-cta (compact nav bar button).

```jsx
<Button variant="sage">View Design Packages</Button>
<Button variant="ghost">Our Process</Button>
<Button variant="nav-cta">Contact</Button>
<Button variant="sage" size="sm">Enquire</Button>
<Button variant="sage" disabled>Unavailable</Button>
```

Notable variants/props:
- `variant="sage"` — primary CTA; rgba(138,155,122) fill + border, always uppercase
- `variant="ghost"` — secondary action; white 30% border, transparent bg
- `variant="nav-cta"` — used in nav bar only; compact, 6px radius
- `size="sm"` — reduces padding; used for nav and inline CTAs
- `disabled` — 40% opacity, not-allowed cursor
