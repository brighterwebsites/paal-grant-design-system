import type { MouseEventHandler } from 'react';

export interface ProjectCardProps {
  /** Full URL to the project image */
  image: string;
  /** Location label shown above the title */
  location: string;
  /** Project name / description */
  title: string;
  /** When true, height fills its grid cell (used for the tall left card) */
  tall?: boolean;
  /** Click handler */
  onClick?: MouseEventHandler<HTMLDivElement>;
}
