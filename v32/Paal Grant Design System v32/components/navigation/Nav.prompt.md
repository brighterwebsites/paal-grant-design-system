Fixed top navigation bar. Transparent over hero images, turns solid charcoal + blur on scroll.

```jsx
<Nav
  currentPage="home"
  onNavigate={(page) => setPage(page)}
  logoSrc="./assets/logo-landscape-white.png"
/>
```

**Behaviour:**
- Transparent gradient (`rgba(8,11,6,0.82)` → transparent) when at top.
- Solid `rgba(43,43,43,0.97)` + `backdrop-filter: blur(14px)` after scrolling 40px.
- Height: 100px → 80px on scroll. Logo: 68px → 52px.
- Active page link shows `color: #fff`.
- Nav links: 0.72rem, weight 400, 0.20em letter-spacing, uppercase.
- Contact CTA: bordered sage-60, radius-md (6px).
- Without `logoSrc`, renders the text-based "Paal Grant Designs / In Landscaping" logo.
