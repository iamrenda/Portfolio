import { type NewsCategory } from "@/const/NewsCategories";

export type News = {
  category: NewsCategory;
  date: string;
  title: string;
  description: string;
};
