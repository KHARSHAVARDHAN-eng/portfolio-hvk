import React from 'react';
import { milestones } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 px-4 max-w-5xl mx-auto bg-[#140824] arcade-purple-bg">
      {/* Stage Header */}
      <div className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] font-bold uppercase tracking-wider mb-2">
        STAGE 05 — BOSSES DEFEATED
      </div>

      <h2 className="font-silkscreen text-2xl sm:text-4xl font-extrabold text-[#ffffff] uppercase tracking-wider mb-8">
        BOSSES DEFEATED.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((m) => (
          <div
            key={m.id}
            onMouseEnter={() => sound.playTrophy()}
            className="arcade-card-cream p-6 border-3 border-black shadow-[6px_6px_0px_#ff2a85] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-[#ffcc00] border-2 border-black text-[#120a21]">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="bg-[#ff2a85] text-white font-silkscreen font-bold text-[10px] px-2.5 py-0.5 border border-black">
                  {m.badgeText}
                </span>
              </div>

              <h3 className="font-silkscreen text-base font-bold text-[#120a21] mb-1">
                {m.title}
              </h3>
              <p className="font-mono-tech text-xs text-[#ff2a85] mb-2 font-bold">
                {m.organization}
              </p>
              <p className="font-silkscreen text-[10px] text-slate-600 mb-4">
                {m.period} • {m.location}
              </p>

              <p className="font-mono-tech text-xs text-slate-800 mb-5 leading-relaxed">
                {m.description}
              </p>
            </div>

            <div className="border-t-2 border-black pt-4">
              <span className="font-silkscreen text-[10px] text-[#ff2a85] block mb-2 flex items-center gap-1 font-bold">
                <Sparkles className="w-3 h-3" /> DEFEATED REWARDS:
              </span>
              <ul className="space-y-1.5">
                {m.highlights.map((h, i) => (
                  <li key={i} className="font-mono-tech text-[11px] text-slate-800 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a85] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
