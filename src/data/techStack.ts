import { type IconType } from "react-icons";
import { LuCode } from "react-icons/lu";
import {
  SiFastapi,
  SiGooglecloud,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type TechInfo = {
  color: string;
  icon: IconType;
};

export const TECH_STACK: Record<string, TechInfo> = {
  React: { color: "#61DAFB", icon: SiReact },
  "React Native": { color: "#61DAFB", icon: SiReact },
  TypeScript: { color: "#3178C6", icon: SiTypescript },
  "Node.js": { color: "#5FA04E", icon: SiNodedotjs },
  PostgreSQL: { color: "#4169E1", icon: SiPostgresql },
  "Tailwind CSS": { color: "#06B6D4", icon: SiTailwindcss },
  FastAPI: { color: "#009688", icon: SiFastapi },
  Vite: { color: "#646CFF", icon: SiVite },
  "Vertex AI": { color: "#4285F4", icon: SiGooglecloud },
  Zustand: { color: "#8C6A4F", icon: LuCode },
};
export const DEFAULT_TECH: TechInfo = { color: "#1c7ed6", icon: LuCode };

export const getTechInfo = (tag: string): TechInfo =>
  TECH_STACK[tag] ?? DEFAULT_TECH;
