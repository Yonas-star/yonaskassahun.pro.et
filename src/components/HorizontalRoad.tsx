import React from "react";
import { motion, MotionValue } from "framer-motion";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  NextJSIcon,
  NodeJSIcon,
  PyTorchIcon,
  GolangIcon,
  CPPIcon,
  RustIcon,
} from "@/components/TechIcons";
import RoadTechMilestone from "./RoadTechMilestone";

interface HorizontalRoadProps {
  progress: MotionValue<number>;
}

export default function HorizontalRoad({ progress }: HorizontalRoadProps) {
  // Continuous wide, rounded zigzag path weaving horizontally across the 5 screens (0 -> 5000px)
  const zigzagPath =
    "M 0,500 C 250,220 500,220 750,500 C 1000,780 1250,780 1500,500 C 1750,220 2000,220 2250,500 C 2500,780 2750,780 3000,500 C 3250,220 3500,220 3750,500 C 4000,780 4250,780 4500,500 C 4750,280 4900,420 5000,500";

  const milestones = [
    {
      name: "TypeScript",
      Icon: TypeScriptIcon,
      progress: 95,
      color: "#3178C6",
      glowColor: "rgba(49, 120, 198, 0.45)",
      leftPercent: 8.4,
      topPercent: 26.0,
      threshold: 0.08,
    },
    {
      name: "JavaScript",
      Icon: JavaScriptIcon,
      progress: 96,
      color: "#F7DF1E",
      glowColor: "rgba(247, 223, 30, 0.40)",
      leftPercent: 17.2,
      topPercent: 57.0,
      threshold: 0.17,
    },
    {
      name: "Python",
      Icon: PythonIcon,
      progress: 92,
      color: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.45)",
      leftPercent: 25.4,
      topPercent: 76.0,
      threshold: 0.25,
    },
    {
      name: "React",
      Icon: ReactIcon,
      progress: 94,
      color: "#61DAFB",
      glowColor: "rgba(97, 218, 251, 0.45)",
      leftPercent: 35.0,
      topPercent: 23.0,
      threshold: 0.35,
    },
    {
      name: "Next.js",
      Icon: NextJSIcon,
      progress: 95,
      color: "#E4E4E7",
      glowColor: "rgba(255, 255, 255, 0.45)",
      leftPercent: 45.0,
      topPercent: 49.0,
      threshold: 0.45,
    },
    {
      name: "Node.js",
      Icon: NodeJSIcon,
      progress: 90,
      color: "#339933",
      glowColor: "rgba(51, 153, 51, 0.45)",
      leftPercent: 54.4,
      topPercent: 77.0,
      threshold: 0.54,
    },
    {
      name: "PyTorch",
      Icon: PyTorchIcon,
      progress: 86,
      color: "#EE4C2C",
      glowColor: "rgba(238, 76, 44, 0.45)",
      leftPercent: 65.0,
      topPercent: 23.0,
      threshold: 0.65,
    },
    {
      name: "Golang",
      Icon: GolangIcon,
      progress: 84,
      color: "#00ADD8",
      glowColor: "rgba(0, 173, 216, 0.45)",
      leftPercent: 75.0,
      topPercent: 50.0,
      threshold: 0.75,
    },
    {
      name: "C++",
      Icon: CPPIcon,
      progress: 82,
      color: "#00599C",
      glowColor: "rgba(0, 89, 156, 0.45)",
      leftPercent: 85.0,
      topPercent: 77.0,
      threshold: 0.85,
    },
    {
      name: "Rust",
      Icon: RustIcon,
      progress: 80,
      color: "#F97316",
      glowColor: "rgba(249, 115, 22, 0.45)",
      leftPercent: 94.4,
      topPercent: 38.0,
      threshold: 0.94,
    },
  ];

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
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

          {/* Frosted Glass Gaussian Blur Filters: 2px blur per user specification */}
          <filter id="roadAtmosphereBlur" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
          </filter>

          <filter id="roadFrostBlur" x="-5%" y="-20%" width="110%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
          </filter>

          <filter id="roadLaserGlow" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="2" result="glow" />
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

        {/* SECTION 2 ROAD MILESTONE: Glass Portal Waypoint entering Section 2 from About */}
        <g transform="translate(2250, 500)">
          {/* Ambient Amber Glow Aura */}
          <circle r="34" fill="rgba(245, 158, 11, 0.18)" filter="url(#roadLaserGlow)" />
          {/* Frosted Glass Outer Ring */}
          <circle r="24" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2.5" fill="rgba(24, 24, 27, 0.75)" />
          {/* Inner Golden Specular Ring */}
          <circle r="16" stroke="rgba(245, 158, 11, 0.7)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          {/* Center Luminous Core */}
          <circle r="6" fill="#fbbf24" />
        </g>
      </svg>

      {/* Programming Language Road Waypoint Milestones */}
      {milestones.map((item) => (
        <RoadTechMilestone
          key={item.name}
          name={item.name}
          Icon={item.Icon}
          progress={item.progress}
          color={item.color}
          glowColor={item.glowColor}
          leftPercent={item.leftPercent}
          topPercent={item.topPercent}
          scrollProgress={progress}
          threshold={item.threshold}
          size="md"
        />
      ))}
    </div>
  );
}
