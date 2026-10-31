import HeadingText from "../util/HeadingText";
import ProjectItem from "./ProjectItem";
import ViewAllButton from "./ViewAllButton";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-12 pt-32 pb-24">
      <HeadingText text="Projects" />

      <div className="grid grid-cols-3 gap-4">
        <ProjectItem
          title="TOEICAL"
          description="TOEICを起点とした英語学習アプリ"
          tech="React Native (Expo) · TypeScript · Node.js · PostgreSQL"
          src="/projects/toeical.webp"
          alt="TOEICALのアプリ画面"
          color="dark"
          className="col-span-2 row-span-2 min-h-130"
          titleClassName="text-6xl"
        />

        <ProjectItem
          title="青学 Noodle"
          description="青学Moodleをさらに便利に使うためのChrome拡張機能"
          tech="React, TypeScript, Tailwind CSS"
          src="/projects/aogaku-noodle.webp"
          alt="青学 NoodleのChrome拡張機能の画面"
          color="dark"
          className="row-span-2 min-h-130"
        />

        <ProjectItem
          title="MOMENTUM"
          description="目標と期限から、AIが優先度付きToDoを自動生成するアプリ"
          tech="React · TypeScript · FastAPI · PostgreSQL · Google Vertex AI"
          src="/projects/momentum.webp"
          alt="MOMENTUMのアプリ画面"
          color="dark"
          className="min-h-85"
        />

        <ProjectItem
          title="AUTO World"
          description="Minecraft 統合版プレイヤー向けの練習ワールド"
          tech="React · Vite · Zustand"
          src="/projects/auto-world.webp"
          alt="AUTO Worldのワールド"
          color="light"
          className="min-h-85"
        />

        <ViewAllButton />
      </div>
    </section>
  );
}
