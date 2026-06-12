import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

/**
 * @startingPoint section="Components" subtitle="Sage, ghost, and nav CTA buttons" viewport="700x120"
 */
export interface ButtonProps {
  /** Visual style variant */
  variant?: 'sage' | 'ghost' | 'nav-cta';
  /** Size of the button */
  size?: 'sm' | 'md';
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Button label */
  children?: ReactNode;
}
