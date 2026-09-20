"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  CPPIcon,
  RustIcon,
  GolangIcon,
  ReactIcon,
  NodeJSIcon,
  HTML5Icon,
  CSS3Icon,
  SwiftIcon,
  ThreeJSIcon,
  BlenderIcon,
  PremiereIcon,
  AfterEffectsIcon,
  DaVinciResolveIcon,
  GeminiIcon,
  ClaudeIcon,
  OpenAIIcon,
  PyTorchIcon,
} from "./TechIcons";

interface HeroStatueProps {
  className?: string;
}

export default function HeroStatue({ className = "" }: HeroStatueProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Smooth mouse tilt parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotation & parallax depth
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Deepest Layer (Icons behind the name)
  const iconsTranslateX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const iconsTranslateY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  // Midground Layer (Name behind statue)
  const bgTextTranslateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const bgTextTranslateY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  // Foreground Layer (Statue)
  const statueTranslateX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const statueTranslateY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  // Idle gentle wave animation for mobile devices (when no mouse hover)
  useEffect(() => {
    let animId: number;
    let start = performance.now();

    const idleMotion = (now: number) => {
      if (mouseX.get() === 0 && mouseY.get() === 0) {
        const elapsed = (now - start) * 0.0015;
        const idleX = Math.sin(elapsed) * 0.12;
        const idleY = Math.cos(elapsed * 0.8) * 0.08;
        smoothX.set(idleX);
        smoothY.set(idleY);
      }
      animId = requestAnimationFrame(idleMotion);
    };

    animId = requestAnimationFrame(idleMotion);
    return () => cancelAnimationFrame(animId);
  }, [mouseX, mouseY, smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Curated constellation with responsive coordinate scaling
  const techConstellation = [
    // Left Zone (Programming & 3D Languages)
    { Icon: TypeScriptIcon, x: -38, y: -38, dur: 7, delay: 0 },
    { Icon: ReactIcon, x: -24, y: -48, dur: 8.5, delay: 1.2 },
    { Icon: PythonIcon, x: -40, y: -20, dur: 6.5, delay: 0.8 },
    { Icon: JavaScriptIcon, x: -28, y: -26, dur: 9, delay: 2.0 },
    { Icon: CPPIcon, x: -42, y: 0, dur: 7.5, delay: 1.5 },
    { Icon: RustIcon, x: -30, y: 12, dur: 8, delay: 0.5 },
    { Icon: GolangIcon, x: -38, y: 26, dur: 9.5, delay: 2.2 },
    { Icon: NodeJSIcon, x: -24, y: 32, dur: 7, delay: 1.8 },
    { Icon: HTML5Icon, x: -16, y: -42, dur: 8, delay: 2.5 },

    // Top Arch
    { Icon: ThreeJSIcon, x: -6, y: -50, dur: 7.2, delay: 0.3 },
    { Icon: SwiftIcon, x: 7, y: -50, dur: 8.2, delay: 1.7 },
    { Icon: CSS3Icon, x: 17, y: -44, dur: 6.8, delay: 2.1 },

    // Right Zone (AI & Video/Creative Tools)
    { Icon: GeminiIcon, x: 26, y: -46, dur: 7.8, delay: 0.9 },
    { Icon: OpenAIIcon, x: 39, y: -38, dur: 8.8, delay: 1.4 },
    { Icon: ClaudeIcon, x: 30, y: -24, dur: 6.9, delay: 2.4 },
    { Icon: BlenderIcon, x: 42, y: -14, dur: 9.2, delay: 0.6 },
    { Icon: PremiereIcon, x: 33, y: 4, dur: 7.4, delay: 1.1 },
    { Icon: AfterEffectsIcon, x: 41, y: 20, dur: 8.4, delay: 1.9 },
    { Icon: PyTorchIcon, x: 25, y: 32, dur: 7.1, delay: 0.4 },
    { Icon: DaVinciResolveIcon, x: 37, y: 36, dur: 9.0, delay: 2.7 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-6xl mx-auto min-h-[460px] xs:min-h-[520px] sm:min-h-[640px] md:min-h-[740px] flex items-center justify-center perspective-[1400px] select-none ${className}`}
    >
      {/* 3D Container with Parallax Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* ========================================================================= */}
        {/* 1. DEEPEST LAYER (BEHIND THE NAME): Constellation of Moving Tech Icons    */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            x: iconsTranslateX,
            y: iconsTranslateY,
            transform: "translateZ(-80px)",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 -translate-y-12 xs:-translate-y-14 sm:-translate-y-2 md:translate-y-0 transition-transform"
        >
          {techConstellation.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -14, 0, 14, 0],
                  x: [0, 8, 0, -8, 0],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  duration: item.dur,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${item.x}%)`,
                  top: `calc(50% + ${item.y}%)`,
                  transform: "translate(-50%, -50%)",
                }}
                className="p-1.5 sm:p-2 md:p-2.5 rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-xl shadow-black/50 opacity-60 sm:opacity-75 hover:opacity-100 transition-opacity scale-85 xs:scale-90 sm:scale-100"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MIDGROUND LAYER: Massive Typography BEHIND STATUE                       */}
        {/* Shifted more upper on mobile with increased line gap across all devices   */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            x: bgTextTranslateX,
            y: bgTextTranslateY,
            transform: "translateZ(-20px)",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 overflow-visible px-2 sm:px-4 -translate-y-14 xs:-translate-y-16 sm:-translate-y-4 md:translate-y-0 transition-transform"
        >
          <div className="flex flex-col items-center justify-center font-black tracking-tighter uppercase w-full gap-5 xs:gap-7 sm:gap-10 md:gap-14 lg:gap-16">
            {/* YONAS (Upper position - visible above and crowning the statue head) */}
            <span
              className="text-[clamp(3.5rem,14vw,16rem)] font-black tracking-tighter bg-gradient-to-b from-white/35 via-zinc-400/20 to-zinc-600/5 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] leading-none"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
              }}
            >
              YONAS
            </span>

            {/* KASSAHUN (Spaced with increased line gap to frame chest & pedestal) */}
            <span
              className="text-[clamp(2.8rem,11.5vw,14.5rem)] font-black tracking-tighter bg-gradient-to-b from-white/30 via-zinc-400/20 to-zinc-600/5 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] leading-none"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.18)",
              }}
            >
              KASSAHUN
            </span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. FOREGROUND LAYER: Responsive 3D Character Bust Statue                   */}
        {/* Anchored slightly lower on mobile to reveal YONAS completely              */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            x: statueTranslateX,
            y: statueTranslateY,
            transform: "translateZ(30px)",
          }}
          className="relative z-20 w-[240px] xs:w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[360px] xs:h-[420px] sm:h-[540px] md:h-[640px] lg:h-[680px] flex items-center justify-center pointer-events-none translate-y-6 xs:translate-y-8 sm:translate-y-2 md:translate-y-0 transition-transform"
        >
          <Image
            src="/statue.png"
            alt="Yonas Kassahun - 3D Character Study Statue"
            fill
            priority
            sizes="(max-width: 480px) 260px, (max-width: 768px) 380px, 500px"
            className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
