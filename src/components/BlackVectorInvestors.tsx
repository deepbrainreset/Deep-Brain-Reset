import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const copy = {
  es: { eyebrow: "PORTFOLIO / PROYECTOS PROPIOS", title: "BLACK VECTOR", subtitle: "Sci-Fi Arena FPS · Pre-alpha · En desarrollo", intro: "Un videojuego de acción en primera persona en desarrollo por Deep Brain Reset. Exploramos combate competitivo, movilidad vertical, escenarios de ciencia ficción oscura y producción de arte conceptual asistida por IA. Los diseños conceptuales no representan gameplay final.", heading: "Inversión y alianzas estratégicas", detail: "Estamos abiertos a conversaciones con inversores, publishers, estudios y socios tecnológicos para evaluar colaboración en las próximas etapas. Esta invitación no constituye una oferta pública de inversión.", name: "Nombre y apellido", company: "Empresa u organización (opcional)", email: "Correo electrónico", role: "Tipo de colaboración", amount: "Rango orientativo (opcional)", msg: "Propuesta o mensaje", consent: "Autorizo a Deep Brain Reset a utilizar mis datos exclusivamente para responder esta consulta.", submit: "Preparar consulta por correo", note: "Se abrirá tu aplicación de correo con el mensaje preparado. La consulta se envía únicamente cuando confirmás el envío allí.", meeting: "Agendar una conversación", roles: ["Inversor privado / fondo", "Publisher", "Socio tecnológico / hardware", "Estudio de desarrollo", "Otra colaboración"], amounts: ["Prefiero conversarlo", "Menos de USD 10.000", "USD 10.000–30.000", "USD 30.000–75.000", "Más de USD 75.000"] },
  en: { eyebrow: "PORTFOLIO / ORIGINAL PROJECTS", title: "BLACK VECTOR", subtitle: "Sci-Fi Arena FPS · Pre-alpha · Work in progress", intro: "A first-person action game in development at Deep Brain Reset. Exploring competitive combat, vertical movement, dark sci-fi environments and AI-assisted concept art. Concept visuals do not represent final gameplay.", heading: "Investment & strategic partnerships", detail: "We welcome conversations with investors, publishers, studios and technology partners about potential collaboration. This invitation is not a public securities offering.", name: "Full name", company: "Company or organization (optional)", email: "Email address", role: "Collaboration type", amount: "Indicative range (optional)", msg: "Proposal or message", consent: "I authorize Deep Brain Reset to use my information solely to respond to this inquiry.", submit: "Prepare email inquiry", note: "Your email application will open with a prepared message. Your inquiry is sent only after you confirm sending there.", meeting: "Schedule a conversation", roles: ["Private investor / fund", "Game publisher", "Technology / hardware partner", "Development studio", "Other partnership"], amounts: ["Prefer to discuss", "Under USD 10,000", "USD 10,000–30,000", "USD 30,000–75,000", "Over USD 75,000"] }
};
export default function BlackVectorInvestors() {
  const { language } = useLanguage();
  const t = language === "es" ? copy.es : copy.en;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("0");
  const [amount, setAmount] = useState("0");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent || !name.trim() || !email.trim() || !message.trim()) return;
    const body = [
      "Project: Black Vector", "Source: deepbrainreset.com / portfolio / black-vector",
      "Name: " + name.trim(), "Company: " + (company.trim() || "—"),
      "Email: " + email.trim(), "Partnership: " + t.roles[Number(role)],
      "Indicative range: " + (role === "0" ? t.amounts[Number(amount)] : "N/A"),
      "Message:", message.trim(), "Consent to contact: Yes"
    ].join("\n");
    window.location.href = "mailto:deepbrainreset@gmail.com?subject=" +
      encodeURIComponent("Black Vector | Investment & Partnerships") +
      "&body=" + encodeURIComponent(body);
  };
  const inputClass = "w-full bg-studio-bg border border-studio-border focus:border-studio-primary text-studio-primary text-sm px-4 py-3 rounded-sm outline-none";
  return <section id="black-vector-investors" aria-labelledby="black-vector-title" className="bg-studio-bg border-t border-studio-border py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12">
      <div className="space-y-5">
        <p className="text-xs tracking-widest uppercase font-mono text-studio-caption">{t.eyebrow}</p>
        <h2 id="black-vector-title" className="text-4xl md:text-6xl font-display text-studio-primary">{t.title}</h2>
        <p className="text-xs font-mono uppercase tracking-widest text-studio-caption">{t.subtitle}</p>
        <p className="text-studio-secondary leading-relaxed">{t.intro}</p>
        <h3 className="text-xl text-studio-primary font-display pt-6">{t.heading}</h3>
        <p className="text-studio-secondary leading-relaxed">{t.detail}</p>
        <a href="https://calendar.app.google/QBdey4HYGrK6biCf6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-studio-primary underline underline-offset-4">{t.meeting}<ArrowUpRight size={16}/></a>
      </div>
      <form onSubmit={submit} className="bg-studio-panel border border-studio-border rounded-lg p-6 md:p-8 space-y-4">
        <label className="block text-xs text-studio-caption">{t.name} *<input className={inputClass+" mt-2"} required maxLength={120} autoComplete="name" value={name} onChange={e=>setName(e.target.value)}/></label>
        <label className="block text-xs text-studio-caption">{t.company}<input className={inputClass+" mt-2"} maxLength={160} value={company} onChange={e=>setCompany(e.target.value)}/></label>
        <label className="block text-xs text-studio-caption">{t.email} *<input className={inputClass+" mt-2"} required type="email" maxLength={254} autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/></label>
        <label className="block text-xs text-studio-caption">{t.role} *<select className={inputClass+" mt-2"} value={role} onChange={e=>setRole(e.target.value)}>{t.roles.map((r,i)=><option key={r} value={i}>{r}</option>)}</select></label>
        {role==="0" && <label className="block text-xs text-studio-caption">{t.amount}<select className={inputClass+" mt-2"} value={amount} onChange={e=>setAmount(e.target.value)}>{t.amounts.map((r,i)=><option key={r} value={i}>{r}</option>)}</select></label>}
        <label className="block text-xs text-studio-caption">{t.msg} *<textarea className={inputClass+" mt-2"} required maxLength={4000} rows={4} value={message} onChange={e=>setMessage(e.target.value)}/></label>
        <label className="flex gap-3 text-xs leading-relaxed text-studio-secondary"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/>{t.consent}</label>
        <button type="submit" disabled={!consent} className="w-full bg-studio-primary text-studio-bg disabled:opacity-40 px-5 py-4 flex justify-center items-center gap-2 text-xs font-mono uppercase tracking-widest"><Mail size={15}/>{t.submit}</button>
        <p className="flex gap-2 text-xs text-studio-caption"><ShieldCheck size={15} className="shrink-0"/>{t.note}</p>
      </form>
    </div>
  </section>;
}
