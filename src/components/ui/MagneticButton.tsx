import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  href,
  variant = 'primary',
  target,
  rel
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength
    setPosition({ x: distanceX * 0.2, y: distanceY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] border border-cyan-300/40';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(121,40,202,0.3)] hover:shadow-[0_0_30px_rgba(121,40,202,0.5)] border border-purple-400/40';
      case 'glass':
        return 'bg-slate-900/60 backdrop-blur-md text-slate-100 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/70 shadow-lg';
      case 'outline':
      default:
        return 'bg-transparent text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.15)]';
    }
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.5 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium tracking-wide transition-colors cursor-pointer overflow-hidden group ${getVariantStyles()} ${className}`}
    >
      {/* Subtle shine effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return <button onClick={onClick} className="inline-block outline-none">{content}</button>;
};
