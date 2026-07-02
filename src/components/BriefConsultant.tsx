import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Cpu, RefreshCw, Clipboard, Check, HelpCircle, FileText, ArrowRight } from "lucide-react";
import { InquiryInput } from "../types";

interface BriefConsultantProps {
  onBriefGenerated: (briefText: string, companyInfo: { name: string; industry: string; bottleneck: string }) => void;
}

export default function BriefConsultant({ onBriefGenerated }: BriefConsultantProps) {
  const { language } = useLanguage();
  const data = translations.aiConsultant[language];

  const [inputs, setInputs] = useState<InquiryInput>({
    businessName: "",
    industry: "",
    bottleneck: "",
    additionalNotes: ""
  });

  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [resultBrief, setResultBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Simulated diagnostic sequences to entertain and reinforce studio capability
  const loadingSequences = {
    en: [
      "[SYSTEM] Initiating Deep Brain Diagnostics engine...",
      "[STRATEGY] Evaluating target industry operating parameters...",
      "[ENGINEERING] Auditing logical bottlenecks and schema friction...",
      "[NARRATIVE] Storyboarding abstract creative themes...",
      "[SYSTEM] Structuring custom background microservice architectures...",
      "[STRATEGY] Syncing digital strategy with executive growth targets...",
      "[SYSTEM] Finalizing proposal compilation and delivery brief..."
    ],
    es: [
      "[SISTEMA] Iniciando motor de diagnóstico Deep Brain...",
      "[ESTRATEGIA] Evaluando parámetros operativos de la industria...",
      "[INGENIERÍA] Auditando cuellos de botella lógicos y fricción de esquemas...",
      "[NARRATIVO] Creando guion gráfico para temas creativos...",
      "[SISTEMA] Estructurando microservicios personalizados...",
      "[ESTRATEGIA] Sincronizando estrategia digital con metas ejecutivas...",
      "[SISTEMA] Finalizando compilación de propuesta y pliego técnico..."
    ],
    de: [
      "[SYSTEM] Deep Brain Diagnose-Engine wird gestartet...",
      "[STRATEGIE] Bewertung der Branchen-Betriebsparameter...",
      "[ENGINEERING] Prüfung von logischen Engpässen und Schema-Friction...",
      "[NARRATIVE] Storyboard abstrakter kreativer Themen...",
      "[SYSTEM] Strukturierung maßgeschneiderter Microservice-Architekturen...",
      "[STRATEGIE] Synchronisierung der Digitalstrategie mit Wachstumszielen...",
      "[SYSTEM] Finalisierung der Zusammenstellung und Übergabe des Entwurfs..."
    ],
    fr: [
      "[SYSTÈME] Initialisation du moteur de diagnostic de Deep Brain...",
      "[STRATÉGIE] Évaluation des paramètres opérationnels du secteur...",
      "[INGÉNIERIE] Audit des goulots d'étranglement logiques et structurels...",
      "[NARRATIF] Scénarisation des thèmes créatifs abstraits...",
      "[SYSTÈME] Structuration des architectures de microservices sur mesure...",
      "[STRATÉGIE] Synchronisation de la stratégie avec les objectifs de croissance...",
      "[SYSTÈME] Finalisation de la compilation du dossier technique..."
    ],
    it: [
      "[SISTEMA] Inizializzazione motore diagnostico Deep Brain...",
      "[STRATEGIA] Valutazione dei parametri operativi del settore...",
      "[INGEGNERIA] Verifica dei colli di bottiglia logici e attriti strutturali...",
      "[NARRATIVO] Sviluppo dello storyboard per temi creativi astratti...",
      "[SISTEMA] Strutturazione architettura microservizi su misura...",
      "[STRATEGIA] Sincronizzazione della strategia digitale con obiettivi esecutivi...",
      "[SISTEMA] Completamento sintesi brief e specifiche tecniche..."
    ]
  }[language];

  const labels = {
    en: {
      badge: "06 // COGNITIVE DIAGNOSTICS",
      title: "AI Consultant",
      description: "We conceptualize before producing. Use our native Strategic Engine to outline potential directions for your business challenge. This uses Gemini to immediately synthesize a comprehensive Creative Direction and full-stack software strategy.",
      leftPanelTitle: "Parametric Diagnostic Inputs",
      label01: "01. Business Name",
      label02: "02. Industry / Sector",
      label03: "03. Operational Bottleneck",
      label04: "04. Brand Tone or Aesthetic Focus (Optional)",
      placeholder04: "e.g. Highly minimal, Swiss editorial, tactile...",
      placeholder03: "Describe your current business bottleneck (e.g. 'reconciling manual guest preference spreadsheets across reservations takes hours each week.')",
      btnAnalyzing: "Analyzing Parameters...",
      btnSynthesize: "Synthesize Studio Brief",
      sleepingTitle: "System Offline // Waiting for Diagnostic Input",
      sleepingDesc: "Configure your company parameters and core bottlenecks in the panel to synthesize a customized tactical architecture.",
      copyBrief: "Copy Brief",
      copiedBrief: "Brief Copied",
      integrationTitle: "System Integration Option",
      integrationDesc: "This custom brief has been synced with the booking queue below.",
      btnConfirm: "Confirm Brief & Book Consultation",
      queryingNodes: "Querying server-side model nodes... please remain active..."
    },
    es: {
      badge: "06 // DIAGNÓSTICO COGNITIVO",
      title: "Asistente de IA",
      description: "Conceptualizamos antes de producir. Utilice nuestro Motor Estratégico nativo para delinear direcciones potenciales para su desafío empresarial. Esto utiliza Gemini para sintetizar inmediatamente una Dirección Creativa integral y una estrategia de software full-stack.",
      leftPanelTitle: "Entradas Paramétricas de Diagnóstico",
      label01: "01. Nombre de la Empresa",
      label02: "02. Industria / Sector",
      label03: "03. Cuello de Botella Operativo",
      label04: "04. Tono de Marca o Enfoque Estético (Opcional)",
      placeholder04: "ej. Muy minimalista, editorial suizo, táctil...",
      placeholder03: "Describa su cuello de botella operativo actual (ej. 'reconciliar las hojas de cálculo de reservas manuales toma horas cada semana')",
      btnAnalyzing: "Analizando Parámetros...",
      btnSynthesize: "Sintetizar Pliego Técnico",
      sleepingTitle: "Sistema Fuera de Línea // Esperando Entrada",
      sleepingDesc: "Configure los parámetros de su empresa y cuellos de botella clave en el panel para sintetizar una arquitectura táctica personalizada.",
      copyBrief: "Copiar Pliego",
      copiedBrief: "Pliego Copiado",
      integrationTitle: "Opción de Integración del Sistema",
      integrationDesc: "Este pliego personalizado ha sido sincronizado con la cola de reserva de abajo.",
      btnConfirm: "Confirmar Pliego y Agendar Sesión",
      queryingNodes: "Consultando nodos del modelo en el servidor... por favor permanezca activo..."
    },
    de: {
      badge: "06 // KOGNITATIVE DIAGNOSE",
      title: "KI-Berater",
      description: "Wir konzipieren, bevor wir produzieren. Nutzen Sie unsere native Strategie-Engine, um potenzielle Wege für Ihre geschäftliche Herausforderung aufzuzeigen. Hierbei wird Gemini genutzt, um sofort eine umfassende Kreativdirektion und Full-Stack-Softwarestrategie zu entwickeln.",
      leftPanelTitle: "Parametrische Diagnose-Eingaben",
      label01: "01. Name des Unternehmens",
      label02: "02. Branche / Sektor",
      label03: "03. Operativer Engpass",
      label04: "04. Marken-Tonalität oder Designfokus (Optional)",
      placeholder04: "z. B. Sehr minimalistisch, Schweizer Typografie, haptisch...",
      placeholder03: "Beschreiben Sie Ihren aktuellen Engpass (z. B. 'Die manuelle Abstimmung von Reservierungslisten kostet jede Woche Stunden.')",
      btnAnalyzing: "Parameter werden analysiert...",
      btnSynthesize: "Briefing Synthetisieren",
      sleepingTitle: "System Offline // Wartet auf Diagnose-Eingaben",
      sleepingDesc: "Konfigurieren Sie Ihre Unternehmensparameter und zentralen Engpässe, um eine maßgeschneiderte taktische Architektur zu erstellen.",
      copyBrief: "Briefing Kopieren",
      copiedBrief: "Briefing Kopiert",
      integrationTitle: "Systemintegrationsoption",
      integrationDesc: "Dieses Briefing wurde mit dem untenstehenden Buchungsformular synchronisiert.",
      btnConfirm: "Briefing bestätigen & Beratung buchen",
      queryingNodes: "Server-Knoten werden abgefragt... bitte aktiv bleiben..."
    },
    fr: {
      badge: "06 // DIAGNOSTIC COGNITIF",
      title: "Conseiller IA",
      description: "Nous conceptualisons avant de produire. Utilisez notre Moteur de Diagnostic natif pour tracer les lignes directrices de votre projet. Gemini synthétise instantanément une Direction Artistique complète et une architecture logicielle adaptée.",
      leftPanelTitle: "Données de Diagnostic Paramétriques",
      label01: "01. Nom de l'Entreprise",
      label02: "02. Secteur d'Activité",
      label03: "03. Goulot d'Étranglement",
      label04: "04. Ton de Marque ou Approche Esthétique (Optionnel)",
      placeholder04: "ex: Grand luxe, style suisse, minimaliste, tactile...",
      placeholder03: "Décrivez votre goulot d'étranglement opérationnel actuel (ex: 'réconcilier manuellement les préférences clients à chaque réservation prend des heures')",
      btnAnalyzing: "Analyse en cours...",
      btnSynthesize: "Synthétiser le Brief de Projet",
      sleepingTitle: "Système Hors Ligne // En attente de données",
      sleepingDesc: "Configurez les paramètres de votre entreprise et vos principaux goulots d'étranglement pour synthétiser votre architecture sur mesure.",
      copyBrief: "Copier le Brief",
      copiedBrief: "Brief Copié",
      integrationTitle: "Option d'Intégration Système",
      integrationDesc: "Ce brief personnalisé a été synchronisé avec la file de réservation ci-dessous.",
      btnConfirm: "Confirmer le Brief & Réserver",
      queryingNodes: "Requête vers les serveurs du modèle... veuillez patienter..."
    },
    it: {
      badge: "06 // DIAGNOSTICA COGNITIVA",
      title: "Consulente IA",
      description: "Sviluppiamo il concept prima di produrre. Utilizzate il nostro Assistente Strategico per definire potenziali percorsi operativi. Gemini analizzerà le risposte e formulerà una bozza strategica e tecnica all'istante.",
      leftPanelTitle: "Dati Diagnostici Parametrici",
      label01: "01. Nome dell'Azienda",
      label02: "02. Settore / Ambito",
      label03: "03. Sfida / Collo di Bottiglia",
      label04: "04. Tono del Brand o Focus Estetico (Opzionale)",
      placeholder04: "es: Estremamente minimale, stile svizzero, editoriale...",
      placeholder03: "Descrivete la vostra sfida operativa (es: 'la riconciliazione manuale delle prenotazioni richiede diverse ore ogni settimana')",
      btnAnalyzing: "Analisi in corso...",
      btnSynthesize: "Sintetizza Brief di Progetto",
      sleepingTitle: "Sistema Offline // In attesa di dati",
      sleepingDesc: "Configurate i parametri aziendali e i colli di bottiglia nel pannello per sintetizzare un'architettura tattica su misura.",
      copyBrief: "Copia Brief",
      copiedBrief: "Brief Copiato",
      integrationTitle: "Opzione di Integrazione di Sistema",
      integrationDesc: "Questo brief personalizzato è stato sincronizzato con il modulo di contatto sottostante.",
      btnConfirm: "Conferma Brief e Prenota",
      queryingNodes: "Interrogazione dei nodi server in corso... si prega di attendere..."
    }
  }[language];

  useEffect(() => {
    if (!loading) return;
    setLogs([loadingSequences[0]]);
    
    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx++;
      if (currentIdx < loadingSequences.length) {
        setLogs((prev) => [...prev, loadingSequences[currentIdx]]);
      } else {
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [loading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSynthesize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.businessName || !inputs.industry || !inputs.bottleneck) return;

    setLoading(true);
    setResultBrief(null);

    try {
      const response = await fetch("/api/gemini/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setResultBrief(data.proposal);
      // Callback to pass the generated brief to the parent so the contact form can sync it
      onBriefGenerated(data.proposal, {
        name: inputs.businessName,
        industry: inputs.industry,
        bottleneck: inputs.bottleneck
      });
    } catch (err: any) {
      console.error(err);
      setResultBrief(`### DIAGNOSTICS FAILURE
An error occurred during strategy synthesis. 

**Root Cause:**
${err.message || "Failed to establish a secure connection with Deep Brain Reset server. Please confirm that your GEMINI_API_KEY is configured in Settings > Secrets."}

*Please resolve the environment configuration and re-trigger.*`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!resultBrief) return;
    navigator.clipboard.writeText(resultBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Robust custom markdown formatter to display editorial-looking pages cleanly without external packages
  const renderFormattedBrief = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("# ")) {
        return (
          <h1 key={idx} className="text-xl md:text-2xl font-display font-bold text-studio-primary uppercase tracking-widest border-b border-studio-border pb-4 mb-6 mt-4">
            {trimmed.substring(2)}
          </h1>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-sm md:text-base font-display font-semibold text-studio-primary uppercase tracking-widest mt-8 mb-4 border-l-2 border-studio-caption pl-3">
            {trimmed.substring(3)}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xs md:text-sm font-mono text-studio-caption uppercase tracking-widest mt-6 mb-2">
            {trimmed.substring(4)}
          </h3>
        );
      }
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        return (
          <li key={idx} className="text-xs md:text-sm text-studio-secondary font-light pl-6 relative py-1 list-none">
            <span className="absolute left-1 text-studio-muted font-mono">&gt;</span>
            {trimmed.substring(2)}
          </li>
        );
      }
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
        return (
          <div key={idx} className="my-2 inline-block px-2.5 py-0.5 bg-studio-panel border border-studio-border text-[10px] font-mono text-studio-secondary uppercase rounded-sm">
            {trimmed.substring(1, trimmed.length - 1)}
          </div>
        );
      }
      if (trimmed === "") {
        return <div key={idx} className="h-2" />;
      }
      
      // Handle generic text paragraphs
      return (
        <p key={idx} className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <section id="consultant" className="py-24 md:py-32 bg-studio-panel border-t border-b border-studio-border relative">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {labels.badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
              {labels.title}
            </h2>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {labels.description}
            </p>
          </div>
        </div>

        {/* Workspace: Left Input Form, Right Generative Brief Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          
          {/* Left Panel: Brief Inputs */}
          <div className="lg:col-span-5 bg-studio-bg border border-studio-border p-8 rounded-sm space-y-6">
            <div className="flex items-center space-x-3 text-studio-caption border-b border-studio-border pb-4">
              <Cpu size={16} />
              <span className="text-xs font-mono uppercase tracking-widest">
                {labels.leftPanelTitle}
              </span>
            </div>

            <form onSubmit={handleSynthesize} className="space-y-5">
              
              {/* Business Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                  <span>{labels.label01}</span>
                  <span className="text-studio-muted">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={inputs.businessName}
                  onChange={handleInputChange}
                  required
                  placeholder={data.placeholderBusiness}
                  className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light"
                />
              </div>

              {/* Industry */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                  <span>{labels.label02}</span>
                  <span className="text-studio-muted">*</span>
                </label>
                <input
                  type="text"
                  name="industry"
                  value={inputs.industry}
                  onChange={handleInputChange}
                  required
                  placeholder={data.placeholderIndustry}
                  className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light"
                />
              </div>

              {/* Operating Bottleneck */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                  <span>{labels.label03}</span>
                  <span className="text-studio-muted">*</span>
                </label>
                <textarea
                  name="bottleneck"
                  value={inputs.bottleneck}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder={labels.placeholder03}
                  className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light leading-relaxed resize-none"
                />
              </div>

              {/* Strategic Context */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                  <span>{labels.label04}</span>
                </label>
                <input
                  type="text"
                  name="additionalNotes"
                  value={inputs.additionalNotes}
                  onChange={handleInputChange}
                  placeholder={labels.placeholder04}
                  className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light"
                />
              </div>

              <button
                id="synthesize-brief-btn"
                type="submit"
                disabled={loading || !inputs.businessName || !inputs.industry || !inputs.bottleneck}
                className="w-full py-4 premium-interactive font-mono text-xs uppercase tracking-widest text-center rounded-sm flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <RefreshCw className="animate-spin" size={14} />
                    <span>{labels.btnAnalyzing}</span>
                  </>
                ) : (
                  <>
                    <span>{labels.btnSynthesize}</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Panel: Cinematic Output / Console Loader */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-studio-panel border border-studio-border rounded-sm h-full flex flex-col min-h-[480px]">
              
              {/* Output Header */}
              <div className="flex justify-between items-center px-6 py-4 bg-studio-bg border-b border-studio-border">
                <div className="flex items-center space-x-2.5">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-studio-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-studio-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-studio-border" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase">
                    PROPOSAL_COMPILER.SH // PREVIEW
                  </span>
                </div>
                {resultBrief && !loading && (
                  <button
                    id="copy-brief-btn"
                    onClick={copyToClipboard}
                    className="text-xs font-mono tracking-wide text-studio-caption hover:text-studio-primary flex items-center space-x-1.5 transition-colors cursor-pointer bg-transparent border-0"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-studio-caption" />
                        <span>{labels.copiedBrief}</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={12} />
                        <span>{labels.copyBrief}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Dynamic Panel Frame Body */}
              <div className="flex-grow p-8 overflow-y-auto max-h-[420px] bg-studio-bg">
                <AnimatePresence mode="wait">
                  {loading ? (
                    /* Tech Logger Loading Screen */
                    <motion.div
                      key="loading-frame"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 font-mono text-[11px] text-studio-secondary leading-normal"
                    >
                      {logs.map((log, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-studio-muted">&gt;&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2 text-studio-caption pt-4 italic">
                        <RefreshCw className="animate-spin shrink-0" size={12} />
                        <span>{labels.queryingNodes}</span>
                      </div>
                    </motion.div>
                  ) : resultBrief ? (
                    /* Custom Framed Beautiful Editorial Render */
                    <motion.article
                      key="result-frame"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="prose prose-invert max-w-none text-left"
                    >
                      <div className="border border-studio-border bg-studio-panel p-6 md:p-8 rounded-sm">
                        {renderFormattedBrief(resultBrief)}
                      </div>

                      {/* Interactive prompt to proceed with contact */}
                      <div className="mt-8 p-6 bg-studio-panel border border-studio-border rounded-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono text-studio-caption uppercase tracking-widest block">
                            {labels.integrationTitle}
                          </span>
                          <p className="text-xs text-studio-primary">
                            {labels.integrationDesc}
                          </p>
                        </div>
                        <button
                          id="proceed-brief-btn"
                          onClick={() => {
                            const el = document.getElementById("contact");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="px-4 py-2 premium-interactive text-[10px] font-mono uppercase tracking-widest rounded-sm flex items-center space-x-1 cursor-pointer"
                        >
                          <span>{labels.btnConfirm}</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </motion.article>
                  ) : (
                    /* Initial Sleeping State */
                    <motion.div
                      key="sleeping-frame"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                    >
                      <div className="w-12 h-12 rounded-full border border-studio-border bg-studio-panel flex items-center justify-center text-studio-muted">
                        <FileText size={20} className="stroke-1" />
                      </div>
                      <div className="max-w-md space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase">
                          {labels.sleepingTitle}
                        </span>
                        <p className="text-xs text-studio-muted font-light max-w-sm">
                          {labels.sleepingDesc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
