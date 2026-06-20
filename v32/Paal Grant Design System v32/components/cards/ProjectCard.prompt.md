Full-bleed image card with gradient overlay for project location and name.

```jsx
<ProjectCard
  image="./assets/mt-buninyong-country-estate-brick-archway-entrance-paal-grant-050-1200x630.webp"
  location="Buninyong"
  title="Country Estate — Circular Pool & Native Garden"
/>
<ProjectCard
  image="./assets/mandala-stone-moon-gate-paal-grant-074.jpg"
  location="Gardening World Cup, Japan"
  title="Mandala Garden — Best Design"
  tall={true}
/>
```

**Notes:**
- Image scales to 1.05 on hover over 0.7s ease.
- Overlay gradient runs from near-black at bottom to transparent.
- Location text is sage-90, uppercase, 0.6rem.
- Title is cream-white, extralight weight, 1.1rem.
- No border-radius — sharp edges consistent with architectural aesthetic.
- `tall` stretches to fill parent container height.
