import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
