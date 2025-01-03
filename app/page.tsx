import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="text-gray-100">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
