import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { language } = useLanguage();
  const data = translations.testimonials[language];

  const localizedReviews = {
    en: [
      {
        name: "Pamela Claramunt",
        company: "Succupam",
        role: "Founder",
        initials: "PC",
        quote: "Working with Deep Brain Reset was a highly professional experience from start to finish. They truly understood our brand identity and translated it into a clear, elegant, and functional platform, with meticulous attention to both design and user experience. Communication was outstanding throughout, and the final result exceeded our expectations. Today, we have a website that fully reflects the caliber of our work and presents our company with a significantly stronger, more cohesive image."
      },
      {
        name: "Emilia Marsicano",
        company: "Marsicano Legal",
        role: "Attorney at Law",
        initials: "EM",
        quote: "I needed a website that would convey trust, professionalism, and clarity from the very first moment. Deep Brain Reset captured that need perfectly, developing a digital identity that truly reflects my way of working. The process was highly structured, with meticulous attention to detail and an exceptional level of aesthetic judgment. The result is a modern, elegant online presence perfectly aligned with the professional image I wanted to project to my clients."
      }
    ],
    es: [
      {
        name: "Pamela Claramunt",
        company: "Succupam",
        role: "Fundadora",
        initials: "PC",
        quote: "Trabajar con Deep Brain Reset fue un proceso muy profesional de principio a fin. Supieron entender la identidad de nuestra marca y convertirla en una plataforma clara, elegante y funcional, cuidando tanto el diseño como la experiencia del usuario. La comunicación fue excelente durante todo el proyecto y el resultado final superó nuestras expectativas. Hoy contamos con una web que representa la calidad de nuestro trabajo y nos permite presentar la empresa con una imagen mucho más sólida."
      },
      {
        name: "Emilia Marsicano",
        company: "Marsicano Legal",
        role: "Abogada",
        initials: "EM",
        quote: "Necesitaba un sitio que transmitiera confianza, profesionalismo y claridad desde el primer momento. Deep Brain Reset logró interpretar exactamente esa necesidad y desarrolló una identidad digital que refleja mi forma de trabajar. El proceso fue ordenado, con mucha atención a los detalles y un alto nivel de criterio estético. El resultado es una presencia online moderna, elegante y alineada con la imagen que quería proyectar a mis clientes."
      }
    ],
    de: [
      {
        name: "Pamela Claramunt",
        company: "Succupam",
        role: "Gründerin",
        initials: "PC",
        quote: "Die Zusammenarbeit mit Deep Brain Reset war von Anfang bis Ende äußerst professionell. Sie haben unsere Markenidentität perfekt erfasst und sie in eine klare, elegante und funktionale Plattform übersetzt, bei der sowohl dem Design als auch der Benutzererfahrung höchste Aufmerksamkeit geschenkt wurde. Die Kommunikation war während des gesamten Projekts hervorragend und das Endergebnis hat unsere Erwartungen übertroffen. Heute verfügen wir über eine Website, die die Qualität unserer Arbeit perfekt widerspiegelt und unserem Unternehmen einen erstklassigen, soliden Auftritt verleiht."
      },
      {
        name: "Emilia Marsicano",
        company: "Marsicano Legal",
        role: "Rechtsanwältin",
        initials: "EM",
        quote: "Ich benötigte eine Website, die vom ersten Augenblick an Vertrauen, Professionalität und Klarheit vermittelt. Deep Brain Reset hat dieses Bedürfnis exakt erfasst und eine digitale Identität geschaffen, die meine Arbeitsweise widerspiegelt. Der Prozess war hervorragend strukturiert, mit viel Liebe zum Detail und einem feinen Gespür für Ästhetik. Das Ergebnis ist eine moderne, elegante Online-Präsenz, die perfekt auf das Image abgestimmt ist, das ich meinen Mandanten vermitteln möchte."
      }
    ],
    fr: [
      {
        name: "Pamela Claramunt",
        company: "Succupam",
        role: "Fondatrice",
        initials: "PC",
        quote: "Travailler avec Deep Brain Reset a été un parcours d'une grande rigueur professionnelle de bout en bout. Ils ont su appréhender l'essence de notre identité de marque pour la transcrire dans une plateforme claire, élégante et parfaitement fonctionnelle, alliant design d'exception et expérience utilisateur fluide. La communication a été exemplaire tout au long du projet, et le livrable final a largement dépassé nos attentes. Nous disposons désormais d'un site web qui incarne l'excellence de notre savoir-faire et offre à notre entreprise une vitrine institutionnelle d'une grande solidité."
      },
      {
        name: "Emilia Marsicano",
        company: "Marsicano Cabinet",
        role: "Avocate",
        initials: "EM",
        quote: "J'avais besoin d'un site internet capable d'inspirer confiance, professionnalisme et clarté dès le premier regard. Deep Brain Reset a parfaitement saisi ce besoin et a développé une identité numérique qui reflète fidèlement ma rigueur de travail. Le processus s'est déroulé de manière fluide et ordonnée, avec un grand souci du détail et un sens esthétique particulièrement aiguisé. Le résultat se traduit par une présence en ligne moderne, élégante et idéalement alignée avec l'image que je souhaitais projeter auprès de mes clients."
      }
    ],
    it: [
      {
        name: "Pamela Claramunt",
        company: "Succupam",
        role: "Fondatrice",
        initials: "PC",
        quote: "Collaborare con Deep Brain Reset è stata un'esperienza estremamente professionale dall'inizio alla fine. Hanno compreso appieno l'identità del nostro marchio, traducendola in una piattaforma chiara, elegante e funzionale, curando meticolosamente sia il design che l'esperienza utente. La comunicazione è stata eccellente durante tutto il progetto e il risultato finale ha superato ogni nostra aspettativa. Oggi disponiamo di un sito web che rispecchia la qualità del nostro lavoro e ci permette di presentare l'azienda con un'immagine decisamente più solida."
      },
      {
        name: "Emilia Marsicano",
        company: "Marsicano Studio",
        role: "Avvocato",
        initials: "EM",
        quote: "Avevo bisogno di un sito web che trasmettesse fiducia, professionalità e chiarezza fin dal primo istante. Deep Brain Reset ha saputo interpretare esattamente questa esigenza, sviluppando un'identità digitale che riflette il mio metodo di lavoro. Il processo è stato lineare e strutturato, con grande attenzione ai dettagli e un elevato rigore estetico. Il risultato è una presenza online moderna, elegante e perfettamente in linea con l'immagine professionale che desideravo proiettare ai miei clienti."
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
