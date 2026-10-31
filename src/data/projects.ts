import { type Project } from "@/types/Project";

export const PROJECTS: Project[] = [
  {
    slug: "toeical",
    title: "TOEICAL",
    description: "TOEICを起点とした英語学習アプリ",
    tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    category: ["app", "working"],
    src: "/projects/toeical.webp",
    alt: "TOEICALのアプリ画面",
    github: "https://github.com/iamrenda/toeical",
  },
  {
    slug: "aogaku-noodle",
    title: "青学 Noodle",
    description: "青学Moodleをさらに便利に使うためのChrome拡張機能",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: ["tools", "working"],
    src: "/projects/aogaku-noodle.webp",
    alt: "青学 NoodleのChrome拡張機能の画面",
    github: "https://github.com/iamrenda/aogaku-noodle",
  },
  {
    slug: "momentum",
    title: "MOMENTUM",
    description: "目標と期限から、AIが優先度付きToDoを自動生成するアプリ",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Vertex AI"],
    category: ["app", "archived"],
    src: "/projects/momentum.webp",
    alt: "MOMENTUMのアプリ画面",
  },
  {
    slug: "auto-world",
    title: "AUTO World",
    description: "Minecraft 統合版プレイヤー向けの練習ワールド",
    tags: ["React", "Vite", "Zustand"],
    category: ["tools", "archived"],
    src: "/projects/auto-world.webp",
    alt: "AUTO Worldのワールド",
    github: "https://github.com/iamrenda-archives/AUTO-BP",
    otherLinks: [
      {
        label: "ワールド配布ページ",
        url: "https://mcpedl.com/auto-world/",
      },
      {
        label: "紹介動画",
        url: "https://www.youtube.com/watch?v=rDxLxCwXHiE",
      },
      {
        label: "ウェブサイト",
        url: "https://autoworldmc.netlify.app/",
      },
    ],
  },
];
