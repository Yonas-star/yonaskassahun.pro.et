"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface SectionNode {
  id: string;
  code: string;
  name: string;
  position: number; // estimated 0..1 range
}

const SECTIONS: SectionNode[] = [
  { id: "hero", code: "00", name: "Hero", position: 0.0 },
  { id: "about", code: "01", name: "About", position: 0.25 },
  { id: "skill", code: "02", name: "Skill", position: 0.5 },
  { id: "work", code: "03", name: "Work", position: 0.75 },
  { id: "contact", code: "04", name: "Contact", position: 0.95 },
];

export default function ScrollRod() {
  const [mounted, setMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Global page vertical scroll progress
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for fluid vertical rod motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate percentage (0% -> 100%)
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Height and Y transforms for the active energy fill & traveler capsule
  const activeLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const travelerY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* ============================================================ */}
      {/* 1. CENTRAL BACKGROUND ARCHITECTURAL SPINE ROD                 */}
      {/* Runs continuously down the center of the entire website       */}
      {/* ============================================================ */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-0 flex flex-col items-center justify-start overflow-hidden opacity-80"
      >
        {/* Ambient Rod Glow Halo */}
        <div className="absolute inset-y-0 w-6 bg-gradient-to-b from-blue-600/10 via-yellow-500/10 to-blue-600/10 blur-xl pointer-events-none" />

        {/* The 3D Cylindrical Background Rod Tube */}
        <div className="relative w-2.5 h-full rounded-full bg-gradient-to-r from-zinc-900 via-zinc-700/60 to-zinc-900 border-x border-zinc-800/80 shadow-[inset_0_0_8px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Subtle Specular Metallic Highlight Line on the cylinder face */}
          <div className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-gradient-to-b from-white/20 via-zinc-400/20 to-white/10" />

          {/* Glowing Inner Core Channel */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-zinc-950/90" />

          {/* Vertical Scroll Energy Beam that fills down the rod as user scrolls */}
          <motion.div
            style={{ height: activeLineHeight }}
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-yellow-400 to-amber-500 shadow-[0_0_15px_rgba(234,179,8,0.7)]"
          />

          {/* Traveling Energy Pulse Orb riding down the background rod */}
          <motion.div
            style={{ top: travelerY }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-16 rounded-full bg-gradient-to-b from-blue-400 via-white to-yellow-300 blur-[2px] opacity-90 shadow-[0_0_20px_#60a5fa,0_0_35px_#facc15]"
          />
        </div>

        {/* Subtle Horizontal Graduation Hash Marks along the background rod */}
        <div className="absolute inset-y-0 flex flex-col justify-between py-24 pointer-events-none opacity-40">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-[1px] ${
                i % 4 === 0 ? "w-6 bg-zinc-600" : "w-3 bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. TACTILE VIEWPORT SCROLL ROD (Fixed Interactive Guide Rail)  */}
      {/* Left-side luxury mechanical rod tracking vertical scroll      */}
      {/* ============================================================ */}
      <div className="fixed left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 select-none pointer-events-auto hidden sm:flex flex-col items-center">
        {/* Top Metallic Mount Bracket */}
        <div className="flex flex-col items-center mb-1.5 opacity-70">
          <div className="w-4 h-1.5 rounded-t-sm bg-gradient-to-b from-zinc-600 to-zinc-800 border border-zinc-700/60 shadow-sm" />
          <div className="w-2.5 h-1 bg-zinc-900 border-x border-zinc-700/60" />
        </div>

        {/* The Main Visible Vertical Guide Rod */}
        <div className="relative h-[48vh] sm:h-[56vh] w-6 flex items-center justify-center">
          {/* Base Cylindrical Rod Body */}
          <div className="relative w-1.5 h-full rounded-full bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-900 border border-zinc-700/50 shadow-[0_0_10px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Specular Highlight Strip */}
            <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-white/25" />

            {/* Active Energized Laser Track trailing the traveler */}
            <motion.div
              style={{ height: activeLineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-yellow-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            />
          </div>

          {/* Kinetic Traveler Cylinder Ring (Smooth Mechanical Slider) */}
          <motion.div
            style={{ top: travelerY }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-20"
          >
            {/* Outer Radiant Glow */}
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500/40 to-yellow-400/50 blur-md animate-pulse" />

            {/* Outer Metallic Ring */}
            <div className="w-5 h-7 rounded-md bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-700 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.8),0_0_16px_rgba(250,204,21,0.6)] flex items-center justify-center relative overflow-hidden">
              {/* Inner Glowing Amber/Blue Core */}
              <div className="w-2.5 h-4 rounded-sm bg-gradient-to-b from-blue-400 to-yellow-400 shadow-[0_0_8px_#facc15]" />
              {/* Surface Reflection Gloss */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Section Waypoint Nodes along the Rod */}
          <div className="absolute inset-y-0 flex flex-col justify-between items-center py-2 pointer-events-auto">
            {SECTIONS.map((section, idx) => {
              const isActive =
                scrollPercent >= idx * 23 && scrollPercent < (idx + 1) * 25 + 5;

              return (
                <div
                  key={section.id}
                  className="relative flex items-center group cursor-pointer"
                  onMouseEnter={() => setHoveredNode(section.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => scrollToSection(section.id)}
                >
                  {/* Waypoint Bead / Ring */}
                  <div
                    className={`w-3 h-3 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? "bg-yellow-400 border-white shadow-[0_0_12px_#facc15] scale-125"
                        : "bg-zinc-950/90 border-zinc-700 hover:border-zinc-400 hover:scale-110"
                    }`}
                  >
                    <div
                      className={`w-1 h-1 rounded-full ${
                        isActive ? "bg-zinc-950" : "bg-zinc-500"
                      }`}
                    />
                  </div>

                  {/* Section Label Pill (Tooltip appearing to the right of the rod) */}
                  <div
                    className={`absolute left-7 px-2.5 py-1 rounded-md bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[11px] font-mono tracking-wider whitespace-nowrap transition-all duration-200 pointer-events-none flex items-center gap-1.5 shadow-xl ${
                      hoveredNode === section.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <span className="text-zinc-500 text-[10px]">{section.code}</span>
                    <span
                      className={isActive ? "text-yellow-400 font-medium" : "text-zinc-300"}
                    >
                      {section.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Metallic Mount Bracket */}
        <div className="flex flex-col items-center mt-1.5 opacity-70">
          <div className="w-2.5 h-1 bg-zinc-900 border-x border-zinc-700/60" />
          <div className="w-4 h-1.5 rounded-b-sm bg-gradient-to-b from-zinc-800 to-zinc-600 border border-zinc-700/60 shadow-sm" />
        </div>

        {/* Digital Scroll Percentage Indicator at Bottom of Rod */}
        <div className="mt-3 px-2 py-0.5 rounded-full bg-zinc-900/80 border border-zinc-800/90 text-[10px] font-mono text-zinc-400 tracking-wider shadow-sm">
          <span>{String(scrollPercent).padStart(2, "0")}%</span>
        </div>
      </div>
    </>
  );
}
