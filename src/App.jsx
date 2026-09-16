import { useEffect, useState } from "react";
import BootScreen from "./components/BootScreen";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Availability from "./components/Availability";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [booted, setBooted] = useState(false);

  // The browser resolves a deep link's #hash before the boot screen finishes
  // rendering the page behind it, so the jump is lost. Redo it once the boot
  // screen is out of the way, instantly rather than smoothly — a deep link
  // should land where it was aimed, not scroll the whole page first.
  useEffect(() => {
    if (!booted) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [booted]);

  return (
    <>
      <BootScreen onDone={() => setBooted(true)} />
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <div className="h-1.5 pcb-edge" aria-hidden="true" />
          <Skills />
          <Projects />
          <Education />
          <Availability />
          <div className="h-1.5 pcb-edge" aria-hidden="true" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
