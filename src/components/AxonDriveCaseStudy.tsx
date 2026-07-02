import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Play, 
  ExternalLink, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle,
  Laptop,
  Cpu,
  Workflow,
  Film,
  Compass,
  Award
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getLocalizedCaseStudies } from "../portfolioTranslations";

interface AxonDriveCaseStudyProps {
  onBack: () => void;
  onNextProject?: () => void;
}

export default function AxonDriveCaseStudy({ onBack, onNextProject }: AxonDriveCaseStudyProps) {
  const { language } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState<number>(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caseStudies = getLocalizedCaseStudies(language);
  const csData = caseStudies.find(c => c.id === "axon-drive") || caseStudies[1];

  const localDict: Record<string, any> = {
    en: {
      returnToStudio: "Return to Showcase",
      playVideo: "Play Video",
      explorePortfolio: "Explore Portfolio",
      scrollIndicator: "SCROLL TO VIEW CASE",
      introBrief: "01 // THE NARRATIVE",
      overview: "Introduction.",
      challengeLabel: "THE CHALLENGE",
      approachLabel: "CREATIVE APPROACH",
      projectSpecsTitle: "Project Overview Specs",
      metadataLabel: "// CATEGORY METADATA",
      embeddedFilmPlayer: "02 // EMBEDDED FILM PLAYER",
      watchCommercial: "Watch the Commercial",
      activatePlayer: "ACTIVATE CINEMATIC PLAYER (1:40)",
      audioSpecs: "4K MASTER // SPATIAL AUDIO",
      pipelineStructure: "03 // PIPELINE STRUCTURE",
      productionProcessTitle: "Production Process.",
      processDescription: "A structured breakdown of our highly optimized 11-stage cinematic pipeline, coordinating AI prompt mechanics, continuous models, and post-production workflows.",
      visualAssets: "04 // VISUAL ASSETS",
      cinematicGallery: "Cinematic Gallery.",
      editorialScaling: "asymmetric editorial scaling // luxury layout rhythm",
      agencyCapabilities: "05 // AGENCY CAPABILITIES",
      servicesDeployedTitle: "Services Deployed.",
      compilationUtilities: "06 // COMPILATION UTILITIES",
      toolsEmployedTitle: "Tools Employed.",
      deliveredMetric: "07 // DELIVERED METRIC & OUTCOME",
      perfectingCinematic: "Perfecting Cinematic AI Pipelines.",
      prototypeSpeedLabel: "PROTOTYPE SPEED",
      masteredQualityLabel: "MASTERED QUALITY",
      costSavingsLabel: "COST SAVINGS",
      continueExploring: "CONTINUAR EXPLORANDO",
      nextProjectTag: "Up Next // Case Study 01",
      nextProjectTitle: "AXON REVOLUTION",
      nextProjectDesc: "Inspect our high-end concept fashion commercial demonstrating continuous synthetic model tracking and luxurious garment physics simulation.",
      viewNextProjectBtn: "View Case Study 01",
      pipelineStages: [
        {
          title: "Creative Direction",
          subtitle: "Fictional Luxury Brand Blueprint",
          desc: "Establishing a fictional luxury brand identity, establishing authentic global cues, tone guidelines, and custom luxury brand positioning."
        },
        {
          title: "Brand Strategy",
          subtitle: "Emotional Alignment Framework",
          desc: "Aligning a brand values blueprint towards wonder, aspiration, and emotion rather than speed or mechanical statistics."
        },
        {
          title: "Storytelling",
          subtitle: "Emotional Narrative Arc",
          desc: "Structuring the script and scene emotional curve, mapping a simple coastal voyage where reality begins to dissolve."
        },
        {
          title: "Concept Development",
          subtitle: "Atmospheric Visual Language",
          desc: "Developing specific visual directions for vehicle curves, twilight atmospheric lighting, and glowing sea-dwelling entities."
        },
        {
          title: "AI Image Generation",
          subtitle: "Bespoke Keyframe Synthesis",
          desc: "Developing highly precise, pre-planned visual prompts to synthesize targeted environments, ensuring style consistency with minimal rendering overhead."
        },
        {
          title: "AI Video Generation",
          subtitle: "Temporal Motion & Frame Flow",
          desc: "Utilizing highly specialized temporal consistency video pipelines to render sleek camera panning, vehicle reflection dynamics, and sea mammal ascents."
        },
        {
          title: "Shot Selection",
          subtitle: "Master Reel Editorial Curation",
          desc: "Evaluating the pre-planned clips for flawless visual coherence, selecting the absolute best sequences to form a unified, high-fidelity narrative."
        },
        {
          title: "Editing",
          subtitle: "Atmospheric Rhythmic Cuts",
          desc: "Assembling selected takes on a timeline, pacing cuts strictly to a slow, awe-inducing luxury rhythm."
        },
        {
          title: "Color Grading",
          subtitle: "Cinematic Spectral Signature",
          desc: "Applying specific cinematic color grades emphasizing deep nocturnal cyans, twilight purples, and high-frequency electric blues."
        },
        {
          title: "Sound Design",
          subtitle: "Spatial Acoustics & Synthesis",
          desc: "Layering custom low-end mechanical hums, ethereal sub-aquatic whale acoustics, and a bespoke cinematic synth score."
        },
        {
          title: "Final Mastering",
          subtitle: "4K High Dynamic Range Deliverable",
          desc: "Compiling the final video output, scaling resolution, reducing noise artifacts, and mastering spatial sound mix."
        }
      ],
      services: [
        { title: "Creative Direction", desc: "Supervising overall artistic style, consistency, brand tone, and visual storytelling integrity." },
        { title: "Brand Development", desc: "Designing visual identifiers and naming strategies for high-end conceptual brands." },
        { title: "Concept Design", desc: "Formulating futuristic product designs, shapes, and environments from raw prompts." },
        { title: "Storytelling", desc: "Writing the screenplay, scene breakdowns, emotional arcs, and contextual voice-overs." },
        { title: "AI Production", desc: "Leading the advanced prompt engineering, frame orchestration, and AI model coordination." },
        { title: "Automotive Visualization", desc: "Rendering sleek reflective automotive textures, lighting, and environmental shadows." },
        { title: "Editing", desc: "Assembling continuous shots, adjusting scene transitions, and defining commercial pacing." },
        { title: "Color Grading", desc: "Balancing the visual spectrum with luxurious twilight violet tones and clean contrast." },
        { title: "Sound Design", desc: "Developing immersive audio tracks, deep bass hums, and ocean soundscapes." },
        { title: "Creative Supervision", desc: "Overseeing all components of the post-production lifecycle for a cohesive master output." }
      ],
      galleryItems: [
        {
          title: "01 — OPENING COASTAL JOURNEY",
          tag: "DETAIL_PASS_05 // OPENING",
          desc: "The opening aerial shot establishes the cinematic atmosphere of the film. A solitary electric vehicle travels along a dramatic coastal highway, introducing the world before reality gradually transforms into the surreal encounter with the bioluminescent whales."
        },
        {
          title: "02 — DRIVER INTERIOR",
          tag: "DETAIL_PASS_04 // COCKPIT",
          desc: "This cockpit view showcases the premium driving environment, highlighting the futuristic dashboard, integrated HUD interface and refined interior design. Every surface was designed to reinforce the feeling of a luxury electric vehicle built around advanced digital interaction as the driver witnesses the first impossible encounter beyond the windshield."
        },
        {
          title: "03 — CETACEAN SPECTACLE",
          tag: "DETAIL_PASS_02 // ENVIRONMENT",
          desc: "The emotional climax of the cinematic sequence showing multiple giant whales emerging from the ocean."
        },
        {
          title: "04 — DRIVER INTERIOR",
          tag: "DETAIL_PASS_03 // CELESTIAL",
          desc: "The premium cockpit combines minimalist industrial design with an intuitive digital interface, emphasizing clarity, ergonomics and the relationship between driver and machine."
        },
        {
          title: "05 — CLOSING JOURNEY",
          tag: "DETAIL_PASS_01 // REFLECTIONS",
          desc: "The vehicle continues along the coastal highway after the encounter, completing the narrative with a calm cinematic conclusion that mirrors the opening sequence."
        }
      ]
    },
    es: {
      returnToStudio: "Volver a Proyectos",
      playVideo: "Ver Video",
      explorePortfolio: "Explorar Portafolio",
      scrollIndicator: "DESPLAZAR PARA VER CASO",
      introBrief: "01 // EL RELATO",
      overview: "Introducción.",
      challengeLabel: "EL DESAFÍO",
      approachLabel: "ENFOQUE CREATIVO",
      projectSpecsTitle: "Especificaciones del Proyecto",
      metadataLabel: "// METADATOS DE CATEGORÍA",
      embeddedFilmPlayer: "02 // REPRODUCTOR DE CINE",
      watchCommercial: "Ver el Comercial",
      activatePlayer: "ACTIVAR REPRODUCTOR CINEMÁTICO (1:40)",
      audioSpecs: "MASTER 4K // AUDIO ESPACIAL",
      pipelineStructure: "03 // ESTRUCTURA DEL PIPELINE",
      productionProcessTitle: "Proceso de Producción.",
      processDescription: "Un desglose estructurado de nuestra metodología cinematográfica optimizada en 11 etapas, coordinando mecánicas de prompts de IA, modelos consistentes y flujos de posproducción.",
      visualAssets: "04 // ACTIVOS VISUALES",
      cinematicGallery: "Galería Cinemática.",
      editorialScaling: "escala editorial asimétrica // ritmo de diseño de lujo",
      agencyCapabilities: "05 // CAPACIDADES DE LA AGENCIA",
      servicesDeployedTitle: "Servicios Desplegados.",
      compilationUtilities: "06 // UTILIDADES DE COMPILACIÓN",
      toolsEmployedTitle: "Herramientas Empleadas.",
      deliveredMetric: "07 // MÉTRICAS DE ENTREGA Y RESULTADOS",
      perfectingCinematic: "Perfeccionando Pipelines de IA Cinemática.",
      prototypeSpeedLabel: "VELOCIDAD DE PROTOTIPO",
      masteredQualityLabel: "CALIDAD DE MASTERIZACIÓN",
      costSavingsLabel: "AHORRO DE COSTOS",
      continueExploring: "CONTINUAR EXPLORANDO",
      nextProjectTag: "Siguiente // Caso de Estudio 01",
      nextProjectTitle: "AXON REVOLUTION",
      nextProjectDesc: "Examine nuestro comercial de moda conceptual de alta gama que demuestra el seguimiento continuo de modelos sintéticos y la simulación de físicas de prendas de lujo.",
      viewNextProjectBtn: "Ver Caso de Estudio 01",
      pipelineStages: [
        {
          title: "Dirección Creativa",
          subtitle: "Plan de Marca de Lujo Ficticia",
          desc: "Creación de una identidad de marca de lujo ficticia, estableciendo señales globales auténticas, pautas de tono y posicionamiento personalizado."
        },
        {
          title: "Estrategia de Marca",
          subtitle: "Marco de Alineación Emocional",
          desc: "Alineación de los valores de la marca hacia el asombro, la aspiración y la emoción en lugar de estadísticas mecánicas."
        },
        {
          title: "Narración",
          subtitle: "Arco Narrativo Emocional",
          desc: "Estructuración del guión y la curva emocional de las escenas, trazando un viaje costero simple donde la realidad comienza a disolverse."
        },
        {
          title: "Desarrollo de Concepto",
          subtitle: "Lenguaje Visual Atmosférico",
          desc: "Desarrollo de direcciones visuales específicas para las curvas del vehículo, la iluminación atmosférica crepuscular y las entidades marinas bioluminiscentes."
        },
        {
          title: "Generación de Imágenes con IA",
          subtitle: "Síntesis de Fotogramas Clave",
          desc: "Desarrollo de prompts visuales altamente precisos y planificados para sintetizar entornos específicos, garantizando la consistencia estilística."
        },
        {
          title: "Generación de Video con IA",
          subtitle: "Movimiento Temporal y Flujo",
          desc: "Utilización de pipelines de video con consistencia temporal para renderizar paneos de cámara fluidos, dinámicas de reflejos del auto y ascensos de mamíferos marinos."
        },
        {
          title: "Selección de Tomas",
          subtitle: "Curaduría del Master Reel",
          desc: "Evaluación de los clips planificados para una coherencia visual impecable, seleccionando las mejores secuencias para formar una narrativa unificada."
        },
        {
          title: "Edición",
          subtitle: "Cortes Rítmicos Atmosféricos",
          desc: "Montaje de las tomas seleccionadas en una línea de tiempo, marcando el ritmo de los cortes según un compás lento que inspira asombro."
        },
        {
          title: "Corrección de Color",
          subtitle: "Firma Espectral Cinemática",
          desc: "Aplicación de ajustes cromáticos de cine específicos que enfatizan cianos nocturnos profundos, púrpuras crepusculares y azules eléctricos."
        },
        {
          title: "Diseño de Sonido",
          subtitle: "Acústica Espacial y Síntesis",
          desc: "Superposición de zumbidos mecánicos personalizados, acústica de ballenas subacuáticas etéreas y una partitura de sintetizador cinematográfico."
        },
        {
          title: "Masterización Final",
          subtitle: "Entregable 4K HDR de Alta Fidelidad",
          desc: "Compilación de la salida de video final, escalando la resolución, reduciendo ruido y masterizando la mezcla de sonido espacial."
        }
      ],
      services: [
        { title: "Dirección Creativa", desc: "Supervisión del estilo artístico, consistencia, tono de marca e integridad de la narración visual." },
        { title: "Desarrollo de Marca", desc: "Diseño de identificadores visuales y estrategias de nombre para marcas conceptuales de alta gama." },
        { title: "Diseño de Concepto", desc: "Formulación de diseños de productos futuristas, formas y entornos a partir de prompts puros." },
        { title: "Narración", desc: "Escritura de guiones, desglose de escenas, arcos emocionales y voces en off contextuales." },
        { title: "Producción de IA", desc: "Dirección de ingeniería de prompts avanzada, orquestación de fotogramas y coordinación de modelos de IA." },
        { title: "Visualización Automotriz", desc: "Renderizado de texturas reflectantes de automóviles, iluminación y sombras del entorno." },
        { title: "Edición", desc: "Montaje de tomas continuas, ajuste de transiciones de escenas y definición del ritmo del comercial." },
        { title: "Corrección de Color", desc: "Equilibrio del espectro visual con lujosos tonos violetas crepusculares y contraste limpio." },
        { title: "Diseño de Sonido", desc: "Desarrollo de pistas de audio inmersivas, zumbidos graves profundos y paisajes sonoros oceánicos." },
        { title: "Supervisión Creativa", desc: "Supervisión de todos los componentes del ciclo de posproducción para lograr una salida maestra cohesiva." }
      ],
      galleryItems: [
        {
          title: "01 — VIAJE COSTEÑO DE APERTURA",
          tag: "PASE_DETALLE_05 // APERTURA",
          desc: "La toma aérea inicial establece la atmósfera cinematográfica de la película. Un vehículo eléctrico solitario viaja a lo largo de una espectacular carretera costera, presentando el mundo antes de que la realidad se transforme gradualmente."
        },
        {
          title: "02 — INTERIOR DEL CONDUCTOR",
          tag: "PASE_DETALLE_04 // CABINA",
          desc: "Esta vista de la cabina muestra el entorno de conducción premium, destacando el tablero futurista, la interfaz HUD integrada y el diseño interior refinado."
        },
        {
          title: "03 — ESPECTÁCULO CETÁCEO",
          tag: "PASE_DETALLE_02 // ENTORNO",
          desc: "El clímax emocional de la secuencia cinematográfica que muestra múltiples ballenas gigantes emergiendo del océano."
        },
        {
          title: "04 — CABINA DE CONDUCCIÓN",
          tag: "PASE_DETALLE_03 // CELESTIAL",
          desc: "La cabina premium combina un diseño industrial minimalista con una interfaz digital intuitiva, enfatizando la claridad y la relación conductor-máquina."
        },
        {
          title: "05 — VIAJE DE CIERRE",
          tag: "PASE_DETALLE_01 // REFLEJOS",
          desc: "El vehículo continúa a lo largo de la carretera costera después del encuentro, completando la narrativa con una conclusión cinematográfica tranquila."
        }
      ]
    },
    de: {
      returnToStudio: "Zurück zur Auswahl",
      playVideo: "Video abspielen",
      explorePortfolio: "Portfolio erkunden",
      scrollIndicator: "SCROLLEN FÜR DETAILANSICHT",
      introBrief: "01 // DIE NARRATIVE",
      overview: "Einführung.",
      challengeLabel: "DIE HERAUSFORDERUNG",
      approachLabel: "KREATIVER ANSATZ",
      projectSpecsTitle: "Projektspezifikationen",
      metadataLabel: "// KATEGORIE-METADATEN",
      embeddedFilmPlayer: "02 // FILMPLAYER",
      watchCommercial: "Werbespot ansehen",
      activatePlayer: "CINEMATIC PLAYER AKTIVIEREN (1:40)",
      audioSpecs: "4K MASTER // SPATIAL AUDIO",
      pipelineStructure: "03 // PIPELINE-STRUKTUR",
      productionProcessTitle: "Produktionsprozess.",
      processDescription: "Eine strukturierte Aufschlüsselung unserer optimierten 11-stufigen Kinopipeline, die KI-Prompt-Mechaniken, konsistente Modelle und Postproduktions-Workflows koordiniert.",
      visualAssets: "04 // VISUELLE ELEMENTE",
      cinematicGallery: "Kinogalerie.",
      editorialScaling: "asymmetrische redaktionelle Skalierung // luxuriöser Layout-Rhythmus",
      agencyCapabilities: "05 // AGENTUR-KAPAZITÄTEN",
      servicesDeployedTitle: "Eingesetzte Services.",
      compilationUtilities: "06 // WERKZEUGE",
      toolsEmployedTitle: "Eingesetzte Tools.",
      deliveredMetric: "07 // ERGEBNISSE & METRIKEN",
      perfectingCinematic: "Perfektionierung von KI-Kinopipelines.",
      prototypeSpeedLabel: "PROTOTYP-GESCHWINDIGKEIT",
      masteredQualityLabel: "MASTER-QUALITÄT",
      costSavingsLabel: "KOSTENEINSPARUNG",
      continueExploring: "WEITER ERKUNDEN",
      nextProjectTag: "Nächstes Projekt // Fallstudie 01",
      nextProjectTitle: "AXON REVOLUTION",
      nextProjectDesc: "Untersuchen Sie unseren High-End-Konzept-Mode-Werbespot, der kontinuierliches synthetisches Model-Tracking und luxuriöse Kleidungsphysik-Simulation zeigt.",
      viewNextProjectBtn: "Fallstudie 01 ansehen",
      pipelineStages: [
        {
          title: "Kreativdirektion",
          subtitle: "Blaupause für fiktive Luxusmarken",
          desc: "Aufbau einer fiktiven Luxusmarkenidentität, Etablierung authentischer globaler Cues, Tonalitätsrichtlinien und maßgeschneiderter Luxusmarkenpositionierung."
        },
        {
          title: "Markenstrategie",
          subtitle: "Emotionaler Ausrichtungsrahmen",
          desc: "Ausrichtung der Markenwerte auf Staunen, Sehnsucht und Emotion statt auf Geschwindigkeit oder mechanische Statistiken."
        },
        {
          title: "Storytelling",
          subtitle: "Emotionaler Erzählbogen",
          desc: "Strukturierung des Drehbuchs und der emotionalen Szenenkurve, Abbildung einer einfachen Küstenreise, auf der sich die Realität aufzulösen beginnt."
        },
        {
          title: "Konzeptentwicklung",
          subtitle: "Atmosphärische visuelle Sprache",
          desc: "Entwicklung spezifischer visueller Richtlinien für Fahrzeugkurven, dämmrige atmosphärische Beleuchtung und leuchtende Meeresbewohner."
        },
        {
          title: "KI-Bildgenerierung",
          subtitle: "Maßgeschneiderte Keyframe-Synthese",
          desc: "Entwicklung hochpräziser, vorab geplanter visueller Prompts zur Synthese gezielter Umgebungen bei minimalem Rendering-Overhead."
        },
        {
          title: "KI-Videogenerierung",
          subtitle: "Temporale Bewegung & Frame-Fluss",
          desc: "Nutzung hochspezialisierter Videopipelines mit zeitlicher Konsistenz zur Darstellung eleganter Kameraschwenks und Fahrzeugreflexionen."
        },
        {
          title: "Schnittauswahl",
          subtitle: "Redaktionelle Kuration des Master Reels",
          desc: "Bewertung der geplanten Clips auf makellose visuelle Kohärenz und Auswahl der absolut besten Sequenzen für eine einheitliche Erzählung."
        },
        {
          title: "Schnitt",
          subtitle: "Atmosphärische rhythmische Schnitte",
          desc: "Zusammenstellen ausgewählter Aufnahmen auf einer Timeline, wobei die Schnitte strikt auf einen langsamen, ehrfurchtgebietenden Luxusrhythmus abgestimmt werden."
        },
        {
          title: "Color Grading",
          subtitle: "Kinematografische Spektralsignatur",
          desc: "Anwendung spezifischer kinoreifer Farbkorrekturen, die tiefe nächtliche Cyan-Töne, dämmrige Purpurtöne und hochfrequente Elektroblaus betonen."
        },
        {
          title: "Sounddesign",
          subtitle: "Räumliche Akustik & Synthese",
          desc: "Schichtung von maßgeschneidertem mechanischem Summen, ätherischen subaquatischen Wal-Akustiken und einem maßgeschneiderten Kinosynth-Score."
        },
        {
          title: "Finales Mastering",
          subtitle: "4K High Dynamic Range Deliverable",
          desc: "Zusammenstellung der endgültigen Videoausgabe, Skalierung der Auflösung, Reduzierung von Rauschartefakten und Mastering des räumlichen Tonmixes."
        }
      ],
      services: [
        { title: "Kreativdirektion", desc: "Überwachung des künstlerischen Gesamtstils, der Konsistenz, des Markentons und der visuellen Erzählintegrität." },
        { title: "Markenentwicklung", desc: "Entwurf visueller Identifikatoren und Benennungsstrategien für anspruchsvolle Konzeptmarken." },
        { title: "Konzeptdesign", desc: "Formulierung futuristischer Produktdesigns, Formen und Umgebungen aus rohen Prompts." },
        { title: "Storytelling", desc: "Schreiben des Drehbuchs, Szenenaufteilungen, emotionaler Bögen und kontextueller Voice-over." },
        { title: "KI-Produktion", desc: "Leitung von fortgeschrittenem Prompt-Engineering, Frame-Orchestrierung und KI-Modellkoordination." },
        { title: "Automobil-Visualisierung", desc: "Rendering glänzender, reflektierender Automobiltexturen, Beleuchtung und Umgebungsschatten." },
        { title: "Schnitt", desc: "Montage kontinuierlicher Aufnahmen, Anpassung von Szenenübergängen und Definition des Werberhythmus." },
        { title: "Color Grading", desc: "Ausbalancieren des visuellen Spektrums mit luxuriösen dämmrigen Violetttönen und sauberem Kontrast." },
        { title: "Sounddesign", desc: "Entwicklung immersiver Audiotracks, tiefer Bass-Hums und ozeanischer Soundscapes." },
        { title: "Kreative Supervision", desc: "Überwachung aller Komponenten des Postproduktions-Lebenszyklus für ein stimmiges Master-Ergebnis." }
      ],
      galleryItems: [
        {
          title: "01 — AUFTAKT-KÜSTENREISE",
          tag: "DETAIL_PASS_05 // AUFTAKT",
          desc: "Die einleitende Luftaufnahme etabliert die kinoreife Atmosphäre des Films. Ein einsames Elektrofahrzeug fährt entlang einer dramatischen Küstenstraße."
        },
        {
          title: "02 — INNENANSICHT DES FAHRERS",
          tag: "DETAIL_PASS_04 // COCKPIT",
          desc: "Diese Cockpit-Ansicht zeigt die Premium-Fahrumgebung und hebt das futuristische Armaturenbrett und das integrierte HUD hervor."
        },
        {
          title: "03 — WAL-SPEKTAKEL",
          tag: "DETAIL_PASS_02 // UMGEBUNG",
          desc: "Der emotionale Höhepunkt der Kinoszene, in der mehrere riesige Wale aus dem Ozean auftauchen."
        },
        {
          title: "04 — PREMIUM-INNENRAUM",
          tag: "DETAIL_PASS_03 // CELESTIAL",
          desc: "Das Cockpit kombiniert minimalistisches Industriedesign mit einer intuitiven digitalen Schnittstelle und betont die Beziehung zwischen Mensch und Maschine."
        },
        {
          title: "05 — ABSCHLIESSENDE REISE",
          tag: "DETAIL_PASS_01 // REFLEXE",
          desc: "Das Fahrzeug setzt seine Fahrt entlang der Küstenstraße fort und schließt die Erzählung mit einem ruhigen, kinoreifen Ende ab."
        }
      ]
    },
    fr: {
      returnToStudio: "Retour aux Projets",
      playVideo: "Lire la Vidéo",
      explorePortfolio: "Explorer le Portfolio",
      scrollIndicator: "FAIRE DÉFILER POUR VOIR LE CAS",
      introBrief: "01 // LE RÉCIT",
      overview: "Introduction.",
      challengeLabel: "LE DÉFI",
      approachLabel: "APPROCHE CRÉATIVE",
      projectSpecsTitle: "Spécifications du Projet",
      metadataLabel: "// MÉTADONNÉES DE CATÉGORIE",
      embeddedFilmPlayer: "02 // LECTEUR DE FILM",
      watchCommercial: "Regarder la Publicité",
      activatePlayer: "ACTIVER LE LECTEUR CINÉMATIQUE (1:40)",
      audioSpecs: "MASTER 4K // AUDIO SPATIAL",
      pipelineStructure: "03 // STRUCTURE DU PIPELINE",
      productionProcessTitle: "Processus de Production.",
      processDescription: "Une ventilation structurée de notre pipeline cinématographique optimisé en 11 étapes, coordonnant les mécaniques de prompt IA, les modèles persistants et les flux de post-production.",
      visualAssets: "04 // SÉQUENCES VISUELLES",
      cinematicGallery: "Galerie Cinématographique.",
      editorialScaling: "mise à l'échelle éditoriale asymétrique // rythme de mise en page de luxe",
      agencyCapabilities: "05 // CAPACITÉS DE L'AGENCE",
      servicesDeployedTitle: "Services Déployés.",
      compilationUtilities: "06 // LOGICIELS",
      toolsEmployedTitle: "Outils Employés.",
      deliveredMetric: "07 // MÉTRIQUES & RÉSULTATS",
      perfectingCinematic: "Perfectionnement des Pipelines d'IA Cinématographique.",
      prototypeSpeedLabel: "VITESSE DE PROTOTYPAGE",
      masteredQualityLabel: "QUALITÉ DU MASTER",
      costSavingsLabel: "RÉDUCTION DES COÛTS",
      continueExploring: "CONTINUER À EXPLORER",
      nextProjectTag: "Suivant // Cas d'Étude 01",
      nextProjectTitle: "AXON REVOLUTION",
      nextProjectDesc: "Examinez notre publicité de mode conceptuelle haut de gamme démontrant le suivi continu des modèles synthétiques et la simulation physique des vêtements.",
      viewNextProjectBtn: "Voir le Cas d'Étude 01",
      pipelineStages: [
        {
          title: "Direction Artistique",
          subtitle: "Plan de Marque de Luxe Fictive",
          desc: "Création d'une identité de marque de luxe fictive, établissement d'indicateurs globaux authentiques, directives de ton et positionnement personnalisé."
        },
        {
          title: "Stratégie de Marque",
          subtitle: "Cadre d'Alignement Émotionnel",
          desc: "Alignement des valeurs de marque vers l'émerveillement, l'aspiration et l'émotion plutôt que vers la vitesse ou les statistiques mécaniques."
        },
        {
          title: "Storytelling",
          subtitle: "Arc Narratif Émotionnel",
          desc: "Structuration du scénario et de la courbe émotionnelle de chaque scène, traçant un voyage côtier simple où la réalité commence à se dissoudre."
        },
        {
          title: "Développement de Concept",
          subtitle: "Langage Visuel Atmosphérique",
          desc: "Développement de directions visuelles spécifiques pour les courbes du véhicule, l'éclairage crépusculaire et les créatures bioluminescentes."
        },
        {
          title: "Génération d'Images par IA",
          subtitle: "Synthèse de Photogrammes Clés",
          desc: "Conception de prompts visuels hautement précis et planifiés pour synthétiser des environnements ciblés, garantissant la cohérence stylistique."
        },
        {
          title: "Génération de Vidéos par IA",
          subtitle: "Mouvement Temporel & Flux d'Images",
          desc: "Utilisation de pipelines vidéo à cohérence temporelle pour générer des panoramiques fluides et des dynamiques de reflets du véhicule."
        },
        {
          title: "Sélection des Prises",
          subtitle: "Curation Éditoriale du Master Reel",
          desc: "Évaluation de la cohérence visuelle parfaite des clips et sélection des meilleures séquences pour former un récit unifié."
        },
        {
          title: "Montage",
          subtitle: "Coupes Rythmiques Atmosphériques",
          desc: "Assemblage des prises sur une chronologie, calant le rythme des coupures sur un tempo de luxe lent et impressionnant."
        },
        {
          title: "Étalonnage de Couleur",
          subtitle: "Signature Spectrale Cinématographique",
          desc: "Application de nuances de couleurs spécifiques soulignant les cyans nocturnes profonds, les violets crépusculaires et les bleus électriques."
        },
        {
          title: "Design Sonore",
          subtitle: "Acoustique Spatiale & Synthèse",
          desc: "Superposition de bourdonnements mécaniques personnalisés, de chants de baleines subaquatiques et d'une partition originale au synthétiseur."
        },
        {
          title: "Mastering Final",
          subtitle: "Livrable 4K à Haute Dynamique",
          desc: "Compilation de la sortie vidéo finale, mise à l'échelle de la résolution, réduction du bruit et mastering du mixage audio spatial."
        }
      ],
      services: [
        { title: "Direction Créative", desc: "Supervision du style artistique global, de la cohérence, du ton de marque et de l'intégrité du récit visuel." },
        { title: "Développement de Marque", desc: "Création d'identifiants visuels et de stratégies de nommage pour les marques conceptuelles haut de gamme." },
        { title: "Design de Concept", desc: "Formulation de designs de produits futuristes, de formes et d'environnements à partir de prompts bruts." },
        { title: "Storytelling", desc: "Écriture de scénarios, découpage de scènes, arcs émotionnels et voix-off contextuelles." },
        { title: "Production IA", desc: "Ingénierie de prompts avancée, orchestration des plans et coordination des modèles d'IA." },
        { title: "Visualisation Automobile", desc: "Rendu de textures réfléchissantes d'automobiles, éclairage et ombres environnementales." },
        { title: "Montage", desc: "Assemblage de plans continus, ajustement des transitions et définition du rythme de la publicité." },
        { title: "Étalonnage de Couleur", desc: "Équilibre du spectre visuel avec de luxueux tons violets crépusculaires et un contraste net." },
        { title: "Design Sonore", desc: "Création de pistes audio immersives, de bourdonnements de basses profonds et de paysages sonores océaniques." },
        { title: "Supervision Créative", desc: "Supervision de tous les aspects de la post-production pour obtenir une sortie de niveau master cohérente." }
      ],
      galleryItems: [
        {
          title: "01 — VOYAGE CÔTIER D'OUVERTURE",
          tag: "DÉTAIL_05 // OUVERTURE",
          desc: "Le plan aérien initial établit l'atmosphère cinématographique du film. Un véhicule électrique solitaire longe une route côtière spectaculaire."
        },
        {
          title: "02 — INTERIOR DU CONDUCTEUR",
          tag: "DÉTAIL_04 // CABINE",
          desc: "Cette vue de la cabine met en valeur l'environnement de conduite haut de gamme, soulignant le tableau de bord futuriste et le HUD intégré."
        },
        {
          title: "03 — SPECTACLE CÉTACÉ",
          tag: "DÉTAIL_02 // ENVIRONNEMENT",
          desc: "Le point culminant émotionnel de la séquence montrant de multiples baleines géantes émergeant de l'océan."
        },
        {
          title: "04 — CABINE DE PILOTAGE",
          tag: "DÉTAIL_03 // CÉLESTE",
          desc: "Le poste de conduite allie design industriel minimaliste et interface numérique intuitive, soulignant la relation homme-machine."
        },
        {
          title: "05 — VOYAGE DE CLÔTURE",
          tag: "DÉTAIL_01 // REFLETS",
          desc: "Le véhicule continue sa route après la rencontre, menant le récit vers une conclusion cinématographique sereine."
        }
      ]
    },
    it: {
      returnToStudio: "Torna ai Progetti",
      playVideo: "Riproduci Video",
      explorePortfolio: "Esplora il Portfolio",
      scrollIndicator: "SCORRI PER VEDERE IL CASO",
      introBrief: "01 // IL RACCONTO",
      overview: "Introduzione.",
      challengeLabel: "LA SFIDA",
      approachLabel: "APPROCCIO CREATIVO",
      projectSpecsTitle: "Specifiche del Progetto",
      metadataLabel: "// METADATI DI CATEGORIA",
      embeddedFilmPlayer: "02 // LETTORE CINEMATOGRAFICO",
      watchCommercial: "Guarda lo Spot",
      activatePlayer: "ATTIVA LETTORE CINEMATOGRAFICO (1:40)",
      audioSpecs: "MASTER 4K // AUDIO SPAZIALE",
      pipelineStructure: "03 // STRUTTURA DELLA PIPELINE",
      productionProcessTitle: "Processo di Produzione.",
      processDescription: "Un'analisi strutturata della nostra pipeline cinematografica ottimizzata in 11 fasi, che coordina le meccaniche dei prompt IA, i modelli costanti e i flussi di post-produzione.",
      visualAssets: "04 // SEQUENZE VISIVE",
      cinematicGallery: "Galleria Cinematografica.",
      editorialScaling: "ridimensionamento editoriale asimmetrico // ritmo di impaginazione di lusso",
      agencyCapabilities: "05 // CAPACITÀ DELL'AGENZIA",
      servicesDeployedTitle: "Servizi Distribuiti.",
      compilationUtilities: "06 // STRUMENTI",
      toolsEmployedTitle: "Strumenti Utilizzati.",
      deliveredMetric: "07 // METRICHE E RISULTATI",
      perfectingCinematic: "Perfezionamento delle Pipeline di IA Cinematografica.",
      prototypeSpeedLabel: "VELOCITÀ DI PROTOTIPAZIONE",
      masteredQualityLabel: "QUALITÀ DEL MASTER",
      costSavingsLabel: "RISPARMIO SUI COSTI",
      continueExploring: "CONTINUA A ESPLORARE",
      nextProjectTag: "Successivo // Caso di Studio 01",
      nextProjectTitle: "AXON REVOLUTION",
      nextProjectDesc: "Esamina il nostro spot di moda concettuale di fascia alta che dimostra il tracciamento continuo di modelli sintetici e la simulazione fisica dei tessuti.",
      viewNextProjectBtn: "Vedi il Caso di Studio 01",
      pipelineStages: [
        {
          title: "Direzione Artistica",
          subtitle: "Piano di Marca di Lusso Fittizio",
          desc: "Creazione di un'identità di marca di lusso fittizia, stabilendo indizi globali autentici, linee guida sul tono e posizionamento personalizzato."
        },
        {
          title: "Strategia di Marca",
          subtitle: "Quadro di Allineamento Emozionale",
          desc: "Allineamento dei valori della marca verso la meraviglia, l'aspirazione e l'emozione piuttosto che la velocità o i dati meccanici."
        },
        {
          title: "Storytelling",
          subtitle: "Arco Narrativo Emozionale",
          desc: "Strutturazione della sceneggiatura e della curva emotiva di ogni scena, tracciando un viaggio costiero dove la realtà inizia a dissolversi."
        },
        {
          title: "Sviluppo del Concetto",
          subtitle: "Linguaggio Visivo Atmosferico",
          desc: "Sviluppo di direzioni visive specifiche per le curve del veicolo, l'illuminazione atmosferica crepuscolare e le creature bioluminescenti."
        },
        {
          title: "Generazione di Immagini con IA",
          subtitle: "Sintesi di Fotogrammi Chiave",
          desc: "Sviluppo di prompt visivi altamente precisi e pianificati per sintetizzare ambienti specifici, garantendo la coerenza stilistica."
        },
        {
          title: "Generazione di Video con IA",
          subtitle: "Movimento Temporale e Flusso",
          desc: "Utilizzo di pipeline video a coerenza temporale per generare panoramiche fluide della telecamera e dinamiche dei riflessi dell'auto."
        },
        {
          title: "Selezione delle Inquadrature",
          subtitle: "Curatela Editoriale del Master Reel",
          desc: "Valutazione della perfetta coerenza visiva dei clip e selezione delle migliori sequenze per creare un racconto unificato."
        },
        {
          title: "Montaggio",
          subtitle: "Tagli Ritmici Atmosferici",
          desc: "Montaggio delle inquadrature selezionate su una timeline, calibrando il ritmo dei tagli su un tempo di lusso lento e impressionante."
        },
        {
          title: "Correzione del Colore",
          subtitle: "Firma Spettrale Cinematografica",
          desc: "Applicazione di calibrazioni cromatiche specifiche che enfatizzano i ciano notturni profondi, i viola crepuscolari e i blu elettrici."
        },
        {
          title: "Design del Suono",
          subtitle: "Acustica Spaziale e Sintesi",
          desc: "Superposizione di ronzii meccanici personalizzati, canti di balene subacquee eteree e una colonna sonora originale al sintetizzatore."
        },
        {
          title: "Masterizzazione Finale",
          subtitle: "Livrabile 4K HDR di Alta Fedeltà",
          desc: "Compilazione del video finale, scalando la risoluzione, riducendo i disturbi e ottimizzando il mixaggio audio spaziale."
        }
      ],
      services: [
        { title: "Direzione Creativa", desc: "Supervisione dello stile artistico complessivo, coerenza, tono del marchio e integrità della narrazione visiva." },
        { title: "Sviluppo del Marchio", desc: "Progettazione di identificatori visivi e strategie di denominazione per marchi concettuali di fascia alta." },
        { title: "Design di Concetto", desc: "Formulazione di design di prodotti futuristici, forme e ambienti a partire da prompt grezzi." },
        { title: "Storytelling", desc: "Scrittura di sceneggiature, suddivisione delle scene, archi emotivi e voci fuori campo contestuali." },
        { title: "Produzione IA", desc: "Ingegneria di prompt avanzata, orchestrazione dei fotogrammi e coordinamento dei modelli di IA." },
        { title: "Visualizzazione Automobilistica", desc: "Rendering di trame automobilistiche riflettenti ed eleganti, illuminazione e ombre ambientali." },
        { title: "Montaggio", desc: "Assemblaggio di inquadrature continue, regolazione delle transizioni tra le scene e definizione del ritmo dello spot." },
        { title: "Correzione del Colore", desc: "Bilanciamento dello spettro visivo con lussuosi toni viola crepuscolari e contrasto nitido." },
        { title: "Design del Suono", desc: "Sviluppo di tracce audio immersive, ronzii di bassi profondi e paesaggi sonori oceanici." },
        { title: "Supervisione Creativa", desc: "Supervisione di tutti i componenti del ciclo di post-produzione per un output master coeso." }
      ],
      galleryItems: [
        {
          title: "01 — VIAGGIO COSTIERO D'APERTURA",
          tag: "DETTAGLIO_05 // APERTURA",
          desc: "L'inquadratura aerea iniziale stabilisce l'atmosfera cinematografica del film. Un veicolo elettrico solitario viaggia lungo una strada costiera."
        },
        {
          title: "02 — INTERNO DEL CONDUCENTE",
          tag: "DETTAGLIO_04 // CABINA",
          desc: "Questa vista dell'abitacolo mette in risalto l'ambiente di guida di fascia alta, evidenziando il cruscotto futuristico e l'interfaccia HUD."
        },
        {
          title: "03 — SPETTACOLO DEI CETACEI",
          tag: "DETTAGLIO_02 // AMBIENTE",
          desc: "Il culmine emotivo della sequenza che mostra balene giganti emergere dall'oceano."
        },
        {
          title: "04 — CABINA DI GUIDA",
          tag: "DETTAGLIO_03 // CELESTE",
          desc: "L'abitacolo premium combina un design industriale minimale con un'interfaccia digitale intuitiva, enfatizzando la relazione uomo-macchina."
        },
        {
          title: "05 — VIAGGIO DI CHIUSURA",
          tag: "DETTAGLIO_01 // RIFLESSI",
          desc: "Il veicolo continua lungo la strada costiera dopo l'incontro, completando la narrazione con una tranquilla conclusione."
        }
      ]
    }
  };

  const d = localDict[language] || localDict.en;
  const pipelineStages = d.pipelineStages;
  const services = d.services;
  const galleryItems = d.galleryItems;

  const tools = [
    { name: "ChatGPT", role: "Scripting & Core Narrative Screenplay" },
    { name: "Google AI Studio", role: "Prompt Guidance & Refined Scene Structuring" },
    { name: "Generative AI Video", role: "Temporal Video Synthesis & Camera Control" },
    { name: "Professional Editing Pipeline", role: "Premiere/DaVinci Audio & Visual Crafting" },
    { name: "Cloudinary", role: "Asset Compression, Hosting & High-Speed Edge Loading" }
  ];

  const specs = csData.projectInfo;

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
            src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886338/vlcsnap-2026-07-01-03h06m44s102_gco2vo.png"
            alt={`${csData.client} ${csData.title}`}
            className="w-full h-full object-cover object-center opacity-55 brightness-75 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Deep Cinematic Overlay: Black background vignettes and rich purple/blue gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />
          
          {/* Ambient Purple and Blue Glow elements on background corners to reference the AXON brand */}
          <div className="absolute top-1/4 left-10 w-[45vw] h-[45vh] bg-indigo-500/10 rounded-full filter blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-[35vw] h-[35vh] bg-blue-500/10 rounded-full filter blur-[120px] pointer-events-none" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10 mt-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-studio-primary bg-blue-950/50 border border-blue-900/60 px-5 py-2 rounded-full inline-block backdrop-blur-md shadow-lg">
              {csData.category}
            </span>
            
            <h1 className="text-6xl md:text-9xl font-display font-light text-white tracking-tight leading-none uppercase pt-3">
              {csData.client}
            </h1>
            
            <div className="flex justify-center items-center gap-3">
              <span className="h-[1px] w-8 bg-purple-500/60"></span>
              <p className="text-base md:text-2xl text-purple-400 font-mono tracking-[0.4em] uppercase">
                {csData.title}
              </p>
              <span className="h-[1px] w-8 bg-blue-500/60"></span>
            </div>
          </motion.div>

          {/* Action Button Row */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <button
              onClick={() => {
                setIsPlayingVideo(true);
                const el = document.getElementById("embedded-video-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-9 py-4.5 border border-studio-primary bg-studio-primary text-black hover:bg-transparent hover:text-studio-primary font-mono text-[11px] uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer font-bold shadow-lg shadow-blue-500/20"
            >
              <Play size={14} fill="currentColor" />
              <span>{d.playVideo}</span>
            </button>
            <a
              href="#overview-section"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("overview-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-9 py-4.5 border border-zinc-800 text-zinc-300 hover:border-zinc-500 hover:text-white bg-transparent font-mono text-[11px] uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{d.explorePortfolio}</span>
              <ArrowRight size={12} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-500">
            {d.scrollIndicator}
          </span>
          <div className="w-[1px] h-12 bg-zinc-900/80 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section id="overview-section" className="py-32 md:py-48 bg-black relative border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left: Project Description */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-purple-500 uppercase block">
                  {d.introBrief}
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight">
                  {d.overview}
                </h2>
              </div>
              
              <div className="space-y-6 text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                <p>
                  {csData.subtitle}
                </p>
                <p>
                  {csData.challenge}
                </p>
                <p className="border-l border-purple-500 pl-5 text-white font-mono italic text-sm py-2 bg-purple-950/10 rounded-r-sm">
                  {csData.outcome}
                </p>
              </div>

              {/* CHALLENGE SUBSECTION */}
              <div className="pt-8 border-t border-zinc-900 space-y-4">
                <span className="text-xs font-mono tracking-widest text-blue-400 uppercase block">
                  {d.challengeLabel}
                </span>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                  {csData.challenge}
                </p>
              </div>

              {/* CREATIVE APPROACH SUBSECTION */}
              <div className="pt-8 border-t border-zinc-900 space-y-4">
                <span className="text-xs font-mono tracking-widest text-purple-400 uppercase block">
                  {d.approachLabel}
                </span>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                  {csData.strategy}
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                  {csData.creativeInsight}
                </p>
              </div>
            </div>

            {/* Right: Project Information Cards */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-sm space-y-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-blue-500/[0.02] pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-700" />
                
                <h3 className="text-xs font-mono text-studio-primary uppercase tracking-widest flex items-center space-x-2">
                  <Award size={12} />
                  <span>{d.projectSpecsTitle}</span>
                </h3>

                <div className="space-y-4 divide-y divide-zinc-900/60 pt-2">
                  {specs.map((item: any) => (
                    <div key={item.label} className="flex justify-between items-center text-xs pt-4 first:pt-0">
                      <span className="font-mono text-zinc-500 uppercase text-[9px] tracking-wider">{item.label}</span>
                      <span className="text-zinc-200 font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-purple-950/10 border border-purple-900/30 rounded-sm text-xs text-purple-300 font-mono leading-normal uppercase">
                  <span className="text-white block font-bold mb-1">{d.metadataLabel}</span>
                  {csData.category}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EMBEDDED VIDEO */}
      <section id="embedded-video-section" className="py-24 bg-black border-b border-zinc-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/[0.03] to-black pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-studio-primary uppercase block">
              {d.embeddedFilmPlayer}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.watchCommercial}
            </h2>
          </div>

          {/* Large cinematic player with rounded corners and subtle glow effects */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-purple-500/[0.08] group">
            {!isPlayingVideo ? (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10 bg-black/85 group-hover:bg-black/75 transition-colors duration-500"
                onClick={() => setIsPlayingVideo(true)}
              >
                {/* Large custom play icon with glow */}
                <div className="w-28 h-28 rounded-full border border-purple-500/30 bg-zinc-950/90 flex items-center justify-center text-studio-primary group-hover:scale-110 group-hover:border-studio-primary group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500 shadow-2xl">
                  <Play size={36} fill="currentColor" className="ml-2 text-studio-primary" />
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-studio-primary mt-8 group-hover:text-white transition-colors duration-300">
                  {d.activatePlayer}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 mt-2 uppercase tracking-widest">
                  {d.audioSpecs}
                </span>
              </div>
            ) : null}

            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/CAewwTDQ0Nk?autoplay=${isPlayingVideo ? 1 : 0}&modestbranding=1&rel=0`}
              title={`${csData.client} Commercial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION PROCESS (Timeline layout describing each production stage) */}
      <section className="py-32 md:py-48 bg-zinc-950 relative border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
                {d.pipelineStructure}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase mt-4 tracking-tight">
                {d.productionProcessTitle}
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                {d.processDescription}
              </p>
            </div>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-16">
            {pipelineStages.map((stage: any, idx: number) => {
              const isActive = activeStage === idx;
              return (
                <div 
                  id={`pipeline-stage-${idx}`}
                  key={idx}
                  onMouseEnter={() => setActiveStage(idx)}
                  className="relative pl-8 md:pl-16 group transition-all duration-300"
                >
                  {/* Timeline point */}
                  <div className={`absolute left-0 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full border bg-black transition-all duration-500 ${
                    isActive ? "border-studio-primary scale-150 shadow-[0_0_12px_rgba(59,130,246,0.6)]" : "border-zinc-700 group-hover:border-zinc-500"
                  }`} />

                  {/* Stage number label displayed on wide screens */}
                  <div className="absolute right-full mr-8 top-0 hidden md:block text-right">
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-purple-400 transition-colors">
                      STAGE // {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Stage description text */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-wider text-purple-400/80 uppercase block">
                      {stage.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display text-white font-light uppercase tracking-wide group-hover:text-studio-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 font-light max-w-3xl leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. GALLERY (Alternate layouts with visual rhythm, large margins, luxury presentation) */}
      <section className="py-32 md:py-48 bg-black relative border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-40">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs font-mono tracking-widest text-purple-500 uppercase block">
              {d.visualAssets}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight">
              {d.cinematicGallery}
            </h2>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              {d.editorialScaling}
            </p>
          </div>

          {/* Gallery Items structured dynamically to prevent a standard boring grid */}
          {galleryItems.map((item: any, idx: number) => {
            // Find full item with image in original array to keep Cloudinary link
            const origItem = [
              { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886338/vlcsnap-2026-07-01-03h06m44s102_gco2vo.png", layoutType: "full-width" },
              { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886346/vlcsnap-2026-07-01-03h07m55s360_cqglas.png", layoutType: "60-40-left" },
              { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886347/vlcsnap-2026-07-01-03h08m52s098_oiixym.png", layoutType: "60-40-right" },
              { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886342/vlcsnap-2026-07-01-03h07m09s382_qep6ni.png", layoutType: "large-small-right" },
              { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886347/vlcsnap-2026-07-01-03h10m21s382_pofmaa.png", layoutType: "large-small-left" }
            ][idx];

            if (origItem.layoutType === "full-width") {
              return (
                <div key={idx} className="space-y-6 pt-8">
                  <div className="relative w-full aspect-[21/9] md:h-[65vh] rounded-md overflow-hidden border border-zinc-900 bg-zinc-950 group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10" />
                    <img 
                      src={origItem.url} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 left-6 md:left-12 z-20 space-y-2 max-w-xl">
                      <span className="text-[10px] font-mono text-studio-primary uppercase tracking-widest bg-black/85 backdrop-blur-sm px-3 py-1.5 border border-zinc-800">
                        {item.tag}
                      </span>
                      <h3 className="text-xl md:text-3xl font-display font-light text-white uppercase tracking-wider pt-2">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed hidden sm:block">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            if (origItem.layoutType === "60-40-left") {
              const rightItem = galleryItems[2];
              const rightOrig = { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886347/vlcsnap-2026-07-01-03h08m52s098_oiixym.png" };
              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="relative aspect-video rounded-md overflow-hidden border border-zinc-900 bg-zinc-950 group shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                      <img 
                        src={origItem.url} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest bg-black/85 backdrop-blur-sm px-2.5 py-1 border border-zinc-800">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 pl-2">
                      <h4 className="text-lg font-display text-white uppercase tracking-wide">{item.title}</h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-lg">{item.desc}</p>
                    </div>
                  </div>

                  {rightItem && (
                    <div className="lg:col-span-5 space-y-4 flex flex-col justify-end">
                      <div className="relative aspect-[4/3] lg:aspect-square rounded-md overflow-hidden border border-zinc-900 bg-zinc-950 group shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                        <img 
                          src={rightOrig.url} 
                          alt={rightItem.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                          <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest bg-black/85 backdrop-blur-sm px-2.5 py-1 border border-zinc-800">
                            {rightItem.tag}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1 pl-2">
                        <h4 className="text-lg font-display text-white uppercase tracking-wide">{rightItem.title}</h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{rightItem.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (origItem.layoutType === "large-small-left") {
              const rightItem = galleryItems[3];
              const rightOrig = { url: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782886342/vlcsnap-2026-07-01-03h07m09s382_qep6ni.png" };
              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-8">
                  
                  {rightItem && (
                    <div className="lg:col-span-5 space-y-4 order-last lg:order-first flex flex-col justify-end">
                      <div className="relative aspect-[4/3] lg:aspect-square rounded-md overflow-hidden border border-zinc-900 bg-zinc-950 group shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                        <img 
                          src={rightOrig.url} 
                          alt={rightItem.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                          <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest bg-black/85 backdrop-blur-sm px-2.5 py-1 border border-zinc-800">
                            {rightItem.tag}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1 pl-2">
                        <h4 className="text-lg font-display text-white uppercase tracking-wide">{rightItem.title}</h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{rightItem.desc}</p>
                      </div>
                    </div>
                  )}

                  <div className="lg:col-span-7 space-y-4">
                    <div className="relative aspect-video rounded-md overflow-hidden border border-zinc-900 bg-zinc-950 group shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                      <img 
                        src={origItem.url} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest bg-black/85 backdrop-blur-sm px-2.5 py-1 border border-zinc-800">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 pl-2">
                      <h4 className="text-lg font-display text-white uppercase tracking-wide">{item.title}</h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-lg">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}

        </div>
      </section>

      {/* 6. SERVICES (Premium floating glass cards) */}
      <section className="py-32 bg-zinc-950 relative border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs font-mono tracking-widest text-purple-500 uppercase block">
              {d.agencyCapabilities}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.servicesDeployedTitle}
            </h2>
            <div className="w-12 h-[1px] bg-studio-primary mx-auto my-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service: any, i: number) => {
              return (
                <div 
                  id={`service-card-${i}`}
                  key={service.title}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="p-8 bg-zinc-900/40 border border-zinc-800/60 rounded-sm hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group backdrop-blur-md"
                >
                  {/* Subtle glass reflection & purple light sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/[0.015] via-transparent to-blue-500/[0.015] pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-studio-primary transition-colors">
                      SERVICE_CAP // {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-purple-500 transition-colors duration-300"></span>
                  </div>

                  <h3 className="text-lg font-display text-zinc-200 font-medium uppercase tracking-wide group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. TECHNOLOGIES (Tools displayed as modern chips with icons) */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs font-mono tracking-widest text-studio-primary uppercase block">
              {d.compilationUtilities}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-white uppercase tracking-tight">
              {d.toolsEmployedTitle}
            </h2>
            <div className="w-12 h-[1px] bg-purple-500/60 mx-auto my-4" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <div 
                key={tool.name}
                className="px-6 py-4 bg-zinc-950/90 border border-zinc-900 rounded-full hover:border-studio-primary/60 hover:bg-zinc-900/60 transition-all duration-300 flex items-center space-x-3.5 group cursor-default shadow-lg shadow-black/40"
              >
                <div className="w-8 h-8 rounded-full bg-blue-950/40 border border-blue-900/30 flex items-center justify-center text-studio-primary group-hover:text-white group-hover:border-studio-primary/50 transition-all duration-300">
                  {i === 0 ? <Laptop size={14} /> : 
                   i === 1 ? <Cpu size={14} /> : 
                   i === 2 ? <Workflow size={14} /> : 
                   i === 3 ? <Film size={14} /> : 
                   <Compass size={14} />}
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block uppercase text-[8px] tracking-widest">UTILITY // 0{i + 1}</span>
                  <span className="text-sm font-display text-zinc-200 font-medium tracking-wide group-hover:text-white transition-colors">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL RESULT (Large highlighted section summarizing project impact) */}
      <section className="py-32 md:py-48 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        {/* Glow effect matching AXON violet tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/[0.02] to-black pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="border border-zinc-900 bg-black/60 backdrop-blur-md p-10 md:p-20 rounded-md relative overflow-hidden space-y-10 shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-studio-primary via-purple-500 to-transparent" />
            
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-studio-primary uppercase block">
                {d.deliveredMetric}
              </span>
              <h2 className="text-3xl md:text-6xl font-display font-light text-white uppercase tracking-tight leading-tight">
                {d.perfectingCinematic}
              </h2>
            </div>

            <p className="text-base md:text-xl text-zinc-300 font-light leading-relaxed">
              {d.impactSummary || csData.outcome}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-zinc-900">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{d.prototypeSpeedLabel}</span>
                <span className="text-2xl md:text-4xl font-display font-light text-studio-primary">12 HOURS</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{d.masteredQualityLabel}</span>
                <span className="text-2xl md:text-4xl font-display font-light text-studio-primary">4K HDR</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{d.costSavingsLabel}</span>
                <span className="text-2xl md:text-4xl font-display font-light text-studio-primary">90%+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEXT PROJECT (Linking to the next Case Study) */}
      <section className="py-24 bg-black relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.015] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase block">
            {d.continueExploring}
          </span>

          <div className="max-w-xl mx-auto bg-zinc-950 border border-zinc-900 hover:border-studio-primary/40 p-10 rounded-md transition-all duration-300 space-y-6 shadow-2xl shadow-black/80 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-950 border border-purple-900 rounded-full text-[8px] font-mono uppercase text-purple-300 tracking-wider">
              {d.nextProjectTag}
            </div>

            <h3 className="text-xl md:text-3xl font-display font-light text-white uppercase tracking-wider pt-2">
              {d.nextProjectTitle}
            </h3>
            
            <p className="text-xs text-zinc-400 font-light max-w-md mx-auto leading-normal">
              {d.nextProjectDesc}
            </p>
            
            <button
              onClick={() => {
                onBack();
                // Trigger view of AXON Revolution from App state
                setTimeout(() => {
                  const element = document.getElementById("case-card-axon-revolution");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    element.click();
                  }
                }, 350);
              }}
              className="px-8 py-3.5 premium-interactive font-mono text-[10px] uppercase tracking-widest text-center rounded-sm inline-flex items-center space-x-2.5 cursor-pointer font-bold shadow-lg shadow-blue-500/10"
            >
              <span>{d.viewNextProjectBtn}</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
