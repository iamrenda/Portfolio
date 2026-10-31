import Image from "next/image";
import { type Project } from "@/types/Project";
import ProjectAnchorList from "./ProjectAnchorList";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  const { title, description, tags, src, alt } = project;

  return (
    <li className="border-ink/10 flex items-center gap-12 border-b py-8">
      <div className="relative aspect-3/2 w-80 shrink-0 overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-ink text-[54px] leading-none uppercase">
          {title}
        </h3>
        <p className="text-ink/70 mt-3 text-sm">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-tint text-accent px-2.5 py-1 text-xs font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>

        <ProjectAnchorList project={project} />
      </div>
    </li>
  );
}
