export const NewsCategories = ["Project", "Article", "Certification"] as const;

export type NewsCategory = (typeof NewsCategories)[number];
