"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto w-full relative z-20 border-t border-zinc-800/80">
      {/* Section Sub-header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-[1px] bg-zinc-700" />
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          01 // ABOUT & IDENTITY
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Video Framed with Shaded Black Layer */}
        <div className="lg:col-span-5 relative group">
          {/* Ambient Rim Glow behind video container */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/25 via-zinc-800/20 to-yellow-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

          {/* Main Video Box */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full flex items-center justify-center">
            {/* The HTML5 Background Video */}
            <video
              ref={videoRef}
              src="/animate_it.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            />

            {/* Shaded Black Layer Over Video */}
            {/* Base uniform black scrim (45% opacity) */}
            <div className="absolute inset-0 bg-black/45 transition-colors duration-500 pointer-events-none" />

            {/* Atmospheric black vignette and directional darkening gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-zinc-950/65 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/50 pointer-events-none" />

            {/* Top HUD: Status Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>MOTION REEL</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
                2026 // VISUALS
              </span>
            </div>

            {/* Bottom HUD: Overlay Controls & Watermark */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
              <div>
                <p className="text-xs font-medium text-white tracking-wide">YONAS KASSAHUN</p>
                <p className="text-[10px] font-mono text-zinc-400">Creative Production</p>
              </div>

              <div className="flex items-center gap-2">
                {/* Play / Pause Toggle */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-zinc-300 hover:text-white hover:bg-black/90 flex items-center justify-center transition-all active:scale-90"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                </button>

                {/* Sound Toggle */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-zinc-300 hover:text-white hover:bg-black/90 flex items-center justify-center transition-all active:scale-90"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: About Narrative & Capabilities */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400/90 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Beyond Ordinary Boundaries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Crafting code, sculpted worlds, and moving visuals.
          </h2>

          <div className="space-y-4 text-zinc-300 font-light text-base sm:text-lg leading-relaxed mb-8">
            <p>
              Hello! I&apos;m <span className="text-white font-medium">Yonas Kassahun</span> — a multidisciplinary creator bridging the gap between rigorous software engineering, spatial 3D modeling, and cinematic video post-production.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              My work revolves around transforming concepts into tangible interactive experiences. From building scalable web architectures to engineering real-time 3D assets and editing dynamic video pieces, I treat every project as an opportunity to blend visual art with technical mastery.
            </p>
          </div>

          {/* Three Focused Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1.5 text-blue-400">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="text-sm font-semibold text-white">Development</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Next.js, TypeScript, full-stack systems, clean component architectures.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1.5 text-yellow-400">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="text-sm font-semibold text-white">3D Modeling</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Blender asset sculpting, procedural shaders, lighting, and WebGL integration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1.5 text-purple-400">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="text-sm font-semibold text-white">Video Editing</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Premiere Pro, DaVinci Resolve grading, After Effects kinetic motion graphics.
              </p>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-lg active:scale-95"
            >
              View Featured Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-medium active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
