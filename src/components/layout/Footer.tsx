import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="font-mono-tech text-sm font-bold text-slate-200">
            K. Harshavardhan <span className="text-cyan-400 font-normal">// AI/ML Engineer</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="text-xs text-slate-500 font-mono-tech">
            © {new Date().getFullYear()} All Rights Reserved. Built with React & TypeScript.
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/50 text-xs font-mono-tech transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal Mode</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-slate-800 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
