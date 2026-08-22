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
      {/* Top Header HUD Bar - Matching Screenshot (HI-SCORE 094800 | 1P · K. HARSHAVARDHAN) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[#140824]/95 border-b-3 border-[#ff2a85] shadow-lg py-2.5' : 'bg-[#140824]/85 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: HI-SCORE 094800 (Pink Pixel Font) */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onMouseEnter={() => sound.playHover()}
              className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] font-bold tracking-wider hover:opacity-90 transition-opacity"
            >
              HI-SCORE 094800
            </a>

            <span className="text-[#cbbad9] hidden sm:inline">|</span>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-1 font-silkscreen text-[11px]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => sound.playHover()}
                  className="px-2.5 py-1 text-[#ffffff] hover:text-[#ffcc00] hover:bg-[#281845] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: 1P · K. HARSHAVARDHAN + Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-silkscreen text-xs text-[#cbbad9] font-bold hidden md:inline">
              1P · K. HARSHAVARDHAN
            </span>

            <span className="text-[#cbbad9] hidden md:inline">|</span>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              onMouseEnter={() => sound.playHover()}
              className={`p-1.5 px-2 text-[10px] font-silkscreen flex items-center gap-1 border-2 transition-all ${
                soundMuted 
                  ? 'border-slate-700 bg-[#11081f] text-slate-500 hover:border-slate-500' 
                  : 'border-[#ffcc00] bg-[#281845] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#120a21]'
              }`}
              title={soundMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            >
              {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{soundMuted ? 'SFX:OFF' : 'SFX:ON'}</span>
            </button>

            {/* CRT Toggle */}
            <button
              onClick={onToggleCrt}
              onMouseEnter={() => sound.playHover()}
              className={`p-1.5 px-2 text-[10px] font-silkscreen flex items-center gap-1 border-2 transition-all ${
                crtEnabled 
                  ? 'border-[#ff2a85] bg-[#281845] text-[#ff2a85] hover:bg-[#ff2a85] hover:text-white' 
                  : 'border-slate-700 bg-[#11081f] text-slate-500 hover:border-slate-500'
              }`}
              title="Toggle CRT Scanlines Overlay"
            >
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{crtEnabled ? 'CRT:ON' : 'CRT:OFF'}</span>
            </button>

            {/* Recruiter Pass Trigger */}
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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="xl:hidden p-1.5 bg-[#281845] border-2 border-[#ff2a85] text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#180e28] border-b-3 border-[#ff2a85] px-4 py-3 font-silkscreen text-xs space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#ffffff] hover:text-[#ffcc00] border-b border-purple-900/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Recruiter Fast-Pass Drawer */}
      {recruiterPassOpen && (
        <div className="fixed inset-0 z-50 bg-[#11081f]/90 backdrop-blur-md flex items-center justify-center p-4">
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
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <ExternalLink className="w-3.5 h-3.5" />}
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
