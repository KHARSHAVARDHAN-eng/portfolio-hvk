import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { OpenSourceSection } from './components/sections/OpenSourceSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { TerminalOverlay } from './components/terminal/TerminalOverlay';
import { CustomCursor } from './components/ui/CustomCursor';
import { MatrixRain } from './components/ui/MatrixRain';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal on ~ key (tilde/backtick)
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-white relative">
      {/* Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Matrix Rain Easter Egg Canvas (when triggered from terminal) */}
      {matrixActive && <MatrixRain onClose={() => setMatrixActive(false)} />}

      {/* Floating Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Single-Page Interactive Application */}
      <main>
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <OpenSourceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Terminal CLI Overlay */}
      <TerminalOverlay
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onTriggerMatrix={() => {
          setTerminalOpen(false);
          setMatrixActive(true);
        }}
      />
    </div>
  );
}

export default App;
