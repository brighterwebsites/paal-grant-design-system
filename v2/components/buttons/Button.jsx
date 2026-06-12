/**
 * Button — primary sage, ghost, and nav CTA variants for Paal Grant.
 * Use btn-sage for primary CTAs, btn-ghost for secondary, nav-cta inside nav bar.
 *
 * @example
 * <Button variant="sage">View Design Packages</Button>
 * <Button variant="ghost">Our Process</Button>
 * <Button variant="nav-cta">Contact</Button>
 * <Button variant="sage" size="sm">Enquire</Button>
 * <Button variant="sage" disabled>Unavailable</Button>
 */
export function Button({ variant = 'sage', size = 'md', disabled = false, onClick, href, children }) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--fw-regular)',
    fontSize: size === 'sm' ? 'var(--text-micro-md)' : 'var(--type-cta)',
    letterSpacing: 'var(--ls-cta)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    padding: size === 'sm' ? '10px 28px' : '14px 44px',
    border: '1px solid',
    borderRadius: 'var(--radius-none)',
    transition: 'background var(--transition-mid), border-color var(--transition-mid)',
    lineHeight: 1,
    WebkitFontSmoothing: 'antialiased',
    background: 'transparent',
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
      fontSize: 'var(--text-ui-md)',
      borderRadius: 'var(--radius-md)',
    },
    pkg: {
      display: 'block',
      textAlign: 'center',
      padding: '13px',
      borderColor: 'var(--color-sage-45)',
      color: 'var(--color-white-78)',
      fontSize: 'var(--text-micro-md)',
      letterSpacing: 'var(--ls-cta)',
    },
  };

  const style = { ...base, ...(variants[variant] || variants.sage) };
  const tag = href ? 'a' : 'button';
  return React.createElement(tag, { style, disabled, onClick, href }, children);
}
