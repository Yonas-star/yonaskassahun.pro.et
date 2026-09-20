"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface SectionNode {
  id: string;
  code: string;
  name: string;
  color: string;
  position: number;
}

const SECTIONS: SectionNode[] = [
  { id: "hero", code: "00", name: "Hero", color: "#3b82f6", position: 0.0 },
  { id: "about", code: "01", name: "About", color: "#06b6d4", position: 0.25 },
  { id: "skill", code: "02", name: "Skill", color: "#eab308", position: 0.5 },
  { id: "work", code: "03", name: "Work", color: "#a855f7", position: 0.75 },
  { id: "contact", code: "04", name: "Contact", color: "#f43f5e", position: 0.95 },
];

export default function ScrollRod() {
  const [mounted, setMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Global page vertical scroll progress
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for fluid vertical motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Height and Y transforms for side guide rail
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

  // The wide, rounded zigzag curve path definition (smooth S-curves threading through sections)
  const zigzagPath =
    "M 500,0 C 760,70 760,130 500,200 C 230,270 230,340 500,410 C 770,480 770,550 500,620 C 220,690 220,770 500,840 C 720,900 600,960 500,1000";

  return (
    <>
      {/* ============================================================ */}
      {/* 1. WIDE, ROUNDED ZIGZAG GLASSMORPHIC ROAD (Center Background) */}
      {/* Multi-colored per section, blurred frosted glass texture     */}
      {/* ============================================================ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Section-Specific Color Transitions along the Road */}
            {/* 0-20% Hero: Blue | 20-41% About: Cyan/Emerald | 41-62% Skill: Yellow/Amber | 62-84% Work: Purple/Violet | 84-100% Contact: Rose */}
            <linearGradient
              id="roadSectionColors"
              x1="0"
              y1="0"
              x2="0"
              y2="1000"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="12%" stopColor="#60a5fa" />
              <stop offset="22%" stopColor="#06b6d4" />
              <stop offset="36%" stopColor="#10b981" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="58%" stopColor="#eab308" />
              <stop offset="68%" stopColor="#8b5cf6" />
              <stop offset="80%" stopColor="#a855f7" />
              <stop offset="88%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#fb7185" />
            </linearGradient>

            {/* High-Luminance Glow Gradient */}
            <linearGradient
              id="roadGlowGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1000"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
              <stop offset="25%" stopColor="#0891b2" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.45" />
            </linearGradient>

            {/* Frosted Glass Gaussian Blur Filter */}
            <filter id="glassAtmosphereBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="28" result="blur" />
            </filter>

            <filter id="glassFrostBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="12" result="blur" />
            </filter>

            <filter id="laserCoreGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* LAYER 1: Ambient Colored Halo (Broad diffused glow shifting per section) */}
          <path
            d={zigzagPath}
            stroke="url(#roadGlowGradient)"
            strokeWidth="90"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glassAtmosphereBlur)"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />

          {/* LAYER 2: Wide Glassmorphic Outer Glass Bed (Frosted blurred substrate) */}
          <path
            d={zigzagPath}
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="54"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glassFrostBlur)"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />

          {/* LAYER 3: Wide Glass Road Body with Subtle Section Tint */}
          <path
            d={zigzagPath}
            stroke="url(#roadSectionColors)"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.10"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />

          {/* LAYER 4: Glass Specular Edge Rails (Twin crystal glass boundaries) */}
          <path
            d={zigzagPath}
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="50"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="none"
            fill="none"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />

          {/* LAYER 5: Inner Glass Sheen (Subtle reflective interior highlight) */}
          <path
            d={zigzagPath}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />

          {/* LAYER 6: Center Dashed Glass Lane Markings */}
          <path
            d={zigzagPath}
            stroke="rgba(255, 255, 255, 0.28)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="14 20"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />

          {/* LAYER 7: Active Vertical Scroll Energy Beam (Framer Motion progressive fill) */}
          <motion.path
            d={zigzagPath}
            stroke="url(#roadSectionColors)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#laserCoreGlow)"
            style={{
              pathLength: smoothProgress,
              vectorEffect: "non-scaling-stroke",
            }}
          />

          {/* LAYER 8: Section Glassmorphic Waypoint Rings at Key Zigzag Apexes */}
          {[
            { cx: 740, cy: 95, color: "#3b82f6", label: "HERO" },
            { cx: 240, cy: 305, color: "#06b6d4", label: "ABOUT" },
            { cx: 760, cy: 515, color: "#eab308", label: "SKILL" },
            { cx: 230, cy: 730, color: "#a855f7", label: "WORK" },
            { cx: 500, cy: 980, color: "#f43f5e", label: "CONTACT" },
          ].map((pt, i) => (
            <g key={i} className="opacity-75">
              {/* Outer Blurred Colored Halo */}
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="30"
                fill={pt.color}
                opacity="0.25"
                filter="url(#glassFrostBlur)"
              />
              {/* Frosted Glass Disc */}
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="18"
                fill="rgba(15, 15, 20, 0.6)"
                stroke={pt.color}
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              {/* Glowing Core Pin */}
              <circle cx={pt.cx} cy={pt.cy} r="5" fill="#ffffff" />
            </g>
          ))}
        </svg>
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
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-yellow-400 to-rose-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
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
              {/* Inner Glowing Core */}
              <div className="w-2.5 h-4 rounded-sm bg-gradient-to-b from-blue-400 via-yellow-400 to-rose-400 shadow-[0_0_8px_#facc15]" />
              {/* Surface Reflection Gloss */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Section Waypoint Nodes along the Rod with Distinct Section Colors */}
          <div className="absolute inset-y-0 flex flex-col justify-between items-center py-2 pointer-events-auto">
            {SECTIONS.map((section, idx) => {
              const isActive =
                scrollPercent >= idx * 22 && scrollPercent < (idx + 1) * 24 + 5;

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
                        ? "border-white scale-125 shadow-lg"
                        : "bg-zinc-950/90 border-zinc-700 hover:border-zinc-400 hover:scale-110"
                    }`}
                    style={{
                      backgroundColor: isActive ? section.color : undefined,
                      boxShadow: isActive ? `0 0 14px ${section.color}` : undefined,
                    }}
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
                      style={{ color: isActive ? section.color : "#d4d4d8" }}
                      className={isActive ? "font-semibold" : "font-normal"}
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
