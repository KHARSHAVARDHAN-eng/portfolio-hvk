import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { FileText, ChevronRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center bg-[#0d0818] arcade-purple-grid overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 w-full z-10 text-center">
        {/* Main Cabinet Hero Card */}
        <div className="arcade-card-dark p-6 sm:p-12 relative border-3 border-[#ff2a85] shadow-[8px_8px_0px_#ffcc00]">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ff2a85] text-white px-3 py-1 text-xs font-silkscreen font-bold mb-6 border-2 border-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDENT DEVELOPER PORTFOLIO</span>
          </div>

          {/* Name */}
          <h1 className="font-silkscreen text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#f8f6fc] tracking-wider uppercase mb-4">
            K. HARSHAVARDHAN
          </h1>

          {/* Subtitle */}
          <p className="font-silkscreen text-xs sm:text-base font-bold text-[#ffcc00] tracking-widest uppercase mb-6">
            AI/ML Engineer · Software Developer · Open Source Contributor
          </p>

          {/* Replayable Character / Introduction Box */}
          <div className="arcade-card-cream p-5 sm:p-6 rounded-none max-w-3xl mx-auto mb-8 text-left border-3 border-black shadow-[5px_5px_0px_#ff2a85]">
            <h2 className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] uppercase mb-2 font-bold">
              COMPUTER SCIENCE STUDENT & BUILDER
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-[#120a21] leading-relaxed">
              Computer Science & Engineering student at Alliance University (Class of 2027). Specializing in enterprise GraphRAG indexing pipelines, real-time computer vision anti-spoofing biometrics, and multi-modal neural analyzers. Most of what I engineer starts as a complex system challenge I want to solve from first principles.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-silkscreen text-xs">
            <a
              href="#projects"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-pink px-5 py-3 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-yellow px-5 py-3 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#120a21]" />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-5 py-3 flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-5 py-3 flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
