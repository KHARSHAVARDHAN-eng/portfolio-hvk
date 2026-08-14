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
    PROJECTS: 'MISSIONS & GRAPH',
    OPEN_SOURCE: 'QUEST LOG',
    SKILLS: 'SKILL MATRIX',
    EDUCATION: 'PROGRESSION',
    ACHIEVEMENTS: 'TROPHY ROOM',
    CONTACT: 'GAME CLEAR'
  };

  return (
    <>
      {/* Top Arcade Navigation HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#060a14]/90 backdrop-blur-md border-b-2 border-cyan-500/30 px-3 sm:px-6 py-2.5 flex items-center justify-between text-xs font-mono-tech text-slate-300 shadow-lg">
        {/* Left: Arcade Stage & Time */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setStage('LANDING')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            title="Return to Arcade Landing"
          >
            <span className="inline-block w-2.5 h-2.5 bg-amber-400 animate-pulse rounded-full"></span>
            <span className="font-silkscreen text-amber-400 tracking-wider text-sm hidden sm:inline">HVK-ARCADE</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          <div className="flex items-center gap-1.5 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded text-[11px]">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">{stageLabels[currentStage]}</span>
          </div>

          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="text-slate-400 text-[11px] hidden md:inline">{timeStr}</span>
        </div>

        {/* Right: Controls & Recruiter Fast Pass */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded border flex items-center gap-1.5 transition-all text-[11px] ${
              soundMuted 
                ? 'border-slate-700 bg-slate-900/80 text-slate-500 hover:border-slate-500' 
                : 'border-emerald-500/40 bg-emerald-950/40 text-emerald-400 hover:border-emerald-400'
            }`}
            title={soundMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
          >
            {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="hidden md:inline font-silkscreen">{soundMuted ? 'SFX:OFF' : 'SFX:ON'}</span>
          </button>

          {/* CRT Overlay Toggle */}
          <button
            onClick={toggleCrt}
            onMouseEnter={() => sound.playHover()}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded border flex items-center gap-1.5 transition-all text-[11px] ${
              crtEnabled 
                ? 'border-cyan-500/40 bg-cyan-950/40 text-cyan-400 hover:border-cyan-400' 
                : 'border-slate-700 bg-slate-900/80 text-slate-500 hover:border-slate-500'
            }`}
            title="Toggle CRT Screen Scanlines Filter"
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden md:inline font-silkscreen">{crtEnabled ? 'CRT:ON' : 'CRT:OFF'}</span>
          </button>

          {/* Recruiter Fast Pass Trigger */}
          <button
            onClick={toggleRecruiterPass}
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-amber px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-xs flex items-center gap-1.5 animate-pulse-glow"
          >
            <Zap className="w-3.5 h-3.5 text-black" />
            <span>RECRUITER PASS</span>
          </button>

          {/* Main Menu Button */}
          {currentStage !== 'LANDING' && (
            <button
              onClick={() => setStage('MENU')}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MENU</span>
            </button>
          )}
        </div>
      </header>

      {/* Recruiter Fast-Pass Quick Access Drawer */}
      {recruiterPassOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="arcade-panel arcade-panel-amber w-full max-w-2xl p-6 rounded-lg relative border-2 border-amber-400 shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h3 className="font-chakra text-lg sm:text-xl font-bold text-amber-300 uppercase tracking-wider">
                  ⚡ RECRUITER FAST-PASS MODE
                </h3>
              </div>
              <button
                onClick={() => setRecruiterPassOpen(false)}
                onMouseEnter={() => sound.playHover()}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm font-mono-tech mb-5 leading-relaxed">
              Instant 1-click access for recruiters, technical interviewers, and hiring managers. Skip arcade stages directly to key candidate deliverables.
            </p>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* Resume */}
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-amber py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  DOWNLOAD RESUME (PDF)
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  GITHUB PROFILE
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  LINKEDIN PROFILE
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Direct Email Copy */}
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline py-2.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  {copiedEmail ? 'COPIED TO CLIPBOARD!' : personalInfo.socials.email}
                </span>
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Direct Project Jump */}
            <div className="border-t border-slate-800 pt-4">
              <h4 className="font-silkscreen text-xs text-slate-400 uppercase mb-3 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                DIRECT PROJECT MISSIONS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleStageSelectFromPass('PROJECTS', proj.id)}
                    onMouseEnter={() => sound.playHover()}
                    className="text-left bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-700/60 hover:border-cyan-500/50 p-2.5 rounded transition-all text-xs flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-chakra font-bold text-slate-200 group-hover:text-cyan-300">{proj.title}</div>
                      <div className="text-[10px] text-slate-400">{proj.category}</div>
                    </div>
                    <span className="text-cyan-400 font-mono-tech text-[10px]">VIEW →</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Close footer */}
            <div className="mt-5 text-right">
              <button
                onClick={() => setRecruiterPassOpen(false)}
                onMouseEnter={() => sound.playHover()}
                className="text-xs font-mono-tech text-slate-400 hover:text-white underline"
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
