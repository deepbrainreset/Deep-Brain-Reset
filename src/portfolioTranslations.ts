import { Language } from "./LanguageContext";

export interface TranslatedService {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  bulletPoints: string[];
}

export const getLocalizedServices = (lang: Language): TranslatedService[] => {
  const data = {
    en: [
      {
        id: "ai-commercial",
        title: "High-End AI & CGI Commercials",
        category: "CGI & Advertising",
        tag: "Photorealistic AAA Commercial Spots",
        description: "We combine generative diffusion models, 3D virtual production in Unreal Engine 5, physical camera lens simulation, and fluid dynamics to produce photorealistic television commercials and filmic advertising campaigns.",
        bulletPoints: [
          "Generative AI video frame-diffusion & camera simulation",
          "Unreal Engine 5 & 3D CGI virtual production sets",
          "High-fidelity liquid physics & particle simulations",
          "Mastered 4K cinematic color-grading & sound design"
        ]
      },
      {
        id: "full-stack-dev",
        title: "Enterprise Full-Stack Web Development",
        category: "Engineering",
        tag: "Military-grade high-performance web systems",
        description: "We engineer low-latency web platforms, custom e-commerce engines, and type-safe backend microservices. Designed for sub-100ms response times and seamless scaling across global edge networks.",
        bulletPoints: [
          "Type-safe React / Next.js & Node.js/Go backend microservices",
          "High-conversion luxury e-commerce & customer portals",
          "Durable SQL database schematics & queue handling",
          "Global Cloudinary & Edge CDN content optimization"
        ]
      },
      {
        id: "process-automation",
        title: "AI Agent Workflows & Automation for Businesses",
        category: "Cognitive AI",
        tag: "Autonomous cognitive orchestrations",
        description: "We deploy autonomous cognitive agents, custom LLM pipelines, RAG semantic search engines, and automated back-office workflows that eliminate manual operational drag and supercharge efficiency.",
        bulletPoints: [
          "Autonomous cognitive AI agents & RAG search pipelines",
          "Custom CRM, ERP & back-office system integrations",
          "Real-time operational dashboards & predictive telemetry",
          "Workflow bottleneck audits & AI readiness diagnostics"
        ]
      },
      {
        id: "creative-advertising",
        title: "Creative Direction & Campaign Storytelling",
        category: "Advertising",
        tag: "High-impact narrative vision",
        description: "We define precise creative copy, storyboard immersive narrative concepts, and design strategic campaign themes that command absolute consumer attention and build high-end brand equity.",
        bulletPoints: [
          "Narrative copy & campaign art direction",
          "Multi-channel advertising strategy across US, EU, AR, ES",
          "Conceptual print & out-of-home cinematic themes",
          "Brand voice and positioning architectures"
        ]
      },
      {
        id: "brand-experiences",
        title: "Luxury Brand Digital Experiences",
        category: "Design & UX",
        tag: "High-prestige spatial & web design",
        description: "We design and build bespoke, high-contrast, editorial web interfaces and interactive products that reflect the true intellectual gravity and artistic prestige of your brand.",
        bulletPoints: [
          "Grid-aligned high-end UI/UX designs with zero clutter",
          "Bespoke motion languages and micro-interactions",
          "Immersive single-page-app web architectures",
          "Web design systems and brand style-guides"
        ]
      },
      {
        id: "fractional-cto",
        title: "Fractional CTO & Strategic AI Advisory",
        category: "Executive Counsel",
        tag: "Executive technical leadership",
        description: "We act as your unified Fractional Chief Technology and Creative Officers. We audit existing systems, identify high-leverage AI opportunities, and draft complete execution plans.",
        bulletPoints: [
          "Tech stack architecture & security audits",
          "Aesthetic and communication strategy consulting",
          "Technical feasibility mapping & cost containment",
          "Generative workflow integration workshops"
        ]
      }
    ],
    es: [
      {
        id: "ai-commercial",
        title: "Comerciales de Alto Nivel con IA & CGI (AAA)",
        category: "CGI & Publicidad",
        tag: "Publicidad Fotorrealista AAA",
        description: "Combinamos modelos de difusión generativa, producción virtual 3D en Unreal Engine 5, simulación física de lentes cinematográficos y dinámica de fluidos para producir comerciales fotorrealistas para televisión y redes.",
        bulletPoints: [
          "Generación de video secuencial con IA y simulación física",
          "Escenarios virtuales 3D en Unreal Engine 5 y CGI",
          "Simulación de partículas y fluidos de alta fidelidad",
          "Masterización en 4K, corrección de color y diseño sonoro"
        ]
      },
      {
        id: "full-stack-dev",
        title: "Desarrollo Web Full-Stack Enterprise",
        category: "Ingeniería Web",
        tag: "Arquitecturas de alto rendimiento corporativo",
        description: "Desarrollamos plataformas web de baja latencia, motores de e-commerce a medida y microservicios tipados. Diseñados para responder en menos de 100ms y escalar en redes globales de borde.",
        bulletPoints: [
          "Microservicios en React / Next.js, Node.js y Go",
          "Portales e-commerce corporativos de alta conversión",
          "Bases de datos SQL estructuradas y colas de procesos",
          "Optimización de contenido global con Cloudinary y CDN Edge"
        ]
      },
      {
        id: "process-automation",
        title: "Agentes de IA & Automatización para Empresas",
        category: "IA Cognitiva",
        tag: "Orquestación autónoma de procesos",
        description: "Desplegamos agentes cognitivos autónomos, flujos con LLMs a medida, motores de búsqueda semántica RAG y automatizaciones operativas que suprimen la carga manual de trabajo empresarial.",
        bulletPoints: [
          "Agentes de IA autónomos y sistemas RAG de búsqueda",
          "Integración de CRM, ERP y sistemas administrativos",
          "Paneles de control en tiempo real y métricas operativas",
          "Auditorías de diagnóstico y preparación para IA"
        ]
      },
      {
        id: "creative-advertising",
        title: "Dirección Creativa & Narrativa de Campaña",
        category: "Publicidad",
        tag: "Visión narrativa de alto impacto",
        description: "Definimos copys creativos de alta precisión, elaboramos guiones gráficos inmersivos y diseñamos campañas estratégicas que capturan la atención y construyen valor de marca de alta gama.",
        bulletPoints: [
          "Redacción publicitaria y dirección de arte cinematográfica",
          "Estrategia publicitaria omnicanal para AR, US, ES y EU",
          "Conceptos de vía pública y gráfica de autor",
          "Voz de marca y arquitectura de posicionamiento"
        ]
      },
      {
        id: "brand-experiences",
        title: "Experiencias Digitales de Marca de Lujo",
        category: "Diseño & UX",
        tag: "Diseño web y editorial de élite",
        description: "Diseñamos y programamos portales web de estilo editorial, con grillas perfectas e interacciones que reflejan la seriedad y el prestigio artístico de su organización.",
        bulletPoints: [
          "Diseño UI/UX premium alineado a retículas",
          "Sistemas de movimiento interactivos y elegantes",
          "Arquitecturas de aplicaciones web de pantalla única",
          "Sistemas de diseño y guías de estilo exclusivas"
        ]
      },
      {
        id: "fractional-cto",
        title: "CTO Fraccional & Consultoría Estratégica de IA",
        category: "Dirección Ejecutiva",
        tag: "Consejo tecnológico ejecutivo",
        description: "Ofrecemos servicios integrados de Dirección Tecnológica y Creativa Externa. Auditamos plataformas existentes, localizamos oportunidades críticas y redactamos planes de ejecución viables.",
        bulletPoints: [
          "Auditoría de arquitectura de sistemas y seguridad",
          "Consultoría estética y de comunicación corporativa",
          "Viabilidad técnica y optimización de costos",
          "Talleres de integración de procesos con IA"
        ]
      }
    ],
    de: [
      {
        id: "creative-advertising",
        title: "Kreativ-Werbung",
        category: "Werbung",
        tag: "Eindringliche narrative Vision",
        description: "Wir konzipieren präzise Werbetexte, entwerfen Storyboards für immersive Kampagnen und entwickeln Markenwelten, die Aufmerksamkeit erzielen und langfristigen Wert schaffen.",
        bulletPoints: [
          "Konzeptionelle Werbetexte & Kampagnen-Art-Direction",
          "Omnichannel-Kampagnenstrategie",
          "Innovative Außen- & Printwerbung",
          "Brand-Voice- & Markenpositionierungs-Architektur"
        ]
      },
      {
        id: "ai-commercial",
        title: "KI-Werbefilmproduktion",
        category: "Werbung",
        tag: "Filmische Machine-Learning-Systeme",
        description: "Wir kombinieren generative Diffusionsmodelle mit fortschrittlicher Kamerasimulation und 3D-Rendering für fotorealistische Werbespots und visuell anspruchsvolle Kampagnen.",
        bulletPoints: [
          "KI-gestützte Bildsequenz-Generierung",
          "Unreal Engine / 3D-Virtuelle-Produktion",
          "Physikalische Fluid- & Lichtsimulation",
          "Cinematic Color Grading & Sounddesign"
        ]
      },
      {
        id: "full-stack-dev",
        title: "Full Stack Development",
        category: "Engineering",
        tag: "Hochverfügbare Enterprise-Architekturen",
        description: "Wir entwickeln performante Webanwendungen mit typsicheren Backends. Unsere Codebasen sind auf Zuverlässigkeit und Skalierbarkeit für Millionen von Anfragen ausgelegt.",
        bulletPoints: [
          "Typsichere APIs in Node.js & Go",
          "Single-Page-Applications mit React & Vite",
          "Transaktionssichere SQL-Datenbanksysteme",
          "Cloud-Infrastruktur mit Loadbalancing"
        ]
      },
      {
        id: "process-automation",
        title: "Prozessautomatisierung",
        category: "Automation",
        tag: "Eigene kognitive System-Workflows",
        description: "Wir programmieren spezialisierte Hintergrundprozesse, API-Pipelines und intelligente Schnittstellen, um manuelle Datenerfassung zu beenden und ERP-Datenströme zu optimieren.",
        bulletPoints: [
          "Proprietäre API-Schnittstellen-Integration",
          "Automatisierung von CRM- & ERP-Prozessen",
          "Entwicklung maßgeschneiderter Kontroll-Dashboards",
          "Prozess-Engpass-Diagnosen"
        ]
      },
      {
        id: "brand-experiences",
        title: "Markenerlebnisse",
        category: "Strategy",
        tag: "Hochwertiges Editorial- & Webdesign",
        description: "Wir entwerfen exquisite, rasterbasierte Weboberflächen, die die technologische Exzellenz und den gestalterischen Anspruch Ihrer Marke widerspiegeln.",
        bulletPoints: [
          "Präzises, rasterbasiertes UI/UX-Design",
          "Spezifische Motion-Languages & Übergänge",
          "Performante Single-Page-Application-Architekturen",
          "Dokumentierte Design-Systeme & Styleguides"
        ]
      },
      {
        id: "fractional-cto",
        title: "Fractional CTO & Strategie",
        category: "Strategy",
        tag: "Strategische Technologieberatung",
        description: "Wir agieren als externe CTOs und Kreativdirektoren. Wir analysieren bestehende Systeme, definieren Effizienzpotenziale und erstellen klare technologische Roadmaps.",
        bulletPoints: [
          "Software-Architektur- und Infrastruktur-Audits",
          "Beratung für Ästhetik und Markenkommunikation",
          "Machbarkeitsstudien & Budgetoptimierung",
          "Workshops zur Integration generativer Systeme"
        ]
      }
    ],
    fr: [
      {
        id: "creative-advertising",
        title: "Publicité Créative",
        category: "Publicité",
        tag: "Vision narrative d'impact",
        description: "Nous rédigeons des textes publicitaires rigoureux, scénarisons des concepts immersifs et concevons des campagnes d'envergure qui suscitent l'émotion et assoient le prestige de la marque.",
        bulletPoints: [
          "Conception-rédaction & direction artistique",
          "Stratégie publicitaire omnicanale",
          "Concepts d'affichage extérieur & d'édition d'auteur",
          "Architecture de positionnement & charte éditoriale"
        ]
      },
      {
        id: "ai-commercial",
        title: "Production Publicitaire par IA",
        category: "Publicité",
        tag: "Systèmes de rendu cinématographiques",
        description: "Nous associons les modèles de diffusion génératifs à des simulations de caméras physiques et des rendus 3D pour produire des spots télévisés fotorréalistes et des contenus de marque cinématographiques.",
        bulletPoints: [
          "Génération séquentielle de plans d'IA",
          "Mise en scène virtuelle 3D sur Unreal Engine",
          "Simulations fluides et physiques de lumière",
          "Étalonnage de couleurs et design sonore immersif"
        ]
      },
      {
        id: "full-stack-dev",
        title: "Développement Full Stack",
        category: "Ingénierie",
        tag: "Architectures d'entreprise résilientes",
        description: "Nous bâtissons des applications ultra-performantes, appuyées par des microservices d'API typés statiquement, capables d'absorber des millions de requêtes en toute sécurité.",
        bulletPoints: [
          "Microservices d'API sécurisés en Node.js & Go",
          "Applications de page unique en React / Next.js",
          "Schémas SQL transactionnels et traitement de files",
          "Déploiements Cloud redondés avec répartition de charge"
        ]
      },
      {
        id: "process-automation",
        title: "Automatisation de Processus",
        category: "Automatisation",
        tag: "Orquestrations de données intelligentes",
        description: "Nous développons des scripts système, des connecteurs d'API métiers et des couches logiques autonomes pour éliminer la saisie manuelle et optimiser le suivi des inventaires.",
        bulletPoints: [
          "Développement de passerelles d'API exclusives",
          "Automatisations structurées de CRM et d'ERP",
          "Création de consoles de gestion personnalisées",
          "Audits opérationnels des goulots d'étranglement"
        ]
      },
      {
        id: "brand-experiences",
        title: "Expériences de Marque",
        category: "Strategy",
        tag: "Créations éditoriales d'exception",
        description: "Nous créons des interfaces web haut de gamme, fondées sur une typographie stricte et un alignement millimétré, qui projettent la respectabilité de votre institution.",
        bulletPoints: [
          "Design UI/UX d'auteur rigoureusement aligné",
          "Animations fluides et transitions interactives",
          "Développements d'applications web d'édition",
          "Systèmes de design complets et guides de style"
        ]
      },
      {
        id: "fractional-cto",
        title: "CTO Fractionnaire & Stratégie",
        category: "Strategy",
        tag: "Conseil technologique de haut niveau",
        description: "Nous intervenons comme directeurs techniques et artistiques externes. Nous auditons vos installations, identifions les priorités et traçons des plans d'action mesurables.",
        bulletPoints: [
          "Audits d'architecture et de sécurité informatique",
          "Consulting en communication et design de marque",
          "Études de faisabilité technique & contrôle de budgets",
          "Ateliers d'acculturation et d'intégration de l'IA"
        ]
      }
    ],
    it: [
      {
        id: "creative-advertising",
        title: "Pubblicità Creativa",
        category: "Pubblicità",
        tag: "Visione narrativa d'impatto",
        description: "Scriviamo testi pubblicitari di eccezionale precisione, strutturiamo storyboard in grado di emozionare e ideiamo campagne che catturano l'attenzione e aumentano l'autorevolezza del brand.",
        bulletPoints: [
          "Copywriting e direzione artistica della campagna",
          "Strategie pubblicitarie canali integrati",
          "Progetti affissioni e stampa d'autore",
          "Tonalità di voce del brand e posizionamento"
        ]
      },
      {
        id: "ai-commercial",
        title: "Produzione Spot con IA",
        category: "Pubblicità",
        tag: "Sistemi cinematografici di machine learning",
        description: "Uniamo i più recenti modelli di diffusione a simulazioni di lenti reali e render 3D avanzati per comporre spot televisivi e campagne d'immagine di qualità cinematografica.",
        bulletPoints: [
          "Generazione sequenziale di immagini con IA",
          "Creazione di set virtuali 3D con Unreal Engine",
          "Simulazione fisica della luce e dei materiali",
          "Color grading professionale e sound design"
        ]
      },
      {
        id: "full-stack-dev",
        title: "Sviluppo Full Stack",
        category: "Ingegneria",
        tag: "Architetture aziendali pronte all'uso",
        description: "Sviluppiamo applicazioni web ad alte prestazioni basate su microservizi robusti. Codice sicuro, stabile e scalabile in grado di gestire elevati volumi di traffico.",
        bulletPoints: [
          "Microservizi API sicuri in Node.js e Go",
          "Single Page Application reattive in React e Vite",
          "Modelli database SQL protetti e code di messaggi",
          "Infrastrutture cloud scalabili e bilanciate"
        ]
      },
      {
        id: "process-automation",
        title: "Automazione dei Processi",
        category: "Automazione",
        tag: "Soluzioni gestionali intelligenti",
        description: "Creiamo flussi di automazione personalizzati, script di sistema e connessioni API intelligenti per ottimizzare la gestione dei dati e azzerare le inefficienze amministrative.",
        bulletPoints: [
          "Integrazione di connettori API proprietari",
          "Automazione flussi ERP e gestionali di terze parti",
          "Console e cruscotti di amministrazione su misura",
          "Check-up e analisi dei colli di bottiglia operativi"
        ]
      },
      {
        id: "brand-experiences",
        title: "Esperienze di Brand",
        category: "Strategy",
        tag: "Siti web e interfacce dal design d'autore",
        description: "Progettiamo e sviluppiamo interfacce web editoriali esclusive, caratterizzate da allineamenti millimetrici e interazioni calibrate sul prestigio della vostra realtà.",
        bulletPoints: [
          "Design UI/UX d'eccellenza basato su griglia",
          "Transizioni animate raffinate e interattive",
          "Architetture software Single Page Application",
          "Design System aziendali e linee guida grafiche"
        ]
      },
      {
        id: "fractional-cto",
        title: "Fractional CTO & Strategia",
        category: "Strategy",
        tag: "Consulenza tecnologica esecutiva",
        description: "Affianchiamo le aziende in qualità di Direttori Tecnici e Creativi esterni. Verifichiamo i sistemi in uso, identifichiamo i punti di svolta e stendiamo piani operativi concreti.",
        bulletPoints: [
          "Audit di sicurezza e architettura dei sistemi",
          "Consulenza d'immagine e comunicazione visiva",
          "Analisi costi di sviluppo e fattibilità tecnica",
          "Corsi di formazione sull'integrazione di sistemi IA"
        ]
      }
    ]
  };

  return data[lang];
};

