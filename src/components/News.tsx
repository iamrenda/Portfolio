import { LuArrowRight, LuAward, LuCode, LuPenLine } from "react-icons/lu";

const NEWS = [
  {
    icon: LuCode,
    chip: "bg-[#3b66a5]",
    image: "bg-[#4a7fd4]",
    date: "2026.10.12",
    title: "Study Log API を公開しました",
    description:
      "学習時間を記録・集計するREST APIを、設計からテストまで一人で実装して公開しました。",
  },
  {
    icon: LuPenLine,
    chip: "bg-[#222b45]",
    image: "bg-[#3b66a5]",
    date: "2026.10.05",
    title: "Next.js App RouterでLiquid Glass風のUIをつくる",
    description:
      "backdrop-filterと半透明の白だけで、ガラスの質感をどこまで再現できるかを試した記録です。",
  },
  {
    icon: LuAward,
    chip: "bg-[#4a7fd4]",
    image: "bg-[#6c9be0]",
    date: "2026.08.30",
    title: "日商簿記検定3級に合格しました",
    description:
      "ITとは別の分野にも挑戦しました。使った教材と学習の進め方をまとめています。",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white px-12 pt-16 pb-32">
      <h2 className="font-display text-ink mb-10 text-[160px] leading-none uppercase">
        News
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {NEWS.map(({ icon: Icon, chip, image, date, title, description }) => (
          <article key={title} className="flex flex-col">
            <div className={`aspect-square w-full ${image}`} />

            <div className="mt-5 flex items-center gap-3">
              <span
                className={`flex size-7 items-center justify-center text-white ${chip}`}
              >
                <Icon size={14} aria-hidden />
              </span>
              <time className="text-ink text-xs font-semibold tracking-wider">
                {date}
              </time>
            </div>

            <h3 className="text-ink mt-3 text-xl leading-snug font-bold">
              {title}
            </h3>
            <p className="mt-3 mb-6 text-sm leading-relaxed text-slate-500">
              {description}
            </p>

            <button
              type="button"
              className="border-ink text-ink hover:bg-ink mt-auto flex w-fit cursor-pointer items-center gap-2 self-start border px-5 py-3 text-xs font-semibold transition-colors duration-200 hover:text-white"
            >
              詳細を見る
              <LuArrowRight size={14} aria-hidden />
            </button>
          </article>
        ))}
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
