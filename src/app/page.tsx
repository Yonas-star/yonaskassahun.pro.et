"use client";

import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroStatue from "@/components/HeroStatue";
import { RotateCcw, ArrowRight, Code2, Layers, Cpu, ExternalLink } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const handleRestartLoader = () => {
    setShowLoader(true);
    setLoading(true);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,#18181b_0%,#09090b_55%,#030304_100%)] text-zinc-100 flex flex-col relative overflow-hidden selection:bg-zinc-800 selection:text-white">
      {/* Top subtle ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-white/10 via-zinc-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Wave Loader & Animated Name */}
      {showLoader && (
        <Loader
          duration={3.2}
          onComplete={() => {
            setLoading(false);
            setTimeout(() => setShowLoader(false), 1200);
          }}
        />
      )}

      {/* Navigation Bar (About, Skill, Work, Contact) */}
      {!loading && <Navbar />}

      {/* Hero Section: Centered 3D Statue with Massive Name Behind & Vibrant Blue/Yellow Glows */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 text-center relative z-10 overflow-hidden">
        {/* Left Screen: Luminous Blue Circular Gradient */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 -left-20 sm:-left-36 w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full pointer-events-none -z-10 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.40) 0%, rgba(96, 165, 250, 0.20) 45%, rgba(59, 130, 246, 0) 70%)",
            filter: "blur(60px)",
            animationDuration: "6s",
          }}
        />

        {/* Right Screen: Luminous Yellow Circular Gradient */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 -right-20 sm:-right-36 w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full pointer-events-none -z-10 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(234, 179, 8, 0.38) 0%, rgba(250, 204, 21, 0.18) 45%, rgba(234, 179, 8, 0) 70%)",
            filter: "blur(60px)",
            animationDuration: "6s",
            animationDelay: "3s",
          }}
        />

        {/* Centered 3D Statue with Massive Layered Name BEHIND */}
        <div className="w-full max-w-5xl my-2 relative">
          <HeroStatue />
        </div>

        {/* Descriptions directly below the statue */}
        <div className="max-w-2xl mx-auto mt-4 px-4 z-20">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            Creative Developer & 3D Interactive Craftsman
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Architecting immersive digital spaces, procedural WebGL shaders, and kinetic visual identities at the intersection of engineering and art.
          </p>

          {/* Action Controls (Responsive flex: full width on mobile, inline on desktop) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center w-full max-w-md mx-auto">
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 transition-all text-sm font-semibold shadow-lg shadow-white/5 active:scale-95"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleRestartLoader}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all text-sm font-medium shadow-sm active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Replay Wave Loader</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto w-full border-t border-zinc-800/80">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
          01 // OVERVIEW
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          About
        </h2>
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/80 shadow-2xl text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
          <p className="mb-4">
            Hello! I&apos;m Yonas, a creative developer passionate about bringing web interfaces to life with interactive 3D physics, shader dynamics, and kinetic typography.
          </p>
          <p>
            I architect digital spaces where high-performance engineering meets fluid visual elegance.
          </p>
        </div>
      </section>

      {/* Skill Section */}
      <section id="skill" className="py-24 px-6 max-w-4xl mx-auto w-full border-t border-zinc-800/80">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
          02 // CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Skill
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/80 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-white text-zinc-950 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white mb-1">3D & WebGL</h3>
            <p className="text-sm text-zinc-400 font-light">Three.js, React Three Fiber, GLSL Shaders, Spline, Blender workflows.</p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/80 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-white text-zinc-950 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white mb-1">Motion & Physics</h3>
            <p className="text-sm text-zinc-400 font-light">GSAP timeline choreography, Framer Motion, Lenis smooth scrolling.</p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/80 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-white text-zinc-950 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white mb-1">Full-Stack Architecture</h3>
            <p className="text-sm text-zinc-400 font-light">Next.js 14, React 18, TypeScript, Tailwind CSS, high-DPI Canvas engineering.</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 max-w-4xl mx-auto w-full border-t border-zinc-800/80">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
          03 // PORTFOLIO
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/80 shadow-xl hover:border-zinc-700 transition-all">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white">Kinetic 3D Wave Space</h3>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-sm text-zinc-400 font-light mb-4">
              Real-time interactive harmonic wave synthesis and fluid particle physics.
            </p>
            <div className="flex gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-zinc-800">THREE.JS</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800">GSAP</span>
            </div>
          </div>

          <div className="group bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/80 shadow-xl hover:border-zinc-700 transition-all">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white">Interactive Model Showcase</h3>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-sm text-zinc-400 font-light mb-4">
              3D asset viewer with dynamic lighting, responsive camera staging, and custom shaders.
            </p>
            <div className="flex gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-zinc-800">WEBGL</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800">R3F</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto w-full border-t border-zinc-800/80">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
          04 // CONNECT
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Contact
        </h2>
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/80 shadow-2xl text-center">
          <p className="text-zinc-400 max-w-md mx-auto mb-6 font-light">
            Have an ambitious 3D project or want to collaborate on an interactive experience? Let&apos;s build something extraordinary together.
          </p>
          <a
            href="mailto:contact@yonas.dev"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all shadow-lg active:scale-95 text-sm"
          >
            <span>Say Hello</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Minimal Footer Info */}
      <footer className="w-full py-8 px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono border-t border-zinc-800/80 mt-12 bg-zinc-950/40 backdrop-blur-sm">
        <span>© {new Date().getFullYear()} Yonas Kassahun</span>
        <span>NEXT.JS + THREE.JS + GSAP</span>
      </footer>
    </main>
  );
}
