import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Layers, BrainCircuit, Code2, Layout, Sparkles, FolderGit2 } from 'lucide-react';
import type { Skill } from '../../types';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categoryIcons: Record<string, React.ElementType> = {
    BrainCircuit,
    Code2,
    Layout
  };

  const activeCategory = skillCategories[activeCategoryIndex] || skillCategories[0];

  const handleSelectSkill = (sk: Skill) => {
    sound.playHover();
    setSelectedSkill(sk);
  };

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto bg-[#140824] arcade-purple-grid">
      {/* Section Header */}
      <div className="mb-8 pb-4 border-b-3 border-[#ff2a85]">
        <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
          [ TECH MATRIX & INVENTORY ]
        </div>
        <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-[#ffffff] uppercase tracking-wider">
          TECHNICAL SKILLS
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
        {skillCategories.map((cat, idx) => {
          const isSelected = activeCategoryIndex === idx;
          const IconComp = categoryIcons[cat.iconName] || Layers;

          return (
            <button
              key={cat.title}
              onClick={() => {
                sound.playSelect();
                setActiveCategoryIndex(idx);
                setSelectedSkill(null);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`flex-shrink-0 px-4 py-3 border-3 border-black text-xs font-silkscreen font-bold transition-all flex items-center gap-2.5 ${
                isSelected 
                  ? 'bg-[#fff5f8] text-[#120a21] shadow-[4px_4px_0px_#ff2a85]' 
                  : 'bg-[#261442] text-[#ffffff] hover:border-[#ff2a85]'
              }`}
            >
              <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#ff2a85]' : 'text-[#ffcc00]'}`} />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="arcade-card-cream p-6 border-3 border-black shadow-[6px_6px_0px_#ff2a85]">
            <h3 className="font-silkscreen text-base sm:text-lg font-bold text-[#120a21] mb-2 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff2a85]" />
              {activeCategory.title}
            </h3>
            <p className="font-mono-tech text-xs text-slate-700 mb-6">
              {activeCategory.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCategory.skills.map((sk, idx) => {
                const isSelected = selectedSkill?.name === sk.name;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectSkill(sk)}
                    onMouseEnter={() => handleSelectSkill(sk)}
                    className={`p-4 border-2 border-black text-left transition-all ${
                      isSelected 
                        ? 'bg-[#ff2a85] text-white shadow-[4px_4px_0px_#ffcc00]' 
                        : 'bg-white text-[#120a21] hover:border-[#ff2a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-silkscreen font-bold text-xs">
                        {sk.name}
                      </span>
                      {sk.categoryTag && (
                        <span className={`font-silkscreen text-[9px] px-1.5 py-0.5 border border-black ${
                          isSelected ? 'bg-[#ffcc00] text-black font-bold' : 'bg-[#120a21] text-white'
                        }`}>
                          {sk.categoryTag}
                        </span>
                      )}
                    </div>
                    {sk.highlight && (
                      <p className={`font-mono-tech text-xs line-clamp-2 ${
                        isSelected ? 'text-slate-100' : 'text-slate-700'
                      }`}>
                        {sk.highlight}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skill Inspector */}
        <div className="lg:col-span-1">
          <div className="arcade-card-dark p-6 border-3 border-[#ff2a85] shadow-[6px_6px_0px_#ffcc00] sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#ff2a85] mb-4">
              <span className="font-silkscreen text-xs text-[#ffcc00]">
                INVENTORY INSPECTOR
              </span>
              <span className="w-2 h-2 bg-[#ffcc00] animate-ping"></span>
            </div>

            {selectedSkill ? (
              <div className="space-y-4">
                <div>
                  <span className="font-silkscreen text-[10px] text-[#cbbad9] block mb-1">
                    ITEM NAME:
                  </span>
                  <h4 className="font-silkscreen text-lg font-bold text-white">
                    {selectedSkill.name}
                  </h4>
                  {selectedSkill.categoryTag && (
                    <span className="font-mono-tech text-xs text-[#ff2a85] font-bold">
                      Tag: {selectedSkill.categoryTag}
                    </span>
                  )}
                </div>

                {selectedSkill.highlight && (
                  <div>
                    <span className="font-silkscreen text-[10px] text-[#cbbad9] block mb-1">
                      TECHNICAL ATTRIBUTE:
                    </span>
                    <p className="font-mono-tech text-xs text-slate-200 bg-[#120a21] p-3 border-2 border-black leading-relaxed">
                      {selectedSkill.highlight}
                    </p>
                  </div>
                )}

                {selectedSkill.projectsUsedIn && selectedSkill.projectsUsedIn.length > 0 && (
                  <div>
                    <span className="font-silkscreen text-[10px] text-[#ffcc00] block mb-2 flex items-center gap-1.5 font-bold">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      EQUIPPED IN PROJECTS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.projectsUsedIn.map((pName, idx) => (
                        <a
                          key={idx}
                          href="#projects"
                          onClick={() => sound.playSelect()}
                          className="bg-[#ff2a85] border border-black px-2.5 py-1 text-xs font-silkscreen text-white hover:bg-[#ffcc00] hover:text-black"
                        >
                          {pName} →
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Layers className="w-10 h-10 text-[#ff2a85] mx-auto mb-3 animate-pulse" />
                <p className="font-mono-tech text-xs text-[#cbbad9]">
                  Select any item on the left to inspect detailed attributes and equipped projects.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
