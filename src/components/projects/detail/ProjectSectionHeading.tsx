type Props = {
  text: string;
};

const ProjectSectionHeading = ({ text }: Props) => {
  return (
    <h2 className="font-display text-ink mb-12 text-7xl leading-none uppercase">
      {text}
    </h2>
  );
};

export default ProjectSectionHeading;
