import { type ProjectCategory } from "@/const/ProjectCategories";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory[];
  src: string;
  alt: string;
  github?: string;
  demo?: string;
  otherLinks?: { label: string; url: string }[];
};
