export default function PatternBackground() {
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
