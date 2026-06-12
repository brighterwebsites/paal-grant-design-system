/**
 * Badge — section label, award badge, size badge, tag, breadcrumb, and gold-award variants.
 *
 * @example
 * <Badge variant="section-label">Selected Work</Badge>
 * <Badge variant="award">Award-Winning Landscape Design</Badge>
 * <Badge variant="size">Medium · Most Popular</Badge>
 * <Badge variant="tag">Onsite or Virtual · $350 credited</Badge>
 * <Badge variant="gold-title">International Award</Badge>
 */
export function Badge({ variant = 'section-label', children }) {
  const base = {
    fontFamily: 'var(--font-primary)',
    display: 'inline-block',
    WebkitFontSmoothing: 'antialiased',
  };

  const variants = {
    'section-label': {
      fontSize: 'var(--type-section-label)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-brand)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)',
    },
    award: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      background: 'var(--accent-ghost)',
      border: '1px solid var(--color-sage-45)',
      padding: '16px 36px',
      fontSize: 'var(--text-label-lg)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)',
    },
    size: {
      fontSize: 'var(--text-nano)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-brand)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-85)',
    },
    tag: {
      display: 'inline-block',
      background: 'var(--accent-ghost)',
      border: '1px solid var(--color-sage-45)',
      padding: '8px 20px',
      fontSize: 'var(--text-micro-lg)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)',
    },
    breadcrumb: {
      fontSize: 'var(--text-ui-lg)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase',
      color: 'var(--color-dim)',
    },
    'gold-title': {
      fontSize: 'var(--text-nano-sm)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-ultra)',
      textTransform: 'uppercase',
      color: 'var(--color-gold-80)',
      display: 'block',
      textAlign: 'center',
    },
    'size-badge': {
      fontSize: 'var(--text-ui-lg)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-85)',
      border: '1px solid var(--color-sage-28)',
      padding: '7px 18px',
    },
  };

  const style = { ...base, ...(variants[variant] || variants['section-label']) };
  return React.createElement('span', { style }, children);
}
