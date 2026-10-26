import { LuCheck } from "react-icons/lu";
import { NEWS_CATEGORIES, NewsCategory } from "@/types/NewsCategories";

const CATEGORY_LABELS: Record<NewsCategory, string> = {
  Project: "プロジェクト",
  Article: "ニュース",
  Certification: "資格",
};

type Props = {
  categories: NewsCategory[];
  setCategories: React.Dispatch<React.SetStateAction<NewsCategory[]>>;
};

const NewsFilter = ({ categories, setCategories }: Props) => {
  const reset = () => setCategories([...NEWS_CATEGORIES]);

  const toggleCategory = (c: NewsCategory) =>
    setCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  return (
    <aside className="bg-tint flex h-fit flex-col gap-10 p-8">
      <fieldset>
        <legend className="sr-only">カテゴリー</legend>
        <ul className="flex flex-col gap-5">
          {NEWS_CATEGORIES.map((c) => (
            <li key={c}>
              <label className="text-ink flex cursor-pointer items-center gap-3 text-base font-semibold">
                <input
                  type="checkbox"
                  checked={categories.includes(c)}
                  onChange={() => toggleCategory(c)}
                  className="peer sr-only"
                />
                <span className="peer-checked:bg-accent peer-checked:border-accent peer-focus-visible:outline-accent flex size-6 items-center justify-center border border-slate-400 bg-white text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  <LuCheck size={14} aria-hidden />
                </span>
                {CATEGORY_LABELS[c]}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <button
        type="button"
        onClick={reset}
        className="text-accent w-fit cursor-pointer text-xs font-semibold underline underline-offset-4"
      >
        条件をリセット
      </button>
    </aside>
  );
};

export default NewsFilter;
