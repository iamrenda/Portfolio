"use client";

import { type News } from "@/types/News";
import { useMemo, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { NEWS_CATEGORIES, type NewsCategory } from "@/types/NewsCategories";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList";
import HeadingText from "../util/HeadingText";
import PrimaryButton from "../util/PrimaryButton";

const NEWS: News[] = [
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
  const [categories, setCategories] = useState<NewsCategory[]>([
    ...NEWS_CATEGORIES,
  ]);

  const filteredNews = useMemo(
    () => NEWS.filter((n) => categories.includes(n.category)),
    [categories],
  );

  return (
    <section id="news" className="bg-white px-12 pt-16 pb-32">
      <HeadingText text="News" />

      <div className="grid grid-cols-[20rem_1fr] gap-16">
        <NewsFilter categories={categories} setCategories={setCategories} />

        <div>
          {filteredNews.length === 0 ? (
            <p className="py-16 text-sm text-slate-500">
              該当するニュースはありません。
            </p>
          ) : (
            <NewsList filteredNews={filteredNews} />
          )}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <PrimaryButton text="すべてのニュースを見る" icon={LuArrowRight} />
      </div>
    </section>
  );
}
