/**
 * AwardPlaque — gold-bordered award/credential card used in the scrolling awards strip.
 * New in v27. Displays award category, name, and subtitle on a dark gold-tinted background.
 *
 * @example
 * <AwardPlaque
 *   icon="🏆"
 *   category="International Award"
 *   name="Gardening World Cup"
 *   subtitle="People's Choice & Best Design · Japan"
 * />
 */
export function AwardPlaque({ icon, category, name, subtitle }) {
  const [hovered, setHovered] = React.useState(false);

  return React.createElement('div', {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: 'linear-gradient(160deg, #2a2620 0%, #1a1610 50%, #2a2620 100%)',
      border: `1px solid ${hovered ? 'rgba(210,170,80,0.6)' : 'rgba(210,170,80,0.3)'}`,
      borderTop: `2px solid ${hovered ? 'rgba(210,170,80,0.95)' : 'rgba(210,170,80,0.75)'}`,
      borderRadius: 'var(--radius-xl)',
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
    React.createElement('span', {
      style: {
        fontSize: '1.8rem',
        marginBottom: '14px',
        display: 'block',
      },
    }, icon),
    React.createElement('span', {
      style: {
        fontSize: 'var(--text-nano-sm)',
        fontWeight: 'var(--fw-regular)',
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
        fontWeight: 'var(--fw-light)',
        letterSpacing: 'var(--ls-display)',
        color: 'var(--color-gold-55)',
        textAlign: 'center',
        display: 'block',
        lineHeight: 1.5,
      },
    }, subtitle)
  );
}
