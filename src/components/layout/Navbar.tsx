import React, { useState, useEffect } from 'react';
import { personalInfo, projects } from '../../data/portfolioData';
import { 
  Tv, 
  Volume2, 
  VolumeX, 
  Zap, 
  FileText, 
  Mail, 
  FolderGit2, 
  X, 
  Menu, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { sound } from '../../utils/sound';

interface NavbarProps {
  crtEnabled: boolean;
  onToggleCrt: () => void;
  soundMuted: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  crtEnabled,
  onToggleCrt,
  soundMuted,
  onToggleSound
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [recruiterPassOpen, setRecruiterPassOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Open Source', href: '#open-source' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleCopyEmail = () => {
    sound.playHover();
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[#120a21]/95 border-b-3 border-[#ff2a85] shadow-lg py-2.5' : 'bg-[#0d0818]/80 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 group font-silkscreen text-xs sm:text-sm text-[#ffcc00] font-bold tracking-wider"
          >
            <span className="w-2.5 h-2.5 bg-[#ff2a85] inline-block animate-pulse"></span>
            <span>HVK.DEV</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-silkscreen text-[11px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => sound.playHover()}
                className="px-3 py-1 text-[#f8f6fc] hover:text-[#ffcc00] hover:bg-[#1e1333] transition-colors rounded-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls & Recruiter Fast Pass */}
          <div className="flex items-center gap-2">
            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              onMouseEnter={() => sound.playHover()}
              className={`p-1.5 px-2 rounded-none border-2 text-[10px] font-silkscreen flex items-center gap-1 transition-all ${
                soundMuted 
                  ? 'border-slate-700 bg-[#170e28] text-slate-500 hover:border-slate-500' 
                  : 'border-[#ffcc00] bg-[#1e1333] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#120a21]'
              }`}
              title={soundMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            >
              {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden xl:inline">{soundMuted ? 'SFX:OFF' : 'SFX:ON'}</span>
            </button>

            {/* CRT Toggle */}
            <button
              onClick={onToggleCrt}
              onMouseEnter={() => sound.playHover()}
              className={`p-1.5 px-2 rounded-none border-2 text-[10px] font-silkscreen flex items-center gap-1 transition-all ${
                crtEnabled 
                  ? 'border-[#ff2a85] bg-[#1e1333] text-[#ff2a85] hover:bg-[#ff2a85] hover:text-white' 
                  : 'border-slate-700 bg-[#170e28] text-slate-500 hover:border-slate-500'
              }`}
              title="Toggle CRT Scanlines Overlay"
            >
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{crtEnabled ? 'CRT:ON' : 'CRT:OFF'}</span>
            </button>

            {/* Recruiter Fast Pass Button */}
            <button
              onClick={() => {
                sound.playHover();
                setRecruiterPassOpen(true);
              }}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-yellow px-2.5 sm:px-3 py-1 text-[10px] flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-[#120a21]" />
              <span>RECRUITER PASS</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 bg-[#1e1333] border-2 border-[#ff2a85] text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#120a21] border-b-3 border-[#ff2a85] px-4 py-3 font-silkscreen text-xs space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#f8f6fc] hover:text-[#ffcc00] border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Recruiter Fast-Pass Quick Access Drawer */}
      {recruiterPassOpen && (
        <div className="fixed inset-0 z-50 bg-[#090511]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="arcade-card-cream w-full max-w-2xl p-6 relative border-3 border-[#000000] shadow-[6px_6px_0px_#ff2a85]">
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
              Instant 1-click access for recruiters, hiring managers, and technical interviewers. Skip directly to key candidate deliverables.
            </p>

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

            <div className="border-t-2 border-[#000000] pt-4">
              <h4 className="font-silkscreen text-xs text-[#120a21] uppercase mb-3 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-[#ff2a85]" />
                FEATURED PROJECTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projects.map((proj) => (
                  <a
                    key={proj.id}
                    href="#projects"
                    onClick={() => setRecruiterPassOpen(false)}
                    onMouseEnter={() => sound.playHover()}
                    className="text-left bg-white hover:bg-[#ff2a85] hover:text-white border-2 border-[#000000] p-2.5 transition-all text-xs flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-chakra font-bold text-[#120a21] group-hover:text-white">{proj.title}</div>
                      <div className="text-[10px] font-mono-tech text-slate-600 group-hover:text-slate-100">{proj.category}</div>
                    </div>
                    <span className="font-silkscreen text-[10px]">VIEW →</span>
                  </a>
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
