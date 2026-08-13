import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, FileText, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy Active Section Detection
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass-nav py-2.5 px-5 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10' : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Identifier */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                K. HARSHAVARDHAN
              </span>
              <span className="font-mono-tech text-[10px] text-cyan-400/80 tracking-widest uppercase">
                AI/ML ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full glass-card px-4 py-1.5 border border-slate-800">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-colors ${
                    isActive ? 'text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/40"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors text-xs font-mono-tech"
              title="Toggle Terminal CLI (~)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI Mode [~]</span>
            </button>

            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800"
              title="Terminal CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 hover:border-cyan-500/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 rounded-2xl glass-modal border border-slate-800 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-mono-tech text-slate-300 hover:bg-slate-900 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
