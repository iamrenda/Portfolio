import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <News />
      <AboutMe />
      <Contact />
    </main>
  );
}
