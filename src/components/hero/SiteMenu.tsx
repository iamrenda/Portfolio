"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const ITEMS = ["Projects", "News", "About Me", "Contact"];

type Phase = "closed" | "open" | "closing";

const PanelClasses: Record<Phase, string> = {
  closed: "invisible",
  open: "animate-menu-in",
  closing: "animate-menu-out",
};

export default function SiteMenu() {
  const [phase, setPhase] = useState<Phase>("closed");
  const isOpen = phase === "open";

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onAnimationEnd={(e) => {
          if (e.target === e.currentTarget && phase === "closing") {
            setPhase("closed");
          }
        }}
        className={`fixed inset-y-0 right-0 z-20 flex w-1/2 items-center justify-end pr-14 ${PanelClasses[phase]}`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-white/60 [mask-image:linear-gradient(to_right,transparent,black_84%)] backdrop-blur-2xl"
        />
        <ul className="font-display text-ink relative space-y-4 text-right text-[120px] leading-none tracking-tight uppercase">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className={`ml-auto w-fit cursor-pointer ${isOpen ? "animate-menu-item" : ""}`}
              style={{ animationDelay: `${150 + i * 70}ms` }}
            >
              <span className="inline-block transition-transform duration-300 ease-out hover:-translate-x-2">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <header className="fixed top-0 right-0 z-30 px-14 py-9">
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setPhase(isOpen ? "closing" : "open")}
          className="text-ink flex cursor-pointer items-center gap-3 text-[19px] font-semibold"
        >
          {isOpen ? (
            <LuX size={26} strokeWidth={2.5} aria-hidden />
          ) : (
            <LuMenu size={26} strokeWidth={2.5} aria-hidden />
          )}
        </button>
      </header>
    </>
  );
}
