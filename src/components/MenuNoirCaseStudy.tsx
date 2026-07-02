import { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  ExternalLink 
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getLocalizedCaseStudies } from "../portfolioTranslations";

interface MenuNoirCaseStudyProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export default function MenuNoirCaseStudy({ onBack, onNextProject }: MenuNoirCaseStudyProps) {
  const { language } = useLanguage();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caseStudies = getLocalizedCaseStudies(language);
  const csData = caseStudies.find(c => c.id === "menu-noir") || caseStudies[4]; // Menu Noir

  const localDict: Record<string, any> = {
    en: {
      returnToStudio: "Return to Showcase",
      caseStudyTag: "Case Study 06 // HOSPITALITY SAAS PLATFORM",
      platformTitle: "Hospitality Operating System",
      specLabels: {
        platformArch: "Platform Architecture",
        coreCapabilities: "Core Capabilities",
        targetSegment: "Target Segment",
        deploymentStatus: "Deployment Status"
      },
      specValues: {
        platformArch: "Hospitality Operating System",
        coreCapabilities: "Operations, Inventory & Guest UX",
        targetSegment: "Premium Gastronomy Brands",
        deploymentStatus: "Active Enterprise SaaS"
      },
      positioningTag: "01 // POSITIONING",
      decoupledTitle: "Decoupled Operations.\nElevated Gastronomy.",
      exploreBtn: "Explore Menu Noir Platform",
      paradigmTitle: "The Operating Paradigm",
      strategyTitle: "Product Strategy",
      capabilitiesTag: "02 // CAPABILITIES",
      blueprintTitle: "Product Blueprint",
      blueprintDesc: "Hospitality SaaS demands an alignment of performance engineering and sensory brand execution. Below are the functional parameters engineered to run high-tempo premium restaurants.",
      engineeringTag: "03 // ENGINEERING",
      operationalPipelineTitle: "OPERATIONAL PIPELINE",
      operationalPipelineDesc: "Our design methodology maps physical operations directly to digital nodes. This sequential integration transforms fragmented workflows into predictable, responsive software.",
      walkthroughTag: "04 // WALKTHROUGH",
      walkthroughTitle: "Interface & System Mechanics",
      walkthroughDesc: "An exhaustive architectural walkthrough highlighting product thinking, user flows, data integration, and interface aesthetics designed to elevate restaurant management.",
      systemAttributes: "System Attributes",
      systemLayer: "SYSTEM LAYER",
      operationalIntelligenceTag: "05 // OPERATIONAL INTELLIGENCE",
      programmaticHarmonyTitle: "Programmatic Harmony.",
      programmaticHarmonyDesc: "Modern luxury hospitality is built on the rigorous unification of brand presence, logistical consistency, and intuitive user design. By synthesizing complex backend variables with high-end editorial visuals, Menu Noir transforms restaurant operations from disconnected workflows into a beautiful, predictable, and highly performant digital ecosystem.",
      programmaticHarmonyDesc2: "This integration is not about superficial embellishment—it is about operational mastery. When administrative controls, active stock levels, sensory typography, and customer choice tracking interact seamlessly inside a single operating framework, the business gains extreme clarity, minimized cost variance, and a reliable foundation for growth.",
      visualLabels: {
        schema: "UNIFIED OPERATIONAL TELEMETRY SCHEMA",
        credit: "DEEP BRAIN RESET CREATIVE PRODUCTION © 2026"
      },
      stackTag: "06 // STACK",
      stackTitle: "Systems Deployment Parameters",
      stackDesc: "We employ modular, type-safe environments and specialized CDN caching schemas to support our performance target of sub-100ms response latencies globally.",
      showcaseHome: "SHOWCASE HOME",
      nextProject: "Next Project",
      pipelineSteps: [
        { step: "01", label: "Hospitality Architecture", desc: "Deconstructing physical front-of-house operations into structured, low-latency relational schemas." },
        { step: "02", label: "Editorial Design System", desc: "Crafting a high-end matte black interface using precise grid layouts and luxury spacing dynamics." },
        { step: "03", label: "Dynamic Inventory Link", desc: "Connecting supply chain quantities and cost parameters directly to customer-facing menu nodes." },
        { step: "04", label: "Interaction Prototyping", desc: "Modeling micro-interactions and sensory transitions to simulate real-world dining selections." },
        { step: "05", label: "Multi-Location Scaling", desc: "Architecting programmatic localization, regional tax structures, and instant menu replication." },
        { step: "06", label: "Performance & CDNs", desc: "Optimizing asset loaders and edge servers to guarantee sub-100ms response times globally." }
      ],
      providedServices: [
        { title: "Hospitality Operating System", desc: "Unifying front-of-house, inventory, and restaurant admin into a cohesive, high-performance ecosystem." },
        { title: "Guest Experience Simulator", desc: "Simulating interaction mechanics and customer choices to test physical layouts and guest actions prior to launch." },
        { title: "Restaurant Operations", desc: "Structuring internal workflows, item parameters, and supply chain tracking for high-tempo environments." },
        { title: "Digital Menu Experience", desc: "Designing elegant, legible layouts with liquid transitions, custom ingredient grids, and strict typography rules." },
        { title: "Operational Intelligence", desc: "Aggregating telemetry from guest choices and inventory levels into clean, actionable restaurant engineering insights." },
        { title: "Performance Engineering", desc: "Refining edge-caching schemes and database operations to deliver instantaneous, zero-latency customer experiences." }
      ],
      galleryItems: [
        {
          step: "01",
          title: "01 — HOSPITALITY OPERATING SYSTEM",
          desc: "A unified platform decoupling digital menus from static files. It serves as a real-time operational hub, connecting administrative changes, pricing strategies, and aesthetic parameters directly to the table-side experience.",
          focus: ["Operating Platform", "Institutional Trust", "Dynamic Administration"]
        },
        {
          step: "02",
          title: "02 — GUEST EXPERIENCE SIMULATOR",
          desc: "A simulation environment allowing restaurant operators to preview and audit the digital dining interface under various user-dietary constraints, environmental conditions, and languages prior to guest deployment.",
          focus: ["Interaction Testing", "Cognitive Flow", "Information Discovery"]
        },
        {
          step: "03",
          title: "03 — RESTAURANT OPERATIONS DASHBOARD",
          desc: "An internal management panel integrating active supply lines, ingredient thresholds, and profit margins. Real-time synchronizations protect the menu layer from ingredient deficits.",
          focus: ["Supply Inventory", "Internal Workflows", "Operational Parity"]
        },
        {
          step: "04",
          title: "04 — DIGITAL MENU EXPERIENCE",
          desc: "A premium customer interface built around sensory hierarchy, strict grid geometry, and fluid page animations. Translates culinary descriptions into high-converting, readable narratives.",
          focus: ["Bespoke Layouts", "Sensory Navigation", "Frictionless Ordering"]
        }
      ]
    },
    es: {
      returnToStudio: "Volver a Proyectos",
      caseStudyTag: "Caso de Estudio 06 // PLATAFORMA DE HOSPITALIDAD SAAS",
      platformTitle: "Sistema Operativo de Hospitalidad",
      specLabels: {
        platformArch: "Arquitectura de Plataforma",
        coreCapabilities: "Capacidades Centrales",
        targetSegment: "Segmento de Destino",
        deploymentStatus: "Estado de Implementación"
      },
      specValues: {
        platformArch: "Sistema Operativo de Hospitalidad",
        coreCapabilities: "Operaciones, Inventario y UX de Huéspedes",
        targetSegment: "Marcas de Gastronomía Premium",
        deploymentStatus: "SaaS Empresarial Activo"
      },
      positioningTag: "01 // POSICIONAMIENTO",
      decoupledTitle: "Operaciones Desacopladas.\nGastronomía Elevada.",
      exploreBtn: "Explorar Plataforma Menu Noir",
      paradigmTitle: "El Paradigma Operativo",
      strategyTitle: "Estrategia del Producto",
      capabilitiesTag: "02 // CAPACIDADES",
      blueprintTitle: "Plano del Producto",
      blueprintDesc: "El SaaS para hospitalidad exige una alineación entre ingeniería de rendimiento y ejecución sensorial de marca. A continuación se presentan los parámetros funcionales diseñados para restaurantes premium de ritmo acelerado.",
      engineeringTag: "03 // INGENIERÍA",
      operationalPipelineTitle: "PIPELINE OPERATIVO",
      operationalPipelineDesc: "Nuestra metodología de diseño asigna operaciones físicas directamente a nodos digitales. Esta integración secuencial transforma flujos de trabajo fragmentados en software predecible.",
      walkthroughTag: "04 // RECORRIDO",
      walkthroughTitle: "Mecánica del Sistema e Interfaz",
      walkthroughDesc: "Un recorrido arquitectónico exhaustivo que destaca el pensamiento del producto, los flujos de usuarios, la integración de datos y la estética de la interfaz diseñada para elevar la gestión del restaurante.",
      systemAttributes: "Atributos del Sistema",
      systemLayer: "CAPA DEL SISTEMA",
      operationalIntelligenceTag: "05 // INTELIGENCIA OPERATIVA",
      programmaticHarmonyTitle: "Armonía Programática.",
      programmaticHarmonyDesc: "La hospitalidad de lujo moderna se basa en la unificación rigurosa de la presencia de marca, la consistencia logística y el diseño intuitivo del usuario. Al sintetizar variables de backend complejas con visuales editoriales de alta gama, Menu Noir transforma las operaciones de los restaurantes de flujos de trabajo desconectados en un ecosistema digital hermoso, predecible y de alto rendimiento.",
      programmaticHarmonyDesc2: "Esta integración no se trata de embellecimiento superficial, se trata de maestría operativa. Cuando los controles administrativos, los niveles de stock activos, la tipografía sensorial y el seguimiento de las elecciones del cliente interactúan sin problemas dentro de un solo marco operativo, el negocio obtiene una claridad extrema, una variación de costos minimizada y una base confiable para el crecimiento.",
      visualLabels: {
        schema: "ESQUEMA DE TELEMETRÍA OPERATIVA UNIFICADA",
        credit: "DEEP BRAIN RESET PRODUCCIÓN CREATIVA © 2026"
      },
      stackTag: "06 // STACK",
      stackTitle: "Parámetros de Despliegue de Sistemas",
      stackDesc: "Empleamos entornos modulares y seguros de tipado, además de esquemas de almacenamiento en caché CDN especializados para respaldar nuestro objetivo de rendimiento de latencias de respuesta inferiores a 100 ms a nivel mundial.",
      showcaseHome: "PORTADA DEL ESCAPARATE",
      nextProject: "Siguiente Proyecto",
      pipelineSteps: [
        { step: "01", label: "Arquitectura de Hospitalidad", desc: "Descomposición de las operaciones físicas en esquemas relacionales estructurados de baja latencia." },
        { step: "02", label: "Sistema de Diseño Editorial", desc: "Creación de una interfaz en negro mate de alta gama utilizando diseños de cuadrícula precisos." },
        { step: "03", label: "Enlace Dinámico de Inventario", desc: "Conexión de las cantidades de la cadena de suministro directamente con los nodos de menús orientados al cliente." },
        { step: "04", label: "Prototipado de Interacciones", desc: "Modelado de microinteracciones y transiciones sensoriales para simular elecciones de menú en tiempo real." },
        { step: "05", label: "Escalado Multilocación", desc: "Arquitectura de localización programática, estructuras tributarias regionales y replicación instantánea de menús." },
        { step: "06", label: "Rendimiento y CDNs", desc: "Optimización de cargadores de activos y servidores de borde para garantizar respuestas en menos de 100 ms globalmente." }
      ],
      providedServices: [
        { title: "Sistema Operativo de Hospitalidad", desc: "Unificación de administración interna, inventario y menús en un ecosistema cohesivo de alto rendimiento." },
        { title: "Simulador de Experiencia del Huésped", desc: "Simulación de mecánicas de interacción y opciones de clientes antes del despliegue físico." },
        { title: "Operaciones de Restaurante", desc: "Estructuración de flujos internos de trabajo, parámetros de ítems y seguimiento de cadena de suministro." },
        { title: "Experiencia de Menú Digital", desc: "Diseño de layouts legibles y elegantes con transiciones líquidas y reglas tipográficas estrictas." },
        { title: "Inteligencia Operativa", desc: "Agregación de telemetría de elecciones de clientes e inventario en perspectivas operativas útiles." },
        { title: "Ingeniería de Rendimiento", desc: "Refinamiento de esquemas de almacenamiento y operaciones de base de datos para entregar experiencias instantáneas." }
      ],
      galleryItems: [
        {
          step: "01",
          title: "01 — SISTEMA OPERATIVO DE HOSPITALIDAD",
          desc: "Una plataforma unificada que desacopla los menús digitales de los archivos estáticos. Sirve como centro operativo en tiempo real, conectando cambios administrativos directamente con las mesas.",
          focus: ["Plataforma Operativa", "Confianza Institucional", "Administración Dinámica"]
        },
        {
          step: "02",
          title: "02 — SIMULADOR DE EXPERIENCIA DE HUÉSPED",
          desc: "Un entorno de simulación que permite a los operadores previsualizar y auditar la interfaz digital bajo restricciones dietéticas y diferentes idiomas antes del despliegue.",
          focus: ["Prueba de Interacciones", "Flujo Cognitivo", "Descubrimiento de Información"]
        },
        {
          step: "03",
          title: "03 — PANEL DE CONTROL DE OPERACIONES",
          desc: "Un panel de gestión interna que integra líneas de suministro activas, límites de ingredientes y márgenes de ganancia. Las sincronizaciones protegen el menú contra déficits.",
          focus: ["Inventario de Suministro", "Flujos de Trabajo", "Paridad Operativa"]
        },
        {
          step: "04",
          title: "04 — EXPERIENCIA DE MENÚ DIGITAL",
          desc: "Una interfaz de cliente de primera categoría construida sobre jerarquía sensorial, geometría de cuadrícula estricta y animaciones de página fluidas.",
          focus: ["Diseños Personalizados", "Navegación Sensorial", "Pedidos Sin Fricción"]
        }
      ]
    },
    de: {
      returnToStudio: "Zurück zur Auswahl",
      caseStudyTag: "Fallstudie 06 // GASTRO-SAAS-PLATTFORM",
      platformTitle: "Gastronomie-Betriebssystem",
      specLabels: {
        platformArch: "Plattform-Architektur",
        coreCapabilities: "Kernkapazitäten",
        targetSegment: "Zielsegment",
        deploymentStatus: "Implementierungsstatus"
      },
      specValues: {
        platformArch: "Gastronomie-Betriebssystem",
        coreCapabilities: "Betrieb, Inventar & Gäste-UX",
        targetSegment: "Premium-Gastronomiemarken",
        deploymentStatus: "Aktives Enterprise-SaaS"
      },
      positioningTag: "01 // POSITIONIERUNG",
      decoupledTitle: "Entkoppelte Abläufe.\nGehobene Gastronomie.",
      exploreBtn: "Menu Noir Plattform erkunden",
      paradigmTitle: "Das Betriebsparadigma",
      strategyTitle: "Produktstrategie",
      capabilitiesTag: "02 // KAPAZITÄTEN",
      blueprintTitle: "Produkt-Blueprint",
      blueprintDesc: "Gastro-SaaS erfordert eine enge Abstimmung von Performance-Engineering und sensorischer Markeninszenierung. Nachfolgend sind die funktionalen Parameter aufgeführt.",
      engineeringTag: "03 // INGENIEURWESEN",
      operationalPipelineTitle: "BETRIEBSPIPELINE",
      operationalPipelineDesc: "Unsere Design-Methodik bildet physische Abläufe direkt in digitalen Knoten ab, um fragmentierte Workflows in berechenbare Software zu verwandeln.",
      walkthroughTag: "04 // WALKTHROUGH",
      walkthroughTitle: "Schnittstellen & Systemmechanik",
      walkthroughDesc: "Ein umfassender architektonischer Rundgang, der das Produktdenken, die Benutzerströme und die Benutzeroberflächenästhetik hervorhebt.",
      systemAttributes: "Systemattribute",
      systemLayer: "SYSTEMSCHICHT",
      operationalIntelligenceTag: "05 // BETRIEBLICHE INTELLIGENZ",
      programmaticHarmonyTitle: "Programmatische Harmonie.",
      programmaticHarmonyDesc: "Moderne Luxusgastronomie basiert auf der konsequenten Vereinheitlichung von Markenpräsenz, logistischer Konsistenz und intuitivem Design.",
      programmaticHarmonyDesc2: "Bei dieser Integration geht es um operative Meisterschaft. Wenn administrative Kontrollen, Bestände und Typografie nahtlos ineinandergreifen, gewinnt das Unternehmen extreme Klarheit.",
      visualLabels: {
        schema: "VEREINHEITLICHTES BETRIEBLICHES TELEMETRIESCHEMA",
        credit: "DEEP BRAIN RESET KREATIVE PRODUKTION © 2026"
      },
      stackTag: "06 // STACK",
      stackTitle: "Systembereitstellungs-Parameter",
      stackDesc: "Wir setzen modulare, typsichere Umgebungen und Edge-Caching ein, um globale Reaktionszeiten von unter 100 ms zu garantieren.",
      showcaseHome: "ZURÜCK ZUR AUSWAHL",
      nextProject: "Nächstes Projekt",
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
        <div className="absolute inset-0 z-0 scale-100 select-none bg-zinc-950 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png"
            alt="Menu Noir Cover Artwork"
            className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-20 brightness-[0.15]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-5" />
          
          {/* Main contained image with no crop, keeping original premium dimensions */}
          <div className="relative w-full h-full max-w-5xl max-h-[75vh] px-6 md:px-12 flex items-center justify-center z-10 p-4 md:p-12">
            <img 
              src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png"
              alt="Menu Noir Hospitality Operating System"
              className="max-w-full max-h-full object-contain rounded-sm drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] border border-zinc-900"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-15" />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute bottom-12 left-0 right-0 z-20 max-w-5xl mx-auto px-6 text-center space-y-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
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
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.platformArch}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.platformArch}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.coreCapabilities}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.coreCapabilities}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.targetSegment}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.targetSegment}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-studio-muted block">{d.specLabels.deploymentStatus}</span>
              <span className="text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.deploymentStatus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL CASE BRIEF */}
      <section className="py-24 md:py-36 border-b border-zinc-900 relative z-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Mission Overview */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                {d.positioningTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight uppercase tracking-tight whitespace-pre-line">
                {d.decoupledTitle}
              </h2>
              <p className="text-sm text-studio-secondary font-light leading-relaxed">
                {csData.subtitle}
              </p>
              
              <div className="pt-4">
                <a
                  href="https://menu-noir.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-6 py-3 border border-zinc-800 text-xs font-mono text-studio-primary uppercase tracking-widest hover:border-studio-primary hover:text-white transition-all duration-300 rounded-sm bg-zinc-950/40"
                >
                  <Globe size={14} />
                  <span>{d.exploreBtn}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right Column: Narrative Detail */}
            <div className="lg:col-span-7 space-y-10 lg:pl-6">
              <div className="space-y-3">
                <h3 className="text-[11px] font-mono text-white uppercase tracking-widest">{d.paradigmTitle}</h3>
                <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                  {csData.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[11px] font-mono text-white uppercase tracking-widest">{d.strategyTitle}</h3>
                <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                  {csData.strategy}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOSPITALITY SAAS SPECIALIZATION */}
      <section className="py-24 md:py-36 border-b border-zinc-900 bg-zinc-950/30 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block mb-2">
                {d.capabilitiesTag}
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-light text-white uppercase tracking-tight">
                {d.blueprintTitle}
              </h3>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                {d.blueprintDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providedServices.map((service: any, idx: number) => (
              <div key={idx} className="p-8 bg-black border border-zinc-900 rounded-sm hover:border-zinc-800 transition-all duration-300 space-y-4">
                <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-studio-primary text-xs font-mono">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-mono text-white uppercase tracking-wider">{service.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DENSE ARCHITECTURE WORKFLOW MAP */}
      <section className="py-24 md:py-36 border-b border-zinc-900 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block mb-2">
                {d.engineeringTag}
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-light text-white uppercase tracking-tight leading-tight">
                {d.operationalPipelineTitle}
              </h3>
            </div>
            <div className="lg:col-span-7 max-w-xl">
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                {d.operationalPipelineDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipelineSteps.map((step: any, idx: number) => (
              <div key={idx} className="border border-zinc-900/60 p-6 rounded-sm space-y-3 relative overflow-hidden bg-zinc-950/20">
                <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-zinc-800">
                  [{step.step}]
                </div>
                <span className="text-[9px] font-mono text-studio-primary uppercase tracking-widest block">• PHASE {step.step}</span>
                <h4 className="text-xs font-mono text-white uppercase tracking-wider">{step.label}</h4>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. IMMERSIVE PRODUCT SCREENSHOT GALLERY */}
      <section className="py-24 md:py-36 bg-zinc-950/10 border-b border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
              {d.walkthroughTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.walkthroughTitle}
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
              {d.walkthroughDesc}
            </p>
          </div>

          {galleryItems.map((item: any, idx: number) => {
            // Keep exactly the same rich image assets
            const realImage = [
              "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
              "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896599/bd8ddb7f-5dcf-4fac-ae1c-36fa45a42cfd.png",
              "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896884/ebdb7a75-e04f-4a3f-b49f-495751321416.png",
              "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896961/db0bd2e7-a5f4-4532-b462-e717d002ae65.png"
            ][idx];

            return (
              <div 
                id={`gallery-item-${item.step}`}
                key={idx} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image Container on Left or Right based on Alternating Pattern */}
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="border border-zinc-900 bg-zinc-950 p-1 sm:p-2 rounded-sm shadow-xl relative overflow-hidden group">
                    <div className="aspect-[3/2] w-full relative overflow-hidden rounded-sm bg-zinc-950 flex items-center justify-center">
                      <img 
                        src={realImage}
                        alt={item.title}
                        className="w-full h-full object-contain opacity-90 transition-transform duration-[700ms] scale-[1.04] group-hover:scale-[1.08]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Informational Narrative Box */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                    MODULE // {item.step}
                  </span>
                  <h3 className="text-lg md:text-2xl font-display font-light text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {item.focus && (
                    <div className="pt-4 border-t border-zinc-900 space-y-2">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">{d.systemAttributes}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.focus.map((f: string, fIdx: number) => (
                          <span key={fIdx} className="text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-sm">
                            • {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex items-center space-x-2 text-[9px] font-mono text-zinc-600 uppercase">
                    <span>{d.systemLayer} // SEC {item.step}</span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 7. REINFORCED CLOSING NARRATIVE (Operational Intelligence Section) */}
      <section className="py-24 md:py-36 border-b border-zinc-900 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                {d.operationalIntelligenceTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight uppercase tracking-tight">
                {d.programmaticHarmonyTitle}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                {d.programmaticHarmonyDesc}
              </p>
              <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                {d.programmaticHarmonyDesc2}
              </p>
            </div>

            {/* Right Large Image Composition */}
            <div className="lg:col-span-7">
              <div className="border border-zinc-900 bg-zinc-950 p-1 sm:p-2 rounded-sm relative overflow-hidden group shadow-2xl">
                <div className="aspect-[3/2] w-full relative overflow-hidden rounded-sm flex items-center justify-center bg-zinc-950">
                  <img 
                    src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png"
                    alt="Menu Noir Platform Overview"
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] opacity-95 transition-transform duration-[700ms] scale-[1.04] group-hover:scale-[1.08]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-6 pb-2 px-4 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest gap-4 md:gap-0">
                  <span>{d.visualLabels.schema}</span>
                  <span>{d.visualLabels.credit}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGICAL STACK SPEC */}
      <section className="py-24 md:py-32 border-b border-zinc-900 bg-zinc-950/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
              {d.stackTag}
            </span>
            <h3 className="text-xl md:text-3xl font-display font-light text-white uppercase tracking-tight">
              {d.stackTitle}
            </h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              {d.stackDesc}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {csData.technologyUsed.map((tech: string, idx: number) => (
              <span key={idx} className="text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-900/60 px-4 py-2 rounded-sm shadow-sm hover:border-zinc-800 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NAVIGATION INTERACTION ROW */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t border-zinc-900 pt-16 flex flex-col sm:flex-row justify-between items-center gap-8">
            <button
              onClick={onBack}
              className="group flex items-center space-x-3 text-xs font-mono text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span className="uppercase tracking-widest">{d.showcaseHome}</span>
            </button>

            {onNextProject && (
              <button
                onClick={onNextProject}
                className="group flex items-center space-x-3 text-xs font-mono text-studio-primary hover:text-white transition-colors cursor-pointer"
              >
                <span className="uppercase tracking-widest">{d.nextProject}</span>
                <span className="text-xs text-zinc-600 font-light uppercase">Axon Revolution</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
