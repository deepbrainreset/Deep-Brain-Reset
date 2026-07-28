import { Language } from "./LanguageContext";

export interface NavigationSchema {
  studio: string;
  philosophy: string;
  featured: string;
  demoreel: string;
  watchDemoreel: string;
  system: string;
  capabilities: string;
  cases: string;
  consultant: string;
  cta: string;
  brief: string;
}

export interface HeroSchema {
  badge: string;
  titleTop: string;
  titleMid: string;
  titleBot: string;
  description: string;
  cta: string;
  title: string;
  subtitle: string;
  exploreButton: string;
  contactButton: string;
  watchDemoreel: string;
  viewSelectedWork: string;
  scrollIndicator: string;
  trustStatement?: string;
}

export interface DemoreelSchema {
  sectionLabel: string;
  mainTitle: string;
  description: string;
  watchCta: string;
  startProjectCta: string;
  exploreProjectsPrompt: string;
  modalLikeWhatYouSee: string;
  modalSubtext: string;
  modalBookCta: string;
  errorTitle: string;
  errorDesc: string;
  watchOnYoutube: string;
  viewCaseStudies: string;
  closeModal: string;
}

export interface PhilosophySchema {
  badge: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  sectionLabel: string;
  systemMatrix: string;
  titleMain: string;
  titleSub: string;
  bodyText: string;
  creativeTitle: string;
  creativeDesc: string;
  creativeTag: string;
  engTitle: string;
  engDesc: string;
  engTag: string;
  aiTitle: string;
  aiDesc: string;
  aiTag: string;
  pillar01: string;
  pillar02: string;
  pillar03: string;
}

export interface FeaturedSchema {
  badge: string;
  title: string;
  description: string;
  cta: string;
}

export interface ProcessPhaseSchema {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
}

export interface ProcessSchema {
  badge: string;
  title: string;
  description: string;
  phases: ProcessPhaseSchema[];
}

export interface ServicesSchema {
  badge: string;
  title: string;
  description: string;
}

export interface CasesListSchema {
  badge: string;
  title: string;
  description: string;
  inspect: string;
}

export interface WhyUsCardSchema {
  title: string;
  desc: string;
}

export interface WhyUsSchema {
  badge: string;
  title: string;
  description: string;
  cards: WhyUsCardSchema[];
}

export interface AiConsultantSchema {
  badge: string;
  title: string;
  description: string;
  placeholderBusiness: string;
  placeholderIndustry: string;
  placeholderBottleneck: string;
  placeholderNotes: string;
  btnGenerate: string;
  btnGenerating: string;
  resultsTitle: string;
}

export interface ContactFormSchema {
  badge: string;
  title: string;
  description: string;
  labelBusiness: string;
  labelEmail: string;
  labelScope: string;
  scopes: string[];
  labelNotes: string;
  btnSubmit: string;
  btnSubmitting: string;
  successTitle: string;
  successDesc: string;
}

export interface TestimonialsSchema {
  badge: string;
  title: string;
  description: string;
}

export interface TranslationSchema {
  navigation: NavigationSchema;
  hero: HeroSchema;
  demoreel: DemoreelSchema;
  philosophy: PhilosophySchema;
  featured: FeaturedSchema;
  process: ProcessSchema;
  services: ServicesSchema;
  casesList: CasesListSchema;
  whyUs: WhyUsSchema;
  aiConsultant: AiConsultantSchema;
  contactForm: ContactFormSchema;
  testimonials: TestimonialsSchema;
}

