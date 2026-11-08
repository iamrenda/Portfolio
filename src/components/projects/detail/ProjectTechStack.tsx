import { getTechInfo } from "@/data/techStack";
import ProjectSectionHeading from "./ProjectSectionHeading";

type Props = {
  tags: string[];
};

const ProjectTechStack = ({ tags }: Props) => {
  return (
    <section className="mt-32">
      <ProjectSectionHeading text="Tech Stack" />
      <ul className="flex flex-wrap gap-3">
        {tags.map((tag) => {
          const { color, icon: Icon } = getTechInfo(tag);
          return (
            <li
              key={tag}
              className="text-ink flex items-center gap-3 px-5 py-3 text-base font-semibold"
              style={{
                backgroundColor: `color-mix(in srgb, ${color} 20%, white)`,
              }}
            >
              <Icon
                size={20}
                aria-hidden
                style={{ color: `color-mix(in srgb, ${color} 80%, black)` }}
              />
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectTechStack;
