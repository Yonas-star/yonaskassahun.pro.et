"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import WaveSpinner from "./WaveSpinner";
import { useLanguage } from "@/context/LanguageContext";

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function Loader({ onComplete, duration = 3.2 }: LoaderProps) {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const waveCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const percentTextRef = useRef<HTMLSpanElement | null>(null);
  const statusTextRef = useRef<HTMLParagraphElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const name = language === "am" ? "ዮናስ ካሳሁን" : "Yonas Kassahun";
  const nameChars = name.split("");

  // 1. Kinetic Wave Animation on the Text Letters
  useEffect(() => {
    let animId: number;
    let startTime = performance.now();

    const validLetters = lettersRef.current.filter(Boolean) as HTMLElement[];

    gsap.set(validLetters, {
      y: 50,
      opacity: 0,
      rotateX: -60,
      transformOrigin: "50% 100%",
    });

    gsap.to(validLetters, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.1,
      ease: "back.out(1.8)",
      stagger: {
        each: 0.04,
        from: "start",
      },
    });

    const animateLetterWave = (time: number) => {
      const elapsed = (time - startTime) * 0.003;
      validLetters.forEach((el, index) => {
        if (!el) return;
        const waveY = Math.sin(elapsed * 2.5 + index * 0.45) * 5;
        const waveRotate = Math.cos(elapsed * 2 + index * 0.3) * 2;
        el.style.transform = `translateY(${waveY}px) rotate(${waveRotate}deg)`;
      });
      animId = requestAnimationFrame(animateLetterWave);
    };

    animId = requestAnimationFrame(animateLetterWave);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [name]);

  // 2. Horizontal Flowing Fluid Sine Wave Line
  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let waveAnimId: number;
    let step = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const renderWave = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      step += 0.04;
      const midY = height / 2;

      const drawSine = (
        freq: number,
        amp: number,
        speed: number,
        color: string,
        lineWidth: number
      ) => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 3) {
          const envelope = Math.sin((x / width) * Math.PI);
          const y =
            midY +
            Math.sin(x * freq + step * speed) * amp * envelope +
            Math.cos(x * freq * 0.5 - step * speed * 0.7) * (amp * 0.35) * envelope;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      };

      drawSine(0.015, 14, 1.4, "rgba(255, 255, 255, 0.85)", 1.75);
      drawSine(0.022, 10, -1.8, "rgba(161, 161, 170, 0.4)", 1.2);
      drawSine(0.01, 7, 2.2, "rgba(113, 113, 122, 0.3)", 1);

      waveAnimId = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => {
      cancelAnimationFrame(waveAnimId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // 3. Counter & Progress Timeline
  useEffect(() => {
    const counterObj = { val: 0 };
    const statusSteps =
      language === "am"
        ? [
            "የሞገድ ድግግሞሾችን በማስተካከል ላይ...",
            "የ-3D አካባቢን በማመሳሰል ላይ...",
            "እንቅስቃሴዎችን በማስተካከል ላይ...",
            "ፖርትፎሊዮ ዝግጁ ነው",
          ]
        : [
            "CALIBRATING WAVE FREQUENCIES...",
            "SYNCHRONIZING 3D ENVIRONMENT...",
            "TUNING KINETIC MOTION...",
            "PORTFOLIO READY",
          ];

    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        }
      },
    });

    tl.to(counterObj, {
      val: 100,
      duration: duration,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentVal = Math.floor(counterObj.val);
        setProgress(currentVal);
        if (percentTextRef.current) {
          percentTextRef.current.textContent = `${currentVal.toString().padStart(3, "0")}%`;
        }
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${currentVal}%`;
        }
        if (statusTextRef.current) {
          const stepIndex = Math.min(
            Math.floor((currentVal / 100) * statusSteps.length),
            statusSteps.length - 1
          );
          statusTextRef.current.textContent = statusSteps[stepIndex];
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [duration, onComplete, language]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,#18181b_0%,#09090b_65%,#030304_100%)] text-zinc-100 px-4 sm:px-6 py-6 sm:py-12 select-none overflow-hidden"
    >
      {/* Ambient background soft light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-white/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Header: Percentage */}
      <div className="w-full max-w-4xl flex items-center justify-end text-xs font-mono relative z-10">
        <span ref={percentTextRef} className="font-bold text-sm text-white tracking-wider">
          {progress.toString().padStart(3, "0")}%
        </span>
      </div>

      {/* Centerpiece: Big "Y" Wave Spinner + Animated Kinetic Name Yonas Kassahun */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-xl text-center px-2">
        {/* The Animated Large "Y" Wave Spinner (scales gracefully on mobile) */}
        <div className="mb-2 sm:mb-4 relative scale-[0.75] xs:scale-[0.85] sm:scale-100 transition-transform">
          <WaveSpinner size={210} color="#ffffff" />
        </div>

        {/* Animated Name: Yonas Kassahun */}
        <div className="perspective-[1000px] mb-2 sm:mb-3">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white flex justify-center items-center flex-wrap">
            {nameChars.map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  lettersRef.current[index] = el;
                }}
                className={`inline-block transition-transform duration-75 ${
                  char === " " ? "w-2 sm:w-4" : ""
                } hover:text-zinc-400`}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Horizontal Wave Canvas Strip */}
        <div className="w-full max-w-[240px] sm:max-w-md h-8 sm:h-12 my-1 sm:my-2 relative">
          <canvas
            ref={waveCanvasRef}
            className="w-full h-full block"
          />
        </div>

        {/* Dynamic Status Text */}
        <p
          ref={statusTextRef}
          className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase mt-1 sm:mt-2 h-4"
        >
          {language === "am" ? "የሞገድ ድግግሞሾችን በማስተካከል ላይ..." : "TUNING WAVE HARMONICS..."}
        </p>
      </div>

      {/* Bottom Progress Bar & Bold BUILD */}
      <div className="w-full max-w-[260px] sm:max-w-md flex flex-col items-center gap-2 sm:gap-3">
        <div className="w-full h-[3px] bg-zinc-800 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-300 transition-all duration-75 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex justify-center text-[10px] sm:text-xs font-mono">
          <span className="font-bold tracking-wider text-zinc-200">
            {language === "am" ? "እትም: 2026.09" : "BUILD: 2026.09"}
          </span>
        </div>
      </div>
    </div>
  );
}