const rawTranslations: {
  [Section in keyof TranslationSchema]: {
    [Lang in Language]: TranslationSchema[Section];
  };
} = {
  navigation: {
    en: {
      studio: "Studio",
      philosophy: "Studio",
      featured: "Work",
      demoreel: "Demoreel",
      watchDemoreel: "WATCH DEMOREEL",
      system: "Process",
      capabilities: "Services",
      cases: "Cases",
      consultant: "AI Consultant",
      cta: "Contact",
      brief: "Book Session"
    },
    es: {
      studio: "Estudio",
      philosophy: "Estudio",
      featured: "Trabajos",
      demoreel: "Demoreel",
      watchDemoreel: "VER DEMOREEL",
      system: "Proceso",
      capabilities: "Servicios",
      cases: "Proyectos",
      consultant: "Consultor IA",
      cta: "Contacto",
      brief: "Agendar"
    },
    de: {
      studio: "Studio",
      philosophy: "Studio",
      featured: "Projekte",
      demoreel: "Demoreel",
      watchDemoreel: "DEMOREEL ANSEHEN",
      system: "Prozess",
      capabilities: "Leistungen",
      cases: "Projekte",
      consultant: "KI-Berater",
      cta: "Kontakt",
      brief: "Termin"
    },
    fr: {
      studio: "Studio",
      philosophy: "Studio",
      featured: "Projets",
      demoreel: "Demoreel",
      watchDemoreel: "VOIR LE DEMOREEL",
      system: "Processus",
      capabilities: "Services",
      cases: "Études",
      consultant: "Consultant IA",
      cta: "Contact",
      brief: "Rendez-vous"
    },
    it: {
      studio: "Studio",
      philosophy: "Studio",
      featured: "Progetti",
      demoreel: "Demoreel",
      watchDemoreel: "GUARDA IL DEMOREEL",
      system: "Processo",
      capabilities: "Servizi",
      cases: "Casi",
      consultant: "Consulente IA",
      cta: "Contatti",
      brief: "Prenota"
    }
  },
  hero: {
    en: {
      badge: "CREATIVE TECHNOLOGY STUDIO",
      titleTop: "CINEMATIC CONTENT",
      titleMid: "PREMIUM WEBSITES",
      titleBot: "& PRACTICAL AI SYSTEMS",
      description: "Deep Brain Reset creates AI-assisted commercials, CGI and 3D visuals, conversion-focused websites and tailored automations. Every project starts with a clear business need, a defined scope and work you can actually review.",
      cta: "Discuss your project",
      title: "Cinematic content, premium websites and practical AI systems for businesses ready to look and work better.",
      subtitle: "Deep Brain Reset creates AI-assisted commercials, CGI and 3D visuals, conversion-focused websites and tailored automations. Every project starts with a clear business need, a defined scope and work you can actually review.",
      exploreButton: "Explore Capabilities",
      contactButton: "Discuss your project",
      watchDemoreel: "WATCH DEMOREEL",
      viewSelectedWork: "VIEW SELECTED WORK",
      scrollIndicator: "Featured Case Studies",
      trustStatement: "Clear scope. Visible milestones. Technical quality checks before launch."
    },
    es: {
      badge: "ESTUDIO DE TECNOLOGÍA CREATIVA",
      titleTop: "CONTENIDO CINEMATOGRÁFICO",
      titleMid: "SITIOS WEB DE ALTA GAMA",
      titleBot: "& SISTEMAS PRÁCTICOS DE IA",
      description: "Deep Brain Reset crea comerciales asistidos por IA, CGI y visuales 3D, sitios web enfocados en conversión y automatizaciones a medida. Cada proyecto inicia con una necesidad clara, un alcance definido y avances revisables.",
      cta: "Conversar sobre tu proyecto",
      title: "Contenido cinematográfico, sitios web de alta gama y sistemas prácticos de IA para empresas listas para destacar y operar mejor.",
      subtitle: "Deep Brain Reset crea comerciales asistidos por IA, CGI y visuales 3D, sitios web enfocados en conversión y automatizaciones a medida. Cada proyecto inicia con una necesidad clara, un alcance definido y avances revisables.",
      exploreButton: "Explorar Servicios",
      contactButton: "Conversar sobre tu proyecto",
      watchDemoreel: "VER DEMOREEL",
      viewSelectedWork: "VER TRABAJOS SELECCIONADOS",
      scrollIndicator: "Casos de Estudio",
      trustStatement: "Alcance claro. Hitos visibles. Controles de calidad técnica antes del lanzamiento."
    },
    de: {
      badge: "STUDIO FÜR KREATIVE TECHNOLOGIE",
      titleTop: "FILMISCHER CONTENT",
      titleMid: "PREMIUM WEBSITES",
      titleBot: "& PRAKTISCHE KI-SYSTEME",
      description: "Deep Brain Reset erstellt KI-gestützte Werbespots, CGI- und 3D-Visualisierungen, konversionsstarke Websites und maßgeschneiderte Automatisierungen. Jedes Projekt beginnt mit einem klaren Geschäftszweck, definiertem Umfang und überprüfbaren Arbeitsergebnissen.",
      cta: "Projekt besprechen",
      title: "Filmischer Content, erstklassige Websites und praktische KI-Systeme für Unternehmen, die besser aussehen und arbeiten wollen.",
      subtitle: "Deep Brain Reset erstellt KI-gestützte Werbespots, CGI- und 3D-Visualisierungen, konversionsstarke Websites und maßgeschneiderte Automatisierungen. Jedes Projekt beginnt mit einem klaren Geschäftszweck, definiertem Umfang und überprüfbaren Arbeitsergebnissen.",
      exploreButton: "Leistungen erkunden",
      contactButton: "Projekt besprechen",
      watchDemoreel: "DEMOREEL ANSEHEN",
      viewSelectedWork: "AUSGEWÄHLTE ARBEITEN ANSEHEN",
      scrollIndicator: "Ausgewählte Fallstudien",
      trustStatement: "Klarer Umfang. Sichtbare Meilensteine. Technische Qualitätsprüfungen vor dem Launch."
    },
    fr: {
      badge: "STUDIO DE TECHNOLOGIE CRÉATIVE",
      titleTop: "CONTENU CINÉMATOGRAPHIQUE",
      titleMid: "SITES WEB PRESTIGE",
      titleBot: "& SYSTÈMES IA PRATIQUES",
      description: "Deep Brain Reset crée des spots publicitaires assistés par IA, des visuels CGI et 3D, des sites web axés sur la conversion et des automatisations sur mesure. Chaque projet débute par un besoin métier clair, un périmètre défini et des livrables vérifiables.",
      cta: "Discuter de votre projet",
      title: "Contenu cinématographique, sites web haut de gamme et systèmes d'IA pratiques pour les entreprises prêtes à mieux paraître et mieux fonctionner.",
      subtitle: "Deep Brain Reset crée des spots publicitaires assistés par IA, des visuels CGI et 3D, des sites web axés sur la conversion et des automatisations sur mesure. Chaque projet débute par un besoin métier clair, un périmètre défini et des livrables vérifiables.",
      exploreButton: "Explorer nos Services",
      contactButton: "Discuter de votre projet",
      watchDemoreel: "VOIR LE DEMOREEL",
      viewSelectedWork: "VOIR LES PROJETS SÉLECTIONNÉS",
      scrollIndicator: "Études de Cas",
      trustStatement: "Périmètre clair. Jalons visibles. Contrôles de qualité technique avant le lancement."
    },
    it: {
      badge: "STUDIO DI TECNOLOGIA CREATIVA",
      titleTop: "CONTENUTI CINEMATOGRAFICI",
      titleMid: "SITI WEB PRESTIGIOSI",
      titleBot: "& SISTEMI IA PRATICI",
      description: "Deep Brain Reset crea spot pubblicitari assistiti da IA, visual CGI e 3D, siti web orientati alla conversione e automazioni su misura. Ogni progetto parte da una necessità chiara, un perimetro definito e risultati verificabili.",
      cta: "Discuti il tuo progetto",
      title: "Contenuti cinematografici, siti web di alto livello e sistemi IA pratici per aziende pronte a distinguersi e lavorare meglio.",
      subtitle: "Deep Brain Reset crea spot pubblicitari assistiti da IA, visual CGI e 3D, siti web orientati alla conversione e automazioni su misura. Ogni progetto parte da una necessità chiara, un perimetro definido e risultati verificabili.",
      exploreButton: "Scopri i Servizi",
      contactButton: "Discuti il tuo progetto",
      watchDemoreel: "GUARDA IL DEMOREEL",
      viewSelectedWork: "GUARDA I LAVORI SELEZIONATI",
      scrollIndicator: "Casi di Studio",
      trustStatement: "Perimetro chiaro. Tappe visibili. Controlli di qualità tecnica prima del lancio."
    }
  },
  demoreel: {
    en: {
      sectionLabel: "STUDIO DEMOREEL",
      mainTitle: "CREATIVE TECHNOLOGY IN MOTION",
      description: "A selected audiovisual overview of Deep Brain Reset’s work across AI-assisted commercial production, cinematic storytelling, digital products, interactive platforms and creative technology.",
      watchCta: "WATCH DEMOREEL",
      startProjectCta: "BOOK A STRATEGY SESSION",
      exploreProjectsPrompt: "EXPLORE THE PROJECTS",
      modalLikeWhatYouSee: "LIKE WHAT YOU SEE?",
      modalSubtext: "Let’s discuss what Deep Brain Reset could create for your brand, product or business.",
      modalBookCta: "BOOK A STRATEGY SESSION",
      errorTitle: "THE DEMOREEL COULD NOT BE LOADED",
      errorDesc: "You can watch it directly on YouTube or continue exploring our case studies.",
      watchOnYoutube: "WATCH ON YOUTUBE",
      viewCaseStudies: "VIEW CASE STUDIES",
      closeModal: "Close video player"
    },
    es: {
      sectionLabel: "DEMOREEL DEL ESTUDIO",
      mainTitle: "TECNOLOGÍA CREATIVA EN MOVIMIENTO",
      description: "Un resumen audiovisual seleccionado del trabajo de Deep Brain Reset en producción comercial asistida por IA, narrativa cinematográfica, productos digitales, plataformas interactivas y tecnología creativa.",
      watchCta: "VER DEMOREEL",
      startProjectCta: "AGENDAR SESIÓN ESTRATÉGICA",
      exploreProjectsPrompt: "EXPLORAR LOS PROYECTOS",
      modalLikeWhatYouSee: "¿QUERÉS HACER ALGO ASÍ?",
      modalSubtext: "Conversemos sobre lo que Deep Brain Reset puede crear para tu marca, producto o empresa.",
      modalBookCta: "AGENDAR UNA SESIÓN ESTRATÉGICA",
      errorTitle: "EL DEMOREEL NO PUDO CARGARSE",
      errorDesc: "Podés verlo directamente en YouTube o continuar explorando nuestros casos de estudio.",
      watchOnYoutube: "VER EN YOUTUBE",
      viewCaseStudies: "VER CASOS DE ESTUDIO",
      closeModal: "Cerrar reproductor de video"
    },
    de: {
      sectionLabel: "STUDIO DEMOREEL",
      mainTitle: "KREATIVE TECHNOLOGIE IN BEWEGUNG",
      description: "Ein ausgewählter audiovisueller Überblick über die Arbeiten von Deep Brain Reset in den Bereichen KI-gestützte Werbeproduktion, filmisches Storytelling, digitale Produkte, interaktive Plattformen und kreative Technologie.",
      watchCta: "DEMOREEL ANSEHEN",
      startProjectCta: "STRATEGIEGESPRÄCH BUCHEN",
      exploreProjectsPrompt: "PROJEKTE ENTDECKEN",
      modalLikeWhatYouSee: "GEFÄLLT IHNEN, WAS SIE SEHEN?",
      modalSubtext: "Lassen Sie uns darüber sprechen, was Deep Brain Reset für Ihre Marke, Ihr Produkt oder Ihr Unternehmen erschaffen kann.",
      modalBookCta: "STRATEGIEGESPRÄCH BUCHEN",
      errorTitle: "DAS DEMOREEL KONNTE NICHT GELADEN WERDEN",
      errorDesc: "Sie können es direkt auf YouTube ansehen oder unsere Fallstudien erkunden.",
      watchOnYoutube: "AUF YOUTUBE ANSEHEN",
      viewCaseStudies: "FALLSTUDIEN ANSEHEN",
      closeModal: "Videoplayer schließen"
    },
    fr: {
      sectionLabel: "DEMOREEL DU STUDIO",
      mainTitle: "LA TECHNOLOGIE CRÉATIVE EN MOUVEMENT",
      description: "Un aperçu audiovisuel sélectionné du travail de Deep Brain Reset à travers la production publicitaire assistée par IA, la narration cinématographique, les produits numériques, les plateformes interactives et la technologie créative.",
      watchCta: "VOIR LE DEMOREEL",
      startProjectCta: "RÉSERVER UNE SESSION STRATÉGIQUE",
      exploreProjectsPrompt: "EXPLORER LES PROJETS",
      modalLikeWhatYouSee: "VOUS AIMEZ CE QUE VOUS VOYEZ ?",
      modalSubtext: "Discutons de ce que Deep Brain Reset pourrait créer pour votre marque, votre produit ou votre entreprise.",
      modalBookCta: "RÉSERVER UNE SESSION STRATÉGIQUE",
      errorTitle: "LE DEMOREEL N'A PAS PU ÊTRE CHARGÉ",
      errorDesc: "Vous pouvez le visionner directement sur YouTube ou continuer à explorer nos études de cas.",
      watchOnYoutube: "REGARDER SUR YOUTUBE",
      viewCaseStudies: "VOIR LES ÉTUDES DE CAS",
      closeModal: "Fermer le lecteur vidéo"
    },
    it: {
      sectionLabel: "DEMOREEL DELLO STUDIO",
      mainTitle: "TECNOLOGIA CREATIVA IN MOVIMENTO",
      description: "Una panoramica audiovisiva selezionata del lavoro di Deep Brain Reset tra produzione pubblicitaria assistita da IA, narrazione cinematografica, prodotti digitali, piattaforme interattive e tecnologia creativa.",
      watchCta: "GUARDA IL DEMOREEL",
      startProjectCta: "PRENOTA UNA SESSIONE STRATEGICA",
      exploreProjectsPrompt: "ESPLORA I PROGETTI",
      modalLikeWhatYouSee: "TI PIACE QUELLO CHE VEDI?",
      modalSubtext: "Discutiamo di cosa Deep Brain Reset potrebbe creare per il tuo brand, prodotto o azienda.",
      modalBookCta: "PRENOTA UNA SESSIONE STRATEGICA",
      errorTitle: "IMPOSSIBILE CARICARE IL DEMOREEL",
      errorDesc: "Puoi guardarlo direttamente su YouTube o continuare a esplorare i nostri casi di studio.",
      watchOnYoutube: "GUARDA SU YOUTUBE",
      viewCaseStudies: "VEDI CASI DI STUDIO",
      closeModal: "Chiudi il lettore video"
    }
  },
  philosophy: {
    en: {
      badge: "PHILOSOPHY",
      title: "An architectural approach to design and code.",
      paragraph1: "We do not believe in disposable web pages, superficial graphics, or standard templates. Deep Brain Reset operates as a highly specialized creative technology studio. We approach digital construction with the same mathematical precision and spatial gravity as physical architecture.",
      paragraph2: "Every brand strategy we deliver is anchored in absolute functional truth. Every line of backend code we deploy is statically analyzed and compiled to ensure total resilience. We design before we write, conceptualize before we generate AI, and audit before we deploy.",
      sectionLabel: "PHILOSOPHY",
      systemMatrix: "SYSTEM MATRIX // INTEGRITY VERIFIED",
      titleMain: "An architectural approach",
      titleSub: "to design and code.",
      bodyText: "We do not believe in disposable web pages, superficial graphics, or standard templates. Deep Brain Reset operates as a highly specialized creative technology studio. We approach digital construction with the same mathematical precision and spatial gravity as physical architecture. Every brand strategy we deliver is anchored in absolute functional truth. Every line of backend code we deploy is statically analyzed and compiled to ensure total resilience. We design before we write, conceptualize before we generate AI, and audit before we deploy.",
      creativeTitle: "Art Direction",
      creativeDesc: "We storyboard, compose, and master campaigns that command attention and project unyielding authority.",
      creativeTag: "CINEMATIC IDENTITY",
      engTitle: "Systems Engineering",
      engDesc: "Type-safe compiled codebases with sub-100ms load times and total uptime resilience.",
      engTag: "STATIC SYSTEMS",
      aiTitle: "Process Automation",
      aiDesc: "Custom server-side AI integrations and background pipelines to eliminate manual bottlenecks.",
      aiTag: "COGNITIVE AGENTS",
      pillar01: "PILLAR 01",
      pillar02: "PILLAR 02",
      pillar03: "PILLAR 03"
    },
    es: {
      badge: "FILOSOFÍA",
      title: "Un enfoque arquitectónico del diseño y el código.",
      paragraph1: "No creemos en páginas web desechables, gráficos superficiales o plantillas preestablecidas. Deep Brain Reset opera como un estudio de tecnología creativa de especialización rigurosa. Abordamos la construcción digital con la misma precisión matemática y gravedad espacial que la arquitectura física.",
      paragraph2: "Cada estrategia de marca que entregamos está anclada en la verdad funcional absoluta. Cada línea de código que desplegamos es analizada estáticamente y compilada para garantizar una resiliencia total. Diseñamos antes de escribir, conceptualizamos antes de generar IA y auditamos antes de implementar.",
      sectionLabel: "FILOSOFÍA",
      systemMatrix: "MATRIZ DEL SISTEMA // INTEGRIDAD VERIFICADA",
      titleMain: "Un enfoque arquitectónico",
      titleSub: "del diseño y el código.",
      bodyText: "No creemos en páginas web desechables, gráficos superficiales o plantillas preestablecidas. Deep Brain Reset opera como un estudio de tecnología creativa de especialización rigurosa. Abordamos la construcción digital con la misma precisión matemática y gravedad espacial que la arquitectura física. Cada estrategia de marca que entregamos está anclada en la verdad funcional absoluta. Cada línea de código que desplegamos es analizada estáticamente y compilada para garantizar una resiliencia total. Diseñamos antes de escribir, conceptualizamos antes de generar IA y auditamos antes de implementar.",
      creativeTitle: "Dirección de Arte",
      creativeDesc: "Elaboramos guiones gráficos, componemos y masterizamos campaigns que capturan la atención y proyectan autoridad absoluta.",
      creativeTag: "IDENTIDAD CINEMATOGRÁFICA",
      engTitle: "Ingeniería de Sistemas",
      engDesc: "Bases de código compiladas y con tipado seguro, tiempos de carga inferiores a 100 ms y resiliencia de actividad total.",
      engTag: "SISTEMAS ESTÁTICOS",
      aiTitle: "Automatización de Procesos",
      aiDesc: "Integraciones de IA personalizadas en el servidor y flujos en segundo plano para eliminar cuellos de botella manuales.",
      aiTag: "AGENTES COGNITIVOS",
      pillar01: "PILAR 01",
      pillar02: "PILAR 02",
      pillar03: "PILAR 03"
    },
    de: {
      badge: "PHILOSOPHIE",
      title: "Ein architektonischer Ansatz für Design und Code.",
      paragraph1: "Wir glauben weder an kurzlebige Websites noch an oberflächliche Grafiken oder Standard-Templates. Deep Brain Reset agiert als hochspezialisiertes Studio für kreative Technologie. Wir nähern uns der digitalen Konstruktion mit derselben mathematischen Präzision und räumlichen Tiefe wie der physischen Architektur.",
      paragraph2: "Jede von uns entwickelte Markenstrategie beruht auf absoluter funktionaler Wahrheit. Jede Codezeile wird statisch analysiert und kompiliert, um maximale Robustheit zu gewährleisten. Wir entwerfen, bevor wir programmieren, konzipieren, bevor wir KI generieren, und prüfen, bevor wir deployen.",
      sectionLabel: "PHILOSOPHIE",
      systemMatrix: "SYSTEM-MATRIX // INTEGRITÄT VERIFIZIERT",
      titleMain: "Ein architektonischer Ansatz",
      titleSub: "für Design und Code.",
      bodyText: "Wir glauben weder an kurzlebige Websites noch an oberflächliche Grafiken oder Standard-Templates. Deep Brain Reset agiert als hochspezialisiertes Studio für kreative Technologie. Wir nähern uns der digitalen Konstruktion mit derselben mathematischen Präzision und räumlichen Tiefe wie der physischen Architektur. Jede von uns entwickelte Markenstrategie beruht auf absoluter funktionaler Wahrheit. Jede Codezeile wird statisch analysiert und kompiliert, um maximale Robustheit zu gewährleisten. Wir entwerfen, bevor wir programmieren, konzipieren, bevor wir KI generieren, und prüfen, bevor wir deployen.",
      creativeTitle: "Kreativdirektion",
      creativeDesc: "Wir erstellen Storyboards, entwerfen und realisieren Kampagnen, die Aufmerksamkeit fesseln und unumstößliche Autorität vermitteln.",
      creativeTag: "FILMISCHE IDENTITÄT",
      engTitle: "Systementwicklung",
      engDesc: "Typsichere, kompilierte Codebasen mit Ladezeiten unter 100 ms und vollständiger Ausfallsicherheit.",
      engTag: "STATISCHE SYSTEME",
      aiTitle: "Prozessautomatisierung",
      aiDesc: "Spezialisierte serverseitige KI-Integrationen und Hintergrundprozesse zur Beseitigung manueller Engpässe.",
      aiTag: "KOGNITIVE AGENTEN",
      pillar01: "SÄULE 01",
      pillar02: "SÄULE 02",
      pillar03: "SÄULE 03"
    },
    fr: {
      badge: "PHILOSOPHIE",
      title: "Une approche architecturale du design et du code.",
      paragraph1: "Nous rejetons les pages web éphémères, le graphisme superficiel et les gabarits préconçus. Deep Brain Reset opère comme un atelier de technologie créative de haute spécialisation. Nous abordons la construction numérique avec la rigueur mathématique et la gravité spatiale de l'architecture physique.",
      paragraph2: "Chaque stratégie de marque est ancrée dans une vérité fonctionnelle absolue. Chaque ligne de code est analysée de manière statique et compilée pour garantir une résilience totale. Nous concevons avant d'écrire, conceptualisons avant d'employer l'IA, et auditons avant de déployer.",
      sectionLabel: "PHILOSOPHIE",
      systemMatrix: "MATRICE DU SYSTÈME // INTÉGRITÉ VÉRIFIÉE",
      titleMain: "Une approche architecturale",
      titleSub: "du design et du code.",
      bodyText: "Nous rejetons les pages web éphémères, le graphisme superficiel et les gabarits préconçus. Deep Brain Reset opère comme un atelier de technologie créative de haute spécialisation. Nous abordons la construction numérique avec la rigueur mathématique et la gravité spatiale de l'architecture physique. Chaque stratégie de marque est ancrée dans une vérité fonctionnelle absolue. Chaque ligne de code est analysée de manière statique et compilée pour garantir une résilience totale. Nous concevons avant d'écrire, conceptualisons avant d'employer l'IA, et auditons avant de déployer.",
      creativeTitle: "Direction Artistique",
      creativeDesc: "Nous dessinons des scénarios, composons et finalisons des campagnes qui captent le regard et affirment votre respectabilité.",
      creativeTag: "IDENTITÉ CINÉMATOGRAPHIQUE",
      engTitle: "Ingénierie de Systèmes",
      engDesc: "Bases de code compilées avec typage statique, temps de chargement inférieurs à 100 ms et résilience totale du système.",
      engTag: "SYSTÈMES STATIQUES",
      aiTitle: "Automatisation",
      aiDesc: "Intégrations IA personnalisées côté serveur et pipelines automatisés pour éliminer les tâches manuelles.",
      aiTag: "AGENTS COGNITIFS",
      pillar01: "PILIER 01",
      pillar02: "PILIER 02",
      pillar03: "PILIER 03"
    },
    it: {
      badge: "FILOSOFIA",
      title: "Un approccio architettonico al design e al codice.",
      paragraph1: "Non crediamo in pagine web usa e getta, grafiche superficiali o template standardizzati. Deep Brain Reset opera como uno studio altamente specializzato in tecnologia creativa. Affrontiamo la progettazione digitale con la stessa precisione matematica e gravità spaziale che caratterizzano l'architettura fisica.",
      paragraph2: "Ogni strategia di brand che realizziamo è ancorata a una verità funzionale assoluta. Ogni singola riga di codice viene analizzata staticamente e compilata per assicurare la totale stabilità del sistema. Progettiamo prima di scrivere, concettualizziamo prima di integrare l'IA, e verifichiamo prima del rilascio.",
      sectionLabel: "FILOSOFIA",
      systemMatrix: "MATRICE DEL SISTEMA // INTEGRITÀ VERIFICATA",
      titleMain: "Un approccio architettonico",
      titleSub: "al design e al codice.",
      bodyText: "Non crediamo in pagine web usa e getta, grafiche superficiali o template standardizzati. Deep Brain Reset opera come uno studio altamente specializzato in tecnologia creativa. Affrontiamo la progettazione digitale con la stessa precisione matematica e gravità spaziale che caratterizzano l'architettura fisica. Ogni strategia di brand che realizziamo è ancorata a una verità funzionale assoluta. Ogni singola riga di codice viene analizzata staticamente e compilata per assicurare la totale stabilità del sistema. Progettiamo prima di scrivere, concettualizziamo prima di integrare l'IA, e verifichiamo prima del rilascio.",
      creativeTitle: "Direzione Artistica",
      creativeDesc: "Progettiamo storyboard, componiamo e perfezioniamo campagne in grado di catturare l'attenzione e riflettere immediata affidabilità.",
      creativeTag: "IDENTITÀ CINEMATOGRAFICA",
      engTitle: "Ingegneria dei Sistemi",
      engDesc: "Basi di codice compilate e tipizzate, tempi di caricamento inferiori a 100 ms e massima stabilità del sistema.",
      engTag: "SISTEMI STATICI",
      aiTitle: "Automazione dei Processi",
      aiDesc: "Integrazioni IA dedicate lato server e flussi automatizzati per eliminare completamente le operazioni ripetitive.",
      aiTag: "AGENTI COGNITIVI",
      pillar01: "PILASTRO 01",
      pillar02: "PILASTRO 02",
      pillar03: "PILASTRO 03"
    }
  },
  featured: {
    en: {
      badge: "SELECTED PRODUCTIONS",
      title: "Curated Exhibition.",
      description: "We design and engineer digital masterworks. Rather than a random portfolio of websites, this collection represents a curated progressive exhibition of the studio's diverse disciplines—from cinematic AI art direction and high-stakes civic software platforms, to vertical SaaS ecosystems, corporate commerce systems, and premium editorial digital design.",
      cta: "Inspect Case Study"
    },
    es: {
      badge: "PRODUCCIONES SELECCIONADAS",
      title: "Exposición Curada.",
      description: "Diseñamos y construimos obras de arte digitales. En lugar de un catálogo aleatorio de sitios web, esta colección representa una exhibición progresiva y curada de las disciplinas del estudio: desde dirección de arte con IA cinematográfica y plataformas cívicas de alta complejidad, hasta sistemas SaaS verticales, portales corporativos de comercio electrónico y diseño editorial premium.",
      cta: "Inspeccionar Caso de Estudio"
    },
    de: {
      badge: "AUSGEWÄHLTE PRODUKTIONEN",
      title: "Kuratierte Ausstellung.",
      description: "Wir entwerfen und realisieren digitale Meisterwerke. Anstelle eines willkürlichen Portfolios von Websites zeigt diese Sammlung eine kuratierte, anspruchsvolle Leistungsschau unserer verschiedenen Disziplinen – von filmischer KI-Bildgestaltung über hochkomplexe Civic-Tech-Plattformen bis hin zu Branchen-SaaS, B2B-Commerce und edlem Editorial-Design.",
      cta: "Fallstudie Prüfen"
    },
    fr: {
      badge: "CRÉATIONS REPRÉSENTATIVES",
      title: "Exposition Exclusive.",
      description: "Nous concevons et façonnons des chefs-d'œuvre numériques. Loin d'être un simple répertoire de sites, cette collection constitue un parcours éditorial progressif à travers nos expertises : de la direction artistique par IA cinématographique aux plateformes civiques d'envergure, en passant par les architectures SaaS verticales, le e-commerce industriel et le design d'auteur.",
      cta: "Analyser l'Étude de Cas"
    },
    it: {
      badge: "SELEZIONE DELLE OPERE",
      title: "Mostra Curata.",
      description: "Progettiamo e sviluppiamo capolavori digitali. Piuttosto che una galleria disordinata di siti web, questa collezione rappresenta un percorso espositivo progressivo delle nostre discipline: dalla direzione artistica cinematografica assistita da IA a piattaforme civiche ad alto impatto, fino a sistemi SaaS verticali, e-commerce industriali e design d'autore raffinato.",
      cta: "Esamina Caso di Studio"
    }
  },
  process: {
    en: {
      badge: "METHODOLOGY",
      title: "Our Production Method.",
      description: "We commit to the agreed scope and deliverables. Every project follows a clear, four-step structure with visible checkpoints.",
      phases: [
        {
          phase: "01",
          title: "Understand",
          subtitle: "Goal, audience & deliverables",
          description: "We define the goal, audience, deliverables, timeline and the real problem the project needs to solve.",
          outputs: ["Project Brief", "Defined Scope & Timeline", "Deliverable Roadmap"]
        },
        {
          phase: "02",
          title: "Visualize",
          subtitle: "Direction, references & structure",
          description: "We create the creative direction, references, structure and—when relevant—a preliminary website concept.",
          outputs: ["Moodboards & References", "Homepage Visual Concept", "Structural Layout"]
        },
        {
          phase: "03",
          title: "Build",
          subtitle: "Production & progress checkpoints",
          description: "We produce the agreed assets, website or workflow with progress checkpoints that keep the work visible.",
          outputs: ["Code & Asset Production", "Staging Environment", "Milestone Demos"]
        },
        {
          phase: "04",
          title: "Review & Launch",
          subtitle: "Testing, refinement & delivery",
          description: "We test the agreed functionality, refine the final details and deliver or launch the finished project.",
          outputs: ["Functional & Mobile Audit", "Final Handover & Launch", "Post-Launch Verification"]
        }
      ]
    },
    es: {
      badge: "METODOLOGÍA",
      title: "Nuestro Método de Producción.",
      description: "Nos comprometemos con el alcance y los entregables acordados. Cada proyecto sigue una estructura clara de cuatro pasos con hitos visibles.",
      phases: [
        {
          phase: "01",
          title: "Comprender",
          subtitle: "Objetivos, audiencia y entregables",
          description: "Definimos el objetivo, la audiencia, los entregables, los plazos y el problema real que el proyecto debe resolver.",
          outputs: ["Pliego del Proyecto", "Alcance y Cronograma", "Hoja de Ruta de Entregables"]
        },
        {
          phase: "02",
          title: "Visualizar",
          subtitle: "Dirección estética, referencias y estructura",
          description: "Creamos la dirección creativa, referencias, estructura y, cuando corresponde, un concepto preliminar para el sitio web.",
          outputs: ["Moodboards y Referencias", "Concepto Visual de Portada", "Estructura de Layout"]
        },
        {
          phase: "03",
          title: "Construir",
          subtitle: "Producción e hitos de revisión",
          description: "Producimos los activos, el sitio web o el flujo de trabajo acordado con hitos de revisión que mantienen el avance visible.",
          outputs: ["Desarrollo de Código y Assets", "Entorno de Pruebas", "Demostraciones de Avance"]
        },
        {
          phase: "04",
          title: "Revisar y Lanzar",
          subtitle: "Pruebas, refinamiento y entrega",
          description: "Probamos la funcionalidad acordada, afinamos los detalles finales y entregamos o lanzamos el proyecto finalizado.",
          outputs: ["Auditoría Funcional y Mobile", "Entrega Final y Publicación", "Verificación Post-Lanzamiento"]
        }
      ]
    },
    de: {
      badge: "METHODIK",
      title: "Unsere Produktionsmethode.",
      description: "Wir verpflichten uns zu dem vereinbarten Umfang und den zugesagten Ergebnissen. Jedes Projekt folgt einer klaren vierstufigen Struktur.",
      phases: [
        {
          phase: "01",
          title: "Verstehen",
          subtitle: "Ziel, Zielgruppe & Ergebnisse",
          description: "Wir definieren das Ziel, die Zielgruppe, die Ergebnisse, den Zeitplan und die echte Herausforderung des Projekts.",
          outputs: ["Projekt-Briefing", "Definierter Umfang & Zeitplan", "Meilenstein-Roadmap"]
        },
        {
          phase: "02",
          title: "Visualisieren",
          subtitle: "Richtung, Referenzen & Struktur",
          description: "Wir erstellen die kreative Richtung, Referenzen, Struktur und – wo relevant – ein erstes Startseiten-Konzept.",
          outputs: ["Moodboards & Referenzen", "Visuelles Startseiten-Konzept", "Strukturelles Layout"]
        },
        {
          phase: "03",
          title: "Bauen",
          subtitle: "Produktion & Überprüfungsphasen",
          description: "Wir produzieren die vereinbarten Medien, die Website oder Automatisierung mit transparenten Fortschrittskontrollen.",
          outputs: ["Code- & Medienproduktion", "Test-Umgebung", "Fortschritts-Demos"]
        },
        {
          phase: "04",
          title: "Prüfen & Launch",
          subtitle: "Testen, Verfeinern & Übergabe",
          description: "Wir testen die vereinbarte Funktionalität, verfeinern finale Details und übergeben oder launchen das fertige Projekt.",
          outputs: ["Funktionaler & Mobile Test", "Finale Übergabe & Launch", "Prüfung nach dem Start"]
        }
      ]
    },
    fr: {
      badge: "MÉTHODOLOGIE",
      title: "Notre Méthode de Production.",
      description: "Nous nous engageons sur le périmètre et les livrables convenus. Chaque projet suit une structure claire en quatre étapes.",
      phases: [
        {
          phase: "01",
          title: "Comprendre",
          subtitle: "Objectif, audience & livrables",
          description: "Nous définissons l'objectif, l'audience, les livrables, le calendrier et le vrai problème que le projet doit résoudre.",
          outputs: ["Brief de Projet", "Périmètre & Calendrier", "Feuille de Route des Livrables"]
        },
        {
          phase: "02",
          title: "Visualiser",
          subtitle: "Direction, références & structure",
          description: "Nous créons la direction créative, les références, la structure et — le cas échéant — un concept visuel de page d'accueil.",
          outputs: ["Moodboards & Références", "Concept Visuel de Page d'Accueil", "Plan de Structure"]
        },
        {
          phase: "03",
          title: "Construire",
          subtitle: "Production & jalons de suivi",
          description: "Nous produisons les contenus, le site web ou les automatisations prévus avec des jalons de validation réguliers.",
          outputs: ["Production de Code & Médias", "Environnement de Recette", "Démonstrations d'Étape"]
        },
        {
          phase: "04",
          title: "Réviser & Lancer",
          subtitle: "Tests, ajustements & livraison",
          description: "Nous testons les fonctionnalités convenues, ajustons les derniers détails et livrons ou lançons le projet finalisé.",
          outputs: ["Audit Fonctionnel & Mobile", "Livraison Finale & Lancement", "Vérification Post-Lancement"]
        }
      ]
    },
    it: {
      badge: "METODOLOGIA",
      title: "Il Nostro Metodo di Produzione.",
      description: "Ci impegniamo sul perimetro e sui risultati concordati. Ogni progetto segue una struttura chiara in quattro fasi.",
      phases: [
        {
          phase: "01",
          title: "Comprendere",
          subtitle: "Obiettivo, pubblico e risultati",
          description: "Definiamo l'obiettivo, il pubblico, i deliverable, le tempistiche e la reale esigenza del progetto.",
          outputs: ["Brief di Progetto", "Perimetro e Tempistiche", "Roadmap dei Deliverable"]
        },
        {
          phase: "02",
          title: "Visualizzare",
          subtitle: "Direzione, riferimenti e struttura",
          description: "Creiamo la direzione creativa, i riferimenti, la struttura e — ove pertinente — un concetto visivo per la homepage.",
          outputs: ["Moodboard e Riferimenti", "Concetto Visivo Homepage", "Layout Strutturale"]
        },
        {
          phase: "03",
          title: "Costruire",
          subtitle: "Produzione e verifiche intermedie",
          description: "Produciamo i contenuti, il sito web o i flussi concordati con verifiche intermedie per mantenere il lavoro trasparente.",
          outputs: ["Sviluppo Codice e Asset", "Ambiente di Prova", "Demo dei Progressi"]
        },
        {
          phase: "04",
          title: "Revisione e Lancio",
          subtitle: "Test, rifinitura e consegna",
          description: "Verifichiamo la funzionalità concordata, rifiniamo i dettagli e consegniamo o pubblichiamo il progetto finito.",
          outputs: ["Audit Funzionale e Mobile", "Consegna Finale e Lancio", "Verifica Post-Lancio"]
        }
      ]
    }
  },
  services: {
    en: {
      badge: "CAPABILITIES",
      title: "Engineered Solutions.",
      description: "We organize our production capabilities into four specialized practices, ensuring absolute focus and technical mastery in every engagement."
    },
    es: {
      badge: "CAPACIDADES",
      title: "Soluciones de Ingeniería.",
      description: "Organizamos nuestras capacidades en cuatro disciplinas de alta especialización, garantizando un enfoque riguroso y maestría técnica en cada proyecto."
    },
    de: {
      badge: "KOMPETENZEN",
      title: "Engineering-Lösungen.",
      description: "Wir gliedern unsere Kompetenzen in vier spezialisierte Bereiche, um in jedem Projekt absolute Fokussierung und technologische Eszellenz zu sichern."
    },
    fr: {
      badge: "EXPERTISE",
      title: "Solutions d'Ingénierie.",
      description: "Nous structurons nos compétences autour de quatre pôles d'excellence, assurant une concentration maximale et une maîtrise technique absolue."
    },
    it: {
      badge: "COMPETENZE",
      title: "Soluzioni Tecnologiche.",
      description: "Strutturiamo la nostra azione in quattro aree di eccellenza tecnologica e di design, garantendo un'attenzione rigorosa e massima competenza."
    }
  },
  casesList: {
    en: {
      badge: "PORTFOLIO RECORDS",
      title: "Case Studies.",
      description: "We present our achievements not through shallow screenshots, but through rigorous breakdowns of thinking, architectures, and financial validation.",
      inspect: "INSPECT CASE STUDY"
    },
    es: {
      badge: "HISTORIAL DE PORTAFOLIO",
      title: "Casos de Estudio.",
      description: "Presentamos nuestros logros no con simples capturas de pantalla, sino a través de análisis rigurosos de nuestra estrategia, arquitectura de software e impacto real.",
      inspect: "INSPECCIONAR PROYECTO"
    },
    de: {
      badge: "PROJEKTARCHIV",
      title: "Fallstudien.",
      description: "Wir präsentieren unsere Erfolge nicht durch oberflächliche Bilder, sondern durch fundierte Analysen von Denkprozessen, Softwarearchitekturen und geschäftlichem Nutzen.",
      inspect: "FALLSTUDIE ANALYSIEREN"
    },
    fr: {
      badge: "ÉTUDES DE CAS",
      title: "Rapports d'Étude.",
      description: "Nous démontrons nos accomplissements non pas via de simples images, mais par une dissection approfondie de notre réflexion stratégique, technique et opérationnelle.",
      inspect: "ANALYSER LE PROJET"
    },
    it: {
      badge: "ARCHIVIO CASI",
      title: "Casi di Studio.",
      description: "Presentiamo le nostre soluzioni non attraverso semplici gallerie d'immagini, ma tramite approfondimenti rigorosi di logica, architettura e validazione commerciale.",
      inspect: "ESAMINA CASO DI STUDIO"
    }
  },
  whyUs: {
    en: {
      badge: "STRATEGIC VALUE",
      title: "Why Deep Brain Reset?",
      description: "Traditional agencies do not understand code. Conventional software houses do not understand art direction. We exist because complex business problems require both disciplines running on a single production pipeline.",
      cards: [
        {
          title: "Bespoke Architectures Only",
          desc: "We build tailored software architectures. No generic templates, no technical debt. Only statically-analyzed, type-safe compiled codebases designed for high-end performance."
        },
        {
          title: "Cinematic Aesthetic Intent",
          desc: "Our creative directors design exquisite, grid-aligned, high-prestige editorial experiences that command attention, build credibility, and project unyielding authority."
        },
        {
          title: "Sovereign Process Automation",
          desc: "We bypass standard CRM scripts and heavy tools, developing targeted AI microservices and pipelines that run silently to automate and streamline your business operations."
        },
        {
          title: "Zero-Latency Client Directness",
          desc: "Work directly with the core builders and architects of your system. We eliminate management overhead and slow corporate pipelines to deliver elite quality at speed."
        }
      ]
    },
    es: {
      badge: "VALOR ESTRATÉGICO",
      title: "¿Por Qué Deep Brain Reset?",
      description: "Las agencias tradicionales no entienden de desarrollo. Las consultoras de software convencionales no entienden de dirección de arte. Existimos porque los problemas de negocio complejos exigen ambas disciplinas coordinadas bajo una sola ingeniería.",
      cards: [
        {
          title: "Solo Arquitecturas a Medida",
          desc: "Construimos arquitecturas de software completamente personalizadas. Sin plantillas prehechas, sin deuda técnica. Código tipado, analizado estáticamente y compilado para el máximo rendimiento."
        },
        {
          title: "Dirección Estética Cinematográfica",
          desc: "Nuestros directores creativos proyectan experiencias de marca exquisitas, con alineación editorial impecable, que capturan la atención del consumidor y proyectan autoridad absoluta."
        },
        {
          title: "Automatización de Procesos Soberanos",
          desc: "Prescindimos de pesados scripts e integraciones comerciales de terceros. Desarrollamos microservicios de IA específicos que operan de manera silenciosa para optimizar las operaciones de su empresa."
        },
        {
          title: "Interacción Directa Sin Intermediarios",
          desc: "Colabore directamente con los ingenieros y diseñadores principales del sistema. Eliminamos capas administrativas lentas para entregar un desarrollo de élite a máxima velocidad."
        }
      ]
    },
    de: {
      badge: "STRATEGISCHER MEHRWERT",
      title: "Warum Deep Brain Reset?",
      description: "Klassische Agenturen verstehen keinen Code. Traditionelle Softwarehäuser verstehen keine Designästhetik. Wir existieren, weil anspruchsvolle geschäftliche Herausforderungen beide Disziplinen in einer einzigen Pipeline verlangen.",
      cards: [
        {
          title: "Ausschließlich maßgeschneiderte Architekturen",
          desc: "Wir bauen passgenaue Softwarearchitekturen. Keine Standard-Vorlagen, keine technischen Altlasten. Nur statisch geprüfter, typsicherer Code, optimiert auf Höchstleistung."
        },
        {
          title: "Filmischer ästhetischer Anspruch",
          desc: "Unsere Kreativdirektoren entwerfen erlesene, rasterorientierte, hochkarätige redaktionelle Erlebnisse, die Aufmerksamkeit fesseln, Glaubwürdigkeit stiften und unumstößliche Autorität vermitteln."
        },
        {
          title: "Souveräne Prozessautomatisierung",
          desc: "Wir meiden klobige Drittanbieter-Tools und skriptbasierte CRMs. Stattdessen entwickeln wir spezialisierte KI-Microservices, die geräuschlos im Hintergrund Ihre Geschäftsprozesse automatisieren."
        },
        {
          title: "Direkter Kontakt zu den Entwicklern",
          desc: "Sie arbeiten direkt mit den federführenden Softwarearchitekten und Designern Ihres Systems zusammen. Wir verzichten auf träge Hierarchien, um Spitzenqualität schnell zu liefern."
        }
      ]
    },
    fr: {
      badge: "VALEUR STRATÉGIQUE",
      title: "Pourquoi Deep Brain Reset ?",
      description: "Les agences traditionnelles ne maîtrisent pas le code. Les ssii conventionnelles ignorent tout de la direction artistique. Nous existons car les problématiques d'affaires complexes exigent l'union de ces deux disciplines sous un même pipeline de production.",
      cards: [
        {
          title: "Architectures Rigoureusement sur Mesure",
          desc: "Nous concevons des architectures logicielles uniques. Aucun modèle standard, aucune dette technique. Uniquement du code compilé, typé et analysé statiquement, taillé pour la vitesse."
        },
        {
          title: "Exigence Esthétique Cinématographique",
          desc: "Nos directeurs de création façonnent des expériences éditoriales de prestige, alignées au pixel près, qui captent le regard de vos clients et affirment la respectabilité de votre marque."
        },
        {
          title: "Souveraineté des Automations Métiers",
          desc: "Nous contournons les lourdes suites logicielles commerciales. Nous programmons des microservices d'IA dédiés qui opèrent en arrière-plan pour fluidifier et automatiser vos opérations."
        },
        {
          title: "Dialogue Direct avec les Concepteurs",
          desc: "Collaborez sans filtre avec les ingénieurs et designers de votre projet. Nous éliminons les intermédiaires administratifs pour livrer une qualité d'élite en un temps record."
        }
      ]
    },
    it: {
      badge: "VALORE STRATEGICO",
      title: "Perché Deep Brain Reset?",
      description: "Le agenzie tradizionali non conoscono lo sviluppo software. Le software house convenzionali non comprendono la direzione artistica. Esistiamo perché problemi operativi complessi richiedono entrambe le discipline in un unico flusso coordinato.",
      cards: [
        {
          title: "Solo Architetture su Misura",
          desc: "Sviluppiamo architetture software completamente su misura. Nessun template precostituito, nessuna pesantezza di sistema. Solo codice tipizzato e compilato, ottimizzato per le massime prestazioni."
        },
        {
          title: "Sensibilità Estetica Cinematografica",
          desc: "I nostri direttori creativi progettano interfacce editoriali allineate, di eccezionale valore visivo, in grado di catturare l'attenzione e riflettere immediata affidabilità."
        },
        {
          title: "Automazione Sovrana dei Processi",
          desc: "Evitiamo l'uso di pesanti software commerciali standard. Creiamo microservizi di IA escluvivi che lavorano in silenzio per automatizzare i flussi interni e abbattere le inefficienze."
        },
        {
          title: "Contatto Diretto con gli Sviluppatori",
          desc: "Interagite direttamente con i designer e i software architect del vostro progetto. Riduciamo i tempi burocratici per garantire risultati d'eccellenza con la massima reattività."
        }
      ]
    }
  },
  aiConsultant: {
    en: {
      badge: "INTELLIGENT DIAGNOSTIC CLIENT MODULE",
      title: "Interactive AI Strategy Assistant.",
      description: "Define your company parameters, isolate your core operational challenge, and let our generative model synthesize a comprehensive custom Strategic Brief and technical outline for your project instantly.",
      placeholderBusiness: "Enter business name (e.g., Solas Luxury Estates)",
      placeholderIndustry: "Select or enter industry (e.g., Luxury Real Estate, B2B SaaS)",
      placeholderBottleneck: "Isolate challenge / bottleneck (e.g., Manual client onboarding, high cost per lead)",
      placeholderNotes: "Additional strategic context, brand goals or constraints...",
      btnGenerate: "Synthesize Proposal Brief",
      btnGenerating: "Analyzing parameters & generating brief...",
      resultsTitle: "STUDIO STRATEGY & TECHNICAL BRIEF"
    },
    es: {
      badge: "MÓDULO DE DIAGNÓSTICO INTELIGENTE",
      title: "Asistente Interactivo de Estrategia IA.",
      description: "Defina los parámetros de su empresa, aísle su principal desafío operativo y deje que nuestro modelo generativo sintetice un Pliego Estratégico y técnico completo para su proyecto de manera instantánea.",
      placeholderBusiness: "Nombre de la empresa (ej., Inmobiliaria de Lujo Solas)",
      placeholderIndustry: "Seleccione o escriba la industria (ej., Real Estate de Lujo, B2B SaaS)",
      placeholderBottleneck: "Aísle el cuello de botella (ej., Onboarding de clientes manual, alto costo de conversión)",
      placeholderNotes: "Contexto estratégico adicional, metas de marca o limitantes...",
      btnGenerate: "Sintetizar Pliego Técnico",
      btnGenerating: "Analizando parámetros y generando propuesta...",
      resultsTitle: "PROPUESTA ESTRATÉGICA Y PLIEGO TÉCNICO"
    },
    de: {
      badge: "INTELLIGENTES DIAGNOSE-CLIENT-MODUL",
      title: "Interaktiver KI-Strategieassistent.",
      description: "Geben Sie Ihre Unternehmensparameter an, isolieren Sie Ihren zentralen operativen Engpass, und lassen Sie unser generatives Modell sofort ein umfassendes strategisches und technisches Briefing erstellen.",
      placeholderBusiness: "Name des Unternehmens (z. B. Solas Luxury Estates)",
      placeholderIndustry: "Branche auswählen oder eingeben (z. B. Luxusimmobilien, B2B-SaaS)",
      placeholderBottleneck: "Engpass isolieren (z. B. Manuelles Kunden-Onboarding, hoher Cost-per-Lead)",
      placeholderNotes: "Zusätzlicher strategischer Kontext, Markenziele oder Einschränkungen...",
      btnGenerate: "Briefing Synthetisieren",
      btnGenerating: "Parameter werden analysiert & Briefing generiert...",
      resultsTitle: "STRATEGISCHER ENTWURF & TECHNISCHES BRIEFING"
    },
    fr: {
      badge: "MODULE DE DIAGNOSTIC INTELLIGENT DE CLIENTÈLE",
      title: "Assistant de Stratégie Interactif IA.",
      description: "Définissez les paramètres de votre entreprise, isolez vos goulots d'étranglement opérationnels et laissez notre modèle génératif synthétiser instantanément un Brief Stratégique complet et une feuille de route technique.",
      placeholderBusiness: "Nom de l'entreprise (ex: Solas Immobilier de Prestige)",
      placeholderIndustry: "Secteur d'activité (ex: Immobilier de Luxe, B2B SaaS)",
      placeholderBottleneck: "Goulot d'étranglement (ex: Intégration manuelle des clients, coût par lead élevé)",
      placeholderNotes: "Contexte stratégique additionnel, objectifs de marque ou contraintes...",
      btnGenerate: "Synthétiser le Brief de Projet",
      btnGenerating: "Analyse des données & génération en cours...",
      resultsTitle: "BRIEF STRATÉGIQUE & PLANIFICATION TECHNIQUE DE L'ATELIER"
    },
    it: {
      badge: "MODULO DI DIAGNOSTICA AZIENDALE INTERATTIVA",
      title: "Assistente Strategico Interattivo IA.",
      description: "Definite i parametri aziendali, isolate il vostro principale collo di bottiglia operativo e lasciate che il nostro modello generativo sintetizzi istantaneamente un Brief Strategico e una bozza tecnica su misura per il vostro progetto.",
      placeholderBusiness: "Nome dell'azienda (es. Solas Immobili di Lusso)",
      placeholderIndustry: "Settore o mercato (es. Real Estate di Pregio, B2B SaaS)",
      placeholderBottleneck: "Isolate la sfida operativa (es. Onboarding clienti manuale, costo di acquisizione elevato)",
      placeholderNotes: "Ulteriore contesto strategico, obiettivi di brand o requisiti...",
      btnGenerate: "Sintetizza Brief di Progetto",
      btnGenerating: "Anasi dei parametri e generazione in corso...",
      resultsTitle: "PROPUESTA STRATEGICA E SPECIFICHE TECNICHE"
    }
  },
  contactForm: {
    en: {
      badge: "SECURE PROJECT INTAKE",
      title: "Initiate Production.",
      description: "We work with a highly limited group of partners. Share your core challenge, and our architects will reach out to schedule an executive strategy session within 24 hours.",
      labelBusiness: "Company / Project Name",
      labelEmail: "Email Coordinates",
      labelScope: "Strategic Focus",
      scopes: ["AI Video Production", "Enterprise Software Engineering", "Process Automation & Workflows", "Bespoke Multi-Disciplinary Production"],
      labelNotes: "Inquiry Details & Strategy Objectives",
      btnSubmit: "Submit Strategic Inquiry",
      btnSubmitting: "Registering coordinates and brief...",
      successTitle: "Coordinates Secured.",
      successDesc: "Our partners and lead software architects have registered your strategic brief. We will reach out within 24 hours to schedule an executive diagnostic call."
    },
    es: {
      badge: "INGRESO DE PROYECTO SEGURO",
      title: "Iniciar Producción.",
      description: "Trabajamos con un grupo selecto de socios de negocio. Comparta su desafío operativo y nuestros directores de proyecto lo contactarán para programar una sesión estratégica dentro de las próximas 24 horas.",
      labelBusiness: "Nombre de la Empresa / Proyecto",
      labelEmail: "Coordenadas de Correo",
      labelScope: "Enfoque Estratégico",
      scopes: ["Producción de Video con IA", "Ingeniería de Software Corporativo", "Automatización de Procesos y Flujos", "Producción Multidisciplinaria a Medida"],
      labelNotes: "Detalles de la Consulta y Objetivos de Marca",
      btnSubmit: "Enviar Consulta Estratégica",
      btnSubmitting: "Registrando coordenadas y objetivos...",
      successTitle: "Coordenadas Registradas.",
      successDesc: "Nuestros ingenieros de software y directores creativos han recibido su pliego estratégico. Nos comunicaremos con usted en menos de 24 horas para agendar un diagnóstico ejecutivo."
    },
    de: {
      badge: "SICHERES PROJEKTBRIEFING",
      title: "Produktion Einleiten.",
      description: "Wir arbeiten mit einer streng limitierten Anzahl von Partnern zusammen. Beschreiben Sie Ihre Herausforderung, und unsere Systemarchitekten werden sich innerhalb von 24 Stunden bei Ihnen melden.",
      labelBusiness: "Name des Unternehmens / Projekts",
      labelEmail: "E-Mail-Adresse",
      labelScope: "Strategischer Schwerpunkt",
      scopes: ["KI-Videoproduktion", "Software-Engineering für Unternehmen", "Prozessautomatisierung & Workflows", "Individuelle multidisziplinäre Produktion"],
      labelNotes: "Details zur Anfrage & strategische Ziele",
      btnSubmit: "Strategische Anfrage Absenden",
      btnSubmitting: "Briefing-Daten werden registriert...",
      successTitle: "Daten erfolgreich übermittelt.",
      successDesc: "Unsere leitenden Softwarearchitekten und Designer haben Ihr Briefing registriert. Wir werden uns innerhalb von 24 Stunden mit Ihnen in Verbindung setzen, um einen Termin zu vereinbaren."
    },
    fr: {
      badge: "ENREGISTREMENT SÉCURISÉ DE BRIEF",
      title: "Initier la Production.",
      description: "Nous collaborons avec un cercle très restreint de partenaires de confiance. Présentez-nous votre défi, et nos architectes d'affaires prendront contact sous 24 heures pour convenir d'un rendez-vous stratégique.",
      labelBusiness: "Nom de l'Entreprise / Projet",
      labelEmail: "Coordonnées de Courriel",
      labelScope: "Domaine d'Action Privilégié",
      scopes: ["Production Vidéo par IA", "Ingénierie Logicielle d'Entreprise", "Automatisation des Flux & Processus", "Création Multidisciplinaire sur Mesure"],
      labelNotes: "Détails de l'Anfrage & Objectifs Stratégiques",
      btnSubmit: "Soumettre la Demande Stratégique",
      btnSubmitting: "Enregistrement des coordonnées & du brief...",
      successTitle: "Dossier Enregistré avec Succès.",
      successDesc: "Nos concepteurs et architectes principaux ont validé l'enregistrement de votre brief de projet. Nous vous recontacterons sous 24 heures afin de planifier un entretien de diagnostic."
    },
    it: {
      badge: "ARCHIVIAZIONE SICURA BRIEF DI PROGETTO",
      title: "Inizia la Produzione.",
      description: "Collaboriamo esclusivamente con un grupo ristretto di partner commerciali. Condividete il vostro obiettivo e i nostri ingegneri principali si metteranno in contatto per definire un incontro strategico entro 24 ore.",
      labelBusiness: "Nome dell'Azienda / Progetto",
      labelEmail: "Coordinate Email",
      labelScope: "Focus Strategico",
      scopes: ["Produzione Video con IA", "Ingegneria del Software Aziendale", "Automazione dei Processi e Flussi di Lavoro", "Sviluppo Multidisciplinare su Misura"],
      labelNotes: "Dettagli della Richiesta e Obiettivi Strategici",
      btnSubmit: "Invia Richiesta Strategica",
      btnSubmitting: "Registrazione dei dati e degli obiettivi...",
      successTitle: "Richiesta Archiviata.",
      successDesc: "I nostri architetti del software e direttori creativi hanno registrato le vostre specifiche. Vi contatteremo entro 24 ore per pianificare un colloquio diagnostico."
    }
  },
  testimonials: {
    en: {
      badge: "TRUST VERIFICATION",
      title: "Executive Endorsements.",
      description: "Rigorous testimonies from executive partners across high-tech manufacturing, corporate law, public services, and luxury commercial brands."
    },
    es: {
      badge: "VERIFICACIÓN DE CONFIANZA",
      title: "Respaldo Ejecutivo.",
      description: "Testimonios de socios ejecutivos en manufactura de alta tecnología, firmas legales corporativas, servicios públicos y marcas comerciales de lujo."
    },
    de: {
      badge: "VERTRAUENSBEWEIS",
      title: "Referenzen von Entscheidern.",
      description: "Aussagekräftige Berichte von Führungskräften aus den Bereichen High-Tech-Produktion, Wirtschaftsrecht, öffentlicher Sektor und Luxusmarken."
    },
    fr: {
      badge: "VALIDATION ET RECONNAISSANCE",
      title: "Recommandations Exécutives.",
      description: "Témoignages de nos partenaires issus de la haute technologie industrielle, du droit des affaires, des administrations publiques et de l'univers du luxe."
    },
    it: {
      badge: "VERIFICA DELLA FIDUCIA",
      title: "Apprezzamenti dei Partner.",
      description: "Testimonianze di partner esecutivi operanti nel settore industriale ad alta tecnologia, studi legali societari, istituzioni pubbliche e marchi commerciali di pregio."
    }
  }
};

