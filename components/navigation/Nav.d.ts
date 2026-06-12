import type { ReactNode } from 'react';

export interface NavProps {
  /** Currently active page id — highlights that link */
  currentPage?: 'home' | 'about' | 'process' | 'packages' | 'portfolio' | 'contact';
  /** Called with the page id when a nav item is clicked */
  onNavigate?: (page: string) => void;
  /** Src URL for the landscape white logo */
  logoSrc?: string;
}
