"use client";

import React, { useEffect, useRef } from "react";

interface WaveSpinnerProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function WaveSpinner({
  size = 200,
  className = "",
  color = "#f4f4f5",
}: WaveSpinnerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      step += 0.045;

      const cx = size / 2;
      const cy = size / 2;

      // Distance between double lines with subtle organic breathing
      const lineGap = size * 0.042 + Math.sin(step * 2.2) * (size * 0.005);

      const topLeft = { x: cx - size * 0.34, y: cy - size * 0.38 };
      const topRight = { x: cx + size * 0.34, y: cy - size * 0.38 };
      const centerJunction = { x: cx, y: cy + size * 0.02 };
      const bottom = { x: cx, y: cy + size * 0.44 };

      // Helper to draw an oscillating sine-wave rail
      const drawWaveRail = (
        p1: { x: number; y: number },
        p2: { x: number; y: number },
        offsetDist: number,
        freq: number,
        amp: number,
        speed: number,
        strokeColor: string,
        lineWidth: number,
        phaseOffset: number = 0
      ) => {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy);
        if (dist === 0) return;

        const nx = -dy / dist;
        const ny = dx / dist;

        const segments = 48;
        ctx.beginPath();

        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const baseX = p1.x + dx * t + nx * offsetDist;
          const baseY = p1.y + dy * t + ny * offsetDist;

          const envelope = Math.sin(t * Math.PI);
          const wave =
            Math.sin(t * freq * Math.PI * 2 - step * speed + phaseOffset) *
            amp *
            envelope;

          const wx = baseX + nx * wave;
          const wy = baseY + ny * wave;

          if (i === 0) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      };

      // 3 Branches: Top-Left, Top-Right, Bottom Stem
      const branches = [
        { start: topLeft, end: centerJunction, phase: 0 },
        { start: topRight, end: centerJunction, phase: Math.PI * 0.65 },
        { start: centerJunction, end: bottom, phase: Math.PI * 1.3 },
      ];

      branches.forEach(({ start, end, phase }) => {
        // Primary double lines in luminous light platinum
        drawWaveRail(
          start,
          end,
          -lineGap / 2,
          2.6,
          4.5,
          2.2,
          color,
          2.6,
          phase
        );
        drawWaveRail(
          start,
          end,
          lineGap / 2,
          2.6,
          4.5,
          2.2,
          color,
          2.6,
          phase + 0.35
        );

        // Radiant glow aura
        drawWaveRail(
          start,
          end,
          -lineGap / 2,
          3.2,
          6.0,
          -1.6,
          "rgba(255, 255, 255, 0.25)",
          1.2,
          phase
        );
        drawWaveRail(
          start,
          end,
          lineGap / 2,
          3.2,
          6.0,
          -1.6,
          "rgba(255, 255, 255, 0.25)",
          1.2,
          phase + 0.35
        );
      });

      // Terminal end caps linking the twin rails cleanly at the 3 tips
      [topLeft, topRight, bottom].forEach((tip, idx) => {
        const angle =
          idx === 0
            ? Math.atan2(centerJunction.y - topLeft.y, centerJunction.x - topLeft.x)
            : idx === 1
            ? Math.atan2(centerJunction.y - topRight.y, centerJunction.x - topRight.x)
            : Math.atan2(bottom.y - centerJunction.y, bottom.x - centerJunction.x);

        const nx = -Math.sin(angle) * (lineGap / 2);
        const ny = Math.cos(angle) * (lineGap / 2);

        ctx.beginPath();
        ctx.moveTo(tip.x - nx, tip.y - ny);
        ctx.lineTo(tip.x + nx, tip.y + ny);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.4;
        ctx.stroke();
      });

      // Surfing luminous particles
      const drawTrackParticle = (
        p1: { x: number; y: number },
        p2: { x: number; y: number },
        offset: number,
        progress: number
      ) => {
        const t = progress % 1;
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy);
        const nx = -dy / dist;
        const ny = dx / dist;

        const envelope = Math.sin(t * Math.PI);
        const wave = Math.sin(t * 2.6 * Math.PI * 2 - step * 2.2) * 4.5 * envelope;

        const px = p1.x + dx * t + nx * (offset + wave);
        const py = p1.y + dy * t + ny * (offset + wave);

        ctx.beginPath();
        ctx.arc(px, py, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      };

      const progA = (step * 0.42) % 1;
      const progB = (step * 0.42 + 0.5) % 1;

      drawTrackParticle(topLeft, centerJunction, -lineGap / 2, progA);
      drawTrackParticle(topRight, centerJunction, lineGap / 2, progA);
      drawTrackParticle(centerJunction, bottom, -lineGap / 2, progB);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, color]);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="block"
      />
    </div>
  );
}
