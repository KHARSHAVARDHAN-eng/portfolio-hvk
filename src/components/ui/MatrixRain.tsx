import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MatrixRainProps {
  onClose: () => void;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/{}[]=';
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const rainDrops: number[] = Array(columns).fill(1);

    const render = () => {
      ctx.fillStyle = 'rgba(7, 9, 14, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00f5a0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Head of the drop is white-cyan
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#00f2fe';
        } else {
          ctx.fillStyle = '#00f5a0';
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/80 transition-colors font-mono-tech text-sm"
        >
          <X className="w-4 h-4" />
          <span>EXIT MATRIX</span>
        </button>
      </div>
    </div>
  );
};
