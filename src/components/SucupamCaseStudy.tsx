import { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Globe 
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getLocalizedCaseStudies } from "../portfolioTranslations";

interface SucupamCaseStudyProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export default function SucupamCaseStudy({ onBack, onNextProject }: SucupamCaseStudyProps) {
  const { language } = useLanguage();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caseStudies = getLocalizedCaseStudies(language);
  const csData = caseStudies.find(c => c.id === "sucupam") || caseStudies[5]; // Sucupam

  const localDict: Record<string, any> = {
    en: {
      returnToStudio: "Return to Showcase",
      caseStudyTag: "Case Study 04 // WEB DESIGN & E-COMMERCE",
      platformTitle: "Premium Souvenir E-Commerce Platform",
      specLabels: {
        client: "Client",
        coreFocus: "Core Focus",
        year: "Year",
        currentStatus: "Current Status"
      },
      specValues: {
        client: "SUCUPAM SA",
        coreFocus: "Industrial E-Commerce",
        year: "2026",
        currentStatus: "Active Production"
      },
      briefingTag: "01 // BRIEFING",
      briefingTitle: "Premium Crafts.\nDigital Flagship.",
      visitLive: "Visit Sucupam Live",
      challengeTitle: "The Challenge",
      solutionTitle: "The Solution",
      scopeTag: "02 // SCOPE OF DELIVERY",
      servicesTitle: "Services Rendered.",
      productionTag: "03 // PRODUCTION METHODOLOGY",
      engineeringProcessTitle: "The Engineering Process.",
      engineeringProcessDesc: "We design and build from the ground up, following a methodical, transparent structure designed to ensure sub-second rendering, structural security, and premium editorial visuals.",
      sequenceTag: "04 // EDITORIAL SEQUENCE",
      bespokeGalleryTitle: "Bespoke Gallery Showcase.",
      bespokeGalleryDesc: "Explore the individual modules of the custom Sucupam e-commerce experience, presented in an editorial progression that emphasizes content depth and functional layout efficiency.",
      focusAreas: "Focus Areas",
      screenView: "SCREEN VIEW",
      portfolioScreen: "PORTFOLIO_SCREEN",
      productionCoreTag: "05 // PRODUCTION CORE",
      techStackTitle: "Platform Tech Stack.",
      techStackDesc: "By bypassing heavy template frameworks and rendering customized static outputs directly on CDN edge nodes, we achieved lightning-fast responsiveness and structural safety.",
      keyPerformanceTag: "06 // KEY PERFORMANCE OUTCOMES",
      outcomeQuote: "\"Reduced latency from 3.8s to sub-100ms, driving B2B inquiries up by +45%.\"",
      pageLoadTime: "Page Load Time",
      directInquiries: "Direct Inquiries",
      catalogFriction: "Catalog Friction",
      continueNarrative: "CONTINUE THE NARRATIVE",
      nextProduction: "NEXT PRODUCTION",
      axonRevolution: "AXON REVOLUTION",
      exploreNextStudy: "Explore the next cinematic case study. An AI-powered design collection investigating dystopian visual identity.",
      launchNextProject: "Launch Next Project",
      pipelineSteps: [
        { step: "01", label: "Brand Alignment", desc: "Aligning Sucupam's legacy of premium craftsmanship with an elevated, luxury B2B and B2C positioning." },
        { step: "02", label: "Art Direction", desc: "Establishing an editorial digital language utilizing generous negative space and raw textural contrasts." },
        { step: "03", label: "Information Architecture", desc: "Redefining product catalog taxonomy and modular specs for seamless part discovery." },
        { step: "04", label: "Layout Engineering", desc: "Creating high-density specification grids paired with immersive fullscreen product displays." },
        { step: "05", label: "Headless Commerce", desc: "Integrating clean frontend React interfaces with a lightweight product catalog engine." },
        { step: "06", label: "Core Performance", desc: "Optimizing code-splitting and asset loading for blazing fast page loads and sub-100ms interactions." },
        { step: "07", label: "Responsive Refinement", desc: "Polishing mobile-first layouts to feel natural, fast, and tactile on touch screens." },
        { step: "08", label: "B2B Funnels", desc: "Structuring direct wholesale enquiry routes with pre-populated specification lists." },
        { step: "09", label: "Launch & Security", desc: "Deploying to CDN edge nodes with robust SSL certifications and continuous uptime auditing." }
      ],
      providedServices: [
        { title: "UX Strategy", desc: "Aligning business objectives with customer workflows to design high-converting, premium digital commerce pipelines." },
        { title: "Editorial Design", desc: "Developing a custom visual identity using clean grid systems, high-contrast layouts, and luxurious spacing configurations." },
        { title: "Information Architecture", desc: "Structuring nested taxonomies and catalogs to facilitate frictionless searching and clean exploration." },
        { title: "Responsive Development", desc: "Engineering pixel-perfect screen layouts to ensure fluid adaptation and rich interactions across all screen sizes." },
        { title: "E-Commerce", desc: "Building secure, low-latency B2B and B2C shopping checkout systems customized for bulk wholesale and single purchases." },
        { title: "Product Discovery", desc: "Creating advanced discovery features, search parameters, and category filtering to enhance user engagement." },
        { title: "Custom Ordering Flow", desc: "Architecting a multi-step, clean custom configuration experience to reduce purchasing friction and increase trust." },
        { title: "Content Strategy", desc: "Crafting a scalable editorial model to convey heritage storytelling, custom collection inspiration, and education." },
        { title: "SEO", desc: "Optimizing platform taxonomy, technical page templates, and meta-data layers to drive high organic search visibility." },
        { title: "Performance Optimization", desc: "Leveraging static rendering and asset streaming to achieve sub-100ms speeds and exceptional core web vitals." }
      ],
      galleryItems: [
        {
          step: "01",
          title: "01 — PREMIUM HOMEPAGE",
          desc: "The homepage establishes the visual identity through a calm editorial composition that balances handcrafted aesthetics, luxury positioning and conversion-oriented architecture while introducing the brand's personalized souvenir collections."
        },
        {
          step: "02",
          title: "02 — PRODUCT DISCOVERY",
          desc: "Products are organized through a clean editorial catalog designed to simplify navigation across multiple categories while maintaining a premium visual presentation and encouraging exploration."
        },
        {
          step: "03",
          title: "03 — CUSTOMIZATION WORKFLOW",
          desc: "A dedicated educational experience guides customers through every stage of personalization, reducing uncertainty and making the ordering process transparent before production begins."
        },
        {
          step: "04",
          title: "04 — PRODUCT DETAIL EXPERIENCE",
          desc: "Each product page combines premium photography, technical specifications, personalization options and purchasing information inside a carefully structured layout that supports informed buying decisions."
        },
        {
          step: "05",
          title: "05 — SEO CONTENT PLATFORM",
          desc: "An integrated editorial publishing system supports long-term organic acquisition through educational articles, inspiration, event planning content and continuous search engine optimization."
        }
      ]
    },
    es: {
      returnToStudio: "Volver a Proyectos",
      caseStudyTag: "Caso de Estudio 04 // DISEÑO WEB Y E-COMMERCE",
      platformTitle: "Plataforma Premium de E-Commerce de Souvenirs",
      specLabels: {
        client: "Cliente",
        coreFocus: "Enfoque Central",
        year: "Año",
        currentStatus: "Estado Actual"
      },
      specValues: {
        client: "SUCUPAM SA",
        coreFocus: "E-Commerce Industrial",
        year: "2026",
        currentStatus: "Producción Activa"
      },
      briefingTag: "01 // BRIEFING",
      briefingTitle: "Artesanía Premium.\nFlagship Digital.",
      visitLive: "Visitar Sucupam en Vivo",
      challengeTitle: "El Desafío",
      solutionTitle: "La Solución",
      scopeTag: "02 // ALCANCE DE ENTREGA",
      servicesTitle: "Servicios Prestados.",
      productionTag: "03 // METODOLOGÍA DE PRODUCCIÓN",
      engineeringProcessTitle: "El Proceso de Ingeniería.",
      engineeringProcessDesc: "Diseñamos y construimos desde cero, siguiendo una estructura metódica y transparente para garantizar renderizados de menos de un segundo, seguridad estructural y visuales editoriales premium.",
      sequenceTag: "04 // SECUENCIA EDITORIAL",
      bespokeGalleryTitle: "Muestra de Galería Exclusiva.",
      bespokeGalleryDesc: "Explore los módulos de la experiencia personalizada de e-commerce de Sucupam, presentados en una progresión editorial que enfatiza la profundidad del contenido y la eficiencia del diseño funcional.",
      focusAreas: "Áreas de Enfoque",
      screenView: "VISTA DE PANTALLA",
      portfolioScreen: "PORTAFOLIO_PANTALLA",
      productionCoreTag: "05 // NÚCLEO DE PRODUCCIÓN",
      techStackTitle: "Pila de Tecnología de la Plataforma.",
      techStackDesc: "Al evitar los marcos de plantillas pesados y renderizar salidas estáticas personalizadas directamente en nodos de borde de CDN, logramos una capacidad de respuesta ultrarrápida y seguridad estructural.",
      keyPerformanceTag: "06 // RESULTADOS CLAVE DE RENDIMIENTO",
      outcomeQuote: "\"Reducción de latencia de 3.8s a menos de 100ms, impulsando consultas B2B en +45%.\"",
      pageLoadTime: "Carga de Página",
      directInquiries: "Consultas Directas",
      catalogFriction: "Fricción del Catálogo",
      continueNarrative: "CONTINUAR LA NARRATIVA",
      nextProduction: "SIGUIENTE PRODUCCIÓN",
      axonRevolution: "AXON REVOLUTION",
      exploreNextStudy: "Explore el siguiente caso de estudio cinematográfico. Una colección de diseño potenciada por IA que investiga la identidad visual distópica.",
      launchNextProject: "Lanzar Siguiente Proyecto",
      pipelineSteps: [
        { step: "01", label: "Alineación de Marca", desc: "Alineación de la herencia artesanal de Sucupam con un posicionamiento de lujo B2B y B2C." },
        { step: "02", label: "Dirección de Arte", desc: "Establecimiento de un lenguaje digital editorial que utiliza un generoso espacio negativo y contrastes de texturas." },
        { step: "03", label: "Arquitectura de Información", desc: "Redefinición de la taxonomía del catálogo de productos y especificaciones modulares para un descubrimiento de partes sin fricciones." },
        { step: "04", label: "Ingeniería de Layout", desc: "Creación de cuadrículas de especificaciones de alta densidad combinadas con visualizaciones inmersivas a pantalla completa." },
        { step: "05", label: "E-Commerce Headless", desc: "Integración de interfaces React frontend limpias con un motor de catálogo de productos ligero." },
        { step: "06", label: "Rendimiento del Núcleo", desc: "Optimización de la carga de activos para cargas de página ultrarrápidas e interacciones en menos de 100 ms." },
        { step: "07", label: "Refinamiento Responsivo", desc: "Pulido de diseños móviles para que se sientan naturales, rápidos y táctiles en pantallas táctiles." },
        { step: "08", label: "Canales B2B", desc: "Estructuración de rutas de consulta de ventas mayoristas con listas de especificaciones precompletadas." },
        { step: "09", label: "Lanzamiento y Seguridad", desc: "Despliegue en nodos de borde CDN con certificaciones SSL robustas y auditoría de tiempo de actividad continua." }
      ],
      providedServices: [
        { title: "Estrategia de UX", desc: "Alineación de los objetivos comerciales con los flujos de trabajo de los clientes para diseñar canales de comercio digital premium de alta conversión." },
        { title: "Diseño Editorial", desc: "Desarrollo de una identidad visual personalizada con sistemas de cuadrículas limpios, diseños de alto contraste y configuraciones de espacio de lujo." },
        { title: "Arquitectura de Información", desc: "Estructuración de taxonomías y catálogos anidados para facilitar la búsqueda sin fricciones y la exploración limpia." },
        { title: "Desarrollo Responsivo", desc: "Ingeniería de layouts de pantalla perfectos para garantizar una adaptación fluida y ricas interacciones en todos los tamaños de pantalla." },
        { title: "E-Commerce", desc: "Construcción de sistemas de pago de compras B2B y B2C de baja latencia personalizados para venta mayorista o compras individuales." },
        { title: "Descubrimiento de Productos", desc: "Creación de funciones de descubrimiento avanzadas, parámetros de búsqueda y filtrado de categorías para mejorar la participación del usuario." },
        { title: "Flujo de Pedido Personalizado", desc: "Arquitectura de una experiencia de configuración personalizada limpia y de varios pasos para reducir la fricción de compra." },
        { title: "Estrategia de Contenidos", desc: "Creación de un modelo editorial escalable para transmitir historias de herencia, inspiración de colecciones personalizadas y educación." },
        { title: "SEO", desc: "Optimización de la taxonomía de la plataforma, plantillas de página técnica y capas de metadatos para impulsar una alta visibilidad de búsqueda orgánica." },
        { title: "Optimización de Rendimiento", desc: "Aprovechamiento del renderizado estático y la transmisión de activos para lograr velocidades inferiores a 100 ms y excelentes métricas web." }
      ],
      galleryItems: [
        {
          step: "01",
          title: "01 — PORTADA PREMIUM",
          desc: "La página de inicio establece la identidad visual a través de una composición editorial tranquila que equilibra la estética artesanal, el posicionamiento de lujo y la arquitectura de conversión."
        },
        {
          step: "02",
          title: "02 — DESCUBRIMIENTO DE PRODUCTOS",
          desc: "Los productos están organizados a través de un catálogo editorial limpio diseñado para simplificar la navegación en múltiples categorías manteniendo una presentación visual premium."
        },
        {
          step: "03",
          title: "03 — FLUJO DE PERSONALIZACIÓN",
          desc: "Una experiencia educativa dedicada guía a los clientes a través de cada etapa de personalización, eliminando la incertidumbre y haciendo transparente el proceso antes de la producción."
        },
        {
          step: "04",
          title: "04 — EXPERIENCIA DE DETALLE DE PRODUCTO",
          desc: "Cada página de producto combina fotografía premium, especificaciones técnicas, opciones de personalización e información de compra dentro de un diseño estructurado."
        },
        {
          step: "05",
          title: "05 — PLATAFORMA DE CONTENIDO SEO",
          desc: "Un sistema de publicación editorial integrado respalda la adquisición orgánica a largo plazo a través de artículos educativos, inspiración y optimización continua de motores de búsqueda."
        }
      ]
    },
    de: {
      returnToStudio: "Zurück zur Auswahl",
      caseStudyTag: "Fallstudie 04 // WEB DESIGN & E-COMMERCE",
      platformTitle: "Premium-Souvenir-E-Commerce-Plattform",
      specLabels: {
        client: "Kunde",
        coreFocus: "Hauptfokus",
        year: "Jahr",
        currentStatus: "Status"
      },
      specValues: {
        client: "SUCUPAM SA",
        coreFocus: "Industrielles E-Commerce",
        year: "2026",
        currentStatus: "Aktive Produktion"
      },
      briefingTag: "01 // BRIEFING",
      briefingTitle: "Premium-Handwerk.\nDigitales Flaggschiff.",
      visitLive: "Sucupam Live besuchen",
      challengeTitle: "Die Herausforderung",
      solutionTitle: "Die Lösung",
      scopeTag: "02 // LEISTUNGSUMFANG",
      servicesTitle: "Erbringte Leistungen.",
      productionTag: "03 // METHODIK",
      engineeringProcessTitle: "Der Ingenieurprozess.",
      engineeringProcessDesc: "Wir konzipieren und entwickeln von Grund auf nach einer methodischen Struktur, um blitzschnelle Ladezeiten zu garantieren.",
      sequenceTag: "04 // REDAKTIONELLE SEQUENZ",
      bespokeGalleryTitle: "Maßgeschneiderte Galerie.",
      bespokeGalleryDesc: "Entdecken Sie die Module der E-Commerce-Erfahrung von Sucupam.",
      focusAreas: "Schwerpunkte",
      screenView: "BILDSCHIRMANSICHT",
      portfolioScreen: "PORTFOLIO_SCREEN",
      productionCoreTag: "05 // KERNTECHNOLOGIE",
      techStackTitle: "Plattform-Technologie-Stack.",
      techStackDesc: "Durch die direkte Bereitstellung auf CDN-Edge-Knoten haben wir eine hervorragende Reaktionsfähigkeit erreicht.",
      keyPerformanceTag: "06 // PERFORMANCE-ERGEBNISSE",
      outcomeQuote: "\"Ladezeit von 3.8s auf unter 100ms gesenkt, wodurch B2B-Anfragen um +45% stiegen.\"",
      pageLoadTime: "Ladezeit",
      directInquiries: "Direkte Anfragen",
      catalogFriction: "Katalog-Reibung",
      continueNarrative: "WEITERLESEN",
      nextProduction: "NÄCHSTE PRODUKTION",
      axonRevolution: "AXON REVOLUTION",
      exploreNextStudy: "Entdecken Sie die nächste Fallstudie.",
      launchNextProject: "Nächstes Projekt starten",
      pipelineSteps: [],
      providedServices: [],
      galleryItems: []
    }
  };

