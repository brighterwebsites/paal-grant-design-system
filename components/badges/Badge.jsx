/**
 * Badge — section label, award badge, size badge, and tag variants.
 * Use section-label for overlines above headings; award for credential callouts;
 * size for package tier labels; tag for process step callouts.
 *
 * @example
 * <Badge variant="section-label">Selected Work</Badge>
 * <Badge variant="award">Award-Winning Landscape Design</Badge>
 * <Badge variant="size">Medium · Most Popular</Badge>
 * <Badge variant="tag">Onsite or Virtual · $350 credited</Badge>
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
      letterSpacing: 'var(--ls-ultra)',
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
      borderRadius: 'var(--radius-lg)',
      fontSize: '0.95rem',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)',
    },
    size: {
      fontSize: 'var(--text-nano)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-ultra)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-85)',
    },
    tag: {
      display: 'inline-block',
      background: 'var(--accent-ghost)',
      border: '1px solid var(--color-sage-45)',
      padding: '8px 20px',
      borderRadius: 'var(--radius-lg)',
      fontSize: '0.62rem',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)',
    },
    breadcrumb: {
      fontSize: 'var(--text-label-sm)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--color-cream-38)',
    },
  };

  const style = { ...base, ...(variants[variant] || variants['section-label']) };
  return React.createElement('span', { style }, children);
}
