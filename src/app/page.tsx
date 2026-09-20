"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroStatue from "@/components/HeroStatue";
import AboutSection from "@/components/AboutSection";
import HorizontalRoad from "@/components/HorizontalRoad";
import VerticalRoad from "@/components/VerticalRoad";
import {
  ArrowRight,
  Code2,
  Brain,
  Video,
  ExternalLink,
  Sparkles,
  Send,
} from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop viewports (< 768px = vertical scroll, >= 768px = horizontal scroll)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Desktop & Mobile Scroll Progress State
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);

  // Mobile Vertical Scrolling State
  const mobileSmoothProgress = smoothProgress;

  useEffect(() => {
    if (!isMobile) {
      const unsub = smoothProgress.on("change", (val) => {
        const idx = Math.min(4, Math.max(0, Math.round(val * 4)));
        setActiveIndex(idx);
      });
      return () => unsub();
    }
  }, [isMobile, smoothProgress]);

  // Navigation handler
  const handleNavigate = (index: number) => {
    if (isMobile) {
      const sectionIds = ["hero", "about", "skill", "work", "contact"];
      const target = document.getElementById(sectionIds[index]);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (!desktopContainerRef.current) return;
      const totalScroll =
        desktopContainerRef.current.scrollHeight - window.innerHeight;
      const targetY = (index / 4) * totalScroll;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  // Reusable Skill Cards Data
  const skillCards = [
    {
      icon: Code2,
      color: "text-blue-400",
      border: "hover:border-blue-500/50",
      title: "Full-Stack Dev",
      desc: "TypeScript, Next.js 14, React, Node.js, Python, PostgreSQL, REST/GraphQL APIs, and high-performance cloud architectures.",
      tags: ["TYPESCRIPT", "NEXT.JS", "NODE.JS", "PYTHON", "POSTGRESQL"],
      delay: 0.1,
    },
    {
      icon: Brain,
      color: "text-yellow-400",
      border: "hover:border-yellow-500/50",
      title: "AI Learner",
      desc: "Deep learning fundamentals, PyTorch, LLM orchestration, autonomous AI agents, prompt engineering, and machine learning pipelines.",
      tags: ["PYTORCH", "LLMS", "AI AGENTS", "MACHINE LEARNING"],
      delay: 0.25,
    },
    {
      icon: Video,
      color: "text-purple-400",
      border: "hover:border-purple-500/50",
      title: "Video Editing",
      desc: "Adobe Premiere Pro, After Effects kinetic motion graphics, DaVinci Resolve color grading, dynamic pacing and audio mastering.",
      tags: ["PREMIERE", "AFTER EFFECTS", "DAVINCI"],
      delay: 0.4,
    },
  ];

  // Reusable Work Projects Data
  const workProjects = [
    {
      title: "Full-Stack Kinetic Cloud",
      desc: "High-performance full-stack web application with real-time WebSocket state streaming, responsive frontend architecture, and fluid physics.",
      tags: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "TAILWIND"],
      badge: "FULL-STACK",
      color: "from-blue-500/20 to-purple-500/10",
      delay: 0.1,
    },
    {
      title: "Autonomous AI Agent Suite",
      desc: "Multi-agent cognitive orchestration pipeline integrating LLM reasoning chains, streaming telemetry, and dynamic data visualization.",
      tags: ["PYTHON", "PYTORCH", "LLM AGENTS", "FASTAPI"],
      badge: "AI LEARNING",
      color: "from-yellow-500/20 to-purple-500/10",
      delay: 0.25,
    },
  ];

  return (
    <>
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

      {/* Navigation Bar with Support for Both Scrolling Modes */}
      <Navbar
        onNavigate={handleNavigate}
        activeIndex={isMobile ? undefined : activeIndex}
      />

      {/* ============================================================ */}
      {/* 1. MOBILE VERTICAL SCROLL LAYOUT                             */}
      {/* ============================================================ */}
      {isMobile ? (
        <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,#18181b_0%,#09090b_55%,#030304_100%)] text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white">
          {/* Top subtle ambient spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-white/10 via-zinc-500/5 to-transparent blur-3xl pointer-events-none" />

          {/* Vertical Wide, Rounded Zigzag Glassmorphic Road (No circles, correspondent laser) */}
          <VerticalRoad progress={mobileSmoothProgress} />

          {/* Section 0: Hero */}
          <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center relative z-10 overflow-hidden"
          >
            {/* Luminous Blue and Yellow ambient circles */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 -translate-y-1/2 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none -z-10 animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.40) 0%, rgba(96, 165, 250, 0.20) 45%, rgba(59, 130, 246, 0) 70%)",
                filter: "blur(50px)",
                animationDuration: "6s",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 -translate-y-1/2 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none -z-10 animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(234, 179, 8, 0.38) 0%, rgba(250, 204, 21, 0.18) 45%, rgba(234, 179, 8, 0) 70%)",
                filter: "blur(50px)",
                animationDuration: "6s",
                animationDelay: "3s",
              }}
            />

            <HeroStatue />

            <div className="max-w-xl mx-auto mt-2 px-2 z-20">
              <h2 className="text-xl font-bold tracking-tight text-white mb-2">
                I am a Full-Stack Developer, AI Learner & Video Editor
              </h2>
              <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                Architecting scalable full-stack web applications, exploring intelligent AI models, and crafting dynamic cinematic video edits.
              </p>

              <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
                <a
                  href="#work"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all shadow-lg active:scale-95 text-xs"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all text-xs font-medium shadow-sm active:scale-95"
                >
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </section>

          {/* Section 1: About */}
          <section id="about" className="py-20 px-4 relative z-10 overflow-hidden">
            <AboutSection />
          </section>

          {/* Section 2: Skill */}
          <section id="skill" className="py-20 px-4 relative z-10 overflow-hidden">
            <div className="max-w-xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-8 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-6 h-[1px] bg-yellow-500/60" />
                  <span className="text-[11px] font-mono text-yellow-400 uppercase tracking-widest">
                    02 // CAPABILITIES
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Specialized Skills
                </h2>
              </motion.div>

              <div className="flex flex-col gap-4">
                {skillCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: card.delay }}
                      viewport={{ once: false }}
                      className="bg-zinc-900/60 backdrop-blur-2xl rounded-2xl p-5 border border-zinc-800/80 shadow-xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-zinc-950 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                        {card.desc}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-800/60 text-[9px] font-mono text-zinc-400">
                        {card.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 3: Work */}
          <section id="work" className="py-20 px-4 relative z-10 overflow-hidden">
            <div className="max-w-xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-8 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-6 h-[1px] bg-purple-500/60" />
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                    03 // FEATURED WORK
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Recent Creations
                </h2>
              </motion.div>

              <div className="flex flex-col gap-4">
                {workProjects.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    viewport={{ once: false }}
                    className="bg-zinc-900/60 backdrop-blur-2xl rounded-2xl p-5 border border-zinc-800/80 shadow-xl"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex gap-1.5 text-[10px] font-mono text-zinc-400">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Contact & Footer */}
          <section id="contact" className="py-20 px-4 relative z-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className="max-w-xl mx-auto w-full"
            >
              <div className="rounded-2xl bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/80 p-6 shadow-2xl text-center">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-rose-400 mb-3 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20">
                  <Sparkles className="w-3 h-3" />
                  <span>04 // LET&apos;S BUILD TOGETHER</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white mb-3">
                  Have a vision in mind?
                </h2>
                <p className="text-zinc-400 text-xs font-light mb-6 leading-relaxed">
                  Whether you need scalable full-stack development, intelligent AI integrations, or cinematic video post-production — let&apos;s create something extraordinary together.
                </p>
                <a
                  href="mailto:contact@yonas.dev"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-xs shadow-lg active:scale-95 mb-6"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send a Message</span>
                </a>
                <div className="pt-4 border-t border-zinc-800/60 text-[10px] text-zinc-500 font-mono flex flex-col gap-1">
                  <span>© {new Date().getFullYear()} YONAS KASSAHUN</span>
                  <span>FULL-STACK DEVELOPER • AI LEARNER • VIDEO EDITOR</span>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      ) : (
        /* ============================================================ */
        /* 2. DESKTOP HORIZONTAL SCROLL LAYOUT                          */
        /* ============================================================ */
        <div
          ref={desktopContainerRef}
          className="relative h-[500vh] bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,#18181b_0%,#09090b_55%,#030304_100%)] text-zinc-100 selection:bg-zinc-800 selection:text-white"
        >
          {/* Pinned Viewport Container for Horizontal Scrolling */}
          <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
            {/* Top subtle ambient spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-white/10 via-zinc-500/5 to-transparent blur-3xl pointer-events-none z-10" />

            {/* Horizontal Track holding all 5 sections & the wide, rounded zigzag glassmorphism road */}
            <motion.div style={{ x }} className="flex h-full w-[500vw] relative">
              {/* THE WIDE, ROUNDED ZIGZAG GLASSMORPHIC ROAD */}
              <HorizontalRoad progress={smoothProgress} />

              {/* SECTION 0: HERO */}
              <section
                id="hero"
                className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-4 sm:px-8 pt-14 pb-2 sm:pt-16 sm:pb-3 text-center relative z-10 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-12 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] rounded-full pointer-events-none -z-10 animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59, 130, 246, 0.40) 0%, rgba(96, 165, 250, 0.20) 45%, rgba(59, 130, 246, 0) 70%)",
                    filter: "blur(60px)",
                    animationDuration: "6s",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-12 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] rounded-full pointer-events-none -z-10 animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(234, 179, 8, 0.38) 0%, rgba(250, 204, 21, 0.18) 45%, rgba(234, 179, 8, 0) 70%)",
                    filter: "blur(60px)",
                    animationDuration: "6s",
                    animationDelay: "3s",
                  }}
                />

                <HeroStatue />

                <div className="max-w-2xl mx-auto mt-0.5 sm:mt-1 px-4 z-20">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white mb-1">
                    I am a Full-Stack Developer, AI Learner & Video Editor
                  </h2>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-3 max-w-lg mx-auto">
                    Architecting scalable full-stack web applications, exploring intelligent AI models, and crafting dynamic cinematic video edits.
                  </p>

                  <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center w-full max-w-md mx-auto">
                    <button
                      onClick={() => handleNavigate(3)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all shadow-lg active:scale-95 text-xs sm:text-sm"
                    >
                      <span>Explore Work</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleNavigate(4)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all text-xs sm:text-sm font-medium shadow-sm active:scale-95"
                    >
                      <span>Get In Touch</span>
                    </button>
                  </div>
                </div>
              </section>

              {/* SECTION 1: ABOUT */}
              <section
                id="about"
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-8 relative z-10 overflow-hidden"
              >
                <AboutSection />
              </section>

              {/* SECTION 2: SKILL */}
              <section
                id="skill"
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 relative z-10 overflow-hidden"
              >
                <div className="max-w-5xl mx-auto w-full">
                  <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-8 text-center sm:text-left"
                  >
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                      <span className="w-8 h-[1px] bg-yellow-500/60" />
                      <span className="text-xs font-mono text-yellow-400 uppercase tracking-widest">
                        02 // CAPABILITIES & CRAFT
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                      Specialized Skills
                    </h2>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {skillCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 40, scale: 0.94 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: false, amount: 0.3 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className={`group bg-zinc-900/60 backdrop-blur-2xl rounded-2xl p-6 sm:p-7 border border-zinc-800/80 shadow-2xl transition-all duration-300 ${card.border}`}
                        >
                          <div className="w-12 h-12 rounded-xl bg-white text-zinc-950 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            {card.desc}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-400">
                            {card.tags.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/40"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* SECTION 3: WORK */}
              <section
                id="work"
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 relative z-10 overflow-hidden"
              >
                <div className="max-w-5xl mx-auto w-full">
                  <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-8 text-center sm:text-left"
                  >
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                      <span className="w-8 h-[1px] bg-purple-500/60" />
                      <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                        03 // FEATURED WORK
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                      Recent Creations
                    </h2>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workProjects.map((item) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 40, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: false, amount: 0.3 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="group relative bg-zinc-900/60 backdrop-blur-2xl rounded-2xl p-7 border border-zinc-800/80 shadow-2xl overflow-hidden hover:border-zinc-700 transition-all"
                      >
                        <div
                          className={`absolute -inset-1 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity -z-10`}
                        />
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">
                            {item.badge}
                          </span>
                          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                          {item.desc}
                        </p>
                        <div className="flex gap-2 text-xs font-mono text-zinc-400">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* SECTION 4: CONTACT */}
              <section
                id="contact"
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 relative z-10 overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="max-w-3xl mx-auto w-full"
                >
                  <div className="relative rounded-3xl bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/80 p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-center overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-rose-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-2xl opacity-60 -z-10" />

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 mb-4 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>04 // LET&apos;S BUILD TOGETHER</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                      Have a vision in mind?
                    </h2>

                    <p className="text-zinc-400 text-sm sm:text-base font-light max-w-lg mx-auto mb-8 leading-relaxed">
                      Whether you need scalable full-stack development, intelligent AI integrations, or cinematic video post-production — let&apos;s create something extraordinary together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                      <a
                        href="mailto:contact@yonas.dev"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all shadow-lg active:scale-95 text-sm"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send a Message</span>
                      </a>

                      <button
                        onClick={() => handleNavigate(0)}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium active:scale-95"
                      >
                        Back to Start
                      </button>
                    </div>

                    <div className="mt-10 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
                      <span>© {new Date().getFullYear()} YONAS KASSAHUN</span>
                      <span>FULL-STACK DEVELOPER • AI LEARNER • VIDEO EDITOR</span>
                    </div>
                  </div>
                </motion.div>
              </section>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
