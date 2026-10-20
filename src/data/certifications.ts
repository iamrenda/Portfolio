export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  /** ISO date string, e.g. "2026-01-15" */
  date: string;
  /** Display string, e.g. "令和8年1月" */
  displayDate: string;
  score?: string;
  category: "IT" | "English" | "Other";
}

export const certifications: Certification[] = [];
