import { IconType } from "react-icons";

type Props = {
  text: string;
  icon?: IconType;
  className?: string;
};

const SecondaryButton = ({ text, icon: Icon, className }: Props) => {
  return (
    <button
      type="button"
      className={`border-ink text-ink hover:bg-ink flex shrink-0 cursor-pointer items-center gap-2 border px-5 py-3 text-xs font-semibold transition-colors duration-200 hover:text-white ${className}`}
    >
      {text}
      {Icon && <Icon size={14} aria-hidden />}
    </button>
  );
};

export default SecondaryButton;
