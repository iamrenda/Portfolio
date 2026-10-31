import type { Metadata } from "next";
import HeadingText from "@/components/util/HeadingText";
import ProjectRow from "@/components/projects/ProjectRow";
import ProjectTabs from "@/components/projects/ProjectTabs";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | @iamrenda のポートフォリオ",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white px-24 pt-24 pb-32">
      <HeadingText text="Projects" />
      <ProjectTabs />
      <ul>
        {PROJECTS.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </main>
  );
}
