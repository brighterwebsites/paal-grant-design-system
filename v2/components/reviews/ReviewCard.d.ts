export interface ReviewCardProps {
  /** Two-letter initials for the avatar circle */
  initials: string;
  /** Avatar background color — varies per reviewer */
  avatarColor?: string;
  /** Reviewer's name */
  name: string;
  /** Relative date string e.g. "2 months ago" */
  date: string;
  /** Review body text (rendered in italics) */
  text: string;
}
