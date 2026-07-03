import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { CheckSquare, ArrowRight } from "lucide-react";

export default function CreativeProcess() {
  const { language } = useLanguage();
  const t = translations.process[language];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const labels = {
    en: {
      activeScan: "Active Scan",
      deliverables: "Deliverables:",
      compiling: "COMPILING",
      hover: "HOVER TO EXPAND",
      scroll: "Scroll horizontally to view complete methodology",
      lifecycle: "Business Discovery // Optimization Lifecycle"
    },
    es: {
      activeScan: "Escaneo Activo",
      deliverables: "Entregables:",
      compiling: "COMPILANDO",
      hover: "PASA EL MOUSE PARA VER MÁS",
      scroll: "Desliza horizontalmente para ver la metodología completa",
      lifecycle: "Descubrimiento de Negocio // Ciclo de Optimización"
    },
    de: {
      activeScan: "Aktiver Scan",
      deliverables: "Ergebnisse:",
      compiling: "KOMPILIEREN",
      hover: "BEWEGEN ZUM VERGRÖSSERN",
      scroll: "Horizontal scrollen für vollständige Methodologie",
      lifecycle: "Business Discovery // Optimierungs-Lebenszyklus"
    },
    fr: {
      activeScan: "Analyse Active",
      deliverables: "Livrables :",
      compiling: "COMPILATION",
      hover: "SURVOLER POUR ÉTENDRE",
      scroll: "Faites défiler horizontalement pour voir la méthodologie",
      lifecycle: "Découverte Métier // Cycle d'Optimisation"
    },
    it: {
      activeScan: "Scansione Attiva",
      deliverables: "Deliverable:",
      compiling: "COMPILAZIONE",
      hover: "PASSA SOPRA PER ESPANDERE",
      scroll: "Scorri orizzontalmente per vedere la metodologia completa",
      lifecycle: "Business Discovery // Ciclo di Ottimizzazione"
    }
  }[language];

  return (
    <section id="process" className="py-24 md:py-32 bg-studio-panel border-t border-b border-studio-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {t.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
              {t.title}
            </h2>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Responsive, non-truncating Grid of Pipeline Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 relative z-10">
          {t.phases.map((phase, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                id={`pipeline-step-${phase.phase}`}
                key={phase.phase}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full flex flex-col"
              >
                <div className="relative pt-6 flex flex-col h-full justify-between p-6 premium-interactive rounded-sm border border-studio-border bg-studio-panel/40 hover:border-studio-primary/40 transition-all duration-300 group">
                  
                  {/* Floating connection node dot */}
                  <div className={`w-3 h-3 rounded-full border-2 absolute -top-1.5 left-6 transition-all duration-300 ${
                    isHovered ? "bg-studio-primary border-studio-primary scale-110" : "bg-studio-panel border-studio-border"
                  }`} />

                  {/* Step Header */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-studio-muted">
                        {phase.phase}
                      </span>
                      <span className={`text-[8px] font-mono px-1.5 py-0.5 border uppercase rounded-sm transition-all duration-300 ${
                        isHovered 
                          ? "text-studio-primary border-studio-primary/20 bg-studio-primary/5" 
                          : "text-studio-caption border-studio-border bg-white/[0.01]"
                      }`}>
                        {isHovered ? labels.activeScan : labels.compiling}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-sm md:text-base font-display uppercase tracking-wider text-studio-primary font-medium leading-snug">
                        {phase.title}
                      </h3>
                      <p className="text-[10px] font-mono text-studio-caption uppercase mt-1">
                        {phase.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-studio-caption font-light leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Deliverables section - ALWAYS VISIBLE */}
                  <div className="mt-6 pt-4 border-t border-studio-border/50">
                    <div className="bg-studio-panel/50 p-3 rounded-sm border border-studio-border/30">
                      <span className="text-[8px] font-mono text-studio-caption uppercase tracking-wider block mb-2">
                        {labels.deliverables}
                      </span>
                      <div className="flex flex-col space-y-1.5">
                        {phase.outputs.map((out, i) => (
                          <div key={i} className="flex items-start space-x-1.5 text-[10px] text-studio-secondary font-light leading-snug">
                            <CheckSquare size={10} className="text-studio-caption mt-0.5 shrink-0" />
                            <span className="break-words">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand micro indicator */}
                  <div className="mt-4 pt-4 border-t border-studio-border/50 flex justify-between items-center text-[9px] font-mono text-studio-muted">
                    <span>{isHovered ? "PIPELINE // RUNNING" : "PIPELINE // ACTIVE"}</span>
                    <span>{(index + 1).toString().padStart(2, '0')}/04</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Visual progress track info */}
        <div className="flex justify-between items-center text-[10px] font-mono text-studio-muted pt-6 border-t border-studio-border mt-12">
          <span className="uppercase flex items-center space-x-1.5">
            <span>{labels.lifecycle}</span>
          </span>
          <span className="uppercase">
            VERIFIED_METHODOLOGY // SYSTEM_ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
}
