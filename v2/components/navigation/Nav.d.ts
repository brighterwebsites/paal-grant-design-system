export interface NavProps {
  /** Active page id — highlights the matching nav link */
  currentPage?: 'home' | 'about' | 'process' | 'packages' | 'portfolio' | 'contact';
  /** Callback when a nav item is clicked */
  onNavigate?: (page: string) => void;
  /** URL/path to the logo image (white version recommended) */
  logoSrc?: string;
}
