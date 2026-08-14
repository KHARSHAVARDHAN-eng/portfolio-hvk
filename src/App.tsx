import React, { useEffect } from 'react';
import { ArcadeProvider, useArcade } from './context/ArcadeContext';
import { ArcadeHUD } from './components/layout/ArcadeHUD';
import { LandingScreen } from './components/arcade/LandingScreen';
import { MainMenu } from './components/arcade/MainMenu';
import { AboutStage } from './components/arcade/AboutStage';
import { ProjectsStage } from './components/arcade/ProjectsStage';
import { OpenSourceStage } from './components/arcade/OpenSourceStage';
import { SkillsStage } from './components/arcade/SkillsStage';
import { EducationStage } from './components/arcade/EducationStage';
import { AchievementsStage } from './components/arcade/AchievementsStage';
import { ContactStage } from './components/arcade/ContactStage';
import { CustomCursor } from './components/ui/CustomCursor';

const MainArcadeApp: React.FC = () => {
  const { currentStage, setStage, crtEnabled } = useArcade();

  // Keyboard shortcut listener for Esc key to return to menu/landing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (currentStage !== 'LANDING' && currentStage !== 'MENU') {
          setStage('MENU');
        } else if (currentStage === 'MENU') {
          setStage('LANDING');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStage, setStage]);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500/30 selection:text-white relative font-chakra overflow-x-hidden">
      {/* Custom Arcade Cursor */}
      <CustomCursor />

      {/* CRT & Scanline Filter Layers */}
      {crtEnabled && (
        <>
          <div className="crt-overlay" />
          <div className="crt-vignette" />
        </>
      )}

      {/* Arcade HUD Header Controls */}
      <ArcadeHUD />

      {/* Active Stage View Controller */}
      <main className="relative z-10">
        {currentStage === 'LANDING' && <LandingScreen />}
        {currentStage === 'MENU' && <MainMenu />}
        {currentStage === 'ABOUT' && <AboutStage />}
        {currentStage === 'PROJECTS' && <ProjectsStage />}
        {currentStage === 'OPEN_SOURCE' && <OpenSourceStage />}
        {currentStage === 'SKILLS' && <SkillsStage />}
        {currentStage === 'EDUCATION' && <EducationStage />}
        {currentStage === 'ACHIEVEMENTS' && <AchievementsStage />}
        {currentStage === 'CONTACT' && <ContactStage />}
      </main>

      {/* Arcade Footer HUD */}
      <footer className="w-full py-4 text-center text-xs font-mono-tech text-slate-400 border-t border-cyan-500/20 bg-[#04060d]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            K. HARSHAVARDHAN • CSE STUDENT AT ALLIANCE UNIVERSITY
          </div>
          <div className="text-cyan-400 font-silkscreen text-[10px]">
            INTERACTIVE ARCADE EXPERIENCE • 2026 EDITION
          </div>
        </div>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <ArcadeProvider>
      <MainArcadeApp />
    </ArcadeProvider>
  );
}

export default App;
