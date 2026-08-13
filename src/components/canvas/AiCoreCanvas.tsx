import React, { useEffect, useRef } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
  label?: string;
}

export const AiCoreCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 18 : 36;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - width / 2) / (width / 2);
      const y = (e.clientY - rect.top - height / 2) / (height / 2);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // AI Core Labels
    const coreLabels = [
      'GraphRAG', 'Vector DB', 'Neo4j', 'PyTorch', 
      'Reranker', 'LLM Synthesis', 'Biometrics', 'FFT Spectral'
    ];

    // Generate 3D nodes
    const nodes: Node3D[] = [];
    const colors = ['#00f2fe', '#4facfe', '#7928ca', '#00f5a0', '#38bdf8'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 400,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[i % colors.length],
        label: i < coreLabels.length ? coreLabels[i] : undefined
      });
    }

    // Data pulses traveling along connections
    interface Pulse {
      fromIndex: number;
      toIndex: number;
      progress: number; // 0 to 1
      speed: number;
      color: string;
    }
    const pulses: Pulse[] = [];

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      pulses.push({
        fromIndex: from,
        toIndex: to,
        progress: 0,
        speed: Math.random() * 0.015 + 0.01,
        color: '#00f2fe'
      });
    };

    const pulseInterval = setInterval(spawnPulse, 1200);

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      // Smooth lerp mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      angleY += 0.0025 + mouseRef.current.x * 0.001;
      angleX += 0.0015 + mouseRef.current.y * 0.001;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = 400;

      // Draw central glowing AI Core aura
      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 10,
        centerX, centerY, isMobile ? 120 : 200
      );
      coreGradient.addColorStop(0, 'rgba(0, 242, 254, 0.25)');
      coreGradient.addColorStop(0.5, 'rgba(121, 40, 202, 0.1)');
      coreGradient.addColorStop(1, 'rgba(7, 9, 14, 0)');
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, isMobile ? 120 : 200, 0, Math.PI * 2);
      ctx.fill();

      // Project 3D nodes to 2D
      const projectedNodes = nodes.map((node) => {
        // Velocity update
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Bounce back in bounding box
        if (Math.abs(node.x) > 300) node.vx *= -1;
        if (Math.abs(node.y) > 300) node.vy *= -1;
        if (Math.abs(node.z) > 200) node.vz *= -1;

        // 3D Rotation Matrix
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        let y1 = node.y * cosX - node.z * sinX;
        let z1 = node.z * cosX + node.y * sinX;

        let x2 = node.x * cosY + z1 * sinY;
        let z2 = z1 * cosY - node.x * sinY;

        const scale = focalLength / (focalLength + z2 + 300);
        const projX = centerX + x2 * scale;
        const projY = centerY + y1 * scale;

        return {
          projX,
          projY,
          scale,
          z: z2,
          color: node.color,
          radius: node.radius * scale,
          label: node.label
        };
      });

      // Sort by depth
      projectedNodes.sort((a, b) => b.z - a.z);

      // Draw connections
      const maxDistance = isMobile ? 120 : 180;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw animated pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const p1 = projectedNodes[pulse.fromIndex];
        const p2 = projectedNodes[pulse.toIndex];
        if (p1 && p2) {
          const px = p1.projX + (p2.projX - p1.projX) * pulse.progress;
          const py = p1.projY + (p2.projY - p1.projY) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 3 * p1.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#00f2fe';
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw 3D nodes & text labels
      projectedNodes.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.scale > 0.8 ? 12 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw tech labels
        if (p.label && p.scale > 0.75) {
          ctx.font = `${Math.floor(11 * p.scale)}px monospace`;
          ctx.fillStyle = `rgba(226, 232, 240, ${Math.min(1, p.scale - 0.2)})`;
          ctx.fillText(p.label, p.projX + 8, p.projY + 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(pulseInterval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[450px] md:min-h-[600px] flex items-center justify-center overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="block w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};
