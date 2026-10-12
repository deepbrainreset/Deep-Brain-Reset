import { useState } from "react";
import { ArrowUpRight, CalendarDays, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";

type Venture = { id: string; name: string; stage: string; category: string; summary: string; differentiators: string[]; model: string; market: string; caution: string; source: string };
const ventures: Venture[] = [
  { id:"menu-noir", name:"Menú Noir",stage:"MVP en desarrollo",category:"Hospitality SaaS / Fintech",summary:"Plataforma de operación gastronómica que integra menú digital, pedidos, pagos y herramientas de gestión para locales.",differentiators:["Operación integrada del local y experiencia del comensal","Automatización y módulos de IA como evolución del producto","Modelo transaccional orientado al volumen real del comercio"],model:"Modelo propuesto: suscripción para cubrir servicios operativos y comisión variable por operaciones procesadas. La comisión de plataforma prevista es del 2%, separada de los costos del procesador.",market:"Competidores de referencia del análisis: Toast, Olo, Lightspeed, Square y Fudo. Los precios, el mercado direccionable y las proyecciones requieren actualización antes de presentarse como datos vigentes.",caution:"Las funciones y la integración de pagos deben contrastarse con el repositorio y pruebas reales. No se publican escenarios de ingresos como resultados.",source:"Memorando financiero y estratégico, octubre de 2026"},
  { id:"renderpulse",name:"RenderPulseAI",stage:"MVP en desarrollo",category:"AI Production / SaaS",summary:"Entorno de producción audiovisual asistida por IA que busca conectar guion, storyboard, generación, continuidad y posproducción.",differentiators:["Orquestación híbrida: recursos locales, BYOK y cómputo gestionado","Continuidad de personajes y activos, trazabilidad y presupuestos por toma como objetivos de producto","Integración prevista con herramientas profesionales y 3D"],model:"Modelo evaluado: planes SaaS por perfil de uso y servicios opcionales de cómputo gestionado, diferenciando el costo de generación del valor del software.",market:"Referencias del memorando: Krea, LTX Studio, Runway, Autodesk Flow Studio y Adobe Firefly. La oportunidad está en el flujo de trabajo integral, no en sumar modelos.",caution:"El documento de octubre usa el nombre InkPulse. Aquí se utiliza RenderPulseAI. Los precios y proyecciones del memo son hipótesis, no tarifas lanzadas ni facturación.",source:"Memorando financiero de InkPulse, 7 de octubre de 2026"},
  { id:"fanloria",name:"Fanloria",stage:"MVP en desarrollo",category:"Creator Economy / SaaS",summary:"Infraestructura de monetización directa para creadores, con gestión de comunidad, operaciones comerciales y transparencia de pagos.",differentiators:["AI Closer y CRM con control humano como propuesta de desarrollo","Libro de operaciones para comisiones, reservas y liquidaciones","Verificación, consentimiento y controles de seguridad como requisitos críticos"],model:"Modelo objetivo: comisión del 18% sobre transacciones, sujeta a validación de costos de pagos, riesgo y cumplimiento. Servicios profesionales adicionales se estudian por separado.",market:"Referencias del pitch: OnlyFans, Fanvue y Fansly. El foco comercial inicial propuesto es el mercado hispanohablante.",caution:"La operativa de pagos, KYC, moderación y procesadores debe validarse antes de ofrecer el servicio. Las cifras del pitch son escenarios, no resultados.",source:"Investor Pitch Deck y modelo financiero, 7 de octubre de 2026"},
  { id:"black-vector",name:"Black Vector",stage:"Pre-alpha",category:"Game Development / Sci-Fi FPS",summary:"Videojuego de acción en primera persona con ambientación de ciencia ficción oscura, criaturas biomecánicas y armamento retrofuturista.",differentiators:["Combate de arena y movimiento vertical como visión de diseño","Dirección artística original y prototipado de assets 3D asistido por IA","Desarrollo orientado inicialmente a experiencia móvil"],model:"Monetización y estrategia de publicación sujetas a validación de diseño, retención, comunidad y pruebas de juego.",market:"Oportunidades de colaboración con publishers, estudios, especialistas en gaming y socios tecnológicos.",caution:"Pre-alpha. El concept art no representa necesariamente gameplay final ni funcionalidades implementadas.",source:"Documentación conceptual y de desarrollo de Black Vector"}
];
const calendar = "https://calendar.app.google/QBdey4HYGrK6biCf6";
export default function VenturePortfolio() {
 const { language } = useLanguage();
 const es = language === "es";
 const [active,setActive] = useState<Venture|null>(null);
 return <section id="ventures" className="py-20 md:py-28 bg-studio-bg border-t border-studio-border" aria-labelledby="ventures-title">
 <div className="max-w-7xl mx-auto px-6 md:px-12">
 <p className="text-xs font-mono tracking-[0.2em] uppercase text-studio-caption mb-4">DEEP BRAIN RESET / VENTURES</p>
 <h2 id="ventures-title" className="text-3xl md:text-5xl font-display uppercase text-studio-primary mb-4">{es?"Productos propios e innovación":"Original products & innovation"}</h2>
 <p className="text-studio-secondary max-w-3xl leading-relaxed mb-12">{es?"Proyectos en desarrollo. Exploramos alianzas estratégicas e inversión para acelerar la validación técnica y comercial. La información describe propuestas y planes, no resultados garantizados.":"Projects in development. We welcome strategic partnerships and investment conversations to support technical and commercial validation. The information describes plans, not guaranteed outcomes."}</p>
 <div className="grid md:grid-cols-2 gap-6">
 {ventures.map(v=><article key={v.id} className="bg-studio-panel border border-studio-border p-7 rounded-md flex flex-col gap-4">
 <div className="flex flex-wrap justify-between gap-3 text-[10px] uppercase tracking-widest font-mono text-studio-caption"><span>{v.category}</span><span>{v.stage}</span></div>
 <h3 className="text-2xl font-display text-studio-primary">{v.name}</h3><p className="text-sm text-studio-secondary leading-relaxed flex-1">{v.summary}</p>
 <button type="button" onClick={()=>setActive(v)} className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-studio-primary self-start border-b border-studio-border pb-2 hover:border-studio-primary">{es?"Explorar proyecto e inversión":"Explore project & investment"}<ArrowUpRight size={14}/></button>
 </article>)}
 </div>
 </div>
 {active&&<div className="fixed inset-0 z-[100] bg-black/90 overflow-y-auto p-4 md:p-10" role="dialog" aria-modal="true" aria-label={active.name} onClick={()=>setActive(null)}>
 <div className="max-w-3xl mx-auto bg-studio-panel border border-studio-border p-6 md:p-12 my-8 relative" onClick={e=>e.stopPropagation()}>
 <button type="button" className="absolute top-5 right-5 text-studio-primary p-2" aria-label="Close" onClick={()=>setActive(null)}><X size={20}/></button>
 <p className="text-xs font-mono text-studio-caption uppercase tracking-widest mb-3">{active.stage} / {active.category}</p>
 <h3 className="text-3xl md:text-5xl font-display text-studio-primary mb-6">{active.name}</h3>
 <p className="text-studio-secondary leading-relaxed mb-8">{active.summary}</p>
 <h4 className="text-lg text-studio-primary mb-3">{es?"Diferenciales propuestos":"Proposed differentiators"}</h4>
 <ul className="space-y-2 mb-8">{active.differentiators.map(d=><li key={d} className="text-sm text-studio-secondary pl-4 border-l border-studio-border">{d}</li>)}</ul>
 <h4 className="text-lg text-studio-primary mb-2">{es?"Modelo de negocio":"Business model"}</h4><p className="text-sm text-studio-secondary leading-relaxed mb-6">{active.model}</p>
 <h4 className="text-lg text-studio-primary mb-2">{es?"Mercado y competencia":"Market & competition"}</h4><p className="text-sm text-studio-secondary leading-relaxed mb-6">{active.market}</p>
 <p className="text-xs text-studio-caption leading-relaxed border-t border-studio-border pt-5 mb-3">{active.caution}</p>
 <p className="text-[10px] text-studio-muted mb-8">{es?"Base documental":"Source material"}: {active.source}. {es?"Síntesis comercial, no oferta pública de valores.":"Commercial summary, not a public securities offering."}</p>
 <div className="border border-studio-border bg-studio-bg p-6">
 <h4 className="text-lg text-studio-primary mb-2">{es?"Inversores y socios estratégicos":"Investors & strategic partners"}</h4>
 <p className="text-sm text-studio-secondary leading-relaxed mb-5">{es?"¿Te interesa explorar una inversión, publicación o colaboración? Agendá una reunión para conocer el proyecto, sus necesidades de capital, riesgos y documentación ampliada.":"Interested in investing, publishing or partnering? Schedule a meeting to discuss the project, capital needs, risks and supporting documentation."}</p>
 <a href={calendar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-studio-primary text-studio-bg px-5 py-3 text-xs font-mono uppercase tracking-wider"><CalendarDays size={16}/>{es?"Agendar reunión":"Schedule a meeting"}<ArrowUpRight size={14}/></a>
 </div></div></div>}
 </section>;
}
