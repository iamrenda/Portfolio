import ProjectAnchor from "./ProjectAnchor";
import { type Project } from "@/types/Project";

type Props = {
  project: Project;
};

const ProjectAnchorList = ({ project }: Props) => {
  const { slug, github, demo, otherLinks } = project;

  return (
    <div className="mt-5 flex gap-6">
      <ProjectAnchor label="詳細をみる" linkTo={`/projects/${slug}`} />
      {github && <ProjectAnchor label="GitHub" linkTo={github} newTab />}
      {demo && <ProjectAnchor label="デモ" linkTo={demo} newTab />}
      {otherLinks?.map((link, index) => (
        <ProjectAnchor
          key={index}
          label={link.label}
          linkTo={link.url}
          newTab
        />
      ))}
    </div>
  );
};

export default ProjectAnchorList;
