"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, Video, Sparkles } from "lucide-react";

export interface SkillItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  bgGradient: string;
  badge: string;
}

export const SKILL_DISCIPLINES: SkillItem[] = [
  {
    id: "fullstack",
    title: "Full-Stack Dev",
    subtitle: "Architecture & Systems",
    icon: Code2,
    accentColor: "text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.45)",
    borderColor: "border-cyan-500/50",
    bgGradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    badge: "FULL-STACK ARCHITECTURE",
  },
  {
    id: "ai",
    title: "AI Learner",
    subtitle: "Models & Agentic AI",
    icon: Brain,
    accentColor: "text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.45)",
    borderColor: "border-amber-500/50",
    bgGradient: "from-amber-500/20 via-yellow-600/10 to-transparent",
    badge: "INTELLIGENT AI SYSTEMS",
  },
  {
    id: "video",
    title: "Video Editor",
    subtitle: "Motion & Post-Production",
    icon: Video,
    accentColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.45)",
    borderColor: "border-purple-500/50",
    bgGradient: "from-purple-500/20 via-pink-600/10 to-transparent",
    badge: "CINEMATIC VISUAL MOTION",
  },
];

interface BigSkillIconProps {
  activeIndex?: number;
  onSkillChange?: (index: number) => void;
  className?: string;
}

export default function BigSkillIcon({
  activeIndex: controlledIndex,
  onSkillChange,
  className = "",
}: BigSkillIconProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;
  const currentSkill = SKILL_DISCIPLINES[currentIndex] || SKILL_DISCIPLINES[0];
  const IconComponent = currentSkill.icon;

  // Smooth auto-cycling every 3.6s when not actively hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % SKILL_DISCIPLINES.length;
      if (onSkillChange) {
        onSkillChange(nextIndex);
      } else {
        setInternalIndex(nextIndex);
      }
    }, 3600);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, onSkillChange]);

  const handleSelect = (idx: number) => {
    if (onSkillChange) {
      onSkillChange(idx);
    } else {
      setInternalIndex(idx);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col items-center select-none relative ${className}`}
    >
      {/* Ambient Section-Matched Glow Halo behind the Big Icon */}
      <motion.div
        animate={{
          backgroundColor: currentSkill.glowColor,
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Top Road Milestone Label */}
      <div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] sm:text-xs font-mono tracking-wider backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span className="text-zinc-400">ROAD MILESTONE //</span>
        <span className={currentSkill.accentColor}>{currentSkill.badge}</span>
      </div>

      {/* THE BIG ICON CORE EMBLEM */}
      <div className="relative group cursor-pointer" onClick={() => handleSelect((currentIndex + 1) % SKILL_DISCIPLINES.length)}>
        {/* Subtle rotating outer crystal orbital ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2.5 rounded-full border border-dashed border-zinc-700/60 pointer-events-none group-hover:border-zinc-500/80 transition-colors"
        />

        {/* Counter-rotating inner specular guide */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1 rounded-full border border-white/10 pointer-events-none"
        />

        {/* Central Frosted Glass Shield */}
        <div
          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-zinc-950/80 backdrop-blur-2xl border ${currentSkill.borderColor} shadow-2xl flex items-center justify-center transition-colors duration-500`}
        >
          {/* Subtle inner gradient shimmer */}
          <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${currentSkill.bgGradient} opacity-70 pointer-events-none transition-all duration-500`} />

          {/* Crossfading Big Animated Icon */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSkill.id}
              initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.6, rotate: 15, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center justify-center text-white"
            >
              <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 ${currentSkill.accentColor} transition-colors duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`} />
            </motion.div>
          </AnimatePresence>

          {/* Corner specular glints */}
          <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />
          <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none" />
        </div>
      </div>

      {/* Dynamic Skill Title & Subtitle */}
      <div className="mt-3 text-center">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center justify-center gap-1.5">
          <span>{currentSkill.title}</span>
          <Sparkles className={`w-3.5 h-3.5 ${currentSkill.accentColor}`} />
        </h3>
        <p className="text-[11px] sm:text-xs text-zinc-400 font-light">
          {currentSkill.subtitle}
        </p>
      </div>

      {/* 3 Interactive Selector Pills */}
      <div className="flex items-center gap-1.5 sm:gap-2 mt-3 p-1 rounded-xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md">
        {SKILL_DISCIPLINES.map((skill, idx) => {
          const isActive = idx === currentIndex;
          const SkillIcon = skill.icon;
          return (
            <button
              key={skill.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono transition-all duration-300 ${
                isActive
                  ? `bg-zinc-800 text-white shadow-md border ${skill.borderColor}`
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent"
              }`}
            >
              <SkillIcon className={`w-3 h-3 ${isActive ? skill.accentColor : "text-zinc-400"}`} />
              <span className="hidden xs:inline">{skill.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
