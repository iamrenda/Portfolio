type Props = {
  text: string;
};

const HeadingText = ({ text }: Props) => {
  return (
    <h2 className="font-display text-ink mb-10 text-[160px] leading-none uppercase">
      {text}
    </h2>
  );
};

export default HeadingText;
