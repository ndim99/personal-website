import BackToTopButton from "./components/BackToTop";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="text-gray-100 relative">
      <BackToTopButton />
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
