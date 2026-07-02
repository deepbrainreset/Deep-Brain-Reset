import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Calendar, 
  Briefcase, 
  Layers, 
  Tv,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Shield,
  Music,
  CheckCircle,
  Eye
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getLocalizedCaseStudies } from "../portfolioTranslations";

interface AxonCaseStudyProps {
  onBack: () => void;
  onNextProject?: () => void;
}

const localDict: Record<string, any> = {
  en: {
    returnToStudio: "Return to Studio",
    watchFilm: "Watch Film",
    youtubeChannel: "YouTube Channel",
    scrollIndicator: "SCROLL TO DECRYPT",
    highFidelityFeed: "ACTIVATE HIGH-FIDELITY FEED (1:51)",
    stereoMix: "Cinematic AI Master // Stereo Mix",
    introBrief: "01 // INTRODUCTORY BRIEF",
    overview: "Overview.",
    narrativeImage01: "NARRATIVE_IMAGE_01 // THE_REVOLUTION",
    narrativeImage02: "NARRATIVE_IMAGE_02 // FEMALE_PROTAGONIST",
    narrativeImage03: "NARRATIVE_IMAGE_03 // PROTAGONIST_FACING_CITY",
    narrativeImage04: "NARRATIVE_IMAGE_04 // PROTAGONISTS_CROSSING",
    narrativeImage05: "NARRATIVE_IMAGE_05 // ALLEYWAY_MOTION_CHASE",
    frictionalBarrier: "02 // THE FRICTIONAL BARRIER",
    challenge: "The Challenge.",
    criticalCatalyst: "03 // CRITICAL CATALYST",
    creativeInsightLabel: "Creative Insight.",
    productionMethodology: "04 // PRODUCTION METHODOLOGY",
    productionPipeline: "Production Pipeline.",
    pipelineDescription: "Our proprietary full-stack pipeline coordinates visual asset development, seed retention frameworks, narrative flow charts, and custom AI acoustic mastering. Expand each stage to inspect the technical delivery.",
    pipelineAnchor: "PIPELINE ANCHOR",
    pipelineAnchorText: "This scene exemplifies strict environment alignment, securing uniform light-diffusion mapping despite asynchronous shot generation.",
    toolchainConfiguration: "05 // TOOLCHAIN CONFIGURATION",
    technology: "Technology.",
    capabilitiesDemonstratedBadge: "06 // CAPABILITIES DEMONSTRATED",
    capabilitiesDemonstrated: "Capabilities Demonstrated.",
    projectSpecifications: "Project Specifications",
    systemsDeployed: "Systems Deployed",
    productionPhilosophy: "07 // PRODUCTION PHILOSOPHY",
    philosophyTitle: "Technology Generates Images.",
    philosophySubtitle: "Creative Direction Creates Meaning.",
    philosophyBody: "Artificial Intelligence accelerated production; human creative direction defined every single artistic decision. Deep Brain Reset combines strategy, storytelling, and high-fidelity engineering into a unified production pipeline capable of creating premium cinematic experiences in fractions of conventional agency timeframes.",
    continueExploring: "CONTINUE EXPLORING",
    exploreMoreProjects: "Explore More Projects",
    exploreMoreDesc: "Return to our project showcase to inspect other premium productions.",
    nextCaseStudy: "Next Case Study",
    pipelineStages: [
      {
        step: "01",
        title: "Concept Development",
        desc: "The narrative framework, dystopian symbolism, and emotional trajectory are calculated before generating a single pixel. We define the thematic core of individuality vs. absolute compliance."
      },
      {
        step: "02",
        title: "Creative Strategy",
        desc: "Aligning creative direction with practical brand metrics. Establishing how high-end avant-garde fashion functions as a medium of communication rather than a commercial product."
      },
      {
        step: "03",
        title: "Character Sheets",
        desc: "Constructing persistent visual character sheets for principal and secondary models. This process secures visual facial structure and wardrobe uniformity across different scenes."
      },
      {
        step: "04",
        title: "Environment Design",
        desc: "Architectural pre-visualization of the dark dystopian city. Developing multi-angle spatial logic to ensure background consistency, scale accuracy, and spatial depth."
      },
      {
        step: "05",
        title: "Storyboard",
        desc: "Drafting shot-by-shot composition sheets. Outlining camera movements (pans, crane-shots, slow-motion tracks), focal lengths, and editorial transition markers."
      },
      {
        step: "06",
        title: "AI Production",
        desc: "Running high-fidelity image-to-video generative generation. Employing proprietary seed-retention and model-prompt controls to output hyper-realistic cinematic camera motions."
      },
      {
        step: "07",
        title: "Original AI Soundtrack",
        desc: "Syncing final film edits with custom generative music workflows. A custom score is orchestrated specifically around the pace, atmospheric breathing, and crescendos of the narrative."
      },
      {
        step: "08",
        title: "Editing",
        desc: "Compiling raw film passes, color correction curves, ambient SFX triggers, and AI music stems within a high-performance timeline to perfect the commercial's rhythm."
      },
      {
        step: "09",
        title: "4K Mastering",
        desc: "Upscaling and temporal smoothing to export the final file at 4K resolution, optimizing frame sharpness, light blooms, and grain dynamics for premium presentation screens."
      }
    ]
  },
  es: {
    returnToStudio: "Volver al Estudio",
    watchFilm: "Ver Película",
    youtubeChannel: "Canal de YouTube",
    scrollIndicator: "DESPLAZAR PARA DESCIFRAR",
    highFidelityFeed: "ACTIVAR TRANSMISIÓN DE ALTA FIDELIDAD (1:51)",
    stereoMix: "Master de IA Cinematográfica // Mezcla Estéreo",
    introBrief: "01 // SINOPSIS DE INTRODUCCIÓN",
    overview: "Visión General.",
    narrativeImage01: "IMAGEN_NARRATIVA_01 // LA_REVOLUCIÓN",
    narrativeImage02: "IMAGEN_NARRATIVA_02 // PROTAGONISTA_FEMENINA",
    narrativeImage03: "IMAGEN_NARRATIVA_03 // PROTAGONISTA_FRENTE_A_LA_CIUDAD",
    narrativeImage04: "IMAGEN_NARRATIVA_04 // PROTAGONISTAS_CRUZANDO",
    narrativeImage05: "IMAGEN_NARRATIVA_05 // PERSECUCIÓN_EN_EL_CALLEJÓN",
    frictionalBarrier: "02 // LA BARRERA DE FRICCIÓN",
    challenge: "El Desafío.",
    criticalCatalyst: "03 // CATALIZADOR CRÍTICO",
    creativeInsightLabel: "Perspectiva Creativa.",
    productionMethodology: "04 // METODOLOGÍA DE PRODUCCIÓN",
    productionPipeline: "Flujo de Producción.",
    pipelineDescription: "Nuestro pipeline patentado coordina el desarrollo de activos visuales, marcos de retención de semillas, diagramas de flujo narrativo y masterización acústica de IA personalizada. Expanda cada etapa para inspeccionar la entrega técnica.",
    pipelineAnchor: "ANCLAJE DE CANALIZACIÓN",
    pipelineAnchorText: "Esta escena ejemplifica una alineación estricta del entorno, asegurando un mapeo uniforme de la difusión de la luz a pesar de la generación de tomas asíncronas.",
    toolchainConfiguration: "05 // CONFIGURACIÓN DE HERRAMIENTAS",
    technology: "Tecnología.",
    capabilitiesDemonstratedBadge: "06 // CAPACIDADES DEMOSTRADAS",
    capabilitiesDemonstrated: "Capacidades Demostradas.",
    projectSpecifications: "Especificaciones del Proyecto",
    systemsDeployed: "Sistemas Desplegados",
    productionPhilosophy: "07 // FILOSOFÍA DE PRODUCCIÓN",
    philosophyTitle: "La Tecnología Genera Imágenes.",
    philosophySubtitle: "La Dirección Creativa Crea Significado.",
    philosophyBody: "La Inteligencia Artificial aceleró la producción; la dirección creativa humana definió cada decisión artística. Deep Brain Reset combina estrategia, narración e ingeniería de alta fidelidad en un pipeline de producción único capaz de crear experiencias cinematográficas de alta gama en fracciones de los tiempos de las agencias convencionales.",
    continueExploring: "CONTINUAR EXPLORANDO",
    exploreMoreProjects: "Explorar Más Proyectos",
    exploreMoreDesc: "Regrese a nuestra muestra de proyectos para inspeccionar otras producciones premium.",
    nextCaseStudy: "Siguiente Proyecto",
    pipelineStages: [
      {
        step: "01",
        title: "Desarrollo de Concepto",
        desc: "El marco narrativo, el simbolismo distópico y la trayectoria emocional se calculan antes de generar un solo píxel. Definimos el núcleo temático de la individualidad frente al cumplimiento absoluto."
      },
      {
        step: "02",
        title: "Estrategia Creativa",
        desc: "Alineación de la dirección creativa con las métricas prácticas de la marca. Establecemos cómo la moda de vanguardia de alta gama funciona como un medio de comunicación en lugar de un producto comercial."
      },
      {
        step: "03",
        title: "Hojas de Personaje",
        desc: "Construcción de hojas de personaje visuales persistentes para modelos principales y secundarios. Este proceso asegura la estructura facial visual y la uniformidad del vestuario en diferentes escenas."
      },
      {
        step: "04",
        title: "Diseño de Entornos",
        desc: "Previsualización arquitectónica de la oscura ciudad distópica. Desarrollamos lógica espacial multi-ángulo para garantizar la consistencia del fondo, la precisión de la escala y la profundidad espacial."
      },
      {
        step: "05",
        title: "Guión Gráfico",
        desc: "Redacción de hojas de composición toma por toma. Delimitamos movimientos de cámara (paneos, tomas de grúa, seguimientos en cámara lenta), longitudes focales y marcadores de transición editorial."
      },
      {
        step: "06",
        title: "Producción de IA",
        desc: "Ejecución de generación generativa de imagen a video de alta fidelidad. Empleamos controles de semilla de personaje y prompts de modelo para producir movimientos de cámara cinematográficos hiperrealistas."
      },
      {
        step: "07",
        title: "Banda Sonora de IA Original",
        desc: "Sincronización de las ediciones finales de la película con flujos de trabajo de música generativa personalizados. Se orquesta una partitura específica en torno al ritmo, respiración atmosférica y crescendos de la narrativa."
      },
      {
        step: "08",
        title: "Edición",
        desc: "Compilación de pases de video brutos, curvas de corrección de color, disparadores de efectos de sonido ambientales y pistas de música de IA dentro de una línea de tiempo de alto rendimiento para perfeccionar el ritmo del comercial."
      },
      {
        step: "09",
        title: "Masterización 4K",
        desc: "Escalado y suavizado temporal para exportar el archivo final en resolución 4K, optimizando la nitidez de los fotogramas, los destellos de luz y la dinámica del grano para pantallas de presentación premium."
      }
    ]
  },
  de: {
    returnToStudio: "Zurück zum Studio",
    watchFilm: "Film ansehen",
    youtubeChannel: "YouTube-Kanal",
    scrollIndicator: "SCROLLEN ZUM ENTSCHLÜSSELN",
    highFidelityFeed: "HOCHAUFLÖSENDEN STREAM AKTIVIEREN (1:51)",
    stereoMix: "Cinematic AI Master // Stereo-Mix",
    introBrief: "01 // EINFÜHRENDES BRIEFING",
    overview: "Übersicht.",
    narrativeImage01: "NARRATIVE_IMAGE_01 // DIE_REVOLUTION",
    narrativeImage02: "NARRATIVE_IMAGE_02 // FEMALE_PROTAGONIST",
    narrativeImage03: "NARRATIVE_IMAGE_03 // PROTAGONIST_FACING_CITY",
    narrativeImage04: "NARRATIVE_IMAGE_04 // PROTAGONISTS_CROSSING",
    narrativeImage05: "NARRATIVE_IMAGE_05 // ALLEYWAY_MOTION_CHASE",
    frictionalBarrier: "02 // DIE HERAUSFORDERUNG",
    challenge: "Die Herausforderung.",
    criticalCatalyst: "03 // KRITISCHER KATALYSATOR",
    creativeInsightLabel: "Kreative Einsicht.",
    productionMethodology: "04 // PRODUKTIONSMETHODIK",
    productionPipeline: "Produktions-Pipeline.",
    pipelineDescription: "Unsere proprietäre Full-Stack-Pipeline koordiniert visuelle Asset-Entwicklung, Seed-Retention-Frameworks, narrative Flussdiagramme und maßgeschneidertes KI-Akustik-Mastering. Erweitern Sie jede Stufe, um die technische Lieferung zu prüfen.",
    pipelineAnchor: "PIPELINE-ANKER",
    pipelineAnchorText: "Diese Szene veranschaulicht eine strikte Umgebungsausrichtung und sorgt trotz asynchroner Framegenerierung für eine gleichmäßige Lichtdiffusionskarte.",
    toolchainConfiguration: "05 // WERKZEUGKONFIGURATION",
    technology: "Technologie.",
    capabilitiesDemonstratedBadge: "06 // DEMONSTRIERTE FÄHIGKEITEN",
    capabilitiesDemonstrated: "Demonstrierte Fähigkeiten.",
    projectSpecifications: "Projektspezifikationen",
    systemsDeployed: "Eingesetzte Systeme",
    productionPhilosophy: "07 // PRODUKTIONSPHILOSOPHIE",
    philosophyTitle: "Technologie erzeugt Bilder.",
    philosophySubtitle: "Kreativdirektion schafft Bedeutung.",
    philosophyBody: "Künstliche Intelligenz beschleunigte die Produktion; die menschliche Kreativdirektion definierte jede einzelne künstlerische Entscheidung. Deep Brain Reset vereint Strategie, Storytelling und High-End-Engineering in einer einheitlichen Produktionspipeline, die in der Lage ist, erstklassige kinoreife Erlebnisse in einem Bruchteil herkömmlicher Agenturzeiträume zu schaffen.",
    continueExploring: "WEITER ERKUNDEN",
    exploreMoreProjects: "Weitere Projekte erkunden",
    exploreMoreDesc: "Kehren Sie zu unserer Projektauswahl zurück, um andere Premium-Produktionen zu sehen.",
    nextCaseStudy: "Nächstes Projekt",
    pipelineStages: [
      {
        step: "01",
        title: "Konzeptentwicklung",
        desc: "Der narrative Rahmen, die dystopische Symbolik und die emotionale Flugbahn werden berechnet, bevor ein einzelnes Pixel generiert wird. Wir definieren den thematischen Kern von Individualität vs. absolutem Gehorsam."
      },
      {
        step: "02",
        title: "Kreativstrategie",
        desc: "Abstimmung der kreativen Ausrichtung auf praktische Markenmetriken. Etablierung, wie avantgardistische High-End-Mode eher als Kommunikationsmedium denn als kommerzielles Produkt fungiert."
      },
      {
        step: "03",
        title: "Charakterblätter",
        desc: "Erstellung konsistenter visueller Charakterblätter für Haupt- und Nebenmodelle. Dieser Prozess sichert die visuelle Gesichtsstruktur und die Einheitlichkeit der Garderobe über verschiedene Szenen hinweg."
      },
      {
        step: "04",
        title: "Umgebungsdesign",
        desc: "Architektonische Vorvisualisierung der dunklen, dystopischen Stadt. Entwicklung einer multi-perspektivischen räumlichen Logik, um Hintergrundkonsistenz, Skalierungsgenauigkeit und räumliche Tiefe zu gewährleisten."
      },
      {
        step: "05",
        title: "Storyboard",
        desc: "Entwurf von shot-by-shot Kompositionsblättern. Skizzierung von Kamerabewegungen (Schwenks, Kranfahrten, Zeitlupenaufnahmen), Brennweiten und redaktionellen Übergangsmarkern."
      },
      {
        step: "06",
        title: "KI-Produktion",
        desc: "Ausführung von hochauflösender Bild-zu-Video-Generierung. Einsatz proprietärer Seed-Retention- und Modell-Prompt-Steuerungen zur Ausgabe hyperrealistischer, kinoreifer Kamerabewegungen."
      },
      {
        step: "07",
        title: "Original KI-Soundtrack",
        desc: "Synchronisation der finalen Filmschnitte mit maßgeschneiderten generativen Musik-Workflows. Ein eigener Soundtrack wird speziell auf das Tempo, die atmosphärische Atmung und die Crescendos der Erzählung abgestimmt."
      },
      {
        step: "08",
        title: "Schnitt",
        desc: "Zusammenstellung von Rohfilm-Pässen, Farbkorrekturkurven, atmosphärischen SFX-Triggern und KI-Musikspuren auf einer hochleistungsfähigen Timeline, um den Rhythmus des Werbespots zu perfektionieren."
      },
      {
        step: "09",
        title: "4K-Mastering",
        desc: "Upscaling und zeitliche Glättung für den Export der finalen Datei in 4K-Auflösung, Optimierung von Bildschärfe, Lichteffekten und Korn-Dynamik für erstklassige Präsentationsbildschirme."
      }
    ]
  },
  fr: {
    returnToStudio: "Retour au Studio",
    watchFilm: "Regarder le Film",
    youtubeChannel: "Chaîne YouTube",
    scrollIndicator: "FAIRE DÉFILER POUR DÉCRYPTÉ",
    highFidelityFeed: "ACTIVER LE FLUX HAUTE FIDÉLITÉ (1:51)",
    stereoMix: "Master IA Cinématographique // Mixage Stéréo",
    introBrief: "01 // COMPTE-RENDU INTRODUCTIF",
    overview: "Vue d'ensemble.",
    narrativeImage01: "IMAGE_NARRATIVE_01 // LA_RÉVOLUTION",
    narrativeImage02: "IMAGE_NARRATIVE_02 // PROTAGONISTE_FÉMININE",
    narrativeImage03: "IMAGE_NARRATIVE_03 // PROTAGONISTE_FACE_A_LA_VILLE",
    narrativeImage04: "IMAGE_NARRATIVE_04 // TRAVERSÉE_DES_PROTAGONISTES",
    narrativeImage05: "IMAGE_NARRATIVE_05 // POURSUITE_DANS_L_ALLEYWAY",
    frictionalBarrier: "02 // LE DÉFI",
    challenge: "Le Défi.",
    criticalCatalyst: "03 // CATALYSEUR CRITIQUE",
    creativeInsightLabel: "Vision Créative.",
    productionMethodology: "04 // MÉTHODOLOGIE DE PRODUCTION",
    productionPipeline: "Pipeline de Production.",
    pipelineDescription: "Notre pipeline propriétaire gère le développement d'actifs visuels, la rétention de graines de personnages, des storyboards narratifs et un mastering acoustique IA personnalisé. Développez chaque étape pour en vérifier la livraison technique.",
    pipelineAnchor: "ANCRE DE PIPELINE",
    pipelineAnchorText: "Cette scène illustre un alignement environnemental strict, garantissant une diffusion uniforme de la lumière malgré des rendus asynchrones.",
    toolchainConfiguration: "05 // CONFIGURATION DES OUTILS",
    technology: "Technologie.",
    capabilitiesDemonstratedBadge: "06 // COMPÉTENCES DÉMONTRÉES",
    capabilitiesDemonstrated: "Compétences Démontrées.",
    projectSpecifications: "Spécifications du Projet",
    systemsDeployed: "Systèmes Déployés",
    productionPhilosophy: "07 // PHILOSOPHIE DE PRODUCTION",
    philosophyTitle: "La Technologie Génère des Images.",
    philosophySubtitle: "La Direction Artistique Crée du Sens.",
    philosophyBody: "L'Intelligence Artificielle a accéléré la production; la direction artistique humaine a défini chaque décision artistique. Deep Brain Reset combine stratégie, narration et ingénierie de pointe dans un pipeline de production unifié capable de créer des expériences cinématographiques haut de gamme en un temps record par rapport aux agences traditionnelles.",
    continueExploring: "CONTINUER L'EXPLORATION",
    exploreMoreProjects: "Explorer d'autres projets",
    exploreMoreDesc: "Retournez à notre portfolio pour découvrir nos autres créations haut de gamme.",
    nextCaseStudy: "Projet Suivant",
    pipelineStages: [
      {
        step: "01",
        title: "Développement du Concept",
        desc: "Le cadre narratif, le symbolisme dystopique et la trajectoire émotionnelle sont calculés avant de générer le moindre pixel. Nous définissons le noyau thématique de l'individualité contre la conformité absolue."
      },
      {
        step: "02",
        title: "Stratégie Créative",
        desc: "Aligner la direction artistique avec les indicateurs de marque réels. Établir comment la mode avant-gardiste haut de gamme fonctionne comme un média de communication plutôt que comme un produit commercial."
      },
      {
        step: "03",
        title: "Fiches de Personnage",
        desc: "Construction de fiches de personnages visuelles persistantes pour les modèles principaux et secondaires. Ce processus garantit la structure faciale visuelle et l'uniformité de la garde-robe à travers les scènes."
      },
      {
        step: "04",
        title: "Design d'Environnement",
        desc: "Prévisualisation architecturale de la ville dystopique sombre. Développement d'une logique spatiale multi-angle pour assurer la cohérence de l'arrière-plan, la précision de l'échelle et la profondeur spatiale."
      },
      {
        step: "05",
        title: "Storyboard",
        desc: "Réduction de fiches de composition plan par plan. Définition des mouvements de caméra (panoramiques, plans de grue, travellings au ralenti), des focales et des marqueurs de transition éditoriale."
      },
      {
        step: "06",
        title: "Production d'IA",
        desc: "Exécution de la génération générative d'images en vidéos haute fidélité. Utilisation de contrôles exclusifs de rétention de graines de personnages et de prompts de modèles pour produire des mouvements de caméra cinématiques hyperréalistes."
      },
      {
        step: "07",
        title: "Bande-son IA Originale",
        desc: "Synchronisation des montages de film finaux avec des flux de travail de musique générative personnalisés. Une partition sur mesure est orchestrée spécifiquement autour du rythme, de la respiration atmosphérique et des crescendos du récit."
      },
      {
        step: "08",
        title: "Montage",
        desc: "Compilation des séquences brutes, des courbes de correction des couleurs, des déclencheurs SFX ambiants et des stems musicaux IA au sein d'une timeline haute performance pour parfaire le rythme de la publicité."
      },
      {
        step: "09",
        title: "Mastering 4K",
        desc: "Mise à l'échelle et lissage temporel pour exporter le fichier final en résolution 4K, optimisant la neteté des images, les halos de lumière et la dynamique du grain pour des écrans de présentation haut de gamme."
      }
    ]
  },
  it: {
    returnToStudio: "Ritorna allo Studio",
    watchFilm: "Guarda il Film",
    youtubeChannel: "Canale YouTube",
    scrollIndicator: "SCORRI PER DECRIPTRE",
    highFidelityFeed: "ATTIVA FEED AD ALTA FEDELTÀ (1:51)",
    stereoMix: "Master IA Cinematografico // Mix Stereo",
    introBrief: "01 // COSTRUTTO INTRODUTTIVO",
    overview: "Panoramica.",
    narrativeImage01: "IMAGEN_NARRATIVA_01 // LA_RIVOLUZIONE",
    narrativeImage02: "IMAGEN_NARRATIVA_02 // PROTAGONISTA_FEMMINILE",
    narrativeImage03: "IMAGEN_NARRATIVA_03 // PROTAGONISTA_DI_FRONTE_ALLA_CITTA",
    narrativeImage04: "IMAGEN_NARRATIVA_04 // INCROCIO_DEI_PROTAGONISTI",
    narrativeImage05: "IMAGEN_NARRATIVA_05 // INSEGUIMENTO_NEL_VICOLO",
    frictionalBarrier: "02 // LA SFIDA",
    challenge: "La Sfida.",
    criticalCatalyst: "03 // CATALIZZATORE CRITICO",
    creativeInsightLabel: "Intuizione Creativa.",
    productionMethodology: "04 // METODOLOGIA DI PRODUZIONE",
    productionPipeline: "Pipeline di Produzione.",
    pipelineDescription: "La nostra pipeline proprietaria gestisce lo sviluppo di risorse visive, la fidelizzazione dei seed del personaggio, gli storyboard narrativi e un mastering acustico IA personalizzato. Espandi ogni fase per verificarne la consegna tecnica.",
    pipelineAnchor: "ANCORAGGIO PIPELINE",
    pipelineAnchorText: "Questa scena illustra un allineamento ambientale rigoroso, garantendo una diffusione uniforme della luce nonostante i rendering asincroni.",
    toolchainConfiguration: "05 // CONFIGURAZIONE DEGLI STRUMENTI",
    technology: "Tecnologia.",
    capabilitiesDemonstratedBadge: "06 // CAPACITÀ DIMOSTRATE",
    capabilitiesDemonstrated: "Capacità Dimostrate.",
    projectSpecifications: "Specifiche del Progetto",
    systemsDeployed: "Sistemi Schierati",
    productionPhilosophy: "07 // FILOSOFIA DI PRODUZIONE",
    philosophyTitle: "La Tecnologia Genera Immagini.",
    philosophySubtitle: "La Direzione Creativa Crea Significato.",
    philosophyBody: "L'Intelligenza Artificiale ha accelerato la produzione; la direzione creativa umana ha definito ogni singola decisione artistica. Deep Brain Reset unisce strategia, narrazione e ingegneria di alto livello in una pipeline di produzione integrata in grado di realizzare esperienze cinematografiche esclusive in tempi notevolmente ridotti rispetto alle agenzie convenzionali.",
    continueExploring: "CONTINUA A ESPLORARE",
    exploreMoreProjects: "Esplora Altri Progetti",
    exploreMoreDesc: "Ritorna alla nostra galleria di progetti per esaminare altre produzioni di alto livello.",
    nextCaseStudy: "Progetto Successivo",
    pipelineStages: [
      {
        step: "01",
        title: "Sviluppo del Concept",
        desc: "Il framework narrativo, il simbolismo distopico e la traiettoria emozionale vengono calcolati prima di generare un singolo pixel. Definiamo il nucleo temático di individualità vs. conformità assoluta."
      },
      {
        step: "02",
        title: "Strategia Creativa",
        desc: "Allineamento della direzione creativa con le metriche pratiche del brand. Stabilire come la moda d'avanguardia di fascia alta funzioni come mezzo di comunicazione anziché come prodotto commerciale."
      },
      {
        step: "03",
        title: "Schede Personaggi",
        desc: "Costruzione di schede visive persistenti per modelli principali e secondari. Questo processo assicura la struttura facciale visiva e l'uniformità del guardaroba nelle diverse scene."
      },
      {
        step: "04",
        title: "Design dell'Ambiente",
        desc: "Pre-visualizzazione architettonica della città distopica oscura. Sviluppo di logica spaziale multi-angolo per garantire la coerenza dello sfondo, la precisione della scala e la profondità spaziale."
      },
      {
        step: "05",
        title: "Storyboard",
        desc: "Stesura di schede di composizione inquadratura per inquadratura. Tracciamento dei movimenti della telecamera (panoramiche, riprese con gru, carrellate in slow-motion), lunghezze focali e marcatori di transizione editoriale."
      },
      {
        step: "06",
        title: "Produzione IA",
        desc: "Esecuzione della generazione generativa di immagini in video ad alta fedeltà. Utilizzo di controlli proprietari di ritenzione dei seed e di prompt dei modelli per produrre movimenti di camera cinematografici iperrealistici."
      },
      {
        step: "07",
        title: "Colonna Sonora IA Originale",
        desc: "Sincronizzazione dei montaggi finali del film con flujos di lavoro di musica generativa personalizzati. Una partitura su misura viene orchestrata specificamente attorno al ritmo, alla respirazione atmosferica e ai crescendo della narrazione."
      },
      {
        step: "08",
        title: "Montaggio",
        desc: "Compilazione di riprese grezze, curve di correzione del colore, trigger SFX ambientali e stem musicali IA all'interno di una timeline ad alte prestazioni per perfeccionar il ritmo dello spot."
      },
      {
        step: "09",
        title: "Mastering 4K",
        desc: "Upscaling e smoothing temporale per esportare il file finale in risoluzione 4K, ottimizzando la nitidezza dei fotogramme, i bagliori di luce e la dinamica della grana per schermi di presentazione premium."
      }
    ]
  }
};