  const d = localDict[language] || localDict.en;
  const pipelineSteps = d.pipelineSteps && d.pipelineSteps.length > 0 ? d.pipelineSteps : localDict.en.pipelineSteps;
  const providedServices = d.providedServices && d.providedServices.length > 0 ? d.providedServices : localDict.en.providedServices;
  const galleryItems = d.galleryItems && d.galleryItems.length > 0 ? d.galleryItems : localDict.en.galleryItems;

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
        <div className="absolute inset-0 z-0 scale-100 select-none bg-zinc-950 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png"
            alt="SUCUPAM Cover Artwork"
            className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-20 brightness-[0.15]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-5" />
          
          {/* Main contained image with no crop */}
          <div className="relative w-full h-full max-w-5xl max-h-[75vh] px-6 md:px-12 flex items-center justify-center z-10 p-4 md:p-12">
            <img 
              src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png"
              alt="SUCUPAM Editorial Showcase"
              className="max-w-full max-h-full object-contain rounded-sm drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] border border-zinc-900"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-15" />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute bottom-12 left-0 right-0 z-20 max-w-5xl mx-auto px-6 text-center space-y-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-studio-primary bg-zinc-900/60 border border-zinc-800 px-5 py-2 rounded-full inline-block backdrop-blur-md uppercase">
              {d.caseStudyTag}
            </span>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-light text-white tracking-tight leading-none uppercase pt-2">
              {csData.client}
            </h1>
            
