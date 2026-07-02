import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { language } = useLanguage();
  const data = translations.testimonials[language];

  const localizedReviews = {
    en: [
      {
        name: "Marc Audemars",
        company: "Aethelgard Watchmakers",
        role: "Strategic Brand Director",
        initials: "MA",
        quote: "Deep Brain Reset did not simply build a configurator; they redefined how mechanical horology is conceptualized digitally. The campaign drove complete timepiece allotments in 72 hours, demonstrating complete mastery of both brand luxury and real-time 3D codebases."
      },
      {
        name: "Sabine de Chalon",
        company: "L'Étoile Reserve",
        role: "Managing Director",
        initials: "SC",
        quote: "We avoided generic reservation platforms because they failed to reflect our physical Michelin hospitality. Deep Brain Reset engineered an custom guest portal with deep, editorial layout transitions that achieved a 38% increase in direct bookings."
      },
      {
        name: "Arthur Vance",
        company: "Apex-Flow Logistics",
        role: "VP of Operations",
        initials: "AV",
        quote: "Replacing manual dispatch spreadsheets with context-aware microservice processing turned our worst logistics bottlenecks into self-healing loops. Manual overhead fell by 82% in twelve days. This is true operational leverage."
      }
    ],
    es: [
      {
        name: "Marc Audemars",
        company: "Aethelgard Watchmakers",
        role: "Director Estratégico de Marca",
        initials: "MA",
        quote: "Deep Brain Reset no solo construyó un configurador; redefinieron cómo se conceptualiza la relojería mecánica digitalmente. La campaña agotó todos los lotes de piezas en 72 horas, demostrando maestría absoluta tanto en lujo de marca como en bases de código 3D en tiempo real."
      },
      {
        name: "Sabine de Chalon",
        company: "L'Étoile Reserve",
        role: "Directora General",
        initials: "SC",
        quote: "Evitamos las plataformas de reserva genéricas porque no reflejaban nuestra hospitalidad física Michelin. Deep Brain Reset diseñó un portal de huéspedes a medida con transiciones editoriales que logró un aumento del 38% en reservas directas."
      },
      {
        name: "Arthur Vance",
        company: "Apex-Flow Logistics",
        role: "Vicepresidente de Operaciones",
        initials: "AV",
        quote: "Reemplazar las hojas de cálculo de despacho manuales con procesamiento de microservicios conscientes del contexto convirtió nuestros peores cuellos de botella en bucles autocorregibles. Los costos manuales cayeron un 82% en doce días. Esto es verdadero apalancamiento operativo."
      }
    ],
    de: [
      {
        name: "Marc Audemars",
        company: "Aethelgard Watchmakers",
        role: "Strategischer Markendirektor",
        initials: "MA",
        quote: "Deep Brain Reset hat nicht nur einen Konfigurator gebaut, sondern die digitale Konzeptualisierung mechanischer Uhrmacherkunst völlig neu definiert. Die Kampagne führte innerhalb von 72 Stunden zum vollständigen Ausverkauf der Zeitmesser-Kontingente – ein Beweis für absolute Meisterschaft in Markenluxus und Echtzeit-3D."
      },
      {
        name: "Sabine de Chalon",
        company: "L'Étoile Reserve",
        role: "Geschäftsführerin",
        initials: "SC",
        quote: "Wir haben generische Buchungsplattformen gemieden, weil sie unsere physische Michelin-Gastfreundschaft nicht widerspiegeln konnten. Deep Brain Reset entwickelte ein maßgeschneidertes Gästeportal mit edlen, redaktionellen Layout-Übergängen, das die Direktbuchungen um 38 % steigerte."
      },
      {
        name: "Arthur Vance",
        company: "Apex-Flow Logistics",
        role: "Leiter Operatives Geschäft",
        initials: "AV",
        quote: "Das Ersetzen manueller Versandtabellen durch kontextsensitive Microservice-Prozesse verwandelte unsere größten Logistikengpässe in selbstkorrigierende Abläufe. Der manuelle Aufwand sank in nur zwölf Tagen um 82 %. Das ist echte operative Effizienz."
      }
    ],
    fr: [
      {
        name: "Marc Audemars",
        company: "Aethelgard Watchmakers",
        role: "Directeur de Marque Stratégique",
        initials: "MA",
        quote: "Deep Brain Reset n'a pas simplement créé un configurateur ; ils ont redéfini la conceptualisation numérique de la haute horlogerie. La campagne a permis de vendre l'intégralité des pièces disponibles en 72 heures, témoignant d'une maîtrise absolue du luxe de marque et de la 3D en temps réel."
      },
      {
        name: "Sabine de Chalon",
        company: "L'Étoile Reserve",
        role: "Directrice Générale",
        initials: "SC",
        quote: "Nous évitions les plateformes de réservation génériques, inadaptées à notre sens de l'accueil étoilé Michelin. Deep Brain Reset a développé un portail client sur mesure aux animations fluides et éditoriales, augmentant nos réservations directes de 38 %."
      },
      {
        name: "Arthur Vance",
        company: "Apex-Flow Logistics",
        role: "VP Opérations",
        initials: "AV",
        quote: "Remplacer les fichiers de répartition manuelle par des microservices intelligents a transformé nos pires blocages logistiques en processus automatiques stables. Les coûts administratifs ont chuté de 82 % en douze jours. Un véritable levier de croissance."
      }
    ],
    it: [
      {
        name: "Marc Audemars",
        company: "Aethelgard Watchmakers",
        role: "Direttore Strategico Brand",
        initials: "MA",
        quote: "Deep Brain Reset non ha creato un semplice configuratore, ha ridefinito la fruizione digitale dell'alta orologeria. La campagna ha esaurito i lotti disponibili in sole 72 ore, confermando una profonda competenza nel settore del lusso e nello sviluppo 3D in tempo reale."
      },
      {
        name: "Sabine de Chalon",
        company: "L'Étoile Reserve",
        role: "Direttore Amministrativo",
        initials: "SC",
        quote: "Evitavamo i portali di prenotazione tradizionali poiché incapaci di esprimere la nostra ospitalità stellata. Deep Brain Reset ha sviluppato un sistema esclusivo per gli ospiti, con transizioni fluide, portando un aumento del 38% nelle prenotazioni dirette."
      },
      {
        name: "Arthur Vance",
        company: "Apex-Flow Logistics",
        role: "VP Operativo",
        initials: "AV",
        quote: "Sostituire la gestione manuale delle spedizioni con microservizi intelligenti ha trasformato i nostri colli di bottiglia logistici in flussi automatizzati. Le attività manuali sono diminuite dell'82% in soli dodici giorni. Questa è vera efficienza operativa."
      }
    ]
  }[language];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-studio-bg relative border-b border-studio-border">
      <div className="absolute inset-0 bg-radial from-studio-primary/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              {data.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
              {data.title}
            </h2>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Testimonials Editorial Spread Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {localizedReviews.map((rev, i) => (
            <div
              id={`review-card-${i}`}
              key={rev.name}
              className="p-8 bg-studio-panel border border-studio-border rounded-sm flex flex-col justify-between h-[360px] hover:border-studio-caption/20 transition-all duration-500 relative group animate-fade-in"
            >
              <div className="space-y-6">
                {/* Monogram or Avatar and quote mark */}
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full border border-studio-border bg-studio-bg flex items-center justify-center text-xs font-mono text-studio-primary font-semibold select-none">
                    {rev.initials}
                  </div>
                  <Quote size={18} className="text-studio-muted group-hover:text-studio-primary transition-colors duration-500" />
                </div>

                <p className="text-xs md:text-sm text-studio-secondary font-light leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-studio-border flex justify-between items-end text-[10px] font-mono">
                <div>
                  <span className="text-studio-primary font-medium block uppercase tracking-wide">
                    {rev.name}
                  </span>
                  <span className="text-studio-caption block">
                    {rev.role}
                  </span>
                </div>
                <span className="text-studio-muted font-bold tracking-widest">
                  {rev.company.split(" ")[0].toUpperCase()} // {language === "en" ? "VERIFIED" : language === "es" ? "VERIFICADO" : language === "de" ? "BESTÄTIGT" : language === "fr" ? "VERIFIÉ" : "VERIFICATO"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
