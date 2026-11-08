import ProjectSectionHeading from "./ProjectSectionHeading";

type Props = {
  overview: string[];
};

const ProjectOverview = ({ overview }: Props) => {
  return (
    <section className="mt-24">
      <ProjectSectionHeading text="Overview" />
      <div className="text-ink/80 space-y-5 leading-8">
        {overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;