export default function AxonCaseStudy({ onBack, onNextProject }: AxonCaseStudyProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState<number | null>(null);

  const { language } = useLanguage();
  const caseStudies = getLocalizedCaseStudies(language);
  const csData = caseStudies.find(c => c.id === "axon-revolution") || caseStudies[0];

  const d = localDict[language] || localDict.en;
  const pipelineStages = d.pipelineStages;
  const technologies = csData.technologyUsed || [];
  const projectSpecs = csData.projectInfo || [];
  const coreDemonstrations = csData.demonstrates || [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-studio-bg text-studio-secondary relative z-50 selection:bg-studio-primary selection:text-studio-bg overflow-x-hidden font-sans"
    >
      {/* Floating Close/Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 premium-interactive text-[10px] font-mono uppercase tracking-widest rounded-sm cursor-pointer shadow-lg shadow-black/20"
        >
          <ArrowLeft size={12} />
          <span>{d.returnToStudio}</span>
        </button>
      </div>

      {/* FULL WIDTH HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-studio-border">
        {/* Background Parallax Cinematic Image */}
        <div className="absolute inset-0 z-0 scale-105 select-none">
          <img 
            src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png"
            alt={`${csData.client} Hero`}
            className="w-full h-full object-cover object-center opacity-40 brightness-75 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Vignette & Gradients Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-studio-bg/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-studio-bg/80 via-transparent to-studio-bg/80" />
          <div className="absolute inset-0 bg-grid-overlay opacity-15" />
        </div>

        {/* Hero Meta Information Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 mt-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="space-y-3"
          >
            <span className="text-xs font-mono tracking-widest text-studio-primary/70 uppercase bg-studio-panel/80 border border-studio-border px-3.5 py-1.5 rounded-full inline-block">
              {csData.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-light text-studio-primary tracking-tight leading-none uppercase pt-2">
              {csData.client}
            </h1>
            <p className="text-sm md:text-lg text-studio-secondary font-light tracking-wide max-w-xl mx-auto uppercase">
              {csData.title}
            </p>
          </motion.div>

          {/* Core Labels Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pt-2 text-[10px] font-mono text-studio-caption uppercase tracking-wider"
          >
            {coreDemonstrations.slice(0, 4).map((badge: string, idx: number) => (
              <span key={idx} className="flex items-center gap-1.5 border border-studio-border/50 px-3 py-1 rounded-sm bg-studio-panel/50">
                <span className="w-1.5 h-1.5 bg-studio-primary rounded-full"></span>
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Play CTA Triggers */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <button
              onClick={() => {
                setIsPlayingVideo(true);
                const el = document.getElementById("axon-video-player");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 border border-studio-primary bg-studio-primary text-studio-bg hover:bg-transparent hover:text-studio-primary font-mono text-xs uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer font-semibold"
            >
              <Play size={13} fill="currentColor" />
              <span>{d.watchFilm}</span>
            </button>
            <a
              href="https://youtu.be/t8jb_QmENy4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-studio-border text-studio-primary hover:border-studio-caption hover:text-studio-caption bg-transparent font-mono text-xs uppercase tracking-widest text-center rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{d.youtubeChannel}</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator overlay */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
          <span className="text-[9px] font-mono tracking-widest uppercase text-studio-muted">
            {d.scrollIndicator}
          </span>
          <div className="w-[1px] h-10 bg-studio-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-studio-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* EMBEDDED VIDEO PLAYBACK AREA */}
      <section id="axon-video-player" className="py-20 bg-studio-bg border-b border-studio-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-studio-border bg-studio-panel group">
            {!isPlayingVideo ? (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"
                onClick={() => setIsPlayingVideo(true)}
              >
                <div className="w-20 h-20 rounded-full border border-studio-primary/25 bg-studio-bg/80 flex items-center justify-center text-studio-primary group-hover:scale-110 group-hover:border-studio-primary transition-all duration-500 shadow-xl shadow-black/50">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-studio-primary mt-6 tracking-[0.25em] group-hover:text-studio-primary transition-colors">
                  {d.highFidelityFeed}
                </span>
                <span className="text-[10px] font-mono text-studio-muted mt-2 uppercase">
                  {d.stereoMix}
                </span>
              </div>
            ) : null}

            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/t8jb_QmENy4?autoplay=${isPlayingVideo ? 1 : 0}&modestbranding=1&rel=0`}
              title={`${csData.client} Fashion Film`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION with Narrative Image 1 */}
      <section className="py-32 md:py-48 bg-studio-bg relative border-b border-studio-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative Text */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-studio-caption block">
                  {d.introBrief}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight">
                  {d.overview}
                </h2>
              </div>
              
              <div className="space-y-6 text-sm md:text-base text-studio-secondary font-light leading-relaxed">
                <p>
                  {csData.subtitle}
                </p>
                <p>
                  {csData.challenge}
                </p>
                <p className="border-l border-studio-muted pl-4 text-studio-primary">
                  {csData.strategy}
                </p>
              </div>
            </div>

            {/* Right Narrative Image 1 - The revolution */}
            <div className="lg:col-span-6">
              <div className="relative aspect-3/2 rounded-sm overflow-hidden border border-studio-border bg-studio-panel group">
                <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent opacity-40 z-10" />
                <img 
                  src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884828/vlcsnap-2026-07-01-02h41m03s255_xziqmg.png" 
                  alt={`${csData.client} - Narrative Image 1`}
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-studio-caption uppercase tracking-widest bg-studio-bg/80 backdrop-blur-sm px-2 py-1 border border-studio-border/40">
                  {d.narrativeImage01}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION with Narrative Image 2 */}
      <section className="py-32 md:py-48 bg-studio-panel relative border-b border-studio-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative Image 2 - Character Design */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="relative aspect-3/2 rounded-sm overflow-hidden border border-studio-border bg-studio-bg group">
                <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent opacity-40 z-10" />
                <img 
                  src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884828/vlcsnap-2026-07-01-02h42m26s891_u5p6zj.png" 
                  alt={`${csData.client} - Narrative Image 2`}
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-studio-caption uppercase tracking-widest bg-studio-bg/80 backdrop-blur-sm px-2 py-1 border border-studio-border/40">
                  {d.narrativeImage02}
                </div>
              </div>
            </div>

            {/* Right Narrative Text */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-studio-caption block">
                  {d.frictionalBarrier}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight">
                  {d.challenge}
                </h2>
              </div>
              
              <div className="space-y-6 text-sm md:text-base text-studio-secondary font-light leading-relaxed">
                <p>
                  {csData.challenge}
                </p>
                <p>
                  {csData.execution}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CREATIVE INSIGHT with Narrative Image 3 */}
      <section className="py-32 md:py-48 bg-studio-bg relative border-b border-studio-border overflow-hidden">
        <div className="absolute inset-0 bg-radial from-purple-500/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative Text */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-studio-caption block">
                  {d.criticalCatalyst}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight">
                  {d.creativeInsightLabel}
                </h2>
              </div>

              {/* Massive Quotation Block */}
              <div className="p-8 bg-studio-panel border border-studio-border rounded-sm relative overflow-hidden space-y-4">
                <div className="absolute -top-10 -right-4 font-display text-[150px] leading-none text-studio-border font-bold opacity-10 select-none">
                  “
                </div>
                <blockquote className="text-xl md:text-3xl font-display font-light text-studio-primary leading-tight relative z-10">
                  "{csData.creativeInsight.split(". ")[0]}."
                </blockquote>
              </div>
              
              <div className="space-y-4 text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                <p>
                  {csData.creativeInsight.split(". ").slice(1).join(". ")}
                </p>
              </div>
            </div>

            {/* Right Narrative Image 3 - World Building */}
            <div className="lg:col-span-6">
              <div className="relative aspect-3/2 rounded-sm overflow-hidden border border-studio-border bg-studio-panel group">
                <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent opacity-40 z-10" />
                <img 
                  src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884829/vlcsnap-2026-07-01-02h43m40s493_zqfzic.png" 
                  alt={`${csData.client} - Narrative Image 3`}
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-studio-caption uppercase tracking-widest bg-studio-bg/80 backdrop-blur-sm px-2 py-1 border border-studio-border/40">
                  {d.narrativeImage03}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE PRODUCTION PIPELINE with Narrative Image 4 */}
      <section className="py-32 md:py-48 bg-studio-panel relative border-b border-studio-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
                {d.productionMethodology}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
                {d.productionPipeline}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed max-w-xl">
                {d.pipelineDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Timeline Column */}
            <div className="lg:col-span-7 space-y-3">
              {pipelineStages.map((stage: any, idx: number) => {
                const isExpanded = activePipelineStep === idx;
                return (
                  <div 
                    id={`pipeline-stage-${idx}`}
                    key={idx}
                    onMouseEnter={() => setActivePipelineStep(idx)}
                    onMouseLeave={() => setActivePipelineStep(null)}
                    className="border-b border-studio-border/60 pb-3 last:border-b-0 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-6">
                        <span className="text-xs font-mono text-studio-muted group-hover:text-studio-primary transition-colors duration-300">
                          {stage.step}
                        </span>
                        <h3 className="text-base md:text-lg font-display text-studio-primary font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                          {stage.title}
                        </h3>
                      </div>
                      <ChevronRight 
                        size={14} 
                        className={`text-studio-muted group-hover:text-studio-primary transition-all duration-300 ${isExpanded ? "rotate-90 text-studio-primary" : ""}`} 
                      />
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {(isExpanded) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-12 pr-6 pb-2 text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                            {stage.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Narrative Image 4 - Both protagonists crossing the street */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="relative aspect-3/2 rounded-sm overflow-hidden border border-studio-border bg-studio-bg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent opacity-40 z-10" />
                  <img 
                    src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884826/vlcsnap-2026-07-01-02h43m14s785_vfampn.png" 
                    alt={`${csData.client} - Narrative Image 4`}
                    className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-studio-caption uppercase tracking-widest bg-studio-bg/80 backdrop-blur-sm px-2 py-1 border border-studio-border/40">
                    {d.narrativeImage04}
                  </div>
                </div>
                <div className="p-4 bg-studio-bg border border-studio-border/60 rounded-sm">
                  <span className="text-[10px] font-mono text-studio-muted uppercase tracking-widest block mb-1">
                    {d.pipelineAnchor}
                  </span>
                  <p className="text-[11px] text-studio-caption font-light leading-normal">
                    {d.pipelineAnchorText}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY CARDS SECTION */}
      <section className="py-32 bg-studio-bg border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase block">
              {d.toolchainConfiguration}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight">
              {d.technology}
            </h2>
            <div className="w-12 h-[1px] bg-studio-primary mx-auto my-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech: string, i: number) => (
              <div 
                id={`tech-card-${i}`}
                key={tech}
                className="p-6 bg-studio-panel border border-studio-border rounded-sm hover:border-studio-primary transition-all duration-300 text-center space-y-2 group"
              >
                <div className="text-[10px] font-mono text-studio-muted uppercase tracking-widest block">
                  STACK_ITEM // 0{i + 1}
                </div>
                <span className="text-xs md:text-sm font-display font-medium text-studio-primary tracking-wide block uppercase">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION & CAPABILITIES DEMONSTRATED with Narrative Image 5 */}
      <section className="py-32 md:py-48 bg-studio-panel relative border-b border-studio-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Project Specifications Cards & Capabilities List */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-studio-caption block">
                  {d.capabilitiesDemonstratedBadge}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-studio-primary uppercase tracking-tight">
                  {d.capabilitiesDemonstrated}
                </h2>
              </div>

              {/* Specs and Demonstrations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Specs Box */}
                <div className="p-6 bg-studio-bg border border-studio-border rounded-sm space-y-4">
                  <span className="text-xs font-mono text-studio-caption uppercase tracking-widest flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-studio-primary rounded-full"></span>
                    <span>{d.projectSpecifications}</span>
                  </span>
                  <div className="space-y-3 divide-y divide-studio-border/55 pt-2">
                    {projectSpecs.map((spec: any) => (
                      <div key={spec.label} className="flex justify-between items-center text-xs pt-3 first:pt-0">
                        <span className="font-mono text-studio-muted uppercase text-[9px]">{spec.label}</span>
                        <span className="text-studio-primary font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demonstrations Box */}
                <div className="p-6 bg-studio-bg border border-studio-border rounded-sm space-y-4">
                  <span className="text-xs font-mono text-studio-caption uppercase tracking-widest flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-studio-primary rounded-full"></span>
                    <span>{d.systemsDeployed}</span>
                  </span>
                  <div className="grid grid-cols-1 gap-2.5 pt-1">
                    {coreDemonstrations.map((demo: string) => (
                      <div key={demo} className="flex items-center space-x-2.5 text-xs text-studio-secondary font-light">
                        <CheckCircle size={11} className="text-studio-primary shrink-0" />
                        <span>{demo}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Narrative Image 5 - Running through the alley */}
            <div className="lg:col-span-5">
              <div className="relative aspect-3/4 rounded-sm overflow-hidden border border-studio-border bg-studio-bg group">
                <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent opacity-40 z-10" />
                <img 
                  src="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782885056/vlcsnap-2026-07-01-02h48m54s307_kbr5hv.png" 
                  alt={`${csData.client} - Narrative Image 5`}
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-studio-caption uppercase tracking-widest bg-studio-bg/80 backdrop-blur-sm px-2 py-1 border border-studio-border/40">
                  {d.narrativeImage05}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL STATEMENT BLOCK */}
      <section className="py-32 md:py-48 bg-studio-bg border-b border-studio-border relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-studio-primary/[0.015] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          
          <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
            {d.productionPhilosophy}
          </span>

          <h2 className="text-3xl md:text-6xl font-display font-light text-studio-primary uppercase tracking-tight leading-tight max-w-3xl mx-auto">
            {d.philosophyTitle} <br />
            <span className="text-studio-caption">{d.philosophySubtitle}</span>
          </h2>

          <div className="w-16 h-[1px] bg-studio-border mx-auto my-6" />

          <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed max-w-2xl mx-auto">
            {d.philosophyBody}
          </p>
        </div>
      </section>

      {/* NEXT PROJECT FOOTER */}
      <section className="py-24 bg-studio-panel relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase block">
            {d.continueExploring}
          </span>

          <div className="max-w-xl mx-auto bg-studio-bg border border-studio-border hover:border-studio-caption/50 p-8 md:p-12 rounded-sm transition-all duration-300 space-y-6 shadow-xl shadow-black/20">
            <h3 className="text-xl md:text-2xl font-display font-light text-studio-primary uppercase tracking-wider">
              {d.exploreMoreProjects}
            </h3>
            <p className="text-xs text-studio-secondary font-light max-w-md mx-auto leading-normal">
              {d.exploreMoreDesc}
            </p>
            <button
              onClick={onBack}
              className="px-8 py-3.5 premium-interactive font-mono text-[10px] uppercase tracking-widest text-center rounded-sm inline-flex items-center space-x-2 cursor-pointer font-semibold"
            >
              <span>{d.nextCaseStudy}</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
