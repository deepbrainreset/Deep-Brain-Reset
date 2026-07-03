import { motion } from "motion/react";
import { PenTool, Cpu, Brain, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";

export default function AboutPhilosophy() {
  const { language } = useLanguage();
  const t = translations.philosophy[language];

  const values = [
    {
      id: "creative",
      title: t.creativeTitle,
      desc: t.creativeDesc,
      icon: <PenTool size={20} />,
      tag: t.creativeTag
    },
    {
      id: "engineering",
      title: t.engTitle,
      desc: t.engDesc,
      icon: <Cpu size={20} />,
      tag: t.engTag
    },
    {
      id: "ai",
      title: t.aiTitle,
      desc: t.aiDesc,
      icon: <Brain size={20} />,
      tag: t.aiTag
    }
  ];

  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 bg-studio-panel border-y border-studio-border relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase block">
              {t.sectionLabel}
            </span>
          </div>

          <div className="lg:col-span-9 max-w-4xl space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-studio-primary uppercase tracking-tight leading-tight">
              {t.titleMain} <br />
              <span className="text-studio-muted">{t.titleSub}</span>
            </h2>
            
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed max-w-3xl">
              {t.bodyText}
            </p>
          </div>
        </div>

        {/* Highlighted Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {values.map((v, i) => (
            <div
              id={`value-card-${v.id}`}
              key={v.id}
              className="group p-8 premium-interactive rounded-sm relative flex flex-col justify-between min-h-[340px] overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-radial from-studio-primary/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Minimalist icon box */}
                <div className="w-10 h-10 rounded-sm premium-group-child flex items-center justify-center">
                  {v.icon}
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-studio-muted uppercase tracking-widest block">
                    {v.tag}
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-light text-studio-primary uppercase tracking-wider">
                    {v.title}
                  </h3>
                </div>

                <p className="text-xs text-studio-secondary font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>

              {/* Card Footer marker */}
              <div className="pt-6 border-t border-studio-border relative z-10 flex justify-between items-center text-[9px] font-mono text-studio-muted">
                <span>
                  {i === 0 ? t.pillar01 : i === 1 ? t.pillar02 : t.pillar03}
                </span>
                <span className="transition-colors duration-300">
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        </div>
    </section>
  );
}

