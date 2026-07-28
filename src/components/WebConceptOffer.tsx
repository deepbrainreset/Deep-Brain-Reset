import { motion } from "motion/react";
import { ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function WebConceptOffer() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "WEBSITES WITHOUT THE BLIND LEAP",
      title: "See a tailored visual direction before deciding.",
      description: "For qualified web projects, after a short briefing, Deep Brain Reset can deliver a preliminary visual concept for your homepage within 24 business hours or sooner — with no obligation to purchase.",
      disclaimer: "This is an initial visual proposal, not a finished functional website. The 24-hour timeframe begins once the essential project information has been received and is subject to studio availability.",
      cta: "Request your initial web concept",
      benefits: [
        { label: "24-Hour Delivery", desc: "Rapid turn-around on initial homepage visual directions" },
        { label: "Zero Obligation", desc: "Review the proposal before making any financial commitment" },
        { label: "Bespoke Direction", desc: "Tailored directly to your brand positioning and conversion goals" }
      ]
    },
    es: {
      badge: "SITIOS WEB SIN DAR UN SALTO A CIEGAS",
      title: "Visualizá una propuesta estética a medida antes de decidir.",
      description: "Para proyectos web calificados, tras un breve briefing, Deep Brain Reset puede entregar un concepto visual preliminar para tu página de inicio en 24 horas hábiles o menos, sin obligación de compra.",
      disclaimer: "Se trata de una propuesta visual inicial, no de un sitio web funcional finalizado. El plazo de 24 horas comienza una vez recibida la información esencial del proyecto y está sujeto a disponibilidad del estudio.",
      cta: "Solicitar concepto web inicial",
      benefits: [
        { label: "Entrega en 24h", desc: "Propuesta estética ágil para la página de inicio" },
        { label: "Sin Compromiso", desc: "Evaluá la propuesta antes de realizar cualquier inversión" },
        { label: "Dirección a Medida", desc: "Diseño alineado a tu posicionamiento de marca y objetivos" }
      ]
    },
    de: {
      badge: "WEBSITES OHNE BLINDEN SPRUNG",
      title: "Sehen Sie eine maßgeschneiderte visuelle Richtung, bevor Sie sich entscheiden.",
      description: "Für qualifizierte Webprojekte kann Deep Brain Reset nach einem kurzen Briefing innerhalb von 24 Werktagen oder schneller ein vorläufiges visuelles Konzept für Ihre Homepage liefern – unverbindlich.",
      disclaimer: "Dies ist ein erster visueller Entwurf, keine fertiggestellte funktionale Website. Die 24-Stunden-Frist beginnt nach Erhalt der wesentlichen Projektinformationen und unterliegt der Verfügbarkeit des Studios.",
      cta: "Erstes Webkonzept anfordern",
      benefits: [
        { label: "Lieferung in 24h", desc: "Zügiges visuelles Konzept für Ihre Startseite" },
        { label: "Unverbindlich", desc: "Prüfen Sie den Entwurf vor einer finanziellen Zusage" },
        { label: "Maßgeschneidert", desc: "Exakt auf Ihre Marke und Konversionsziele abgestimmt" }
      ]
    },
    fr: {
      badge: "DES SITES WEB SANS SAUT DANS L'INCONNU",
      title: "Découvrez une orientation visuelle sur mesure avant de décider.",
      description: "Pour les projets web qualifiés, après un court briefing, Deep Brain Reset peut fournir un concept visuel préliminaire pour votre page d'accueil dans les 24 heures ouvrées ou moins — sans obligation d'achat.",
      disclaimer: "Il s'agit d'une proposition visuelle initiale, non d'un site web fonctionnel finalisé. Le délai de 24 heures commence dès réception des informations essentielles du projet et est soumis à la disponibilité du studio.",
      cta: "Demander votre concept web initial",
      benefits: [
        { label: "Livraison 24h", desc: "Direction visuelle rapide pour votre page d'accueil" },
        { label: "Sans Engagement", desc: "Examinez la proposition avant tout engagement financier" },
        { label: "Direction Sur Mesure", desc: "Alignée sur votre positionnement et vos objectifs" }
      ]
    },
    it: {
      badge: "SITI WEB SENZA SALTI NEL BUIO",
      title: "Vedi una direzione visiva su misura prima di decidere.",
      description: "Per progetti web qualificati, dopo un breve briefing, Deep Brain Reset può consegnare un concetto visivo preliminare per la tua homepage entro 24 ore lavorative o prima — senza alcun obbligo d'acquisto.",
      disclaimer: "Si tratta di una proposta visiva iniziale, non di un sito web funzionale completato. Il termine di 24 ore decorre dal ricevimento delle informazioni essenziali del progetto ed è soggetto a disponibilità dello studio.",
      cta: "Richiedi il tuo concetto web iniziale",
      benefits: [
        { label: "Consegna in 24h", desc: "Bozza visiva rapida per la tua homepage" },
        { label: "Senza Obbligo", desc: "Valuta la proposta prima di qualsiasi impegno economico" },
        { label: "Direzione Su Misura", desc: "In linea con il posizionamento del brand e gli obiettivi" }
      ]
    }
  }[language];

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="concept-offer" className="py-20 md:py-28 bg-black/60 border-t border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-20" />
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="p-8 md:p-12 lg:p-14 bg-white/[0.02] border border-white/10 rounded-sm backdrop-blur-md relative overflow-hidden">
          {/* Subtle Accent Glow Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
                <Sparkles size={11} className="text-emerald-400" />
                <span>{content.badge}</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-display font-light text-white uppercase tracking-tight leading-snug">
                {content.title}
              </h2>

              <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed">
                {content.description}
              </p>

              <div className="p-4 bg-black/50 border border-white/10 rounded-sm text-xs font-mono text-zinc-400 leading-relaxed space-y-1">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold uppercase text-[10px] tracking-wider mb-1">
                  <Clock size={12} className="text-emerald-400" />
                  <span>Important Note</span>
                </div>
                <p>{content.disclaimer}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleScrollToContact}
                  className="px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold rounded-sm inline-flex items-center gap-3 cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.12)]"
                >
                  <span>{content.cta}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Pillars / Benefits Column */}
            <div className="lg:col-span-5 space-y-4">
              {content.benefits.map((item, idx) => (
                <div key={idx} className="p-5 bg-black/40 border border-white/10 rounded-sm space-y-1 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-white uppercase tracking-wider">
                    <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
