Fixed top navigation bar. Transparent gradient on load, transitions to solid dark glass on scroll (scrollY > 40px). Logo shrinks from 68px to 52px.

```jsx
<Nav
  currentPage="home"
  onNavigate={(page) => setActivePage(page)}
  logoSrc="./assets/logo-landscape-white.png"
/>
```

Notable behaviour:
- Uses `window.scroll` listener with `useEffect` cleanup
- `solid` state drives background, height, and logo height
- Active page link renders at full white; others at 82% white
- Contact is always rendered as the nav-cta (bordered sage button, 6px radius)
- Mobile: hide `<ul>`, show hamburger + drawer (handle at parent level)
