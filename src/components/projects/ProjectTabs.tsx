import { PROJECTS } from "@/data/projects";
import { ProjectCategories } from "@/const/ProjectCategories";
import { type ProjectCategory } from "@/const/ProjectCategories";

const TabLabels: Record<ProjectCategory, string> = {
  all: "すべて",
  working: "進行中",
  archived: "アーカイブ",
  website: "ウェブサイト",
  app: "アプリ",
  tools: "ツール",
};

const Tabs = [
  ...ProjectCategories.map((category) => ({
    label: category,
    count: PROJECTS.filter((p) => p.category.includes(category)).length,
  })),
];

export default function ProjectTabs() {
  return (
    <ul className="border-ink/10 mb-2 flex gap-8 border-b">
      {Tabs.map(({ label, count }, i) => (
        <li
          key={i}
          className={`-mb-px flex items-center gap-2 border-b-2 pb-3 text-sm font-semibold ${
            i === 0
              ? "border-accent text-accent"
              : "text-ink border-transparent"
          }`}
        >
          {TabLabels[label]}
          <span className="bg-tint text-accent px-1.5 py-0.5 text-xs">
            {count}
          </span>
        </li>
      ))}
    </ul>
  );
}
