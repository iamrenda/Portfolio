import { Menu } from "lucide-react";

function PatternBackground() {
  return (
    <div
      aria-hidden
      className="text-tint pointer-events-none absolute top-1/2 left-1/2 w-[200vw] -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] select-none"
    >
      {Array.from({ length: 9 }, (_, row) => (
        <div
          key={row}
          className="text-[104px] leading-[1.35] font-bold whitespace-nowrap"
        >
          <div
            className={`flex w-max ${row % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}
            style={{ animationDelay: `${-row * 17}s` }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className="pr-12">
                @iamrenda で生きてゆく
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <PatternBackground />

      <header className="absolute top-0 right-0 z-10 px-14 py-9">
        <button
          type="button"
          className="text-ink flex cursor-pointer items-center gap-3 text-[15px] font-semibold"
        >
          Menu
          <Menu size={20} strokeWidth={2.5} aria-hidden />
        </button>
      </header>

      <div className="absolute top-[310px] left-12 z-10">
        <h1 className="text-ink mb-2 leading-none font-extrabold tracking-tighter">
          <span className="text-accent text-[124px]">@</span>
          <span className="text-[140px]">iamrenda</span>
        </h1>
        <p className="text-ink mt-1 ml-1 text-[64px] leading-none font-medium">
          で生きてゆく
        </p>
      </div>
    </section>
  );
}
