import { type Project } from "@/types/Project";

type Props = {
  project: Pick<Project, "period" | "members" | "role">;
};

const ProjectMeta = ({ project }: Props) => {
  const { period, members, role } = project;

  const items = [
    { label: "期間", value: period },
    { label: "チーム", value: `${members}人` },
    { label: "役割", value: role },
  ];

  return (
    <dl className="border-ink/10 mt-16 flex justify-between gap-8 border-y py-8">
      {items.map(({ label, value }) => (
        <div key={label} className="flex-1">
          <dt className="text-ink/50 text-xs font-semibold tracking-widest">
            {label}
          </dt>
          <dd className="text-ink mt-2 text-base font-semibold">{value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default ProjectMeta;
