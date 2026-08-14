import React, { useState, useEffect } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { sound } from '../../utils/sound';
import { 
  User, 
  Cpu, 
  GitBranch, 
  Layers, 
  GraduationCap, 
  Trophy, 
  Mail, 
  ChevronRight, 
  Keyboard 
} from 'lucide-react';
import type { ArcadeStage } from '../../types';

interface MenuItem {
  stage: ArcadeStage;
  num: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  colorClass: string;
}

export const MainMenu: React.FC = () => {
  const { setStage } = useArcade();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const menuItems: MenuItem[] = [
    {
      stage: 'ABOUT',
      num: '01',
      title: 'ABOUT PROFILE',
      subtitle: 'Player stats, Alliance University CSE 2027 & focus',
      icon: User,
      badge: 'PROFILE',
      colorClass: 'text-cyan-400 border-cyan-500/40 hover:bg-cyan-950/40'
    },
    {
      stage: 'PROJECTS',
      num: '02',
      title: 'MISSIONS / PROJECTS',
      subtitle: 'GraphRAG pipelines, Computer Vision & Audio AI with interactive graphs',
      icon: Cpu,
      badge: '4 MISSIONS',
      colorClass: 'text-amber-400 border-amber-500/40 hover:bg-amber-950/40'
    },
    {
      stage: 'OPEN_SOURCE',
      num: '03',
      title: 'QUEST LOG / OPEN SOURCE',
      subtitle: 'GitHub repositories, maintainer highlights & pull requests',
      icon: GitBranch,
      badge: 'GITHUB',
      colorClass: 'text-emerald-400 border-emerald-500/40 hover:bg-emerald-950/40'
    },
    {
      stage: 'SKILLS',
      num: '04',
      title: 'SKILL TREE / TECH MATRIX',
      subtitle: 'AI/ML, Knowledge Systems, Backend & Web technologies',
      icon: Layers,
      badge: 'TECH TREE',
      colorClass: 'text-violet-400 border-violet-500/40 hover:bg-violet-950/40'
    },
    {
      stage: 'EDUCATION',
      num: '05',
      title: 'PROGRESSION / EDUCATION',
      subtitle: 'B.Tech CSE at Alliance University (Class of 2027)',
      icon: GraduationCap,
      badge: 'TIMELINE',
      colorClass: 'text-blue-400 border-blue-500/40 hover:bg-blue-950/40'
    },
    {
      stage: 'ACHIEVEMENTS',
      num: '06',
      title: 'TROPHY ROOM',
      subtitle: 'National AI Hackathon awards & open-source achievements',
      icon: Trophy,
      badge: 'UNLOCKED',
      colorClass: 'text-yellow-400 border-yellow-500/40 hover:bg-yellow-950/40'
    },
    {
      stage: 'CONTACT',
      num: '07',
      title: 'GAME CLEAR / CONTACT',
      subtitle: 'Recruiter high-score screen, email & direct social links',
      icon: Mail,
      badge: 'CONNECT',
      colorClass: 'text-magenta-400 border-pink-500/40 hover:bg-pink-950/40'
    }
  ];

  // Keyboard navigation support (Arrow Up/Down, WASD, Numbers 1-7, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sound.playSelect();
        setStage(menuItems[selectedIndex].stage);
      } else {
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= menuItems.length) {
          e.preventDefault();
          sound.playSelect();
          setStage(menuItems[num - 1].stage);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleSelectStage = (idx: number, stage: ArcadeStage) => {
    sound.playSelect();
    setSelectedIndex(idx);
    setStage(stage);
  };

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-5xl mx-auto flex flex-col justify-center">
      {/* Menu Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded text-xs font-silkscreen text-amber-300 mb-2">
          [ SELECT MISSION STAGE ]
        </div>
        <h2 className="font-chakra text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wider glow-amber">
          MAIN MENU
        </h2>
        <p className="font-mono-tech text-xs sm:text-sm text-slate-400 mt-1">
          Use Keyboard (1-7 / WASD / Arrow Keys + Enter) or Click to Select Stage
        </p>
      </div>

      {/* Menu Options Grid */}
      <div className="grid grid-cols-1 gap-3 sm:gap-3.5 mb-8">
        {menuItems.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          const IconComponent = item.icon;

          return (
            <button
              key={item.stage}
              onClick={() => handleSelectStage(idx, item.stage)}
              onMouseEnter={() => {
                setSelectedIndex(idx);
                sound.playHover();
              }}
              className={`arcade-panel p-4 sm:p-5 rounded-lg border-2 text-left transition-all flex items-center justify-between group ${
                isSelected 
                  ? 'border-amber-400 bg-amber-950/40 shadow-xl scale-[1.01]' 
                  : 'border-slate-800 bg-[#0a0f1d] hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3.5 sm:gap-5">
                {/* Number Badge */}
                <div className={`font-silkscreen text-sm sm:text-lg px-2.5 py-1 rounded border ${
                  isSelected ? 'bg-amber-400 text-black border-amber-400 font-bold' : 'bg-slate-900 text-slate-400 border-slate-700'
                }`}>
                  {item.num}
                </div>

                {/* Icon */}
                <div className={`p-2.5 rounded border hidden sm:block ${
                  isSelected ? 'bg-amber-400/20 border-amber-400 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Title & Description */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-chakra text-base sm:text-xl font-bold tracking-wide ${
                      isSelected ? 'text-amber-300 glow-amber' : 'text-slate-200'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-mono-tech text-xs text-slate-400 hidden sm:block mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Side Indicator */}
              <div className="flex items-center gap-3">
                <span className="font-silkscreen text-[10px] sm:text-xs text-slate-500 hidden md:inline">
                  [{item.badge}]
                </span>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                }`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Keyboard Shortcut Hint Footer */}
      <div className="flex items-center justify-center gap-2 text-xs font-mono-tech text-slate-400 bg-slate-900/60 border border-slate-800 py-2.5 px-4 rounded-lg">
        <Keyboard className="w-4 h-4 text-cyan-400" />
        <span>KEYBOARD HINT: Press <b>1-7</b> for direct stage access or <b>ESC</b> for landing.</span>
      </div>
    </div>
  );
};
