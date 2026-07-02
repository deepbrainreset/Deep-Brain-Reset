import { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  Layers, 
  Layout, 
  Compass, 
  Cpu, 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  MousePointerClick 
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getLocalizedCaseStudies } from "../portfolioTranslations";

interface ConLaTuyaContribuyenteCaseStudyProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export default function ConLaTuyaContribuyenteCaseStudy({ onBack, onNextProject }: ConLaTuyaContribuyenteCaseStudyProps) {
  const { language } = useLanguage();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caseStudies = getLocalizedCaseStudies(language);
  const csData = caseStudies.find(c => c.id === "con-la-tuya") || caseStudies[2];

  const localDict: Record<string, any> = {
    en: {
      returnToStudio: "Return to Showcase",
      caseStudyTag: "CASE STUDY 04",
      exploreCaseBtn: "Explore Case Study",
      specLabels: {
        platformType: "Platform Type",
        primaryFocus: "Primary Focus",
        coreArchitecture: "Core Architecture",
        navigation: "Navigation",
        dataSources: "Data Sources",
        designSystem: "Design System"
      },
      specValues: {
        platformType: "Civic Intelligence Platform",
        primaryFocus: "Government Transparency",
        coreArchitecture: "Information Architecture",
        navigation: "Multi-layer Search",
        dataSources: "Official Public Records",
        designSystem: "Editorial UI"
      },
      introTag: "01 // INTRODUCTION",
      introTitle: "CIVIC INTELLIGENCE ARCHITECTURE.",
      introP1: "The core challenge of Con La Tuya Contribuyente was never simply designing web pages. The true imperative was transforming fragmented, complex public information into a navigable, high-density digital product.",
      introP2: "Operating as an independent civic intelligence platform, the system establishes a new standard for evidence-based governance, mapping complex tax systems, multiple government levels, and legal documentation.",
      introP3: "By linking public officials directly to legislative records and fiscal evidence, the design prioritizes interactive exploration and professional-grade usability over traditional corporate website layouts.",
      challengeTitle: "The Project Challenge",
      solutionTitle: "The Platform Solution",
      capabilitiesTag: "02 // FUNCTIONAL ARCHITECTURE",
      capabilitiesTitle: "CORE CAPABILITIES",
      capabilitiesDesc: "We translated investigative goals into functional technology modules designed to ensure maximum reader trust, immediate performance, and high-contrast indexing.",
      editorialTag: "03 // EDITORIAL INFORMATION ARCHITECTURE",
      editorialTitle: "EDITORIAL SYSTEM",
      editorialDesc: "By blending high-end editorial proportions with sober public authority, we designed an interface system designed to handle large-scale civic data. Component consistency, absolute visual hierarchy, and dynamic typography ensure that public data remains extremely dense yet accessible without compromising user cognitive load.",
      visualLabels: {
        desktopComp: "OFFICIAL PORTAL REVEAL // PRIMARY DESKTOP COMPOSITION",
        credit: "DEEP BRAIN RESET CREATIVE PRODUCTION © 2026"
      },
      stellaCards: {
        progressive: {
          title: "Progressive Disclosure",
          desc: "Structuring complex regulatory items and deep legislative records so secondary details reveal dynamically only upon active interaction, reducing initial cognitive noise."
        },
        consistency: {
          title: "Component Consistency",
          desc: "A unified library of data tables, profile timelines, tax cards, and interactive map widgets, ensuring a predictable, seamless navigation experience across all directories."
        },
        relationships: {
          title: "Content Relationships",
          desc: "Semantic linkages connecting public officials with specific tax legislation, official gazettes, and geographic map jurisdictions to form a fully searchable intelligence graph."
        }
      },
      devPipelineTag: "04 // PRODUCTION PIPELINE",
      devPipelineTitle: "DEVELOPMENT STAGES",
      devPipelineDesc: "We follow a rigorous, stage-by-stage engineering system that translates public datasets into a robust, type-safe, and highly accessible editorial experience.",
      galleryTag: "05 // GALLERY & WALKTHROUGH",
      galleryTitle: "SYSTEM PORTAL INTERFACES",
      galleryDesc: "Detailed breakdown of the primary layouts and interactive nodes engineered for Con La Tuya Contribuyente, built strictly following structured editorial and performance guidelines.",
      outcomeTag: "06 // SYSTEM OUTCOME",
      outcomeTitle: "THE RESULT",
      outcomeDesc: "Con La Tuya Contribuyente demonstrates how robust information architecture, precise UX engineering, and high-density editorial interface design can transform highly fragmented public records into an authoritative, searchable, and interactive digital civic product without sacrificing clarity, neutrality, or performance.",
      metricsTitle: "OPERATIONAL VALUE METRICS",
      metrics: {
        taxTaxonomies: "TAX TAXONOMIES",
        responseSpeed: "RESPONSE SPEED",
        evidenceCorrelation: "EVIDENCE CORRELATION",
        systemResiliency: "SYSTEM RESILIENCY",
        mapped: "100% MAPPED",
        sub100ms: "SUB-100MS",
        accurate: "100% ACCURATE",
        enterprise: "ENTERPRISE GRADE"
      },
      nextSelection: "NEXT SELECTION",
      nextAdventure: "NEXT PORTFOLIO ADVENTURE",
      sucupamIndustrial: "SUCUPAM INDUSTRIAL",
      returnToCoreShowcase: "/ RETURN TO CORE SHOWCASE",
      pipelineSteps: [
        { step: "01", label: "Data Ingestion & Taxonomy", desc: "Modeling and structuring unstructured government datasets into a highly predictable, unified schema." },
        { step: "02", label: "UX & Cognitive Audit", desc: "Analyzing citizen navigation behaviors and information consumption patterns across massive public records databases." },
        { step: "03", label: "Editorial UI Architecture", desc: "Designing a fully neutral, authoritative, and trusted reading interface tailored for raw fiscal analysis." },
        { step: "04", label: "High-Density Optimization", desc: "Refining fluid CSS grids to scale comprehensive data visualizations elegantly from large displays down to hand-held views." },
        { step: "05", label: "Semantic Search Indexing", desc: "Structuring nested database routes and structured schemas to ensure maximum public discoverability." },
        { step: "06", label: "Type-Safe Implementation", desc: "Engineering modular, performant React and TypeScript code for immediate paint and sub-100ms response times." },
        { step: "07", label: "Audit & Scale Tuning", desc: "Minimizing bundle sizes and setting strict lazy-loading rules for rapid, lightweight public exploration." }
      ],
      providedServices: [
        { title: "Information Architecture", desc: "Structuring nested, complex government entities, tax taxonomies, and public records into structured, predictable digital frameworks." },
        { title: "Government Data Modeling", desc: "Modeling and transforming unstructured datasets, legal publications, and official bulletins into predictable, type-safe schema parameters." },
        { title: "Civic Intelligence", desc: "Engineering neutral, evidence-based transparency ecosystems that turn fragmented governmental records into approachable, navigability-first utilities." },
        { title: "Interactive Cartography", desc: "Designing high-fidelity, interactive geospatial map visualization layers to analyze national, provincial, and local fiscal jurisdictions." },
        { title: "Data Visualization", desc: "Converting multi-dimensional fiscal datasets, budget breakdowns, and regional indicators into pristine, high-density, easily parsed charts." },
        { title: "Public Records", desc: "Consolidating and indexing official legal citations, decree histories, and legislative actions with strict validation, reference integrity, and auditability." },
        { title: "Tax Intelligence", desc: "Deconstructing complex local tax codes, regulatory codes, and civic fiscal duties into clear, accessible, and structured relational databases." },
        { title: "Search Architecture", desc: "Architecting highly performant, multi-faceted search engines to retrieve, query, and filters massive directories of public documents instantaneously." },
        { title: "UX Research", desc: "Performing detailed cognitive workload evaluations to facilitate frictionless navigation, information discovery, and reader trust for all citizens." },
        { title: "Editorial Design", desc: "Applying classical typographic hierarchies, rigorous negative space, and premium visual standards to project institutional trustworthiness." },
        { title: "Responsive Development", desc: "Developing fluidly scalable web layouts to guarantee the same high density and uncompromising readability from desktop viewports down to touch screens." },
        { title: "Performance Optimization", desc: "Tuning asset compilation pipelines, font loading parameters, and rendering engines to achieve instantaneous, sub-100ms civic information access." }
      ],
      galleryItems: [
        {
          step: "01",
          title: "01 — CIVIC INTELLIGENCE PLATFORM",
          desc: "An independent digital platform designed to organize, audit and communicate public fiscal information through a modern editorial interface. The system transforms fragmented governmental records into an accessible civic intelligence experience focused on transparency, usability and evidence-based navigation.",
          focus: ["Government Transparency", "Editorial UI", "Information Architecture"]
        },
        {
          step: "02",
          title: "02 — INTERACTIVE GOVERNANCE MAP",
          desc: "An interactive geopolitical visualization enables users to explore Argentina through national, provincial and municipal jurisdictions. Each administrative layer exposes budgets, tax pressure, authorities, fiscal indicators and documented public information using a unified visual language.",
          focus: ["Interactive cartography", "Administrative hierarchy", "Tax heatmaps", "Government structure", "Budget exploration"]
        },
        {
          step: "03",
          title: "03 — TAX REGISTRY ENGINE",
          desc: "A structured registry indexes taxes across every jurisdiction using advanced filtering, legal references and evidence grading. Citizens can search regulations, determine current legal status and understand the origin of every fiscal obligation through a centralized database.",
          focus: ["Advanced Search", "Legal References", "Jurisdiction Filters", "Evidence Levels", "Tax Classification"]
        },
        {
          step: "04",
          title: "04 — PERSONAL FISCAL PRESSURE",
          desc: "A scientific estimation engine calculates the real fiscal burden borne by individual citizens. Using salary, consumption, assets and jurisdiction, the platform estimates tax pressure while visualizing annual work dedicated exclusively to taxation.",
          focus: ["Simulation Engine", "Interactive Controls", "Tax Breakdown", "Fiscal Timeline", "Visual Analytics"]
        },
        {
          step: "05",
          title: "05 — PUBLIC OFFICIAL INTELLIGENCE",
          desc: "Every government official is represented through a structured intelligence profile containing political history, declared assets, judicial information, legislative activity, fiscal decisions and documented public evidence. The objective is to centralize fragmented public records into a transparent research interface.",
          focus: ["Political Timeline", "Asset Declarations", "Judicial History", "Government Records", "Evidence System"]
        }
      ]
    },
    es: {
      returnToStudio: "Volver a Proyectos",
      caseStudyTag: "CASO DE ESTUDIO 04",
      exploreCaseBtn: "Explorar Caso de Estudio",
      specLabels: {
        platformType: "Tipo de Plataforma",
        primaryFocus: "Enfoque Principal",
        coreArchitecture: "Arquitectura Central",
        navigation: "Navegación",
        dataSources: "Fuentes de Datos",
        designSystem: "Sistema de Diseño"
      },
      specValues: {
        platformType: "Plataforma de Inteligencia Cívica",
        primaryFocus: "Transparencia Gubernamental",
        coreArchitecture: "Arquitectura de Información",
        navigation: "Búsqueda Multicapa",
        dataSources: "Registros Públicos Oficiales",
        designSystem: "UI Editorial"
      },
      introTag: "01 // INTRODUCCIÓN",
      introTitle: "ARQUITECTURA DE INTELIGENCIA CÍVICA.",
      introP1: "El desafío central de Con La Tuya Contribuyente nunca fue simplemente diseñar páginas web. El imperativo real fue transformar información pública fragmentada y compleja en un producto digital navegable y de alta densidad.",
      introP2: "Operando como una plataforma de inteligencia cívica independiente, el sistema establece un nuevo estándar para la gobernanza basada en evidencia, mapeando sistemas fiscales complejos, múltiples niveles de gobierno y documentación legal.",
      introP3: "Al vincular directamente a los funcionarios públicos con los registros legislativos y la evidencia fiscal, el diseño prioriza la exploración interactiva y la usabilidad de nivel profesional sobre los diseños tradicionales de sitios web corporativos.",
      challengeTitle: "El Desafío del Proyecto",
      solutionTitle: "La Solución de la Plataforma",
      capabilitiesTag: "02 // ARQUITECTURA FUNCIONAL",
      capabilitiesTitle: "CAPACIDADES CENTRALES",
      capabilitiesDesc: "Tradujimos los objetivos de investigación en módulos de tecnología funcional diseñados para garantizar la máxima confianza del lector, un rendimiento inmediato e indexación de alto contraste.",
      editorialTag: "03 // ARQUITECTURA DE INFORMACIÓN EDITORIAL",
      editorialTitle: "SISTEMA EDITORIAL",
      editorialDesc: "Al combinar proporciones editoriales de alta gama con una sobria autoridad pública, diseñamos un sistema de interfaz diseñado para manejar datos cívicos a gran escala. La consistencia de componentes, la jerarquía visual absoluta y la tipografía dinámica aseguran que los datos públicos permanezcan extremadamente densos pero accesibles sin comprometer la carga cognitiva del usuario.",
      visualLabels: {
        desktopComp: "REVELACIÓN DEL PORTAL OFICIAL // COMPOSICIÓN DE ESCRITORIO PRIMARIA",
        credit: "DEEP BRAIN RESET PRODUCCIÓN CREATIVA © 2026"
      },
      stellaCards: {
        progressive: {
          title: "Divulgación Progresiva",
          desc: "Estructuración de elementos regulatorios complejos y registros legislativos de modo que los detalles secundarios se revelen dinámicamente solo en interacción activa, reduciendo el ruido cognitivo inicial."
        },
        consistency: {
          title: "Consistencia de Componentes",
          desc: "Una biblioteca unificada de tablas de datos, líneas de tiempo de perfiles, tarjetas de impuestos y widgets de mapas interactivos, que garantizan una experiencia de navegación predecible en todos los directorios."
        },
        relationships: {
          title: "Relaciones de Contenido",
          desc: "Vínculos semánticos que conectan a los funcionarios públicos con legislaciones fiscales específicas, boletines oficiales y jurisdicciones geográficas para formar un gráfico de inteligencia searchable."
        }
      },
      devPipelineTag: "04 // PIPELINE DE PRODUCCIÓN",
      devPipelineTitle: "ETAPAS DE DESARROLLO",
      devPipelineDesc: "Seguimos un riguroso sistema de ingeniería paso a paso que traduce conjuntos de datos públicos en una experiencia editorial robusta, segura y altamente accesible.",
      galleryTag: "05 // GALERÍA Y RECORRIDO",
      galleryTitle: "INTERFACES DEL PORTAL DEL SISTEMA",
      galleryDesc: "Desglose detallado de los diseños principales y nodos interactivos diseñados para Con La Tuya Contribuyente, construidos estrictamente siguiendo pautas estructuradas de edición y rendimiento.",
      outcomeTag: "06 // RESULTADO DEL SISTEMA",
      outcomeTitle: "EL RESULTADO",
      outcomeDesc: "Con La Tuya Contribuyente demuestra cómo una arquitectura de información robusta, una ingeniería de experiencia de usuario precisa y un diseño de interfaz editorial de alta densidad pueden transformar registros públicos altamente fragmentados en un producto cívico digital autorizado, buscable e interactivo sin sacrificar la claridad, la neutralidad o el rendimiento.",
      metricsTitle: "MÉTRICAS DE VALOR OPERATIVO",
      metrics: {
        taxTaxonomies: "TAXONOMÍAS FISCALES",
        responseSpeed: "VELOCIDAD DE RESPUESTA",
        evidenceCorrelation: "CORRELACIÓN DE EVIDENCIA",
        systemResiliency: "RESILIENCIA DEL SISTEMA",
        mapped: "100% MAPÉADAS",
        sub100ms: "SUB-100MS",
        accurate: "100% PRECISA",
        enterprise: "NIVEL EMPRESARIAL"
      },
      nextSelection: "SIGUIENTE SELECCIÓN",
      nextAdventure: "SIGUIENTE AVENTURA DE PORTAFOLIO",
      sucupamIndustrial: "SUCUPAM INDUSTRIAL",
      returnToCoreShowcase: "/ VOLVER AL ESCAPARATE PRINCIPAL",
      pipelineSteps: [
        { step: "01", label: "Ingesta de Datos y Taxonomía", desc: "Modelado y estructuración de conjuntos de datos gubernamentales no estructurados en un esquema unificado altamente predecible." },
        { step: "02", label: "Auditoría Cognitiva y de UX", desc: "Análisis de los comportamientos de navegación de los ciudadanos y patrones de consumo de información en bases de datos de registros públicos." },
        { step: "03", label: "Arquitectura de UI Editorial", desc: "Diseño de una interfaz de lectura completamente neutral, autorizada y confiable, adaptada para el análisis fiscal puro." },
        { step: "04", label: "Optimización de Alta Densidad", desc: "Refinamiento de cuadrículas CSS fluidas para escalar visualizaciones de datos completas de manera elegante desde pantallas grandes hasta teléfonos." },
        { step: "05", label: "Indexación de Búsqueda Semántica", desc: "Estructuración de rutas de bases de datos anidadas y esquemas estructurados para garantizar la máxima descubribilidad pública." },
        { step: "06", label: "Implementación Type-Safe", desc: "Ingeniería de código React y TypeScript modular y de alto rendimiento para cargas inmediatas y tiempos de respuesta inferiores a 100 ms." },
        { step: "07", label: "Auditoría y Ajuste de Escala", desc: "Minimización de tamaños de bundles y establecimiento de reglas estrictas de carga perezosa para una exploración pública rápida." }
      ],
      providedServices: [
        { title: "Arquitectura de Información", desc: "Estructuración de entidades gubernamentales complejas, taxonomías de impuestos y registros públicos en marcos digitales estructurados." },
        { title: "Modelado de Datos Públicos", desc: "Modelado y transformación de conjuntos de datos no estructurados, boletines oficiales y publicaciones legales en parámetros seguros." },
        { title: "Inteligencia Cívica", desc: "Ingeniería de ecosistemas de transparencia neutrales basados en evidencia que facilitan la navegación de registros oficiales fragmentados." },
        { title: "Cartografía Interactiva", desc: "Diseño de capas de visualización de mapas geoespaciales interactivos de alta fidelidad para analizar jurisdicciones fiscales." },
        { title: "Visualización de Datos", desc: "Conversión de conjuntos de datos fiscales multidimensionales y desgloses presupuestarios en gráficos limpios y fáciles de analizar." },
        { title: "Registros Públicos", desc: "Consolidación e indexación de citas legales oficiales, decretos e iniciativas legislativas con validación estricta e integridad de referencias." },
        { title: "Inteligencia Fiscal", desc: "Deconstrucción de códigos fiscales locales complejos, regulaciones y deberes cívicos en bases de datos estructuradas." },
        { title: "Arquitectura de Búsqueda", desc: "Diseño de motores de búsqueda multifacéticos y de alto rendimiento para consultar directorios masivos de documentos públicos." },
        { title: "Investigación de UX", desc: "Evaluaciones detalladas de la carga de trabajo cognitiva para facilitar la navegación fluida y la confianza de los ciudadanos." },
        { title: "Diseño Editorial", desc: "Aplicación de jerarquías tipográficas clásicas, uso riguroso del espacio negativo y estándares visuales premium para proyectar confiabilidad." },
        { title: "Desarrollo Responsivo", desc: "Desarrollo de layouts web fluidamente escalables para garantizar la legibilidad en pantallas táctiles y de escritorio." },
        { title: "Optimización de Rendimiento", desc: "Ajuste de compilación de activos y motores de renderizado para lograr accesos a la información cívica en menos de 100 ms." }
      ],
      galleryItems: [
        {
          step: "01",
          title: "01 — PLATAFORMA DE INTELIGENCIA CÍVICA",
          desc: "Una plataforma digital independiente diseñada para organizar, auditar y comunicar información fiscal pública a través de una interfaz editorial moderna.",
          focus: ["Transparencia Gubernamental", "UI Editorial", "Arquitectura de Información"]
        },
        {
          step: "02",
          title: "02 — MAPA INTERACTIVO DE GOBERNANZA",
          desc: "Una visualización geopolítica interactiva que permite a los usuarios explorar Argentina a través de jurisdicciones nacionales, provinciales y municipales.",
          focus: ["Cartografía interactiva", "Jerarquía administrativa", "Mapas de calor", "Estructura de gobierno", "Exploración de presupuestos"]
        },
        {
          step: "03",
          title: "03 — MOTOR DE REGISTRO FISCAL",
          desc: "Un registro estructurado indexa los impuestos de cada jurisdicción con filtros avanzados, referencias legales y gradación de evidencia.",
          focus: ["Búsqueda Avanzada", "Referencias Legales", "Filtros de Jurisdicción", "Clasificación Fiscal"]
        },
        {
          step: "04",
          title: "04 — PRESIÓN FISCAL PERSONAL",
          desc: "Un motor de estimación científica calcula la carga fiscal real soportada por ciudadanos individuales en función de su salario, consumo y activos.",
          focus: ["Motor de Simulación", "Controles Interactivos", "Desglose de Impuestos", "Línea de Tiempo", "Analítica Visual"]
        },
        {
          step: "05",
          title: "05 — INTELIGENCIA DE FUNCIONARIOS PÚBLICOS",
          desc: "Cada funcionario gubernamental está representado a través de un perfil de inteligencia estructurado que contiene historial político, patrimonio e iniciativas.",
          focus: ["Línea de Tiempo Política", "Declaraciones Juradas", "Historial Judicial", "Registros Públicos"]
        }
      ]
    },
    de: {
      returnToStudio: "Zurück zur Auswahl",
      caseStudyTag: "FALLSTUDIE 04",
      exploreCaseBtn: "Fallstudie erkunden",
      specLabels: {
        platformType: "Plattformtyp",
        primaryFocus: "Hauptfokus",
        coreArchitecture: "Kernarchitektur",
        navigation: "Navigation",
        dataSources: "Datenquellen",
        designSystem: "Designsystem"
      },
      specValues: {
        platformType: "Plattform für Bürgerintelligenz",
        primaryFocus: "Regierungstransparenz",
        coreArchitecture: "Informationsarchitektur",
        navigation: "Mehrschichtige Suche",
        dataSources: "Offizielle öffentliche Register",
        designSystem: "Redaktionelles UI"
      },
      introTag: "01 // EINFÜHRUNG",
      introTitle: "BÜRGERLICHE INTELLIGENZARCHITEKTUR.",
      introP1: "Die eigentliche Herausforderung bei Con La Tuya Contribuyente bestand nie darin, einfach nur Webseiten zu entwerfen. Die wahre Notwendigkeit bestand darin, fragmentierte, komplexe öffentliche Informationen in ein navigierbares digitales Produkt mit hoher Dichte zu verwandeln.",
      introP2: "Das System fungiert als unabhängige Plattform für Bürgerdaten und setzt neue Maßstäbe für eine evidenzbasierte Governance, indem es komplexe Steuersysteme, verschiedene Regierungsebenen und rechtliche Dokumentationen abbildet.",
      introP3: "Durch die direkte Verknüpfung von Beamten mit Gesetzesentwürfen und Finanzdaten priorisiert das Design die interaktive Erkundung und professionelle Benutzerfreundlichkeit gegenüber herkömmlichen Unternehmens-Weblayouts.",
      challengeTitle: "Die Projektherausforderung",
      solutionTitle: "Die Plattformlösung",
      capabilitiesTag: "02 // FUNKTIONALE ARCHITEKTUR",
      capabilitiesTitle: "KERNKAPAZITÄTEN",
      capabilitiesDesc: "Wir haben investigative Ziele in funktionale Technologiemodule übersetzt, um maximales Vertrauen der Leser, sofortige Leistung und kontrastreiche Indexierung zu gewährleisten.",
      editorialTag: "03 // REDAKTIONELLE INFORMATIONSARCHITEKTUR",
      editorialTitle: "REDAKTIONELLES SYSTEM",
      editorialDesc: "Durch die Verschmelzung von erstklassigen redaktionellen Proportionen mit nüchterner öffentlicher Autorität haben wir ein Interface-System entworfen, das für die Bewältigung großer Mengen bürgerlicher Daten ausgelegt ist. Konsistenz der Komponenten, absolute visuelle Hierarchie und dynamische Typografie sorgen dafür, dass die öffentlichen Daten extrem dicht und dennoch zugänglich bleiben.",
      visualLabels: {
        desktopComp: "ENTHÜLLUNG DES OFFIZIELLEN PORTALS // PRIMÄRE DESKTOP-KOMPOSITION",
        credit: "DEEP BRAIN RESET KREATIVE PRODUKTION © 2026"
      },
      stellaCards: {
        progressive: {
          title: "Progressive Offenlegung",
          desc: "Strukturierung komplexer regulatorischer Punkte und tiefer legislativer Aufzeichnungen, so dass sich sekundäre Details erst bei aktiver Interaktion dynamisch offenbaren, was das anfängliche kognitive Rauschen reduziert."
        },
        consistency: {
          title: "Konsistenz der Komponenten",
          desc: "Eine einheitliche Bibliothek von Datentabellen, Profil-Timelines, Steuerkarten und interaktiven Karten-Widgets, die eine vorhersehbare und nahtlose Navigation gewährleisten."
        },
        relationships: {
          title: "Inhaltsbeziehungen",
          desc: "Semantische Verknüpfungen, die Beamte direkt mit Steuergesetzen, offiziellen Gazette-Einträgen und geografischen Zuständigkeiten verbinden."
        }
      },
      devPipelineTag: "04 // PRODUKTIONSPIPELINE",
      devPipelineTitle: "ENTWICKLUNGSSTUFEN",
      devPipelineDesc: "Wir folgen einem strengen, stufenweisen Entwicklungssystem, das öffentliche Datensätze in ein robustes, typsicheres und barrierefreies redaktionelles Erlebnis übersetzt.",
      galleryTag: "05 // GALERIE & WALKTHROUGH",
      galleryTitle: "PORTAL-SCHNITTSTELLEN DES SYSTEMS",
      galleryDesc: "Detaillierte Aufschlüsselung der primären Layouts und interaktiven Knoten, die für Con La Tuya Contribuyente entwickelt wurden.",
      outcomeTag: "06 // SYSTEMERGEBNIS",
      outcomeTitle: "DAS ERGEBNIS",
      outcomeDesc: "Con La Tuya Contribuyente zeigt, wie robuste Informationsarchitektur, präzises UX-Engineering und hochdichtes redaktionelles Interface-Design hochgradig fragmentierte öffentliche Aufzeichnungen in ein maßgebliches, durchsuchbares bürgerliches Produkt verwandeln können.",
      metricsTitle: "OPERATIVE METRIKEN",
      metrics: {
        taxTaxonomies: "STEUERTAXONOMIEN",
        responseSpeed: "ANTWORTZEIT",
        evidenceCorrelation: "EVIDENZKORRELATION",
        systemResiliency: "SYSTEMRESILIENZ",
        mapped: "100% ERFASST",
        sub100ms: "UNTER 100MS",
        accurate: "100% PRÄZISE",
        enterprise: "ENTERPRISE-KLASSE"
      },
      nextSelection: "NÄCHSTE AUSWAHL",
      nextAdventure: "NÄCHSTES PORTFOLIO-ABENTEUER",
      sucupamIndustrial: "SUCUPAM INDUSTRIAL",
      returnToCoreShowcase: "/ ZURÜCK ZUR AUSWAHL",
      pipelineSteps: [
        { step: "01", label: "Datenerfassung & Taxonomie", desc: "Modellierung und Strukturierung unstrukturierter Regierungsdatensätze in ein hochgradig vorhersagbares, einheitliches Schema." },
        { step: "02", label: "UX & Kognitives Audit", desc: "Analyse des bürgerlichen Navigationsverhaltens und der Informationskonsummuster in riesigen Registern." },
        { step: "03", label: "Redaktionelle UI-Architektur", desc: "Entwurf einer völlig neutralen, autorisierten Benutzeroberfläche für steuerliche Analysen." },
        { step: "04", label: "Hochdichte Optimierung", desc: "Verfeinerung von CSS-Grids zur eleganten Skalierung umfassender Datenvisualisierungen für Mobilgeräte." }
      ],
      providedServices: [],
      galleryItems: []
    }
  };

