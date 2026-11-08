import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  text: string;
  icon?: IconType;
  color?: "dark" | "light";
  size?: "md" | "sm";
  className?: string;
  /** When set, renders a link instead of a button. */
  href?: string;
  /** Open `href` in a new tab (external links). */
  newTab?: boolean;
};

const COLORS = {
  dark: "bg-ink text-white hover:bg-accent",
  light: "bg-white text-ink hover:bg-accent hover:text-white",
};

const SIZES = {
  md: { button: "gap-3 px-8 py-4 text-sm", icon: 16 },
  sm: { button: "gap-2 px-4 py-2 text-xs", icon: 14 },
};

const PrimaryButton = ({
  text,
  icon: Icon,
  color = "dark",
  size = "md",
  className = "",
  href = "#",
  newTab,
}: Props) => {
  const { button: buttonStyles, icon: iconStyles } = SIZES[size];

  return (
    <Link
      href={href}
      className={`flex w-fit cursor-pointer items-center font-semibold transition-colors duration-200 ${COLORS[color]} ${buttonStyles} ${className}`}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
      {Icon && <Icon size={iconStyles} aria-hidden />}
    </Link>
  );
};

export default PrimaryButton;
