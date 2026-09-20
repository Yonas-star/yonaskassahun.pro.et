"use client";

import React, { useEffect, useState } from "react";
import { MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollHUDProps {
  progress: MotionValue<number>;
  onNavigate: (index: number) => void;
}

const SECTIONS = [
  { id: "hero", code: "00", name: "Hero", color: "#3b82f6" },
  { id: "about", code: "01", name: "About", color: "#06b6d4" },
  { id: "skill", code: "02", name: "Skill", color: "#eab308" },
  { id: "work", code: "03", name: "Work", color: "#a855f7" },
  { id: "contact", code: "04", name: "Contact", color: "#f43f5e" },
];

export default function HorizontalScrollHUD({
  progress,
  onNavigate,
}: HorizontalScrollHUDProps) {
  const [percent, setPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsub = progress.on("change", (latest) => {
      const p = Math.min(100, Math.max(0, Math.round(latest * 100)));
      setPercent(p);
      const idx = Math.min(
        SECTIONS.length - 1,
        Math.max(0, Math.round(latest * (SECTIONS.length - 1)))
      );
      setActiveIndex(idx);
    });
    return () => unsub();
  }, [progress]);

  const handlePrev = () => {
    if (activeIndex > 0) {
      onNavigate(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < SECTIONS.length - 1) {
      onNavigate(activeIndex + 1);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 select-none">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/80 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
        {/* Previous Section Arrow */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
          aria-label="Previous Section"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Section Pill Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {SECTIONS.map((sec, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={sec.id}
                onClick={() => onNavigate(i)}
                className={`relative px-2.5 sm:px-3 py-1 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-zinc-800/90 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                }`}
              >
                {/* Active Glowing Dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{
                    backgroundColor: isActive ? sec.color : "#71717a",
                    boxShadow: isActive ? `0 0 8px ${sec.color}` : "none",
                  }}
                />
                <span className="hidden sm:inline font-medium">{sec.name}</span>
                <span className="sm:hidden">{sec.code}</span>
              </button>
            );
          })}
        </div>

        {/* Next Section Arrow */}
        <button
          onClick={handleNext}
          disabled={activeIndex === SECTIONS.length - 1}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
          aria-label="Next Section"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Thin Divider */}
        <div className="w-[1px] h-4 bg-zinc-800 hidden sm:block mx-1" />

        {/* Numerical Scroll Percentage */}
        <div className="hidden sm:block text-[11px] font-mono text-zinc-400 font-semibold tracking-wider">
          {String(percent).padStart(2, "0")}%
        </div>
      </div>
    </div>
  );
}
