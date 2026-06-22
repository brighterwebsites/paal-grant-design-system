export interface ButtonProps {
  /** Visual style: sage (primary), ghost (secondary), nav-cta (in navigation), pkg (package card CTA) */
  variant?: 'sage' | 'ghost' | 'nav-cta' | 'pkg';
  /** Size: md (default 14px 44px padding) or sm (10px 28px) */
  size?: 'md' | 'sm';
  disabled?: boolean;
  onClick?: () => void;
  /** Renders as <a> when provided */
  href?: string;
  children?: React.ReactNode;
}
