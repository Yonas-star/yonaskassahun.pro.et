"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cookie,
  ShieldCheck,
  Lock,
  ExternalLink,
  Mail,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookiePolicyClient() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,#18181b_0%,#09090b_55%,#030304_100%)] selection:bg-zinc-800 selection:text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background ambient glowing circles */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 via-rose-500/5 to-transparent blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-4xl mx-auto">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800/80">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 group shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:-translate-x-1 transition-transform" />
            <span>{t.cookiePolicy.backToHome}</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === "en" ? "አማርኛ" : "English"}</span>
            </button>
          </div>
        </header>

        {/* Hero Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Cookie className="w-3.5 h-3.5" />
            <span>{t.cookiePolicy.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.cookiePolicy.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
            {t.cookiePolicy.subtitle}
          </p>

          <div className="mt-4 text-xs font-mono text-zinc-500">
            {t.cookiePolicy.lastUpdated}
          </div>
        </motion.div>

        {/* Policy Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-8"
        >
          {/* Quick Notice Card */}
          <div className="rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 p-6 sm:p-8 shadow-xl">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {t.cookiePolicy.intro}
                </h2>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {t.cookiePolicy.howWeUseDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: What Are Cookies */}
          <section className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {t.cookiePolicy.whatAreCookiesTitle}
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {t.cookiePolicy.whatAreCookiesDesc}
            </p>
          </section>

          {/* Section 2: How We Use Storage */}
          <section className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              {t.cookiePolicy.howWeUseTitle}
            </h2>
            <div className="space-y-3 text-sm text-zinc-300 font-light leading-relaxed">
              <p>{t.cookiePolicy.howWeUseDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white block mb-0.5">
                      {language === "en" ? "Zero Ad Trackers" : "የማስታወቂያ መከታተያዎች የሉም"}
                    </span>
                    <span className="text-zinc-400">
                      {language === "en"
                        ? "No Google AdSense, Meta Pixel, or data brokering scripts."
                        : "ምንም አይነት ጎግል ማስታወቂያ ወይም የሜታ ፒክስል ስክሪፕቶች አልተጫኑም።"}
                    </span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white block mb-0.5">
                      {language === "en" ? "Local Browser Storage" : "የውስጥ ብሮውዘር ስቶሬጅ"}
                    </span>
                    <span className="text-zinc-400">
                      {language === "en"
                        ? "Preferences stay on your machine and are never sold or shared."
                        : "የእርስዎ ምርጫዎች በመሳሪያዎ ላይ ብቻ ይቀራሉ፤ አይጋሩም ወይም አይሸጡም።"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Detailed Storage Keys Table */}
          <section className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              {t.cookiePolicy.cookieTableTitle}
            </h2>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 font-mono">
                    <th className="py-3 px-3">
                      {t.cookiePolicy.cookieTableHeaders.name}
                    </th>
                    <th className="py-3 px-3">
                      {t.cookiePolicy.cookieTableHeaders.purpose}
                    </th>
                    <th className="py-3 px-3 whitespace-nowrap">
                      {t.cookiePolicy.cookieTableHeaders.duration}
                    </th>
                    <th className="py-3 px-3 whitespace-nowrap">
                      {t.cookiePolicy.cookieTableHeaders.type}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  {t.cookiePolicy.cookieItems.map((item) => (
                    <tr key={item.name} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="py-3.5 px-3 font-mono text-amber-300 font-medium">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-3 text-zinc-300 leading-relaxed font-light">
                        {item.purpose}
                      </td>
                      <td className="py-3.5 px-3 text-zinc-400 whitespace-nowrap font-mono">
                        {item.duration}
                      </td>
                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                          {item.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Third-Party Links */}
          <section className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              {t.cookiePolicy.thirdPartyTitle}
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {t.cookiePolicy.thirdPartyDesc}
            </p>
          </section>

          {/* Section 5: Managing Cookies */}
          <section className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {t.cookiePolicy.managingCookiesTitle}
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
              {t.cookiePolicy.managingCookiesDesc}
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {t.cookiePolicy.contactTitle}
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
              {t.cookiePolicy.contactDesc}
            </p>
            <a
              href="mailto:yonaskassahunyoka@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-md active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-900" />
              <span>yonaskassahunyoka@gmail.com</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </section>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span>{t.contact.footerCopyright}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-zinc-300 transition-colors underline underline-offset-2"
            >
              {t.cookiePolicy.backToHome}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
