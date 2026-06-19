import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <Navbar />
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}
