import { useEffect, useState } from "react";
import { AmbientBackground } from "./components/AmbientBackground";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { CodingSection } from "./components/CodingSection";
import { Internships } from "./components/Internships";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer, BackToTop } from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen visible={loading} />
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <CodingSection />
        <Internships />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <div className="relative z-10 overflow-x-hidden">
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

export default App;
