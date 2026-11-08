import { type ProjectCategory } from "@/const/ProjectCategories";

export type ProjectFeature = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

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

  /** e.g. "2026.04 – 現在" */
  period: string;
  members: number;
  role: string;
  /** One string per paragraph. */
  overview: string[];
  features: [ProjectFeature, ...ProjectFeature[]];
  gallery?: ProjectImage[];
};
