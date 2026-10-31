import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const ViewAllButton = () => {
  return (
    <Link
      href="/projects"
      className="relative flex min-h-85 flex-col justify-end bg-[#4a7fd4] p-7 text-white shadow-lg"
    >
      <h3 className="font-display text-[72px] leading-none whitespace-nowrap uppercase">
        View All
      </h3>
      <span className="text-accent absolute top-7 right-7 flex size-14 items-center justify-center bg-white">
        <LuArrowRight size={22} aria-hidden />
      </span>
    </Link>
  );
};

export default ViewAllButton;
