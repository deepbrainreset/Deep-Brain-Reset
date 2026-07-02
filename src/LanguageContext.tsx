import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es" | "de" | "fr" | "it";

interface LanguageContextProps {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function getLangFromPath(pathname: string): Language {
  if (pathname.startsWith("/es")) return "es";
  if (pathname.startsWith("/de")) return "de";
  if (pathname.startsWith("/fr")) return "fr";
  if (pathname.startsWith("/it")) return "it";
  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => getLangFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setLanguage(getLangFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    const prefix = lang === "en" ? "" : `/${lang}`;
    
    // Maintain any hash (e.g. #work, #contact) during transition
    const hash = window.location.hash || "";
    const newPath = prefix === "" ? `/${hash}` : `${prefix}${hash}`;
    
    window.history.pushState(null, "", newPath);
    
    // Smooth scroll to top when switching languages to reset layout comfortably
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
