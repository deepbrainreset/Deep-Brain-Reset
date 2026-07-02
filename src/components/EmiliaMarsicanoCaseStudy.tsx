import { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ExternalLink, 
  ArrowRight, 
  Globe, 
  Layers, 
  Layout, 
  Cpu, 
  BookOpen, 
  ShieldCheck 
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getLocalizedCaseStudies } from "../portfolioTranslations";

interface EmiliaMarsicanoCaseStudyProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export default function EmiliaMarsicanoCaseStudy({ onBack, onNextProject }: EmiliaMarsicanoCaseStudyProps) {
  const { language } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caseStudies = getLocalizedCaseStudies(language);
  const csData = caseStudies.find(c => c.id === "emilia-marsicano") || caseStudies[4]; // Emilia Marsicano

  const localDict: Record<string, any> = {
    en: {
      returnToStudio: "Return to Showcase",
      caseStudyTag: "CASE STUDY 03 // Web Design & Development",
      premiumLegalWebsite: "Premium Legal Website",
      visitWebsite: "Visit Website",
      viewCaseStudy: "View Case Study",
      scrollToDecrypt: "SCROLL TO DECRYPT",
      contextualBrief: "01 // CONTEXTUAL BRIEF",
      projectOverview: "PROJECT OVERVIEW",
      metadataIndex: "METADATA INDEX",
      specLabels: {
        client: "Client",
        industry: "Industry",
        projectType: "Project Type",
        websiteUrl: "Website URL",
        ourRole: "Our Role"
      },
      specValues: {
        industry: "Legal Services",
        projectType: "Premium Professional Website",
        ourRole: "Design, Development, Deployment"
      },
      operationalStatus: "OPERATIONAL STATUS",
      activePublication: "ACTIVE PUBLICATION // ONLINE",
      rearchitectingTradition: "02 // RE-ARCHITECTING TRADITION",
      challengeTitle: "THE CHALLENGE",
      challengeSub: "Legal websites often feel generic, overloaded or difficult to navigate, causing friction during critical decision-making moments.",
      aestheticCredibility: "Aesthetic Credibility",
      aestheticCredibilityDesc: "Transforming raw legal copy into an editorial legal sanctuary without utilizing standard, clichéd visuals.",
      foundationalRequirements: "The core challenge was to create a clean and professional experience that could communicate profound legal expertise without overwhelming the visitor. We identified six foundational requirements to guide the production framework:",
      requirement01Title: "01 // Practice Clarity",
      requirement01Desc: "Present multiple legal practice areas clearly to enable immediate visual indexing.",
      requirement02Title: "02 // Readable Language",
      requirement02Desc: "Explain complex, dense legal services in understandable, plain vocabulary.",
      requirement03Title: "03 // Trust Preservation",
      requirement03Desc: "Communicate deep professionalism, sober legal ethics, and human trust.",
      requirement04Title: "04 // Frictionless Intake",
      requirement04Desc: "Make initiating contact simple, secure, and accessible with structured forms.",
      requirement05Title: "05 // Responsive Balance",
      requirement05Desc: "Ensure perfect desktop widescreen grids translate fluidly to mobile interfaces.",
      requirement06Title: "06 // Refined Identity",
      requirement06Desc: "Maintain a coherent, elegant visual identity echoing high-end legal standards.",
      cognitivePathwaysTag: "03 // COGNITIVE PATHWAYS",
      uxStrategyTitle: "UX STRATEGY",
      uxStrategyDesc1: "To overcome the overwhelming density typical of legal databases, we formulated a strategic user experience structure focused on intentional hierarchy and cognitive friction reduction.",
      uxStrategyDesc2: "Instead of presenting a wall of legal statutes, we categorized Emilia Marsicano’s offerings into clear thematic sectors. Potential clients can self-select their area of interest (Real Estate, Corporate Law, Estate Planning) on their first interaction, instantly revealing digestible explanations of her professional scope.",
      uxStrategyDesc3: "This structured layout respects the client’s time and emotional state, transforming complex procedural information into a calm, comforting, and clear navigational journey.",
      funnelsTitle: "Funnels",
      funnelsDesc: "Structured contact triggers across primary touchpoints.",
      readabilityTitle: "Readability",
      readabilityDesc: "Sub-14px micro-typography layouts engineered for clarity.",
      accessibilityTitle: "Accessibility",
      accessibilityDesc: "High color-contrast ratios and fully responsive tap states.",
      intakeConversionPipeline: "Intake Conversion Pipeline",
      visualStep1Title: "Initial Contact",
      visualStep1Desc: "Immediate cognitive comfort via editorial clarity.",
      secureTag: "SECURE",
      visualStep2Title: "Practice Matching",
      visualStep2Desc: "Dynamic selection of legal coverage fields.",
      routedTag: "ROUTED",
      visualStep3Title: "Frictionless Ingestion",
      visualStep3Desc: "Direct, secure inquiry transmission to email queue.",
      resolvedTag: "RESOLVED",
      aestheticRefinementTag: "04 // AESTHETIC REFINEMENT",
      visualDirectionTitle: "VISUAL DIRECTION",
      visualDirectionDesc: "By blending high-end editorial proportions with sober legal authority, we designed an identity that projects confidence. Generous whitespace, elegant typography, and a cold slate background establish credibility without relying on dated templates or cliché courtroom motifs.",
      posterArtwork: "POSTER ARTWORK // CASE STUDY INDEX FEATURED SCREEN",
      deepBrainResetCreative: "DEEP BRAIN RESET CREATIVE PRODUCTION © 2026",
      classicPaletteTitle: "Classic Palette",
      classicPaletteDesc: "Deep onyx backdrops paired with soft, eye-safe off-whites and dark charcoal containers to reflect timeless, sober legal professionalism.",
      subtleAccentTitle: "Subtle Accent Highlights",
      subtleAccentDesc: "Atmospheric electric blue highlights and dynamic neon indicators that call attention to primary transactional targets.",
      pristineSpacingTitle: "Pristine Spacing",
      pristineSpacingDesc: "Broad padding layers, ample margins, and generous negative space that allow legal clauses to breathe, ensuring premium scannability.",
      productionPipelineTag: "05 // PRODUCTION PIPELINE",
      developmentTitle: "DEVELOPMENT",
      developmentDesc: "Our web development process operates as a structured, sequential pipeline to eliminate operational friction and secure military-grade execution speed. Explore our end-to-end framework:",
      servicesProvidedTitle: "SERVICES PROVIDED",
      integratedTechnologyTitle: "INTEGRATED TECHNOLOGY",
      integratedTechDesc: "By utilizing optimized static rendering, edge deployment caches, and type-safe development loops, we achieve pristine loading speeds on global networks:",
      telemetryStats: "TELEMETRY STATS",
      pageSpeedRatings: "PAGE SPEED RATINGS",
      lighthouseScore: "100 / 100 LIGHTHOUSE",
      projectResultTag: "06 // PROJECT RESULT",
      projectResultQuote: "\"A professional legal website designed to communicate trust, clarity and client confidence.\"",
      projectResultDesc: "The final website transforms complex, fragmented legal information into a clean, modern digital experience that helps prospective clients initiate contact with absolute confidence.",
      upNext: "UP NEXT // PROCEED TO THE SUB-SYSTEM",
      menuNoirTitle: "MENU NOIR",
      menuNoirDesc: "Explore an immersive matte-black SaaS menu automation platform tailored for elite global gastronomy brands.",
      exploreNextCaseStudy: "EXPLORE NEXT CASE STUDY",
      pipelineSteps: [
        { step: "01", label: "Client Brief", desc: "Understanding the lawyer's professional background, target audience, and legal authority." },
        { step: "02", label: "Content Structure", desc: "Organizing legal services and practice areas into logical, consumer-friendly copy." },
        { step: "03", label: "Information Architecture", desc: "Mapping out low-friction pathways for prospective clients to locate relevant legal support." },
        { step: "04", label: "Visual Direction", desc: "Establishing a sober, high-end legal editorial identity, avoiding common industry clichés." },
        { step: "05", label: "Responsive Design", desc: "Drafting adaptive grids designed for seamless readability on both mobile and widescreen devices." },
        { step: "06", label: "Web Development", desc: "Engineering pixel-perfect modular React code using modern, high-performance standards." },
        { step: "07", label: "GitHub Deployment", desc: "Version-controlling code and hosting secure repositories for collaborative audits." },
        { step: "08", label: "Cloudflare Deployment", desc: "Publishing the live application to global edge nodes with low-latency DNS routing." },
        { step: "09", label: "Final Optimization", desc: "Achieving sub-100ms response speeds and executing comprehensive accessibility testing." }
      ],
      providedServices: [
        { title: "Web Design", desc: "Architecting classical luxury interfaces balancing classical alignment and modern layouts." },
        { title: "UX Structure", desc: "Constructing seamless navigational funnels to convert visitor queries into active consultations." },
        { title: "Content Architecture", desc: "Refining complex legal terminology into engaging, accessible, and structured copy." },
        { title: "Responsive Development", desc: "Delivering unified performance across fluid desktop layouts and single-hand touch devices." },
        { title: "Visual Direction", desc: "Curating a sophisticated atmosphere featuring elegant spacing, off-whites, and deep slate hues." },
        { title: "SEO Foundations", desc: "Configuring pristine metadata and semantic HTML indexing for maximum practice discoverability." },
        { title: "Deployment", desc: "Integrating secure workflows with modern CDNs to preserve continuous operational uptime." },
        { title: "Performance Optimization", desc: "Compressing digital assets and optimizing execution loops to secure a near-instant loading experience." }
      ],
      technologies: [
        "Google AI Studio",
        "GitHub",
        "Cloudflare",
        "Responsive Web Design",
        "SEO Optimization",
        "Performance Optimization",
        "TypeScript",
        "React",
        "Tailwind CSS"
      ]
    },
    es: {
      returnToStudio: "Volver a Proyectos",
      caseStudyTag: "CASO DE ESTUDIO 03 // Diseño y Desarrollo Web",
      premiumLegalWebsite: "Sitio Web Legal Premium",
      visitWebsite: "Visitar Sitio Web",
      viewCaseStudy: "Ver Caso de Estudio",
      scrollToDecrypt: "DESPLAZAR PARA DECODIFICAR",
      contextualBrief: "01 // CONTEXTO GENERAL",
      projectOverview: "VISIÓN GENERAL DEL PROYECTO",
      metadataIndex: "ÍNDICE DE METADATOS",
      specLabels: {
        client: "Cliente",
        industry: "Industria",
        projectType: "Tipo de Proyecto",
        websiteUrl: "URL del Sitio Web",
        ourRole: "Nuestro Rol"
      },
      specValues: {
        industry: "Servicios Legales",
        projectType: "Sitio Web Profesional Premium",
        ourRole: "Diseño, Desarrollo y Despliegue"
      },
      operationalStatus: "ESTADO DE OPERACIÓN",
      activePublication: "PUBLICACIÓN ACTIVA // EN LÍNEA",
      rearchitectingTradition: "02 // REESTRUCTURANDO LA TRADICIÓN",
      challengeTitle: "EL DESAFÍO",
      challengeSub: "Los sitios web de servicios legales a menudo se sienten genéricos, sobrecargados o difíciles de navegar, lo que genera fricción en momentos críticos de toma de decisiones.",
      aestheticCredibility: "Credibilidad Estética",
      aestheticCredibilityDesc: "Transformar el texto legal en un santuario editorial de alto nivel, evitando las imágenes tradicionales y gastadas del sector.",
      foundationalRequirements: "El desafío principal fue estructurar una experiencia de navegación limpia que comunicara su profunda experiencia legal sin abrumar al usuario. Identificamos seis pilares fundamentales para guiar la producción:",
      requirement01Title: "01 // Claridad en Especialidades",
      requirement01Desc: "Presentar múltiples áreas de práctica legal con un diseño directo y legible.",
      requirement02Title: "02 // Lenguaje Comprensible",
      requirement02Desc: "Traducir terminología jurídica compleja a explicaciones sencillas y accesibles.",
      requirement03Title: "03 // Transmisión de Confianza",
      requirement03Desc: "Proyectar un profundo profesionalismo, ética y un trato cercano.",
      requirement04Title: "04 // Contacto Sencillo",
      requirement04Desc: "Simplificar la consulta con formularios integrados, rápidos y altamente seguros.",
      requirement05Title: "05 // Adaptabilidad Responsiva",
      requirement05Desc: "Asegurar que las cuadrículas de escritorio se desplieguen con fluidez en móviles.",
      requirement06Title: "06 // Identidad Coherente",
      requirement06Desc: "Mantener una dirección visual elegante inspirada en altos estándares jurídicos.",
      cognitivePathwaysTag: "03 // CAMINOS COGNITIVOS",
      uxStrategyTitle: "ESTRATEGIA DE UX",
      uxStrategyDesc1: "Para superar la abrumadora densidad típica de los portales legales, formulamos una estructura de experiencia de usuario basada en una jerarquía intencional y en la mitigación del cansancio visual.",
      uxStrategyDesc2: "En lugar de abrumar con normativas extensas, clasificamos los servicios de Emilia Marsicano en campos claros. Los clientes potenciales pueden autoseleccionar su área de interés (Inmobiliario, Corporativo, Planificación) desde la primera interacción, revelando descripciones sencillas y directas.",
      uxStrategyDesc3: "Este diseño centrado en el usuario respeta el tiempo y el estado emocional del cliente, guiándolo por una navegación tranquila, clara y sumamente reconfortante.",
      funnelsTitle: "Canales de Entrada",
      funnelsDesc: "Disparadores de contacto simplificados en secciones de alto impacto.",
      readabilityTitle: "Legibilidad Extrema",
      readabilityDesc: "Formatos micro-tipográficos optimizados para pantallas móviles.",
      accessibilityTitle: "Accesibilidad Completa",
      accessibilityDesc: "Contraste de color óptimo y elementos interactivos amplios.",
      intakeConversionPipeline: "Flujo de Conversión de Consultas",
      visualStep1Title: "Primer Contacto",
      visualStep1Desc: "Confort cognitivo inmediato gracias a un diseño limpio.",
      secureTag: "SEGURO",
      visualStep2Title: "Selección de Servicio",
      visualStep2Desc: "Enrutamiento directo al área de práctica legal correspondiente.",
      routedTag: "ENRUTADO",
      visualStep3Title: "Consulta Recibida",
      visualStep3Desc: "Transmisión encriptada a la bandeja de entrada profesional.",
      resolvedTag: "RESUELTO",
      aestheticRefinementTag: "04 // REFINAMIENTO ESTÉTICO",
      visualDirectionTitle: "DIRECCIÓN VISUAL",
      visualDirectionDesc: "Combinando proporciones editoriales impecables con sobriedad profesional, creamos una identidad que inspira solidez. Amplios espacios en blanco, tipografía distinguida y un fondo color pizarra establecen credibilidad de forma natural.",
      posterArtwork: "ILUSTRACIÓN DEL PÓSTER // PANTALLA DESTACADA DEL CASO DE ESTUDIO",
      deepBrainResetCreative: "DEEP BRAIN RESET CREATIVE PRODUCTION © 2026",
      classicPaletteTitle: "Paleta Sobria",
      classicPaletteDesc: "Tonos oscuros combinados con blanco hueso suave para reflejar seriedad y excelencia legal.",
      subtleAccentTitle: "Detalles en Contraste",
      subtleAccentDesc: "Acentos en azul eléctrico para guiar al usuario hacia los puntos de contacto más importantes.",
      pristineSpacingTitle: "Distribución Amplia",
      pristineSpacingDesc: "Generosos márgenes y espacios en blanco que permiten leer la información legal sin fatiga.",
      productionPipelineTag: "05 // PROCESO DE PRODUCCIÓN",
      developmentTitle: "DESARROLLO",
      developmentDesc: "Nuestra metodología de desarrollo web opera como una secuencia de pasos perfectamente integrada para maximizar el rendimiento técnico y la velocidad de carga global:",
      servicesProvidedTitle: "SERVICIOS PRESTADOS",
      integratedTechnologyTitle: "TECNOLOGÍA INTEGRADA",
      integratedTechDesc: "Con un enfoque en renderizado estático y rendimiento impecable, garantizamos velocidades excepcionales en cualquier red:",
      telemetryStats: "ESTADÍSTICAS DE RENDIMIENTO",
      pageSpeedRatings: "CALIFICACIÓN DE VELOCIDAD",
      lighthouseScore: "100 / 100 LIGHTHOUSE",
      projectResultTag: "06 // RESULTADO DEL PROYECTO",
      projectResultQuote: "\"Un sitio web legal de nivel premium diseñado para inspirar confianza, claridad y solidez jurídica.\"",
      projectResultDesc: "El portal final organiza información que suele ser densa en una experiencia digital pulida y amigable, permitiendo consultas fluidas.",
      upNext: "SIGUIENTE // CONTINUAR AL SUB-SISTEMA",
      menuNoirTitle: "MENU NOIR",
      menuNoirDesc: "Explore una sofisticada plataforma SaaS de automatización de menús en negro mate para marcas culinarias de élite.",
      exploreNextCaseStudy: "EXPLORAR EL SIGUIENTE CASO DE ESTUDIO",
      pipelineSteps: [
        { step: "01", label: "Definición", desc: "Análisis del perfil profesional, público objetivo y posicionamiento jurídico." },
        { step: "02", label: "Estructura", desc: "Distribución de servicios legales en secciones lógicas y amigables." },
        { step: "03", label: "Arquitectura", desc: "Esquematización de rutas sencillas para encontrar soporte legal de inmediato." },
        { step: "04", label: "Identidad Visual", desc: "Creación de un estilo editorial sobrio y de lujo, alejado de los clichés comunes del sector." },
        { step: "05", label: "Maquetación", desc: "Diseño de cuadrículas fluidas adaptadas a pantallas móviles y de escritorio." },
        { step: "06", label: "Desarrollo", desc: "Programación de componentes modulares en React con rendimiento de primer nivel." },
        { step: "07", label: "Control de Código", desc: "Gestión de repositorios para auditorías técnicas y optimización constante." },
        { step: "08", label: "Despliegue", desc: "Lanzamiento global mediante redes perimetrales CDN con baja latencia." },
        { step: "09", label: "Optimización", desc: "Certificación de velocidad de carga instantánea y pruebas de accesibilidad." }
      ],
      providedServices: [
        { title: "Diseño Web", desc: "Creación de interfaces sobrias con alineaciones impecables y estilos modernos." },
        { title: "Estructura de UX", desc: "Flujos de navegación intuitivos diseñados para simplificar las consultas profesionales." },
        { title: "Redacción de Contenido", desc: "Adaptación de términos jurídicos densos a explicaciones fluidas y accesibles." },
        { title: "Maquetación Móvil", desc: "Adaptación perfecta de la experiencia de lectura a dispositivos móviles." },
        { title: "Dirección Artística", desc: "Estética refinada con tipografía de alto nivel, tonos pizarra y gris neutro." },
        { title: "Fundamentos de SEO", desc: "Indexación semántica completa para maximizar la visibilidad orgánica en búsquedas." },
        { title: "Lanzamiento Seguro", desc: "Configuración e integración técnica en servidores estáticos de alta velocidad." },
        { title: "Optimización Técnica", desc: "Reducción de tamaño de activos y scripts para descargas instantáneas." }
      ],
      technologies: [
        "Google AI Studio",
        "GitHub",
        "Cloudflare",
        "Diseño Adaptable",
        "SEO Técnico",
        "Velocidad Optimizada",
        "TypeScript",
        "React",
        "Tailwind CSS"
      ]
    },
    de: {
      returnToStudio: "Zurück zur Auswahl",
      caseStudyTag: "CASE STUDY 03 // Webdesign & Entwicklung",
      premiumLegalWebsite: "Premium-Anwalts-Website",
      visitWebsite: "Website besuchen",
      viewCaseStudy: "Fallstudie ansehen",
      scrollToDecrypt: "REINSCROLLEN ZUM ENTSCHLÜSSELN",
      contextualBrief: "01 // KONTEXT-BRIEF",
      projectOverview: "PROJEKTÜBERSICHT",
      metadataIndex: "METADATEN-INDEX",
      specLabels: {
        client: "Kunde",
        industry: "Branche",
        projectType: "Projekttyp",
        websiteUrl: "Website-URL",
        ourRole: "Unsere Rolle"
      },
      specValues: {
        industry: "Rechtsberatung",
        projectType: "Premium-Website",
        ourRole: "Design, Entwicklung & Bereitstellung"
      },
      operationalStatus: "BETRIEBSSTATUS",
      activePublication: "AKTIV VERÖFFENTLICHT // ONLINE",
      rearchitectingTradition: "02 // TRADITION NEU DENKEN",
      challengeTitle: "DIE HERAUSFORDERUNG",
      challengeSub: "Anwaltswebsites wirken oft überladen, was zu Frustration führt.",
      aestheticCredibility: "Ästhetische Glaubwürdigkeit",
      aestheticCredibilityDesc: "Rechtliche Fachinhalte in ein ansprechendes redaktionelles Umfeld verwandeln.",
      foundationalRequirements: "Die größte Herausforderung bestand darin, eine klare Nutzererfahrung zu schaffen.",
      requirement01Title: "01 // Fachbereichsklarheit",
      requirement01Desc: "Mehrere Rechtsbereiche übersichtlich darstellen.",
      requirement02Title: "02 // Verständliche Sprache",
      requirement02Desc: "Komplexe rechtliche Prozesse einfach erklären.",
      requirement03Title: "03 // Vertrauensaufbau",
      requirement03Desc: "Seriosität, Ethik und Vertrauen vermitteln.",
      requirement04Title: "04 // Einfache Kontaktaufnahme",
      requirement04Desc: "Direkte und sichere Kanäle zur Kontaktaufnahme bereitstellen.",
      requirement05Title: "05 // Mobile Anpassung",
      requirement05Desc: "Flüssige Darstellung auf allen Bildschirmgrößen sichern.",
      requirement06Title: "06 // Klare Identität",
      requirement06Desc: "Eine elegante visuelle Linie beibehalten.",
      cognitivePathwaysTag: "03 // KOGNITIVE PFADE",
      uxStrategyTitle: "UX-STRATEGIE",
      uxStrategyDesc1: "Um Frustration zu vermeiden, haben wir uns auf eine durchdachte Informationshierarchie konzentriert.",
      uxStrategyDesc2: "Kunden können sofort ihre Interessengebiete auswählen und erhalten klare Erklärungen.",
      uxStrategyDesc3: "Das strukturierte Layout schont die Aufmerksamkeit der Nutzer.",
      funnelsTitle: "Trichter",
      funnelsDesc: "Strategische Kontaktpunkte auf der Seite.",
      readabilityTitle: "Lesbarkeit",
      readabilityDesc: "Spezielle mobile Mikro-Typografie.",
      accessibilityTitle: "Barrierefreiheit",
      accessibilityDesc: "Sehr gute Kontraste und klare Interaktionen.",
      intakeConversionPipeline: "Kontakt-Konvertierungspipeline",
      visualStep1Title: "Erstkontakt",
      visualStep1Desc: "Sofortige Klarheit und beruhigendes Design.",
      secureTag: "SICHER",
      visualStep2Title: "Fachbereich-Zuweisung",
      visualStep2Desc: "Zielsicheres Finden des passenden Services.",
      routedTag: "GELEITET",
      visualStep3Title: "Anfrage gesendet",
      visualStep3Desc: "Direkte, sichere Übermittlung.",
      resolvedTag: "GELÖST",
      aestheticRefinementTag: "04 // VISUELLE ENTWICKLUNG",
      visualDirectionTitle: "VISUELLE DIREKTION",
      visualDirectionDesc: "Durch die Reduzierung auf wesentliche Elemente entsteht eine zeitlose juristische Eleganz.",
      posterArtwork: "POSTER-KUNST // HAUPTBILDSCHIRM DER FALLSTUDIE",
      deepBrainResetCreative: "DEEP BRAIN RESET CREATIVE PRODUCTION © 2026",
      classicPaletteTitle: "Klassische Farbpalette",
      classicPaletteDesc: "Dunkle Anthrazittöne kombiniert mit elegantem Off-White.",
      subtleAccentTitle: "Dezente Akzente",
      subtleAccentDesc: "Elektrisches Blau zur klaren Nutzerführung.",
      pristineSpacingTitle: "Großzügiges Layout",
      pristineSpacingDesc: "Viel Weißraum, um wichtige Rechtsinhalte atmen zu lassen.",
      productionPipelineTag: "05 // ENTWICKLUNG",
      developmentTitle: "ENTWICKLUNG",
      developmentDesc: "Unser Entwicklungsprozess ist streng sequentiell aufgebaut, um höchste Qualität zu gewährleisten.",
      servicesProvidedTitle: "PROJEKT-DIENSTLEISTUNGEN",
      integratedTechnologyTitle: "INTEGRIERTE TECHNOLOGIE",
      integratedTechDesc: "Wir nutzen modernste Frameworks für optimale Ladezeiten weltweit.",
      telemetryStats: "TELEMETRIE-STATISTIK",
      pageSpeedRatings: "LADEGESCHWINDIGKEIT",
      lighthouseScore: "100 / 100 LIGHTHOUSE",
      projectResultTag: "06 // PROJEKTERGEBNIS",
      projectResultQuote: "\"Eine professionelle Rechts-Website, die Vertrauen, Klarheit und Kompetenz ausstrahlt.\"",
      projectResultDesc: "Die finale Website macht dichte, fragmentierte juristische Daten leicht zugänglich.",
      upNext: "NÄCHSTES PROJEKT // WEITER ZUM SYSTEM",
      menuNoirTitle: "MENU NOIR",
      menuNoirDesc: "Entdecken Sie eine matte, elegante SaaS-Menüplattform für die Spitzengastronomie.",
      exploreNextCaseStudy: "NÄCHSTE FALLSTUDIE ERKUNDEN",
      pipelineSteps: [],
      providedServices: [],
      technologies: []
    }
  };

