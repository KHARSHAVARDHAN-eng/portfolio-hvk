import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { OpenSourceSection } from './components/sections/OpenSourceSection';
import { EducationSection } from './components/sections/EducationSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

export function App() {
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [soundMuted, setSoundMuted] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0818] text-[#f8f6fc] selection:bg-[#ff2a85] selection:text-white relative font-chakra overflow-x-hidden">
      {/* Custom Arcade Cursor */}
      <CustomCursor />

      {/* CRT Scanline Filter Overlay */}
      {crtEnabled && (
        <>
          <div className="crt-overlay" />
          <div className="crt-vignette" />
        </>
      )}

      {/* Top Navbar */}
      <Navbar
        crtEnabled={crtEnabled}
        onToggleCrt={() => setCrtEnabled(!crtEnabled)}
        soundMuted={soundMuted}
        onToggleSound={() => setSoundMuted(!soundMuted)}
      />

      {/* Main Single-Page Portfolio Scroll Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <OpenSourceSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
