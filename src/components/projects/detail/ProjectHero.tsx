import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { type Project } from "@/types/Project";
import PrimaryButton from "@/components/util/PrimaryButton";
import ProjectAnchor from "../ProjectAnchor";

type Props = {
  project: Project;
};

const ProjectHero = ({ project }: Props) => {
  const { title, description, src, alt, github, demo, otherLinks } = project;

  return (
    <header className="grid grid-cols-2 items-center gap-16">
      <div>
        <h1 className="font-display text-ink text-[110px] leading-none uppercase">
          {title}
        </h1>
        <p className="text-ink/70 mt-6 text-lg">{description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          {github && (
            <PrimaryButton text="GitHub" icon={SiGithub} href={github} newTab />
          )}
          {demo && <ProjectAnchor label="デモ" linkTo={demo} newTab />}
          {otherLinks?.map((link) => (
            <ProjectAnchor
              key={link.url}
              label={link.label}
              linkTo={link.url}
              newTab
            />
          ))}
        </div>
      </div>

      <div className="relative aspect-3/2 w-full overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1536px) 640px, 45vw"
          className="object-cover"
        />
      </div>
    </header>
  );
};

export default ProjectHero;
