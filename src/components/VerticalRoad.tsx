"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface VerticalRoadProps {
  progress: MotionValue<number>;
}

export default function VerticalRoad({ progress }: VerticalRoadProps) {
  // Continuous wide, rounded zigzag path weaving vertically down the mobile page (0 -> 1000)
  const verticalZigzagPath =
    "M 500,0 C 820,70 820,130 500,200 C 180,270 180,340 500,410 C 820,480 820,550 500,620 C 180,690 180,770 500,840 C 750,910 650,960 500,1000";

  return (
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
          {/* Vertical Section Colors: Hero (Blue) -> About (Cyan/Emerald) -> Skill (Yellow/Amber) -> Work (Purple/Violet) -> Contact (Rose/Coral) */}
          <linearGradient
            id="vertRoadColors"
            x1="0"
            y1="0"
            x2="0"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="14%" stopColor="#60a5fa" />
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
            id="vertRoadAtmosphere"
            x1="0"
            y1="0"
            x2="0"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.40" />
            <stop offset="25%" stopColor="#0891b2" stopOpacity="0.40" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.40" />
            <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.40" />
          </linearGradient>

        </defs>

        {/* LAYER 1: Wide Ambient Glow Halo (Lightweight Vector Diffusion) */}
        <path
          d={verticalZigzagPath}
          stroke="url(#vertRoadAtmosphere)"
          strokeWidth="68"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.35"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 2: Wide Frosted Glass Road Bed */}
        <path
          d={verticalZigzagPath}
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="46"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 3: Glass Road Body with Subtle Section Tint */}
        <path
          d={verticalZigzagPath}
          stroke="url(#vertRoadColors)"
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.16"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 4: Glass Specular Edge Rails (Twin crystal boundaries) */}
        <path
          d={verticalZigzagPath}
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="42"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 5: Inner Glass Sheen */}
        <path
          d={verticalZigzagPath}
          stroke="rgba(255, 255, 255, 0.10)"
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 6: Center Dashed Glass Lane Markings */}
        <path
          d={verticalZigzagPath}
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="14 18"
          style={{ vectorEffect: "non-scaling-stroke" }}
        />

        {/* LAYER 7: Active Vertical Scroll Progress Laser (100% Correspondent with vertical scroll) */}
        <motion.path
          d={verticalZigzagPath}
          stroke="url(#vertRoadColors)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength: progress,
            vectorEffect: "non-scaling-stroke",
          }}
        />

        {/* SECTION 2 ROAD MILESTONE: Lightweight Vector Glass Waypoint entering Section 2 from About */}
        <g transform="translate(500, 410)">
          {/* Ambient Amber Glow Halo */}
          <circle r="30" fill="rgba(245, 158, 11, 0.20)" />
          {/* Frosted Glass Outer Ring */}
          <circle r="22" stroke="rgba(255, 255, 255, 0.40)" strokeWidth="2" fill="rgba(24, 24, 27, 0.85)" />
          {/* Inner Golden Specular Ring */}
          <circle r="14" stroke="rgba(245, 158, 11, 0.75)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          {/* Center Luminous Core */}
          <circle r="5" fill="#fbbf24" />
        </g>
      </svg>
    </div>
  );
}