            <p className="text-xs md:text-lg text-zinc-400 font-mono tracking-[0.25em] uppercase max-w-3xl mx-auto leading-relaxed">
              {d.platformTitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS GRID BAR */}
      <section id="overview-section" className="border-b border-zinc-900 bg-zinc-950/40 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.client}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.client}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.coreFocus}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.coreFocus}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.year}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.year}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.currentStatus}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.currentStatus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL CASE BRIEF */}
      <section className="py-24 md:py-36 border-b border-zinc-900 relative z-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left intro details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                {d.briefingTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight uppercase tracking-tight whitespace-pre-line">
                {d.briefingTitle}
              </h2>
              <p className="text-sm text-studio-secondary font-light leading-relaxed">
                {csData.subtitle}
              </p>
              
              <div className="pt-4">
                <a
                  href="https://sucupam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-6 py-3 border border-zinc-800 text-xs font-mono text-studio-primary uppercase tracking-widest hover:border-studio-primary hover:text-white transition-all duration-300 rounded-sm bg-zinc-950/40"
                >
                  <Globe size={14} />
                  <span>{d.visitLive}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right details challenge & solution */}
            <div className="lg:col-span-7 space-y-10 lg:pl-6">
              <div className="space-y-3">
                <h3 className="text-[11px] font-mono text-white uppercase tracking-widest">{d.challengeTitle}</h3>
                <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                  {csData.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[11px] font-mono text-white uppercase tracking-widest">{d.solutionTitle}</h3>
                <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                  {csData.strategy}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES DELIVERED */}
      <section className="py-24 md:py-36 border-b border-zinc-900 bg-zinc-950/30 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-20 text-left max-w-2xl">
            <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block mb-4">
              {d.scopeTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight leading-none">
              {d.servicesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {providedServices.map((service: any, idx: number) => (
              <div id={`sucupam-service-${idx}`} key={idx} className="space-y-4 p-5 border border-zinc-900/60 rounded-sm bg-black/40 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-studio-primary font-mono text-xs">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono text-white uppercase tracking-wider">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-studio-caption font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. COGNITIVE ENGINEERING PIPELINE */}
      <section className="py-24 md:py-36 border-b border-zinc-900 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono tracking-[0.25em] text-studio-primary uppercase block mb-4">
                {d.productionTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
                {d.engineeringProcessTitle}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed max-w-xl">
                {d.engineeringProcessDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipelineSteps.map((step: any, idx: number) => (
              <div id={`sucupam-pipeline-${idx}`} key={idx} className="border-t border-zinc-900 pt-6 space-y-3 group hover:border-zinc-700 transition-colors duration-500">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-studio-primary">{step.step}</span>
                  <span className="text-[9px] font-mono text-studio-muted uppercase tracking-widest">STAGE_ENG</span>
                </div>
                <h3 className="text-sm font-display text-white uppercase tracking-wide">
                  {step.label}
                </h3>
                <p className="text-xs text-studio-caption font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. EDITORIAL PORTFOLIO GALLERY */}
      <section className="py-24 md:py-36 bg-zinc-950/40 relative z-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-20 text-left max-w-2xl">
            <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block mb-4">
              {d.sequenceTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.bespokeGalleryTitle}
            </h2>
            <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed mt-4">
              {d.bespokeGalleryDesc}
            </p>
          </div>

          <div className="space-y-24">
            {galleryItems.map((item: any, idx: number) => {
              // Keep original image URLs
              const realUrl = [
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782895304/982c6f6c-64f8-4b9d-a136-aba24ec49cab.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782895399/896af055-7467-4c2a-9170-fc17474d3cb5.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782895968/5dec4816-500d-4c89-bbc9-fc4e18158921.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782895455/155365a5-c6c8-4661-be9f-96a70df4e801.png"
              ][idx];

              return (
                <div 
                  id={`sucupam-gallery-${idx}`}
                  key={idx} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image artwork frame */}
                  <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                    <div className="relative aspect-[3/2] rounded-sm overflow-hidden border border-zinc-900 bg-zinc-950 group flex items-center justify-center p-1 sm:p-2">
                      <img 
                        src={realUrl} 
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-[700ms] scale-[1.04] group-hover:scale-[1.08]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 left-4 z-15 font-mono text-[9px] text-zinc-400 bg-black/80 border border-zinc-800 px-3 py-1 rounded-sm tracking-widest uppercase">
                        {d.portfolioScreen} // {item.step}
                      </div>
                    </div>
                  </div>

                  {/* Text narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-[10px] font-mono text-studio-primary uppercase tracking-widest block">
                      {item.step} // {d.screenView}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                      {item.desc}
                    </p>

                    {item.focus && (
                      <div className="pt-4 border-t border-zinc-900/60 space-y-2">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">{d.focusAreas}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.focus.map((f: string, fIdx: number) => (
                            <span key={fIdx} className="text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-sm">
                              • {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. PRODUCTION SPECS / TECH STACK */}
      <section className="py-24 md:py-36 bg-black border-b border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                {d.productionCoreTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight leading-none">
                {d.techStackTitle}
              </h2>
              <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                {d.techStackDesc}
              </p>
            </div>

            {/* Right side tech block list */}
            <div className="lg:col-span-7 lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {csData.technologyUsed.map((tech: string, idx: number) => (
                  <div id={`sucupam-tech-${idx}`} key={idx} className="p-5 border border-zinc-900 bg-zinc-950/40 rounded-sm flex items-center space-x-4">
                    <CheckCircle size={16} className="text-studio-primary flex-shrink-0" />
                    <span className="text-xs font-mono text-white tracking-wider uppercase">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. OUTCOME & VALIDATION */}
      <section className="py-24 md:py-40 bg-zinc-950/30 relative z-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
            {d.keyPerformanceTag}
          </span>
          
          <h2 className="text-3xl md:text-6xl font-display font-light text-white uppercase tracking-tight leading-tight">
            {d.outcomeQuote}
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 font-mono">
            <div className="text-center p-6 border border-zinc-900 bg-black/60 rounded-sm w-full sm:w-48">
              <span className="text-2xl md:text-3xl font-light text-white block">Sub-100ms</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mt-1">{d.pageLoadTime}</span>
            </div>
            <div className="text-center p-6 border border-zinc-900 bg-black/60 rounded-sm w-full sm:w-48">
              <span className="text-2xl md:text-3xl font-light text-white block">+45%</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mt-1">{d.directInquiries}</span>
            </div>
            <div className="text-center p-6 border border-zinc-900 bg-black/60 rounded-sm w-full sm:w-48">
              <span className="text-2xl md:text-3xl font-light text-white block">0%</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mt-1">{d.catalogFriction}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM NARRATIVE PORTAL TO NEXT WORK */}
      <section className="py-32 bg-black border-t border-zinc-900 relative z-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-studio-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] block">
            {d.continueNarrative}
          </span>
          <div className="space-y-2">
            <span className="text-xs font-mono text-studio-primary uppercase tracking-wider block">{d.nextProduction}</span>
            <h2 className="text-3xl md:text-6xl font-display font-light text-white uppercase tracking-tight hover:text-studio-primary transition-colors duration-300">
              {d.axonRevolution}
            </h2>
          </div>
          <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed max-w-xl mx-auto">
            {d.exploreNextStudy}
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onNextProject}
              className="w-full sm:w-auto px-8 py-3.5 border border-white bg-white text-black hover:bg-transparent hover:text-white font-mono text-[10px] uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 font-bold cursor-pointer"
            >
              <span>{d.launchNextProject}</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-8 py-3.5 border border-zinc-850 text-zinc-400 hover:border-studio-primary hover:text-studio-primary font-mono text-[10px] uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer bg-zinc-950/40"
            >
              <span>{d.returnToStudio}</span>
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
