Full-bleed image card with gradient overlay and location/title label. Used in homepage featured grid and portfolio masonry layout.

```jsx
<ProjectCard
  image="https://paalgrant.com/wp-content/uploads/..."
  location="Buninyong"
  title="Country Estate — Circular Pool & Native Garden"
  onClick={() => navigate('portfolio')}
/>
<ProjectCard
  image="https://paalgrant.com/wp-content/uploads/..."
  location="Gardening World Cup, Japan"
  title="Mandala Garden — Best Design"
  tall
/>
```

Notable props:
- `tall` — sets `height: 100%` so card fills a tall CSS grid row (left column card)
- `location` — small sage uppercase overline
- `title` — weight 200, larger text; keep concise
- Hover scales inner image to 1.05 — parent clips overflow
