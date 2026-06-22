export interface ProjectCardProps {
  /** Full URL or relative path to project image */
  image: string;
  /** Location string shown above title in sage green */
  location: string;
  /** Project name */
  title: string;
  /** If true, stretches to fill parent height (for tall grid cells) */
  tall?: boolean;
  /** Minimum image height fallback */
  minHeight?: string;
  onClick?: () => void;
}
