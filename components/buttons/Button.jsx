/**
 * Button — primary sage, ghost, and nav CTA variants for Paal Grant.
 * Use btn-sage for primary CTAs, btn-ghost for secondary actions, nav-cta inside the nav bar.
 *
 * @example
 * <Button variant="sage" onClick={() => {}}>View Design Packages</Button>
 * <Button variant="ghost">Our Process</Button>
 * <Button variant="nav-cta">Contact</Button>
 * <Button variant="sage" size="sm">Enquire</Button>
 */
export function Button({ variant = 'sage', size = 'md', disabled = false, onClick, children }) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--fw-regular)',
    fontSize: size === 'sm' ? '0.6rem' : 'var(--type-cta)',
    letterSpacing: 'var(--ls-spaced)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    padding: size === 'sm' ? '10px 28px' : '14px 44px',
    border: '1px solid',
    borderRadius: 'var(--radius-lg)',
    transition: 'background var(--transition-mid), border-color var(--transition-mid)',
    lineHeight: 1,
    WebkitFontSmoothing: 'antialiased',
  };

  const variants = {
    sage: {
      background: 'var(--accent-subtle)',
      borderColor: 'var(--color-sage-70)',
      color: 'var(--text-heading)',
    },
    ghost: {
      background: 'transparent',
      borderColor: 'var(--color-white-30)',
      color: 'var(--text-nav)',
    },
    'nav-cta': {
      background: 'transparent',
      borderColor: 'var(--color-sage-60)',
      color: 'var(--text-heading)',
      padding: '10px 28px',
      fontSize: '0.7rem',
      borderRadius: 'var(--radius-md)',
    },
  };

  const style = { ...base, ...(variants[variant] || variants.sage) };

  return React.createElement('button', { style, disabled, onClick }, children);
}
