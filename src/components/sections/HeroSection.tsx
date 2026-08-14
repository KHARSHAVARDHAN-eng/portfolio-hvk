import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { ArrowDownRight, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-28 pb-16 flex flex-col justify-center bg-[#140824] arcade-purple-bg overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 w-full text-left">
        {/* Level & Role Tag */}
        <div className="inline-flex items-center gap-2 bg-[#ff2a85] text-white px-3 py-1 text-xs font-silkscreen font-bold mb-4 border-2 border-black">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CSE STUDENT · ALLIANCE UNIVERSITY 2027</span>
        </div>

        {/* Name Title */}
        <h1 className="font-silkscreen text-4xl sm:text-7xl md:text-8xl font-extrabold text-[#ffffff] tracking-wider uppercase mb-4 leading-none">
          K. HARSHAVARDHAN
        </h1>

        {/* Professional Subtitle */}
        <p className="font-silkscreen text-xs sm:text-base font-bold text-[#ffcc00] tracking-widest uppercase mb-6">
          AI/ML Engineer · Software Developer · Open Source Contributor
        </p>

        {/* Intro Statement Card */}
        <div className="arcade-card-cream p-5 sm:p-6 rounded-none max-w-3xl mb-8 border-3 border-black shadow-[5px_5px_0px_#ff2a85]">
          <h2 className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] uppercase mb-2 font-bold flex items-center gap-2">
            <ArrowDownRight className="w-4 h-4" />
            COMPUTER SCIENCE STUDENT & BUILDER
          </h2>
          <p className="font-mono-tech text-xs sm:text-sm text-[#120a21] leading-relaxed">
            Computer Science & Engineering student at Alliance University (Class of 2027). Specializing in enterprise GraphRAG indexing pipelines, real-time computer vision anti-spoofing biometrics, and multi-modal neural analyzers. Most of what I engineer starts as a complex system challenge I want to solve from first principles.
          </p>
        </div>

        {/* Action Buttons using Design System Token Styling */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-silkscreen text-xs">
          <a
            href="#projects"
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-pink px-6 py-3.5 flex items-center gap-2"
          >
            <span>View Projects</span>
            <span className="font-bold">→</span>
          </a>

          <a
            href={personalInfo.socials.resume}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-yellow px-6 py-3.5 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#120a21]" />
            <span>Download Resume</span>
          </a>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-outline px-5 py-3.5 flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-outline px-5 py-3.5 flex items-center gap-2"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
