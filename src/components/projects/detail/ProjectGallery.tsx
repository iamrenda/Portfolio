import Image from "next/image";
import { type ProjectImage } from "@/types/Project";
import ProjectSectionHeading from "./ProjectSectionHeading";

type Props = {
  gallery?: ProjectImage[];
};

const ProjectGallery = ({ gallery }: Props) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="mt-32">
      <ProjectSectionHeading text="Gallery" />
      <ul className="grid grid-cols-3 gap-6">
        {gallery.map(({ src, alt, caption }) => (
          <li key={src}>
            <figure>
              <div className="relative aspect-3/2 overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1536px) 420px, 30vw"
                  className="object-cover"
                />
              </div>
              {caption && (
                <figcaption className="text-ink/60 mt-3 text-sm">
                  {caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectGallery;