  // Fallback missing languages to English/Spanish or basic shapes
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

      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 bg-black overflow-hidden border-b border-zinc-900/60">
        {/* Subtle, soft ambient backdrop glow to ground the editorial typography */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-gradient-to-b from-blue-950/10 to-transparent filter blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Textual Hierarchy Container */}
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          
          {/* CASE STUDY LABEL & SMALL CATEGORY */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-studio-primary bg-blue-950/30 border border-blue-900/40 px-5 py-2 rounded-full inline-block backdrop-blur-sm shadow-lg uppercase">
              {d.caseStudyTag}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] block pt-1">
              {csData.category}
            </span>
          </motion.div>

          {/* PROJECT NAME & SUBTITLE */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-light text-white tracking-tight leading-none uppercase">
              {csData.client}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-mono tracking-[0.3em] uppercase max-w-3xl mx-auto">
              {language === "es" ? "Plataforma de Inteligencia Cívica Independiente" : "Independent Civic Intelligence Platform"}
            </p>
          </motion.div>

          {/* EDITORIAL DESCRIPTION (3-4 lines) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {csData.subtitle}
            </p>
          </motion.div>

          {/* TECHNOLOGY TAGS */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-2.5 pt-2"
          >
            {csData.demonstrates.map((core: string, idx: number) => (
              <span 
                key={idx} 
                className="text-[9px] font-mono uppercase tracking-widest px-3.5 py-1.5 border border-zinc-900 bg-zinc-950/60 rounded-sm text-zinc-400"
              >
                {core}
              </span>
            ))}
          </motion.div>

          {/* PRIMARY CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center pt-2"
          >
            <button
              onClick={() => {
                document.getElementById("overview-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-3 px-8 py-3.5 border border-studio-primary bg-studio-primary text-black text-xs font-mono uppercase tracking-[0.2em] hover:bg-transparent hover:text-studio-primary hover:border-studio-primary/80 transition-all duration-300 rounded-sm cursor-pointer font-semibold shadow-lg shadow-studio-primary/5"
            >
              <span>{d.exploreCaseBtn}</span>
              <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>

        {/* SCREENSHOT: VISUAL CENTERPIECE OF THE HERO */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-8"
        >
          <div className="border border-zinc-900 bg-zinc-950 p-1.5 sm:p-2.5 rounded-sm shadow-2xl shadow-black relative overflow-hidden group">
            <div className="aspect-[16/10] w-full relative overflow-hidden rounded-sm bg-zinc-950 flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png"
                alt="Con La Tuya Contribuyente Core Interface"
                className="w-full h-full object-contain opacity-95 transition-transform duration-[800ms] scale-[1.04] group-hover:scale-[1.08]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* 2. SPECIFICATIONS GRID BAR */}
      <section id="overview-section" className="border-b border-zinc-900 bg-zinc-950/60 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">{d.specLabels.platformType}</span>
              <span className="text-xs sm:text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.platformType}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">{d.specLabels.primaryFocus}</span>
              <span className="text-xs sm:text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.primaryFocus}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">{d.specLabels.coreArchitecture}</span>
              <span className="text-xs sm:text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.coreArchitecture}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">{d.specLabels.navigation}</span>
              <span className="text-xs sm:text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.navigation}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">{d.specLabels.dataSources}</span>
              <span className="text-xs sm:text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.dataSources}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">{d.specLabels.designSystem}</span>
              <span className="text-xs sm:text-sm font-display font-light text-white tracking-wide uppercase">{d.specValues.designSystem}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL CASE BRIEF */}
      <section className="py-24 md:py-36 border-b border-zinc-900 relative z-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left intro details */}
            <div className="lg:col-span-5 space-y-8">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                {d.introTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight leading-tight">
                {d.introTitle}
              </h2>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {d.introP1}
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {d.introP2}
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {d.introP3}
              </p>
            </div>

            {/* Right details challenge & solution */}
            <div className="lg:col-span-7 space-y-12 lg:pl-6">
              
              {/* Challenge */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  <h3 className="text-xs font-mono text-white uppercase tracking-widest">{d.challengeTitle}</h3>
                </div>
                <p className="text-sm text-zinc-300 font-light leading-relaxed pl-4 border-l border-zinc-900">
                  {csData.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-studio-primary rounded-full" />
                  <h3 className="text-xs font-mono text-white uppercase tracking-widest">{d.solutionTitle}</h3>
                </div>
                <p className="text-sm text-zinc-300 font-light leading-relaxed pl-4 border-l border-zinc-900">
                  {csData.strategy}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY DELIVERABLES GRID */}
      <section className="py-24 md:py-32 bg-zinc-950/40 border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] font-mono text-studio-primary tracking-[0.25em] uppercase block">
              {d.capabilitiesTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.capabilitiesTitle}
            </h2>
            <p className="text-sm text-zinc-400 font-light">
              {d.capabilitiesDesc}
            </p>
          </div>

          {/* Grid of deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providedServices.map((service: any, i: number) => (
              <div 
                key={i}
                className="p-8 border border-zinc-900 bg-zinc-950/80 rounded-sm hover:border-zinc-800 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-6 h-6 rounded-full bg-blue-950/40 border border-blue-900/30 flex items-center justify-center">
                    <span className="text-[8px] font-mono text-studio-primary">0{i+1}</span>
                  </div>
                  <h3 className="text-xs font-mono text-white uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest block">DEEP BRAIN RESET</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VISUAL DIRECTION & REAL SYSTEM SCREENSHOTS */}
      <section className="py-24 md:py-32 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono text-studio-primary tracking-widest uppercase block">
                {d.editorialTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase mt-4 tracking-tight">
                {d.editorialTitle}
              </h2>
            </div>

            <div className="lg:col-span-7 max-w-2xl lg:pl-4">
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {d.editorialDesc}
              </p>
            </div>
          </div>

          {/* Large Portfolio Image Container */}
          <div className="space-y-8">
            <div className="border border-zinc-900 bg-zinc-950 p-1 sm:p-2 rounded-sm relative overflow-hidden group shadow-2xl">
              <div className="aspect-video w-full relative overflow-hidden rounded-sm flex items-center justify-center bg-zinc-950">
                <img 
                  src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png"
                  alt="Con La Tuya Contribuyente Platform Screenshot"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] opacity-95 transition-transform duration-[700ms] scale-[1.04] group-hover:scale-[1.08]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-6 pb-2 px-4 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-zinc-500 uppercase tracking-widest gap-4 md:gap-0">
                <span>{d.visualLabels.desktopComp}</span>
                <span>{d.visualLabels.credit}</span>
              </div>
            </div>

            {/* Extra screenshots details grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 border border-zinc-900 rounded-sm bg-zinc-950 space-y-3">
                <span className="text-[10px] font-mono text-studio-primary uppercase block">{d.stellaCards.progressive.title}</span>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {d.stellaCards.progressive.desc}
                </p>
              </div>

              <div className="p-6 border border-zinc-900 rounded-sm bg-zinc-950 space-y-3">
                <span className="text-[10px] font-mono text-studio-primary uppercase block">{d.stellaCards.consistency.title}</span>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {d.stellaCards.consistency.desc}
                </p>
              </div>

              <div className="p-6 border border-zinc-900 rounded-sm bg-zinc-950 space-y-3">
                <span className="text-[10px] font-mono text-studio-primary uppercase block">{d.stellaCards.relationships.title}</span>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {d.stellaCards.relationships.desc}
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
                {d.devPipelineTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase mt-4 tracking-tight">
                {d.devPipelineTitle}
              </h2>
            </div>

            <div className="lg:col-span-7 max-w-2xl lg:pl-4">
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {d.devPipelineDesc}
              </p>
            </div>
          </div>

          {/* Timeline Scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {pipelineSteps.slice(0, 4).map((step: any, idx: number) => (
              <div 
                key={idx}
                className="p-8 border border-zinc-900 bg-black/60 rounded-sm relative space-y-4 hover:border-zinc-800 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-studio-primary bg-zinc-900 px-3 py-1 rounded-full">
                    STAGE {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-700">0{idx+1}</span>
                </div>
                <h3 className="text-sm font-mono text-white uppercase tracking-wider">{step.label}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom pipeline nodes */}
          {pipelineSteps.length > 4 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative">
              {pipelineSteps.slice(4).map((step: any, idx: number) => (
                <div 
                  key={idx}
                  className="p-8 border border-zinc-900 bg-black/60 rounded-sm relative space-y-4 hover:border-zinc-800 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-studio-primary bg-zinc-900 px-3 py-1 rounded-full">
                      STAGE {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-700">0{idx+5}</span>
                  </div>
                  <h3 className="text-sm font-mono text-white uppercase tracking-wider">{step.label}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 7. DETAILED SCREENSHOT GALLERY */}
      <section className="py-24 md:py-36 bg-black border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-[10px] font-mono text-studio-primary tracking-[0.25em] uppercase block">
              {d.galleryTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.galleryTitle}
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              {d.galleryDesc}
            </p>
          </div>

          {/* Staggered detailed list with responsive screenshot styling */}
          <div className="space-y-24">
            {galleryItems.map((item: any, index: number) => {
              // Extract real image from original item list to retain perfect resolution/paths
              const realImage = [
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782893051/7128377d-2ac2-4e7c-8480-799faaea7644.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782893035/fb751b94-c673-4f0e-9b90-32e9514d76a9.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
                "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896311/fcf42c21-6ce3-484d-beb3-4e15d985444b.png"
              ][index];

              return (
                <div 
                  id={`gallery-step-${item.step}`}
                  key={index} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Block - Staggered layout */}
                  <div className={`lg:col-span-5 space-y-4 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                    <span className="text-[11px] font-mono text-studio-primary tracking-widest block">
                      {item.title}
                    </span>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {item.focus && (
                      <div className="pt-4 border-t border-zinc-900/60 space-y-2">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                          {language === "es" ? "Capacidades Clave" : "Key Capabilities"}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.focus.map((f: string, fIdx: number) => (
                            <span key={fIdx} className="text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-sm">
                              • {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex items-center space-x-2 text-[10px] font-mono text-zinc-600 uppercase">
                      <span>STATION // STAGE {item.step}</span>
                    </div>
                  </div>

                  {/* Screenshot Container */}
                  <div className="lg:col-span-7">
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
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. KEY PERFORMANCE RESULTS */}
      <section className="py-24 md:py-32 bg-zinc-950 relative border-b border-zinc-900/60 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-studio-primary uppercase tracking-[0.25em] block">
                {d.outcomeTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
                {d.outcomeTitle}
              </h2>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {d.outcomeDesc || csData.outcome}
              </p>
            </div>

            <div className="lg:col-span-7 pl-0 lg:pl-12">
              <div className="p-8 border border-zinc-900 bg-black rounded-sm space-y-6">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{d.metricsTitle}</span>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-900/60">
                    <span className="text-xs font-mono text-white uppercase tracking-wider">{d.metrics.taxTaxonomies}</span>
                    <span className="text-sm font-mono text-studio-primary">{d.metrics.mapped}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-900/60">
                    <span className="text-xs font-mono text-white uppercase tracking-wider">{d.metrics.responseSpeed}</span>
                    <span className="text-sm font-mono text-studio-primary">{d.metrics.sub100ms}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-900/60">
                    <span className="text-xs font-mono text-white uppercase tracking-wider">{d.metrics.evidenceCorrelation}</span>
                    <span className="text-sm font-mono text-studio-primary">{d.metrics.accurate}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-xs font-mono text-white uppercase tracking-wider">{d.metrics.systemResiliency}</span>
                    <span className="text-sm font-mono text-studio-primary">{d.metrics.enterprise}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. CASE STUDY NAVIGATION */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] block">
            {d.nextSelection}
          </span>
          
          <div className="inline-block group cursor-pointer" onClick={onNextProject}>
            <span className="text-xs font-mono text-studio-primary uppercase tracking-[0.25em] block mb-2 group-hover:text-white transition-colors duration-300">
              {d.nextAdventure}
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-light text-white uppercase tracking-tight group-hover:text-studio-primary transition-colors duration-500 flex items-center justify-center space-x-4">
              <span>{d.sucupamIndustrial}</span>
              <ArrowRight size={24} className="text-studio-primary group-hover:translate-x-3 transition-transform duration-500" />
            </h3>
          </div>

          <div className="pt-12">
            <button
              onClick={onBack}
              className="text-xs font-mono text-zinc-500 uppercase tracking-widest hover:text-white transition-colors duration-300"
            >
              {d.returnToCoreShowcase}
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
