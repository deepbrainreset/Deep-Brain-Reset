import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { getLocalizedCaseStudies } from "../portfolioTranslations";
import { X, ArrowUpRight, Cpu, Layers, HelpCircle, TrendingUp, Calendar, BookOpen, PenTool, CheckCircle } from "lucide-react";

const caseStudyCovers: Record<string, string> = {
  "axon-revolution": "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png",
  "axon-drive": "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782887432/ChatGPT_Image_1_jul_2026_03_20_32_2_myptpi.png",
  "con-la-tuya": "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
  "menu-noir": "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
  "sucupam": "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
  "emilia-marsicano": "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png"
};

function getInitials(client: string): string {
  return client
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CaseStudyCard({ 
  cs, 
  onViewCaseStudy, 
  setSelectedCase,
  caseStudyCovers,
  getInitials,
  inspectLabel,
  index
}: { 
  key?: any;
  cs: CaseStudy; 
  onViewCaseStudy?: (id: string) => void;
  setSelectedCase: (cs: any) => void;
  caseStudyCovers: Record<string, string>;
  getInitials: (name: string) => string;
  inspectLabel: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={`case-card-${cs.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (cs.id === "axon-revolution") {
          onViewCaseStudy?.("axon-revolution");
        } else if (cs.id === "axon-drive") {
          onViewCaseStudy?.("axon-drive");
        } else if (cs.id === "emilia-marsicano") {
          onViewCaseStudy?.("emilia-marsicano");
        } else if (cs.id === "sucupam") {
          onViewCaseStudy?.("sucupam");
        } else if (cs.id === "con-la-tuya") {
          onViewCaseStudy?.("con-la-tuya");
        } else if (cs.id === "menu-noir") {
          onViewCaseStudy?.("menu-noir");
        } else {
          setSelectedCase(cs);
        }
      }}
      className="group bg-[#090909] border border-white/[0.08] hover:border-white/20 hover:bg-[#0c0c0e] rounded-[12px] cursor-pointer flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl animate-fade-in"
    >
      {/* Traveling Border Highlight SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-[12px]" fill="none">
        <motion.rect
          x="0.75"
          y="0.75"
          width="calc(100% - 1.5px)"
          height="calc(100% - 1.5px)"
          rx="12"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isHovered ? {
            pathLength: [0, 1, 1],
            opacity: [0, 1, 1, 0]
          } : {
            pathLength: 0,
            opacity: 0
          }}
          transition={isHovered ? {
            pathLength: { duration: 0.9, ease: "easeInOut" },
            opacity: { times: [0, 0.1, 0.85, 1], duration: 1.0, ease: "easeInOut" }
          } : {
            duration: 0.15
          }}
        />
      </svg>

      {/* 16:9 COVER IMAGE - visual focus */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#121212] border-b border-white/[0.04] rounded-t-[12px]">
        <CaseStudyImage
          src={caseStudyCovers[cs.id]}
          alt={cs.client}
          fallbackInitials={getInitials(cs.client)}
        />
      </div>

      {/* Text Section / Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* PROJECT CATEGORY & YEAR */}
          <div className="flex justify-between items-center text-[10px] font-mono text-studio-muted uppercase tracking-[0.15em] gap-4">
            <span className="flex-1 leading-snug">{cs.category}</span>
            <span className="shrink-0">{cs.year}</span>
          </div>

          {/* PROJECT NAME & Short project description */}
          <div className="space-y-2">
            <h3 className="text-base font-display font-medium text-studio-primary uppercase tracking-wider group-hover:text-white transition-colors duration-300">
              {cs.client}
            </h3>
            <p className="text-xs text-studio-secondary font-light leading-relaxed min-h-[36px]">
              {cs.subtitle}
            </p>
          </div>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cs.technologyUsed.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-mono text-studio-muted px-2 py-0.5 bg-white/[0.02] border border-white/[0.05] rounded-[4px] tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* VIEW CASE STUDY CTA */}
        <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center text-[10px] font-mono">
          <div className="flex items-center space-x-1.5 text-studio-caption group-hover:text-studio-primary transition-colors duration-300">
            <span className="uppercase tracking-[0.15em] text-[9px] font-semibold">{inspectLabel}</span>
            <ArrowUpRight size={12} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          <span className="text-studio-muted">
            /0{index + 1}
          </span>
        </div>
      </div>
    </div>
  );
}

function CaseStudyImage({ src, alt, fallbackInitials }: { src?: string; alt: string; fallbackInitials: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#121212] to-[#0a0a0c] flex flex-col items-center justify-center relative">
        <span className="text-xl font-mono tracking-widest text-studio-muted/30 font-light">{fallbackInitials}</span>
        <span className="text-[9px] font-mono tracking-[0.2em] text-studio-caption/40 mt-1 uppercase">COMING SOON</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Premium Skeleton Backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#121212] to-[#08080a] transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`} />
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-104 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-98"
        }`}
      />
    </div>
  );
}

interface CaseStudy {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  challenge: string;
  strategy: string;
  creativeProcess: string;
  execution: string;
  technologyUsed: string[];
  outcome: string;
  creativeInsight?: string;
  projectInfo: { label: string; value: string }[];
  demonstrates: string[];
  videoUrl?: string;
}

export default function CaseStudies({ onViewCaseStudy }: { onViewCaseStudy?: (id: string) => void }) {
  const { language } = useLanguage();
  const tSection = {
    ...translations.featured[language],
    inspect: translations.casesList[language].inspect
  };
  const localizedCaseStudies = getLocalizedCaseStudies(language);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const modalLabels = {
    en: {
      creativeInsight: "Creative Insight",
      challenge: "01 // Challenge",
      strategy: "02 // Strategy",
      creativeProcess: "03 // Creative Process",
      execution: "04 // Execution",
      projectInfo: "Project Information",
      demonstrations: "Core Demonstrations",
      techUsed: "05 // Technology Used",
      opStatus: "OPERATIONAL STATUS",
      opStatusText: "System built, integrated, and fully deployed on secure cloud services. Performance metrics tracked in real-time.",
      outcomeLabel: "06 // MEASURED OUTCOME & BUSINESS IMPACT",
      cta: "Discuss Similar System"
    },
    es: {
      creativeInsight: "Perspectiva Creativa",
      challenge: "01 // Desafío",
      strategy: "02 // Estrategia",
      creativeProcess: "03 // Proceso Creativo",
      execution: "04 // Ejecución",
      projectInfo: "Información del Proyecto",
      demonstrations: "Demostraciones Clave",
      techUsed: "05 // Tecnología Utilizada",
      opStatus: "ESTADO OPERATIVO",
      opStatusText: "Sistema construido, integrado y completamente desplegado en servicios en la nube seguros. Métricas de rendimiento seguidas en tiempo real.",
      outcomeLabel: "06 // RESULTADO MEDIDO E IMPACTO DE NEGOCIO",
      cta: "Discutir Sistema Similar"
    },
    de: {
      creativeInsight: "Kreative Einsicht",
      challenge: "01 // Herausforderung",
      strategy: "02 // Strategie",
      creativeProcess: "03 // Kreativer Prozess",
      execution: "04 // Ausführung",
      projectInfo: "Projekt-Informationen",
      demonstrations: "Kernbereiche",
      techUsed: "05 // Verwendete Technologie",
      opStatus: "OPERATIVER STATUS",
      opStatusText: "System entwickelt, integriert und vollständig in sicheren Cloud-Diensten bereitgestellt. Leistungsdaten werden in Echtzeit überwacht.",
      outcomeLabel: "06 // GEMESSENES ERGEBNIS & GESCHÄFTLICHER NUTZEN",
      cta: "Ähnliches System besprechen"
    },
    fr: {
      creativeInsight: "Vision Créative",
      challenge: "01 // Défi",
      strategy: "02 // Stratégie",
      creativeProcess: "03 // Processus Créatif",
      execution: "04 // Exécution",
      projectInfo: "Informations sur le projet",
      demonstrations: "Démonstrations Clés",
      techUsed: "05 // Technologies Utilisées",
      opStatus: "STATUT OPÉRATIONNEL",
      opStatusText: "Système construit, intégré et entièrement déployé sur des infrastructures cloud hautement sécurisées. Indicateurs de performance suivis en temps réel.",
      outcomeLabel: "06 // RÉSULTATS MESURÉS & IMPACT OPÉRATIONNEL",
      cta: "Échanger sur un système similaire"
    },
    it: {
      creativeInsight: "Intuizione Creativa",
      challenge: "01 // Sfida",
      strategy: "02 // Strategia",
      creativeProcess: "03 // Processo Creativo",
      execution: "04 // Esecuzione",
      projectInfo: "Informazioni sul Progetto",
      demonstrations: "Dimostrazioni Principali",
      techUsed: "05 // Tecnologie Utilizzate",
      opStatus: "STATO OPERATIVO",
      opStatusText: "Sistema costruito, integrato e interamente distribuito su infrastrutture cloud sicure. Metriche di prestazione tracciate in reale.",
      outcomeLabel: "06 // RISULTATO MISURATO E IMPATTO COMMERCIALE",
      cta: "Discuti un Sistema Simile"
    }
  }[language];

  return (
    <section id="work" className="py-24 md:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {tSection.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
              {tSection.title}
            </h2>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {tSection.description}
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
          {localizedCaseStudies.map((cs, index) => (
            <CaseStudyCard
              key={cs.id}
              cs={cs as CaseStudy}
              onViewCaseStudy={onViewCaseStudy}
              setSelectedCase={setSelectedCase}
              caseStudyCovers={caseStudyCovers}
              getInitials={getInitials}
              inspectLabel={tSection.inspect || "INSPECT"}
              index={index}
            />
          ))}
        </div>

        {/* Immersive Case Study Editorial Panel (AnimatePresence) */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              id="case-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-studio-bg/95 z-50 overflow-y-auto px-4 md:px-12 py-12 flex justify-center backdrop-blur-sm"
            >
              <motion.div
                id="case-modal-content"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-studio-panel border border-studio-border max-w-5xl w-full p-8 md:p-12 rounded-sm relative flex flex-col justify-between my-auto"
              >
                {/* Close Button */}
                <button
                  id="case-modal-close"
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 p-2 premium-interactive cursor-pointer rounded-full"
                  aria-label="Close case study"
                >
                  <X size={16} />
                </button>

                {/* Header */}
                <div className="border-b border-studio-border pb-8 mb-8 space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-studio-caption font-mono uppercase tracking-widest">
                    <span>{selectedCase.client}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{selectedCase.year}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-light text-studio-primary tracking-tight uppercase max-w-4xl">
                    {selectedCase.title}
                  </h3>
                  <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed max-w-2xl">
                    {selectedCase.subtitle}
                  </p>
                </div>

                {/* Embedded Video Feature if present */}
                {selectedCase.videoUrl && (
                  <div className="w-full aspect-video rounded-sm overflow-hidden border border-studio-border bg-studio-bg mb-8 relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedCase.videoUrl}
                      title={`${selectedCase.client} Film`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                )}

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* Left Column: The Narrative Sequence */}
                  <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6 lg:border-r lg:border-studio-border">
                    
                    {/* Creative Insight (rendered early to set context) */}
                    {selectedCase.creativeInsight && (
                      <div className="p-6 bg-studio-bg border border-studio-border rounded-sm space-y-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 text-[7px] font-mono text-studio-muted tracking-widest">
                          CREATIVE_INSIGHT_DECRYPTED
                        </div>
                        <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                          <BookOpen size={13} className="text-studio-primary" />
                          <span>{modalLabels.creativeInsight}</span>
                        </div>
                        <p className="text-xs md:text-sm text-studio-primary font-light leading-relaxed italic whitespace-pre-line">
                          "{selectedCase.creativeInsight}"
                        </p>
                      </div>
                    )}

                    {/* Challenge Block */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                        <HelpCircle size={14} className="text-studio-muted animate-pulse" />
                        <span>{modalLabels.challenge}</span>
                      </div>
                      <p className="text-sm text-studio-secondary font-light leading-relaxed">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    {/* Strategy Block */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                        <TrendingUp size={14} className="text-studio-muted" />
                        <span>{modalLabels.strategy}</span>
                      </div>
                      <p className="text-sm text-studio-secondary font-light leading-relaxed">
                        {selectedCase.strategy}
                      </p>
                    </div>

                    {/* Creative Process Block */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                        <PenTool size={14} className="text-studio-muted" />
                        <span>{modalLabels.creativeProcess}</span>
                      </div>
                      <p className="text-sm text-studio-secondary font-light leading-relaxed whitespace-pre-line">
                        {selectedCase.creativeProcess}
                      </p>
                    </div>

                    {/* Execution Block */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                        <Cpu size={14} className="text-studio-muted" />
                        <span>{modalLabels.execution}</span>
                      </div>
                      <p className="text-sm text-studio-secondary font-light leading-relaxed">
                        {selectedCase.execution}
                      </p>
                    </div>

                  </div>

                  {/* Right Column: Technology Used & Specs */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Project Specs Grid (if present) */}
                    {selectedCase.projectInfo && (
                      <div className="p-6 bg-studio-bg border border-studio-border rounded-sm space-y-4">
                        <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                          <BookOpen size={13} className="text-studio-muted" />
                          <span>{modalLabels.projectInfo}</span>
                        </div>
                        <div className="space-y-3 pt-2 divide-y divide-studio-border/30">
                          {selectedCase.projectInfo.map((info, i) => (
                            <div key={i} className="flex justify-between items-center text-xs pt-2 first:pt-0">
                              <span className="font-mono text-studio-muted text-[10px] uppercase">{info.label}</span>
                              <span className="text-studio-primary font-medium">{info.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* What This Project Demonstrates (if present) */}
                    {selectedCase.demonstrates && (
                      <div className="p-6 bg-studio-bg border border-studio-border rounded-sm space-y-4">
                        <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                          <CheckCircle size={13} className="text-studio-muted" />
                          <span>{modalLabels.demonstrations}</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2.5 pt-2">
                          {selectedCase.demonstrates.map((demo, i) => (
                            <div key={i} className="flex items-center space-x-2.5 text-xs text-studio-secondary font-light">
                              <div className="w-1.5 h-1.5 bg-studio-primary rounded-full" />
                              <span>{demo}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Used */}
                    <div className="p-6 bg-studio-bg border border-studio-border rounded-sm space-y-4">
                      <div className="flex items-center space-x-2 text-xs font-mono text-studio-caption uppercase tracking-widest">
                        <Layers size={13} className="text-studio-muted" />
                        <span>{modalLabels.techUsed}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedCase.technologyUsed.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-mono text-studio-primary px-2.5 py-1 bg-studio-panel border border-studio-border rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Specs Callout */}
                    <div className="p-6 bg-studio-panel border border-studio-border rounded-sm space-y-3">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-studio-caption">
                        {modalLabels.opStatus}
                      </h4>
                      <p className="text-xs text-studio-secondary font-light">
                        {modalLabels.opStatusText}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Bottom Impact Banner: Outcome */}
                <div className="p-6 bg-studio-bg border border-studio-border rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mt-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-studio-caption uppercase tracking-widest flex items-center space-x-1.5">
                      <CheckCircle size={10} className="text-emerald-500 animate-pulse" />
                      <span>{modalLabels.outcomeLabel}</span>
                    </span>
                    <p className="text-sm text-studio-primary font-medium">
                      {selectedCase.outcome}
                    </p>
                  </div>
                  <button
                    id="case-study-cta-brief"
                    onClick={() => {
                      setSelectedCase(null);
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-4 py-2 premium-interactive text-[10px] font-mono uppercase tracking-widest rounded-sm cursor-pointer whitespace-nowrap"
                  >
                    {modalLabels.cta}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
