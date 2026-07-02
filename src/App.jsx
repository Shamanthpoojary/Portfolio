import { useState } from "react";
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
