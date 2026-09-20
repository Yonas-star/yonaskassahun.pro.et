"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface HorizontalRoadProps {
  progress: MotionValue<number>;
}

export default function HorizontalRoad({ progress }: HorizontalRoadProps) {
  // Continuous wide, rounded zigzag path weaving horizontally across the 5 screens (0 -> 5000px)
  const zigzagPath =
    "M 0,500 C 250,220 500,220 750,500 C 1000,780 1250,780 1500,500 C 1750,220 2000,220 2250,500 C 2500,780 2750,780 3000,500 C 3250,220 3500,220 3750,500 C 4000,780 4250,780 4500,500 C 4750,280 4900,420 5000,500";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 5000 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Section Colors: 0-20% Hero (Blue) | 20-40% About (Cyan/Emerald) | 40-60% Skill (Yellow/Amber) | 60-80% Work (Purple/Violet) | 80-100% Contact (Rose) */}
          <linearGradient
            id="horizontalRoadColors"
            x1="0"
            y1="0"
            x2="5000"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="15%" stopColor="#60a5fa" />
            <stop offset="22%" stopColor="#06b6d4" />
            <stop offset="38%" stopColor="#10b981" />
            <stop offset="44%" stopColor="#f59e0b" />
            <stop offset="58%" stopColor="#eab308" />
            <stop offset="65%" stopColor="#8b5cf6" />
            <stop offset="78%" stopColor="#a855f7" />
            <stop offset="85%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>

          {/* Broad Atmospheric Colored Glow Gradient */}
          <linearGradient
            id="horizontalRoadAtmosphere"
            x1="0"
            y1="0"
            x2="5000"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
            <stop offset="25%" stopColor="#0891b2" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.45" />
          </linearGradient>

          {/* Frosted Glass Gaussian Blur Filters */}
          <filter id="roadAtmosphereBlur" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="36" result="blur" />
          </filter>

          <filter id="roadFrostBlur" x="-5%" y="-20%" width="110%" height="140%">
            <feGaussianBlur stdDeviation="14" result="blur" />
          </filter>

          <filter id="roadLaserGlow" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="6" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LAYER 1: Wide Ambient Glow Halo (Diffused colorful atmospheric glow) */}
        <path
          d={zigzagPath}
          stroke="url(#horizontalRoadAtmosphere)"
          strokeWidth="92"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#roadAtmosphereBlur)"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 2: Wide Frosted Glass Road Bed (Translucent blurred substrate) */}
        <path
          d={zigzagPath}
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="56"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#roadFrostBlur)"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 3: Glass Road Body with Subtle Section Tint */}
        <path
          d={zigzagPath}
          stroke="url(#horizontalRoadColors)"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.10"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 4: Glass Specular Edge Rails (Twin crystal glass boundaries) */}
        <path
          d={zigzagPath}
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="52"
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
          strokeWidth="44"
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
          strokeDasharray="16 22"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 7: Active Horizontal Scroll Progress Laser (100% Correspondent with scroll) */}
        <motion.path
          d={zigzagPath}
          stroke="url(#horizontalRoadColors)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#roadLaserGlow)"
          style={{
            pathLength: progress,
            vectorEffect: "non-scaling-stroke",
          }}
        />

        {/* NOTE: Circle indicators are completely removed per user request */}
      </svg>
    </div>
  );
}
