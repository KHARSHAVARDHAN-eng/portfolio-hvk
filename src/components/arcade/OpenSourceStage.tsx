import React from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { openSourceContributions } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { GitBranch, Star, ExternalLink, ArrowLeft, Terminal, ShieldCheck } from 'lucide-react';

export const OpenSourceStage: React.FC = () => {
  const { setStage } = useArcade();

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-500/30">
        <div>
          <div className="inline-block bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded text-xs font-silkscreen text-emerald-300 mb-2">
            [ STAGE 03: QUEST LOG & CONTRIBUTIONS ]
          </div>
          <h2 className="font-chakra text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-emerald">
            OPEN SOURCE CONTRIBUTIONS
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

      <p className="font-mono-tech text-xs sm:text-sm text-slate-300 mb-8 max-w-3xl leading-relaxed">
        Building transparent, open-source AI tooling, retrieval benchmarking modules, and computer vision utilities.
      </p>

      {/* Quest Logs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {openSourceContributions.map((contrib, idx) => (
          <div
            key={idx}
            className="arcade-panel arcade-panel-emerald p-6 rounded-xl border-2 border-emerald-500/40 flex flex-col justify-between group hover:border-emerald-400 transition-all"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-400 text-black font-silkscreen font-bold text-[10px] px-2 py-0.5 rounded">
                  LOG 0{idx + 1}
                </span>
                {contrib.stars && (
                  <span className="flex items-center gap-1 font-mono-tech text-xs text-amber-400 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {contrib.stars}
                  </span>
                )}
              </div>

              <h3 className="font-chakra text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {contrib.title}
              </h3>
              <p className="font-mono-tech text-xs text-emerald-400/90 mb-3 font-semibold">
                {contrib.repo}
              </p>

              <div className="inline-flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded text-[11px] font-mono-tech text-slate-300 mb-4 border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ROLE: {contrib.role}</span>
              </div>

              <p className="font-mono-tech text-xs text-slate-300 mb-5 leading-relaxed">
                {contrib.description}
              </p>
            </div>

            <div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {contrib.tech.map((t, i) => (
                  <span key={i} className="bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-[10px] font-mono-tech text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub Link Button */}
              <a
                href={contrib.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline w-full py-2 text-xs flex items-center justify-center gap-2 border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/40"
              >
                <GitBranch className="w-4 h-4" />
                <span>INSPECT ON GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Callout Banner */}
      <div className="arcade-panel p-6 rounded-lg border-2 border-slate-800 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-emerald-400" />
          <div>
            <div className="font-chakra font-bold text-white text-base">WANT TO EXPLORE ALL REPOSITORIES & COMMITS?</div>
            <div className="font-mono-tech text-xs text-slate-400">View complete contribution history on GitHub</div>
          </div>
        </div>
        <a
          href="https://github.com/KHARSHAVARDHAN-eng"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => sound.playHover()}
          className="arcade-btn arcade-btn-amber px-5 py-2.5 text-xs flex items-center gap-2"
        >
          <span>OPEN GITHUB PROFILE</span>
          <ExternalLink className="w-3.5 h-3.5 text-black" />
        </a>
      </div>
    </div>
  );
};
