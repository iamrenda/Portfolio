import { IconType } from "react-icons";

type Props = {
  text: string;
  icon?: IconType;
  color?: "dark" | "light";
  size?: "md" | "sm";
  className?: string;
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
}: Props) => {
  const { button: buttonStyles, icon: iconStyles } = SIZES[size];

  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center font-semibold transition-colors duration-200 ${COLORS[color]} ${buttonStyles} ${className}`}
    >
      {text}
      {Icon && <Icon size={iconStyles} aria-hidden />}
    </button>
  );
};

export default PrimaryButton;
