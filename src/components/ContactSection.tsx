import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Send, CheckCircle2, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();
  const [formState, setFormState] = useState({
    businessName: "",
    email: "",
    scope: "commercials",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const strings = {
    en: {
      badge: "FINAL CONVERSION MODULE",
      title: "LET'S TALK ABOUT YOUR NEXT PROJECT",
      description: "Tell us what you need and we will evaluate the best way to turn it into a campaign, a platform, an automation, or a visual experience.",
      primaryCta: "SCHEDULE A MEETING",
      secondaryCta: "SEND INQUIRY",
      calendarSubtext: "Select a time directly on our executive Google Calendar",
      formTitle: "DIRECT INQUIRY FORM",
      labelBusiness: "Company / Brand Name",
      placeholderBusiness: "e.g. Solas Luxury Estates",
      labelEmail: "Email Coordinates",
      placeholderEmail: "name@company.com",
      labelScope: "Primary Need",
      scopes: [
        { id: "commercials", label: "Commercial Spots / AI Campaign" },
        { id: "web", label: "Web Development / Digital Platform" },
        { id: "automation", label: "Process Automation / AI Integration" },
        { id: "rendering", label: "3D Rendering / Visuals" },
        { id: "full", label: "Multi-Disciplinary Project" }
      ],
      labelNotes: "Project Context & Requirements",
      placeholderNotes: "Describe your goals, desired timeline, or key objectives...",
      btnSubmit: "SEND INQUIRY",
      btnSubmitting: "REGISTERING INQUIRY...",
      successTitle: "Inquiry Received",
      successDesc: "Thank you for reaching out. Our team will review your requirements and respond within 24 business hours.",
      guaranteePill: "24-Hour Executive Response Guarantee"
    },
    es: {
      badge: "MÓDULO DE CONVERSIÓN",
      title: "HABLEMOS DE TU PRÓXIMO PROYECTO",
      description: "Contanos qué necesitás y evaluaremos la mejor manera de convertirlo en una campaña, una plataforma, una automatización o una experiencia visual.",
      primaryCta: "AGENDAR UNA REUNIÓN",
      secondaryCta: "ENVIAR CONSULTA",
      calendarSubtext: "Elegí el día y horario directamente en nuestro Google Calendar",
      formTitle: "FORMULARIO DE CONSULTA DIRECTA",
      labelBusiness: "Empresa / Nombre de Marca",
      placeholderBusiness: "ej. Solas Luxury Estates",
      labelEmail: "Correo Electrónico",
      placeholderEmail: "nombre@empresa.com",
      labelScope: "Necesidad Principal",
      scopes: [
        { id: "commercials", label: "Spots Publicitarios / Campaña con IA" },
        { id: "web", label: "Desarrollo Web / Plataforma Digital" },
        { id: "automation", label: "Automatización de Procesos / Integración IA" },
        { id: "rendering", label: "Renderizado 3D / Visualización" },
        { id: "full", label: "Proyecto Multidisciplinario" }
      ],
      labelNotes: "Contexto del Proyecto y Requerimientos",
      placeholderNotes: "Contanos sobre tus objetivos, plazos o detalles clave...",
      btnSubmit: "ENVIAR CONSULTA",
      btnSubmitting: "ENVIANDO CONSULTA...",
      successTitle: "Consulta Recibida",
      successDesc: "Gracias por contactarnos. Nuestro equipo evaluará tus requerimientos y te responderá en menos de 24 horas hábiles.",
      guaranteePill: "Garantía de respuesta en menos de 24 horas"
    },
    de: {
      badge: "KONTAKTMODUL",
      title: "LASSEN SIE UNS ÜBER IHR PROJEKT SPRECHEN",
      description: "Beschreiben Sie Ihr Anliegen, und wir bewerten den besten Weg, es in eine Kampagne, eine Webplattform, eine Automatisierung oder ein 3D-Erlebnis zu verwandeln.",
      primaryCta: "TERMIN VEREINBAREN",
      secondaryCta: "ANFRAGE ABSENDEN",
      calendarSubtext: "Wählen Sie direkt einen Termin in unserem Google Calendar",
      formTitle: "DIREKTES ANFRAGEFORMULAR",
      labelBusiness: "Unternehmen / Markenname",
      placeholderBusiness: "z. B. Solas Luxury Estates",
      labelEmail: "E-Mail-Adresse",
      placeholderEmail: "name@firma.com",
      labelScope: "Hauptbereich",
      scopes: [
        { id: "commercials", label: "Werbefilme / KI-Kampagnen" },
        { id: "web", label: "Webentwicklung / Digitale Plattform" },
        { id: "automation", label: "Prozessautomatisierung / KI-Integration" },
        { id: "rendering", label: "3D-Rendering / Visualisierung" },
        { id: "full", label: "Multidisziplinäres Projekt" }
      ],
      labelNotes: "Projektkontext & Anforderungen",
      placeholderNotes: "Beschreiben Sie Ihre Ziele, den zeitlichen Rahmen oder Besonderheiten...",
      btnSubmit: "ANFRAGE ABSENDEN",
      btnSubmitting: "ANFRAGE WIRD GESENDET...",
      successTitle: "Anfrage Eingegangen",
      successDesc: "Vielen Dank. Unser Team wird Ihre Anforderungen prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.",
      guaranteePill: "Garantierte Antwort innerhalb von 24 Stunden"
    },
    fr: {
      badge: "MODULE DE CONVERSION",
      title: "PARLONS DE VOTRE PROCHAIN PROJET",
      description: "Décrivez-nous votre besoin et nous évaluerons la meilleure manière de le concrétiser en campagne, plateforme, automatisation ou expérience visuelle.",
      primaryCta: "RÉSERVER UN RENDEZ-VOUS",
      secondaryCta: "ENVOYER UNE DEMANDE",
      calendarSubtext: "Choisissez un créneau directement dans notre Google Calendar",
      formTitle: "FORMULAIRE DE CONTACT DIRECT",
      labelBusiness: "Nom de l'Entreprise / Marque",
      placeholderBusiness: "ex: Solas Luxury Estates",
      labelEmail: "Adresse e-mail",
      placeholderEmail: "nom@entreprise.com",
      labelScope: "Besoin Principal",
      scopes: [
        { id: "commercials", label: "Publicité / Campagne IA" },
        { id: "web", label: "Développement Web / Plateforme" },
        { id: "automation", label: "Automatisation & IA" },
        { id: "rendering", label: "Rendu 3D & Visualisation" },
        { id: "full", label: "Projet Multidisciplinaire" }
      ],
      labelNotes: "Contexte du Projet & Objectifs",
      placeholderNotes: "Présentez vos objectifs, contraintes ou calendrier souhaité...",
      btnSubmit: "ENVOYER LA DEMANDE",
      btnSubmitting: "ENVOI EN COURS...",
      successTitle: "Demande Bien Reçue",
      successDesc: "Merci. Notre équipe étudiera votre projet et vous répondra sous 24 heures ouvrées.",
      guaranteePill: "Réponse garantie sous 24 heures"
    },
    it: {
      badge: "MODULO DI CONVERSIONE",
      title: "PARLIAMO DEL TUO PROSSIMO PROGETTO",
      description: "Raccontaci le tue esigenze ed valuteremo il modo migliore per trasformarle in una campagna, una piattaforma, un'automazione o un'esperienza visiva.",
      primaryCta: "PRENOTA UN INCONTRO",
      secondaryCta: "INVIA UNA RICHIESTA",
      calendarSubtext: "Scegli un orario direttamente sul nostro Google Calendar",
      formTitle: "MODULO DI CONTATTO DIRETTO",
      labelBusiness: "Nome dell'Azienda / Brand",
      placeholderBusiness: "es. Solas Luxury Estates",
      labelEmail: "Indirizzo Email",
      placeholderEmail: "nome@azienda.com",
      labelScope: "Esigenza Principale",
      scopes: [
        { id: "commercials", label: "Spot Pubblicitari / Campagna IA" },
        { id: "web", label: "Sviluppo Web / Piattaforma Digitale" },
        { id: "automation", label: "Automazione Processi / Integrazione IA" },
        { id: "rendering", label: "Rendering 3D / Visualizzazione" },
        { id: "full", label: "Progetto Multidisciplinare" }
      ],
      labelNotes: "Contesto del Progetto e Obiettivi",
      placeholderNotes: "Descrivi i tuoi obiettivi, tempistiche o requisiti chiave...",
      btnSubmit: "INVIA RICHIESTA",
      btnSubmitting: "INVIO IN CORSO...",
      successTitle: "Richiesta Ricevuta",
      successDesc: "Grazie per averci contattato. Il nostro team analizzerà la tua richiesta e ti risponderà entro 24 ore lavorative.",
      guaranteePill: "Risposta garantita entro 24 ore"
    }
  }[language];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const calendarUrl = "https://calendar.app.google/KxqkRxocP421jXka7";

  return (
    <section id="contact" className="py-24 md:py-32 bg-studio-bg relative overflow-hidden border-t border-studio-border">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-widest text-studio-caption uppercase block">
            {strings.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight leading-tight">
            {strings.title}
          </h2>
          <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
            {strings.description}
          </p>

          <div className="pt-2 inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck size={14} />
            <span>{strings.guaranteePill}</span>
          </div>
        </div>

        {/* Dual Conversion Block: Calendar Primary + Direct Form Secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Calendar Highlight Card (Primary) */}
          <div className="lg:col-span-5 bg-studio-panel border border-studio-primary/40 p-8 md:p-10 rounded-sm relative group hover:border-studio-primary transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-sm bg-studio-bg border border-studio-border flex items-center justify-center text-studio-primary">
                <Calendar size={24} />
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block mb-1">
                  OPCIÓN RECOMENDADA
                </span>
                <h3 className="text-xl md:text-2xl font-display uppercase font-light text-studio-primary tracking-wide">
                  {strings.primaryCta}
                </h3>
                <p className="text-xs text-studio-secondary font-light mt-2 leading-relaxed">
                  {strings.calendarSubtext}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-studio-border/60">
              <a
                id="contact-calendar-cta"
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-studio-primary text-studio-bg hover:bg-studio-caption transition-all duration-300 font-mono text-xs uppercase tracking-widest font-semibold rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer text-center no-underline"
              >
                <span>{strings.primaryCta}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Form Block (Secondary) */}
          <div className="lg:col-span-7 bg-studio-panel border border-studio-border p-8 md:p-10 rounded-sm space-y-6">
            <div className="flex items-center space-x-3">
              <MessageSquare size={18} className="text-studio-primary" />
              <h3 className="text-base font-mono uppercase tracking-widest text-studio-primary font-medium">
                {strings.formTitle}
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-display uppercase text-studio-primary">
                    {strings.successTitle}
                  </h4>
                  <p className="text-xs text-studio-secondary font-light max-w-md mx-auto leading-relaxed">
                    {strings.successDesc}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-mono uppercase text-studio-caption hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0"
                  >
                    ← ENVIAR OTRA CONSULTA
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
                        {strings.labelBusiness}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.businessName}
                        onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                        placeholder={strings.placeholderBusiness}
                        className="w-full bg-studio-bg border border-studio-border focus:border-studio-primary text-xs text-studio-primary px-4 py-3 rounded-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
                        {strings.labelEmail}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={strings.placeholderEmail}
                        className="w-full bg-studio-bg border border-studio-border focus:border-studio-primary text-xs text-studio-primary px-4 py-3 rounded-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
                      {strings.labelScope}
                    </label>
                    <select
                      value={formState.scope}
                      onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                      className="w-full bg-studio-bg border border-studio-border focus:border-studio-primary text-xs text-studio-primary px-4 py-3 rounded-sm outline-none transition-colors"
                    >
                      {strings.scopes.map((s) => (
                        <option key={s.id} value={s.id} className="bg-studio-bg text-studio-primary">
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
                      {strings.labelNotes}
                    </label>
                    <textarea
                      rows={4}
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      placeholder={strings.placeholderNotes}
                      className="w-full bg-studio-bg border border-studio-border focus:border-studio-primary text-xs text-studio-primary p-4 rounded-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-form-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-transparent border border-studio-primary text-studio-primary hover:bg-studio-primary hover:text-studio-bg transition-all duration-300 font-mono text-xs uppercase tracking-widest rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={12} />
                    <span>{isSubmitting ? strings.btnSubmitting : strings.btnSubmit}</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
