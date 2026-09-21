"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked in private browsing
    }
  }, []);

  const handleAccept = (choice: "accepted" | "essential") => {
    try {
      localStorage.setItem("cookie_consent", choice);
    } catch {
      // Ignore localStorage errors
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md z-50"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
        >
          <div className="relative rounded-2xl bg-zinc-950/90 backdrop-blur-2xl border border-zinc-800/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-zinc-100 overflow-hidden">
            {/* Subtle ambient gradient glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Header with icon and dismiss */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Cookie className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {t.cookieBanner.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => handleAccept("essential")}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800/60 transition-colors"
                aria-label="Dismiss cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
              {t.cookieBanner.description}{" "}
              <Link
                href="/cookie-policy"
                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors font-medium"
              >
                {t.cookieBanner.viewPolicy}
              </Link>
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={() => handleAccept("accepted")}
                className="flex-1 py-2 px-3.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-900" />
                <span>{t.cookieBanner.acceptAll}</span>
              </button>

              <button
                onClick={() => handleAccept("essential")}
                className="py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 active:scale-95 transition-all text-xs font-medium"
              >
                {t.cookieBanner.essentialOnly}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
