"use client";

import Image from "next/image";
import { useState } from "react";

type Panel = {
  label: string;
  color: string;
  title: string;
  description: string;
  background?: string;
  hoverImages?: string[];
};

const PANELS: Panel[] = [
  {
    label: "School",
    color: "bg-[#3b66a5] text-white",
    background: "/about/school-bg.webp",
    title: "青山学院大学\n理工学部 情報テクノロジー学科 2年",
    description: "限られた時間で楽しく、悔いのない生活を送っています。",
  },
  {
    label: "Hobby",
    color: "bg-[#222b45] text-white",
    background: "/about/hobby-bg.webp",
    title: "音楽（洋楽）、筋トレ、散歩",
    description:
      "音楽が無くちゃ生きていけない。未来の自分のためにも、健康的な生活を意識しています。",
  },
  {
    label: "Tech Stack",
    color: "bg-[#1971c2] text-white",
    background: "/about/tech-stack-desk.webp",
    hoverImages: ["/about/tech-stack-keyboard.webp"],
    title: "TypeScript ・ React ・ Next.js ・ Node.js ・ PostgreSQL",
    description:
      "フロントエンドを中心に、APIの実装まで一人で手がけられるよう学んでいます。",
  },
  {
    label: "Now",
    color: "bg-[#222b45] text-white",
    background: "/about/now-2.webp",
    hoverImages: [1, 5, 6, 7].map((n) => `/about/now-${n}.webp`),
    title: "いま取り組んでいること",
    description:
      "ポートフォリオを制作中。またインターンシップを通して、実務経験を積みたいと考えています。",
  },
];

const EASE =
  "duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export default function AboutMe() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="about" className="bg-white px-12 pt-16 pb-32">
      <h2 className="font-display text-ink mb-8 text-[160px] leading-none uppercase">
        About Me
      </h2>

      <p className="text-ink text-6xl leading-tight font-bold tracking-tight">
        <span className="text-accent">渡部 廉</span>、19歳。
        <br />
        栃木県出身、福島県・
        <a
          href="https://www.google.com/maps/search/%E3%83%9F%E3%83%8D%E3%82%BD%E3%82%BF%E5%B7%9E"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 underline decoration-2 underline-offset-4"
        >
          ミネソタ州
        </a>
        育ち。
        <br />
        フルスタックエンジニアを目指す大学生です。
      </p>

      <div
        className="mt-16 flex h-[640px]"
        onMouseLeave={() => setActive(null)}
      >
        {PANELS.map(
          ({ label, color, title, description, background, hoverImages }) => {
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
                {background && (
                  <>
                    <Image
                      src={background}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${
                        hoverImages && isActive ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </>
                )}

                {hoverImages && (
                  <div
                    className={`absolute inset-0 flex transition-opacity duration-500 motion-reduce:transition-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {hoverImages.map((src, i) => (
                      <div key={src} className="relative flex-1">
                        <Image
                          src={src}
                          alt={`${label} ${i + 1}`}
                          fill
                          sizes="(min-width: 768px) 60vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-black/35" />
                  </div>
                )}

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
                  className={`absolute top-8 left-8 w-[600px] transition-[opacity,translate] duration-500 motion-reduce:transition-none ${
                    isActive
                      ? "translate-y-0 opacity-100 delay-300"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-4xl leading-snug font-bold whitespace-pre-line">
                    {title}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">{description}</p>
                </div>
              </article>
            );
          },
        )}
      </div>
    </section>
  );
}
