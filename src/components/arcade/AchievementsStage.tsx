import React from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { milestones } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Trophy, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export const AchievementsStage: React.FC = () => {
  const { setStage } = useArcade();

  const handleTrophyHover = () => {
    sound.playTrophy();
  };

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-yellow-500/30">
        <div>
          <div className="inline-block bg-yellow-950/80 border border-yellow-500/40 px-3 py-1 rounded text-xs font-silkscreen text-yellow-300 mb-2">
            [ STAGE 06: TROPHY ROOM & MILESTONES ]
          </div>
          <h2 className="font-chakra text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-amber">
            ACHIEVEMENTS UNLOCKED
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

      {/* Trophy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((m) => (
          <div
            key={m.id}
            onMouseEnter={handleTrophyHover}
            className="arcade-panel arcade-panel-amber p-6 rounded-xl border-2 border-yellow-500/40 flex flex-col justify-between group hover:scale-[1.02] transition-all relative overflow-hidden"
          >
            {/* Top Shine Flare */}
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl pointer-events-none"></div>

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-500/20 border border-yellow-400/50 rounded-lg text-yellow-400">
                  <Trophy className="w-6 h-6 animate-pulse" />
                </div>
                <span className="bg-yellow-400 text-black font-silkscreen font-bold text-[10px] px-2.5 py-0.5 rounded">
                  {m.badgeText}
                </span>
              </div>

              <h3 className="font-chakra text-xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                {m.title}
              </h3>
              <p className="font-mono-tech text-xs text-amber-400 mb-2 font-bold">
                {m.organization}
              </p>
              <p className="font-silkscreen text-[10px] text-slate-500 mb-4">
                {m.period} • {m.location}
              </p>

              <p className="font-mono-tech text-xs text-slate-300 mb-5 leading-relaxed">
                {m.description}
              </p>
            </div>

            <div className="border-t border-yellow-500/20 pt-4">
              <span className="font-silkscreen text-[10px] text-yellow-400/90 block mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> UNLOCKED REWARDS:
              </span>
              <ul className="space-y-1.5">
                {m.highlights.map((h, i) => (
                  <li key={i} className="font-mono-tech text-[11px] text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
