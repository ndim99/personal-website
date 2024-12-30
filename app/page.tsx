import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-bg via-secondary-bg to-primary-bg text-gray-100">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
