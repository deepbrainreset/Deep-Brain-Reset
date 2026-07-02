import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Shield, Zap, RefreshCw, Layers } from "lucide-react";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const data = translations.whyUs[language];

  const icons = [
    <Layers size={16} />,
    <Shield size={16} />,
    <Zap size={16} />,
    <RefreshCw size={16} />
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-studio-panel border-b border-studio-border relative">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {data.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight leading-tight">
              {data.title}
            </h2>
          </div>

          <div className="lg:col-span-8 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Dynamic List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.cards.map((card, i) => (
            <div
              id={`why-us-card-${i}`}
              key={card.title}
              className="group p-8 premium-interactive rounded-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm premium-group-child flex items-center justify-center">
                  {icons[i] || icons[0]}
                </div>
                <h3 className="text-sm font-display font-medium text-studio-primary uppercase tracking-wider">
                  {card.title}
                </h3>
                <p className="text-xs text-studio-secondary font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-studio-border/30 text-[9px] font-mono text-studio-muted">
                {language === "en" && `OPERATIONAL_PRINCIPLE_0${i + 1} // SECURE`}
                {language === "es" && `PRINCIPIO_OPERATIVO_0${i + 1} // SEGURO`}
                {language === "de" && `BETRIEBSPRINZIP_0${i + 1} // GESICHERT`}
                {language === "fr" && `PRINCIPE_OPÉRATIONNEL_0${i + 1} // SÉCURISÉ`}
                {language === "it" && `PRINCIPIO_OPERATIVO_0${i + 1} // SICURO`}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
