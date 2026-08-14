import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Play, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center bg-[#140824] arcade-purple-grid overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 w-full text-left">
        {/* Level Tag (Matching LV.04 · CS · IIIT-H in Screenshot) */}
        <div className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] font-bold uppercase tracking-wider mb-2">
          LV.04 · CSE · ALLIANCE UNIV
        </div>

        {/* Main Name Header (Matching KIRA SAHA Giant Pixel Font) */}
        <h1 className="font-silkscreen text-4xl sm:text-7xl md:text-8xl font-extrabold text-[#ffffff] tracking-wider uppercase mb-6 leading-none">
          K. HARSHAVARDHAN
        </h1>

        {/* Subtitle Bio (Matching Reference Text Layout) */}
        <p className="font-mono-tech text-xs sm:text-base text-[#cbbad9] max-w-2xl leading-relaxed mb-8">
          {personalInfo.title}. {personalInfo.subtitle} Currently engineering production GraphRAG indexing pipelines and anti-spoofing biometrics.
        </p>

        {/* Primary Action Button (Matching [▶ PRESS START] Pink Button in Screenshot) */}
        <div className="mb-10">
          <a
            href="#projects"
            onMouseEnter={() => sound.playHover()}
            className="arcade-btn arcade-btn-pink px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm inline-flex items-center gap-3"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>▶ PRESS START</span>
          </a>
        </div>

        {/* Stats Counter Boxes (Matching COINS x 24 and LIVES x 03 Cards in Screenshot) */}
        <div className="flex flex-wrap gap-4 pt-2">
          {/* Projects Stats Card */}
          <div className="arcade-card-cream p-4 w-44 sm:w-48 border-3 border-black shadow-[4px_4px_0px_#ff2a85]">
            <div className="font-silkscreen text-[10px] text-[#ff2a85] font-bold uppercase tracking-wider mb-1">
              PROJECTS
            </div>
            <div className="font-silkscreen text-lg sm:text-xl font-extrabold text-[#120a21]">
              x 04
            </div>
          </div>

          {/* Stars Stats Card */}
          <div className="arcade-card-cream p-4 w-44 sm:w-48 border-3 border-black shadow-[4px_4px_0px_#ffcc00]">
            <div className="font-silkscreen text-[10px] text-[#ff2a85] font-bold uppercase tracking-wider mb-1">
              STARS
            </div>
            <div className="font-silkscreen text-lg sm:text-xl font-extrabold text-[#120a21]">
              x 235+
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-3 text-xs"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-3 text-xs"
            >
              <GithubIcon className="w-4 h-4 mr-2" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-3 text-xs"
            >
              <LinkedinIcon className="w-4 h-4 mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
