import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const labels = {
    en: {
      badge: "10 // FREQUENTLY ASKED QUESTIONS",
      title: "Diagnostic FAQ",
      description: "Resolve structural uncertainties. Below are objective breakdowns of our pricing structures, remote work parameters, and AI-creative collaboration policies.",
      faqs: [
        {
          q: "How long does a typical project development cycle take?",
          a: "Our diagnostic sprints usually resolve within 1-2 weeks. Full stack web platforms and campaign productions typically deploy within 6-12 weeks depending on integration density, WebGL requirements, and automation pipeline complexity. We execute using high-frequency sprints with zero operational lag."
        },
        {
          q: "How do you coordinate remote operations and team hand-offs?",
          a: "We deploy dedicated client portals. Every technical milestone, custom wireframe prototype, and background automation logs are fully transparent and accessible in real-time. Hand-off documentation is prepared modularly so your internal developers can assume full custody smoothly."
        },
        {
          q: "Do you collaborate with international corporate clients?",
          a: "Yes. Our standard systems are engineered for international audiences, with robust CDN routing, global multi-language translation compliance, and local tax integration processors. We operate across European, North American, and Asian coordinate frameworks."
        },
        {
          q: "Can artificial intelligence replace narrative creative direction?",
          a: "Never. Artificial intelligence is an exceptional execution accelerator, turning hours of background rendering or data parsing into milliseconds of automatic pipeline flows. However, human strategy, emotional friction, and artistic aesthetic choice remain the sole source of premium branding value."
        },
        {
          q: "How are custom software systems and commercials priced?",
          a: "We price strictly on diagnostic parameters. We identify immediate commercial value leverage, define precise operational specifications, and deliver fixed-fee contracts before commits are made. No hidden Hourly rates, no surprise billing cycles."
        },
        {
          q: "Can you collaborate with our existing in-house engineering teams?",
          a: "Yes. We operate as a tactical taskforce. We can audit legacy architectures, write high-performance custom API layers, build targeted generative agents, or produce cinematic assets that feed directly into your existing git repository workflows."
        }
      ]
    },
    es: {
      badge: "10 // PREGUNTAS FRECUENTES",
      title: "Preguntas Frecuentes",
      description: "Resuelva incertidumbres estructurales. A continuación, se desglosan de forma objetiva nuestras estructuras de precios, parámetros de trabajo remoto y políticas de colaboración creativa con IA.",
      faqs: [
        {
          q: "¿Cuánto tiempo toma un ciclo típico de desarrollo de proyecto?",
          a: "Nuestros sprints de diagnóstico suelen completarse en 1 o 2 semanas. Las plataformas web completas y las producciones de campaña generalmente se despliegan en 6 a 12 semanas, dependiendo de la densidad de integración, los requisitos de WebGL y la complejidad de la automatización. Ejecutamos mediante sprints de alta frecuencia sin demoras operativas."
        },
        {
          q: "¿Cómo coordinan las operaciones remotas y las entregas de proyectos?",
          a: "Desplegamos portales de clientes dedicados. Cada hito técnico, prototipo interactivo y registro de automatización es completamente transparente y accesible en tiempo real. La documentación de entrega se prepara de manera modular para que sus desarrolladores internos asuman el control sin fricciones."
        },
        {
          q: "¿Colaboran con clientes corporativos internacionales?",
          a: "Sí. Nuestros sistemas estándar están diseñados para audiencias internacionales, con enrutamiento CDN robusto, cumplimiento global de traducción multiidioma y procesadores de integración fiscal local. Operamos bajo marcos de Europa, América del Norte y América Latina."
        },
        {
          q: "¿Puede la inteligencia artificial reemplazar la dirección creativa narrativa?",
          a: "Jamás. La inteligencia artificial es un acelerador de ejecución excepcional, capaz de transformar horas de renderizado o procesamiento de datos en milisegundos de flujos de automatizados. Sin embargo, la estrategia humana, la tensión emocional y la dirección estética siguen siendo la única fuente de valor para marcas de alta gama."
        },
        {
          q: "¿Cómo se definen los precios de los sistemas de software y los comerciales a medida?",
          a: "Definimos nuestros precios estrictamente con base en parámetros de diagnóstico. Identificamos puntos de apalancamiento comercial, definimos especificaciones operativas precisas y entregamos contratos de tarifa fija antes de iniciar el trabajo. Sin tarifas por hora ocultas ni ciclos de facturación sorpresa."
        },
        {
          q: "¿Pueden colaborar con nuestros equipos de ingeniería internos?",
          a: "Sí. Operamos como una fuerza de tareas táctica. Podemos auditar arquitecturas heredadas, escribir capas de API de alto rendimiento, construir agentes generativos específicos o producir activos cinematográficos que se integren directamente en sus flujos de trabajo de repositorios Git existentes."
        }
      ]
    },
    de: {
      badge: "10 // HÄUFIG GESTELLTE FRAGEN",
      title: "Häufig Gestellte Fragen",
      description: "Lösen Sie strukturelle Unklarheiten. Unten finden Sie sachliche Erklärungen zu unseren Preisstrukturen, Arbeitsmodellen und Richtlinien zur kreativen KI-Zusammenarbeit.",
      faqs: [
        {
          q: "Wie lange dauert ein typischer Projektentwicklungszyklus?",
          a: "Unsere Diagnose-Sprints dauern meist 1-2 Wochen. Vollwertige Webplattformen und Kampagnenproduktionen werden in der Regel innerhalb von 6-12 Wochen bereitgestellt – je nach Integrationstiefe, WebGL-Anforderungen und Komplexität der Automatisierungs-Pipeline. Wir arbeiten in hochfrequenten Sprints ohne Verzögerungen."
        },
        {
          q: "Wie koordinieren Sie die Zusammenarbeit aus der Ferne und Projektübergaben?",
          a: "Wir stellen dedizierte Kundenportale bereit. Jeder technische Meilenstein, interaktive Prototyp und jedes Automatisierungsprotokoll ist in Echtzeit transparent einsehbar. Die Projektdokumentation ist modular aufgebaut, sodass Ihre internen Entwickler den Code reibungslos übernehmen können."
        },
        {
          q: "Arbeiten Sie mit internationalen Unternehmenskunden zusammen?",
          a: "Ja. Unsere Systeme sind standardmäßig auf internationale Zielgruppen ausgelegt – mit robustem CDN-Routing, nativer Mehrsprachigkeit und lokalen Steuerintegrations-Prozessoren. Wir arbeiten für Partner in Europa, Nordamerika und Asien."
        },
        {
          q: "Kann künstliche Intelligenz die kreative und narrative Leitung ersetzen?",
          a: "Niemals. Künstliche Intelligenz ist ein hervorragender Beschleuniger, der stundenlanges Rendern oder Datenanalysen in Millisekunden automatisierter Workflows verwandelt. Menschliche Strategie, emotionale Reibung und ästhetische Entscheidungen bleiben jedoch die einzige Quelle für echten Premium-Markenwert."
        },
        {
          q: "Wie erfolgt die Preisgestaltung für Softwaresysteme und Videoproduktionen?",
          a: "Unsere Preisgestaltung basiert ausschließlich auf Diagnoseparametern. Wir identifizieren Hebel zur direkten Wertschöpfung, definieren präzise Anforderungen und bieten Festpreisverträge an, bevor wir mit der Arbeit beginnen. Keine versteckten Stundensätze, keine überraschenden Rechnungen."
        },
        {
          q: "Können Sie mit unseren bestehenden internen Entwicklerteams zusammenarbeiten?",
          a: "Ja. Wir agieren als taktische Taskforce. Wir können bestehende Architekturen prüfen, leistungsstarke API-Schnittstellen schreiben, spezialisierte generative Agenten entwickeln oder filmische Assets erstellen, die sich direkt in Ihre Git-Workflows einfügen."
        }
      ]
    },
    fr: {
      badge: "10 // QUESTIONS FRÉQUENTES",
      title: "FAQ de Diagnostic",
      description: "Levez toutes les incertitudes opérationnelles. Voici une présentation objective de nos modèles de tarification, de notre organisation à distance et de nos politiques de création assistée par IA.",
      faqs: [
        {
          q: "Combien de temps dure un cycle typique de développement ?",
          a: "Nos sprints de diagnostic durent généralement de 1 à 2 semaines. Les plateformes web complètes et les campagnes de marque sont déployées en 6 à 12 semaines selon la complexité des intégrations, les besoins en WebGL et l'automatisation des flux. Nous travaillons en sprints courts à haute fréquence, sans aucun temps mort."
        },
        {
          q: "Comment organisez-vous le travail à distance et les transferts de compétences ?",
          a: "Nous mettons en place des portails clients dédiés. Chaque jalon technique, prototype fonctionnel et journal d'automatisation est accessible en temps réel et en toute transparence. La documentation de transfert est rédigée de façon modulaire afin que vos équipes internes puissent en prendre le contrôle sans difficulté."
        },
        {
          q: "Travaillez-vous avec des clients corporate internationaux ?",
          a: "Oui. Nos architectures sont conçues pour des audiences mondiales, intégrant un routage CDN robuste, une gestion native du multilinguisme et des passerelles de facturation locales. Nous intervenons pour des clients en Europe, en Amérique du Nord et en Amérique Latine."
        },
        {
          q: "L'intelligence artificielle peut-elle remplacer la direction de création ?",
          a: "Jamais. L'intelligence artificielle est un accélérateur d'exécution exceptionnel, qui convertit des heures de rendu graphique ou de traitement de données en millisecondes de flux automatisés. Néanmoins, la stratégie humaine, la nuance émotionnelle et les choix esthétiques restent l'unique source de valeur d'une marque de prestige."
        },
        {
          q: "Comment sont définis les tarifs de vos logiciels et vidéos ?",
          a: "Nos tarifs sont basés sur des paramètres de diagnostic précis. Nous identifions les leviers de valeur ajoutée commerciale, définissons des spécifications rigoureuses et présentons des contrats à montant fixe avant tout engagement. Sans taux horaire masqué ni frais imprévus."
        },
        {
          q: "Pouvez-vous collaborer avec nos équipes internes de développement ?",
          a: "Oui. Nous intervenons en équipe d'intervention tactique. Nous pouvons auditer des architectures existantes, développer des API sur mesure de haute performance, programmer des agents génératifs dédiés ou produire des créations vidéo s'intégrant directement dans vos dépôts Git."
        }
      ]
    },
    it: {
      badge: "10 // DOMANDE FREQUENTI",
      title: "FAQ di Diagnostica",
      description: "Risolvete i dubbi strutturali. Di seguito sono riportati i dettagli sulle nostre tariffe, sulle modalità di lavoro a distanza e sulle politiche di collaborazione creativa con l'IA.",
      faqs: [
        {
          q: "Quanto dura un tipico ciclo di sviluppo del progetto?",
          a: "I nostri sprint diagnostici si completano di norma in 1-2 settimane. Le piattaforme web complesse e le produzioni di campagne pubblicitarie vengono distribuite in 6-12 settimane, a seconda della densità delle integrazioni, dei requisiti WebGL e della complessità dei flussi. Lavoriamo con sprint ad alta frequenza senza ritardi operativi."
        },
        {
          q: "Come coordinate le attività a distanza e i passaggi di consegne?",
          a: "Utilizziamo portali dedicati per i clienti. Ogni obiettivo tecnico, prototipo e registro di automazione è completamente trasparente e accessibile in tempo reale. I documenti di consegna sono strutturati in modo modulare per consentire ai vostri sviluppatori interni di assumere il controllo senza intoppi."
        },
        {
          q: "Collaborate con clienti societari internazionali?",
          a: "Sì. I nostri sistemi sono progettati per un pubblico globale, con instradamento CDN ottimizzato, supporto multilingua e sistemi di integrazione fiscale locale. Operiamo per brand in Europa, Nord America e America Latina."
        },
        {
          q: "L'intelligenza artificiale può sostituire la direzione artistica narrativa?",
          a: "Mai. L'intelligenza artificiale rappresenta un formidabile acceleratore esecutivo, riducendo a millisecondi attività complesse di rendering o analisi dati. Tuttavia, la strategia umana, la sensibilità emotiva e le scelte estetiche restano l'unica vera fonte di valore per un brand di alto livello."
        },
        {
          q: "Come vengono definiti i prezzi di software e campagne pubblicitarie?",
          a: "Le nostre tariffe si basano esclusivamente su parametri diagnostici. Identifichiamo il valore strategico, definiamo le specifiche operative e forniamo contratti a tariffa fissa prima dell'inizio delle attività. Nessun costo orario nascosto o fatture impreviste."
        },
        {
          q: "Potete collaborare con il nostro team interno di sviluppatori?",
          a: "Sì. Operiamo come una task force strategica. Possiamo verificare architetture esistenti, sviluppare API personalizzate ad alte prestazioni, creare agenti generativi mirati o produrre contenuti video pronti per integrarsi nei vostri flussi di lavoro Git."
        }
      ]
    }
  }[language];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-studio-panel border-b border-studio-border relative">
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-mono tracking-widest text-studio-caption uppercase block">
            {labels.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-light text-studio-primary uppercase tracking-tight">
            {labels.title}
          </h2>
          <p className="text-sm text-studio-secondary font-light leading-relaxed max-w-xl mx-auto">
            {labels.description}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {labels.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                id={`faq-item-${i}`}
                key={i}
                className="bg-studio-bg border border-studio-border rounded-sm transition-all duration-500 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer bg-transparent border-0"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle size={14} className="text-studio-caption shrink-0" />
                    <span className="text-xs md:text-sm font-display text-studio-primary uppercase tracking-wide">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-studio-caption transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-studio-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-studio-border/30">
                        <p className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
