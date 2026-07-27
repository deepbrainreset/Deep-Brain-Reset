import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  Box, 
  Plus, 
  Minus, 
  ArrowRight, 
  Layers,
  ArrowUpRight
} from "lucide-react";

interface ServicesListProps {
  onSelectServiceLanding?: (slug: string) => void;
}

export default function ServicesList({ onSelectServiceLanding }: ServicesListProps) {
  const { language } = useLanguage();
  const tSection = translations.services[language];
  const [selectedId, setSelectedId] = useState<string | null>("attract-clients");

  const pillarsData = {
    en: [
      {
        id: "attract-clients",
        slug: "ai-commercial-production",
        esSlug: "spots-publicitarios-con-ia",
        num: "01",
        title: "ATTRACT MORE CLIENTS",
        category: "AUDIOVISUAL & BRANDING",
        tag: "COMMERCIAL SPOTS & CAMPAIGNS",
        description: "We create commercial spots, audiovisual campaigns, and visual experiences designed to capture attention, position brands, and launch products with cinematic impact.",
        bulletPoints: [
          "AI Commercial Spots",
          "Brand Films & Video Production",
          "Creative Direction & Scripting",
          "CGI & 3D Motion Graphics",
          "Audiovisual Campaign Assets",
          "Launch Commercial Films"
        ],
        problem: "Traditional live shoots and physical sets are cost-prohibitive and slow.",
        beneficiaries: "Brands, agencies, and enterprise products seeking cinematic authority."
      },
      {
        id: "sell-better",
        slug: "web-development",
        esSlug: "desarrollo-web",
        num: "02",
        title: "SELL BETTER",
        category: "WEB DEVELOPMENT & PLATFORMS",
        tag: "HIGH-CONVERTING DIGITAL PRODUCTS",
        description: "We design and develop websites, e-commerce stores, and digital products that convert visitors into active inquiries, bookings, sales, and business opportunities.",
        bulletPoints: [
          "Full-stack Web Development",
          "High-conversion Landing Pages",
          "E-commerce & Digital Stores",
          "Digital Platforms & SaaS",
          "Web Applications",
          "Interactive 3D Web Experiences"
        ],
        problem: "Outdated or slow websites cause loss of credibility and sales leads.",
        beneficiaries: "E-commerce brands, legal firms, B2B services, and digital startups."
      },
      {
        id: "automate-operations",
        slug: "business-automation",
        esSlug: "automatizacion-de-procesos",
        num: "03",
        title: "AUTOMATE YOUR OPERATIONS",
        category: "PROCESS AUTOMATION & AI",
        tag: "INTEGRATIONS & AGENT WORKFLOWS",
        description: "We build systems, server-side AI integrations, and background automation pipelines that reduce repetitive manual tasks and enable your team to operate faster and with total control.",
        bulletPoints: [
          "Business Process Automation",
          "AI Model Integrations (LLMs & Agents)",
          "Autonomous Digital Agents",
          "Operational Control Dashboards",
          "Internal Management Systems",
          "Administrative & Logistics Workflows"
        ],
        problem: "Manual data input and disconnected tools create costly bottlenecks.",
        beneficiaries: "Logistics operators, administrative teams, and scaling service firms."
      },
      {
        id: "show-ideas-3d",
        slug: "3d-rendering",
        esSlug: "renderizado-3d",
        num: "04",
        title: "SHOW YOUR IDEA BEFORE BUILDING IT",
        category: "3D RENDERING & VISUALIZATION",
        tag: "ARCHITECTURAL & PRODUCT CGI",
        description: "We produce 3D renders, animations, and virtual visualizations to showcase real estate developments, interior spaces, and products with photorealistic commercial quality.",
        bulletPoints: [
          "Architectural 3D Rendering",
          "Interior & Furniture Visualization",
          "Product CGI & Studio Lighting",
          "3D Animation & Virtual Tours",
          "Interactive Web 3D Assets",
          "Commercial CGI Integration"
        ],
        problem: "Presenting projects with flat drawings causes pre-sales hesitation.",
        beneficiaries: "Real estate developers, architects, interior studios, and product designers."
      }
    ],
    es: [
      {
        id: "attract-clients",
        slug: "spots-publicitarios-con-ia",
        esSlug: "spots-publicitarios-con-ia",
        num: "01",
        title: "ATRAÉ MÁS CLIENTES",
        category: "PRODUCCIÓN AUDIOVISUAL",
        tag: "SPOTS PUBLICITARIOS Y CAMPAÑAS",
        description: "Creamos spots publicitarios, campañas audiovisuales y experiencias visuales diseñadas para captar atención, posicionar marcas y lanzar productos con impacto cinematográfico.",
        bulletPoints: [
          "Spots publicitarios con Inteligencia Artificial",
          "Brand films y videos corporativos",
          "Dirección creativa y guionado cinematográfico",
          "CGI y motion graphics 3D",
          "Contenido audiovisual publicitario",
          "Campañas de lanzamiento de marca"
        ],
        problem: "Los rodajes tradicionales y escenarios físicos son costosos y demorados.",
        beneficiaries: "Marcas, empresas y productos que buscan máxima autoridad visual."
      },
      {
        id: "sell-better",
        slug: "desarrollo-web",
        esSlug: "desarrollo-web",
        num: "02",
        title: "VENDÉ MEJOR",
        category: "DESARROLLO WEB Y PLATAFORMAS",
        tag: "SITIOS WEB Y PRODUCTOS DIGITALES",
        description: "Diseñamos y desarrollamos sitios web, e-commerce y productos digitales que convierten visitas en consultas reales, reservas, ventas y oportunidades comerciales.",
        bulletPoints: [
          "Desarrollo web corporativo full stack",
          "Landing pages de alta conversión",
          "E-commerce y tiendas digitales",
          "Plataformas digitales y portales",
          "Aplicaciones web a medida",
          "Experiencias interactivas 3D"
        ],
        problem: "Sitios web desactualizados o lentos destruyen la confianza de los clientes.",
        beneficiaries: "Empresas B2B, tiendas online, firmas profesionales y startups."
      },
      {
        id: "automate-operations",
        slug: "automatizacion-de-procesos",
        esSlug: "automatizacion-de-procesos",
        num: "03",
        title: "AUTOMATIZÁ TU OPERACIÓN",
        category: "AUTOMATIZACIÓN E IA",
        tag: "FLUJOS DE AGENTES E INTEGRACIONES",
        description: "Creamos sistemas e integraciones que reducen tareas manuales repetitivas, centralizan información y permiten operar con mayor velocidad, precisión y control.",
        bulletPoints: [
          "Automatización de procesos de negocio",
          "Integraciones con modelos de IA (LLMs y Agentes)",
          "Agentes digitales autónomos",
          "Dashboards de control operativo",
          "Sistemas internos de gestión",
          "Flujos administrativos y logísticos"
        ],
        problem: "La carga manual de datos y sistemas desconectados generan pérdidas de tiempo.",
        beneficiaries: "Equipos administrativos, logística, atención y operaciones."
      },
      {
        id: "show-ideas-3d",
        slug: "renderizado-3d",
        esSlug: "renderizado-3d",
        num: "04",
        title: "MOSTRÁ TU IDEA ANTES DE CONSTRUIRLA",
        category: "RENDERIZADO Y VISUALIZACIÓN 3D",
        tag: "CGI ARQUITECTÓNICO Y DE PRODUCTO",
        description: "Producimos renders, animaciones y visualizaciones 3D para presentar desarrollos inmobiliarios, espacios interiores y productos con calidad fotorrealista de nivel comercial.",
        bulletPoints: [
          "Renderizado arquitectónico 3D fotorrealista",
          "Visualización de diseño de interiores",
          "CGI de producto e iluminación de estudio",
          "Animación 3D y recorridos virtuales",
          "Integración 3D para web e interactivas",
          "Visualización para proyectos de preventa"
        ],
        problem: "Vender emprendimientos o productos con gráficos 2D frena las compras.",
        beneficiaries: "Desarrolladores inmobiliarios, arquitectos, diseñadores y marcas."
      }
    ]
  };

  const currentPillars = pillarsData[language === "en" ? "en" : "es"];

  const getIcon = (id: string) => {
    switch (id) {
      case "attract-clients":
        return <Sparkles className="w-5 h-5 text-studio-primary shrink-0" />;
      case "sell-better":
        return <Code2 className="w-5 h-5 text-studio-primary shrink-0" />;
      case "automate-operations":
        return <Cpu className="w-5 h-5 text-studio-primary shrink-0" />;
      case "show-ideas-3d":
        return <Box className="w-5 h-5 text-studio-primary shrink-0" />;
      default:
        return <Sparkles className="w-5 h-5 text-studio-primary shrink-0" />;
    }
  };

  const techLayerText = {
    es: {
      badge: "CAPA TÉCNICA SECUNDARIA",
      title: "TECNOLOGÍA DETRÁS DEL RESULTADO",
      text: "Cada proyecto combina las herramientas necesarias según el objetivo: inteligencia artificial generativa, desarrollo full stack, automatización, infraestructura cloud, CGI, renderizado 3D y sistemas interactivos. Las decisiones técnicas se toman en función del resultado comercial, la escalabilidad y la experiencia final del usuario."
    },
    en: {
      badge: "SECONDARY TECHNICAL LAYER",
      title: "TECHNOLOGY BEHIND THE RESULT",
      text: "Every project combines the required tools according to its goal: generative artificial intelligence, full-stack development, process automation, cloud infrastructure, CGI, 3D rendering, and interactive systems. Technical decisions are strictly aligned with business outcomes, scalability, and user experience."
    }
  }[language === "en" ? "en" : "es"];

  return (
    <section id="services" className="py-24 md:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase block">
              {tSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-studio-primary uppercase mt-3 tracking-tight leading-tight">
              {language === "es" ? "NUESTROS 4 PILARES DE TRABAJO" : "OUR 4 WORK PILLARS"}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {language === "es"
                ? "Organizamos nuestras soluciones en función de los resultados comerciales concretos que busca cada marca o empresa."
                : "We structure our capabilities around the concrete business outcomes sought by every brand or company."}
            </p>
          </div>
        </div>

        {/* 4 Outcome Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Left Column: List of 4 Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {currentPillars.map((pillar) => {
              const isSelected = selectedId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedId(isSelected ? null : pillar.id)}
                  className={`p-6 cursor-pointer rounded-sm border transition-all duration-300 ${
                    isSelected
                      ? "border-studio-primary bg-studio-panel shadow-lg"
                      : "border-studio-border bg-studio-panel/50 hover:border-studio-caption"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-mono text-studio-muted font-bold">{pillar.num}</span>
                      <div className="flex items-center space-x-3">
                        {getIcon(pillar.id)}
                        <h3 className="text-sm sm:text-base font-display tracking-wide uppercase text-studio-primary font-medium">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <div>
                      {isSelected ? (
                        <Minus size={16} className="text-studio-primary" />
                      ) : (
                        <Plus size={16} className="text-studio-caption" />
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-studio-caption pl-9 mt-1">
                    {pillar.tag}
                  </p>

                  {/* Inline expansion on mobile */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden mt-6 pt-6 border-t border-studio-border space-y-4"
                      >
                        <p className="text-xs text-studio-secondary font-light leading-relaxed">
                          {pillar.description}
                        </p>

                        <div className="space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-studio-caption block">
                            {language === "es" ? "SERVICIOS INCLUIDOS:" : "INCLUDED SERVICES:"}
                          </span>
                          {pillar.bulletPoints.map((bp, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs text-studio-secondary font-light">
                              <span className="w-1.5 h-1.5 bg-studio-primary rounded-full shrink-0" />
                              <span>{bp}</span>
                            </div>
                          ))}
                        </div>

                        {onSelectServiceLanding && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectServiceLanding(pillar.slug);
                            }}
                            className="mt-4 w-full py-3 bg-studio-primary text-studio-bg font-mono text-xs uppercase tracking-widest font-semibold rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer border-0"
                          >
                            <span>{language === "es" ? "VER PÁGINA COMPLETA DEL SERVICIO" : "VIEW FULL SERVICE PAGE"}</span>
                            <ArrowUpRight size={14} />
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Detail Card */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="sticky top-32 bg-studio-panel border border-studio-border p-8 md:p-10 rounded-sm min-h-[480px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {selectedId ? (
                  currentPillars.map((pillar) => {
                    if (pillar.id !== selectedId) return null;
                    return (
                      <motion.div
                        key={pillar.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 flex flex-col justify-between h-full"
                      >
                        <div className="space-y-4">
                          <span className="inline-block px-2.5 py-1 bg-studio-bg border border-studio-border text-[9px] font-mono text-studio-secondary uppercase tracking-widest">
                            {pillar.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-light text-studio-primary tracking-wide uppercase">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-studio-secondary font-light leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>

                        <div className="space-y-3 pt-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-studio-caption block">
                            {language === "es" ? "SERVICIOS Y CAPACIDADES:" : "SERVICES & CAPABILITIES:"}
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            {pillar.bulletPoints.map((bp, i) => (
                              <div key={i} className="flex items-center space-x-3 text-xs text-studio-secondary font-light">
                                <span className="text-[10px] font-mono text-studio-primary font-bold">0{i + 1}</span>
                                <span>{bp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-studio-border flex justify-between items-center gap-4">
                          {onSelectServiceLanding ? (
                            <button
                              onClick={() => onSelectServiceLanding(pillar.slug)}
                              className="w-full py-3 bg-studio-primary text-studio-bg hover:bg-studio-caption transition-colors font-mono text-xs uppercase tracking-widest font-semibold rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer border-0"
                            >
                              <span>{language === "es" ? "EXPLORAR SERVICIO COMPLETO" : "EXPLORE FULL SERVICE"}</span>
                              <ArrowUpRight size={14} />
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                const el = document.getElementById("contact");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="text-xs font-mono uppercase tracking-widest text-studio-primary hover:text-studio-caption transition-colors flex items-center space-x-1 cursor-pointer bg-transparent border-0"
                            >
                              <span>{language === "es" ? "CONSULTAR POR ESTE PILAR" : "INQUIRE FOR THIS PILLAR"}</span>
                              <ArrowRight size={14} />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-studio-caption py-12">
                    <Layers size={28} className="stroke-1" />
                    <span className="text-xs font-mono tracking-widest uppercase">
                      {language === "es" ? "SELECCIONA UN PILAR PARA VER SUS DETALLES" : "SELECT A PILLAR TO INSPECT DETAILS"}
                    </span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Secondary Technical Layer Block */}
        <div className="p-8 md:p-10 bg-studio-panel border border-studio-border rounded-sm space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
            {techLayerText.badge}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-light text-studio-primary uppercase tracking-wide">
            {techLayerText.title}
          </h3>
          <p className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed max-w-4xl">
            {techLayerText.text}
          </p>
        </div>

      </div>
    </section>
  );
}
