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
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  // Deepest Layer (Icons behind the name)
  const iconsTranslateX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const iconsTranslateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // Midground Layer (Name behind statue)
  const bgTextTranslateX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const bgTextTranslateY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  // Foreground Layer (Statue)
  const statueTranslateX = useTransform(smoothX, [-0.5, 0.5], [6, -6]);
  const statueTranslateY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  // Idle gentle wave animation
  useEffect(() => {
    let animId: number;
    let start = performance.now();

    const idleMotion = (now: number) => {
      if (mouseX.get() === 0 && mouseY.get() === 0) {
        const elapsed = (now - start) * 0.0015;
        const idleX = Math.sin(elapsed) * 0.1;
        const idleY = Math.cos(elapsed * 0.8) * 0.06;
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

  // Tech constellation cleanly framed around the statue without encroaching on navbar
  const techConstellation = [
    // Left Zone (Programming & 3D Languages)
    { Icon: TypeScriptIcon, x: -38, y: -24, dur: 7, delay: 0 },
    { Icon: ReactIcon, x: -26, y: -34, dur: 8.5, delay: 1.2 },
    { Icon: PythonIcon, x: -40, y: -10, dur: 6.5, delay: 0.8 },
    { Icon: JavaScriptIcon, x: -28, y: -14, dur: 9, delay: 2.0 },
    { Icon: CPPIcon, x: -40, y: 6, dur: 7.5, delay: 1.5 },
    { Icon: RustIcon, x: -30, y: 18, dur: 8, delay: 0.5 },
    { Icon: GolangIcon, x: -38, y: 30, dur: 9.5, delay: 2.2 },
    { Icon: NodeJSIcon, x: -24, y: 28, dur: 7, delay: 1.8 },
    { Icon: HTML5Icon, x: -18, y: -32, dur: 8, delay: 2.5 },

    // Top Arch (comfortably below navbar)
    { Icon: ThreeJSIcon, x: -8, y: -38, dur: 7.2, delay: 0.3 },
    { Icon: SwiftIcon, x: 8, y: -38, dur: 8.2, delay: 1.7 },
    { Icon: CSS3Icon, x: 18, y: -32, dur: 6.8, delay: 2.1 },

    // Right Zone (AI & Video/Creative Tools)
    { Icon: GeminiIcon, x: 28, y: -34, dur: 7.8, delay: 0.9 },
    { Icon: OpenAIIcon, x: 38, y: -24, dur: 8.8, delay: 1.4 },
    { Icon: ClaudeIcon, x: 30, y: -14, dur: 6.9, delay: 2.4 },
    { Icon: BlenderIcon, x: 40, y: -4, dur: 9.2, delay: 0.6 },
    { Icon: PremiereIcon, x: 32, y: 10, dur: 7.4, delay: 1.1 },
    { Icon: AfterEffectsIcon, x: 40, y: 22, dur: 8.4, delay: 1.9 },
    { Icon: PyTorchIcon, x: 26, y: 28, dur: 7.1, delay: 0.4 },
    { Icon: DaVinciResolveIcon, x: 36, y: 32, dur: 9.0, delay: 2.7 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-5xl mx-auto h-[clamp(260px,42vh,440px)] flex items-center justify-center perspective-[1200px] select-none ${className}`}
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
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          {techConstellation.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -10, 0, 10, 0],
                  x: [0, 6, 0, -6, 0],
                  rotate: [-3, 3, -3],
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
                className="p-1 sm:p-1.5 md:p-2 rounded-xl bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-lg shadow-black/50 opacity-60 sm:opacity-75 hover:opacity-100 transition-opacity scale-75 sm:scale-90 md:scale-100"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MIDGROUND LAYER: Massive Typography BEHIND STATUE                       */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            x: bgTextTranslateX,
            y: bgTextTranslateY,
            transform: "translateZ(-20px)",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 overflow-visible px-4 -translate-y-2 sm:-translate-y-4"
        >
          <div className="flex flex-col items-center justify-center font-black tracking-tighter uppercase w-full gap-3 sm:gap-5 md:gap-7">
            {/* YONAS */}
            <span
              className="text-[clamp(3rem,10vh+2vw,10.5rem)] font-black tracking-tighter bg-gradient-to-b from-white/35 via-zinc-400/20 to-zinc-600/5 bg-clip-text text-transparent drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)] leading-none"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
              }}
            >
              YONAS
            </span>

            {/* KASSAHUN */}
            <span
              className="text-[clamp(2.4rem,8vh+1.8vw,9rem)] font-black tracking-tighter bg-gradient-to-b from-white/30 via-zinc-400/20 to-zinc-600/5 bg-clip-text text-transparent drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)] leading-none"
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
        {/* ========================================================================= */}
        <motion.div
          style={{
            x: statueTranslateX,
            y: statueTranslateY,
            transform: "translateZ(30px)",
          }}
          className="relative z-20 h-full aspect-[500/680] flex items-center justify-center pointer-events-none"
        >
          <Image
            src="/statue.png"
            alt="Yonas Kassahun - 3D Character Study Statue"
            fill
            priority
            sizes="(max-height: 520px) 380px, 480px"
            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
