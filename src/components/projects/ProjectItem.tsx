import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import PrimaryButton from "../util/PrimaryButton";

type Color = "dark" | "light";

const FadeColors: Record<Color, string> = {
  dark: "after:from-white/60 after:via-white/10 after:to-transparent",
  light: "after:from-black/50 after:via-transparent after:to-transparent",
};

const TextColors: Record<Color, string> = {
  dark: "text-ink",
  light: "text-white",
};

type ProjectItemProps = {
  title: string;
  description: string;
  tech: string;
  src: string;
  alt: string;
  // "dark" = dark text/button on a light cover, "light" = the reverse
  color: Color;
  className?: string;
  titleClassName?: string;
};

export default function ProjectItem({
  title,
  description,
  tech,
  src,
  alt,
  color,
  className = "",
  titleClassName = "text-[32px]",
}: ProjectItemProps) {
  return (
    <article
      tabIndex={0}
      className={`group focus-visible:outline-accent relative isolate flex flex-col justify-end overflow-hidden p-7 shadow-lg focus-visible:outline-2 focus-visible:-outline-offset-2 ${TextColors[color]} ${className}`}
    >
      <div
        className={`absolute inset-0 -z-10 after:absolute after:inset-0 after:bg-linear-to-t ${FadeColors[color]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 66vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h3 className={`font-display leading-none ${titleClassName}`}>
            {title}
          </h3>
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-focus-within:max-h-40 group-focus-within:opacity-100 group-hover:max-h-40 group-hover:opacity-100 motion-reduce:transition-none">
            <p className="mt-2 text-base font-medium">{description}</p>
            <p className="mt-2 text-sm font-semibold">{tech}</p>
          </div>
        </div>

        <PrimaryButton
          text="詳しく見る"
          icon={LuArrowUpRight}
          color={color}
          size="sm"
          className="shrink-0 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none"
        />
      </div>
    </article>
  );
}
