/**
 * ReviewCard — client Google Review card used in the scrolling reviews strip.
 * New in v27. Shows avatar initials, name, date, stars, review text, and Google badge.
 *
 * @example
 * <ReviewCard
 *   initials="SP"
 *   avatarColor="#8a9b7a"
 *   name="Sumitra Phoenix"
 *   date="2 months ago"
 *   text="Paal has the skill of listening carefully — patient and collaborative throughout."
 * />
 */
export function ReviewCard({ initials, avatarColor = '#8a9b7a', name, date, text }) {
  const [hovered, setHovered] = React.useState(false);

  const stars = Array(5).fill(null).map((_, i) =>
    React.createElement('span', { key: i, style: { color: 'var(--color-sage-alt)', fontSize: '0.85rem' } }, '★')
  );

  return React.createElement('div', {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: 'var(--color-card-mid)',
      border: `1px solid ${hovered ? 'rgba(168,178,153,0.4)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 'var(--radius-xl)',
      padding: '36px 36px 32px',
      width: '380px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      transition: 'border-color var(--transition-mid), transform var(--transition-mid)',
      transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      fontFamily: 'var(--font-primary)',
      WebkitFontSmoothing: 'antialiased',
    },
  },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '14px' } },
      React.createElement('div', {
        style: {
          width: '44px', height: '44px', borderRadius: '50%',
          background: avatarColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1rem', fontWeight: 'var(--fw-light)',
          color: 'var(--color-page)', flexShrink: 0,
          fontFamily: 'var(--font-primary)',
        },
      }, initials),
      React.createElement('div', null,
        React.createElement('div', {
          style: { fontSize: '0.85rem', fontWeight: 'var(--fw-regular)', letterSpacing: 'var(--ls-wide)', color: 'var(--text-heading)', marginBottom: '2px' },
        }, name),
        React.createElement('div', {
          style: { fontSize: 'var(--text-micro-lg)', fontWeight: 'var(--fw-light)', letterSpacing: 'var(--ls-heading)', color: 'var(--color-muted)' },
        }, date)
      ),
      React.createElement('div', { style: { display: 'flex', gap: '3px', marginLeft: 'auto' } }, ...stars)
    ),
    React.createElement('p', {
      style: {
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--fw-light)',
        lineHeight: 'var(--lh-loose)',
        color: 'var(--text-body)',
        fontStyle: 'italic',
        flex: 1,
        margin: 0,
      },
    }, `"${text}"`),
    React.createElement('div', {
      style: {
        display: 'flex', alignItems: 'center', gap: '8px',
        fontSize: 'var(--text-micro-md)', fontWeight: 'var(--fw-light)',
        letterSpacing: 'var(--ls-nav)', textTransform: 'uppercase',
        color: 'var(--color-muted)',
        borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '16px',
      },
    },
      React.createElement('div', {
        style: { width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-sage-alt)' },
      }),
      'Google Review'
    )
  );
}
