import Image from "next/image";
import { type ProjectFeature } from "@/types/Project";
import ProjectSectionHeading from "./ProjectSectionHeading";

type Props = {
  features: ProjectFeature[];
};

const ProjectFeatures = ({ features }: Props) => {
  return (
    <section className="mt-32">
      <ProjectSectionHeading text="Features" />
      <ol className="space-y-16">
        {features.map(({ title, body, src, alt }, i) => (
          <li key={title} className="grid grid-cols-2 items-center gap-16">
            <div
              className={`relative aspect-3/2 overflow-hidden shadow-lg ${
                i % 2 === 1 ? "order-2" : ""
              }`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1536px) 640px, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-accent text-5xl">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-ink mt-3 text-2xl font-bold">{title}</h3>
              <p className="text-ink/70 mt-4 leading-8">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProjectFeatures;
