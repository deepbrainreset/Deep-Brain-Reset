import { motion } from "motion/react";
import { ArrowUpRight, Film, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { getLocalizedFeaturedWorks } from "../portfolioTranslations";

export default function FeaturedWork({ onViewCaseStudy }: { onViewCaseStudy?: (id: string) => void }) {
  const { language } = useLanguage();
  const tSection = translations.featured[language];
  const localizedWorks = getLocalizedFeaturedWorks(language);

  // Map the correct icon based on the work ID
  const works = localizedWorks.map((work) => {
    let icon = <Globe size={18} />;
    if (work.id === "axon-revolution" || work.id === "axon-drive") {
      icon = <Film size={18} />;
    }
    return {
      ...work,
      icon
    };
  });

  const handleScrollToCases = () => {
    const el = document.getElementById("cases");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const labels = {
    en: {
      core: "OPERATIONAL CORE",
      viewCase: "View Case Study",
      systemFeed: "SYSTEM_FEED"
    },
    es: {
      core: "NÚCLEO OPERATIVO",
      viewCase: "Ver Caso de Estudio",
      systemFeed: "SISTEMA_REF"
    },
    de: {
      core: "OPERATIVER KERN",
      viewCase: "Fallstudie ansehen",
      systemFeed: "SYSTEM_FEED"
    },
    fr: {
      core: "CŒUR OPÉRATIONNEL",
      viewCase: "Voir l'Étude de Cas",
      systemFeed: "FLUX_SYSTEME"
    },
    it: {
      core: "NUCLEO OPERATIVO",
      viewCase: "Vedi Caso di Studio",
      systemFeed: "SYSTEM_FEED"
    }
  }[language];

  return (
    <section id="work" className="py-24 md:py-32 bg-studio-bg relative border-b border-studio-border">
      <div className="absolute inset-0 bg-radial from-studio-primary/[0.01] to-transparent pointer-events-none" />
      
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

        {/* Cinematic Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {works.map((work, i) => (
            <motion.div
              id={`featured-work-${work.id}`}
              key={work.id}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center premium-interactive rounded-sm p-8 md:p-12 relative overflow-hidden"
            >
              {/* Corner abstract shape or visual decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br ${work.visualBg} opacity-20 pointer-events-none z-0`} />
              
              {/* Left Side: Editorial Details */}
              <div className="lg:col-span-7 space-y-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 premium-group-child rounded-sm flex items-center justify-center">
                    {work.icon}
                  </div>
                  <span className="text-xs font-mono text-studio-caption uppercase tracking-wider">
                    {work.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-studio-muted uppercase tracking-widest block">
                    {work.client}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-light text-studio-primary uppercase tracking-tight">
                    {work.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed max-w-2xl">
                  {work.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-mono text-studio-muted uppercase tracking-widest block">
                    {labels.core}
                  </span>
                  <span className="text-xs font-mono text-studio-secondary block">
                    {work.tech}
                  </span>
                </div>

                <button
                  onClick={() => {
                    if (work.id === "axon-revolution") {
                      onViewCaseStudy?.("axon-revolution");
                    } else if (work.id === "axon-drive") {
                      onViewCaseStudy?.("axon-drive");
                    } else if (work.id === "emilia-marsicano") {
                      onViewCaseStudy?.("emilia-marsicano");
                    } else if (work.id === "sucupam") {
                      onViewCaseStudy?.("sucupam");
                    } else if (work.id === "con-la-tuya") {
                      onViewCaseStudy?.("con-la-tuya");
                    } else if (work.id === "menu-noir") {
                      onViewCaseStudy?.("menu-noir");
                    } else {
                      handleScrollToCases();
                    }
                  }}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 premium-interactive text-[10px] font-mono uppercase tracking-widest rounded-sm cursor-pointer"
                >
                  <span>{labels.viewCase}</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>

              {/* Right Side: Cover Artwork */}
              <div 
                onClick={() => {
                  if (work.id === "axon-revolution") {
                    onViewCaseStudy?.("axon-revolution");
                  } else if (work.id === "axon-drive") {
                    onViewCaseStudy?.("axon-drive");
                  } else if (work.id === "emilia-marsicano") {
                    onViewCaseStudy?.("emilia-marsicano");
                  } else if (work.id === "sucupam") {
                    onViewCaseStudy?.("sucupam");
                  } else if (work.id === "con-la-tuya") {
                    onViewCaseStudy?.("con-la-tuya");
                  } else if (work.id === "menu-noir") {
                    onViewCaseStudy?.("menu-noir");
                  } else {
                    handleScrollToCases();
                  }
                }}
                className="lg:col-span-5 h-[240px] md:h-[320px] bg-studio-bg border border-studio-border rounded-sm overflow-hidden relative group z-10 flex items-center justify-center cursor-pointer"
              >
                {work.id === "axon-drive" || work.id === "emilia-marsicano" || work.id === "sucupam" || work.id === "con-la-tuya" || work.id === "menu-noir" ? (
                  <>
                    {/* Dark blurred background layer behind the contained image to fill empty space elegantly */}
                    <img 
                      src={work.imageUrl} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-20 brightness-[0.12] transition-transform duration-700 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Centered contained image with reduced padding (margins) so it fills the frame confidently, with 1.04 baseline scale and 1.08 hover scale */}
                    <div className="absolute inset-0 p-1 md:p-2 flex items-center justify-center z-10 overflow-hidden">
                      <img 
                        src={work.imageUrl} 
                        alt={work.title}
                        className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] opacity-90 group-hover:opacity-100 transition-transform duration-[700ms] scale-[1.04] group-hover:scale-[1.08]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </>
                ) : (
                  <img 
                    src={work.imageUrl} 
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-85"
                    referrerPolicy="no-referrer"
                  />
                )}
                {!(work.id === "axon-drive" || work.id === "emilia-marsicano" || work.id === "sucupam" || work.id === "con-la-tuya" || work.id === "menu-noir") && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-15 pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-overlay opacity-10 group-hover:opacity-20 transition-opacity z-15 pointer-events-none" />
                  </>
                )}
                
                {/* Conceptual UI Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                  <div className="space-y-1 text-left">
                    <span className="text-[8px] font-mono text-studio-caption uppercase tracking-widest block bg-studio-bg/85 backdrop-blur-sm px-2 py-0.5 border border-studio-border/50 rounded-sm w-fit">
                      {labels.systemFeed} // 0{i + 1}
                    </span>
                    <span className="text-xs font-mono text-white uppercase tracking-wider block font-semibold drop-shadow">
                      {work.client}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-studio-bg/95 border border-studio-border flex items-center justify-center text-studio-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
