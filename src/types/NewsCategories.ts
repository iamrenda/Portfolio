export const NEWS_CATEGORIES = ["Project", "Article", "Certification"] as const;
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];
