import React, { useEffect, useRef } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Play, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const LandingScreen: React.FC = () => {
  const { setStage, toggleRecruiterPass } = useArcade();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background texture / grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const stars: Array<{ x: number; y: number; size: number; speed: number; alpha: number }> = [];
    const numStars = Math.floor((width * height) / 3500);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.6 + 0.2,
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
        ctx.fillStyle = `rgba(255, 42, 133, ${star.alpha * 0.6})`;
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
    <div className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 px-4 arcade-purple-grid overflow-hidden bg-[#0d0818]">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Main Cabinet Card */}
        <div className="arcade-card-dark p-6 sm:p-12 relative border-3 border-[#ff2a85] shadow-[8px_8px_0px_#ffcc00]">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 bg-[#ff2a85] text-white px-3 py-1 rounded-none text-xs font-silkscreen font-bold mb-6 border-2 border-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCADE PORTFOLIO</span>
          </div>

          {/* Student Name */}
          <h1 className="font-silkscreen text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#f8f6fc] tracking-wider uppercase mb-4 text-shadow font-bold">
            K. HARSHAVARDHAN
          </h1>

          {/* Subtitle */}
          <p className="font-silkscreen text-xs sm:text-base font-bold text-[#ffcc00] tracking-widest uppercase mb-6">
            Computer Science & Engineering Student · AI/ML · Software Development · Open Source
          </p>

          {/* Replayable Character Section */}
          <div className="arcade-card-cream p-5 sm:p-6 rounded-none max-w-2xl mx-auto mb-8 text-left border-3 border-black shadow-[4px_4px_0px_#ff2a85]">
            <h2 className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] uppercase mb-2 font-bold">
              REPLAYABLE CHARACTER, OPEN-WORLD BUILD.
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-[#120a21] leading-relaxed">
              Computer Science & Engineering student at Alliance University (Class of 2027). Building enterprise GraphRAG pipelines, real-time computer vision anti-spoofing biometrics, and multi-modal neural analyzers. Most of what I build starts as a hard engineering challenge I want to solve from first principles.
            </p>
          </div>

          {/* Primary Action Button ▶ PRESS START */}
          <div className="mb-10">
            <button
              onClick={handleStart}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-pink px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-lg flex items-center justify-center gap-3 mx-auto"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>▶ PRESS START</span>
            </button>
            <div className="text-[10px] font-silkscreen text-[#ffcc00] mt-3 animate-blink">
              ▼ CLICK OR PRESS ENTER TO CHOOSE STAGE ▼
            </div>
          </div>

          {/* Secondary Action Buttons */}
          <div className="pt-6 border-t-2 border-[#ff2a85]/40 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-silkscreen text-xs">
            <button
              onClick={toggleRecruiterPass}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-yellow px-4 py-2 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>RECRUITER PASS</span>
            </button>

            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME.PDF</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB@KHARSHAVARDHAN-ENG</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN/IN/K-HARSHAVARDHAN</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
