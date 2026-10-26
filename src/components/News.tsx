"use client";

import { useMemo, useState } from "react";
import { LuArrowRight, LuCheck } from "react-icons/lu";

const CATEGORIES = ["Project", "Article", "Certification"] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_LABELS: Record<Category, string> = {
  Project: "プロジェクト",
  Article: "ニュース",
  Certification: "資格",
};

const NEWS: {
  category: Category;
  date: string;
  title: string;
  description: string;
}[] = [
  {
    category: "Project",
    date: "2026.10.12",
    title: "Study Log API を公開しました",
    description:
      "学習時間を記録・集計するREST APIを、設計からテストまで一人で実装して公開しました。",
  },
  {
    category: "Article",
    date: "2026.10.05",
    title: "Next.js App RouterでLiquid Glass風のUIをつくる",
    description:
      "backdrop-filterと半透明の白だけで、ガラスの質感をどこまで再現できるかを試した記録です。",
  },
  {
    category: "Certification",
    date: "2026.08.30",
    title: "日商簿記検定3級に合格しました",
    description:
      "ITとは別の分野にも挑戦しました。使った教材と学習の進め方をまとめています。",
  },
];

export default function News() {
  const [categories, setCategories] = useState<Category[]>([...CATEGORIES]);

  const filtered = useMemo(
    () => NEWS.filter((n) => categories.includes(n.category)),
    [categories],
  );

  const toggleCategory = (c: Category) =>
    setCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  const reset = () => setCategories([...CATEGORIES]);

  return (
    <section id="news" className="bg-white px-12 pt-16 pb-32">
      <h2 className="font-display text-ink mb-10 text-[160px] leading-none uppercase">
        News
      </h2>

      <div className="grid grid-cols-[20rem_1fr] gap-16">
        <aside className="bg-tint flex h-fit flex-col gap-10 p-8">
          <fieldset>
            <legend className="sr-only">カテゴリー</legend>
            <ul className="flex flex-col gap-5">
              {CATEGORIES.map((c) => (
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

        <div>
          {filtered.length === 0 ? (
            <p className="py-16 text-sm text-slate-500">
              該当するニュースはありません。
            </p>
          ) : (
            <ul>
              {filtered.map(({ category, date, title, description }) => {
                const [y, m, d] = date.split(".");
                return (
                  <li
                    key={title}
                    className="border-tint flex items-center gap-8 border-b py-6 first:pt-0"
                  >
                    <time className="font-display text-ink w-40 shrink-0 text-4xl leading-none whitespace-nowrap">
                      {m}.{d}.{y.slice(2)}
                    </time>

                    <div className="min-w-0 flex-1">
                      <span className="bg-ink inline-block px-2 py-1 text-[10px] font-semibold tracking-wider text-white">
                        {CATEGORY_LABELS[category]}
                      </span>
                      <h3 className="text-ink mt-2 text-2xl leading-snug font-bold">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {description}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="border-ink text-ink hover:bg-ink flex shrink-0 cursor-pointer items-center gap-2 border px-5 py-3 text-xs font-semibold transition-colors duration-200 hover:text-white"
                    >
                      詳細を見る
                      <LuArrowRight size={14} aria-hidden />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button
          type="button"
          className="bg-ink hover:bg-accent flex cursor-pointer items-center gap-3 px-8 py-4 text-sm font-semibold text-white transition-colors duration-200"
        >
          すべてのニュースを見る
          <LuArrowRight size={16} aria-hidden />
        </button>
      </div>
    </section>
  );
}
