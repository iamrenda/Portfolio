import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/hero/Hero";
import News from "@/components/news/News";
import Projects from "@/components/projects/Projects";

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
