import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DemoreelSection from "./components/DemoreelSection";
import DemoreelModal from "./components/DemoreelModal";
import AboutPhilosophy from "./components/AboutPhilosophy";
import CreativeProcess from "./components/CreativeProcess";
import ServicesList from "./components/ServicesList";
import WebConceptOffer from "./components/WebConceptOffer";
import ServiceLandingModal from "./components/ServiceLandingModal";
import CaseStudies from "./components/CaseStudies";
import TechStack from "./components/TechStack";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BriefConsultant from "./components/BriefConsultant";
import ContactSection from "./components/ContactSection";
import { ArrowUp } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import AxonCaseStudy from "./components/AxonCaseStudy";
import AxonDriveCaseStudy from "./components/AxonDriveCaseStudy";
import EmiliaMarsicanoCaseStudy from "./components/EmiliaMarsicanoCaseStudy";
import SucupamCaseStudy from "./components/SucupamCaseStudy";
import ConLaTuyaContribuyenteCaseStudy from "./components/ConLaTuyaContribuyenteCaseStudy";
import MenuNoirCaseStudy from "./components/MenuNoirCaseStudy";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [activeServiceLanding, setActiveServiceLanding] = useState<string | null>(null);
  const [isDemoreelModalOpen, setIsDemoreelModalOpen] = useState(false);

  const { language } = useLanguage();
  const navT = translations.navigation[language];

  // Listen to window location for standalone landing page routes e.g. /es/spots-publicitarios-con-ia
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/^\/+/g, '');
      if (path.includes('spots-publicitarios-con-ia') || path.includes('ai-commercial-production')) {
        setActiveServiceLanding('spots-publicitarios-con-ia');
      } else if (path.includes('desarrollo-web') || path.includes('web-development')) {
        setActiveServiceLanding('desarrollo-web');
      } else if (path.includes('automatizacion-de-procesos') || path.includes('business-automation')) {
        setActiveServiceLanding('automatizacion-de-procesos');
      } else if (path.includes('renderizado-3d') || path.includes('3d-rendering')) {
        setActiveServiceLanding('renderizado-3d');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Dynamic document title and metadata updates for SEO & hreflangs
  useEffect(() => {
    const pageTitles = {
      en: "DEEP BRAIN RESET // Premium Creative Technology Studio",
      es: "DEEP BRAIN RESET // Estudio de Tecnología Creativa de Alta Gama",
      de: "DEEP BRAIN RESET // Studio für Kreative Technologie & High-End Engineering",
      fr: "DEEP BRAIN RESET // Studio de Technologie Créative de Prestige",
      it: "DEEP BRAIN RESET // Studio di Tecnologia Creativa d'Autore"
    };
    
    const pageDescriptions = {
      en: "An international Creative Technology Studio serving North America, Europe, and Latin America. We fuse cinematic creative direction, high-performance software engineering, and cognitive process automation.",
      es: "Estudio internacional de tecnología creativa para Norteamérica, Europa y Latinoamérica. Fusionamos dirección de arte cinematográfica, ingeniería de software de alto rendimiento y automatización cognitiva.",
      de: "Ein internationales Studio für kreative Technologie in Nordamerika, Europa und Lateinamerika. Wir vereinen filmische Kreativdirektion, Hochleistungs-Softwareentwicklung und kognitive Prozessautomatisierung.",
      fr: "Un studio de technologie créative d'envergure internationale au service de l'Amérique du Nord, de l'Europe et de l'Amérique latine. Nous allions direction artistique cinématographique, ingénierie logicielle haute performance et automatisation cognitive.",
      it: "Studio di tecnologia creativa internazionale che serve Nord America, Europa e America Latina. Fondiamo direzione artistica cinematografica, ingegneria del software ad alte prestazioni e automazione cognitiva dei processi."
    };

    document.title = pageTitles[language];
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDescriptions[language]);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const host = window.location.origin;
    const path = language === "en" ? "" : `/${language}`;
    canonical.setAttribute('href', `${host}${path}`);
  }, [language]);

  // Auto-scroll section highlighters using standard IntersectionObserver
  useEffect(() => {
    const sections = [
      "hero", 
      "work",
      "demoreel", 
      "services", 
      "process", 
      "philosophy", 
      "testimonials", 
      "consultant", 
      "contact"
    ];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.15, rootMargin: "-80px 0px -50% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Localized Footer Static Strings
  const footerStrings = {
    en: {
      desc: "Operating as a unified partner across creative advertising, high-performance software engineering, and cognitive process automation.",
      index: "INDEX",
      global: "GLOBAL CO-LATERALS",
      recency: "RECENCY RECORD",
      ascend: "ASCEND TO OVERVIEW",
      active: "SYSTEM ACTIVE",
      copyright: "DEEP BRAIN RESET © 2026. ALL SOFTWARE, FILMS AND TRADEMARKS PRESERVED.",
      compliance: "API COMPLIANCE",
      auditing: "STRATEGIC AUDITING"
    },
    es: {
      desc: "Operamos como un socio integrado de publicidad creativa, ingeniería de software de alta fidelidad y automatización de procesos.",
      index: "ÍNDICE",
      global: "COORDENADAS GLOBALES",
      recency: "REGISTRO DE ACTIVIDAD",
      ascend: "ASCENDER AL INICIO",
      active: "SISTEMA ACTIVO",
      copyright: "DEEP BRAIN RESET © 2026. TODOS LOS DERECHOS DE SOFTWARE Y FILMOGRAFÍA RESERVADOS.",
      compliance: "CONFORMIDAD DE API",
      auditing: "AUDITORÍA ESTRATÉGICA"
    },
    de: {
      desc: "Wir agieren als integrierter Partner für kreative Werbung, Hochleistungs-Softwareentwicklung und kognitive Prozessautomatisierung.",
      index: "INDEX",
      global: "GLOBALE KOORDINATEN",
      recency: "AKTIVITÄTSPROTOKOLL",
      ascend: "NACH OBEN SCROLLEN",
      active: "SYSTEM AKTIV",
      copyright: "DEEP BRAIN RESET © 2026. ALLE RECHTE AN SOFTWARE, FILMEN UND MARKEN VORBEHALTEN.",
      compliance: "API-KOMPATIBILITÄT",
      auditing: "STRATEGISCHES AUDIT"
    },
    fr: {
      desc: "Nous agissons en tant que partenaire unifié pour la création publicitaire, l'ingénierie logicielle haut de gamme et l'automatisation cognitive.",
      index: "INDEX",
      global: "COORDONNÉES GLOBALES",
      recency: "DOSSIER D'ACTIVITÉ",
      ascend: "REMONTER EN HAUT",
      active: "SYSTÈME ACTIF",
      copyright: "DEEP BRAIN RESET © 2026. TOUS DROITS SUR LES LOGICIELS, FILMS ET MARQUES PRÉSERVÉS.",
      compliance: "CONFORMITÉ API",
      auditing: "AUDIT STRATÉGIQUE"
    },
    it: {
      desc: "Operiamo in qualità di partner integrato per la pubblicità creativa, l'ingegneria del software ad alte prestazioni e l'automazione dei processi.",
      index: "INDICE",
      global: "COORDINATE GLOBALI",
      recency: "REGISTRO DI ATTIVITÀ",
      ascend: "RITORNA ALL'INIZIO",
      active: "SISTEMA ATTIVO",
      copyright: "DEEP BRAIN RESET © 2026. TUTTI I DIRITTI SU SOFTWARE, FILM E MARCHI RISERVATI.",
      compliance: "CONFORMITÀ API",
      auditing: "AUDITING STRATEGICO"
    }
  };

  const fT = footerStrings[language];

  return (
    <div id="studio-framework" className="min-h-screen bg-studio-bg text-studio-secondary relative font-sans selection:bg-studio-primary selection:text-studio-bg">
      
      {/* Floating Header */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Standalone Service Landing Page Modal */}
      <AnimatePresence>
        {activeServiceLanding && (
          <ServiceLandingModal
            serviceSlug={activeServiceLanding}
            onBack={() => setActiveServiceLanding(null)}
            onViewCaseStudy={(id) => {
              setActiveServiceLanding(null);
              setActiveCaseStudy(id);
            }}
            onOpenContact={() => {
              setActiveServiceLanding(null);
              handleNavigate("contact");
            }}
          />
        )}
      </AnimatePresence>

      {/* Case Study Fullscreen Overlays */}
      <AnimatePresence>
        {activeCaseStudy === "axon-revolution" && (
          <AxonCaseStudy onBack={() => setActiveCaseStudy(null)} />
        )}
        {activeCaseStudy === "axon-drive" && (
          <AxonDriveCaseStudy onBack={() => setActiveCaseStudy(null)} />
        )}
        {activeCaseStudy === "emilia-marsicano" && (
          <EmiliaMarsicanoCaseStudy 
            onBack={() => setActiveCaseStudy(null)}
            onNextProject={() => setActiveCaseStudy("sucupam")}
          />
        )}
        {activeCaseStudy === "sucupam" && (
          <SucupamCaseStudy 
            onBack={() => setActiveCaseStudy(null)}
            onNextProject={() => setActiveCaseStudy("con-la-tuya")}
          />
        )}
        {activeCaseStudy === "con-la-tuya" && (
          <ConLaTuyaContribuyenteCaseStudy 
            onBack={() => setActiveCaseStudy(null)}
            onNextProject={() => setActiveCaseStudy("menu-noir")}
          />
        )}
        {activeCaseStudy === "menu-noir" && (
          <MenuNoirCaseStudy 
            onBack={() => setActiveCaseStudy(null)}
            onNextProject={() => setActiveCaseStudy("axon-revolution")}
          />
        )}
      </AnimatePresence>

      {/* Cinematic Studio Body — Reorganized 01-10 Information Architecture */}
      <main id="studio-body">
        {/* 01. Studio Hero Screen */}
        <Hero 
          onExploreClick={() => handleNavigate("work")} 
          onWatchDemoreel={() => setIsDemoreelModalOpen(true)}
        />

        {/* 02. Selected Case Studies / Portfolio */}
        <CaseStudies onViewCaseStudy={(id) => setActiveCaseStudy(id)} />

        {/* 03. Dedicated Studio Demoreel */}
        <DemoreelSection 
          onWatchDemoreel={() => setIsDemoreelModalOpen(true)}
          onViewCaseStudy={(id) => setActiveCaseStudy(id)}
        />

        {/* 04. Capabilities / Services */}
        <ServicesList onSelectServiceLanding={(slug) => setActiveServiceLanding(slug)} />
        <WebConceptOffer />

        {/* 05. Unified Creative Methodology Stepper (Process) */}
        <CreativeProcess />

        {/* 06. Architectural Creative Philosophy (Studio Philosophy) */}
        <AboutPhilosophy />

        {/* 07. Technology Stack, Trust Factors & Client Testimonials */}
        <TechStack />
        <WhyChooseUs />
        <Testimonials />

        {/* 08. Interactive AI Consultant diagnostic layer */}
        <BriefConsultant />

        {/* 09. Contact and Calendar Booking + Diagnostic FAQ */}
        <ContactSection />
        <FAQ />
      </main>

      {/* Fullscreen Demoreel Modal */}
      <DemoreelModal 
        isOpen={isDemoreelModalOpen} 
        onClose={() => setIsDemoreelModalOpen(false)} 
        onViewCaseStudy={(id) => setActiveCaseStudy(id)}
      />

      {/* 10. Luxury Editorial Footer */}
      <footer id="studio-footer" className="bg-studio-panel border-t border-studio-border py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Brand Anchor */}
            <div className="space-y-4">
              <span className="text-xs font-display font-medium text-studio-primary tracking-widest uppercase block">
                DEEP BRAIN RESET
              </span>
              <p className="text-xs text-studio-caption font-light max-w-xs leading-relaxed">
                {fT.desc}
              </p>
            </div>

            {/* Column 2: Index */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-studio-caption tracking-widest uppercase block">
                {fT.index}
              </span>
              <div className="flex flex-col space-y-2 text-xs font-mono text-studio-caption">
                <button onClick={() => handleNavigate("work")} className="text-left hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">{navT.featured.toUpperCase()}</button>
                <button onClick={() => handleNavigate("services")} className="text-left hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">{navT.capabilities.toUpperCase()}</button>
                <button onClick={() => handleNavigate("process")} className="text-left hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">{navT.system.toUpperCase()}</button>
                <button onClick={() => handleNavigate("philosophy")} className="text-left hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">{navT.philosophy.toUpperCase()}</button>
                <button onClick={() => handleNavigate("consultant")} className="text-left hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">{navT.consultant.toUpperCase()}</button>
                <button onClick={() => handleNavigate("contact")} className="text-left hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">{navT.cta.toUpperCase()}</button>
              </div>
            </div>

            {/* Column 3: Controls & Recency */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-studio-caption tracking-widest uppercase block mb-3">
                  {fT.recency}
                </span>
                <span className="text-xs text-studio-primary font-mono bg-studio-bg border border-studio-border px-3 py-1.5 uppercase rounded-sm inline-block">
                  {fT.active} // 2026
                </span>
              </div>
              <button
                id="footer-back-to-top"
                onClick={() => handleNavigate("hero")}
                className="text-xs font-mono tracking-widest text-studio-caption hover:text-studio-primary transition-colors flex items-center space-x-1.5 pt-4 text-left cursor-pointer bg-transparent border-0"
              >
                <span>{fT.ascend}</span>
                <ArrowUp size={11} />
              </button>
            </div>

          </div>

          {/* Bottom Bar copyright & terms */}
          <div className="pt-12 border-t border-studio-border flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono text-studio-muted uppercase tracking-widest gap-4 sm:gap-0">
            <span>{fT.copyright}</span>
            <div className="flex space-x-6">
              <span className="hover:text-studio-caption transition-colors cursor-pointer">{fT.compliance}</span>
              <span className="hover:text-studio-caption transition-colors cursor-pointer">{fT.auditing}</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
