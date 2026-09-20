"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-12 flex flex-col justify-center relative z-20"
    >
      {/* Section Sub-header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="w-8 h-[1px] bg-cyan-500/60" />
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          01 // ABOUT & IDENTITY
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Soundless, Seamless Looping Video with Ultra-Thin Black Layer */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:col-span-5 relative group"
        >
          {/* Ambient Rim Glow behind video container */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-600/30 via-zinc-800/20 to-emerald-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

          {/* Main Video Box */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full flex items-center justify-center">
            {/* The HTML5 Background Video: Soundless, non-control continuous loop */}
            <video
              src="/animate_it.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Ultra-thin black layer - very subtle and nearly invisible */}
            <div className="absolute inset-0 bg-black/[0.08] pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Column: About Narrative & Capabilities */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400/90 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Beyond Ordinary Boundaries</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Crafting code, sculpted worlds, and moving visuals.
          </h2>

          <div className="space-y-3 text-zinc-300 font-light text-sm sm:text-base leading-relaxed mb-6">
            <p>
              Hello! I&apos;m <span className="text-white font-medium">Yonas Kassahun</span> — a multidisciplinary creator bridging the gap between rigorous software engineering, spatial 3D modeling, and cinematic video post-production.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm">
              My work revolves around transforming concepts into tangible interactive experiences. From building scalable web architectures to engineering real-time 3D assets and editing dynamic video pieces, I treat every project as an opportunity to blend visual art with technical mastery.
            </p>
          </div>

          {/* Three Focused Pillars with Staggered Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {[
              {
                title: "Development",
                desc: "Next.js, TypeScript, full-stack systems, clean component architectures.",
                color: "text-blue-400",
                delay: 0.2,
              },
              {
                title: "3D Modeling",
                desc: "Blender asset sculpting, procedural shaders, lighting, and WebGL integration.",
                color: "text-yellow-400",
                delay: 0.3,
              },
              {
                title: "Video Editing",
                desc: "Premiere Pro, DaVinci Resolve grading, After Effects kinetic motion graphics.",
                color: "text-purple-400",
                delay: 0.4,
              },
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: col.delay }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm"
              >
                <div className={`flex items-center gap-2 mb-1.5 ${col.color}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <h3 className="text-xs font-semibold text-white">{col.title}</h3>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">{col.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-lg active:scale-95"
            >
              View Featured Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-xs sm:text-sm font-medium active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
