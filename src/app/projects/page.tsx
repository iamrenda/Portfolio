import type { Metadata } from "next";
import HeadingText from "@/components/util/HeadingText";
import ProjectList from "@/components/projects/ProjectList";

export const metadata: Metadata = {
  title: "Projects | @iamrenda のポートフォリオ",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white px-24 pt-24 pb-32">
      <HeadingText text="Projects" />
      <ProjectList />
    </main>
  );
}
