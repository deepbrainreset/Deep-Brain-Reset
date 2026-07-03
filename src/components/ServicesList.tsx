import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { getLocalizedServices } from "../portfolioTranslations";
import { Plus, Minus, ArrowRight, Layers, Database, Shield, Film } from "lucide-react";

export default function ServicesList() {
  const { language } = useLanguage();
  const tSection = translations.services[language];
  const localizedServices = getLocalizedServices(language);
  const [selectedId, setSelectedId] = useState<string | null>("creative-advertising");

  const getIcon = (id: string) => {
    switch (id) {
      case "creative-advertising":
      case "ai-commercial":
        return <Film size={18} />;
      case "full-stack-dev":
      case "premium-websites":
      case "custom-platforms":
        return <Layers size={18} />;
      case "business-automation":
      case "ai-integration":
        return <Database size={18} />;
      case "creative-consulting":
        return <Shield size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  const serviceDetailsMap = {
    en: {
      "creative-advertising": {
        problem: "Brand anonymity and weak digital presence that fails to capture premium consumer attention.",
        beneficiaries: "High-end consumer brands, luxury direct-to-consumer labels, and elite agencies."
      },
      "ai-commercial": {
        problem: "Astronomical costs of traditional cinematic camera work, locations, and slow manual CGI renders.",
        beneficiaries: "International marketing departments, boutique product manufactures, and digital content creators."
      },
      "full-stack-dev": {
        problem: "Fragile, disconnected codebases and sluggish APIs that crash during intensive user traffic spikes.",
        beneficiaries: "Scaling SaaS platforms, high-transaction web systems, and modern tech startups."
      },
      "premium-websites": {
        problem: "Slow, generic template designs that dilute brand reputation and fail to convey high-end aesthetic value.",
        beneficiaries: "Luxury hospitality houses, architecture firms, high-end design agencies, and executive portfolios."
      },
      "custom-platforms": {
        problem: "Messy operational friction and lost client data due to using five different disconnected SaaS systems.",
        beneficiaries: "B2B client coordinators, scheduling businesses, and operations directors."
      },
      "business-automation": {
        problem: "Overhead wastage caused by manual copy-pasting of records, inventory data, and dispatch manifests.",
        beneficiaries: "Logistics operators, administrative back-offices, and high-frequency dispatch teams."
      },
      "ai-integration": {
        problem: "Stale search tools and robotic email parsers that fail to understand conversational semantics and nuance.",
        beneficiaries: "Information curators, customer service managers, and risk compliance executives."
      },
      "creative-consulting": {
        problem: "Confused technical roadmaps, expensive software overlaps, and lack of cohesive creative design codes.",
        beneficiaries: "Founders, corporate executive boards, and newly appointed chief technology officers."
      }
    },
    es: {
      "creative-advertising": {
        problem: "Anonimato de marca y presencia digital débil que no logra capturar la atención del consumidor premium.",
        beneficiaries: "Marcas de consumo de alta gama, firmas de lujo directas al consumidor y agencias de élite."
      },
      "ai-commercial": {
        problem: "Costos astronómicos de producción de cine tradicional, locaciones costosas y renders lentos hechos a mano.",
        beneficiaries: "Departamentos de marketing internacionales, fabricantes exclusivos de nicho y creadores visuales."
      },
      "full-stack-dev": {
        problem: "Bases de código frágiles y APIs lentas que fallan ante picos masivos de tráfico o consultas simultáneas.",
        beneficiaries: "Plataformas SaaS en escalamiento, sistemas web de transacciones intensivas y startups tecnológicas."
      },
      "premium-websites": {
        problem: "Diseños genéricos basados en plantillas lentas que diluyen el valor y la estética prestigiosa de su marca.",
        beneficiaries: "Establecimientos de lujo, estudios de arquitectura, firmas de diseño exclusivo y carteras de ejecutivos."
      },
      "custom-platforms": {
        problem: "Desorden operativo masivo y pérdida de datos debido al uso de herramientas SaaS dispersas y desconectadas.",
        beneficiaries: "Coordinadores de clientes B2B, empresas de servicios y directores de operaciones."
      },
      "business-automation": {
        problem: "Pérdida de horas operativas y errores manuales por procesos repetitivos de tipeo de registros e inventario.",
        beneficiaries: "Operadores logísticos, back-offices administrativos y equipos de despacho de alta frecuencia."
      },
      "ai-integration": {
        problem: "Buscadores obsoletos y automatizaciones rígidas de texto incapaces de comprender el contexto semántico.",
        beneficiaries: "Curadores de información, gerentes de servicio al cliente y analistas de riesgos."
      },
      "creative-consulting": {
        problem: "Planes tecnológicos incoherentes, gastos de software duplicados y ausencia de pautas estéticas claras.",
        beneficiaries: "Fundadores, juntas de directores de corporaciones y directores de tecnología recién asignados."
      }
    },
    de: {
      "creative-advertising": {
        problem: "Marken-Anonymität und ein schwacher digitaler Auftritt, der die Aufmerksamkeit anspruchsvoller Kunden verfehlt.",
        beneficiaries: "Premium-Marken, luxuriöse Direct-to-Consumer-Labels und führende Kommunikationsagenturen."
      },
      "ai-commercial": {
        problem: "Astronomische Kosten für klassische Filmdrehs, Locations und langsame manuelle CGI-Renderings.",
        beneficiaries: "Internationale Marketingabteilungen, Hersteller exklusiver Produkte und Content-Produzenten."
      },
      "full-stack-dev": {
        problem: "Instabile, fragmentierte Codebasen und langsame APIs, die bei hohem Traffic zusammenbrechen.",
        beneficiaries: "Skalierende SaaS-Plattformen, transaktionsstarke Websysteme und moderne Tech-Startups."
      },
      "premium-websites": {
        problem: "Langsame, generische Templates, die die Markenreputation verwässern und keinen Premiumcharakter zeigen.",
        beneficiaries: "Gehobene Hotellerie, Architekturbüros, exklusive Designagenturen und Executive-Portfolios."
      },
      "custom-platforms": {
        problem: "Operative Reibung und Datenverlust durch die gleichzeitige Nutzung verschiedener, isolierter SaaS-Dienste.",
        beneficiaries: "B2B-Kundenbetreuer, Dienstleister und Operations-Manager."
      },
      "business-automation": {
        problem: "Ressourcenverschwendung durch manuelles Erfassen von Daten, Lagerbeständen und Frachtpapieren.",
        beneficiaries: "Logistikdienstleister, administrative Backoffices und stark ausgelastete Dispositions-Teams."
      },
      "ai-integration": {
        problem: "Veraltete Suchwerkzeuge und starre E-Mail-Parser, die semantische Zusammenhänge nicht erfassen.",
        beneficiaries: "Informationskuratoren, Kundenservice-Manager und Compliance-Verantwortliche."
      },
      "creative-consulting": {
        problem: "Unklare technologische Roadmaps, überteuerte Softwarelizenzen und mangelnde gestalterische Kohärenz.",
        beneficiaries: "Gründer, Unternehmensvorstände und neu ernannte Chief Technology Officers."
      }
    },
    fr: {
      "creative-advertising": {
        problem: "Anonymat de marque et présence en ligne médiocre qui échouent à capter l'intérêt d'une clientèle haut de gamme.",
        beneficiaries: "Marques de prestige, maisons de luxe en direct, et agences de communication d'élite."
      },
      "ai-commercial": {
        problem: "Coûts prohibitifs des tournages classiques (acteurs, décors) et temps de rendu interminables en 3D traditionnelle.",
        beneficiaries: "Directions marketing internationales, créateurs de produits haut de gamme, et studios créatifs."
      },
      "full-stack-dev": {
        problem: "Architectures de code fragiles et APIs instables qui s'effondrent lors des pics d'audience intensifs.",
        beneficiaries: "Éditeurs de plateformes SaaS, applications web transactionnelles, et startups de premier plan."
      },
      "premium-websites": {
        problem: "Gabarits génériques et lents qui dévalorisent l'identité de marque et n'offrent aucun plaisir esthétique.",
        beneficiaries: "Hôtels de prestige, cabinets d'architectures, créateurs de mobilier d'art, et directions générales."
      },
      "custom-platforms": {
        problem: "Déperdition de productivité et perte d'historique en raison de l'empilement de logiciels SaaS déconnectés.",
        beneficiaries: "Responsables de portefeuilles B2B, entreprises de services, et directeurs des opérations."
      },
      "business-automation": {
        problem: "Heures perdues à recopier manuellement des fichiers, des écritures comptables et des bordereaux d'expédition.",
        beneficiaries: "Opérateurs logistiques, back-offices administratifs, et planificateurs de flottes."
      },
      "ai-integration": {
        problem: "Moteurs de recherche internes dépassés et agents de saisie incapables d'interpréter le sens d'un message.",
        beneficiaries: "Gestionnaires d'informations, responsables de la relation client, et auditeurs de conformité."
      },
      "creative-consulting": {
        problem: "Stratégies de développement floues, abonnements logiciels redondants et absence de codes visuels clairs.",
        beneficiaries: "Fondateurs de startups, comités de direction, et directeurs techniques nouvellement nommés."
      }
    },
    it: {
      "creative-advertising": {
        problem: "Anonimato del marchio e debolezza digitale che non riescono ad affascinare il pubblico di fascia alta.",
        beneficiaries: "Marchi di beni di consumo premium, aziende del lusso e agenzie di comunicazione d'élite."
      },
      "ai-commercial": {
        problem: "Spese elevatissime per riprese dal vivo tradizionali, permessi per le location e lenti rendering manuali.",
        beneficiaries: "Direzioni marketing multinazionali, produttori di articoli esclusivi e creatori digitali."
      },
      "full-stack-dev": {
        problem: "Piattaforme instabili e API inefficienti che si bloccano in occasione di forti picchi di accesso degli utenti.",
        beneficiaries: "SaaS in rapida crescita, portali web ad alto volume di transazioni e startup tecnologiche."
      },
      "premium-websites": {
        problem: "Siti lenti realizzati con modelli banali che svalutano il prestigio del brand e la sua estetica formale.",
        beneficiaries: "Hotel di lusso, studi di architettura, studi di design d'interni e profili di dirigenti d'azienda."
      },
      "custom-platforms": {
        problem: "Perdite di efficienza e smarrimento dei contatti per l'uso disordinato di più servizi SaaS scollegati tra loro.",
        beneficiaries: "Gestori di relazioni commerciali B2B, ditte di servizi e responsabili della logistica interna."
      },
      "business-automation": {
        problem: "Spreco di risorse causato dalla digitazione manuale di ordini, inventari e report di spedizione.",
        beneficiaries: "Operatori di logistica, uffici amministrativi e squadre di trasporto e smistamento."
      },
      "ai-integration": {
        problem: "Strumenti di ricerca obsoleti e risponditori automatici che non interpretano la semantica e le sfumature.",
        beneficiaries: "Archivi digitali complessi, direttori di supporto e responsabili del controllo qualità."
      },
      "creative-consulting": {
        problem: "Strategie tecnologiche confuse, canoni software duplicati e mancanza di canoni grafici integrati.",
        beneficiaries: "Fondatori d'impresa, consigli d'amministrazione e responsabili tecnologici ad inizio mandato."
      }
    }
  }[language];

  const uiStrings = {
    en: {
      probLabel: "Problem Solved:",
      beneLabel: "Beneficiaries:",
      deliLabel: "Core Deliverables:",
      ctaPillar: "Inquire for this Pillar",
      sysReady: "SYSTEM SOLUTION READY",
      inspectPillar: "Select a Strategic Pillar to Inspect Details"
    },
    es: {
      probLabel: "Problema Resuelto:",
      beneLabel: "Beneficiarios:",
      deliLabel: "Entregables Clave:",
      ctaPillar: "Consultar por este Pilar",
      sysReady: "SOLUCIÓN DE SISTEMA LISTA",
      inspectPillar: "Seleccione un Pilar Estratégico para ver detalles"
    },
    de: {
      probLabel: "Gelöstes Problem:",
      beneLabel: "Begünstigte:",
      deliLabel: "Kernergebnisse:",
      ctaPillar: "Anfrage für diesen Bereich",
      sysReady: "SYSTEMLÖSUNG BEREIT",
      inspectPillar: "Wählen Sie einen Bereich, um Details anzuzeigen"
    },
    fr: {
      probLabel: "Problème Résolu :",
      beneLabel: "Bénéficiaires :",
      deliLabel: "Livrables Principaux :",
      ctaPillar: "Demande pour ce Pilier",
      sysReady: "SOLUTION SYSTÈME PRÊTE",
      inspectPillar: "Sélectionnez un pilier stratégique pour voir les détails"
    },
    it: {
      probLabel: "Problema Risolto:",
      beneLabel: "Beneficiari:",
      deliLabel: "Deliverable Chiave:",
      ctaPillar: "Richiedi per questo Pilastro",
      sysReady: "SOLUZIONE DI SISTEMA PRONTA",
      inspectPillar: "Seleziona un pilastro strategico per i dettagli"
    }
  }[language];

  return (
    <section id="services" className="py-24 md:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          {/* Section Indicator */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {tSection.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight leading-tight">
              {tSection.title}
            </h2>
          </div>

          <div className="lg:col-span-8 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {tSection.description}
            </p>
          </div>
        </div>

        {/* Layout: Interactive List on Left, Architectural Detail Block on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          
          {/* Left: Accordion-Style Categories */}
          <div className="lg:col-span-6 space-y-4">
            {localizedServices.map((service, index) => {
              const isSelected = selectedId === service.id;
              const details = serviceDetailsMap[service.id as keyof typeof serviceDetailsMap] || { problem: "Standard friction", beneficiaries: "Sovereign operations" };
              return (
                <div
                  id={`service-card-${service.id}`}
                  key={service.id}
                  onClick={() => setSelectedId(isSelected ? null : service.id)}
                  className={`group p-6 cursor-pointer premium-interactive rounded-sm ${
                    isSelected ? "border-studio-primary bg-studio-panel" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-mono text-studio-muted">0{index + 1}</span>
                      <div className="flex items-center space-x-2">
                        {getIcon(service.id)}
                        <h4 className="text-sm md:text-base font-display tracking-wide uppercase text-studio-primary font-medium">
                          {service.title}
                        </h4>
                      </div>
                    </div>
                    <div>
                      {isSelected ? (
                        <Minus size={14} className="text-studio-caption" />
                      ) : (
                        <Plus size={14} className="text-studio-caption group-hover:text-studio-primary transition-colors" />
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-studio-caption pl-8 mt-2 group-hover:text-studio-secondary transition-colors">
                    {service.tag}
                  </p>

                  {/* Mobile expansion inline */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden mt-6 pt-6 border-t border-studio-border space-y-4"
                      >
                        <p className="text-xs text-studio-secondary font-light leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-1.5 p-3 bg-studio-bg rounded-sm border border-studio-border">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-studio-caption block">
                            {uiStrings.probLabel}
                          </span>
                          <p className="text-xs text-studio-secondary font-light">
                            {details.problem}
                          </p>
                        </div>

                        <div className="space-y-1.5 p-3 bg-studio-bg rounded-sm border border-studio-border">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-studio-caption block">
                            {uiStrings.beneLabel}
                          </span>
                          <p className="text-xs text-studio-secondary font-light">
                            {details.beneficiaries}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-studio-caption block mb-2">
                            {uiStrings.deliLabel}
                          </span>
                          {service.bulletPoints.map((bp, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs text-studio-secondary font-light">
                              <div className="w-1.5 h-1.5 bg-studio-primary rounded-full" />
                              <span>{bp}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Desktop Cinematic Detail Block */}
          <div className="hidden lg:block lg:col-span-6 relative h-full">
            <div className="sticky top-32 bg-studio-panel border border-studio-border p-8 md:p-10 rounded-sm min-h-[480px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {selectedId ? (
                  localizedServices.map((service) => {
                    if (service.id !== selectedId) return null;
                    const details = serviceDetailsMap[service.id as keyof typeof serviceDetailsMap] || { problem: "Standard industry bottleneck.", beneficiaries: "Discerning corporate enterprises." };
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6 flex flex-col justify-between h-full"
                      >
                        <div className="space-y-4">
                          <div className="inline-block px-2.5 py-1 bg-studio-bg border border-studio-border text-[9px] font-mono text-studio-secondary uppercase tracking-widest">
                            {service.category} // SOLUTIONS
                          </div>
                          <h4 className="text-xl font-display font-light text-studio-primary tracking-wide uppercase">
                            {service.title}
                          </h4>
                        </div>

                        {/* PROBLEM SOLVED */}
                        <div className="space-y-1.5 p-4 bg-studio-bg rounded-sm border border-studio-border">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-studio-caption block">
                            {uiStrings.probLabel}
                          </span>
                          <p className="text-xs text-studio-secondary font-light leading-relaxed">
                            {details.problem}
                          </p>
                        </div>

                        {/* BENEFICIARIES */}
                        <div className="space-y-1.5 p-4 bg-studio-bg rounded-sm border border-studio-border">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-studio-caption block">
                            {uiStrings.beneLabel}
                          </span>
                          <p className="text-xs text-studio-secondary font-light leading-relaxed">
                            {details.beneficiaries}
                          </p>
                        </div>

                        {/* DELIVERABLES */}
                        <div className="space-y-3 pt-2">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-studio-caption block">
                            {uiStrings.deliLabel}
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            {service.bulletPoints.map((bp, i) => (
                              <div key={i} className="flex items-center space-x-3 text-xs text-studio-secondary font-light">
                                <span className="text-[10px] font-mono text-studio-primary font-bold">0{i + 1}</span>
                                <span>{bp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-studio-border flex justify-between items-center">
                          <span className="text-[9px] font-mono tracking-wider text-studio-muted uppercase">
                            {uiStrings.sysReady}
                          </span>
                          <button
                            id={`services-cta-${service.id}`}
                            onClick={() => {
                              const el = document.getElementById("contact");
                              if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-[10px] font-mono uppercase tracking-widest text-studio-primary hover:text-studio-caption transition-colors flex items-center space-x-1 cursor-pointer bg-transparent border-0"
                          >
                            <span>{uiStrings.ctaPillar}</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-studio-caption py-12">
                    <Layers size={24} className="stroke-1" />
                    <span className="text-xs font-mono tracking-widest uppercase">
                      {uiStrings.inspectPillar}
                    </span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
