import { useLanguage } from "../LanguageContext";
import { Cpu, Server, Layers, Cloud, Settings, Film, Palette, Terminal } from "lucide-react";

export default function TechStack() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "TECHNOLOGY",
      title: "Technology.",
      description: "We de-emphasize technical vanity. Below is a minimal presentation of the architectural components, libraries, and frameworks actively deployed in our operations. No fluff, only verified tech.",
      categories: {
        frontend: "Frontend Architecture",
        backend: "Backend Services",
        ai: "Artificial Intelligence",
        automation: "Workflow Automation",
        cloud: "Cloud Services",
        video: "Video Production",
        design: "Design Foundations",
        infrastructure: "Infrastructure"
      },
      items: {
        frontend: ["React 18+", "TypeScript", "Tailwind CSS", "Vite", "Motion Engine", "WebGL / GLSL"],
        backend: ["Node.js Server", "TypeScript ESM", "Express API", "RESTful Routing", "Secure SSL Streams"],
        ai: ["Gemini SDK Core", "Structured Outputs", "Context Retrieval", "Image Generation Diffusion", "Semantic Mapping"],
        automation: ["Redis Queue Tasking", "Webhooks Systems", "Bespoke Agent loops", "Third-party Integration Gateway"],
        cloud: ["Cloud Run Container", "VPC Access Networks", "Secret Manager Storage", "Global Load Balancing"],
        video: ["CGI Simulation renders", "Unreal Engine Assets", "Advanced Post-Production Audio", "Color Science grading"],
        design: ["Swiss Typographic Systems", "Bespoke UX Wireframing", "Luxury Editorial Layouts", "Aesthetic Themeing"],
        infrastructure: ["Nginx Proxy server", "Git Repository system", "Continuous Deployments", "Docker runtime"]
      },
      status: "VERIFIED_DEP // STATUS_OK"
    },
    es: {
      badge: "TECNOLOGÍA",
      title: "Tecnología.",
      description: "Dejamos de lado la vanidad técnica. A continuación, se presenta de forma minimalista los componentes de arquitectura, librerías y marcos de trabajo activos en nuestras operaciones. Sin rodeos, solo tecnología verificada.",
      categories: {
        frontend: "Arquitectura Frontend",
        backend: "Servicios Backend",
        ai: "Inteligencia Artificial",
        automation: "Automatización de Flujos",
        cloud: "Servicios en la Nube",
        video: "Producción de Video",
        design: "Fundamentos de Diseño",
        infrastructure: "Infraestructura"
      },
      items: {
        frontend: ["React 18+", "TypeScript", "Tailwind CSS", "Vite", "Motor de Movimiento", "WebGL / GLSL"],
        backend: ["Servidor Node.js", "TypeScript ESM", "API Express", "Ruteo RESTful", "Transmisiones SSL Seguras"],
        ai: ["Gemini SDK Core", "Respuestas Estructuradas", "Recuperación de Contexto", "Difusión de Imágenes", "Mapeo Semántico"],
        automation: ["Tareas en Cola Redis", "Sistemas Webhooks", "Bucles de Agentes a Medida", "Pasarela de Integración de Terceros"],
        cloud: ["Contenedores Cloud Run", "Redes de Acceso VPC", "Almacén Secret Manager", "Balanceo de Carga Global"],
        video: ["Renders de Simulación CGI", "Activos de Unreal Engine", "Postproducción de Audio Avanzada", "Gradación de Color de Alta Precisión"],
        design: ["Sistemas Tipográficos Suizos", "Esquemas UX a Medida", "Diseños Editoriales de Lujo", "Tematización Estética"],
        infrastructure: ["Servidor Proxy Nginx", "Sistema de Repositorio Git", "Despliegues Continuos", "Entorno de Docker"]
      },
      status: "DEP_VERIFICADA // ESTADO_OK"
    },
    de: {
      badge: "TECHNOLOGIE",
      title: "Technologie.",
      description: "Wir verzichten auf technische Prahlerei. Unten finden Sie eine minimalistische Übersicht der architektonischen Komponenten, Bibliotheken und Frameworks, die in unseren Projekten aktiv im Einsatz sind. Keine heiße Luft, nur bewährte Technik.",
      categories: {
        frontend: "Frontend-Architektur",
        backend: "Backend-Dienste",
        ai: "Künstliche Intelligenz",
        automation: "Workflow-Automatisierung",
        cloud: "Cloud-Dienste",
        video: "Videoproduktion",
        design: "Design-Grundlagen",
        infrastructure: "Infrastruktur"
      },
      items: {
        frontend: ["React 18+", "TypeScript", "Tailwind CSS", "Vite", "Motion Engine", "WebGL / GLSL"],
        backend: ["Node.js-Server", "TypeScript ESM", "Express API", "RESTful Routing", "Sichere SSL-Streams"],
        ai: ["Gemini SDK Core", "Strukturierte Ausgaben", "Kontext-Abruf", "Bildgenerierungs-Diffusion", "Semantisches Mapping"],
        automation: ["Redis-Queue-Tasks", "Webhook-Systeme", "Eigene Agenten-Loops", "Drittanbieter-Gateways"],
        cloud: ["Cloud Run Container", "VPC-Netzwerke", "Secret Manager-Speicher", "Globales Load Balancing"],
        video: ["CGI-Simulations-Renders", "Unreal Engine-Assets", "Erweiterte Audio-Postproduktion", "Color Science Grading"],
        design: ["Schweizer Typografie-Systeme", "Individuelles UX-Wireframing", "Edle Editorial-Layouts", "Ästhetische Design-Systeme"],
        infrastructure: ["Nginx-Proxy-Server", "Git-Repository-System", "Continuous Deployment", "Docker-Laufzeitumgebung"]
      },
      status: "VERIFIZIERTE_DEP // STATUS_OK"
    },
    fr: {
      badge: "TECHNOLOGIE",
      title: "Technologie.",
      description: "Nous évitons l'ostentation technique. Voici une présentation minimale des composants d'architecture, des bibliothèques et des frameworks activement déployés dans nos opérations. Pas de superflu, uniquement de la technologie validée.",
      categories: {
        frontend: "Architecture Frontend",
        backend: "Services Backend",
        ai: "Intelligence Artificielle",
        automation: "Automatisation des Flux",
        cloud: "Services Cloud",
        video: "Production Vidéo",
        design: "Fondations de Design",
        infrastructure: "Infrastructure"
      },
      items: {
        frontend: ["React 18+", "TypeScript", "Tailwind CSS", "Vite", "Moteur de Mouvement", "WebGL / GLSL"],
        backend: ["Serveur Node.js", "TypeScript ESM", "API Express", "Routage RESTful", "Flux SSL Sécurisés"],
        ai: ["Gemini SDK Core", "Données Structurées", "Récupération de Contexte", "Diffusion d'Images", "Cartographie Sémantique"],
        automation: ["Tâches de File Redis", "Systèmes Webhooks", "Boucles d'Agents sur Mesure", "Passerelles d'Intégration Tierces"],
        cloud: ["Conteneurs Cloud Run", "Réseaux d'Accès VPC", "Stockage Secret Manager", "Équilibrage de Charge Global"],
        video: ["Rendus de Simulation CGI", "Ressources Unreal Engine", "Post-Production Audio Avancée", "Étalonnage de Couleur de Haute Précision"],
        design: ["Systèmes Typographiques Suisses", "Zonages UX Personnalisés", "Mises en Page Éditoriales de Luxe", "Thématisation Esthétique"],
        infrastructure: ["Serveur Proxy Nginx", "Système de Dépôt Git", "Déploiements Continus", "Environnement Docker"]
      },
      status: "DEP_VALIDÉE // STATUT_OK"
    },
    it: {
      badge: "TECNOLOGIA",
      title: "Tecnologia.",
      description: "Evitiamo l'autocelebrazione tecnica. Di seguito è riportata una sintesi minimalista dei componenti di architettura, librerie e framework attivamente impiegati nelle nostre attività operative. Solo tecnologia verificata.",
      categories: {
        frontend: "Architettura Frontend",
        backend: "Servizi Backend",
        ai: "Inteligenza Artificiale",
        automation: "Automazione dei Flussi",
        cloud: "Servizi Cloud",
        video: "Produzione Video",
        design: "Fondamenti di Design",
        infrastructure: "Infrastruttura"
      },
      items: {
        frontend: ["React 18+", "TypeScript", "Tailwind CSS", "Vite", "Motore di Movimento", "WebGL / GLSL"],
        backend: ["Server Node.js", "TypeScript ESM", "API Express", "Routaggio RESTful", "Flussi SSL Sicuri"],
        ai: ["Gemini SDK Core", "Output Strutturati", "Recupero del Contesto", "Diffusione Immagini", "Mapeo Semantico"],
        automation: ["Task in Coda Redis", "Sistemi Webhook", "Cicli di Agenti su Misura", "Gateway di Integrazione Terzi"],
        cloud: ["Container Cloud Run", "Reti di Accesso VPC", "Archiviazione Secret Manager", "Bilanciamento di Carico Globale"],
        video: ["Rendering di Simulazione CGI", "Asset Unreal Engine", "Post-produzione Audio Avanzata", "Gradazione di Colore di Alta Precisione"],
        design: ["Sistemi Tipografici Svizzeri", "Progettazione UX su Misura", "Impaginazioni Editoriali di Lusso", "Tematizzazione Estetica"],
        infrastructure: ["Server Proxy Nginx", "Sistema di Repository Git", "Distribuzione Continua", "Runtime Docker"]
      },
      status: "DIP_VERIFICATA // STATO_OK"
    }
  }[language];

  const stack = [
    {
      category: labels.categories.frontend,
      icon: <Layers size={14} className="text-studio-muted" />,
      items: labels.items.frontend
    },
    {
      category: labels.categories.backend,
      icon: <Server size={14} className="text-studio-muted" />,
      items: labels.items.backend
    },
    {
      category: labels.categories.ai,
      icon: <Cpu size={14} className="text-studio-muted" />,
      items: labels.items.ai
    },
    {
      category: labels.categories.automation,
      icon: <Settings size={14} className="text-studio-muted" />,
      items: labels.items.automation
    },
    {
      category: labels.categories.cloud,
      icon: <Cloud size={14} className="text-studio-muted" />,
      items: labels.items.cloud
    },
    {
      category: labels.categories.video,
      icon: <Film size={14} className="text-studio-muted" />,
      items: labels.items.video
    },
    {
      category: labels.categories.design,
      icon: <Palette size={14} className="text-studio-muted" />,
      items: labels.items.design
    },
    {
      category: labels.categories.infrastructure,
      icon: <Terminal size={14} className="text-studio-muted" />,
      items: labels.items.infrastructure
    }
  ];

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-studio-bg relative border-b border-studio-border">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {labels.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
              {labels.title}
            </h2>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {labels.description}
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((cat, i) => (
            <div
              id={`tech-cat-${i}`}
              key={cat.category}
              className="p-6 bg-studio-panel border border-studio-border rounded-sm hover:border-studio-caption/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-studio-border pb-3">
                  {cat.icon}
                  <span className="text-xs font-mono font-medium text-studio-primary uppercase tracking-wider">
                    {cat.category}
                  </span>
                </div>

                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-[11px] font-mono text-studio-secondary flex items-start space-x-1.5">
                      <span className="text-studio-caption font-bold select-none">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-studio-border/30 text-[9px] font-mono text-studio-muted">
                {labels.status}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
