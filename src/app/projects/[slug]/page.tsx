import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import ProjectHero from "@/components/projects/detail/ProjectHero";
import ProjectMeta from "@/components/projects/detail/ProjectMeta";
import ProjectOverview from "@/components/projects/detail/ProjectOverview";
import ProjectFeatures from "@/components/projects/detail/ProjectFeatures";
import ProjectTechStack from "@/components/projects/detail/ProjectTechStack";
import ProjectGallery from "@/components/projects/detail/ProjectGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | @iamrenda のポートフォリオ`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="bg-white px-24 pt-16 pb-32">
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <ProjectOverview overview={project.overview} />
      <ProjectFeatures features={project.features} />
      <ProjectTechStack tags={project.tags} />
      <ProjectGallery gallery={project.gallery} />
    </main>
  );
}
