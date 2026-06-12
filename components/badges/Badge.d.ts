import type { ReactNode } from 'react';

export interface BadgeProps {
  /** Visual variant — controls size, color, border, and casing */
  variant?: 'section-label' | 'award' | 'size' | 'tag' | 'breadcrumb';
  /** Badge text content */
  children?: ReactNode;
}
