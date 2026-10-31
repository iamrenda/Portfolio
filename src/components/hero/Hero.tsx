import SiteMenu from "./SiteMenu";
import PatternBackground from "./PatternBackground";
import HeroTitle from "./HeroTitle";
import HeroFade from "./HeroFade";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-white px-12">
      <PatternBackground />
      <SiteMenu />
      <HeroTitle />
      <HeroFade />
    </section>
  );
}
