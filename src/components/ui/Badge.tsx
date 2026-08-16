import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = ''
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'cyan':
        return 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-900/40';
      case 'violet':
        return 'bg-purple-950/60 text-purple-300 border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/40';
      case 'emerald':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-900/40';
      case 'amber':
        return 'bg-amber-950/60 text-amber-300 border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-900/40';
      case 'subtle':
      default:
        return 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:border-slate-500/60';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech border backdrop-blur-sm transition-all duration-200 ${getVariant()} ${className}`}
    >
      {children}
    </span>
  );
};
