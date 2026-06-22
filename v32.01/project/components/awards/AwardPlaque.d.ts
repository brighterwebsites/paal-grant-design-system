export interface AwardPlaqueProps {
  /** Botanical sprig crest in gold (v28 default). Set false to use a legacy emoji icon. */
  motif?: boolean;
  /** Legacy emoji icon — only shown when motif={false}. Deprecated in v28. */
  icon?: string;
  /** Small gold category label e.g. "International Award" */
  category: string;
  /** Main award name e.g. "Gardening World Cup" */
  name: string;
  /** Supporting detail e.g. "People's Choice & Best Design · Japan" */
  subtitle: string;
}