// Deep copy and fallback utility to automatically use English translation for missing or empty keys.
function mergeWithEnglishFallback(target: any, english: any): any {
  if (typeof english !== "object" || english === null) {
    return (target !== undefined && target !== null && target !== "") ? target : english;
  }
  
  if (Array.isArray(english)) {
    const result: any[] = [];
    for (let i = 0; i < english.length; i++) {
      const targetItem = target && target[i] !== undefined ? target[i] : undefined;
      result.push(mergeWithEnglishFallback(targetItem, english[i]));
    }
    return result;
  }
  
  const result: any = {};
  for (const key of Object.keys(english)) {
    const targetVal = target ? target[key] : undefined;
    const engVal = english[key];
    
    if (typeof engVal === "object" && engVal !== null) {
      result[key] = mergeWithEnglishFallback(targetVal, engVal);
    } else {
      result[key] = (targetVal !== undefined && targetVal !== null && targetVal !== "") ? targetVal : engVal;
    }
  }
  
  // Retain other fields that are present only in the target
  if (target) {
    for (const key of Object.keys(target)) {
      if (!(key in result)) {
        result[key] = target[key];
      }
    }
  }
  
  return result;
}

// Development flag for logging warnings
const isDev = (import.meta as any).env?.DEV || (typeof process !== "undefined" && process.env?.NODE_ENV !== "production");

