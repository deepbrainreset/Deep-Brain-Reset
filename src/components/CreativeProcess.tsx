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

        {/* Elegant Horizontal Timeline (Scrollable container with custom styling) */}
        <div className="relative pt-6 pb-12 -mx-6 md:-mx-12 px-6 md:px-12 overflow-x-auto scrollbar-none select-none">
          {/* Timeline continuous axis rail line */}
          <div className="absolute top-[32px] left-0 w-[200%] h-[1px] bg-studio-border pointer-events-none z-0" />

          <div className="flex space-x-6 min-w-max relative z-10">
            {t.phases.map((phase, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  id={`pipeline-step-${phase.phase}`}
                  key={phase.phase}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="transition-all duration-500 ease-[0.16,1,0.3,1]"
                  style={{
                    width: isHovered ? "380px" : "180px"
                  }}
                >
                  <div className="relative pt-6 flex flex-col h-[320px] justify-between p-6 premium-interactive rounded-sm">
                    
                    {/* Floating connection node dot */}
                    <div className={`w-3 h-3 rounded-full border-2 absolute -top-[34px] left-6 transition-all duration-500 ${
                      isHovered ? "bg-studio-primary border-studio-primary scale-125" : "bg-studio-panel border-studio-border"
                    }`} />

                    {/* Step Header */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono text-studio-muted">
                          {phase.phase}
                        </span>
                        {isHovered && (
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-[8px] font-mono text-studio-primary px-1.5 py-0.5 border border-studio-primary/20 bg-studio-primary/5 uppercase rounded-sm"
                          >
                            {labels.activeScan}
                          </motion.span>
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-display uppercase tracking-wider text-studio-primary font-medium truncate">
                        {phase.title}
                      </h3>
                      <p className="text-[10px] font-mono text-studio-caption uppercase">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* Dynamic Expandable Body */}
                    <div className="relative h-28 overflow-hidden">
                      {!isHovered ? (
                        <p className="text-xs text-studio-caption font-light leading-relaxed line-clamp-3 pt-2">
                          {phase.description}
                        </p>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-3 pt-1"
                        >
                          <p className="text-[11px] text-studio-secondary font-light leading-relaxed">
                            {phase.description}
                          </p>
                          <div className="space-y-1 bg-studio-panel/50 p-2.5 rounded-sm border border-studio-border">
                            <span className="text-[8px] font-mono text-studio-caption uppercase tracking-wider block mb-1">
                              {labels.deliverables}
                            </span>
                            <div className="flex flex-col space-y-1">
                              {phase.outputs.map((out, i) => (
                                <div key={i} className="flex items-center space-x-1.5 text-[10px] text-studio-secondary font-light">
                                  <CheckSquare size={10} className="text-studio-caption shrink-0" />
                                  <span className="truncate">{out}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Expand micro indicator */}
                    <div className="pt-4 border-t border-studio-border flex justify-between items-center text-[9px] font-mono text-studio-muted">
                      <span>{isHovered ? labels.compiling : labels.hover}</span>
                      <span>/11</span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Scroll momentum clue */}
        <div className="flex justify-between items-center text-[10px] font-mono text-studio-muted pt-4 border-t border-studio-border">
          <span className="uppercase flex items-center space-x-1.5">
            <span>{labels.scroll}</span>
            <ArrowRight size={10} className="animate-pulse" />
          </span>
          <span className="uppercase hidden md:inline">
            {labels.lifecycle}
          </span>
        </div>

      </div>
    </section>
  );
}
