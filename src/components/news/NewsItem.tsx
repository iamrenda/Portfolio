import { LuArrowRight } from "react-icons/lu";
import { CATEGORY_LABELS } from "@/const/news/CategoryLabels";
import { type News } from "@/types/News";

type Props = {
  newsItem: News;
};

const NewsItem = ({ newsItem }: Props) => {
  const { category, date, title, description } = newsItem;
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
};

export default NewsItem;
