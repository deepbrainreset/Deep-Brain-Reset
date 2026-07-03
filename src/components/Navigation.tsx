import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage, Language } from "../LanguageContext";
import { translations } from "../translations";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isHeaderMobileLangOpen, setIsHeaderMobileLangOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const t = translations.navigation[language];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "work", label: t.featured },
    { id: "services", label: t.capabilities },
    { id: "process", label: t.system },
    { id: "philosophy", label: t.philosophy },
    { id: "consultant", label: t.consultant },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.header
        id="app-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-studio-bg/80 backdrop-blur-md border-b border-studio-border"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <button
            id="nav-logo"
            onClick={() => handleLinkClick("hero")}
            className="flex items-center space-x-3 group text-left cursor-pointer bg-transparent border-0"
          >
            <div className="w-8 h-8 flex items-center justify-center relative" style={{ transform: "translate3d(0,0,0)" }}>
              <img
                src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1783013226/Header_d7szhw.png"
                alt="Deep Brain Reset Logo"
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
            <div>
              <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-studio-primary">
                DEEP BRAIN RESET
              </span>
              <span className="hidden sm:block text-[9px] font-mono tracking-widest uppercase text-studio-muted mt-0.5">
                {language === "es" ? "Estudio de Tecnología Creativa" :
                 language === "de" ? "Studio für Kreative Technologie" :
                 language === "fr" ? "Studio de Technologie Créative" :
                 language === "it" ? "Studio di Tecnologia Creativa" :
                 "Creative Technology Studio"}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-[10px] font-mono uppercase tracking-[0.2em] font-semibold transition-colors duration-300 relative py-1 cursor-pointer bg-transparent border-0 ${
                  activeSection === item.id
                    ? "text-studio-primary"
                    : "text-studio-caption hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-studio-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Desktop Language Switcher Dropdown */}
            <div className="relative border-l border-studio-border pl-6 pr-2">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-studio-caption hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer bg-transparent border-0 py-1"
              >
                <span>{language === "en" ? "EN" : language === "es" ? "ES" : language === "de" ? "DE" : language === "fr" ? "FR" : "IT"}</span>
                <span className="text-[7px] text-studio-muted mt-0.5 transition-transform duration-300" style={{ transform: isLangDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={() => setIsLangDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 py-2 w-32 bg-studio-bg border border-studio-border rounded-sm shadow-xl z-50 flex flex-col"
                    >
                      {[
                        { code: "en", label: "English" },
                        { code: "es", label: "Español" },
                        { code: "de", label: "Deutsch" },
                        { code: "fr", label: "Français" },
                        { code: "it", label: "Italiano" }
                      ].map((langObj) => (
                        <button
                          key={langObj.code}
                          onClick={() => {
                            changeLanguage(langObj.code as Language);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`text-left text-[10px] font-mono uppercase tracking-[0.15em] px-4 py-2 transition-colors duration-300 cursor-pointer bg-transparent border-0 w-full hover:bg-studio-primary/5 hover:text-white ${
                            language === langObj.code 
                              ? "text-studio-primary font-semibold" 
                              : "text-studio-caption"
                          }`}
                        >
                          {langObj.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              id="nav-cta"
              onClick={() => handleLinkClick("contact")}
              className="px-5 py-2 premium-interactive text-[10px] font-mono uppercase tracking-[0.2em] rounded-sm flex items-center space-x-1 cursor-pointer bg-transparent"
            >
              <span>{t.cta}</span>
              <ArrowUpRight size={12} />
            </button>
          </nav>

          {/* Mobile Menu Button & Mobile Language Selector */}
          <div className="xl:hidden flex items-center space-x-3 relative">
            <div className="relative">
              <button
                id="mobile-header-lang-toggle"
                onClick={() => setIsHeaderMobileLangOpen(!isHeaderMobileLangOpen)}
                className="px-2.5 py-1.5 rounded-sm border border-white/[0.08] bg-white/[0.02] text-[10px] font-mono uppercase tracking-[0.15em] text-studio-caption hover:text-white hover:border-white/20 transition-all duration-300 flex items-center space-x-1 cursor-pointer"
              >
                <span>🌐 {language === "en" ? "EN" : language === "es" ? "ES" : language === "de" ? "DE" : language === "fr" ? "FR" : "IT"}</span>
                <span className="text-[6px] text-studio-muted transition-transform duration-300" style={{ transform: isHeaderMobileLangOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>

              <AnimatePresence>
                {isHeaderMobileLangOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={() => setIsHeaderMobileLangOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 py-1.5 w-32 bg-studio-bg border border-studio-border rounded-sm shadow-xl z-50 flex flex-col"
                    >
                      {[
                        { code: "en", label: "English" },
                        { code: "es", label: "Español" },
                        { code: "de", label: "Deutsch" },
                        { code: "fr", label: "Français" },
                        { code: "it", label: "Italiano" }
                      ].map((langObj) => (
                        <button
                          key={langObj.code}
                          onClick={() => {
                            changeLanguage(langObj.code as Language);
                            setIsHeaderMobileLangOpen(false);
                          }}
                          className={`text-left text-[10px] font-mono uppercase tracking-[0.12em] px-3.5 py-2 transition-colors duration-200 cursor-pointer bg-transparent border-0 w-full hover:bg-white/[0.03] hover:text-white ${
                            language === langObj.code 
                              ? "text-studio-primary font-semibold" 
                              : "text-studio-caption"
                          }`}
                        >
                          {langObj.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-studio-caption hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(15px)" }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-[9999] px-6 flex flex-col justify-between xl:hidden"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(8,8,10,0.92))",
              backdropFilter: "blur(24px) saturate(140%)",
              WebkitBackdropFilter: "blur(24px) saturate(140%)",
              paddingTop: "calc(env(safe-area-inset-top) + 1.5rem)",
              paddingBottom: "calc(env(safe-area-inset-bottom) + 2rem)"
            }}
          >
            {/* Top header with Branding & Close button */}
            <div className="flex justify-between items-center w-full">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-studio-primary">
                DEEP BRAIN RESET
              </span>
              
              <button
                id="mobile-menu-close"
                onClick={() => setIsOpen(false)}
                className="p-1 text-studio-caption hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Centered navigation items with stagger animations */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.025
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col justify-center items-center space-y-5 md:space-y-6 my-auto py-6"
            >
              {[
                { id: "work", label: t.featured },
                { id: "services", label: t.capabilities },
                { id: "process", label: t.system },
                { id: "philosophy", label: t.philosophy },
                { id: "consultant", label: t.consultant },
                { id: "contact", label: t.cta }
              ].map((item, index) => (
                <motion.button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.4,
                        ease: [0.22, 0.61, 0.36, 1]
                      }
                    }
                  }}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-center text-xl sm:text-2xl font-display font-light uppercase tracking-widest py-1 flex items-center justify-center text-studio-secondary hover:text-studio-primary hover:tracking-[0.18em] transition-all duration-300 bg-transparent border-0 cursor-pointer"
                >
                  <span>{item.label}</span>
                </motion.button>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 0.15, scale: 1 }
                }}
                className="w-16 h-[1px] bg-white my-3"
              />
            </motion.div>

            {/* Bottom section: CTA & Footer metadata */}
            <div className="flex flex-col items-center space-y-6 w-full max-w-sm mx-auto">
              <button
                id="mobile-nav-cta-large"
                onClick={() => handleLinkClick("contact")}
                className="w-full py-4 bg-studio-primary text-studio-bg font-mono text-xs uppercase tracking-[0.2em] text-center rounded-sm hover:bg-[#E5E5E5] transition-all duration-300 border-0 cursor-pointer premium-interactive font-semibold flex items-center justify-center space-x-1.5"
              >
                <span>{t.brief.toUpperCase()}</span>
                <ArrowUpRight size={14} className="mt-0.5" />
              </button>

              <div className="flex justify-center items-center text-[9px] font-mono text-studio-caption border-t border-studio-border/30 pt-4 w-full">
                <span>DEEP BRAIN RESET © 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

