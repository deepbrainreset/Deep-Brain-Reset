import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { 
  Cpu, 
  RefreshCw, 
  Clipboard, 
  Check, 
  ArrowRight, 
  Calendar, 
  ExternalLink, 
  Briefcase, 
  AlertCircle, 
  Layers, 
  Clock, 
  Wrench,
  FileText
} from "lucide-react";
import { InquiryInput } from "../types";

interface BriefConsultantProps {
  onBriefGenerated?: (briefText: string, companyInfo: { name: string; industry: string; bottleneck: string }) => void;
}

interface GeneratedData {
  executiveOverview: string;
  coreProblem: string;
  proposedArchitecture: string;
  recommendedServices: string;
  estimatedTimeline: string;
  estimatedImplementationPhases: string;
  fullMarkdownReport: string;
}

export default function BriefConsultant({ onBriefGenerated }: BriefConsultantProps) {
  const { language } = useLanguage();

  const [inputs, setInputs] = useState<InquiryInput>({
    company: "",
    industry: "",
    bottleneck: "",
    goals: "",
    timeline: "",
    budget: "",
    positioning: ""
  });

  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [resultBrief, setResultBrief] = useState<string | null>(null);
  const [generatedData, setGeneratedData] = useState<GeneratedData | null>(null);
  const [copied, setCopied] = useState(false);

  const labels = {
    en: {
      badge: "06 // COGNITIVE DIAGNOSTICS & INGESTION",
      title: "Client Consultation Pipeline",
      description: "Operate our Unified Parametric Strategic Engine to diagnose your business bottleneck, formulate a pristine architectural strategy, and book an executive review session directly with our engineering team.",
      leftPanelTitle: "Parametric Diagnostic Inputs (Step 01)",
      labelCompany: "01. Company / Brand Name",
      labelIndustry: "02. Industry / Sector",
      labelBottleneck: "03. Current Operational Bottleneck",
      labelGoals: "04. Core Business Goals",
      labelTimeline: "05. Desired Timeline",
      labelBudget: "06. Budget (Optional)",
      labelPositioning: "07. Brand Positioning / Creative Tone",
      placeholderCompany: "e.g. Acme Corp",
      placeholderIndustry: "e.g. Luxury Hospitality, Fintech SaaS",
      placeholderBottleneck: "e.g. Manual data reconciliation takes 15 hours every week...",
      placeholderGoals: "e.g. Streamline delivery, expand to 3 international locations...",
      placeholderTimeline: "e.g. Within 3 Months, Immediate...",
      placeholderBudget: "e.g. $100k - $200k",
      placeholderPositioning: "e.g. Ultra-minimalist, Swiss-modern, editorial typography...",
      btnSynthesize: "Synthesize Strategy",
      btnAnalyzing: "Analyzing Parameters...",
      queryingNodes: "Generating Custom Strategic Summary...",
      sleepingTitle: "System Offline // Waiting for Diagnostic Input",
      sleepingDesc: "Configure your parameters in the panel to synthesize a customized tactical architecture report.",
      schedulingTitle: "Schedule Your Strategy Session (Step 03)",
      schedulingDesc: "Your strategic diagnosis is complete. Book a private consultation to review the proposed solution and define the execution roadmap.",
      schedulingCta: "Book Strategy Session",
      consoleTitle: "STRATEGIC SUMMARY // CLIENT CONSOLE",
      consolePending: "PENDING PARAMETERS INGESTION",
      consoleActive: "DIAGNOSTICS EXTRACTED & ACTIVE",
      cardBusiness: "Business Profile",
      cardBottleneck: "Identified Bottleneck",
      cardArchitecture: "Recommended Architecture",
      cardTimeline: "Estimated Timeline",
      cardServices: "Recommended Services",
      cardPendingValue: "Waiting for diagnostic parameters...",
      cardLoadingValue: "Analyzing and generating system design...",
      copyBrief: "Copy Brief",
      copiedBrief: "Brief Copied",
    },
    es: {
      badge: "06 // DIAGNÓSTICO COGNITIVO E INGESTIÓN DE SISTEMAS",
      title: "Trayectoria de Consulta Unificada",
      description: "Utilice nuestro Motor Estratégico Paramétrico Unificado para diagnosticar los cuellos de botella de su negocio, formular una estrategia arquitectónica de software de alta gama y agendar una sesión ejecutiva de revisión.",
      leftPanelTitle: "Entradas Paramétricas de Diagnóstico (Paso 01)",
      labelCompany: "01. Nombre de la Empresa / Marca",
      labelIndustry: "02. Industria / Sektor",
      labelBottleneck: "03. Cuello de Botella Operativo Actual",
      labelGoals: "04. Metas de Negocio Principales",
      labelTimeline: "05. Cronograma Deseado",
      labelBudget: "06. Presupuesto (Opcional)",
      labelPositioning: "07. Posicionamiento de Marca / Tono Creativo",
      placeholderCompany: "ej. Acme Corp",
      placeholderIndustry: "ej. Hospitalidad de Lujo, SaaS Fintech",
      placeholderBottleneck: "ej. La conciliación de datos manual toma 15 horas semanales...",
      placeholderGoals: "ej. Optimizar entregas, expandir a 3 ubicaciones internacionales...",
      placeholderTimeline: "ej. Dentro de 3 Meses, Inmediato...",
      placeholderBudget: "ej. $100k - $200k",
      placeholderPositioning: "ej. Ultra-minimalista, moderno suizo, tipografía editorial...",
      btnSynthesize: "Sintetizar Estratégia",
      btnAnalyzing: "Analizando Parámetros...",
      queryingNodes: "Generando Resumen Estratégico Personalizado...",
      sleepingTitle: "Sistema Fuera de Línea // Esperando Entrada",
      sleepingDesc: "Configure los parámetros de su empresa en el panel para sintetizar un informe de arquitectura táctica personalizado.",
      schedulingTitle: "Programe su Sesión de Estratégia (Paso 03)",
      schedulingDesc: "Su diagnóstico estratégico está completo. Reserve una consulta privada para revisar la solución propuesta y definir el mapa de ruta de ejecución.",
      schedulingCta: "Agendar Sesión de Estratégia",
      consoleTitle: "RESUMEN ESTRATÉGICO // CONSOLA DEL CLIENTE",
      consolePending: "INGESTIÓN DE PARÁMETROS PENDIENTE",
      consoleActive: "DIAGNÓSTICOS EXTRAÍDOS Y ACTIVOS",
      cardBusiness: "Perfil de la Empresa",
      cardBottleneck: "Cuello de Botella Detectado",
      cardArchitecture: "Arquitectura Recomendada",
      cardTimeline: "Cronograma Estimado",
      cardServices: "Servicios Recomendados",
      cardPendingValue: "Esperando parámetros de diagnóstico...",
      cardLoadingValue: "Analizando y diseñando el sistema...",
      copyBrief: "Copiar Pliego",
      copiedBrief: "Pliego Copiado",
    },
    de: {
      badge: "06 // KOGNITATIVE DIAGNOSTIK & INGESTION-SYSTEM",
      title: "Integrierte Kunden-Pipeline",
      description: "Nutzen Sie unsere integrierte parametrische Strategie-Engine, um geschäftliche Engpässe zu analysieren, eine erstklassige Softwarearchitektur zu entwerfen und direkt ein Erstgespräch mit unserem Entwicklungsteam zu buchen.",
      leftPanelTitle: "Parametrische Diagnose-Eingaben (Schritt 01)",
      labelCompany: "01. Name des Unternehmens",
      labelIndustry: "02. Branche / Sektor",
      labelBottleneck: "03. Aktueller operativer Engpass",
      labelGoals: "04. Zentrale Wachstumsziele",
      labelTimeline: "05. Gewünschter Zeitrahmen",
      labelBudget: "06. Budget (Optional)",
      labelPositioning: "07. Markenpositionierung / Design-Tonalität",
      placeholderCompany: "z. B. Acme Corp",
      placeholderIndustry: "z. B. Luxus-Hotellerie, Fintech SaaS",
      placeholderBottleneck: "z. B. Manueller Datenabgleich dauert jede Woche 15 Stunden...",
      placeholderGoals: "z. B. Abläufe optimieren, Expansion in 3 neue Länder...",
      placeholderTimeline: "z. B. Innerhalb von 3 Monaten, Sofort...",
      placeholderBudget: "z. B. 100k - 200k €",
      placeholderPositioning: "z. B. Ultra-minimalistisch, Schweizer Moderne, Editorial-Typografie...",
      btnSynthesize: "Strategie Synthetisieren",
      btnAnalyzing: "Parameter werden analysiert...",
      queryingNodes: "Strategische Zusammenfassung wird erstellt...",
      sleepingTitle: "System Offline // Wartet auf Eingabe",
      sleepingDesc: "Konfigurieren Sie Ihre Unternehmensparameter im Panel, um einen maßgeschneiderten Architektur-Report zu erstellen.",
      schedulingTitle: "Erstgespräch Vereinbaren (Schritt 03)",
      schedulingDesc: "Ihre strategische Diagnose ist abgeschlossen. Buchen Sie ein vertrauliches Gespräch, um die vorgeschlagene Lösung zu bewerten und den Fahrplan festzulegen.",
      schedulingCta: "Erstgespräch buchen",
      consoleTitle: "STRATEGISCHE DIAGNOSE // CLIENT CONSOLE",
      consolePending: "WARTE AUF PARAMETER-EINGABE",
      consoleActive: "DIAGNOSEBEREIT & AKTIV",
      cardBusiness: "Unternehmensprofil",
      cardBottleneck: "Ermittelter Engpass",
      cardArchitecture: "Empfohlene Architektur",
      cardTimeline: "Geschätzter Zeitrahmen",
      cardServices: "Empfohlene Services",
      cardPendingValue: "Warte auf Diagnose-Eingaben...",
      cardLoadingValue: "Systemarchitektur wird berechnet...",
      copyBrief: "Briefing Kopieren",
      copiedBrief: "Briefing Kopiert",
    },
    fr: {
      badge: "06 // DIAGNOSTIC COGNITIF & INGESTION SYSTÈMES",
      title: "Parcours de Consultation Unifié",
      description: "Utilisez notre moteur stratégique unifié pour analyser vos goulots d'étranglement opérationnels, concevoir votre architecture logicielle sur mesure et réserver votre entretien d'évaluation technique.",
      leftPanelTitle: "Données de Diagnostic Paramétriques (Étape 01)",
      labelCompany: "01. Nom de l'Entreprise / Marque",
      labelIndustry: "02. Secteur d'Activité",
      labelBottleneck: "03. Goulot d'Étranglement Opérationnel Actual",
      labelGoals: "04. Objectifs Commerciaux Clés",
      labelTimeline: "05. Calendrier Souhaité",
      labelBudget: "06. Budget (Optionnel)",
      labelPositioning: "07. Positionnement de Marque / Identité Graphique",
      placeholderCompany: "ex: Acme Corp",
      placeholderIndustry: "ex: Hôtellerie de Luxe, SaaS Fintech",
      placeholderBottleneck: "ex: La réconciliation manuelle prend 15 heures chaque semaine...",
      placeholderGoals: "ex: Fluidifier la logistique, expansion internationale...",
      placeholderTimeline: "ex: Sous 3 mois, Immédiat...",
      placeholderBudget: "ex: 100k - 200k €",
      placeholderPositioning: "ex: Style suisse ultra-épuré, typographie éditoriale d'auteur...",
      btnSynthesize: "Synthétiser la Stratégie",
      btnAnalyzing: "Analyse en cours...",
      queryingNodes: "Génération de la synthèse stratégique...",
      sleepingTitle: "Système Hors Ligne // En attente d'ingestion",
      sleepingDesc: "Renseignez vos paramètres d'activité dans le panneau pour compiler votre rapport technique personnalisé.",
      schedulingTitle: "Planifier votre Entretien (Étape 03)",
      schedulingDesc: "Votre diagnostic stratégique est finalisé. Réservez un entretien privé pour étudier notre proposition et planifier la mise en production.",
      schedulingCta: "Réserver mon Entretien",
      consoleTitle: "SYNTHÈSE STRATÉGIQUE // CONSOLE CLIENT",
      consolePending: "EN ATTENTE D'INGESTION DES PARAMÈTRES",
      consoleActive: "DIAGNOSTICS EXTRAITS & ACTIFS",
      cardBusiness: "Profil de l'Entreprise",
      cardBottleneck: "Goulot Identifié",
      cardArchitecture: "Architecture Recommandée",
      cardTimeline: "Calendrier Estimé",
      cardServices: "Services Conseillés",
      cardPendingValue: "En attente des paramètres opérationnels...",
      cardLoadingValue: "Modélisation de l'architecture logicielle...",
      copyBrief: "Copier le Brief",
      copiedBrief: "Brief Copié",
    },
    it: {
      badge: "06 // DIAGNOSTICA COGNITIVA & INGESTIONE SISTEMI",
      title: "Percorso Clienti Unificato",
      description: "Sfruttate il nostro Assistente Strategico Unificato per analizzare i vostri colli di bottiglia operativi, tracciare l'architettura tecnica e prenotare un incontro di revisione con i nostri ingegneri.",
      leftPanelTitle: "Dati Diagnostici Parametrici (Fase 01)",
      labelCompany: "01. Nome dell'Azienda / Brand",
      labelIndustry: "02. Settore / Ambito di Attività",
      labelBottleneck: "03. Collo di Bottiglia Operativo Corrente",
      labelGoals: "04. Obiettivi Aziendali Principali",
      labelTimeline: "05. Tempistiche Desiderate",
      labelBudget: "06. Budget (Opzionale)",
      labelPositioning: "07. Posicionamento del Brand / Tono Creativo",
      placeholderCompany: "es: Acme Corp",
      placeholderIndustry: "es: Ospitalità di Lusso, SaaS Fintech",
      placeholderBottleneck: "es: La riconciliazione manuale richiede 15 ore settimanali...",
      placeholderGoals: "es: Semplificare le spedizioni, espandersi in 3 nuove sedi...",
      placeholderTimeline: "es: Entro 3 Mesi, Immediato...",
      placeholderBudget: "es: 100k - 200k €",
      placeholderPositioning: "es: Minimalismo su misura, stile svizzero, design d'autore...",
      btnSynthesize: "Sintetizza Strategia",
      btnAnalyzing: "Analisi parametri...",
      queryingNodes: "Sintesi strategica in corso...",
      sleepingTitle: "Sistema Offline // In attesa di dati",
      sleepingDesc: "Configurate i parametri aziendali nel pannello per sintetizzare un report architetturale su misura.",
      schedulingTitle: "Prenotate la Sessione Strategica (Fase 03)",
      schedulingDesc: "La diagnosi strategica è completata. Prenotate una consulenza privata per valutare la soluzione proposta e definire la pianificazione esecutiva.",
      schedulingCta: "Prenota Sessione Strategica",
      consoleTitle: "SINTESI STRATEGICA // CONSOLE CLIENTE",
      consolePending: "IN ATTESA DI DATI DIAGNOSTICI",
      consoleActive: "DIAGNOSTICA ESTRATTA E ATTIVA",
      cardBusiness: "Profilo Aziendale",
      cardBottleneck: "Sfida Individuata",
      cardArchitecture: "Architettura Raccomandata",
      cardTimeline: "Tempistiche Stimate",
      cardServices: "Servizi Raccomandati",
      cardPendingValue: "In attesa di parametri diagnostici...",
      cardLoadingValue: "Elaborazione dell'architettura tecnica...",
      copyBrief: "Copia Brief",
      copiedBrief: "Brief Copiato",
    }
  }[language];

  // Animated loader steps to showcase capability and process rigor
  const loadingSequences = {
    en: [
      "[SYSTEM] Initializing Deep Brain Ingestion engine...",
      "[INGESTION] Verifying brand positioning and growth goals...",
      "[DIAGNOSTICS] Evaluating target industry bottlenecks...",
      "[ENGINEERING] Synthesizing custom server-side component architecture...",
      "[AUTOMATION] Drafting cognitive API background pipelines...",
      "[NARRATIVE] Defining visual editorial aesthetics...",
      "[SYSTEM] Finalizing proposal compilation & structured summary..."
    ],
    es: [
      "[SISTEMA] Inicializando motor de ingesta Deep Brain...",
      "[INGESTA] Verificando posicionamiento de marca y metas...",
      "[DIAGNÓSTICO] Evaluando cuellos de botella de la industria...",
      "[INGENIERÍA] Sintetizando arquitectura de componentes...",
      "[AUTOMATIZACIÓN] Creando flujos cognitivos de API en segundo plano...",
      "[NARRATIVA] Definiendo estética visual y tipografía...",
      "[SISTEMA] Finalizando compilación de propuesta y pliego técnico..."
    ],
    de: [
      "[SYSTEM] Deep Brain Ingest-Engine wird initialisiert...",
      "[INGEST] Überprüfung von Markenpositionierung und Wachstumszielen...",
      "[DIAGNOSTICS] Branchenspezifische Engpässe werden analysiert...",
      "[ENGINEERING] Strukturierung maßgeschneiderter Server-Architekturen...",
      "[AUTOMATION] Erstellung kognitiver API-Hintergrundprozesse...",
      "[NARRATIVE] Definition visueller Design-Ästhetiken...",
      "[SYSTEM] Finalisierung der Zusammenstellung und Strategie-Synthese..."
    ],
    fr: [
      "[SYSTÈME] Initialisation du moteur d'ingestion de Deep Brain...",
      "[INGESTION] Vérification du positionnement de marque et des objectifs...",
      "[DIAGNOSTIC] Évaluation des goulots d'étranglement opérationnels...",
      "[INGÉNIERIE] Modélisation de l'architecture logicielle sur mesure...",
      "[AUTOMATISATION] Conception des pipelines d'automatisation cognitive...",
      "[NARRATIF] Choix de la direction artistique et typographique...",
      "[SYSTÈME] Finalisation de la compilation du dossier stratégique..."
    ],
    it: [
      "[SISTEMA] Inizializzazione modulo di ingestione Deep Brain...",
      "[INGESTIONE] Verifica del posizionamento e degli obiettivi di crescita...",
      "[DIAGNOSTICA] Analisi dei vincoli del settore operativo...",
      "[INGEGNERIA] Sintesi dell'architettura software personalizzata...",
      "[AUTOMAZIONE] Pianificazione delle pipeline di servizi integrati...",
      "[NARRATIVO] Definizione della direzione visiva ed editoriale...",
      "[SISTEMA] Completamento sintesi e pliego strategico..."
    ]
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
    }, 1500);

    return () => clearInterval(interval);
  }, [loading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSynthesize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.company || !inputs.industry || !inputs.bottleneck || !inputs.goals || !inputs.timeline || !inputs.positioning) return;

    setLoading(true);
    setResultBrief(null);
    setGeneratedData(null);

    try {
      const response = await fetch("/api/gemini/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });

      const data = await response.json();
      if (!data.success || data.error) {
        throw new Error(data.error || "Synthesis failed");
      }

      setResultBrief(data.proposal);
      setGeneratedData(data.data);

      if (onBriefGenerated) {
        onBriefGenerated(data.proposal, {
          name: inputs.company,
          industry: inputs.industry,
          bottleneck: inputs.bottleneck
        });
      }
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

  const renderFormattedBrief = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("# ")) {
        return (
          <h1 key={idx} className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-widest border-b border-studio-border pb-4 mb-6 mt-4">
            {trimmed.substring(2)}
          </h1>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-sm md:text-base font-display font-semibold text-white uppercase tracking-widest mt-8 mb-4 border-l-2 border-studio-caption pl-3">
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
      
      return (
        <p key={idx} className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <section id="consultant" className="py-24 md:py-32 bg-studio-panel border-t border-b border-studio-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {labels.badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight leading-tight">
              {labels.title}
            </h2>
          </div>

          <div className="lg:col-span-8 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {labels.description}
            </p>
          </div>
        </div>

        {/* Workspace: Single, beautifully centered column containing Form Intake (Step 01), Loading Progress, or Strategize Report & Booking (Step 02 & Step 03) */}
        <div id="contact" className="max-w-3xl mx-auto space-y-8 pt-6 w-full">
            <AnimatePresence mode="wait">
              {loading ? (
                /* STEP 02: Cinematic Node Processing Loading Logs */
                <motion.div
                  key="loading-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="bg-studio-bg border border-studio-border p-8 rounded-[12px] shadow-sm space-y-6 min-h-[480px] flex flex-col justify-between"
                >
                  <div className="flex items-center space-x-3 text-studio-caption border-b border-studio-border pb-4">
                    <Cpu className="animate-spin text-studio-primary" size={16} />
                    <span className="text-xs font-mono uppercase tracking-widest">
                      {labels.queryingNodes}
                    </span>
                  </div>

                  <div className="flex-grow space-y-3.5 font-mono text-[11px] text-zinc-400 leading-normal py-6 overflow-y-auto max-h-[300px]">
                    {logs.map((log, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-studio-muted shrink-0">&gt;&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center py-4 border-t border-studio-border/30">
                    <span className="text-[10px] font-mono tracking-widest text-studio-muted animate-pulse uppercase">
                      SYSTEM COMPILING SECURE BLUEPRINTS... PLEASE REMAIN ACTIVE
                    </span>
                  </div>
                </motion.div>
              ) : resultBrief ? (
                /* STEP 02 & STEP 03 COMPLETE: Strategic Report Display + Strategy Session Booking Section */
                <motion.div
                  key="report-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="space-y-8"
                >
                  {/* Generated Executive Consulting Report Card */}
                  <div className="bg-studio-bg border border-studio-border rounded-[12px] shadow-sm flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center px-6 py-4 bg-studio-panel border-b border-studio-border">
                      <div className="flex items-center space-x-2.5">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-studio-muted" />
                          <div className="w-2.5 h-2.5 rounded-full bg-studio-muted" />
                          <div className="w-2.5 h-2.5 rounded-full bg-studio-muted" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase">
                          DBR_EXECUTIVE_REPORT.PDF // SECURE PREVIEW
                        </span>
                      </div>
                      
                      <button
                        id="copy-report-btn"
                        onClick={copyToClipboard}
                        className="text-xs font-mono tracking-wide text-studio-caption hover:text-white flex items-center space-x-1.5 transition-colors cursor-pointer bg-transparent border-0"
                      >
                        {copied ? (
                          <>
                            <Check size={12} className="text-green-500" />
                            <span>{labels.copiedBrief}</span>
                          </>
                        ) : (
                          <>
                            <Clipboard size={12} />
                            <span>{labels.copyBrief}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Report Text Content Container */}
                    <div className="p-6 md:p-8 overflow-y-auto max-h-[500px] bg-studio-bg">
                      <article className="prose prose-invert max-w-none text-left">
                        {renderFormattedBrief(resultBrief)}
                      </article>
                    </div>
                  </div>

                  {/* STEP 03: Premium Booking Section (Replacing "Initiate Brief" Contact Form) */}
                  <div className="bg-studio-bg border border-studio-primary/20 p-8 rounded-[12px] shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-radial from-studio-primary/[0.02] to-transparent pointer-events-none" />
                    
                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center space-x-3 text-studio-primary">
                        <Calendar size={18} />
                        <span className="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold">
                          {labels.schedulingTitle}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-display font-light text-white uppercase tracking-wide">
                          {labels.schedulingTitle.split(" (")[0]}
                        </h3>
                        <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                          {labels.schedulingDesc}
                        </p>
                      </div>

                      <div className="pt-2">
                        <a
                          id="book-session-cta-btn"
                          href="https://calendar.app.google/KxqkRxocP421jXka7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-studio-primary text-studio-bg font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300 font-semibold shadow-md group-hover:scale-[1.01]"
                        >
                          <span>{labels.schedulingCta}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* STEP 01: Interactive Parametric Input Form */
                <motion.div
                  key="form-panel"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-studio-bg border border-studio-border p-8 rounded-[12px] shadow-sm space-y-6"
                >
                  <div className="flex items-center space-x-3 text-studio-caption border-b border-studio-border pb-4">
                    <Cpu size={16} />
                    <span className="text-xs font-mono uppercase tracking-widest">
                      {labels.leftPanelTitle}
                    </span>
                  </div>

                  <form onSubmit={handleSynthesize} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                          <span>{labels.labelCompany}</span>
                          <span className="text-studio-muted">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={inputs.company}
                          onChange={handleInputChange}
                          required
                          placeholder={labels.placeholderCompany}
                          className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light"
                        />
                      </div>

                      {/* Industry */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                          <span>{labels.labelIndustry}</span>
                          <span className="text-studio-muted">*</span>
                        </label>
                        <input
                          type="text"
                          name="industry"
                          value={inputs.industry}
                          onChange={handleInputChange}
                          required
                          placeholder={labels.placeholderIndustry}
                          className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light"
                        />
                      </div>
                    </div>

                    {/* Operational Bottleneck */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                        <span>{labels.labelBottleneck}</span>
                        <span className="text-studio-muted">*</span>
                      </label>
                      <textarea
                        name="bottleneck"
                        value={inputs.bottleneck}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        placeholder={labels.placeholderBottleneck}
                        className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light leading-relaxed resize-none"
                      />
                    </div>

                    {/* Business Goals */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                        <span>{labels.labelGoals}</span>
                        <span className="text-studio-muted">*</span>
                      </label>
                      <textarea
                        name="goals"
                        value={inputs.goals}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        placeholder={labels.placeholderGoals}
                        className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light leading-relaxed resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Timeline */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                          <span>{labels.labelTimeline}</span>
                          <span className="text-studio-muted">*</span>
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={inputs.timeline}
                          onChange={handleInputChange}
                          required
                          placeholder={labels.placeholderTimeline}
                          className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light"
                        />
                      </div>

                      {/* Budget */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption">
                          <span>{labels.labelBudget}</span>
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={inputs.budget}
                          onChange={handleInputChange}
                          placeholder={labels.placeholderBudget}
                          className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light"
                        />
                      </div>
                    </div>

                    {/* Brand Positioning */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                        <span>{labels.labelPositioning}</span>
                        <span className="text-studio-muted">*</span>
                      </label>
                      <textarea
                        name="positioning"
                        value={inputs.positioning}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        placeholder={labels.placeholderPositioning}
                        className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-white placeholder-studio-muted focus:outline-none focus:border-zinc-500 rounded-sm font-light leading-relaxed resize-none"
                      />
                    </div>

                    {/* CTA Submit Button */}
                    <button
                      id="synthesize-pipeline-btn"
                      type="submit"
                      disabled={!inputs.company || !inputs.industry || !inputs.bottleneck || !inputs.goals || !inputs.timeline || !inputs.positioning}
                      className="w-full py-4 premium-interactive font-mono text-xs uppercase tracking-widest text-center rounded-sm flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                    >
                      <span>{labels.btnSynthesize}</span>
                      <ArrowRight size={14} />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
