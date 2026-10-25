import Image from "next/image";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

function DetailButton({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute right-7 bottom-7 flex items-center gap-2 px-4 py-2 text-xs font-semibold opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none ${className}`}
    >
      詳しく見る
      <LuArrowUpRight size={14} aria-hidden />
    </span>
  );
}

function Cover({ src, alt, fade }: { src: string; alt: string; fade: string }) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 66vw, 100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${fade}`} />
    </>
  );
}

const FADE_LIGHT = "from-white/60 via-white/10 to-transparent";

const REVEAL =
  "max-h-0 overflow-hidden opacity-0 transition-all duration-300 motion-reduce:transition-none group-focus-within:max-h-40 group-focus-within:opacity-100 group-hover:max-h-40 group-hover:opacity-100";

const LIGHT = "bg-ink text-white";
const DARK = "bg-white text-ink";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-12 pt-32 pb-24">
      <h2 className="font-display text-ink mb-10 text-[160px] leading-none uppercase">
        Projects
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <article
          tabIndex={0}
          className="group focus-visible:outline-accent text-ink relative col-span-2 row-span-2 flex min-h-[520px] flex-col justify-end overflow-hidden bg-[#e6edf8] p-7 shadow-lg focus-visible:outline-2 focus-visible:-outline-offset-2"
        >
          <Cover
            src="/projects/toeical.webp"
            alt="TOEICALのアプリ画面"
            fade={FADE_LIGHT}
          />
          <h3 className="font-display relative text-[56px] leading-none">
            TOEICAL
          </h3>
          <div className={REVEAL}>
            <p className="relative mt-3 text-base leading-relaxed font-medium">
              TOEICを起点とした英語学習アプリ
            </p>
            <p className="relative mt-1 text-sm font-semibold">
              React Native (Expo) · TypeScript · Node.js · PostgreSQL
            </p>
          </div>
          <DetailButton className={LIGHT} />
        </article>

        <article
          tabIndex={0}
          className="group focus-visible:outline-accent text-ink relative row-span-2 flex min-h-[520px] flex-col justify-end overflow-hidden bg-[#f5f7fa] p-7 shadow-lg focus-visible:outline-2 focus-visible:-outline-offset-2"
        >
          <Cover
            src="/projects/aogaku-noodle.webp"
            alt="青学 NoodleのChrome拡張機能の画面"
            fade={FADE_LIGHT}
          />
          <h3 className="font-display relative text-[32px] leading-none">
            青学 Noodle
          </h3>
          <div className={REVEAL}>
            <p className="relative mt-3 text-base leading-relaxed font-medium">
              青学Moodleをさらに便利に使うためのChrome拡張機能
            </p>
            <p className="relative mt-1 text-sm font-semibold">
              React, TypeScript, Tailwind CSS
            </p>
          </div>
          <DetailButton className={LIGHT} />
        </article>

        <article
          tabIndex={0}
          className="group focus-visible:outline-accent text-ink relative flex min-h-[340px] flex-col justify-end overflow-hidden bg-[#f5f7fa] p-7 shadow-lg focus-visible:outline-2 focus-visible:-outline-offset-2"
        >
          <Cover
            src="/projects/momentum.webp"
            alt="MOMENTUMのアプリ画面"
            fade={FADE_LIGHT}
          />
          <h3 className="font-display relative text-[32px] leading-none">
            MOMENTUM
          </h3>
          <div className={REVEAL}>
            <p className="relative mt-2 text-base font-medium">
              目標と期限から、AIが優先度付きToDoを自動生成するアプリ
            </p>
            <p className="relative mt-2 text-sm font-semibold">
              React · TypeScript · FastAPI · PostgreSQL · Google Vertex AI
            </p>
          </div>
          <DetailButton className={LIGHT} />
        </article>

        <article
          tabIndex={0}
          className="group focus-visible:outline-accent relative flex min-h-[340px] flex-col justify-end overflow-hidden bg-[#222b45] p-7 text-white shadow-lg focus-visible:outline-2 focus-visible:-outline-offset-2"
        >
          <Cover
            src="/projects/auto-world.webp"
            alt="AUTO Worldのワールド"
            fade="from-black/50 via-transparent to-transparent"
          />
          <h3 className="font-display relative text-[32px] leading-none">
            AUTO World
          </h3>
          <div className={REVEAL}>
            <p className="relative mt-2 text-base font-medium">
              Minecraft 統合版プレイヤー向けの練習ワールド
            </p>
            <p className="relative mt-2 text-sm font-semibold">
              React · Vite · Zustand
            </p>
          </div>
          <DetailButton className={DARK} />
        </article>

        <a
          href="#"
          className="relative flex min-h-[340px] flex-col justify-end bg-[#4a7fd4] p-7 text-white shadow-lg"
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
