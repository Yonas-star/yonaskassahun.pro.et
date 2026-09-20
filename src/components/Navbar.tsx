"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Sparkles, Briefcase, Mail, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  className?: string;
  onNavigate?: (index: number) => void;
  activeIndex?: number;
}

export default function Navbar({
  className = "",
  onNavigate,
  activeIndex,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about", icon: User, index: 1 },
    { label: "Skill", href: "#skill", icon: Sparkles, index: 2 },
    { label: "Work", href: "#work", icon: Briefcase, index: 3 },
    { label: "Contact", href: "#contact", icon: Mail, index: 4 },
  ];

  const sectionIndexMap: Record<number, string> = {
    0: "hero",
    1: "about",
    2: "skill",
    3: "work",
    4: "contact",
  };

  const currentActiveSection =
    activeIndex !== undefined
      ? sectionIndexMap[activeIndex] || "about"
      : internalActiveSection;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (activeIndex === undefined) {
        const sections = ["about", "skill", "work", "contact"];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.left <= window.innerWidth / 2 && rect.right >= window.innerWidth / 2) {
              setInternalActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const handleNavClick = (href: string, itemIndex?: number) => {
    setMobileMenuOpen(false);
    if (onNavigate && itemIndex !== undefined) {
      onNavigate(itemIndex);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 py-4 transition-all duration-300 ${className}`}
    >
      <nav
        className={`w-full max-w-4xl flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 shadow-[0_6px_25px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero", 0);
          }}
          className="flex items-center gap-2.5 text-white font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-xl bg-white text-zinc-950 flex items-center justify-center font-mono text-sm font-black shadow-sm">
            Y
          </div>
          <span className="hidden sm:inline-block text-sm font-semibold tracking-wide text-zinc-200">
            YONAS
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-950/60 p-1 rounded-xl border border-zinc-800/60">
          {navItems.map((item) => {
            const isActive = currentActiveSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.index);
                }}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-zinc-800/90 rounded-lg shadow-sm border border-zinc-700/60 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Action / Contact CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact", 4);
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-all active:scale-95 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-zinc-900/95 backdrop-blur-2xl rounded-2xl p-4 border border-zinc-800 shadow-2xl flex flex-col gap-2 md:hidden z-50 text-white"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentActiveSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.index);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white text-zinc-950 font-semibold"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="pt-2 border-t border-zinc-800 mt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact", 4);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-zinc-950 text-sm font-medium shadow-md active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