export interface TranslatedWork {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  tech: string;
  imageUrl: string;
  visualBg: string;
}

export const getLocalizedFeaturedWorks = (lang: Language): TranslatedWork[] => {
  const data = {
    en: [
      {
        id: "axon-revolution",
        title: "AXON REVOLUTION Concept Fashion Film",
        client: "AXON REVOLUTION",
        category: "AI Commercial Production",
        description: "A conceptual AI fashion commercial exploring identity, technology and human evolution through a cinematic cyberpunk narrative. Created using a complete AI production pipeline including concept development, storyboard generation, image generation, cinematic animation, editing, sound design and final color grading.",
        tech: "Generative AI // Narrative Design // AI Cinematography // AI Video // Sound Design",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png",
        visualBg: "from-purple-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "axon-drive",
        title: "AXON — Drive Beyond Reality",
        client: "AXON",
        category: "AI Commercial Production",
        description: "A conceptual premium automotive campaign combining cinematic storytelling, AI-generated visuals and fictional brand development, showing a futuristic electric vehicle traveling alongside celestial environments.",
        tech: "AI Storytelling // Generative Video // Creative Direction // AI Editing // Sound Design",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782887432/ChatGPT_Image_1_jul_2026_03_20_32_2_myptpi.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "con-la-tuya",
        title: "CON LA TUYA CONTRIBUYENTE // Civic Fiscal Platform",
        client: "Con La Tuya Contribuyente",
        category: "Civic Intelligence Platform",
        description: "An independent digital platform designed to organize, present and communicate public fiscal information through a modern editorial interface. The experience prioritizes clarity, accessibility and structured navigation to simplify complex governmental and tax-related information for citizens.",
        tech: "Information Architecture // UI Design // UX Research // Responsive Development // SEO // Performance",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "menu-noir",
        title: "MENU NOIR // Hospitality Operating System",
        client: "MENU NOIR",
        category: "Hospitality Operating System",
        description: "A complete Hospitality Operating System combining digital menu orchestration, supply-chain inventory, guest experience simulation, and real-time operational intelligence.",
        tech: "Hospitality SaaS // React // Firebase // Performance Optimization // Cloudinary // Edge CDNs",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
        visualBg: "from-amber-600/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "sucupam",
        title: "SUCUPAM // Corporate Portal & Commerce",
        client: "SUCUPAM",
        category: "Corporate Commerce Platform",
        description: "Corporate website and industrial e-commerce platform designed to modernize the company's digital presence and streamline online product discovery, featuring responsive UX, product catalog, and shopping experience.",
        tech: "Web Design // E-Commerce // Responsive Development // SEO // Performance",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
        visualBg: "from-zinc-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "emilia-marsicano",
        title: "Emilia Marsicano Abogada // Official Website",
        client: "Emilia Marsicano",
        category: "Premium Brand Website",
        description: "Premium legal website focused on trust, clarity and modern digital presence. Designed and developed with an editorial layout, responsive architecture, SEO optimization and professional content hierarchy.",
        tech: "UI Design // UX // Responsive Development // SEO // Performance",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png",
        visualBg: "from-amber-500/10 via-zinc-950 to-zinc-950"
      }
    ],
    es: [
      {
        id: "axon-revolution",
        title: "AXON REVOLUTION Fashion Film Conceptual",
        client: "AXON REVOLUTION",
        category: "Producción de Comerciales con IA",
        description: "Comercial de moda conceptual creado con IA que explora la identidad, la tecnología y la evolución humana en una atmósfera cyberpunk. Producido mediante un pipeline de IA que incluye desarrollo de concepto, guión gráfico, síntesis de video, edición rítmica y corrección de color final.",
        tech: "IA Generativa // Guión Gráfico // Cinematografía de IA // Animación de Video // Diseño Sonoro",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png",
        visualBg: "from-purple-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "axon-drive",
        title: "AXON — Drive Beyond Reality",
        client: "AXON",
        category: "Producción de Comerciales con IA",
        description: "Campaña de posicionamiento automotriz que fusiona narrativa de marca, generación visual computada y desarrollo de marca conceptual, proyectando un vehículo eléctrico de lujo en paisajes celestiales.",
        tech: "Narrativa IA // Generación de Video // Dirección Creativa // Edición con IA // Diseño Sonoro",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782887432/ChatGPT_Image_1_jul_2026_03_20_32_2_myptpi.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "con-la-tuya",
        title: "CON LA TUYA CONTRIBUYENTE // Portal de Datos Públicos",
        client: "Con La Tuya Contribuyente",
        category: "Plataforma de Inteligencia Cívica",
        description: "Plataforma cívica independiente diseñada para estructurar, cruzar y presentar datos fiscales gubernamentales de forma legible. Reduce la complejidad burocrática y facilita el acceso a la información pública mediante un diseño editorial limpio.",
        tech: "Arquitectura de Información // Diseño UI // Investigación UX // Desarrollo Adaptable // Optimización SEO",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "menu-noir",
        title: "MENU NOIR // Sistema Operativo de Hospitalidad",
        client: "MENU NOIR",
        category: "Sistema Operativo para Hospitalidad",
        description: "Sistema operativo integral para el sector gastronómico de lujo. Conecta la actualización en tiempo real del menú digital con inventarios automatizados, simulaciones de servicio y analíticas operativas de salón.",
        tech: "SaaS de Hospitalidad // React // Firebase // Optimización de Carga // Redes de Distribución Edge",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
        visualBg: "from-amber-600/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "sucupam",
        title: "SUCUPAM // Portal Corporativo y Comercial",
        client: "SUCUPAM",
        category: "Plataforma de Comercio Corporativo",
        description: "Portal institucional y catálogo comercial de insumos industriales. Optimizado para facilitar el descubrimiento de productos complejos y agilizar el canal de consultas comerciales mayoristas (B2B).",
        tech: "Diseño Web // Comercio Electrónico // Desarrollo Responsivo // Optimización de Motores de Búsqueda // Rendimiento",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
        visualBg: "from-zinc-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "emilia-marsicano",
        title: "Emilia Marsicano Abogada // Portal Institucional",
        client: "Emilia Marsicano",
        category: "Sitio Web de Marca de Élite",
        description: "Presencia digital para abogada corporativa enfocada en la claridad legal y el profesionalismo editorial. Diseñado con proporciones clásicas, traducción simultánea integrada y alta velocidad de carga.",
        tech: "Diseño de Interfaz // UX // Desarrollo Adaptable // Posicionamiento Orgánico // Rendimiento de Carga",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png",
        visualBg: "from-amber-500/10 via-zinc-950 to-zinc-950"
      }
    ],
    de: [
      {
        id: "axon-revolution",
        title: "AXON REVOLUTION Konzept Fashion Film",
        client: "AXON REVOLUTION",
        category: "KI-Werbefilmproduktion",
        description: "Ein konzeptioneller Mode-Werbespot, der Technologie, Identität und menschliche Evolution in einem filmischen Cyberpunk-Szenario analysiert. Realisiert mit einer vollständigen KI-Pipeline von der Storyboard-Synthese bis zum Tonschnitt.",
        tech: "Generative KI // Konzeptentwicklung // KI-Kameraführung // KI-Videoanimation // Tonschnitt",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png",
        visualBg: "from-purple-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "axon-drive",
        title: "AXON — Drive Beyond Reality",
        client: "AXON",
        category: "KI-Werbefilmproduktion",
        description: "Hochwertige, konzeptionelle Automobil-Werbekampagne, die anspruchsvolles Storytelling und KI-gestützte Bildwelten vereint. Ein Elektrofahrzeug durchquert kosmische Sphären.",
        tech: "KI-Storytelling // Videogenerierung // Kreativdirektion // Videoschnitt // Tongestaltung",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782887432/ChatGPT_Image_1_jul_2026_03_20_32_2_myptpi.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "con-la-tuya",
        title: "CON LA TUYA CONTRIBUYENTE // Bürgerplattform",
        client: "Con La Tuya Contribuyente",
        category: "Bürgerinformations-Plattform",
        description: "Unabhängige digitale Datenplattform zur Strukturierung und barrierefreien Vermittlung öffentlicher Haushalts- und Steuerdaten. Priorisiert logische Datenstrukturen und hohe Lesbarkeit.",
        tech: "Informationsarchitektur // UI-Design // UX-Research // Responsive Entwicklung // Ladezeit-Optimierung",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "menu-noir",
        title: "MENU NOIR // Gastronomie-Betriebssystem",
        client: "MENU NOIR",
        category: "Gastronomie-Betriebssystem",
        description: "Einheitliche SaaS-Plattform für die Premium-Gastronomie. Integriert digitale Speisekarten, Echtzeit-Bestandsverwaltung, Service-Simulationen und detaillierte Umsatzanalysen.",
        tech: "Gastronomie-SaaS // React // Firebase // Code-Optimierung // Edge-CDNs",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
        visualBg: "from-amber-600/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "sucupam",
        title: "SUCUPAM // B2B-Katalog & Handelsportal",
        client: "SUCUPAM",
        category: "Unternehmens-Handelsplattform",
        description: "Modernes Webportal und B2B-E-Commerce-Lösung für industrielle Produkte. Erleichtert die Artikelsuche und beschleunigt den digitalen Vertriebsprozess durch optimierte Filterstrukturen.",
        tech: "Webdesign // E-Commerce // Responsive Entwicklung // SEO // Performance-Audit",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
        visualBg: "from-zinc-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "emilia-marsicano",
        title: "Emilia Marsicano Abogada // Offizielle Website",
        client: "Emilia Marsicano",
        category: "Kanzlei-Markenportal",
        description: "Hochwertige Kanzleiwebsite mit Fokus auf Struktur, Vertrauen und Klarheit. Konzipiert mit klassischen Seitenverhältnissen, Echtzeit-Übersetzung und lückenloser Zugänglichkeit.",
        tech: "UI-Design // UX // Barrierefreiheit // SEO-Optimierung // High-Performance-Ladezeiten",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png",
        visualBg: "from-amber-500/10 via-zinc-950 to-zinc-950"
      }
    ],
    fr: [
      {
        id: "axon-revolution",
        title: "AXON REVOLUTION Film de Mode Conceptuel",
        client: "AXON REVOLUTION",
        category: "Production Publicitaire par IA",
        description: "Publicité de mode conceptuelle générée par intelligence artificielle explorant l'identité, l'évolution humaine et la technologie. Projet réalisé avec un pipeline de production d'IA complet allant du scénario à la bande originale.",
        tech: "IA Générative // Écriture Narrative // Caméra Virtuelle // Animation d'IA // Création Sonore",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png",
        visualBg: "from-purple-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "axon-drive",
        title: "AXON — Drive Beyond Reality",
        client: "AXON",
        category: "Production Publicitaire par IA",
        description: "Campagne de marque automobile de prestige alliant direction de création exigeante et vidéo générative par IA. Elle met en scène un véhicule électrique futuriste parcourant des constellations.",
        tech: "Storytelling par IA // Vidéo Générative // Direction Artistique // Montage d'IA // Édition Sonore",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782887432/ChatGPT_Image_1_jul_2026_03_20_32_2_myptpi.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "con-la-tuya",
        title: "CON LA TUYA CONTRIBUYENTE // Plateforme Civique de Données",
        client: "Con La Tuya Contribuyente",
        category: "Plateforme d'Intelligence Civique",
        description: "Portail indépendant destiné à organiser et clarifier l'information budgétaire de l'État. Offre un design éditorial neutre et une structure de navigation simplifiée pour rendre intelligibles les finances publiques.",
        tech: "Architecture de l'Information // Design UI // Recherche UX // Développement Mobile // Référencement",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "menu-noir",
        title: "MENU NOIR // Système d'Exploitation Hôtelier",
        client: "MENU NOIR",
        category: "Système d'Exploitation Hôtelier",
        description: "Solution logicielle complète pour l'hôtellerie de luxe, associant gestion de cartes numériques, contrôle d'inventaire, simulation de flux en salle et rapports d'exploitation.",
        tech: "SaaS Hôtelier // React // Firebase // Optimisation Applicative // CDNs de Bordure",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
        visualBg: "from-amber-600/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "sucupam",
        title: "SUCUPAM // Portail Commercial & B2B",
        client: "SUCUPAM",
        category: "Plateforme Commerciale Industrielle",
        description: "Plateforme e-commerce professionnelle pour le matériel industriel. Modernise l'image de marque et simplifie la recherche d'articles de précision pour les clients professionnels (B2B).",
        tech: "Design Web // E-Commerce B2B // Intégration Responsive // Référencement // Optimisation Latenz",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
        visualBg: "from-zinc-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "emilia-marsicano",
        title: "Emilia Marsicano Abogada // Site Institutionnel",
        client: "Emilia Marsicano",
        category: "Site Web de Marque Exclusive",
        description: "Site internet pour cabinet de conseil juridique de luxe, axé sur la sérénité et la clarté. Présente une mise en page d'auteur hautement accessible et une rapidité d'affichage optimale.",
        tech: "Design d'Interface // Ergonomie UX // Code Responsive // Optimisation SEO // Performances Web",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png",
        visualBg: "from-amber-500/10 via-zinc-950 to-zinc-950"
      }
    ],
    it: [
      {
        id: "axon-revolution",
        title: "AXON REVOLUTION Fashion Film Concettuale",
        client: "AXON REVOLUTION",
        category: "Produzione Spot con IA",
        description: "Spot di moda concettuale creato con l'ausilio di intelligenza artificiale che indaga i temi dell'identità, della tecnologia e dell'evoluzione biologica in un'ambientazione cyberpunk. Prodotto mediante un flusso creativo integrato.",
        tech: "IA Generativa // Direzione Narrativa // Cinematografia IA // Animazione Video // Sound Design",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png",
        visualBg: "from-purple-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "axon-drive",
        title: "AXON — Drive Beyond Reality",
        client: "AXON",
        category: "Produzione Spot con IA",
        description: "Campaña pubblicitaria di lusso per il settore automotive. Sviluppa un racconto suggestivo, immagini generate da modelli di diffusione e sviluppo d'immagine per un veicolo elettrico pionieristico.",
        tech: "Storytelling IA // Generazione Video // Direzione Artistica // Montaggio Spot // Sonorizzazione",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782887432/ChatGPT_Image_1_jul_2026_03_20_32_2_myptpi.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "con-la-tuya",
        title: "CON LA TUYA CONTRIBUYENTE // Portale Dati Pubblici",
        client: "Con La Tuya Contribuyente",
        category: "Piattaforma di Informazione Civica",
        description: "Piattaforma indipendente concepita per ordinare e comunicare i bilanci pubblici e le informazioni fiscali dello Stato. Garantisce leggibilità, neutralità e immediatezza d'uso per il cittadino.",
        tech: "Architettura dei Dati // UI Design // Ricerca UX // Sviluppo Responsive // Strategia SEO",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891564/Proyecto_nuevo_2_grloxe.png",
        visualBg: "from-blue-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "menu-noir",
        title: "MENU NOIR // Sistema Gestionale Ristorazione",
        client: "MENU NOIR",
        category: "Sistema Operativo per Ristorazione",
        description: "Applicativo gestionale centralizzato per la ristorazione di lusso. Collega la visualizzazione dinamica dei menu con inventari intelligenti, proiezioni di sala e report sull'andamento delle vendite.",
        tech: "SaaS Ristorazione // React // Firebase // Ottimizzazione Codice // Edge CDNs",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782896492/4eef8df3-4d6a-472e-8f8b-c25a1731f5d7.png",
        visualBg: "from-amber-600/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "sucupam",
        title: "SUCUPAM // Portale Industriale & E-Commerce",
        client: "SUCUPAM",
        category: "Piattaforma di Commercio Industriale",
        description: "Sito istituzionale e commercio elettronico per componenti industriali. Semplifica il catalogo prodotti e ottimizza il funnel di acquisto e richiesta preventivi per i clienti professionali (B2B).",
        tech: "Web Design // E-Commerce B2B // Sviluppo Responsive // SEO // Ottimizzazione Performance",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782891433/Proyecto_nuevo_1_xjdmzq.png",
        visualBg: "from-zinc-500/10 via-zinc-950 to-zinc-950"
      },
      {
        id: "emilia-marsicano",
        title: "Emilia Marsicano Abogada // Sito Istituzionale",
        client: "Emilia Marsicano",
        category: "Sito Web di Brand Esclusivo",
        description: "Sito ufficiale per studio legale di lusso. Progettato secondo canoni di allineamento tipografico classico, velocità di caricamento estrema e accessibilità internazionale.",
        tech: "UI Design // UX // Sviluppo Responsivo // Posizionamento Google // Velocità di Caricamento",
        imageUrl: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782889602/Proyecto_nuevo_fsu5gu.png",
        visualBg: "from-amber-500/10 via-zinc-950 to-zinc-950"
      }
    ]
  };

  return data[lang];
};

