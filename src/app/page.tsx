import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/home/hero/Hero";
import News from "@/components/home/news/News";
import Projects from "@/components/home/projects/Projects";

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
