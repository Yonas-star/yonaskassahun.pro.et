"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionValue } from "framer-motion";

export interface RoadMilestoneProps {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  progress: number; // e.g. 95
  color: string;
  glowColor: string;
  leftPercent: number; // e.g. 15.4%
  topPercent: number; // e.g. 26%
  scrollProgress: MotionValue<number>;
  threshold: number; // e.g. 0.08
  size?: "sm" | "md";
}

export default function RoadTechMilestone({
  name,
  Icon,
  progress,
  color,
  glowColor,
  leftPercent,
  topPercent,
  scrollProgress,
  threshold,
  size = "md",
}: RoadMilestoneProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsub = scrollProgress.on("change", (latest) => {
      setIsActive(latest >= threshold);
    });
    // Initial check
    setIsActive(scrollProgress.get() >= threshold);
    return () => unsub();
  }, [scrollProgress, threshold]);

  const isSmall = size === "sm";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1, y: -4 }}
      style={{
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        transform: "translate(-50%, -50%)",
      }}
      className="absolute pointer-events-auto select-none flex flex-col items-center group z-20 cursor-pointer"
    >
      {/* 1. Milestone Waypoint Node on the Road */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Backlight Aura: Intensifies when road laser reaches milestone or on hover */}
        <div
          className={`absolute -inset-2 rounded-2xl blur-lg transition-all duration-500 pointer-events-none ${
            isActive
              ? "opacity-80 scale-110"
              : "opacity-25 group-hover:opacity-75"
          }`}
          style={{ background: glowColor }}
        />

        {/* Outer Pulsing Beacon Ring when laser passes */}
        {isActive && (
          <div
            className="absolute -inset-1 rounded-2xl border animate-ping pointer-events-none opacity-40"
            style={{ borderColor: color, animationDuration: "3s" }}
          />
        )}

        {/* Icon Card Container */}
        <div
          className={`relative rounded-xl bg-zinc-950/85 backdrop-blur-xl border transition-all duration-300 flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.85)] ${
            isActive
              ? "border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              : "border-white/15 group-hover:border-white/35"
          } ${isSmall ? "w-8 h-8 p-1.5" : "w-10 h-10 sm:w-11 sm:h-11 p-2"}`}
        >
          <Icon className={isSmall ? "w-4 h-4" : "w-5 h-5 sm:w-6 sm:h-6"} />
        </div>

        {/* Anchor Pin to Road */}
        <div
          className="absolute -bottom-1 w-2 h-2 rounded-full border border-white/50 shadow-sm transition-all"
          style={{
            backgroundColor: color,
            boxShadow: isActive ? `0 0 8px ${color}` : "none",
          }}
        />
      </div>

      {/* 2. Subtitle: Name & Proficiency Progress Bar */}
      <div
        className={`mt-1.5 rounded-xl bg-zinc-950/90 backdrop-blur-2xl border transition-all duration-300 flex flex-col items-center shadow-[0_8px_20px_rgba(0,0,0,0.7)] ${
          isActive
            ? "border-zinc-700 shadow-[0_0_12px_rgba(0,0,0,0.8)]"
            : "border-zinc-800/80 group-hover:border-zinc-600"
        } ${isSmall ? "px-2 py-1 min-w-[70px]" : "px-2.5 py-1.5 min-w-[85px] sm:min-w-[96px]"}`}
      >
        {/* Subtitle Name & Percentage */}
        <div className="flex items-center justify-between w-full gap-1.5 mb-1">
          <span
            className={`font-bold text-white tracking-wide truncate ${
              isSmall ? "text-[9px]" : "text-[10px] sm:text-xs"
            }`}
          >
            {name}
          </span>
          <span
            className={`font-mono font-semibold ${
              isSmall ? "text-[8px]" : "text-[9px] sm:text-[10px]"
            }`}
            style={{ color: color }}
          >
            {progress}%
          </span>
        </div>

        {/* Mini High-Tech Progress Bar */}
        <div className="w-full h-1 sm:h-1.5 bg-zinc-800/90 rounded-full overflow-hidden p-[0.5px]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, ${color}, #ffffff)`,
              boxShadow: isActive ? `0 0 6px ${color}` : "none",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
