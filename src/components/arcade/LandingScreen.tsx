import React, { useEffect, useRef } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Play, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const LandingScreen: React.FC = () => {
  const { setStage, toggleRecruiterPass } = useArcade();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Pixel starfield background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const stars: Array<{ x: number; y: number; size: number; speed: number; alpha: number }> = [];
    const numStars = Math.floor((width * height) / 3000);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.8 + 0.2,
        alpha: Math.random()
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(0, 240, 255, ${star.alpha * 0.7})`;
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), Math.floor(star.size), Math.floor(star.size));
      });
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleStart = () => {
    sound.playStart();
    setStage('MENU');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 px-4 arcade-grid overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <div className="arcade-panel p-6 sm:p-12 rounded-xl border-2 border-cyan-500/40 shadow-2xl relative backdrop-blur-md">
          {/* Top Arcade Tag */}
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/40 px-3 py-1 rounded-full text-xs font-silkscreen text-cyan-300 mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCADE CABINET PORTFOLIO</span>
          </div>

          {/* Title Header */}
          <h1 className="font-silkscreen text-3xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wider uppercase mb-4 glow-cyan">
            K. HARSHAVARDHAN
          </h1>

          {/* Subtitle Tagline */}
          <p className="font-chakra text-base sm:text-2xl font-bold text-amber-400 tracking-widest uppercase mb-6 glow-amber">
            AI/ML Engineer · Software Developer · Open Source
          </p>

          {/* Replayable Character Open World Section */}
          <div className="bg-slate-950/90 border border-cyan-500/30 p-4 sm:p-6 rounded-lg max-w-2xl mx-auto mb-8 text-left">
            <h2 className="font-silkscreen text-xs sm:text-sm text-cyan-300 uppercase mb-2">
              REPLAYABLE CHARACTER, OPEN-WORLD BUILD.
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-slate-300 leading-relaxed">
              Computer Science & Engineering student at Alliance University (Class of 2027). Building production-grade GraphRAG indexing pipelines, real-time computer vision anti-spoofing biometrics, and multi-modal neural analyzers. Most of what I engineer starts as a hard system question I want solved from first principles.
            </p>
          </div>

          {/* Primary Action Button - Matching ▶ PRESS START */}
          <div className="mb-10">
            <button
              onClick={handleStart}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-amber px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl flex items-center justify-center gap-3 mx-auto shadow-2xl animate-bounce"
            >
              <Play className="w-6 h-6 fill-black" />
              <span>▶ PRESS START</span>
            </button>
            <div className="text-[11px] font-silkscreen text-amber-400/80 mt-3 animate-blink">
              ▼ CLICK OR PRESS ENTER TO CHOOSE MISSION STAGE ▼
            </div>
          </div>

          {/* Secondary Action Shortcuts */}
          <div className="pt-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-silkscreen text-xs">
            <button
              onClick={toggleRecruiterPass}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>RECRUITER PASS</span>
            </button>

            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>RESUME.PDF</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GITHUB@KHARSHAVARDHAN-ENG</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LINKEDIN/IN/K-HARSHAVARDHAN</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