// Create an ES6 Proxy wrapper to enforce English fallback and dev logging at runtime
function createSafeTranslationProxy<T extends object>(
  lang: string,
  sectionKey: string,
  langData: T,
  englishData: T
): T {
  return new Proxy(langData, {
    get(target, prop) {
      const propStr = String(prop);
      
      // Allow Symbol or standard JS internal property accessors without warnings
      if (typeof prop === "symbol" || propStr === "toJSON" || propStr === "then") {
        return Reflect.get(target, prop);
      }

      const value = (target as any)[prop];
      
      // If the key is missing or is an empty string/null/undefined, fallback to English
      if (value === undefined || value === null || value === "") {
        if (isDev) {
          console.warn(
            `[i18n] Missing translation for key "${sectionKey}.${propStr}" in language "${lang}". Falling back to English.`
          );
        }
        
        const englishVal = (englishData as any)[prop];
        if (englishVal === undefined || englishVal === null || englishVal === "") {
          // Fallback to key name instead of rendering nothing or crash
          return propStr;
        }
        return englishVal;
      }
      
      // If the value is an array (like phases or cards), make sure its elements are safe too
      if (Array.isArray(value)) {
        const englishArray = (englishData as any)[prop] || [];
        return value.map((item, idx) => {
          if (typeof item === "object" && item !== null) {
            return createSafeTranslationProxy(
              lang,
              `${sectionKey}.${propStr}[${idx}]`,
              item,
              englishArray[idx] || {}
            );
          }
          return item;
        });
      }
      
      // If the value is an object, recursively wrap it
      if (typeof value === "object" && value !== null) {
        return createSafeTranslationProxy(
          lang,
          `${sectionKey}.${propStr}`,
          value,
          (englishData as any)[prop] || {}
        );
      }
      
      return value;
    }
  });
}

// Build the strongly-typed self-healing translation dictionary
export const translations: {
  [Section in keyof TranslationSchema]: {
    [Lang in Language]: TranslationSchema[Section];
  };
} = {} as any;

for (const sectionKey of Object.keys(rawTranslations) as Array<keyof TranslationSchema>) {
  const section = rawTranslations[sectionKey];
  const english = section.en;
  (translations as any)[sectionKey] = {};
  
  for (const lang of ["en", "es", "de", "fr", "it"] as const) {
    const langData = section[lang];
    const merged = mergeWithEnglishFallback(langData, english);
    
    // Wrap with runtime safe Proxy handler
    (translations as any)[sectionKey][lang] = createSafeTranslationProxy(
      lang,
      sectionKey,
      merged,
      english
    );
  }
}
