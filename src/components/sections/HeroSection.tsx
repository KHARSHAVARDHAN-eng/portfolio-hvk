import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { AiCoreCanvas } from '../canvas/AiCoreCanvas';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon } from '../ui/Icons';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden cyber-grid"
    >
      {/* Background Radial Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* System Status Indicator Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 w-fit mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono-tech text-xs tracking-wider text-slate-300">
                SYSTEM STATUS: <span className="text-emerald-400 font-semibold">{personalInfo.status}</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none"
            >
              K. <span className="gradient-text-cyan glow-cyan-text">Harshavardhan</span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-xl sm:text-2xl font-medium text-cyan-300/90 font-mono-tech flex flex-wrap items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 inline" />
              <span>{personalInfo.title}</span>
            </motion.p>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed"
            >
              {personalInfo.subtitle} Specialist in enterprise <span className="text-cyan-300 font-medium">GraphRAG indexing</span>, multi-modal <span className="text-purple-300 font-medium">deepfake anti-spoofing biometrics</span>, and high-performance backend pipelines.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                <span>View Case Studies</span>
                <ChevronRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" variant="glass">
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </MagneticButton>

              <MagneticButton href={personalInfo.socials.resume} target="_blank" rel="noopener noreferrer" variant="outline">
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </MagneticButton>

              <button
                onClick={onOpenTerminal}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-card text-slate-300 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors text-xs font-mono-tech"
                title="Launch Terminal Mode (~ key)"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>CLI Mode [~]</span>
              </button>
            </motion.div>

            {/* Micro Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl"
            >
              <div>
                <div className="text-2xl font-bold font-mono-tech text-cyan-400">94.8%</div>
                <div className="text-xs text-slate-400 mt-1">GraphRAG Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono-tech text-purple-400">sub-50ms</div>
                <div className="text-xs text-slate-400 mt-1">Anti-Spoofing Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono-tech text-emerald-400">4+</div>
                <div className="text-xs text-slate-400 mt-1">Core AI Projects</div>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Interactive Visual Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full aspect-square max-w-[500px] rounded-3xl glass-card border border-cyan-500/20 shadow-[0_0_50px_rgba(0,242,254,0.1)] overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="font-mono-tech text-[10px] text-slate-400 ml-2">AI_ENGINEERING_CORE_v2.4</span>
              </div>
              
              <AiCoreCanvas />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <a href="#about" className="flex flex-col items-center gap-1.5 group">
          <span className="font-mono-tech text-[11px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
            Explore System
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};