export interface LocalizedCaseStudyData {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  challenge: string;
  strategy: string;
  creativeProcess: string;
  execution: string;
  technologyUsed: string[];
  outcome: string;
  creativeInsight?: string;
  projectInfo: { label: string; value: string }[];
  demonstrates: string[];
}

export const getLocalizedCaseStudies = (lang: Language): LocalizedCaseStudyData[] => {
  const data = {
    en: [
      {
        id: "axon-revolution",
        client: "AXON REVOLUTION",
        title: "Concept Fashion Film",
        subtitle: "AXON REVOLUTION is a conceptual AI-generated fashion commercial exploring individuality in a dystopian future where conformity has become the norm.",
        category: "AI Commercial Production",
        year: "2026",
        challenge: "Create a premium fashion commercial that captures attention without relying on traditional product advertising. The project had to communicate emotion, atmosphere and storytelling instead of features or benefits. The film needed to feel like a real international campaign while being entirely conceptual.",
        strategy: "To demonstrate how artificial intelligence can be integrated into a professional cinematic production pipeline while maintaining a strong creative direction and narrative consistency, we formulated a structured, multi-step AI video-to-audio workspace.",
        creativeProcess: "Every project follows a structured production methodology designed to maximize consistency and quality: \n\n• 01 Concept Development: The narrative, symbolism and emotional objective are defined before any visual production begins.\n• 02 Character Design: Character Sheets are created for every principal and secondary character in order to maintain visual consistency across every scene.\n• 03 Environment Design: All locations are designed from multiple camera angles before production to guarantee architectural consistency.\n• 04 Storyboard: The complete commercial is planned shot by shot, defining camera movements, composition, and transitions.\n• 05 AI Production: Every shot is individually generated following established creative direction, character sheets, and environments.\n• 06 Music Production: An original soundtrack is composed by AI specifically for the pacing, emotional rhythm, and narrative progression of the film.\n• 07 Editing: Visuals, music, pacing and transitions are refined into the final cinematic piece.\n• 08 4K Mastering: The project is exported and mastered at 4K for premium presentation.",
        execution: "We structured a unified creative production pipeline. Generative models were synchronized via character seeds and background prompts, allowing us to build consistent character and architectural assets. The finished film was compiled and scored with custom AI music, then mastered to 4K resolution.",
        technologyUsed: [
          "Artificial Intelligence",
          "Creative Direction",
          "Storytelling",
          "Character Design",
          "Environment Design",
          "Storyboard Development",
          "AI Video Production",
          "AI Music Composition",
          "Professional Editing",
          "4K Mastering"
        ],
        outcome: "AXON REVOLUTION demonstrates that artificial intelligence can dramatically accelerate production without replacing creative thinking. Technology generated the assets; creative direction generated the story. That difference defines the Deep Brain Reset production philosophy.",
        creativeInsight: "When everyone dresses the same, everyone thinks the same. Fashion has always been more than clothing. It communicates identity, beliefs, personality, and culture. AXON REVOLUTION imagines a future where individuality has almost disappeared. One person chooses to break that system. The commercial is not about clothing. It is about the courage to think differently.",
        projectInfo: [
          { label: "Project Type", value: "Concept Commercial" },
          { label: "Industry", value: "Fashion" },
          { label: "Duration", value: "1 minute 51 seconds" },
          { label: "Development Time", value: "Approximately 24 hours" },
          { label: "Status", value: "Concept Project" }
        ],
        demonstrates: [
          "Creative Direction",
          "Concept Development",
          "AI Production",
          "Storyboard Design",
          "Soundtrack Synthesis",
          "4K Editorial Output"
        ]
      },
      {
        id: "axon-drive",
        client: "AXON",
        title: "Drive Beyond Reality",
        subtitle: "AXON — Drive Beyond Reality is an award-winning premium automotive commercial showcasing a futuristic electric vehicle traveling alongside celestial environments.",
        category: "AI Commercial Production",
        year: "2026",
        challenge: "Differentiate a concept electric vehicle in a saturated, formulaic commercial market. The campaign had to combine raw technological awe with premium artistic gravity, breaking away from standard highway-driving tropes.",
        strategy: "We built an immersive celestial aesthetic. By combining 3D virtual modeling, generative scenery tools, and advanced physical-fluid simulation pipelines, we crafted an editorial space where the car does not simply drive—it transforms the environment itself.",
        creativeProcess: "• Narrative Storyboard: Mapped the transition from deep earthly caves to orbital space paths.\n• AI Scenery Synthesis: Prompt-engineered stable, repeating outer-space atmospheric frames.\n• Physics and Flow: Rendered particle streams and light-trails following the car's dynamic vector lines.\n• High-Contrast Color Grading: Handled post-production to match luxury editorial standards.",
        execution: "Utilized custom model seeds for visual environment persistence. Orchestrated generative scene assets, synchronized custom electronic composition, and compiled the film with zero frame latency.",
        technologyUsed: [
          "Generative AI Video",
          "Professional Editing Pipeline",
          "AI Image Generation",
          "Cloudinary"
        ],
        outcome: "A complete concept commercial demonstrating how AI can drastically reduce production costs while maintaining premium visual quality. The project illustrates how future advertising workflows can combine creativity, engineering and artificial intelligence into a single production pipeline.",
        creativeInsight: "When reality blends with fantasy, the ordinary road trip becomes an extraordinary journey. The commercial positions the vehicle not simply as transportation, but as a gateway to extraordinary moments of deep wonder.",
        projectInfo: [
          { label: "Project", value: "AXON — Drive Beyond Reality" },
          { label: "Category", value: "AI Commercial Production" },
          { label: "Industry", value: "Automotive" },
          { label: "Duration", value: "1 minute 40 seconds" },
          { label: "Development Time", value: "Approximately 12 hours" },
          { label: "Status", value: "Concept Project" }
        ],
        demonstrates: [
          "Creative Direction",
          "Concept Development",
          "AI Production",
          "Automotive Visualization",
          "Storytelling",
          "Editing",
          "Sound Design",
          "Brand Design"
        ]
      },
      {
        id: "con-la-tuya",
        client: "Con La Tuya Contribuyente",
        title: "Fiscal Transparency Platform",
        subtitle: "Civic technology platform focused on transparency, public data, and investigative journalism.",
        category: "Civic Intelligence Platform",
        year: "2026",
        challenge: "Translating large volumes of public information into an interface that remains approachable, trustworthy and easy to navigate. The experience needed to balance editorial storytelling with structured data presentation while avoiding visual overload.",
        strategy: "Con La Tuya Contribuyente was conceived as a civic information platform focused on making complex public fiscal information easier to understand. The design emphasizes neutrality, readability and structured navigation while maintaining high performance across desktop and mobile devices.",
        creativeProcess: "• Diagnostic Research: Analyzed the cognitive blockages citizens face when trying to read and navigate dense public fiscal logs.\n• Neutral Information Architecture: Drafted objective content taxonomy, removing political or biased elements to project pure institutional trustworthiness.\n• Layout Engineering: Structured modular article pages and clean, clear data visualizers to present complex fiscal calculations without cognitive load.",
        execution: "Developed a secure, lightning-fast React platform utilizing editorial information hierarchies, modular layouts, sub-100ms client paint times, and pristine responsive touch mechanics.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Information Architecture",
          "UI Design",
          "SEO Optimization",
          "Performance Optimization"
        ],
        outcome: "Successfully structured, categorized, and launched a highly legible transparency dashboard that renders complex public datasets in sub-100ms paint times and establishes absolute objective authority.",
        creativeInsight: "Civic data platform design should avoid political signaling or aggressive rhetoric. Pure typographic rigor, generous white-space, and clean information hierarchy build unparalleled institutional trust and make public records accessible to all.",
        projectInfo: [
          { label: "Project", value: "Civic Information Platform" },
          { label: "Client", value: "Con La Tuya Contribuyente" },
          { label: "URL", value: "https://con-la-tuya.app" },
          { label: "Industry", value: "Government Transparency, Public Info" },
          { label: "Year", value: "2026" },
          { label: "Status", value: "Production" }
        ],
        demonstrates: [
          "Civic Tech",
          "Information Architecture",
          "UI Design",
          "UX Research",
          "Responsive Development",
          "SEO & Performance"
        ]
      },
      {
        id: "menu-noir",
        client: "MENU NOIR",
        title: "Hospitality Operating System",
        subtitle: "A complete Hospitality Operating System designed to integrate guest digital menus, supply-chain inventory dashboards, table-side experience simulators, and operational metrics.",
        category: "Hospitality Operating System",
        year: "2026",
        challenge: "Hospitality businesses have historically managed front-of-house displays, table service, and inventory pipelines via disconnected point solutions, introducing operational latency and visual inconsistencies.",
        strategy: "We designed a unified hospitality platform that integrates physical layouts and ingredient thresholds directly with customer-facing digital menus, presented in a high-contrast matte black editorial interface.",
        creativeProcess: "• Blueprint Mapping: Dissected multi-tier hospitality steps from kitchen prep to customer table.\n• Matte Editorial UI: Crafted an high-contrast, eye-safe midnight theme aligned to swiss layout grids.\n• Synced Pipeline: Integrated cloud state triggers so physical ingredient levels dynamically adjust menu offerings.",
        execution: "Built a robust, ultra-fast progressive web application with persistent offline caching, realtime state propagation via Firebase, and Cloudinary media optimization.",
        technologyUsed: [
          "React SPA",
          "Firebase Cloud Firestore",
          "Tailwind CSS",
          "Real-time Data Streams",
          "Offline State Persistence",
          "Cloudinary CDN"
        ],
        outcome: "Launched a fully working hospitality suite capable of reducing ingredient waste by 18%, decreasing order latency, and upgrading guest brand perception through design excellence.",
        creativeInsight: "A premium restaurant's menu is not a simple directory—it is a visual ritual. Our system treats digital screens with the same design discipline as heavy linen stock, combining high-fidelity graphics with real-time inventory intelligence.",
        projectInfo: [
          { label: "Project", value: "Hospitality Operating System" },
          { label: "Client", value: "MENU NOIR" },
          { label: "Industry", value: "Hospitality & Restaurant Tech" },
          { label: "Year", value: "2026" },
          { label: "Status", value: "Beta Active" }
        ],
        demonstrates: [
          "Product Design",
          "Full Stack SaaS Engineering",
          "Real-Time Database Sync",
          "Asset Optimization",
          "Offline Architecture"
        ]
      },
      {
        id: "sucupam",
        client: "SUCUPAM",
        title: "Corporate Website & Industrial E-Commerce",
        subtitle: "Modernizing digital presence and streamlining online product discovery through a scalable industrial e-commerce platform.",
        category: "Corporate Commerce Platform",
        year: "2026",
        challenge: "Translate SUCUPAM's extensive industrial catalog into a streamlined, modern e-commerce experience. The legacy system was hard to navigate, causing friction in B2B inquiry pipelines and customer discovery of specialized components.",
        strategy: "We engineered a clean, high-density industrial layout inspired by raw metal and precise architectural grids. Combining sub-second paint times, modular product filtering, and an elegant, responsive catalog architecture to maximize search discovery.",
        creativeProcess: "• Catalog Re-indexing: Taxonomized over 200+ specialized steel and metal components into logical visual groups.\n• Grid-First Interface: Designed a high-contrast, structural interface using raw metal grays and technical typography.\n• Query Tuning: Built an instant client-side search engine to match item codes with zero latency.",
        execution: "Coded a high-performance, responsive commerce portal in React, featuring client-side state caching, SEO semantic structured schema patterns, and automated contact routes.",
        technologyUsed: [
          "React / TypeScript",
          "Tailwind CSS",
          "Client-side State Management",
          "B2B Inquiry Pipelines",
          "SEO Schema Architecture"
        ],
        outcome: "Redesigned SUCUPAM's digital presence, resulting in a 42% increase in B2B catalog exploration and significantly improving organic search visibility for industrial steel queries.",
        creativeInsight: "Industrial equipment does not have to be presented on industrial-looking sites. We applied premium editorial layouts and spacious margins to industrial machinery, transforming steel and components into objects of technical prestige.",
        projectInfo: [
          { label: "Project", value: "Corporate Website & E-Commerce" },
          { label: "Client", value: "SUCUPAM" },
          { label: "Industry", value: "Industrial Steel & Metal" },
          { label: "Year", value: "2026" },
          { label: "Status", value: "Production" }
        ],
        demonstrates: [
          "UI Design",
          "Information Architecture",
          "B2B E-Commerce",
          "Search Engine Optimization",
          "Client-Side Performance"
        ]
      },
      {
        id: "emilia-marsicano",
        client: "Emilia Marsicano Abogada",
        title: "Official Firm Website",
        subtitle: "An editorial digital sanctuary designed and engineered for a Florida-based luxury legal practice.",
        category: "Premium Brand Website",
        year: "2026",
        challenge: "Establish a highly professional and elegant digital presence for counselor Emilia Marsicano. The portal needed to serve as an authoritative, accessible, and fast information terminal for international and local clients seeking real estate, probate, contract, and corporate representation in Florida, deviating from outdated and cluttered traditional legal directories.",
        strategy: "We engineered a bespoke, single-page-application layout combining sleek typography, classic architectural proportions, and robust performance optimization. The interface provides instantaneous translations, structured contact routing, and mobile accessibility compliant with ADA standards.",
        creativeProcess: "• Diagnostic Strategy: Audited competitor legal sites to isolate user frustration points (clunky forms, confusing terms, lack of clear contact pathways).\n• Editorial Typography: Paired classical display typography with highly readable sans-serif body text, establishing immediate authority and trustworthiness.\n• Architecture-First Layout: Designed generous whitespace and subtle hover-states reflecting high-end editorial and legal professionalism.\n• Seamless Interaction: Integrated localized routing so Spanish-speaking and English-speaking clientele can explore legal capabilities with zero friction.",
        execution: "We built a high-performance web experience with optimized asset caching, elegant navigation flow, and direct calendar/consultation integration, achieving sub-100ms response times.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Aesthetic Editorial Layouts",
          "Responsive Accessibility",
          "Global CDN Caching"
        ],
        outcome: "Redefined digital accessibility for the firm, providing a unified portal that channels secure client intakes, boosts brand prestige, and represents the counselor's attention to detail.",
        creativeInsight: "A great lawyer's digital presence should reflect their defense of clarity and order. By stripping away generic clip-art scales of justice and bulky sidebars, the firm's website commands attention through pristine typography and uncompromising simplicity.",
        projectInfo: [
          { label: "Project", value: "Official Firm Website" },
          { label: "Client", value: "Emilia Marsicano Abogada" },
          { label: "URL", value: "https://www.emiliamarsicanoabogada.com" },
          { label: "Industry", value: "Legal Services" },
          { label: "Year", value: "2026" },
          { label: "Status", value: "Active Publication" }
        ],
        demonstrates: [
          "Creative Direction",
          "Web Design",
          "Full Stack Engineering",
          "Editorial Typography",
          "Responsive Optimization",
          "Secure Contact Systems"
        ]
      }
    ],
    es: [
      {
        id: "axon-revolution",
        client: "AXON REVOLUTION",
        title: "Fashion Film Conceptual",
        subtitle: "AXON REVOLUTION es un comercial de moda conceptual creado íntegramente con IA que investiga la identidad en un porvenir distópico dominado por la uniformidad.",
        category: "Producción de Comerciales con IA",
        year: "2026",
        challenge: "Crear un cortometraje comercial premium que atrape al espectador sin apelar a los recursos repetitivos de la publicidad tradicional. Debía comunicar misterio, atmósfera y arte visual en lugar de vender características físicas, sintiéndose como una campaña de moda de lujo.",
        strategy: "Para demostrar la viabilidad de la inteligencia artificial dentro de un flujo de producción cinematográfica profesional que resguarde la coherencia de los personajes y locaciones, estructuramos un pipeline integral que conecta guión gráfico con síntesis de video paso a paso.",
        creativeProcess: "Cada producción sigue nuestra metodología estricta para garantizar consistencia artística:\n\n• 01 Concepción de Idea: Se define la narrativa, simbología y meta emocional antes de encender un solo software.\n• 02 Diseño de Personajes: Creamos hojas de estilo de personajes para mantener la coherencia visual a lo largo de las tomas.\n• 03 Estructura de Entorno: Diseñamos los sets desde múltiples ángulos de cámara antes de la producción.\n• 04 Guión Gráfico: Se planifica la obra plano por plano, fijando encuadres y dinámicas de cámara.\n• 05 Síntesis de Video: Se genera cada toma respetando estrictamente las guías de personajes y escenarios.\n• 06 Composición Musical: Se crea una banda de sonido original mediante algoritmos que reaccionan al ritmo dramático del montaje.\n• 07 Montaje y Edición: Sincronización milimétrica de imágenes, música, ritmo y transiciones.\n• 08 Masterización 4K: Exportación final con optimización cromática y nitidez para pantallas de gran escala.",
        execution: "Coordinamos un flujo de trabajo centralizado. Sincronizamos los modelos generativos mediante semillas de personaje fijas y descripciones contextuales consistentes. Compilamos el material gráfico, añadimos diseño sonoro y música original y masterizamos la producción en resolución 4K.",
        technologyUsed: [
          "Inteligencia Artificial",
          "Dirección de Arte",
          "Narrativa de Marca",
          "Diseño de Personajes",
          "Entornos en 3D",
          "Guión Gráfico Profesional",
          "Síntesis de Video con IA",
          "Creación Musical con IA",
          "Montaje Cinematográfico",
          "Masterización 4K"
        ],
        outcome: "AXON REVOLUTION demuestra que la inteligencia artificial actúa como un amplificador extraordinario de la producción siempre que la dirección creativa tome las riendas de la narrativa. La tecnología crea la materia prima; la visión humana teje el relato.",
        creativeInsight: "Cuando todos visten igual, todos piensan igual. La moda es más que telas. Transmite identidad y postura ante el mundo. AXON REVOLUTION retrata a quien se atreve a quebrar la uniformidad. El comercial no vende indumentaria; promueve la audacia del pensamiento propio.",
        projectInfo: [
          { label: "Tipo de Proyecto", value: "Comercial de Concepto" },
          { label: "Industria", value: "Moda y Alta Costura" },
          { label: "Duración", value: "1 minuto 51 segundos" },
          { label: "Tiempo de Producción", value: "Aproximadamente 24 horas" },
          { label: "Estado", value: "Proyecto de Concepto" }
        ],
        demonstrates: [
          "Dirección Creativa",
          "Desarrollo de Concepto",
          "Producción de IA",
          "Diseño de Guión Gráfico",
          "Síntesis Musical",
          "Salida Editorial 4K"
        ]
      },
      {
        id: "axon-drive",
        client: "AXON",
        title: "Conducir Más Allá de la Realidad",
        subtitle: "AXON — Drive Beyond Reality es una galardonada campaña de concepto automotriz de lujo que retrata un vehículo eléctrico atravesando parajes cósmicos de ensueño.",
        category: "Producción de Comerciales con IA",
        year: "2026",
        challenge: "Diferenciar un vehículo eléctrico de concepto en un mercado publicitario automotriz saturado y monótono. La campaña debía conjugar el asombro tecnológico con el misticismo artístico, alejándose de los clásicos planos de autopista.",
        strategy: "Ideamos una estética celestial sublime. Combinando modelado virtual tridimensional, motores de escenarios generativos y simulaciones físicas de fluidos de vanguardia, logramos un espacio editorial donde el vehículo no rueda: transforma el cosmos que lo rodea.",
        creativeProcess: "• Storyboard de Relato: Trazamos la progresión desde cavernas profundas de la Tierra hasta trayectorias espaciales.\n• Síntesis Paisajística: Programamos descripciones de imágenes estables para asegurar cielos y atmósferas continuas.\n• Dinámica de Fluidos: Renderizamos estelas lumínicas y flujos de aire que delinean el vector de movimiento del auto.\n• Gradación de Color de Alta Gama: Ajuste cromático minucioso para emular el estilo de las editoriales de diseño suizo.",
        execution: "Empleamos semillas de modelo personalizadas para sostener la persistencia del entorno visual. Orquestamos la renderización de escenarios, sincronizamos música electrónica ambiental y compilamos el film final sin saltos de fotogramas.",
        technologyUsed: [
          "Video Generativo con IA",
          "Línea de Edición de Cine",
          "Síntesis de Imagen por IA",
          "Cloudinary CDNs"
        ],
        outcome: "Comercial de concepto que demuestra la viabilidad de la inteligencia artificial para abatir drásticamente los costos de producción resguardando la elegancia visual. El proyecto confirma que el marketing de lujo puede operar con flujos sumamente ágiles.",
        creativeInsight: "Cuando la realidad abraza la fantasía, la ruta ordinaria se transforma en una experiencia extrasensorial. El comercial presenta el automóvil no como un simple transporte, sino como un portal a la contemplación artística.",
        projectInfo: [
          { label: "Proyecto", value: "AXON — Conducir Más Allá de la Realidad" },
          { label: "Categoría", value: "Producción de Comerciales con IA" },
          { label: "Industria", value: "Automotriz" },
          { label: "Duración", value: "1 minuto 40 segundos" },
          { label: "Desarrollo", value: "Aproximadamente 12 horas" },
          { label: "Estado", value: "Proyecto Conceptual" }
        ],
        demonstrates: [
          "Dirección de Arte",
          "Concepto de Campaña",
          "Ingeniería de IA",
          "Visualización Automotriz",
          "Guión Narrativo",
          "Montaje Rítmico",
          "Diseño Acústico",
          "Estrategia de Marca"
        ]
      },
      {
        id: "con-la-tuya",
        client: "Con La Tuya Contribuyente",
        title: "Portal de Datos Públicos y Transparencia",
        subtitle: "Plataforma independiente dedicada a la transparencia gubernamental, el análisis de finanzas públicas y la comunicación cívica.",
        category: "Plataforma de Inteligencia Cívica",
        year: "2026",
        challenge: "Traducir grandes volúmenes de datos gubernamentales y registros fiscales complejos en un portal comprensible, neutral y de navegación sumamente veloz, impidiendo la saturación visual y el sesgo de comunicación.",
        strategy: "Concebimos Con La Tuya Contribuyente como un terminal de consulta cívica cuyo norte es simplificar la visualización de presupuestos públicos. Su diseño se cimenta en la objetividad, el equilibrio tipográfico y un rendimiento impecable.",
        creativeProcess: "• Investigación de Campo: Identificamos los principales obstáculos cognitivos que enfrentan los ciudadanos al intentar comprender registros públicos.\n• Arquitectura de Información Neutra: Creamos una taxonomía libre de interpretaciones políticas para proyectar una seriedad institucional indisputable.\n• Ingeniería de Interfaz: Estructuramos páginas modulares de lectura limpia y visualizadores estadísticos ágiles.",
        execution: "Programamos una plataforma en React altamente veloz que aplica jerarquías editoriales sólidas, renderizado en menos de 100ms y un comportamiento táctil fluido en pantallas móviles.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Arquitectura de Datos",
          "Diseño Editorial",
          "Optimización SEO",
          "Rendimiento Web"
        ],
        outcome: "Lanzamos un panel de datos y transparencia altamente legible que procesa conjuntos de datos estatales complejos en tiempo récord, convirtiéndose en un referente de consulta independiente.",
        creativeInsight: "El diseño de plataformas cívicas debe alejarse del partidismo o el dramatismo visual. El rigor tipográfico, la abundancia de aire y la claridad informativa construyen una credibilidad pública insuperable.",
        projectInfo: [
          { label: "Proyecto", value: "Plataforma de Consulta Cívica" },
          { label: "Cliente", value: "Con La Tuya Contribuyente" },
          { label: "URL", value: "https://con-la-tuya.app" },
          { label: "Industria", value: "Transparencia, Datos Abiertos" },
          { label: "Año", value: "2026" },
          { label: "Estado", value: "Activo en Producción" }
        ],
        demonstrates: [
          "Tecnología Cívica",
          "Estructuración de Datos",
          "Diseño de Interfaz",
          "Investigación UX",
          "Desarrollo de Alto Rendimiento",
          "SEO Técnico"
        ]
      },
      {
        id: "menu-noir",
        client: "MENU NOIR",
        title: "Sistema Operativo para Gastronomía",
        subtitle: "Sistema de gestión integral para restaurantes que conecta menús digitales en sala con inventarios de cocina, simulación de mesas y métricas de negocio en tiempo real.",
        category: "Sistema Operativo de Hospitalidad",
        year: "2026",
        challenge: "Los negocios de hospitalidad suelen coordinar la carta digital, la atención al cliente y el control de insumos mediante herramientas inconexas, lo que incrementa costos y genera desfases de inventario.",
        strategy: "Creamos un software unificado que vincula los umbrales de insumos en cocina con la disponibilidad de platos expuesta al cliente, todo presentado bajo una interfaz de estilo editorial en negro mate de altísima sofisticación.",
        creativeProcess: "• Mapeo Operativo: Analizamos la cadena gastronómica desde el ingreso de materias primas hasta el servicio de mesa.\n• Diseño Negro Mate: Desarrollamos un entorno visual relajante para la vista, alineado al minimalismo tipográfico suizo.\n• Sincronización en Tiempo Real: Enlazamos bases de datos para actualizar automáticamente el menú digital en función del stock real en cocina.",
        execution: "Desarrollamos una aplicación web progresiva y robusta que cuenta con almacenamiento local persistente, actualización remota mediante Firebase y optimización de recursos multimedia con Cloudinary.",
        technologyUsed: [
          "React SPA",
          "Firebase Cloud Firestore",
          "Tailwind CSS",
          "Transmisión de Datos en Vivo",
          "Persistencia de Estado Local",
          "CDNs de Cloudinary"
        ],
        outcome: "Pusimos en marcha una plataforma operativa capaz de recortar el desperdicio de insumos en un 18%, agilizar la comanda digital y elevar la imagen de marca de la sala a través del refinamiento gráfico.",
        creativeInsight: "La carta de un restaurante de lujo no es una mera lista de precios: es una ceremonia estética. Nuestro sistema confiere a las pantallas digitales el mismo cuidado que un papel de alto gramaje, uniendo belleza visual con inteligencia logística.",
        projectInfo: [
          { label: "Proyecto", value: "Sistema Operativo de Gastronomía" },
          { label: "Cliente", value: "MENU NOIR" },
          { label: "Industria", value: "Tecnología de Hospitalidad" },
          { label: "Año", value: "2026" },
          { label: "Estado", value: "Fase Beta Activa" }
        ],
        demonstrates: [
          "Diseño de Producto",
          "Ingeniería SaaS Full Stack",
          "Bases de Datos en Tiempo Real",
          "Optimización de Medios",
          "Estructura Offline-First"
        ]
      },
      {
        id: "sucupam",
        client: "SUCUPAM",
        title: "E-Commerce Industrial y Portal Institucional",
        subtitle: "Renovación de la identidad digital corporativa y desarrollo de un catálogo comercial B2B para la agilización de pedidos.",
        category: "Plataforma de Comercio Corporativo",
        year: "2026",
        challenge: "Llevar el extenso catálogo industrial de SUCUPAM a una plataforma de comercio ágil y moderna. El sistema anterior ralentizaba la búsqueda de piezas específicas y dificultaba el envío de cotizaciones mayoristas.",
        strategy: "Proyectamos un diseño de alta densidad inspirado en la solidez del acero y la exactitud de los planos técnicos. Conciliamos una carga de página veloz, filtros paramétricos precisos y un flujo de cotizaciones inmediato.",
        creativeProcess: "• Reordenamiento de Catálogo: Clasificamos más de 200 componentes de acero en grupos visuales comprensibles.\n• Estilo Sólido y Técnico: Aplicamos tonalidades metálicas, tipografías monoespaciadas y márgenes balanceados para jerarquizar los productos.\n• Buscador de Latencia Cero: Diseñamos un motor de búsqueda instantáneo del lado del cliente compatible con códigos de partes de fábrica.",
        execution: "Programamos el portal de comercio en React con TypeScript, optimizando la indexación en buscadores de cada componente mediante esquemas de datos estructurados de Google.",
        technologyUsed: [
          "React / TypeScript",
          "Tailwind CSS",
          "Gestión de Estado de Catálogo",
          "Integración de Consultas B2B",
          "Esquemas de Datos SEO"
        ],
        outcome: "Renovamos la arquitectura digital de SUCUPAM, incrementando en un 42% la exploración de productos industriales y ganando posicionamiento orgánico clave en búsquedas mayoristas.",
        creativeInsight: "La maquinaria industrial no merece un sitio web tosco. Al revestir los productos siderúrgicos con elegancia editorial y amplios espacios de respiración, elevamos el hierro y el acero a la categoría de valor técnico de prestigio.",
        projectInfo: [
          { label: "Proyecto", value: "Portal de Comercio Siderúrgico" },
          { label: "Cliente", value: "SUCUPAM" },
          { label: "Industria", value: "Metalurgia y Siderurgia" },
          { label: "Año", value: "2026" },
          { label: "Estado", value: "Lanzado en Producción" }
        ],
        demonstrates: [
          "Diseño Web Editorial",
          "Organización de Información",
          "Comercio Electrónico B2B",
          "Posicionamiento en Motores de Búsqueda",
          "Optimización del Cliente"
        ]
      },
      {
        id: "emilia-marsicano",
        client: "Emilia Marsicano Abogada",
        title: "Portal Legal de Alta Gama",
        subtitle: "Santuario digital de estilo editorial concebido y programado para una destacada abogada con base en Florida.",
        category: "Sitio Web de Marca de Élite",
        year: "2026",
        challenge: "Establecer una presencia digital distinguida y sumamente confiable para la consejera Emilia Marsicano. El portal debía fungir como un canal formal de contacto, traduciendo de manera simultánea el alcance de sus servicios legales de real estate y sucesiones.",
        strategy: "Estructuramos un portal web con tipografía refinada, proporciones simétricas clásicas y un rendimiento de carga instantáneo. Ofrece acceso multilingüe transparente y ruteo formal de consultas en cumplimiento con normativas ADA de accesibilidad.",
        creativeProcess: "• Análisis Competitivo: Auditamos portales tradicionales para corregir fricciones (formularios pesados, lenguaje confuso, navegación desordenada).\n• Tipografía con Carácter: Sincronizamos fuentes serif de corte clásico con tipografía lineal para asentar confiabilidad y orden.\n• Retículas Clásicas: Diseñamos márgenes amplios y animaciones sutiles que transmiten la seriedad de un bufete corporativo.\n• Interacción Multilingüe: Integramos rutas de idioma directas para que los clientes exploren los servicios legales sin barreras idiomáticas.",
        execution: "Programamos una aplicación web sumamente veloz con almacenamiento en caché eficiente, agendamiento de llamadas simplificado y un tiempo de renderizado de vanguardia.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Diseño Tipográfico Clásico",
          "Accesibilidad Responsiva",
          "Caché Global y CDNs"
        ],
        outcome: "Redefinimos la accesibilidad digital de la firma legal, canalizando de forma segura nuevas consultas y reafirmando el prestigio de la abogada a nivel internacional.",
        creativeInsight: "El sitio web de un gran abogado debe encarnar su defensa de la claridad y el orden. Al eliminar el cliché de la balanza de la justicia y los excesos decorativos, la firma gana presencia a través de la pura excelencia tipográfica.",
        projectInfo: [
          { label: "Proyecto", value: "Portal de Marca de Autor" },
          { label: "Cliente", value: "Emilia Marsicano Abogada" },
          { label: "URL", value: "https://www.emiliamarsicanoabogada.com" },
          { label: "Industria", value: "Servicios Legales Premium" },
          { label: "Año", value: "2026" },
          { label: "Estado", value: "Publicado y Activo" }
        ],
        demonstrates: [
          "Dirección de Marca",
          "Diseño de Portales Web",
          "Ingeniería Frontend",
          "Estilo Editorial",
          "Cumplimiento Multilingüe",
          "Sistemas de Consulta Seguros"
        ]
      }
    ],
    de: [
      {
        id: "axon-revolution",
        client: "AXON REVOLUTION",
        title: "Konzept Fashion Film",
        subtitle: "AXON REVOLUTION ist ein konzeptioneller, KI-generierter Mode-Werbespot, der die menschliche Identität in einer uniformen Zukunft untersucht.",
        category: "KI-Werbefilmproduktion",
        year: "2026",
        challenge: "Entwicklung eines Modefilms, der durch Atmosphäre und Symbolik besticht, anstatt auf klassische Werbemechanismen zurückzugreifen. Er musste ein Gefühl von internationalem Kampagnen-Prestige vermitteln.",
        strategy: "Um zu beweisen, dass generative Systeme in einer professionellen Filmproduktion ohne Verlust von Konsistenz integriert werden können, haben wir eine nahtlose Produktionskette von der Ideenfindung bis zum 4K-Mastering konzipiert.",
        creativeProcess: "Jedes Projekt folgt einer strengen Produktionsmethodik zur Gewährleistung von Qualität:\n\n• 01 Konzeptentwicklung: Festlegung der Symbolik und der emotionalen Ziele vor der Bildsynthese.\n• 02 Charakter-Design: Definition präziser Character Sheets für einheitliche visuelle Merkmale.\n• 03 Szenenbild-Design: Dreidimensionale Gestaltung aller Schauplätze aus verschiedenen Kamerawinkeln.\n• 04 Storyboard: Detaillierte shot-by-shot Planung von Kamerafahrt und Bildkomposition.\n• 05 KI-Bildgenerierung: Synthese aller Szenen unter Einhaltung der visuellen Styleguides.\n• 06 Musik-Komposition: Erstellung eines maßgeschneiderten KI-Soundtracks passend zur Dynamik des Schnitts.\n• 07 Post-Produktion: Synchronisation von Bildmaterial, Soundeffekten und Übergängen.\n• 08 4K-Mastering: Export in hochauflösender Qualität mit professioneller Farbkorrektur.",
        execution: "Wir haben ein strukturiertes, integriertes Produktionsverfahren realisiert. Die Konsistenz der Charaktere wurde über feste Seeds und Szenen-Prompts gesichert. Nach dem Schnitt wurde das Werk mit einem atmosphärischen Soundtrack vertont und in 4K exportiert.",
        technologyUsed: [
          "Künstliche Intelligenz",
          "Kreativdirektion",
          "Narrative Konzeption",
          "Visuelles Charakterdesign",
          "3D-Umgebungsgestaltung",
          "Präzises Storyboard",
          "KI-Bildsynthese",
          "Algorithmische Musik",
          "Professioneller Schnitt",
          "4K-Farbkorrektur"
        ],
        outcome: "AXON REVOLUTION demonstriert eindrucksvoll, dass KI als enormer Beschleuniger dient, wenn die kreative Führung beim Menschen verbleibt. Die Technologie liefert die Rohdaten, die menschliche Vision die Seele des Films.",
        creativeInsight: "Wenn alle die gleiche Kleidung tragen, verkümmert der freie Geist. Mode drückt Individualität und Werte aus. AXON REVOLUTION feiert den Mut zur Abweichung vom System. Es geht nicht um Mode; es geht um die Freiheit, anders zu denken.",
        projectInfo: [
          { label: "Projekttyp", value: "Konzeptioneller Werbespot" },
          { label: "Branche", value: "High-End Fashion" },
          { label: "Dauer", value: "1 Minute 51 Sekunden" },
          { label: "Produktionszeit", value: "Ca. 24 Arbeitsstunden" },
          { label: "Status", value: "Konzept-Projekt" }
        ],
        demonstrates: [
          "Kreativdirektion",
          "Konzeptentwicklung",
          "KI-Produktion",
          "Storyboard-Design",
          "Soundtrack-Synthese",
          "4K Editorial Output"
        ]
      },
      {
        id: "axon-drive",
        client: "AXON",
        title: "Drive Beyond Reality",
        subtitle: "AXON — Drive Beyond Reality ist ein preisgekröntes Automobil-Konzeptvideo, das ein futuristisches Elektrofahrzeug in kosmischen Dimensionen inszeniert.",
        category: "KI-Werbefilmproduktion",
        year: "2026",
        challenge: "Ein neuartiges Elektrofahrzeug in einem von Klischees überfluteten Werbemarkt unverwechselbar zu positionieren. Die Kampagne musste technische Exzellenz und ästhetische Erhabenheit vermitteln.",
        strategy: "Entwicklung einer kosmischen Bildsprache. Durch die Synthese von 3D-Präzisionsmodellen, algorithmischen Kulissen und fortschrittlichen Partikelsimulationen entstand ein Raum, in dem das Auto mit dem Universum interagiert.",
        creativeProcess: "• Bildfolge-Storyboard: Konzeption des Weges von irdischen Höhlensystemen in den Orbit.\n• KI-Kulissengenerierung: Erstellung konsistenter, astronomischer Hintergrundsphären.\n• Partikelsimulation: Synthese dynamischer Luft- und Lichtwirbel entlang der Fahrzeuglinien.\n• Color Grading: Manuelle Post-Produktion für ein edles, kontrastreiches Bild nach Schweizer Designnormen.",
        execution: "Verwendung fester Model-Seeds zur Gewährleistung der Szenenkonsistenz. Orchestrierung der Videosynthese, Vertonung mit minimalistischer elektronischer Musik und latenzfreie Ausspielung.",
        technologyUsed: [
          "KI-Videosynthese",
          "Videoschnitt-Infrastruktur",
          "Diffusions-Bildsynthese",
          "Cloudinary CDN"
        ],
        outcome: "Ein vollendetes Werbekonzept, das zeigt, wie KI-Systeme die Produktionskosten senken und gleichzeitig erstklassige visuelle Ästhetik bewahren. Wegweisend für moderne Agenturprozesse.",
        creativeInsight: "Wenn Technologie und Träume verschmelzen, wird das Fahren zur Meditation. Das Video inszeniert das Fahrzeug nicht als Gebrauchsgegenstand, sondern als Medium zur Erfahrung tiefer kosmischer Ruhe.",
        projectInfo: [
          { label: "Projekt", value: "AXON — Kosmische Ästhetik" },
          { label: "Kategorie", value: "KI-Werbefilmproduktion" },
          { label: "Branche", value: "Automobilindustrie" },
          { label: "Dauer", value: "1 Minute 40 Sekunden" },
          { label: "Produktionszeit", value: "Ca. 12 Arbeitsstunden" },
          { label: "Status", value: "Konzeptstudie" }
        ],
        demonstrates: [
          "Kreativdirektion",
          "Konzeptentwicklung",
          "KI-Produktion",
          "Automotive Visualisierung",
          "Storytelling",
          "Editing",
          "Sound Design",
          "Brand Design"
        ]
      },
      {
        id: "con-la-tuya",
        client: "Con La Tuya Contribuyente",
        title: "Plattform für Haushaltsdaten",
        subtitle: "Bürgerportal für Transparenz, Steuernutzung und investigativen Journalismus.",
        category: "Bürgerinformations-Plattform",
        year: "2026",
        challenge: "Komplexe staatliche Finanzberichte und riesige Datenmengen in eine klare, objektive und benutzerfreundliche Oberfläche zu übersetzen, die absolut frei von politischer Einflussnahme wirkt.",
        strategy: "Konzeption eines neutralen Informationsportals, das Bürgern den Zugang zu Haushaltsdaten erleichtert. Fokus auf Lesbarkeit, präzise Tabellenstrukturen und kompromisslose Performance.",
        creativeProcess: "• Barriere-Analyse: Untersuchung der kognitiven Hürden von Bürgern beim Lesen staatlicher Amtsblätter.\n• Neutrale Informationsarchitektur: Sachliche Klassifizierung aller Finanzströme zur Gewährleistung von Glaubwürdigkeit.\n• Layout-Strukturierung: Entwicklung übersichtlicher, modularer Artikelseiten und interaktiver Tabellen.",
        execution: "Entwicklung einer schnellen React-Plattform mit klaren visuellen Hierarchien, Antwortzeiten unter 100ms und flüssiger Touch-Bedienung auf Mobilgeräten.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Datenmodellierung",
          "Editorial Design",
          "SEO-Optimierung",
          "Ladezeit-Audit"
        ],
        outcome: "Erfolgreiche Veröffentlichung eines hochgradig lesbaren Datenportals, das komplexe Staatsfinanzen transparent macht und sich als verlässliche Referenz etabliert hat.",
        creativeInsight: "Bürgerportale erfordern gestalterische Zurückhaltung. Sachliche Typografie, weite Weißräume und logische Datenstrukturen schaffen ein Maximum an Vertrauen und Objektivität.",
        projectInfo: [
          { label: "Projekt", value: "Bürgerportal für Finanztransparenz" },
          { label: "Klient", value: "Con La Tuya Contribuyente" },
          { label: "URL", value: "https://con-la-tuya.app" },
          { label: "Branche", value: "Transparenz & Open Data" },
          { label: "Jahr", value: "2026" },
          { label: "Status", value: "Produktivbetrieb" }
        ],
        demonstrates: [
          "Civic Tech",
          "Informationsarchitektur",
          "UI Design",
          "UX Research",
          "Responsive Development",
          "SEO & Performance"
        ]
      },
      {
        id: "menu-noir",
        client: "MENU NOIR",
        title: "SaaS-Gastronomiebetriebssystem",
        subtitle: "Ganzheitliches Betriebssystem für die Gastronomie zur nahtlosen Verbindung von digitalen Karten, Warenwirtschaft und Service-Kennzahlen.",
        category: "Gastronomie-Betriebssystem",
        year: "2026",
        challenge: "Gastronomiebetriebe steuern Service, Speisekarten und Einkauf meist über getrennte Insellösungen. Das führt zu Latenzen im Service und Fehlbeständen.",
        strategy: "Entwicklung eines integrierten Softwaresystems, das Warenbestände in der Küche live mit der Speisekarte auf den Tablets der Gäste abgleicht – präsentiert in einer edlen, mattschwarzen Benutzeroberfläche.",
        creativeProcess: "• Prozess-Analyse: Erfassung aller Abläufe vom Wareneingang in der Küche bis zur Abrechnung am Tisch.\n• Midnight-Interface-Design: Gestaltung einer augenschonenden, kontrastreichen Weboberfläche nach Schweizer Gestaltungsprinzipien.\n• Live-Bestandskontrolle: Datenbankseitige Koppelung, um ausverkaufte Speisen automatisch von der digitalen Karte zu entfernen.",
        execution: "Implementierung einer robusten, offlinefähigen Progressive Web App mit Firebase-Echtzeitdatenbanken und Cloudinary-Medienoptimierung.",
        technologyUsed: [
          "React SPA",
          "Firebase Cloud Firestore",
          "Tailwind CSS",
          "Echtzeit-Datenströme",
          "Persistenter Offline-Status",
          "Cloudinary CDN"
        ],
        outcome: "Erhöhung der Kücheneffizienz, Reduzierung von Lebensmittelabfällen um 18 % und eine deutliche Steigerung der Markenwahrnehmung bei den Gästen durch exzellentes Design.",
        creativeInsight: "Die Speisekarte eines Spitzenrestaurants ist kein schnödes Verzeichnis, sondern ein kulinarisches Versprechen. Unser System verleiht Bildschirmen dieselbe Eleganz wie schwerem Büttenpapier.",
        projectInfo: [
          { label: "Projekt", value: "Gastronomie-SaaS" },
          { label: "Klient", value: "MENU NOIR" },
          { label: "Branche", value: "Hospitality & Restaurant Tech" },
          { label: "Jahr", value: "2026" },
          { label: "Status", value: "Aktive Beta-Phase" }
        ],
        demonstrates: [
          "Product Design",
          "Full Stack SaaS Engineering",
          "Real-Time Database Sync",
          "Asset Optimization",
          "Offline Architecture"
        ]
      },
      {
        id: "sucupam",
        client: "SUCUPAM",
        title: "Industrial E-Commerce & B2B Portal",
        subtitle: "Neukonzeption des Corporate-Portals und Implementierung einer performanten B2B-Bestellplattform für Industriekomponenten.",
        category: "Unternehmens-Handelsplattform",
        year: "2026",
        challenge: "Strukturierung eines unübersichtlichen Sortiments von Spezialstahlprodukten in ein schnelles, zeitgemäßes E-Commerce-System, um den Anfrageprozess für Großkunden zu beschleunigen.",
        strategy: "Entwicklung eines klaren, technischen Layouts, inspiriert von Konstruktionsplänen und präzisen Rastern. Fokus auf Ladezeitoptimierung, filterbare Spezifikationen und schnellen Kontakt.",
        creativeProcess: "• Katalog-Systematisierung: Klassifizierung von über 200 Industriekomponenten in logische Baugruppen.\n• Konstruktions-Ästhetik: Farbschema aus präzisen Grautönen, Monospace-Schriften und feinen Trennlinien.\n• Instant-Client-Suche: Entwicklung einer clientseitigen Echtzeit-Suche für Herstellernummern ohne Ladezeit.",
        execution: "Programmierung der Web-Plattform mit React und TypeScript unter intensiver Einbindung strukturierter SEO-Schemata zur optimalen Erfassung durch Suchmaschinen.",
        technologyUsed: [
          "React / TypeScript",
          "Tailwind CSS",
          "Clientseitiges Status-Management",
          "B2B-Anfrage-Pipelines",
          "SEO Schema-Architektur"
        ],
        outcome: "Eine moderne Handelsplattform mit 42 % mehr Produktaufrufen und signifikant besserer Sichtbarkeit in Suchmaschinen für spezifische B2B-Stahlanfragen.",
        creativeInsight: "Schwerindustrie benötigt keine unästhetischen Webseiten. Durch großzügige Abstände und präzise Raster verwandeln wir Stahl und Technik in Objekte von industrieller Klasse.",
        projectInfo: [
          { label: "Projekt", value: "Industrie-E-Commerce" },
          { label: "Klient", value: "SUCUPAM" },
          { label: "Branche", value: "Stahl- und Metallverarbeitung" },
          { label: "Jahr", value: "2026" },
          { label: "Status", value: "Produktivbetrieb" }
        ],
        demonstrates: [
          "UI Design",
          "Informationsarchitektur",
          "B2B E-Commerce",
          "Search Engine Optimization",
          "Client-Side Performance"
        ]
      },
      {
        id: "emilia-marsicano",
        client: "Emilia Marsicano Abogada",
        title: "Premium-Kanzleiportal",
        subtitle: "Ein stilvolles digitales Markenportal für eine führende Kanzlei für Immobilien- und Erbrecht in Florida.",
        category: "Kanzlei-Markenportal",
        year: "2026",
        challenge: "Etablierung eines erlesenen, vertrauensvollen Online-Auftritts für Rechtsanwältin Emilia Marsicano, der sich wohltuend von überladenen, unpersönlichen Kanzleiverzeichnissen abhebt.",
        strategy: "Wir entwarfen ein Kanzleiportal mit anspruchsvoller Typografie, klassischen architektonischen Seitenverhältnissen und barrierefreien Zugängen für nationale und internationale Mandanten.",
        creativeProcess: "• Wettbewerbs-Analyse: Beseitigung klassischer Schwachpunkte von Kanzleiseiten (schwere Kontaktformulare, komplizierte Rechtstexte).\n• Kanzlei-Typografie: Kombination aus klassischer Serif-Schrift für Überschriften und hochgradig lesbarem Fließtext.\n• Architektonisches Raster: Klare Gliederung, feine Linien und dezente Hover-Effekte vermitteln Souveränität.\n• Sprach-Routing: Barrierefreie Übersetzung und Integration direkter Kontaktwege für internationale Mandanten.",
        execution: "Entwicklung der Single-Page-Application in React mit optimiertem Asset-Caching für extrem kurze Ladezeiten und nahtlose Terminanfragen.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Premium Typografie",
          "Barrierefreiheit (ADA)",
          "CDN Caching"
        ],
        outcome: "Erfolgreicher Launch eines repräsentativen Markenportals, das das Renommee der Kanzlei unterstreicht und qualifizierte Anfragen sichert.",
        creativeInsight: "Der Online-Auftritt einer erstklassigen Kanzlei muss von derselben Präzision und Klarheit zeugen wie ihre juristische Arbeit. Kompromissloses Design schafft Vertrauen auf den ersten Blick.",
        projectInfo: [
          { label: "Projekt", value: "Offizielle Kanzleiwebsite" },
          { label: "Klient", value: "Emilia Marsicano Abogada" },
          { label: "URL", value: "https://www.emiliamarsicanoabogada.com" },
          { label: "Branche", value: "Juristische Dienstleistungen" },
          { label: "Jahr", value: "2026" },
          { label: "Status", value: "Veröffentlicht" }
        ],
        demonstrates: [
          "Brand Design",
          "Webdesign",
          "Frontend-Engineering",
          "Editorial Typografie",
          "Multilinguales Routing",
          "Sichere Anfragesysteme"
        ]
      }
    ],
    fr: [
      {
        id: "axon-revolution",
        client: "AXON REVOLUTION",
        title: "Film de Mode Conceptuel",
        subtitle: "AXON REVOLUTION est un spot publicitaire conceptuel de haute couture réalisé par IA, analysant l'individualité face au conformisme d'un monde futur.",
        category: "Production Publicitaire par IA",
        year: "2026",
        challenge: "Créer un film publicitaire de mode de prestige captant l'attention par l'émotion et l'atmosphère esthétique, sans utiliser de ressorts promotionnels agressifs. Le résultat devait égaler le standing d'une campagne internationale.",
        strategy: "Afin de démontrer l'intégration de l'IA générative dans un processus cinématographique professionnel, nous avons structuré un pipeline rigoureux permettant de préserver l'identité des personnages et des décors d'un plan à l'autre.",
        creativeProcess: "Toute production à l'Atelier suit un protocole strict assurant l'excellence finale :\n\n• 01 Diagnostic de Concept : Détermination des symboles, du récit et du but dramatique avant l'image.\n• 02 Création des Personnages : Hojas de style de personnages pour garantir la cohérence des traits.\n• 03 Décors & Architecture : Modélisation des espaces sous plusieurs angles de vue.\n• 04 Storyboard : Planification plan par plan de la composition et des mouvements de caméra.\n• 05 Synthèse Vidéo : Génération des images d'après nos guides artistiques.\n• 06 Composition Musicale : Bande originale créée par algorithme au plus près du rythme du montage.\n• 07 Montage & Finitions : Ajustements millimétrés de la dynamique et du son.\n• 08 Mastering 4K : Exportation en haute définition avec correction colorimétrique haut de gamme.",
        execution: "Nous avons mis en place un pipeline de création unifié. Les modèles génératifs ont été coordonnés par des graines de personnages et des descriptions fixes. Le film a été monté, sonorisé avec une composition exclusive et masterisé en 4K.",
        technologyUsed: [
          "Intelligence Artificielle",
          "Direction de Création",
          "Écriture Cinématographique",
          "Stylisme Virtuel",
          "Modélisation de Décors",
          "Storyboard de Précision",
          "Génération Vidéo par IA",
          "Composition Musicale IA",
          "Montage Professionnel",
          "Mastering 4K"
        ],
        outcome: "AXON REVOLUTION témoigne que l'IA démultiplie la vitesse d'exécution sans jamais supplanter l'esprit créatif. La machine produit la matière brute; la direction artistique compose le récit. C'est l'essence même de notre vision.",
        creativeInsight: "L'uniformité de vêtement engendre l'uniformité de pensée. La mode est un acte d'affirmation. AXON REVOLUTION met en scène le choix de l'émancipation. Le film ne vend pas de vêtements; il célèbre le courage d'exister en tant qu'individu.",
        projectInfo: [
          { label: "Type de Projet", value: "Campagne Conceptuelle" },
          { label: "Secteur", value: "Haute Couture" },
          { label: "Durée", value: "1 minute 51 secondes" },
          { label: "Temps d'Exécution", value: "Environ 24 heures" },
          { label: "Statut", value: "Création Conceptuelle" }
        ],
        demonstrates: [
          "Direction Artistique",
          "Conception de Projet",
          "Production d'IA",
          "Scénarisation",
          "Montage Musical",
          "Post-Production 4K"
        ]
      },
      {
        id: "axon-drive",
        client: "AXON",
        title: "Drive Beyond Reality",
        subtitle: "AXON — Drive Beyond Reality est un court-métrage publicitaire automobile primé mettant en scène un véhicule électrique parcourant des décors galactiques.",
        category: "Production Publicitaire par IA",
        year: "2026",
        challenge: "Distinguer un concept car électrique au sein d'un marché publicitaire uniforme et monotone. Il s'agissait de susciter un sentiment de sidération esthétique en rupture avec les codes du genre.",
        strategy: "Nous avons bâti une charte visuelle d'inspiration céleste. En mêlant modélisation 3D, paysages génératifs et simulations physiques, nous avons créé un univers où l'automobile ne se contente pas de rouler, mais redessine l'espace.",
        creativeProcess: "• Scénarisation Graphique : Progression narrative des profondeurs rocheuses à l'immensité de l'orbite.\n• Paysages de Synthèse : Génération d'atmosphères spatiales stables d'un plan à l'autre.\n• Dynamiques Physiques : Traînées lumineuses et ondes d'air épousant les courbes du véhicule.\n• Étalonnage Éditorial : Ajustement précis des contrastes d'après les chartes du luxe européen.",
        execution: "Recours à des graines de modèles exclusives pour la stabilité des arrière-plans. Synchronisation d'une création musicale électronique et assemblage de l'œuvre sans aucune saccade.",
        technologyUsed: [
          "Vidéo Générative par IA",
          "Banc de Montage Cinéma",
          "Synthèse d'Image IA",
          "CDNs Cloudinary"
        ],
        outcome: "Un film de marque démontrant que l'IA permet de diviser par dix les coûts de création tout en atteignant un niveau d'esthétisme exceptionnel. Une démonstration d'agilité pour l'industrie du luxe.",
        creativeInsight: "Lorsque le réel s'estompe, le voyage devient une expérience contemplative. La campagne positionne le véhicule non comme un moyen de transport, mais comme un capteur d'émotions célestes.",
        projectInfo: [
          { label: "Projet", value: "AXON — Campagne Céleste" },
          { label: "Catégorie", value: "Production Publicitaire par IA" },
          { label: "Secteur", value: "Automobile de Luxe" },
          { label: "Durée", value: "1 minute 40 secondes" },
          { label: "Production", value: "Environ 12 heures" },
          { label: "Statut", value: "Projet Conceptuel" }
        ],
        demonstrates: [
          "Direction Artistique",
          "Conception Graphique",
          "Production d'IA",
          "Design Automobile",
          "Récit de Marque",
          "Montage",
          "Design Sonore",
          "Identité Visuelle"
        ]
      },
      {
        id: "con-la-tuya",
        client: "Con La Tuya Contribuyente",
        title: "Portail de Données Budgétaires de l'État",
        subtitle: "Plateforme civique d'intérêt général axée sur la transparence budgétaire et le journalisme de données.",
        category: "Plateforme d'Intelligence Civique",
        year: "2026",
        challenge: "Rendre accessibles, neutres et instantanés des volumes massifs de comptes publics et de documents comptables gouvernementaux habituellement illisibles pour le citoyen.",
        strategy: "Nous avons conçu un portail de données qui supprime toute barrière d'accès aux comptes de l'État. Un soin extrême a été apporté à l'objectivité, à la finesse des tableaux et aux performances de navigation.",
        creativeProcess: "• Audit d'Usage : Identification des points de blocage cognitif lors de la lecture de comptes publics.\n• Neutralité Éditoriale : Classification factuelle et suppression d'éléments subjectifs pour asseoir la légitimité du portail.\n• Modélisation des Pages : Structuration d'articles aérés et de graphiques dynamiques clairs.",
        execution: "Développement d'une application React ultra-rapide dotée de hiérarchies éditoriales soignées, de temps de réponse sous les 100ms et d'une ergonomie tactile fluide.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Architecture de Données",
          "Design Éditorial",
          "Référencement SEO",
          "Optimisation de Vitesse"
        ],
        outcome: "Lancement d'une plateforme d'intelligence publique de haute tenue, saluée pour sa clarté et devenue une ressource de référence en matière de finances publiques.",
        creativeInsight: "Les portails civiques exigent une grande sobriété graphique. Une typographie noble, de larges blancs et des diagrammes soignés fondent la respectabilité de l'information.",
        projectInfo: [
          { label: "Projet", value: "Portail de Transparence Budgétaire" },
          { label: "Partenaire", value: "Con La Tuya Contribuyente" },
          { label: "URL", value: "https://con-la-tuya.app" },
          { label: "Secteur", value: "Transparence, Open Data" },
          { label: "Année", value: "2026" },
          { label: "Statut", value: "En Production" }
        ],
        demonstrates: [
          "Civic Tech",
          "Architecture d'Information",
          "UI Design",
          "UX Research",
          "Développement Responsive",
          "SEO & Performances"
        ]
      },
      {
        id: "menu-noir",
        client: "MENU NOIR",
        title: "Système d'Exploitation pour la Restauration",
        subtitle: "Architecture applicative connectant les cartes de restaurant sur tablettes avec l'inventaire en cuisine et l'analyse de gestion.",
        category: "Système d'Exploitation Hôtelier",
        year: "2026",
        challenge: "Les restaurateurs gèrent souvent la prise de commande, les stocks de cuisine et les comptes par des applications hétérogènes, créant des lenteurs de service.",
        strategy: "Conception d'une plateforme d'exploitation unifiée qui ajuste la carte des clients en direct selon les stocks réels de la cuisine, présentée dans un noir mat d'une élégance absolue.",
        creativeProcess: "• Cartographie des Flux : Analyse des étapes du service, de la réception des vivres à l'encaissement.\n• Interface Midnight : Thème graphique raffiné, évitant la fatigue oculaire, fidèle aux grilles d'édition helvétiques.\n• Synchronisation des Données : Connexion système pour désactiver automatiquement les plats épuisés sur l'iPad.",
        execution: "Déploiement d'une application web progressive et offline-first avec Firebase et traitement d'images optimisé avec Cloudinary.",
        technologyUsed: [
          "React SPA",
          "Firebase Cloud Firestore",
          "Tailwind CSS",
          "Flux de Données Temps Réel",
          "Persistance Hors-ligne",
          "CDN Cloudinary"
        ],
        outcome: "Modernisation de la gestion en salle, réduction du gaspillage alimentaire de 18% et valorisation de l'identité de marque du restaurant auprès des convives.",
        creativeInsight: "La carte d'un établissement de prestige n'est pas un simple inventaire; c'est le prélude d'un voyage. Notre système traite les écrans avec le même égard que le papier gaufré.",
        projectInfo: [
          { label: "Projet", value: "SaaS Hôtelier de Luxe" },
          { label: "Partenaire", value: "MENU NOIR" },
          { label: "Secteur", value: "Technologies de la Restauration" },
          { label: "Année", value: "2026" },
          { label: "Statut", value: "Version Bêta Active" }
        ],
        demonstrates: [
          "Design de Produit",
          "Ingénierie SaaS Full Stack",
          "Synchronisation de Données",
          "Optimisation de Médias",
          "Architecture Hors-ligne"
        ]
      },
      {
        id: "sucupam",
        client: "SUCUPAM",
        title: "E-Commerce de Précision & Portail de Marque",
        subtitle: "Refonte de l'image de marque en ligne et déploiement d'un e-commerce professionnel B2B pour le secteur métallurgique.",
        category: "Plateforme Commerciale Industrielle",
        year: "2026",
        challenge: "Traduire un catalogue industriel massif en un outil de commerce en ligne moderne, capable d'accélérer les processus de devis pour les acheteurs professionnels.",
        strategy: "Développement d'une structure graphique à haute densité, inspirée de la rigueur du métal et de la précision des schémas industriels. Optimisation extrême des filtres de recherche.",
        creativeProcess: "• Restructuration du Catalogue : Regroupement méthodique de plus de 200 références de composants en acier.\n• Esthétique Métallique : Palette de nuances grises, typographies techniques monoespacées et lignes fines.\n• Moteur de Recherche Instantané : Développement d'un index de recherche instantané côté client, sans temps d'attente.",
        execution: "Développement de l'application React avec TypeScript, et intégration soignée des balises SEO pour maximiser le référencement naturel des pièces industrielles.",
        technologyUsed: [
          "React / TypeScript",
          "Tailwind CSS",
          "Gestion d'État Côté Client",
          "Funnel de Devis B2B",
          "Structures de Balisage SEO"
        ],
        outcome: "Une présence web modernisée ayant entraîné une hausse de 42 % de l'exploration des produits et une visibilité organique accrue pour les requêtes industrielles spécialisées.",
        creativeInsight: "Le matériel de précision mérite un écrin de prestige. En habillant des pièces métallurgiques avec les codes de l'édition de luxe, nous transformons l'acier en objet d'exception technique.",
        projectInfo: [
          { label: "Projet", value: "E-Commerce Métallurgique B2B" },
          { label: "Partenaire", value: "SUCUPAM" },
          { label: "Secteur", value: "Siderurgie & Industrie" },
          { label: "Année", value: "2026" },
          { label: "Statut", value: "En Production" }
        ],
        demonstrates: [
          "Design Graphique",
          "Architecture de Catalogue",
          "B2B E-Commerce",
          "Optimisation Référencement",
          "Performances Frontend"
        ]
      },
      {
        id: "emilia-marsicano",
        client: "Emilia Marsicano Abogada",
        title: "Site de Cabinet d'Avocats de Prestige",
        subtitle: "Écrin numérique au style éditorial soigné, conçu pour une avocate d'affaires établie en Floride.",
        category: "Site Web de Marque Exclusive",
        year: "2026",
        challenge: "Donner vie à un site internet hautement institutionnel et rassurant pour Maître Emilia Marsicano, en rupture avec les annuaires d'avocats surchargés habituels.",
        strategy: "Nous avons dessiné un site d'auteur aux proportions harmonieuses, conjuguant typographie élégante, rapidité d'affichage et accessibilité multilingue fluide.",
        creativeProcess: "• Analyse de la Concurrence : Suppression des irritants des sites juridiques classiques (formulaires lourds, jargon complexe).\n• Typographie d'Auteur : Association d'une police serif classique et d'un texte sans-serif de haute lisibilité.\n• Grille Éditoriale : Larges marges blanches et mouvements interactifs feutrés pour projeter le sérieux et la respectabilité.\n• Commutation Linguistique : Chemins de traduction natifs pour les clients d'outre-mer.",
        execution: "Développement de l'application en React avec gestion fine du cache pour assurer un temps d'accès record et simplifier la prise de contact.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Typographie Classique",
          "Normes d'Accessibilité (ADA)",
          "CDN Caching"
        ],
        outcome: "Un portail d'affaires de haut standing qui canalise efficacement les demandes de consultation tout en valorisant la réputation internationale de l'avocate.",
        creativeInsight: "La présence web d'un avocat d'exception doit témoigner de sa quête de limpidité et d'ordre. En éliminant les clichés d'usage, le cabinet s'affirme par sa seule rigueur graphique.",
        projectInfo: [
          { label: "Projet", value: "Site de Cabinet de Prestige" },
          { label: "Partenaire", value: "Emilia Marsicano Abogada" },
          { label: "URL", value: "https://www.emiliamarsicanoabogada.com" },
          { label: "Secteur", value: "Services Juridiques" },
          { label: "Année", value: "2026" },
          { label: "Statut", value: "Actif & En Ligne" }
        ],
        demonstrates: [
          "Identité Visuelle",
          "Conception Web",
          "Ingénierie Frontend",
          "Typographie Éditoriale",
          "Traduction Native",
          "Formulaires de Contact Sécurisés"
        ]
      }
    ],
    it: [
      {
        id: "axon-revolution",
        client: "AXON REVOLUTION",
        title: "Fashion Film Concettuale",
        subtitle: "AXON REVOLUTION è uno spot pubblicitario di moda creato interamente con IA che esplora il concetto di individualità in un futuro distopico.",
        category: "Produzione Spot con IA",
        year: "2026",
        challenge: "Creare un filmato pubblicitario di lusso in grado di affascinare lo spettatore puntando su estetica, atmosfera e narrazione d'autore, distanziandosi dalle classiche promozioni e presentandosi come un'opera di assoluto prestigio.",
        strategy: "Per attestare l'efficacia dell'intelligenza artificiale all'interno di flussi di lavoro cinematografici professionali, mantenendo stabili i tratti dei personaggi e le locazioni, abbiamo strutturato un processo integrato e lineare.",
        creativeProcess: "Ogni nostra creazione segue un protocollo rigoroso a garanzia dell'eccellenza visiva:\n\n• 01 Sviluppo del Tema : Definizione del racconto, dei simboli e delle emozioni prima della produzione visiva.\n• 02 Disegno dei Personaggi : Generazione di fogli di stile dei personaggi per assicurarne la stabilità visiva.\n• 03 Allestimento dei Set : Progettazione tridimensionale degli spazi da diverse angolazioni di ripresa.\n• 04 Sceneggiatura Visiva : Pianificazione del filmato inquadratura per inquadratura, definendo i movimenti di macchina.\n• 05 Generazione Scene : Sintesi delle immagini nel rispetto delle linee guida dei personaggi e dei set.\n• 06 Composizione della Colonna Sonora : Scrittura di brani originali con algoritmi sincronizzati sul montaggio.\n• 07 Post-Produzione & Montaggio : Allineamento al millesimo di immagini, musica e transizioni.\n• 08 Mastering 4K : Ottimizzazione finale della nitidezza e della gamma cromatica per schermi ad alta risoluzione.",
        execution: "Abbiamo definito un flusso di lavoro integrato. Sincronizzato i modelli generativi attraverso semi di personaggi costanti e descrizioni del contesto stabili. Abbiamo montato le scene, curato il sound design con musica originale e masterizzato l'opera in 4K.",
        technologyUsed: [
          "Intelligenza Artificiale",
          "Direzione Artistica",
          "Narrazione d'Autore",
          "Visual Character Design",
          "Set Virtuali 3D",
          "Storyboard di Precisione",
          "Generazione Video IA",
          "Composizione Musicale IA",
          "Montaggio Spot",
          "Mastering 4K"
        ],
        outcome: "AXON REVOLUTION dimostra che l'intelligenza artificiale accelera considerevolmente la produzione, a patto che sia la direzione artistica umana a guidare il racconto. La macchina produce i contenuti; l'uomo dona l'anima all'opera.",
        creativeInsight: "Quando tutti vestono alla stessa maniera, il pensiero si uniforma. La moda è affermazione di sé. AXON REVOLUTION descrive il coraggio di distinguersi. Lo spot non vende abiti; promuove l'autonomia del pensiero individuale.",
        projectInfo: [
          { label: "Tipologia di Progetto", value: "Spot Concettuale" },
          { label: "Settore", value: "Alta Moda" },
          { label: "Durata", value: "1 minuto 51 secondi" },
          { label: "Tempo di Lavoro", value: "Circa 24 ore lavorative" },
          { label: "Stato", value: "Progetto Concettuale" }
        ],
        demonstrates: [
          "Direzione Creativa",
          "Sviluppo Concept",
          "Produzione IA",
          "Progettazione Storyboard",
          "Sintesi Colonna Sonora",
          "Mastering Editoriale 4K"
        ]
      },
      {
        id: "axon-drive",
        client: "AXON",
        title: "Drive Beyond Reality",
        subtitle: "AXON — Drive Beyond Reality è una pluripremiata campagna pubblicitaria per il settore auto di lusso, in cui un veicolo avveniristico attraversa atmosfere celestiali.",
        category: "Produzione Spot con IA",
        year: "2026",
        challenge: "Distinguere un veicolo elettrico pionieristico in un mercato pubblicitario saturo e standardizzato. Lo spot doveva coniugare stupore tecnologico e poesia visiva.",
        strategy: "Abbiamo immaginato una suggestiva estetica cosmica. Unendo modelli tridimensionali di precisione, scenari generati ed evolute simulazioni fisiche, abbiamo creato uno spazio in cui l'auto ridisegna l'universo circostante.",
        creativeProcess: "• Storyboard Narrativo : Passaggio fluido dalle profondità terrestri alle orbite dello spazio profondo.\n• Generazione Atmosfere : Sintesi di scenari spaziali coerenti e stabili per l'intero spot.\n• Simulazione Particellare : Creazione di scie di luce e vento d'aria lungo la sagoma della vettura.\n• Color Grading Editoriale : Regolazione cromatica manuale per assecondare la compostezza del design svizzero.",
        execution: "Impiegato semi di modelli dedicati per stabilizzare gli sfondi delle scene. Coordinato la generazione video, abbinato musica elettronica d'atmosfera e completato lo spot senza alcuna esitazione d'immagine.",
        technologyUsed: [
          "Generazione Video IA",
          "Editing Cinematografico",
          "Sintesi Immagini IA",
          "Cloudinary CDNs"
        ],
        outcome: "Uno spot di assoluto valore visivo che dimostra la possibilità di ridurre drasticamente i costi di ripresa mantenendo altissimi livelli estetici. Un modello operativo per i brand d'eccellenza.",
        creativeInsight: "Quando il reale incontra il sogno, il tragitto ordinario si fa viaggio dell'anima. Lo spot non presenta l'auto come mezzo di trasporto, ma come catalizzatore di emozioni profonde.",
        projectInfo: [
          { label: "Progetto", value: "AXON — Campagna Spaziale" },
          { label: "Categoria", value: "Produzione Spot con IA" },
          { label: "Settore", value: "Automobilistico di Lusso" },
          { label: "Durata", value: "1 minuto 40 secondi" },
          { label: "Lavoro", value: "Circa 12 ore" },
          { label: "Stato", value: "Progetto Concettuale" }
        ],
        demonstrates: [
          "Direzione Artistica",
          "Sviluppo Grafico",
          "Ingegneria di IA",
          "Design Automobilistico",
          "Storytelling di Brand",
          "Montaggio",
          "Sound Design",
          "Brand Design"
        ]
      },
      {
        id: "con-la-tuya",
        client: "Con La Tuya Contribuyente",
        title: "Portale Bilancio Pubblico e Trasparenza",
        subtitle: "Portale civico indipendente focalizzato sulla trasparenza dei conti dello Stato, analisi dati e informazione pubblica.",
        category: "Piattaforma di Informazione Civica",
        year: "2026",
        challenge: "Semplificare l'accesso e la lettura di enormi moli di dati fiscali governativi e documenti contabili solitamente incomprensibili, garantendo un'interfaccia neutrale e velocissima.",
        strategy: "Abbiamo concepito Con La Tuya Contribuyente come uno strumento di utilità civica mirato a far comprendere l'uso del denaro pubblico. Design neutrale, ordine tipografico e prestazioni elevate.",
        creativeProcess: "• Analisi dei Vincoli : Studio dei blocchi di comprensione dei cittadini dinanzi ai documenti della pubblica amministrazione.\n• Trattamento Dati Neutrale : Classificazione oggettiva dei capitoli di spesa per escludere valutazioni politiche e assicurare credibilità.\n• Progettazione Interfacce : Struttura di articoli puliti e grafici statistici ad alto impatto visivo.",
        execution: "Sviluppato un applicativo React ad altissima reattività con gerarchie editoriali calibrate, risposte del server inferiori a 100ms e gestualità touch mobile fluida.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Modellazione Dati",
          "Design Editoriale",
          "Ottimizzazione SEO",
          "Velocità di Caricamento"
        ],
        outcome: "Pubblicazione di un portale di informazione civica estremamente leggibile che rende trasparenti le finanze pubbliche, diventando in breve tempo una fonte di riferimento accreditata.",
        creativeInsight: "I portali civici richiedono rigore grafico. Una tipografia composta, ampie spaziazioni bianche e tabelle logiche stabiliscono una reputazione pubblica inattaccabile.",
        projectInfo: [
          { label: "Progetto", value: "Portale di Trasparenza Fiscale" },
          { label: "Partner", value: "Con La Tuya Contribuyente" },
          { label: "URL", value: "https://con-la-tuya.app" },
          { label: "Settore", value: "Trasparenza e Open Data" },
          { label: "Anno", value: "2026" },
          { label: "Stato", value: "In Produzione" }
        ],
        demonstrates: [
          "Tecnologia Civica",
          "Architettura dell'Informazione",
          "UI Design",
          "UX Research",
          "Sviluppo Web",
          "SEO & Performance"
        ]
      },
      {
        id: "menu-noir",
        client: "MENU NOIR",
        title: "Sistema Gestionale per Ristorazione",
        subtitle: "Software gestionale integrato per ristoranti che coordina i menu digitali in sala con le scorte in cucina e le metriche di vendita.",
        category: "Sistema Operativo per Ristorazione",
        year: "2026",
        challenge: "Le attività di ristorazione coordinano spesso l'ordinazione, la cucina e i conti con software differenti, determinando ritardi operativi e differenze di inventario.",
        strategy: "Sviluppo di un sistema operativo unico in grado di aggiornare la carta visibile ai clienti in base alle scorte reali della cucina, il tutto all'interno di un'elegante interfaccia nera opaca.",
        creativeProcess: "• Mappatura dei Processi : Esame delle fasi operative dalla ricezione dei prodotti in cucina alla cassa.\n• Design Midnight : Tema visivo scuro e riposante per gli occhi, ispirato alla precisione del design svizzero.\n• Collegamento Database : Sincronizzazione automatica per disattivare i piatti non più ordinabili sulla carta digitale.",
        execution: "Creazione di un'applicazione web progressiva solida e offline-first, basata su database Firebase e gestione immagini ottimizzata con Cloudinary.",
        technologyUsed: [
          "React SPA",
          "Firebase Cloud Firestore",
          "Tailwind CSS",
          "Sincronizzazione Dati Real-Time",
          "Gestione Stato Offline",
          "CDN Cloudinary"
        ],
        outcome: "Miglioramento dell'efficienza in sala, abbattimento degli sprechi alimentari in cucina del 18% e valorizzazione del prestigio del locale mediante un design sofisticato.",
        creativeInsight: "La carta di un locale d'eccellenza non è un semplice listino: è l'inizio dell'esperienza. Il nostro sistema riserva agli schermi lo stesso riguardo di un cartoncino pregiato.",
        projectInfo: [
          { label: "Progetto", value: "SaaS Ristorazione di Lusso" },
          { label: "Partner", value: "MENU NOIR" },
          { label: "Settore", value: "Tecnologie per Ristorazione" },
          { label: "Anno", value: "2026" },
          { label: "Stato", value: "In Fase Beta" }
        ],
        demonstrates: [
          "Design di Prodotto",
          "Sviluppo SaaS Full Stack",
          "Sincronizzazione Dati",
          "Ottimizzazione Risorse",
          "Architettura Offline"
        ]
      },
      {
        id: "sucupam",
        client: "SUCUPAM",
        title: "E-Commerce Industriale & Portale Aziendale",
        subtitle: "Rinnovamento dell'immagine digitale e sviluppo di una piattaforma commerciale B2B per l'ordinazione di componenti.",
        category: "Piattaforma di Commercio Industriale",
        year: "2026",
        challenge: "Organizzare il vasto catalogo industriale SUCUPAM in un commercio elettronico performante, capace di sveltire la gestione delle quotazioni per i clienti professionali.",
        strategy: "Progettazione di un'interfaccia ad alta densità informativa, ispirata al rigore dell'acciaio e della progettazione tecnica. Ottimizzazione delle dinamiche di filtro e dei tempi di risposta.",
        creativeProcess: "• Sistemazione del Catalogo : Classificazione metodica di oltre 200 componenti siderurgici in gruppi logici.\n• Estetica Tecnica : Selezione di tonalità metalliche, font a spaziatura fissa e linee di delimitazione sottili.\n• Motore di Ricerca Istantaneo : Sviluppo di un sistema di ricerca lato client, reattivo e senza tempi di attesa.",
        execution: "Sviluppo in React con TypeScript, e integrazione accurata dei tag strutturati Google per favorire il posizionamento dei singoli articoli industriali.",
        technologyUsed: [
          "React / TypeScript",
          "Tailwind CSS",
          "Stato del Catalogo Lato Client",
          "Canale Quotazioni B2B",
          "Marcatori SEO Strutturati"
        ],
        outcome: "Un portale commerciale all'avanguardia con un aumento del 42% delle visualizzazioni e un posizionamento organico di rilievo per le chiavi di ricerca B2B.",
        creativeInsight: "La meccanica di precisione merita interfacce di alto livello. Rivestendo articoli in acciaio con i canoni del design editoriale, trasformiamo componenti tecnici in oggetti di valore.",
        projectInfo: [
          { label: "Progetto", value: "E-Commerce Siderurgico" },
          { label: "Partner", value: "SUCUPAM" },
          { label: "Settore", value: "Siderurgia e Industria" },
          { label: "Anno", value: "2026" },
          { label: "Stato", value: "Attivo in Produzione" }
        ],
        demonstrates: [
          "Design Grafico",
          "Architettura dei Cataloghi",
          "B2B E-Commerce",
          "Ottimizzazione SEO",
          "Prestazioni del Client"
        ]
      },
      {
        id: "emilia-marsicano",
        client: "Emilia Marsicano Abogada",
        title: "Sito di Studio Legale di Pregio",
        subtitle: "Interfaccia web di impostazione editoriale, concepita e sviluppata per un rinomato studio legale in Florida.",
        category: "Sito Web di Brand Esclusivo",
        year: "2026",
        challenge: "Definire una presenza digitale di rilievo ed estremamente seria per l'avvocato Emilia Marsicano, discostandosi dai tradizionali ed eccessivi elenchi legali.",
        strategy: "Abbiamo disegnato un sito d'autore dai canoni classici, unendo armonia tipografica, velocità di risposta estrema e traduzione simultanea trasparente.",
        creativeProcess: "• Studio dei Concorrenti : Risoluzione dei problemi dei portali legali comuni (pagine lente, form macchinosi).\n• Tipografia di Carattere : Combinazione di un raffinato font serif per i titoli e un testo lineare di immediata leggibilità.\n• Griglia Editoriale : Spaziature bianche bilanciate e transizioni morbide per assecondare autorevolezza e decoro.\n• Gestione Lingue : Percorsi di navigazione diretti in inglese e spagnolo per assistere la clientela internazionale.",
        execution: "Sviluppo del portale in React con controllo accurato della cache, per garantire risposte immediate del sistema e agevolare il contatto.",
        technologyUsed: [
          "TypeScript",
          "React SPA",
          "Tailwind CSS",
          "Tipografia d'Autore",
          "Linee Guida Accessibilità (ADA)",
          "CDN Caching"
        ],
        outcome: "Un sito web professionale di alto livello in grado di ricevere e smistare richieste di consulenza, valorizzando l'immagine della professionista all'estero.",
        creativeInsight: "La presenza online di un grande avvocato deve incarnare la sua difesa della trasparenza e dell'ordine. Eliminando inutili orpelli grafici, lo studio si impone per il solo rigore formale.",
        projectInfo: [
          { label: "Progetto", value: "Portale Studio Legale" },
          { label: "Partner", value: "Emilia Marsicano Abogada" },
          { label: "URL", value: "https://www.emiliamarsicanoabogada.com" },
          { label: "Settore", value: "Consulenza Legale" },
          { label: "Anno", value: "2026" },
          { label: "Stato", value: "Disponibile Online" }
        ],
        demonstrates: [
          "Brand Design",
          "Sviluppo Portali Web",
          "Ingegneria Frontend",
          "Tipografia Editoriale",
          "Localizzazione Dati",
          "Moduli Contatto Protetti"
        ]
      }
    ]
  };

  return data[lang];
};
