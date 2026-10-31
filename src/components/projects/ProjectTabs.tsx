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

export const matchesCategory = (
  categories: ProjectCategory[],
  active: ProjectCategory,
) => active === "all" || categories.includes(active);

const Tabs = ProjectCategories.map((category) => ({
  category,
  count: PROJECTS.filter((p) => matchesCategory(p.category, category)).length,
}));

type Props = {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
};

export default function ProjectTabs({ active, onChange }: Props) {
  return (
    <ul className="border-ink/10 mb-2 flex gap-8 border-b">
      {Tabs.map(({ category, count }) => {
        const isActive = category === active;

        return (
          <li key={category} className="-mb-px">
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(category)}
              className={`flex cursor-pointer items-center gap-2 border-b-2 pb-3 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "border-accent text-accent"
                  : "text-ink hover:text-accent border-transparent"
              }`}
            >
              {TabLabels[category]}
              <span className="bg-tint text-accent px-1.5 py-0.5 text-xs">
                {count}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
