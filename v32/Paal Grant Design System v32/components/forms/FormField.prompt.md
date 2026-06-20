Labeled form field for the Paal Grant contact form. Renders input, textarea, or select.

```jsx
<FormField label="Full Name" type="text" placeholder="Your name" />
<FormField label="Email Address" type="email" placeholder="your@email.com" />
<FormField label="Phone Number" type="tel" placeholder="04xx xxx xxx" />
<FormField label="Tell us about your project" type="textarea" />
<FormField
  label="I'm interested in"
  type="select"
  options={['Small Package ($2,400)', 'Medium Package ($3,200)', 'Large Package ($3,800)']}
/>
```

**Notes:**
- Label is micro uppercase, muted color, 0.28em letter-spacing.
- Input: white-04 background, white-12 border, radius-md (6px).
- Focus state: border shifts to sage-70.
- Textarea has min-height 120px, resize: vertical.
- Select background on options is `#1a1e14`.
