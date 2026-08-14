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
}

export const MainMenu: React.FC = () => {
  const { setStage } = useArcade();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const menuItems: MenuItem[] = [
    {
      stage: 'ABOUT',
      num: '01',
      title: 'ABOUT PROFILE',
      subtitle: 'CSE student stats, Alliance University 2027 & specialization',
      icon: User,
      badge: 'PROFILE'
    },
    {
      stage: 'PROJECTS',
      num: '02',
      title: 'PROJECTS UNLOCKED.',
      subtitle: 'GraphRAG pipelines, Computer Vision & Audio AI with interactive graphs',
      icon: Cpu,
      badge: '4 MISSIONS'
    },
    {
      stage: 'SKILLS',
      num: '03',
      title: 'ITEMS COLLECTED.',
      subtitle: 'Python, Java, C++, SQL, Machine Learning, RAG, LangChain, React, FastAPI',
      icon: Layers,
      badge: 'INVENTORY'
    },
    {
      stage: 'OPEN_SOURCE',
      num: '04',
      title: 'QUEST LOG / OPEN SOURCE',
      subtitle: 'GitHub repositories, maintainer highlights & pull requests',
      icon: GitBranch,
      badge: 'GITHUB'
    },
    {
      stage: 'EDUCATION',
      num: '05',
      title: 'LEVEL PROGRESSION.',
      subtitle: 'B.Tech CSE at Alliance University (Class of 2027)',
      icon: GraduationCap,
      badge: 'TIMELINE'
    },
    {
      stage: 'ACHIEVEMENTS',
      num: '06',
      title: 'BOSSES DEFEATED.',
      subtitle: 'National AI Hackathon awards & open-source milestones',
      icon: Trophy,
      badge: 'UNLOCKED'
    },
    {
      stage: 'CONTACT',
      num: '07',
      title: 'CONTINUE? PRESS START.',
      subtitle: 'Recruiter high-score screen, email & direct social links',
      icon: Mail,
      badge: 'CONNECT'
    }
  ];

  // Keyboard navigation support
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
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-4xl mx-auto flex flex-col justify-center bg-[#0d0818] arcade-purple-grid">
      {/* Menu Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
          [ SELECT MISSION STAGE ]
        </div>
        <h2 className="font-silkscreen text-3xl sm:text-5xl font-extrabold text-[#f8f6fc] uppercase tracking-wider">
          MAIN MENU
        </h2>
        <p className="font-mono-tech text-xs text-[#a89cb9] mt-1">
          Use Keyboard (1-7 / WASD / Arrow Keys + Enter) or Click to Select Stage
        </p>
      </div>

      {/* Menu Options */}
      <div className="grid grid-cols-1 gap-3 mb-8">
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
              className={`p-4 text-left transition-all border-3 border-black flex items-center justify-between group rounded-none ${
                isSelected 
                  ? 'bg-[#fff5f8] text-[#120a21] shadow-[5px_5px_0px_#ff2a85] translate-x-1' 
                  : 'bg-[#1a0f30] text-[#f8f6fc] shadow-[4px_4px_0px_#000000] hover:border-[#ff2a85]'
              }`}
            >
              <div className="flex items-center gap-3.5 sm:gap-5">
                {/* Number Badge */}
                <div className={`font-silkscreen text-xs sm:text-sm px-2.5 py-1 border-2 border-black font-bold ${
                  isSelected ? 'bg-[#ff2a85] text-white' : 'bg-[#120a21] text-[#ffcc00]'
                }`}>
                  {item.num}
                </div>

                {/* Icon */}
                <div className={`p-2 border-2 border-black hidden sm:block ${
                  isSelected ? 'bg-[#ffcc00] text-[#120a21]' : 'bg-[#120a21] text-[#ff2a85]'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Title & Description */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-silkscreen text-sm sm:text-base font-bold uppercase ${
                      isSelected ? 'text-[#120a21]' : 'text-[#f8f6fc]'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`font-mono-tech text-xs hidden sm:block mt-0.5 ${
                    isSelected ? 'text-slate-700' : 'text-[#a89cb9]'
                  }`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Side Indicator */}
              <div className="flex items-center gap-3">
                <span className={`font-silkscreen text-[10px] hidden md:inline ${
                  isSelected ? 'text-[#ff2a85] font-bold' : 'text-[#a89cb9]'
                }`}>
                  [{item.badge}]
                </span>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  isSelected ? 'text-[#ff2a85] translate-x-1' : 'text-[#a89cb9]'
                }`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Keyboard Hint Footer */}
      <div className="flex items-center justify-center gap-2 text-xs font-silkscreen text-[#f8f6fc] bg-[#1a0f30] border-2 border-[#ff2a85] p-3 rounded-none shadow-[4px_4px_0px_#000000]">
        <Keyboard className="w-4 h-4 text-[#ffcc00]" />
        <span>KEYBOARD SHORTCUTS: Press <b>1-7</b> for direct stage jump or <b>ESC</b> for landing.</span>
      </div>
    </div>
  );
};
