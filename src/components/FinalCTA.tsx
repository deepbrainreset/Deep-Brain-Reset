import { useLanguage } from "../LanguageContext";
import { ArrowUpRight, PhoneCall, Calendar } from "lucide-react";

export default function FinalCTA() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "11 // FINAL CALL TO ACTION",
      title: "Ready to Reset Your Operation?",
      description: "We only accept a limited number of projects each quarter to ensure absolute focus and exceptional quality. Secure your discovery call today.",
      btnStart: "Start Your Project",
      btnSchedule: "Schedule A Discovery Call",
      footer: "ESTABLISHED OPERATING CHANNELS // SECURE SSL TRANSMISSION ACTIVE"
    },
    es: {
      badge: "11 // ACCIÓN DE CIERRE",
      title: "¿Listo para Reiniciar su Operación?",
      description: "Solo aceptamos un número limitado de proyectos cada trimestre para asegurar un enfoque absoluto y calidad excepcional. Reserve su llamada de diagnóstico hoy.",
      btnStart: "Iniciar Proyecto",
      btnSchedule: "Programar llamada",
      footer: "CANALES OPERATIVOS ESTABLECIDOS // TRANSMISIÓN SSL SEGURA ACTIVA"
    },
    de: {
      badge: "11 // ABSCHLIESSENDER AUFRUF",
      title: "Bereit für den operativen Reset?",
      description: "Wir nehmen pro Quartal nur eine begrenzte Anzahl von Projekten an, um absolute Fokussierung und außergewöhnliche Qualität zu garantieren. Sichern Sie sich noch heute Ihr Erstgespräch.",
      btnStart: "Projekt Starten",
      btnSchedule: "Erstgespräch Vereinbaren",
      footer: "ETABLIERTE BETRIEBSKANÄLE // SICHERE SSL-ÜBERTRAGUNG AKTIV"
    },
    fr: {
      badge: "11 // APPEL À L'ACTION FINAL",
      title: "Prêt à réinitialiser votre organisation ?",
      description: "Nous n'acceptons qu'un nombre très restreint de projets par trimestre afin de garantir une concentration absolue et une qualité exceptionnelle. Réservez votre entretien aujourd'hui.",
      btnStart: "Lancer un Projet",
      btnSchedule: "Planifier un Entretien",
      footer: "CANAUX OPÉRATIONNELS ÉTABLIS // TRANSMISSION SSL SÉCURISÉE ACTIVE"
    },
    it: {
      badge: "11 // INVITO ALL'AZIONE",
      title: "Pronti a ottimizzare i vostri flussi?",
      description: "Accettiamo un numero limitato di progetti a trimestre per garantire un focus totale e una qualità straordinaria. Prenotate oggi stesso il vostro colloquio conoscitivo.",
      btnStart: "Inizia Progetto",
      btnSchedule: "Prenota una Chiamata",
      footer: "CANALI OPERATIVI ATTIVI // TRASMISSIONE CRITTOGRAFATA SSL ATTIVA"
    }
  }[language];

  const handleScrollToContact = () => {
    const el = document.getElementById("consultant");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-studio-bg relative border-b border-studio-border overflow-hidden">
      <div className="absolute inset-0 bg-radial from-studio-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        
        <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
          {labels.badge}
        </span>
 
        <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight leading-none max-w-3xl mx-auto">
          {labels.title}
        </h2>
 
        <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed max-w-2xl mx-auto">
          {labels.description}
        </p>
 
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="cta-btn-start"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-8 py-4 premium-interactive font-mono text-xs uppercase tracking-widest text-center rounded-sm flex items-center justify-center space-x-2 cursor-pointer font-semibold"
          >
            <Calendar size={12} />
            <span>{labels.btnStart}</span>
          </button>

          <button
            id="cta-btn-schedule"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-8 py-4 premium-interactive font-mono text-xs uppercase tracking-widest text-center rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
          >
            <PhoneCall size={12} />
            <span>{labels.btnSchedule}</span>
          </button>
        </div>
 
        <div className="pt-8 text-[9px] font-mono text-studio-muted">
          {labels.footer}
        </div>
 
      </div>
    </section>
  );
}
