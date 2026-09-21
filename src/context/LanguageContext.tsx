"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationData, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language;
      if (savedLang === "en" || savedLang === "am") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
        if (savedLang === "am") {
          document.documentElement.classList.add("lang-am");
        } else {
          document.documentElement.classList.remove("lang-am");
        }
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
      if (lang === "am") {
        document.documentElement.classList.add("lang-am");
      } else {
        document.documentElement.classList.remove("lang-am");
      }
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "am" : "en";
    setLanguage(nextLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
