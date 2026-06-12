Labeled form input for the Paal Grant contact form. Supports text, email, tel, textarea, and select.

```jsx
<FormField label="Full Name" type="text" placeholder="Your name" />
<FormField label="Email Address" type="email" placeholder="your@email.com" />
<FormField label="Phone" type="tel" placeholder="Your phone number" />
<FormField label="Tell us about your project" type="textarea" placeholder="Brief description..." />
<FormField
  label="I'm interested in"
  type="select"
  options={[
    'Small Package — up to 250m² ($2,400)',
    'Medium Package — 250–550m² ($3,200)',
    'Large Package — 550–1,500m² ($3,800)',
    'Virtual Design (Remote)',
    'General Enquiry',
  ]}
/>
```

Notable:
- All inputs: `background: rgba(255,255,255,0.04)`, `border-radius: 6px`
- Focus state: `border-color: rgba(138,155,122,0.7)` (add via JS focus/blur or CSS :focus)
- Label: 0.6rem, weight 400, 0.28em letter-spacing, uppercase, cream 55%
