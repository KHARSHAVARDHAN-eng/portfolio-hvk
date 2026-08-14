import React, { useState } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { skillCategories } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Layers, BrainCircuit, Network, Code2, Server, Layout, ArrowLeft, Sparkles, FolderGit2 } from 'lucide-react';
import type { Skill } from '../../types';

export const SkillsStage: React.FC = () => {
  const { setStage } = useArcade();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categoryIcons: Record<string, React.ElementType> = {
    BrainCircuit,
    Network,
    Code2,
    Server,
    Layout
  };

  const activeCategory = skillCategories[activeCategoryIndex] || skillCategories[0];

  const handleSelectSkill = (sk: Skill) => {
    sound.playHover();
    setSelectedSkill(sk);
  };

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-violet-500/30">
        <div>
          <div className="inline-block bg-violet-950/80 border border-violet-500/40 px-3 py-1 rounded text-xs font-silkscreen text-violet-300 mb-2">
            [ STAGE 04: INVENTORY SYSTEM ]
          </div>
          <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-violet">
            ITEMS COLLECTED.
          </h2>
        </div>
        <button
          onClick={() => setStage('MENU')}
          onMouseEnter={() => sound.playHover()}
          className="arcade-btn arcade-btn-outline px-3.5 py-1.5 text-xs flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO MENU</span>
        </button>
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
              className={`flex-shrink-0 px-4 py-3 rounded-lg border-2 text-xs font-silkscreen font-bold transition-all flex items-center gap-2.5 ${
                isSelected 
                  ? 'border-violet-400 bg-violet-950/60 text-white shadow-lg scale-105' 
                  : 'border-slate-800 bg-[#0a0f1d] text-slate-400 hover:border-violet-500/40 hover:text-slate-200'
              }`}
            >
              <IconComp className={`w-4 h-4 ${isSelected ? 'text-violet-400' : 'text-slate-500'}`} />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Category Grid & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="arcade-panel p-6 rounded-xl border-2 border-violet-500/40">
            <h3 className="font-silkscreen text-base sm:text-lg font-bold text-violet-300 mb-2 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              {activeCategory.title}
            </h3>
            <p className="font-mono-tech text-xs text-slate-300 mb-6">
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
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      isSelected 
                        ? 'border-violet-400 bg-violet-950/80 shadow-md scale-[1.02]' 
                        : 'border-slate-800 bg-slate-900/80 hover:border-violet-500/40 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-chakra font-bold text-sm text-white">
                        {sk.name}
                      </span>
                      {sk.categoryTag && (
                        <span className="font-silkscreen text-[9px] text-violet-400 px-1.5 py-0.5 rounded bg-violet-950/60 border border-violet-500/30">
                          {sk.categoryTag}
                        </span>
                      )}
                    </div>
                    {sk.highlight && (
                      <p className="font-mono-tech text-xs text-slate-400 line-clamp-2">
                        {sk.highlight}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Inspector Card */}
        <div className="lg:col-span-1">
          <div className="arcade-panel p-6 rounded-xl border-2 border-violet-500/40 sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-violet-500/20 mb-4">
              <span className="font-silkscreen text-xs text-violet-400">
                INVENTORY INSPECTOR
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
            </div>

            {selectedSkill ? (
              <div className="space-y-4">
                <div>
                  <span className="font-silkscreen text-[10px] text-slate-500 block mb-1">
                    ITEM NAME:
                  </span>
                  <h4 className="font-silkscreen text-lg font-bold text-white glow-violet">
                    {selectedSkill.name}
                  </h4>
                  {selectedSkill.categoryTag && (
                    <span className="font-mono-tech text-xs text-violet-400">
                      Tag: {selectedSkill.categoryTag}
                    </span>
                  )}
                </div>

                {selectedSkill.highlight && (
                  <div>
                    <span className="font-silkscreen text-[10px] text-slate-400 block mb-1">
                      TECHNICAL ATTRIBUTE:
                    </span>
                    <p className="font-mono-tech text-xs text-slate-200 bg-slate-900/90 p-3 rounded border border-slate-800 leading-relaxed">
                      {selectedSkill.highlight}
                    </p>
                  </div>
                )}

                {selectedSkill.projectsUsedIn && selectedSkill.projectsUsedIn.length > 0 && (
                  <div>
                    <span className="font-silkscreen text-[10px] text-amber-400 block mb-2 flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      EQUIPPED IN MISSIONS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.projectsUsedIn.map((pName, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            sound.playSelect();
                            setStage('PROJECTS');
                          }}
                          className="bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 rounded text-xs font-mono-tech text-amber-300 hover:border-amber-400"
                        >
                          {pName} →
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3 animate-pulse" />
                <p className="font-mono-tech text-xs text-slate-400">
                  Select any item to view technical attributes and equipped mission builds.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
