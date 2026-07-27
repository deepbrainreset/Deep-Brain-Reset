import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const labels = {
    en: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "PREGUNTAS FRECUENTES // STUDIO FAQ",
      description: "Direct, objective responses about our capabilities, core services, and international operations.",
      faqs: [
        {
          q: "1. Does Deep Brain Reset produce commercial spots?",
          a: "Yes. We produce high-end commercial spots combining generative AI, CGI visual effects, 3D animation, and cinematic creative direction for brand launches, product campaigns, and digital advertising."
        },
        {
          q: "2. Does Deep Brain Reset develop websites?",
          a: "Yes. We engineer full-stack corporate websites, high-converting landing pages, e-commerce platforms, web applications, and custom digital portals built for speed, security, and sales performance."
        },
        {
          q: "3. Does Deep Brain Reset create 3D renders?",
          a: "Yes. We create architectural 3D renders, interior visualizations, product CGI, 3D motion graphics, and virtual tours designed to present ideas and developments before they are built."
        },
        {
          q: "4. Does Deep Brain Reset automate business processes?",
          a: "Yes. We build custom process automations, server-side AI agent workflows, system integrations, and operational dashboards that eliminate repetitive manual tasks and speed up operations."
        },
        {
          q: "5. Does Deep Brain Reset work with international clients?",
          a: "Yes. Deep Brain Reset serves corporate clients across the United States, Europe, Spain, Argentina, and Latin America, operating with multi-language capabilities and global deployment infrastructure."
        }
      ]
    },
    es: {
      badge: "PREGUNTAS FRECUENTES",
      title: "PREGUNTAS FRECUENTES",
      description: "Respuestas claras sobre nuestras capacidades, servicios principales y modalidades de trabajo.",
      faqs: [
        {
          q: "1. ¿Deep Brain Reset produce spots publicitarios?",
          a: "Sí. Producimos spots publicitarios de alta gama combinando inteligencia artificial generativa, efectos visuales CGI, animación 3D y dirección creativa cinematográfica para campañas de marca y lanzamientos."
        },
        {
          q: "2. ¿Deep Brain Reset desarrolla páginas web?",
          a: "Sí. Diseñamos y desarrollamos sitios web corporativos full stack, landing pages de alta conversión, plataformas de e-commerce y aplicaciones web a medida enfocadas en velocidad, seguridad y ventas."
        },
        {
          q: "3. ¿Deep Brain Reset realiza renders 3D?",
          a: "Sí. Realizamos renderizado 3D arquitectónico, visualizaciones de interiores, CGI de producto, animaciones 3D y recorridos virtuales para presentar proyectos antes de construirlos."
        },
        {
          q: "4. ¿Deep Brain Reset automatiza procesos empresariales?",
          a: "Sí. Creamos automatizaciones de procesos a medida, flujos de agentes de IA, integraciones entre sistemas y dashboards operativos para eliminar tareas manuales repetitivas."
        },
        {
          q: "5. ¿Deep Brain Reset trabaja con clientes internacionales?",
          a: "Sí. Trabajamos con empresas y marcas en Estados Unidos, Europa, España, Argentina y Latinoamérica, con soporte multiidioma y capacidad de despliegue global."
        }
      ]
    },
    de: {
      badge: "HÄUFIG GESTELLTE FRAGEN",
      title: "HÄUFIG GESTELLTE FRAGEN",
      description: "Direkte Antworten auf Ihre Fragen zu unseren Kompetenzen, Kernleistungen und internationaler Zusammenarbeit.",
      faqs: [
        {
          q: "1. Produziert Deep Brain Reset Werbefilme?",
          a: "Ja. Wir produzieren erstklassige Werbefilme und Spots unter Einsatz von generativer KI, CGI-Visual-Effects, 3D-Animation und filmischer Kreativdirektion."
        },
        {
          q: "2. Entwickelt Deep Brain Reset Websites?",
          a: "Ja. Wir entwickeln Full-Stack-Unternehmenswebsites, hochkonvertierende Landingpages, E-Commerce-Plattformen und maßgeschneiderte Webanwendungen."
        },
        {
          q: "3. Erstellt Deep Brain Reset 3D-Renderings?",
          a: "Ja. Wir erstellen Architektur-Renderings, Innenraum-Visualisierungen, Produkt-CGI, 3D-Animationen und virtuelle Touren."
        },
        {
          q: "4. Automatisiert Deep Brain Reset Geschäftsprozesse?",
          a: "Ja. Wir entwickeln maßgeschneiderte Prozessautomatisierungen, KI-Agenten-Workflows, Systemintegrationen und operative Dashboards."
        },
        {
          q: "5. Arbeiten Sie mit internationalen Kunden zusammen?",
          a: "Ja. Wir arbeiten für Unternehmen in den USA, Europa, Spanien, Argentinien und Lateinamerika mit internationaler Infrastruktur."
        }
      ]
    },
    fr: {
      badge: "QUESTIONS FRÉQUENTES",
      title: "QUESTIONS FRÉQUENTES",
      description: "Réponses directes et objectives sur nos expertises, services et opérations internationales.",
      faqs: [
        {
          q: "1. Deep Brain Reset produit-il des spots publicitaires ?",
          a: "Oui. Nous produisons des spots publicitaires haut de gamme combinant IA générative, effets visuels CGI, animation 3D et direction artistique cinématographique."
        },
        {
          q: "2. Deep Brain Reset développe-t-il des sites web ?",
          a: "Oui. Nous développons des sites web d'entreprise full stack, des landing pages à forte conversion, des plateformes e-commerce et des applications web sur mesure."
        },
        {
          q: "3. Deep Brain Reset réalise-t-il des rendus 3D ?",
          a: "Oui. Nous réalisons des rendus 3D architecturaux, de la visualisation d'intérieur, du CGI produit, des animations 3D et des visites virtuelles."
        },
        {
          q: "4. Deep Brain Reset automatise-t-il les processus d'entreprise ?",
          a: "Oui. Nous concevons des automatisations de processus sur mesure, des workflows d'agents IA, des intégrations de systèmes et des tableaux de bord opérationnels."
        },
        {
          q: "5. Deep Brain Reset travaille-t-il avec des clients internationaux ?",
          a: "Oui. Nous accompagnons des entreprises aux États-Unis, en Europe, en Espagne, en Argentine et en Amérique latine."
        }
      ]
    },
    it: {
      badge: "DOMANDE FREQUENTI",
      title: "DOMANDE FREQUENTI",
      description: "Risposte chiare e dirette sulle nostre competenze, servizi principali e collaborazioni internazionali.",
      faqs: [
        {
          q: "1. Deep Brain Reset produce spot pubblicitari?",
          a: "Sì. Produciamo spot pubblicitari di alta gamma combinando IA generativa, effetti visivi CGI, animazione 3D e direzione artistica cinematografica."
        },
        {
          q: "2. Deep Brain Reset sviluppa siti web?",
          a: "Sì. Sviluppiamo siti web aziendali full stack, landing page ad alta conversione, piattaforme e-commerce e applicazioni web su misura."
        },
        {
          q: "3. Deep Brain Reset realizza rendering 3D?",
          a: "Sì. Realizziamo rendering 3D architettonici, visualizzazioni d'interni, CGI di prodotto, animazioni 3D e tour virtuali."
        },
        {
          q: "4. Deep Brain Reset automatizza i processi aziendali?",
          a: "Sì. Creiamo automazioni di processo su misura, flussi di lavoro con agenti IA, integrazioni di sistema e dashboard operative."
        },
        {
          q: "5. Deep Brain Reset collabora con clienti internazionali?",
          a: "Sì. Collaboriamo con aziende negli Stati Uniti, in Europa, Spagna, Argentina e America Latina."
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
        <div className="text-center space-y-4 mb-16">
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
                className="bg-studio-bg border border-studio-border rounded-sm transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left p-6 flex justify-between items-center space-x-4 cursor-pointer hover:bg-studio-panel/50 transition-colors bg-transparent border-0"
                >
                  <span className="text-sm md:text-base font-display tracking-wide uppercase text-studio-primary font-medium">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full border border-studio-border text-studio-caption transition-transform duration-300 ${isOpen ? "rotate-180 text-studio-primary border-studio-primary" : ""}`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-studio-secondary font-light leading-relaxed border-t border-studio-border/40 mt-2">
                        {faq.a}
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
