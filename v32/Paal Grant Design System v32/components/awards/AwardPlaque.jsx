/**
 * AwardPlaque — gold-bordered award/credential card used in the scrolling awards strip.
 * New in v27. Displays award category, name, and subtitle on a dark gold-tinted background.
 * v28: botanical sprig crest (replaces emoji icon), softer 12px radius, heavier meta.
 *
 * @example
 * <AwardPlaque
 *   category="International Award"
 *   name="Gardening World Cup"
 *   subtitle="People's Choice & Best Design · Japan"
 * />
 */
export function AwardPlaque({ icon, motif = true, category, name, subtitle }) {
  const [hovered, setHovered] = React.useState(false);

  const sprig = React.createElement('svg', {
    width: 26, height: 32, viewBox: '0 0 64 80', fill: 'none',
    style: { display: 'block', marginBottom: '14px', color: 'var(--color-gold)' },
    'aria-hidden': true,
  },
    React.createElement('path', { d: 'M32 80 C31 60 33 38 32 16', stroke: 'currentColor', strokeWidth: 1.1, strokeLinecap: 'round', fill: 'none' }),
    React.createElement('g', { fill: 'currentColor' },
      React.createElement('path', { d: 'M32 62 C32 54 38 50 47 49 C44 57 39 61 32 62 Z' }),
      React.createElement('path', { d: 'M32 62 C32 54 26 50 17 49 C20 57 25 61 32 62 Z' }),
      React.createElement('path', { d: 'M32 50 C32 43 37 39 45 38 C42 45 38 49 32 50 Z' }),
      React.createElement('path', { d: 'M32 50 C32 43 27 39 19 38 C22 45 26 49 32 50 Z' }),
      React.createElement('path', { d: 'M32 39 C32 33 36 30 43 29 C40 35 37 38 32 39 Z' }),
      React.createElement('path', { d: 'M32 39 C32 33 28 30 21 29 C24 35 27 38 32 39 Z' }),
      React.createElement('path', { d: 'M32 29 C32 24 35 21 41 20 C38 26 36 28 32 29 Z' }),
      React.createElement('path', { d: 'M32 29 C32 24 29 21 23 20 C26 26 28 28 32 29 Z' }),
      React.createElement('path', { d: 'M32 21 C30 16 31 11 32 7 C33 11 34 16 32 21 Z' })
    )
  );

  return React.createElement('div', {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: 'linear-gradient(160deg, #2a2620 0%, #1a1610 50%, #2a2620 100%)',
      border: `1px solid ${hovered ? 'rgba(210,170,80,0.6)' : 'rgba(210,170,80,0.3)'}`,
      borderTop: `2px solid ${hovered ? 'rgba(210,170,80,0.95)' : 'rgba(210,170,80,0.75)'}`,
      borderRadius: 'var(--radius-card-feature)',
      padding: '32px 36px 28px',
      width: '280px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform var(--transition-mid), border-color var(--transition-mid)',
      transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      fontFamily: 'var(--font-primary)',
      WebkitFontSmoothing: 'antialiased',
    },
  },
    motif
      ? sprig
      : React.createElement('span', {
          style: {
            fontSize: '1.8rem',
            marginBottom: '14px',
            display: 'block',
          },
        }, icon),
    React.createElement('span', {
      style: {
        fontSize: 'var(--text-nano-sm)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-ultra)',
        textTransform: 'uppercase',
        color: 'var(--color-gold-80)',
        textAlign: 'center',
        marginBottom: '10px',
        display: 'block',
      },
    }, category),
    React.createElement('span', {
      style: {
        fontSize: '0.9rem',
        fontWeight: 'var(--fw-extralight)',
        letterSpacing: 'var(--ls-wider)',
        color: 'var(--color-eggshell)',
        textAlign: 'center',
        lineHeight: 1.4,
        marginBottom: '8px',
        display: 'block',
      },
    }, name),
    React.createElement('span', {
      style: {
        fontSize: 'var(--text-ui-xs)',
        fontWeight: 'var(--fw-regular)',
        letterSpacing: 'var(--ls-display)',
        color: 'var(--color-gold-55)',
        textAlign: 'center',
        display: 'block',
        lineHeight: 1.5,
      },
    }, subtitle)
  );
}
