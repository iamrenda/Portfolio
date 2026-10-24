import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

function DetailButton({ className }: { className: string }) {
  return (
    <button
      type="button"
      className={`absolute right-7 bottom-7 flex cursor-pointer items-center gap-2 px-4 py-2 text-xs font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 ${className}`}
    >
      詳しく見る
      <LuArrowUpRight size={14} aria-hidden />
    </button>
  );
}

const LIGHT = "bg-ink text-white";
const DARK = "bg-white text-ink";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-12 pt-32 pb-24">
      <h2 className="font-display text-ink mb-10 text-[160px] leading-none uppercase">
        Projects
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <article className="group relative col-span-2 row-span-2 flex min-h-[390px] flex-col justify-end bg-[#3b66a5] p-7 text-white">
          <h3 className="font-display text-[88px] leading-none uppercase">
            Taskflow
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            チームの進捗がひと目でわかる、カンバン型のタスク管理アプリ。
          </p>
          <ul className="mt-3 flex gap-2 text-xs font-semibold">
            {["Next.js", "TypeScript", "Supabase"].map((t) => (
              <li key={t} className="border border-white px-2.5 py-0.5">
                {t}
              </li>
            ))}
          </ul>
          <DetailButton className={DARK} />
        </article>

        <article className="group text-ink relative flex min-h-[190px] flex-col justify-end bg-[#e6edf8] p-7">
          <h3 className="font-display text-[52px] leading-none uppercase">
            Campusmap
          </h3>
          <p className="mt-1 text-xs">Next.js · Mapbox GL JS · FastAPI</p>
          <DetailButton className={LIGHT} />
        </article>

        <article className="group relative flex min-h-[190px] flex-col justify-end bg-[#222b45] p-7 text-white">
          <h3 className="font-display text-[52px] leading-none uppercase">
            Study Log API
          </h3>
          <p className="mt-1 text-xs">Go · PostgreSQL · Docker</p>
          <DetailButton className={DARK} />
        </article>

        <article className="group text-ink relative flex min-h-[250px] flex-col justify-end bg-white p-7">
          <h3 className="font-display text-[52px] leading-none uppercase">
            Kakeibo Lens
          </h3>
          <p className="mt-2 text-xs text-slate-500">
            レシートを撮影するだけで支出を記録する家計簿アプリ。
          </p>
          <p className="mt-2 text-xs font-semibold">
            React · Firebase · Cloud Vision API
          </p>
          <DetailButton className={LIGHT} />
        </article>

        <article className="group text-ink relative flex min-h-[250px] flex-col justify-end bg-[#f3f5f9] p-7">
          <h3 className="font-display text-[52px] leading-none uppercase">
            Typing Dojo
          </h3>
          <p className="mt-2 text-xs text-slate-500">
            日本語と英語に対応したタイピング練習アプリ。
          </p>
          <p className="mt-2 text-xs font-semibold">React · Vite · Zustand</p>
          <DetailButton className={LIGHT} />
        </article>

        <a
          href="#"
          className="relative flex min-h-[250px] flex-col justify-end bg-[#4a7fd4] p-7 text-white"
        >
          <h3 className="font-display text-[72px] leading-none whitespace-nowrap uppercase">
            View All
          </h3>
          <span className="text-accent absolute top-7 right-7 flex size-14 items-center justify-center bg-white">
            <LuArrowRight size={22} aria-hidden />
          </span>
        </a>
      </div>
    </section>
  );
}
