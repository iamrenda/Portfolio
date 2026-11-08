import { type Project } from "@/types/Project";

// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT — overview / features / gallery below are dummy text.
// Replace with real content. Real screenshots go in public/projects/<slug>/
// (e.g. "/projects/toeical/home.webp"); until then the thumbnail is reused.
// ---------------------------------------------------------------------------
const DUMMY_OVERVIEW = [
  "このプロジェクトは、身近な不便を解決したいという思いから開発を始めました。ターゲットユーザーへのヒアリングを重ね、本当に必要な機能だけに絞って設計しています。",
  "開発では、設計・実装・運用までを一貫して担当し、技術選定の理由やトレードオフを都度ドキュメントに残すことを意識しました。",
];

const DUMMY_FEATURE_TEXTS = [
  {
    title: "直感的に使える画面設計",
    body: "初めて触るユーザーでも迷わないよう、操作を最小限のステップに絞ったUIを設計しました。主要な操作は常に1画面内で完結します。",
  },
  {
    title: "快適なレスポンス",
    body: "データ取得のキャッシュと楽観的更新を取り入れ、通信が遅い環境でも待ち時間を感じにくい体験を実現しました。",
  },
  {
    title: "継続して使いたくなる仕組み",
    body: "進捗の可視化や通知など、日々の利用を後押しする機能を追加し、継続率の向上を狙いました。",
  },
  {
    title: "拡張しやすい設計",
    body: "機能追加を見越してモジュールを分割し、新しい機能を既存コードへの影響を抑えて追加できるようにしました。",
  },
];

const dummyFeatures = (
  title: string,
  src: string,
  count: number,
): Project["features"] => {
  const [first, ...rest] = DUMMY_FEATURE_TEXTS.slice(0, count).map((f) => ({
    ...f,
    src,
    alt: `${title}の機能: ${f.title}`,
  }));
  return [first, ...rest];
};

const dummyGallery = (title: string, src: string): Project["gallery"] =>
  ["ホーム画面", "詳細画面", "設定画面"].map((caption) => ({
    src,
    alt: `${title}: ${caption}`,
    caption,
  }));

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
    period: "2026.04 – 現在",
    members: 3,
    role: "リードエンジニア / バックエンド・モバイル開発",
    overview: DUMMY_OVERVIEW,
    features: dummyFeatures("TOEICAL", "/projects/toeical.webp", 3),
    gallery: dummyGallery("TOEICAL", "/projects/toeical.webp"),
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
    period: "2025.10 – 現在",
    members: 2,
    role: "フロントエンド開発 / 設計",
    overview: DUMMY_OVERVIEW,
    features: dummyFeatures("青学 Noodle", "/projects/aogaku-noodle.webp", 3),
    gallery: dummyGallery("青学 Noodle", "/projects/aogaku-noodle.webp"),
  },
  {
    slug: "momentum",
    title: "MOMENTUM",
    description: "目標と期限から、AIが優先度付きToDoを自動生成するアプリ",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Vertex AI"],
    category: ["app", "archived"],
    src: "/projects/momentum.webp",
    alt: "MOMENTUMのアプリ画面",
    period: "2025.06 – 2025.09",
    members: 1,
    role: "個人開発 (設計・開発・運用)",
    overview: DUMMY_OVERVIEW,
    // 4 features and no gallery (placeholder, to exercise both cases)
    features: dummyFeatures("MOMENTUM", "/projects/momentum.webp", 4),
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
    period: "2023.03 – 2024.01",
    members: 4,
    role: "プロジェクトリーダー / 開発",
    overview: DUMMY_OVERVIEW,
    features: dummyFeatures("AUTO World", "/projects/auto-world.webp", 3),
    gallery: dummyGallery("AUTO World", "/projects/auto-world.webp"),
  },
];
