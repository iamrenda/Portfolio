"use client";

import { useState } from "react";

const PANELS = [
  {
    label: "School",
    color: "bg-[#3b66a5] text-white",
    title: "〇〇大学 情報学部 3年",
    description:
      "2028年3月卒業予定。ソフトウェアの設計と開発を中心に学んでいます。",
  },
  {
    label: "Hobby",
    color: "bg-[#222b45] text-white",
    title: "カフェ巡り・ランニング・読書",
    description:
      "気分転換は、新しいカフェを探すことと、走ること。本からも発想を得ています。",
  },
  {
    label: "Tech Stack",
    color: "bg-[#1971c2] text-white",
    title: "TypeScript / React / Next.js / Node.js / Python",
    description:
      "フロントエンドを中心に、APIの実装まで一人で手がけられるよう学んでいます。",
  },
  {
    label: "Now",
    color: "bg-[#e6edf8] text-ink",
    title: "いま取り組んでいること",
    description:
      "ポートフォリオを制作中。TOEICと簿記の学習、個人開発のAPI改善にも取り組み続けています。",
  },
];

const EASE =
  "duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export default function AboutMe() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="about" className="bg-white px-12 pt-16 pb-32">
      <h2 className="font-display text-ink mb-16 text-[160px] leading-none uppercase">
        About Me
      </h2>

      <p className="text-ink text-[80px] leading-[1.3] font-bold">
        使う人の毎日が少し楽になる
        <span className="text-accent">プロダクト</span>
        を、自分の手でつくる。
      </p>

      <div
        className="mt-24 flex h-[560px]"
        onMouseLeave={() => setActive(null)}
      >
        {PANELS.map(({ label, color, title, description }) => {
          const isActive = active === label;
          const isSquished = active !== null && !isActive;

          return (
            <article
              key={label}
              tabIndex={0}
              onMouseEnter={() => setActive(label)}
              onFocus={() => setActive(label)}
              onBlur={() => setActive(null)}
              className={`relative min-w-0 overflow-hidden border-l-16 border-white bg-clip-padding outline-offset-[-4px] transition-[flex] first:border-l-0 ${EASE} ${
                isSquished ? "grow-0 basis-32" : "grow basis-0"
              } ${color}`}
            >
              <h3
                className={`font-display absolute bottom-8 origin-bottom-left leading-none whitespace-nowrap uppercase transition-[left,translate,rotate,font-size] ${EASE} ${
                  isActive
                    ? "left-8 translate-x-0 rotate-0 text-9xl"
                    : isSquished
                      ? "left-1/2 translate-x-[0.5em] -rotate-90 text-7xl"
                      : "left-8 translate-x-[1em] -rotate-90 text-7xl"
                }`}
              >
                {label}
              </h3>

              <div
                className={`absolute top-8 left-8 w-[420px] transition-[opacity,translate] duration-500 motion-reduce:transition-none ${
                  isActive
                    ? "translate-y-0 opacity-100 delay-300"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-2xl leading-snug font-bold">{title}</p>
                <p className="mt-3 text-sm leading-relaxed">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