  const d = localDict[language] || localDict.en;
  const pipelineSteps = d.pipelineSteps && d.pipelineSteps.length > 0 ? d.pipelineSteps : localDict.en.pipelineSteps;
  const providedServices = d.providedServices && d.providedServices.length > 0 ? d.providedServices : localDict.en.providedServices;
  const technologies = d.technologies && d.technologies.length > 0 ? d.technologies : localDict.en.technologies;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-black text-studio-secondary relative z-50 selection:bg-studio-primary selection:text-studio-bg overflow-x-hidden font-sans"
    >
      {/* Floating Close/Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 premium-interactive text-[10px] font-mono uppercase tracking-widest rounded-sm cursor-pointer shadow-lg shadow-black/85"
        >
          <ArrowLeft size={12} />
          <span>{d.returnToStudio}</span>
        </button>
      </div>

      {/* 1. FULL-SCREEN HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-zinc-900/60">
        {/* Full-screen Background Cover Image */}
        <div className="absolute inset-0 z-0 scale-100 select-none">
          <img 
            src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png"
            alt="Emilia Marsicano Abogada Portfolio Artwork"
            className="w-full h-full object-cover object-center opacity-45 brightness-75 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Deep Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
          
          <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vh] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[30vw] h-[30vh] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10 mt-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-studio-primary bg-blue-950/40 border border-blue-900/40 px-5 py-2 rounded-full inline-block backdrop-blur-md shadow-lg uppercase">
              {d.caseStudyTag}
            </span>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-light text-white tracking-tight leading-none uppercase pt-3">
              EMILIA MARSICANO
            </h1>
            
            <div className="flex justify-center items-center gap-3">
              <span className="h-[1px] w-8 bg-blue-500/30"></span>
              <p className="text-sm md:text-xl text-blue-400 font-mono tracking-[0.4em] uppercase">
                {d.premiumLegalWebsite}
              </p>
              <span className="h-[1px] w-8 bg-blue-500/30"></span>
            </div>
          </motion.div>

          {/* Action Button Row */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <a
              href="https://www.emiliamarsicanoabogada.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 border border-studio-primary bg-studio-primary text-black hover:bg-transparent hover:text-studio-primary font-mono text-[11px] uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer font-bold shadow-lg shadow-blue-500/10"
            >
              <Globe size={14} />
              <span>{d.visitWebsite}</span>
            </a>
            <a
              href="#overview-section"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("overview-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-9 py-4 border border-zinc-800 text-zinc-300 hover:border-zinc-500 hover:text-white bg-transparent font-mono text-[11px] uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{d.viewCaseStudy}</span>
              <ArrowRight size={12} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-500">
            {d.scrollToDecrypt}
          </span>
          <div className="w-[1px] h-10 bg-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-studio-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section id="overview-section" className="py-24 md:py-32 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="absolute inset-0 bg-grid-overlay opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Project Description */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
                  {d.contextualBrief}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
                  {d.projectOverview}
                </h2>
              </div>
              
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                <p>
                  {csData.subtitle}
                </p>
                <p>
                  {csData.challenge}
                </p>
                <p>
                  {csData.strategy}
                </p>
              </div>
            </div>

            {/* Right Column: Project details cards */}
            <div className="lg:col-span-5 bg-black border border-zinc-900 p-8 rounded-sm space-y-8 shadow-2xl">
              <h3 className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase border-b border-zinc-900 pb-4">
                {d.metadataIndex}
              </h3>
              
              <div className="space-y-5">
                <div className="flex justify-between items-start text-xs border-b border-zinc-900/50 pb-3">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider text-[10px]">{d.specLabels.client}</span>
                  <span className="text-white font-medium text-right">{csData.client}</span>
                </div>
                
                <div className="flex justify-between items-start text-xs border-b border-zinc-900/50 pb-3">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider text-[10px]">{d.specLabels.industry}</span>
                  <span className="text-white font-medium text-right">{d.specValues.industry}</span>
                </div>
                
                <div className="flex justify-between items-start text-xs border-b border-zinc-900/50 pb-3">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider text-[10px]">{d.specLabels.projectType}</span>
                  <span className="text-white font-medium text-right">{d.specValues.projectType}</span>
                </div>
                
                <div className="flex justify-between items-start text-xs border-b border-zinc-900/50 pb-3">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider text-[10px]">{d.specLabels.websiteUrl}</span>
                  <a 
                    href="https://www.emiliamarsicanoabogada.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-studio-primary hover:underline font-mono flex items-center space-x-1"
                  >
                    <span>emiliamarsicanoabogada.com</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
                
                <div className="flex justify-between items-start text-xs pb-1">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider text-[10px]">{d.specLabels.ourRole}</span>
                  <span className="text-white font-medium text-right">{d.specValues.ourRole}</span>
                </div>
              </div>

              <div className="pt-4">
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
                  {d.operationalStatus}
                </span>
                <div className="flex items-center space-x-2.5 bg-zinc-950 border border-zinc-900 p-3 rounded-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                    {d.activePublication}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="py-24 md:py-32 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
                {d.rearchitectingTradition}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight leading-tight">
                {d.challengeTitle}
              </h2>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {d.challengeSub}
              </p>
              
              <div className="border-t border-zinc-900 pt-6 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-950/20 border border-blue-900/40 rounded-sm text-studio-primary mt-1">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300">{d.aestheticCredibility}</h4>
                    <p className="text-xs text-zinc-500 font-light mt-1.5 leading-relaxed">
                      {d.aestheticCredibilityDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative + Action List */}
            <div className="lg:col-span-7 space-y-8 lg:pl-8">
              <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed">
                {d.foundationalRequirements}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm space-y-3">
                  <div className="text-xs font-mono text-studio-primary">{d.requirement01Title}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {d.requirement01Desc}
                  </p>
                </div>

                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm space-y-3">
                  <div className="text-xs font-mono text-studio-primary">{d.requirement02Title}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {d.requirement02Desc}
                  </p>
                </div>

                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm space-y-3">
                  <div className="text-xs font-mono text-studio-primary">{d.requirement03Title}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {d.requirement03Desc}
                  </p>
                </div>

                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm space-y-3">
                  <div className="text-xs font-mono text-studio-primary">{d.requirement04Title}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {d.requirement04Desc}
                  </p>
                </div>

                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm space-y-3">
                  <div className="text-xs font-mono text-studio-primary">{d.requirement05Title}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {d.requirement05Desc}
                  </p>
                </div>

                <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-sm space-y-3">
                  <div className="text-xs font-mono text-studio-primary">{d.requirement06Title}</div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {d.requirement06Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. UX STRATEGY */}
      <section className="py-24 md:py-32 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="absolute inset-0 bg-grid-overlay opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Strategic details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
                  {d.cognitivePathwaysTag}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
                  {d.uxStrategyTitle}
                </h2>
              </div>

              <div className="space-y-5 text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                <p>
                  {d.uxStrategyDesc1}
                </p>
                <p>
                  {d.uxStrategyDesc2}
                </p>
                <p>
                  {d.uxStrategyDesc3}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="border-l border-zinc-800 pl-4 space-y-1">
                  <span className="text-xs font-mono text-studio-primary uppercase">{d.funnelsTitle}</span>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">{d.funnelsDesc}</p>
                </div>
                <div className="border-l border-zinc-800 pl-4 space-y-1">
                  <span className="text-xs font-mono text-studio-primary uppercase">{d.readabilityTitle}</span>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">{d.readabilityDesc}</p>
                </div>
                <div className="border-l border-zinc-800 pl-4 space-y-1">
                  <span className="text-xs font-mono text-studio-primary uppercase">{d.accessibilityTitle}</span>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">{d.accessibilityDesc}</p>
                </div>
              </div>
            </div>

            {/* Right side: Abstract Mockup / Visual Graphic */}
            <div className="lg:col-span-6 border border-zinc-900 bg-black rounded-sm p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-[7px] font-mono text-zinc-700 uppercase tracking-widest">
                SYSTEM_UX_FRAMEWORK // V03
              </div>

              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-widest border-b border-zinc-900 pb-3 flex items-center gap-2">
                <Layout size={12} className="text-studio-primary animate-pulse" />
                {d.intakeConversionPipeline}
              </h4>

              <div className="space-y-4 pt-2">
                {/* Visual Step 1 */}
                <div className="flex items-center space-x-4 p-3.5 bg-zinc-950 border border-zinc-900/60 rounded-sm">
                  <span className="text-xs font-mono text-zinc-600 bg-black px-2 py-1 border border-zinc-900 rounded-sm">1</span>
                  <div className="flex-1 space-y-0.5">
                    <div className="text-xs text-white uppercase tracking-wider font-medium">{d.visualStep1Title}</div>
                    <div className="text-[10px] text-zinc-500">{d.visualStep1Desc}</div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500 bg-emerald-950/20 px-2 py-0.5 rounded-sm">{d.secureTag}</span>
                </div>

                {/* Visual Step 2 */}
                <div className="flex items-center space-x-4 p-3.5 bg-zinc-950 border border-zinc-900/60 rounded-sm">
                  <span className="text-xs font-mono text-zinc-600 bg-black px-2 py-1 border border-zinc-900 rounded-sm">2</span>
                  <div className="flex-1 space-y-0.5">
                    <div className="text-xs text-white uppercase tracking-wider font-medium">{d.visualStep2Title}</div>
                    <div className="text-[10px] text-zinc-500">{d.visualStep2Desc}</div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500 bg-emerald-950/20 px-2 py-0.5 rounded-sm">{d.routedTag}</span>
                </div>

                {/* Visual Step 3 */}
                <div className="flex items-center space-x-4 p-3.5 bg-zinc-950 border border-zinc-900/60 rounded-sm">
                  <span className="text-xs font-mono text-zinc-600 bg-black px-2 py-1 border border-zinc-900 rounded-sm">3</span>
                  <div className="flex-1 space-y-0.5">
                    <div className="text-xs text-white uppercase tracking-wider font-medium">{d.visualStep3Title}</div>
                    <div className="text-[10px] text-zinc-500">{d.visualStep3Desc}</div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500 bg-emerald-950/20 px-2 py-0.5 rounded-sm">{d.resolvedTag}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VISUAL DIRECTION */}
      <section className="py-24 md:py-32 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
                {d.aestheticRefinementTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase mt-4 tracking-tight">
                {d.visualDirectionTitle}
              </h2>
            </div>

            <div className="lg:col-span-7 max-w-2xl lg:pl-4">
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {d.visualDirectionDesc}
              </p>
            </div>
          </div>

          {/* Large Portfolio Image Container */}
          <div className="space-y-8">
            <div className="border border-zinc-900 bg-zinc-950 p-4 md:p-6 rounded-sm relative overflow-hidden group shadow-2xl">
              <div className="aspect-video w-full relative overflow-hidden rounded-sm flex items-center justify-center bg-zinc-950">
                <img 
                  src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png"
                  alt="Emilia Marsicano Abogada Website Screenshot"
                  className="max-w-full max-h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] opacity-95 transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-zinc-500 uppercase tracking-widest gap-4 md:gap-0">
                <span>{d.posterArtwork}</span>
                <span>{d.deepBrainResetCreative}</span>
              </div>
            </div>

            {/* Screenshots details grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 border border-zinc-900 rounded-sm bg-zinc-950 space-y-3">
                <span className="text-[10px] font-mono text-studio-primary uppercase block">{d.classicPaletteTitle}</span>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {d.classicPaletteDesc}
                </p>
              </div>

              <div className="p-6 border border-zinc-900 rounded-sm bg-zinc-950 space-y-3">
                <span className="text-[10px] font-mono text-studio-primary uppercase block">{d.subtleAccentTitle}</span>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {d.subtleAccentDesc}
                </p>
              </div>

              <div className="p-6 border border-zinc-900 rounded-sm bg-zinc-950 space-y-3">
                <span className="text-[10px] font-mono text-studio-primary uppercase block">{d.pristineSpacingTitle}</span>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {d.pristineSpacingDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. DEVELOPMENT PIPELINE */}
      <section className="py-24 md:py-32 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="absolute inset-0 bg-grid-overlay opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
                {d.productionPipelineTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase mt-4 tracking-tight">
                {d.developmentTitle}
              </h2>
            </div>

            <div className="lg:col-span-7 max-w-2xl lg:pl-4">
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {d.developmentDesc}
              </p>
            </div>
          </div>

          {/* Sequential Pipeline Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pipelineSteps.map((step: any) => (
              <div 
                key={step.step}
                className="p-8 bg-black border border-zinc-900 rounded-sm space-y-4 hover:border-zinc-800 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-xl text-zinc-800/40 group-hover:text-studio-primary/20 transition-colors">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-studio-primary uppercase tracking-widest block">
                    STAGE_{step.step}
                  </span>
                  <h4 className="text-base font-display font-light text-white uppercase tracking-wide group-hover:text-studio-primary transition-colors">
                    {step.label}
                  </h4>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed pt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Technical Specs Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 pt-16 border-t border-zinc-900">
            {/* Left: Services Provided */}
            <div className="space-y-6">
              <h4 className="text-xs font-mono text-studio-primary uppercase tracking-widest flex items-center gap-2">
                <Layers size={12} />
                {d.servicesProvidedTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {providedServices.map((service: any, i: number) => (
                  <div key={i} className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-sm space-y-1">
                    <span className="text-[10px] font-mono text-zinc-300 uppercase block">{service.title}</span>
                    <p className="text-[11px] text-zinc-500 font-light leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technology Stack */}
            <div className="space-y-6 lg:pl-8">
              <h4 className="text-xs font-mono text-studio-primary uppercase tracking-widest flex items-center gap-2">
                <Cpu size={12} />
                {d.integratedTechnologyTitle}
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {d.integratedTechDesc}
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {technologies.map((tech: string, i: number) => (
                  <span 
                    key={i}
                    className="text-[10px] font-mono text-studio-primary bg-zinc-900 border border-zinc-900 px-3.5 py-1.5 rounded-sm hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-sm mt-8 space-y-2">
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">{d.telemetryStats}</span>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-zinc-400">{d.pageSpeedRatings}</span>
                  <span className="text-emerald-500 font-mono font-medium">{d.lighthouseScore}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PROJECT RESULT HIGHLIGHT */}
      <section className="py-28 bg-black relative border-b border-zinc-900/60 overflow-hidden">
        {/* Subtle glow layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-blue-500/[0.02] rounded-full filter blur-[150px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="w-12 h-12 rounded-full border border-zinc-850 flex items-center justify-center text-studio-primary mx-auto">
            <ShieldCheck size={20} className="text-studio-primary animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
            {d.projectResultTag}
          </span>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight leading-tight uppercase max-w-4xl mx-auto">
            {d.projectResultQuote}
          </blockquote>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto font-light leading-relaxed">
            {d.projectResultDesc}
          </p>
        </div>
      </section>

      {/* 8. NEXT PROJECT PORTAL */}
      <section className="py-24 md:py-32 bg-zinc-950 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-4">
            {d.upNext}
          </span>
          
          <div 
            onClick={onNextProject || onBack}
            className="group block bg-black border border-zinc-900 hover:border-studio-caption/40 p-8 md:p-12 rounded-sm text-center transition-all duration-500 cursor-pointer shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-studio-primary uppercase tracking-widest block">
                CASE STUDY 04 // AI RESTAURANT PLATFORM
              </span>
              <h3 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight group-hover:text-studio-primary transition-colors">
                {d.menuNoirTitle}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
                {d.menuNoirDesc}
              </p>
            </div>

            <div className="pt-8 flex justify-center items-center space-x-2 text-xs font-mono text-studio-primary group-hover:text-white transition-colors">
              <span>{d.exploreNextCaseStudy}</span>
              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
