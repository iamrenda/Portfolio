import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

interface Props {
  label: string;
  linkTo: string;
}

const ProjectAnchor = ({ label, linkTo }: Props) => {
  return (
    <Link
      href={linkTo}
      className="text-ink hover:text-accent border-ink/30 inline-flex items-center gap-1 border-b pb-0.5 text-xs font-semibold transition-colors duration-200"
    >
      {label}
      <LuArrowUpRight size={12} aria-hidden />
    </Link>
  );
};

export default ProjectAnchor;
