import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, ArrowUpRight, Check, ShieldCheck, Sparkles, Code, Cpu, Box, ChevronRight, MessageSquare } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export interface ServiceLandingModalProps {
  serviceSlug: string; // e.g. 'spots-publicitarios-con-ia', 'desarrollo-web', 'automatizacion-de-procesos', 'renderizado-3d'
  onBack: () => void;
  onViewCaseStudy: (caseId: string) => void;
  onOpenContact: () => void;
}

export default function ServiceLandingModal({
  serviceSlug,
  onBack,
  onViewCaseStudy,
  onOpenContact
}: ServiceLandingModalProps) {
  const { language } = useLanguage();

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  // Define data per service slug
  const serviceDataMap = {
    "spots-publicitarios-con-ia": {
      enSlug: "ai-commercial-production",
      esSlug: "spots-publicitarios-con-ia",
      title: {
        es: "SPOTS PUBLICITARIOS CON IA Y CGI",
        en: "AI & CGI COMMERCIAL SPOTS"
      },
      badge: {
        es: "PRODUCCIÓN AUDIOVISUAL DE NIVELES PUBLICITARIO",
        en: "HIGH-END AUDIOVISUAL COMMERCIAL PRODUCTION"
      },
      outcome: {
        es: "Atraé más clientes y posicioná tu marca con producciones audiovisuales cinematográficas de impacto inmediato.",
        en: "Attract more clients and position your brand with immediate-impact cinematic audiovisual productions."
      },
      problem: {
        es: "Los costos desorbitados de los rodajes tradicionales, las locaciones físicas costosas y los largos tiempos de postproducción impiden a muchas marcas crear campañas comerciales con estándar cinematográfico.",
        en: "Exorbitant traditional shoot budgets, costly physical locations, and slow post-production turnarounds prevent brands from launching cinematic advertising campaigns."
      },
      includedServices: {
        es: [
          "Spots publicitarios con Inteligencia Artificial generativa",
          "Brand films y videos conceptuales de marca",
          "Dirección creativa y guionado cinematográfico",
          "CGI, efectos visuales y motion graphics 3D",
          "Diseño sonoro y locución profesional",
          "Adaptación multiformato para televisión, cine y redes social"
        ],
        en: [
          "Generative AI Commercial Spots",
          "Conceptual Brand Films",
          "Cinematic Creative Direction & Storyboarding",
          "3D CGI & Visual Effects Motion Graphics",
          "Sound Design & Professional Voiceover",
          "Multi-format Adaptation for TV, Web, and Social Media"
        ]
      },
      processPhases: {
        es: [
          { phase: "01", title: "Concepto y Guion", desc: "Definimos la estrategia narrativa, el tono de marca y los guiones visuales." },
          { phase: "02", title: "Generación de Arte e IA", desc: "Creamos mundos, personajes y secuencias con motores de IA y CGI." },
          { phase: "03", title: "Montaje y Composición", desc: "Unificamos secuencias, colorimetría, efectos visuales e iluminación." },
          { phase: "04", title: "Diseño Sonoro y Entrega", desc: "Masterización de audio, voces y exportación en múltiples formatos." }
        ],
        en: [
          { phase: "01", title: "Concept & Script", desc: "Define narrative strategy, brand tone, and visual storyboards." },
          { phase: "02", title: "AI & CGI Art Generation", desc: "Build environments, characters, and shots with generative AI and CGI engines." },
          { phase: "03", title: "Edit & Color Grading", desc: "Assemble sequences, color grading, visual effects, and lighting." },
          { phase: "04", title: "Sound Design & Master", desc: "Audio mastering, voiceovers, and multi-format delivery." }
        ]
      },
      relatedCaseIds: ["axon-revolution", "axon-drive"],
      faqs: {
        es: [
          { q: "¿Qué incluye la producción de un spot publicitario con IA?", a: "Incluye la dirección creativa completa, guion, generación de imágenes y secuencias en alta resolución con IA, efectos visuales CGI, edición, diseño sonoro y entregables listos para difusión." },
          { q: "¿Cuánto tiempo demora la entrega de un spot?", a: "Un spot comercial suele completarse en 2 a 4 semanas, acelerando notablemente los plazos respecto de las producciones tradicionales." },
          { q: "¿Sirve para campañas en televisión y redes sociales?", a: "Sí, adaptamos los entregables en todas las proporciones de aspecto (16:9, 9:16, 1:1, 4:5) y resoluciones 4K para difusión global." }
        ],
        en: [
          { q: "What is included in an AI commercial spot production?", a: "Complete creative direction, scriptwriting, high-resolution AI sequence generation, CGI visual effects, video editing, sound design, and broadcast-ready assets." },
          { q: "What is the typical production timeline?", a: "A commercial spot is typically delivered within 2 to 4 weeks, significantly faster than traditional live-action shoots." },
          { q: "Is it suitable for TV and digital campaigns?", a: "Yes, we export all required aspect ratios (16:9, 9:16, 1:1, 4:5) in 4K resolution for global broadcast and digital media." }
        ]
      }
    },

    "desarrollo-web": {
      enSlug: "web-development",
      esSlug: "desarrollo-web",
      title: {
        es: "DESARROLLO WEB Y PLATAFORMAS DIGITALES",
        en: "WEB DEVELOPMENT & DIGITAL PLATFORMS"
      },
      badge: {
        es: "ARQUITECTURA DE SOFTWARE Y DISEÑO EDITORIAL",
        en: "SOFTWARE ARCHITECTURE & EDITORIAL DESIGN"
      },
      outcome: {
        es: "Vendé mejor con sitios web, e-commerce y productos digitales diseñados para convertir visitas en clientes reales.",
        en: "Sell better with websites, e-commerce stores, and digital products designed to convert visitors into actual clients."
      },
      problem: {
        es: "Las plantillas genéricas lentas y las webs desactualizadas destruyen la credibilidad de las marcas y provocan la pérdida constante de oportunidades comerciales.",
        en: "Slow generic templates and outdated websites destroy brand credibility and cause a continuous loss of sales opportunities."
      },
      includedServices: {
        es: [
          "Desarrollo web corporativo full stack",
          "Landing pages de alta tasa de conversión",
          "Plataformas de e-commerce y portales B2B",
          "Aplicaciones web y productos SaaS",
          "Experiencias interactivas y animación web 3D",
          "Optimización SEO técnica, velocidad sub-100ms y seguridad"
        ],
        en: [
          "Full-stack Corporate Web Development",
          "High-converting Landing Pages",
          "E-commerce Platforms & B2B Portals",
          "Web Applications & SaaS Products",
          "Interactive Experiences & 3D Web Motion",
          "Technical SEO, Sub-100ms Speed Optimization & Security"
        ]
      },
      processPhases: {
        es: [
          { phase: "01", title: "Arquitectura y Wireframes", desc: "Estructuramos la jerarquía de información y los flujos de conversión." },
          { phase: "02", title: "Diseño de Interfaz UX/UI", desc: "Diseñamos interfaces exclusivas con alineación tipográfica y estética cuidada." },
          { phase: "03", title: "Ingeniería de Código", desc: "Programación full stack con React, TypeScript y arquitecturas seguras." },
          { phase: "04", title: "Despliegue y Optimización", desc: "Publicación en servidores CDN de ultra baja latencia con auditoría de rendimiento." }
        ],
        en: [
          { phase: "01", title: "Architecture & Wireframes", desc: "Structure information hierarchy and user conversion flows." },
          { phase: "02", title: "UX/UI Editorial Design", desc: "Craft custom interfaces with meticulous typography and grid alignment." },
          { phase: "03", title: "Code Engineering", desc: "Type-safe full-stack programming in React and TypeScript." },
          { phase: "04", title: "Deployment & Optimization", desc: "Launch on ultra-low latency CDN infrastructure with performance auditing." }
        ]
      },
      relatedCaseIds: ["emilia-marsicano", "sucupam", "con-la-tuya", "menu-noir"],
      faqs: {
        es: [
          { q: "¿Utilizan plantillas o código a medida?", a: "Construimos arquitecturas completamente a medida en TypeScript y React. Sin plantillas pesadas ni código descartable." },
          { q: "¿Las páginas web se adaptan perfectamente a teléfonos móviles?", a: "Absolutamente. Diseñamos con precisión responsive garantizando que la tipografía y los contenidos se lean de forma perfecta en cualquier pantalla." },
          { q: "¿Incluye optimización para buscadores (SEO)?", a: "Sí, todos los desarrollos incluyen metadatos estructurados, marcado JSON-LD, rendimiento óptimo y buenas prácticas de indexación." }
        ],
        en: [
          { q: "Do you use templates or custom code?", a: "We build fully bespoke architectures in TypeScript and React. Zero bloated templates, zero throwaway code." },
          { q: "Are the websites fully responsive on mobile devices?", a: "Absolutely. We engineer responsive layouts ensuring crisp typography and layout alignment across all viewports." },
          { q: "Is Search Engine Optimization (SEO) included?", a: "Yes, every site includes structured data JSON-LD, optimal speed scores, and technical SEO indexing standards." }
        ]
      }
    },

    "automatizacion-de-procesos": {
      enSlug: "business-automation",
      esSlug: "automatizacion-de-procesos",
      title: {
        es: "AUTOMATIZACIÓN DE PROCESOS E INTEGRACIÓN DE IA",
        en: "BUSINESS PROCESS AUTOMATION & AI"
      },
      badge: {
        es: "EFICIENCIA OPERATIVA Y AGENTES AUTÓNOMOS",
        en: "OPERATIONAL EFFICIENCY & AUTONOMOUS AGENTS"
      },
      outcome: {
        es: "Automatizá tu operación reduciendo tareas repetitivas y permitiendo a tu equipo trabajar con mayor velocidad y control.",
        en: "Automate your operations to eliminate repetitive tasks and enable your team to work with greater speed and control."
      },
      problem: {
        es: "Las empresas pierden cientos de horas mensuales en procesos manuales, carga de datos repetitiva e integración defectuosa entre herramientas que se traducen en errores y sobrecostos.",
        en: "Companies waste hundreds of hours monthly on manual data entry, repetitive workflows, and disconnected software systems."
      },
      includedServices: {
        es: [
          "Automatización de flujos de trabajo administrativos y comerciales",
          "Integración de modelos de Inteligencia Artificial (LLMs / Agentes)",
          "Desarrollo de agentes digitales autónomos de atención y consulta",
          "Conexión de APIs, bases de datos y herramientas internas",
          "Paneles de control y dashboards de gestión operativa",
          "Auditoría y optimización de arquitectura de software existente"
        ],
        en: [
          "Administrative & Business Process Workflows",
          "AI Model Integration (LLMs / Autonomous Agents)",
          "Digital Consultation & Service AI Agents",
          "Custom API, Database & System Connectivity",
          "Operational Control Dashboards",
          "Legacy Systems Architecture Audit & Optimization"
        ]
      },
      processPhases: {
        es: [
          { phase: "01", title: "Auditoría Operativa", desc: "Mapeamos tus procesos actuales e identificamos los cuellos de botella." },
          { phase: "02", title: "Diseño del Flujo", desc: "Estructuramos las reglas de negocio, disparadores e integraciones." },
          { phase: "03", title: "Desarrollo e Integración", desc: "Programamos la lógica en servidores seguros con conexiones API directas." },
          { phase: "04", title: "Monitoreo y Control", desc: "Desplegamos la automatización con registros de actividad en tiempo real." }
        ],
        en: [
          { phase: "01", title: "Operational Audit", desc: "Map your current workflows and isolate manual bottlenecks." },
          { phase: "02", title: "Workflow Architecture", desc: "Define business logic, triggers, and secure API connectors." },
          { phase: "03", title: "Development & Integration", desc: "Program server-side automation routines and AI pipelines." },
          { phase: "04", title: "Monitoring & Analytics", desc: "Deploy automated workflows with real-time logging and control dashboards." }
        ]
      },
      relatedCaseIds: ["con-la-tuya", "menu-noir"],
      faqs: {
        es: [
          { q: "¿Se puede integrar con nuestros sistemas actuales?", a: "Sí, desarrollamos integraciones a medida para conectar tus sistemas existentes via APIs directas y seguras." },
          { q: "¿Es seguro manejar datos confidenciales en las automatizaciones?", a: "Totalmente. Implementamos protocolos de encriptación y procesamiento de datos que resguardan la privacidad operacional." },
          { q: "¿Requiere mantenimiento constante?", a: "Nuestros desarrollos quedan operando de forma autónoma con registros de actividad y bajo mantenimiento requerido." }
        ],
        en: [
          { q: "Can it integrate with our existing software tools?", a: "Yes, we program custom API connectors to bridge your current databases and internal software tools seamlessly." },
          { q: "Is sensitive operational data secure?", a: "Completely. We implement server-side encryption and strict data security protocols to protect your internal assets." },
          { q: "Does it require ongoing manual maintenance?", a: "No, our system pipelines run autonomously in background environments with activity logs and error fallback routines." }
        ]
      }
    },

    "renderizado-3d": {
      enSlug: "3d-rendering",
      esSlug: "renderizado-3d",
      title: {
        es: "RENDERIZADO 3D Y VISUALIZACIÓN CGI",
        en: "3D RENDERING & CGI VISUALIZATION"
      },
      badge: {
        es: "VISUALIZACIÓN DE PRODUCTO, ESPACIOS Y ARQUITECTURA",
        en: "PRODUCT, SPACES & ARCHITECTURAL VISUALIZATION"
      },
      outcome: {
        es: "Mostrá tu idea antes de construirla con renders, animaciones y experiencias 3D de estándar fotorrealista.",
        en: "Show your idea before building it with photorealistic 3D renders, animations, and visual experiences."
      },
      problem: {
        es: "Presentar emprendimientos inmobiliarios, productos o diseños con imágenes planas o maquetas preliminares genera desconfianza y frena las ventas de preventa.",
        en: "Presenting real estate developments, products, or spatial designs with flat graphics or draft models causes client hesitation and slows pre-sales."
      },
      includedServices: {
        es: [
          "Renderizado 3D arquitectónico hiperrealista",
          "Visualización de diseño de interiores y mobiliario",
          "CGI de producto para empaques y campañas comerciales",
          "Animación 3D y recorridos virtuales interactivos",
          "Modelado 3D de alta precisión e iluminación de estudio",
          "Integración 3D en plataformas web e interactivas"
        ],
        en: [
          "Hyper-realistic Architectural 3D Rendering",
          "Interior & Furniture Design Visualization",
          "Product CGI for Packaging & Commercial Campaigns",
          "3D Animation & Interactive Virtual Tours",
          "High-precision 3D Modeling & Studio Lighting",
          "Interactive Web & Digital Media 3D Integration"
        ]
      },
      processPhases: {
        es: [
          { phase: "01", title: "Modelado 3D", desc: "Construimos la geometría tridimensional exacta a partir de planos o bocetos." },
          { phase: "02", title: "Materiales y Texturas", desc: "Aplicamos materiales fotorrealistas con respuesta física a la luz." },
          { phase: "03", title: "Iluminación y Encuadre", desc: "Componemos cámaras cinematográficas e iluminación de atmósfera." },
          { phase: "04", title: "Renderizado y Postproducción", desc: "Procesamos la imagen final en resolución ultra 4K con retoque fotográfico." }
        ],
        en: [
          { phase: "01", title: "3D Modeling", desc: "Build exact three-dimensional geometry from architectural plans or sketches." },
          { phase: "02", title: "Materials & Textures", desc: "Apply physically accurate materials and photorealistic surface details." },
          { phase: "03", title: "Lighting & Composition", desc: "Set up cinematic cameras and atmospheric studio lighting." },
          { phase: "04", title: "Rendering & Retouching", desc: "Process final ultra-4K visuals with master color and post-production refinement." }
        ]
      },
      relatedCaseIds: ["axon-revolution", "axon-drive"],
      faqs: {
        es: [
          { q: "¿Qué información se necesita para cotizar un render 3D?", a: "Solo necesitamos los planos arquitectónicos, modelos en 3D (si cuentan con ellos), o referencias visuales del producto o espacio." },
          { q: "¿Entregan imágenes estáticas o también animaciones?", a: "Entregamos tanto renders estáticos en ultra alta resolución (4K/8K) como animaciones de recorrido 3D en formato de video." },
          { q: "¿Se pueden integrar los renders 3D en una página web?", a: "Sí, podemos integrar los renders de forma interactiva en tu sitio web para brindar recorridos o vistas de producto 360°." }
        ],
        en: [
          { q: "What files are required to quote a 3D rendering project?", a: "We only need architectural plans, CAD files, 3D draft models (if available), or visual references for the product/space." },
          { q: "Do you provide static images or motion animations as well?", a: "We deliver both ultra-high resolution static images (4K/8K) and cinematic 3D walkthrough video animations." },
          { q: "Can 3D renders be integrated into an interactive website?", a: "Yes, we can embed interactive 3D assets into your web platform for 360° views and virtual walkthroughs." }
        ]
      }
    }
  };

  // Find current data or fallback to spots
  const matchedKey = (Object.keys(serviceDataMap) as Array<keyof typeof serviceDataMap>).find(
    (k) => k === serviceSlug || serviceDataMap[k].enSlug === serviceSlug
  ) || "spots-publicitarios-con-ia";

  const data = serviceDataMap[matchedKey];
  const langKey = language === "en" ? "en" : "es";

  // Case study name map for related links
  const caseStudyNames: Record<string, string> = {
    "axon-revolution": "AXON REVOLUTION — AI Fashion Commercial",
    "axon-drive": "AXON DRIVE — AI Automotive Commercial Film",
    "emilia-marsicano": "EMILIA MARSICANO — Corporate Law Portal",
    "sucupam": "SUCUPAM — E-Commerce Brand Presence",
    "con-la-tuya": "CON LA TUYA CONTRIBUYENTE — Civic Data Platform",
    "menu-noir": "MENU NOIR — Gastronomic SaaS Product"
  };

  const calendarUrl = "https://calendar.app.google/KxqkRxocP421jXka7";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-studio-bg text-studio-secondary overflow-y-auto selection:bg-studio-primary selection:text-studio-bg"
    >
      {/* Schema.org Service JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": data.title[langKey],
            "provider": {
              "@type": "ProfessionalService",
              "name": "Deep Brain Reset",
              "url": "https://deepbrainreset.com"
            },
            "description": data.outcome[langKey],
            "areaServed": ["US", "EU", "AR", "ES"]
          })
        }}
      />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#060608]/90 backdrop-blur-md border-b border-studio-border py-4 px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-studio-caption hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0"
        >
          <ArrowLeft size={14} />
          <span>{language === "es" ? "VOLVER AL INICIO" : "BACK TO HOME"}</span>
        </button>

        <span className="text-[10px] font-mono tracking-widest text-studio-muted uppercase hidden sm:block">
          DEEP BRAIN RESET // CAPABILITIES
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-[10px] font-mono text-studio-caption uppercase tracking-widest flex items-center space-x-2">
          <button onClick={onBack} className="hover:text-studio-primary transition-colors cursor-pointer bg-transparent border-0 p-0">
            {language === "es" ? "INICIO" : "HOME"}
          </button>
          <ChevronRight size={10} className="text-studio-muted" />
          <span>{language === "es" ? "SERVICIOS" : "SERVICES"}</span>
          <ChevronRight size={10} className="text-studio-muted" />
          <span className="text-studio-primary font-bold">{data.title[langKey]}</span>
        </nav>

        {/* Hero Title Section */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-studio-panel border border-studio-border text-[10px] font-mono text-studio-caption tracking-widest uppercase">
            {data.badge[langKey]}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight leading-tight">
            {data.title[langKey]}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-studio-secondary font-light max-w-3xl leading-relaxed">
            {data.outcome[langKey]}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 bg-studio-primary text-studio-bg hover:bg-studio-caption transition-all duration-300 font-mono text-xs uppercase tracking-widest font-semibold rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer no-underline text-center"
            >
              <Calendar size={14} />
              <span>{language === "es" ? "AGENDAR UNA REUNIÓN" : "SCHEDULE A MEETING"}</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={onOpenContact}
              className="py-4 px-8 border border-studio-border text-studio-primary hover:border-studio-primary transition-all duration-300 font-mono text-xs uppercase tracking-widest rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer bg-transparent"
            >
              <MessageSquare size={14} />
              <span>{language === "es" ? "ENVIAR CONSULTA" : "SEND INQUIRY"}</span>
            </button>
          </div>
        </div>

        {/* Problem Solved */}
        <div className="p-8 bg-studio-panel border border-studio-border rounded-sm space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
            {language === "es" ? "DESAFÍO Y PROBLEMA RESUELTO" : "CHALLENGE & PROBLEM SOLVED"}
          </span>
          <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
            {data.problem[langKey]}
          </p>
        </div>

        {/* Included Services */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-display uppercase font-light text-studio-primary tracking-wide">
            {language === "es" ? "SERVICIOS Y ENTREGABLES INCLUIDOS" : "SERVICES & DELIVERABLES INCLUDED"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.includedServices[langKey].map((service, idx) => (
              <div key={idx} className="p-4 bg-studio-panel border border-studio-border rounded-sm flex items-start space-x-3">
                <Check size={16} className="text-studio-primary shrink-0 mt-0.5" />
                <span className="text-xs text-studio-secondary font-light leading-relaxed">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Phases */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-display uppercase font-light text-studio-primary tracking-wide">
            {language === "es" ? "PROCESO DE PRODUCCIÓN" : "PRODUCTION PROCESS"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.processPhases[langKey].map((p, idx) => (
              <div key={idx} className="p-6 bg-studio-panel border border-studio-border rounded-sm space-y-3">
                <span className="text-xs font-mono font-bold text-studio-primary block">{p.phase}</span>
                <h3 className="text-sm font-display uppercase text-studio-primary">{p.title}</h3>
                <p className="text-xs text-studio-secondary font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        {data.relatedCaseIds.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-studio-border">
            <h2 className="text-xl md:text-2xl font-display uppercase font-light text-studio-primary tracking-wide">
              {language === "es" ? "CASOS DE ESTUDIO RELACIONADOS" : "RELATED CASE STUDIES"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.relatedCaseIds.map((caseId) => (
                <div
                  key={caseId}
                  onClick={() => {
                    onBack();
                    onViewCaseStudy(caseId);
                  }}
                  className="p-6 bg-studio-panel border border-studio-border hover:border-studio-primary rounded-sm cursor-pointer transition-all duration-300 group flex justify-between items-center"
                >
                  <span className="text-xs font-mono text-studio-primary uppercase font-medium">
                    {caseStudyNames[caseId] || caseId}
                  </span>
                  <ArrowUpRight size={16} className="text-studio-caption group-hover:text-studio-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="space-y-6 pt-4 border-t border-studio-border">
          <h2 className="text-xl md:text-2xl font-display uppercase font-light text-studio-primary tracking-wide">
            {language === "es" ? "PREGUNTAS FRECUENTES DEL SERVICIO" : "SERVICE FREQUENTLY ASKED QUESTIONS"}
          </h2>
          <div className="space-y-4">
            {data.faqs[langKey].map((faq, idx) => (
              <div key={idx} className="p-6 bg-studio-panel border border-studio-border rounded-sm space-y-2">
                <h3 className="text-sm font-display uppercase text-studio-primary">{faq.q}</h3>
                <p className="text-xs text-studio-secondary font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="p-10 bg-studio-panel border border-studio-primary/50 rounded-sm text-center space-y-6">
          <h2 className="text-2xl font-display uppercase text-studio-primary">
            {language === "es" ? "¿LISTO PARA INICIAR TU PROYECTO?" : "READY TO START YOUR PROJECT?"}
          </h2>
          <p className="text-xs md:text-sm text-studio-secondary font-light max-w-lg mx-auto">
            {language === "es"
              ? "Agendá una sesión estratégica o envianos tu consulta para evaluar la mejor solución."
              : "Schedule a strategic call or send us your inquiry to evaluate the best solution."}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 bg-studio-primary text-studio-bg hover:bg-studio-caption transition-all duration-300 font-mono text-xs uppercase tracking-widest font-semibold rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer no-underline"
            >
              <span>{language === "es" ? "AGENDAR REUNIÓN" : "BOOK A CALL"}</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={onOpenContact}
              className="py-4 px-8 border border-studio-border text-studio-primary hover:border-studio-primary transition-all duration-300 font-mono text-xs uppercase tracking-widest rounded-sm cursor-pointer bg-transparent"
            >
              <span>{language === "es" ? "ENVIAR CONSULTA" : "SEND INQUIRY"}</span>
            </button>
          </div>
        </div>

      </main>
    </motion.div>
  );
}
