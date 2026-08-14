import React, { useState, useEffect } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo, projects } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { 
  Tv, 
  Volume2, 
  VolumeX, 
  Zap, 
  FileText, 
  Mail, 
  FolderGit2, 
  X, 
  Home, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import type { ArcadeStage } from '../../types';

export const ArcadeHUD: React.FC = () => {
  const { 
    currentStage, 
    setStage, 
    crtEnabled, 
    toggleCrt, 
    soundMuted, 
    toggleSound, 
    recruiterPassOpen, 
    setRecruiterPassOpen, 
    toggleRecruiterPass,
    setSelectedProjectId
  } = useArcade();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sound.playHover();
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleStageSelectFromPass = (stage: ArcadeStage, projectId?: string) => {
    sound.playSelect();
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    setStage(stage);
    setRecruiterPassOpen(false);
  };

  const stageLabels: Record<ArcadeStage, string> = {
    LANDING: 'PRESS START',
    MENU: 'SELECT STAGE',
    ABOUT: 'PLAYER PROFILE',
    PROJECTS: 'PROJECTS UNLOCKED',
    OPEN_SOURCE: 'BOSSES DEFEATED',
    SKILLS: 'ITEMS COLLECTED',
    EDUCATION: 'LEVEL PROGRESSION',
    ACHIEVEMENTS: 'TROPHY ROOM',
    CONTACT: 'CONTINUE? PRESS START'
  };

  return (
    <>
      {/* Top Arcade HUD Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#120a21]/95 border-b-3 border-[#ff2a85] px-3 sm:px-6 py-2.5 flex items-center justify-between font-mono-tech text-xs text-[#f8f6fc] shadow-md">
        {/* Left: Brand Badge & Active Stage */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setStage('LANDING')}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            title="Return to Arcade Landing"
          >
            <span className="inline-block w-2.5 h-2.5 bg-[#ffcc00] animate-pulse"></span>
            <span className="font-silkscreen text-[#ffcc00] tracking-wider text-xs hidden sm:inline">HVK-ARCADE</span>
          </button>

          <span className="text-[#a89cb9] hidden sm:inline">|</span>

          <div className="flex items-center gap-1.5 bg-[#1e1333] border-2 border-[#ff2a85] px-2.5 py-0.5 rounded-none text-[10px] font-silkscreen">
            <span className="text-[#ff2a85] font-bold uppercase tracking-wider">{stageLabels[currentStage]}</span>
          </div>

          <span className="text-[#a89cb9] hidden md:inline">|</span>
          <span className="text-[#a89cb9] text-[11px] hidden md:inline">{timeStr}</span>
        </div>

        {/* Right: Controls & Recruiter Fast Pass */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-none border-2 flex items-center gap-1.5 transition-all text-[10px] font-silkscreen ${
              soundMuted 
                ? 'border-slate-700 bg-[#170e28] text-slate-500 hover:border-slate-500' 
                : 'border-[#ffcc00] bg-[#1e1333] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#120a21]'
            }`}
            title={soundMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
          >
            {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{soundMuted ? 'SFX:OFF' : 'SFX:ON'}</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={toggleCrt}
            onMouseEnter={() => sound.playHover()}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-none border-2 flex items-center gap-1.5 transition-all text-[10px] font-silkscreen ${
              crtEnabled 
                ? 'border-[#ff2a85] bg-[#1e1333] text-[#ff2a85] hover:bg-[#ff2a85] hover:text-white' 
                : 'border-slate-700 bg-[#170e28] text-slate-500 hover:border-slate-500'
            }`}
            title="Toggle CRT Scanline Overlay"
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{crtEnabled ? 'CRT:ON' : 'CRT:OFF'}</span>
          </button>

          {/* Recruiter Fast Pass Trigger */}
          <button
            onClick={toggleRecruiterPass}
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-yellow px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-[#120a21]" />
            <span>RECRUITER PASS</span>
          </button>

          {/* Main Menu Button */}
          {currentStage !== 'LANDING' && (
            <button
              onClick={() => setStage('MENU')}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MENU</span>
            </button>
          )}
        </div>
      </header>

      {/* Recruiter Fast-Pass Quick Access Drawer */}
      {recruiterPassOpen && (
        <div className="fixed inset-0 z-50 bg-[#090511]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="arcade-card-cream w-full max-w-2xl p-6 relative border-3 border-[#000000] shadow-[6px_6px_0px_#ff2a85] animate-in fade-in zoom-in duration-150">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-[#000000] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#ff2a85] fill-[#ff2a85]" />
                <h3 className="font-silkscreen text-base sm:text-lg font-bold text-[#120a21] uppercase">
                  ⚡ RECRUITER FAST-PASS MODE
                </h3>
              </div>
              <button
                onClick={() => setRecruiterPassOpen(false)}
                onMouseEnter={() => sound.playHover()}
                className="p-1 text-[#120a21] hover:bg-[#ff2a85] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[#120a21] text-xs font-mono-tech mb-5 leading-relaxed">
              Instant 1-click access for recruiters, hiring managers, and technical interviewers. Skip stages directly to key candidate deliverables.
            </p>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-pink py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  DOWNLOAD RESUME.PDF
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-yellow py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  GITHUB PROFILE
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  LINKEDIN PROFILE
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {copiedEmail ? 'COPIED!' : personalInfo.socials.email}
                </span>
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Direct Project Jump */}
            <div className="border-t-2 border-[#000000] pt-4">
              <h4 className="font-silkscreen text-xs text-[#120a21] uppercase mb-3 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-[#ff2a85]" />
                DIRECT PROJECT MISSIONS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleStageSelectFromPass('PROJECTS', proj.id)}
                    onMouseEnter={() => sound.playHover()}
                    className="text-left bg-white hover:bg-[#ff2a85] hover:text-white border-2 border-[#000000] p-2.5 transition-all text-xs flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-chakra font-bold text-[#120a21] group-hover:text-white">{proj.title}</div>
                      <div className="text-[10px] font-mono-tech text-slate-600 group-hover:text-slate-100">{proj.category}</div>
                    </div>
                    <span className="font-silkscreen text-[10px]">VIEW →</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 text-right">
              <button
                onClick={() => setRecruiterPassOpen(false)}
                onMouseEnter={() => sound.playHover()}
                className="font-silkscreen text-xs text-[#120a21] underline hover:text-[#ff2a85]"
              >
                CLOSE FAST PASS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
