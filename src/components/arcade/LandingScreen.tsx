import React, { useEffect, useRef } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Play, FileText, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const LandingScreen: React.FC = () => {
  const { setStage, toggleRecruiterPass } = useArcade();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Dynamic pixel starfield / digital grid canvas animation
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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render pixel starfield
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

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleStart = () => {
    sound.playStart();
    setStage('MENU');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-16 pb-12 px-4 arcade-grid overflow-hidden">
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />

      {/* Decorative Arcade Corner Flares */}
      <div className="absolute top-20 left-6 text-[10px] font-silkscreen text-cyan-500/40 hidden sm:block">
        [SYS_STATUS: ONLINE]<br />[MODE: ARCADE_V2.0]
      </div>
      <div className="absolute top-20 right-6 text-[10px] font-silkscreen text-amber-500/40 hidden sm:block text-right">
        [CREDITS: ∞]<br />[STAGE: 01_READY]
      </div>

      {/* Central Arcade Cabinet Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <div className="arcade-panel p-6 sm:p-12 rounded-xl border-2 border-cyan-500/40 shadow-2xl relative backdrop-blur-md">
          {/* Top Arcade Tag */}
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/40 px-3 py-1 rounded-full text-xs font-silkscreen text-cyan-300 mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE CSE PORTFOLIO</span>
          </div>

          {/* Student Name Header */}
          <h1 className="font-chakra text-3xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wider uppercase mb-3 glow-cyan">
            K. HARSHAVARDHAN
          </h1>

          {/* Specialization Subtitle */}
          <p className="font-chakra text-base sm:text-2xl font-bold text-amber-400 tracking-widest uppercase mb-4 glow-amber">
            Computer Science & Engineering
          </p>

          <p className="font-mono-tech text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            AI/ML • Software Development • Open Source
          </p>

          {/* Primary Action Button */}
          <div className="mb-10">
            <button
              onClick={handleStart}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-amber px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl flex items-center justify-center gap-3 mx-auto shadow-2xl animate-bounce"
            >
              <Play className="w-6 h-6 fill-black" />
              <span>PRESS START / ENTER</span>
            </button>
            <div className="text-[11px] font-silkscreen text-amber-400/80 mt-3 animate-blink">
              ▼ CLICK OR PRESS ENTER TO START MISSION ▼
            </div>
          </div>

          {/* Secondary Action Shortcuts */}
          <div className="pt-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={toggleRecruiterPass}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 text-xs flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>RECRUITER FAST PASS</span>
            </button>

            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 text-xs flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>RESUME (PDF)</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 text-xs flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GITHUB</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-outline px-4 py-2 text-xs flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
