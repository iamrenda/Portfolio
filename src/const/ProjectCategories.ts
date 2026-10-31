export const ProjectCategories = [
  "all",
  "working",
  "archived",
  "website",
  "app",
  "tools",
] as const;

export type ProjectCategory = (typeof ProjectCategories)[number];
