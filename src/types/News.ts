import { type NewsCategory } from "@/types/NewsCategories";

export type News = {
  category: NewsCategory;
  date: string;
  title: string;
  description: string;
};
