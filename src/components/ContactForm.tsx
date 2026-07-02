import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, ArrowUpRight, Check, Briefcase, Mail, Building, FileText, Trash2 } from "lucide-react";

interface ContactFormProps {
  initialBriefText: string;
  companyInfo: { name: string; industry: string; bottleneck: string } | null;
}

interface SubmittedBrief {
  id: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  bottleneck: string;
  brief: string;
  timestamp: string;
  status: "Received - Diagnostics Pending" | "Analyzed - Director Review" | "Scheduled - Active Brief";
}

export default function ContactForm({ initialBriefText, companyInfo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    projectBrief: ""
  });

  const [submissions, setSubmissions] = useState<SubmittedBrief[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load existing inquiries from localStorage for lightweight local persistence
  useEffect(() => {
    const saved = localStorage.getItem("deep-brain-reset-submissions");
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse submissions database:", e);
      }
    }
  }, []);

  // Sync automatically if they generated an AI Brief
  useEffect(() => {
    if (initialBriefText) {
      setFormData((prev) => ({
        ...prev,
        projectBrief: initialBriefText,
        companyName: companyInfo?.name || prev.companyName
      }));
    }
  }, [initialBriefText, companyInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName) return;

    setLoading(true);

    setTimeout(() => {
      const newSubmission: SubmittedBrief = {
        id: `DBR-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        industry: companyInfo?.industry || "Unspecified Sector",
        bottleneck: companyInfo?.bottleneck || "Custom Initiative",
        brief: formData.projectBrief || "General inquiry submission.",
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }),
        status: "Analyzed - Director Review"
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem("deep-brain-reset-submissions", JSON.stringify(updated));
      
      setSuccess(true);
      setLoading(false);
      
      // Reset input form but keep submissions
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        projectBrief: ""
      });
    }, 1500);
  };

  const handleDeleteSubmission = (id: string) => {
    const updated = submissions.filter((s) => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem("deep-brain-reset-submissions", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-studio-caption uppercase">
              07 // PROJECT INGESTION
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-light text-studio-primary uppercase mt-4 tracking-tight">
              Initiate Brief
            </h2>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-sm md:text-base text-studio-secondary font-light leading-relaxed">
              We operate strictly by diagnostic booking. Complete our parametric intake sequence to queue an official consultation. Your synthesized strategic brief is automatically compiled into your submission if you ran the diagnostics panel.
            </p>
          </div>
        </div>

        {/* Layout: Ingestion Form vs Submitted Briefs Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-studio-panel border border-studio-border p-8 rounded-sm space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-studio-caption block border-b border-studio-border pb-4">
              INTAKE PORTAL // SECURE QUEUE
            </span>

            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 border border-studio-border bg-studio-panel rounded-sm text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full border border-studio-caption/20 bg-studio-primary/5 flex items-center justify-center text-studio-primary mx-auto">
                  <Check size={20} />
                </div>
                <h3 className="text-lg font-display uppercase tracking-widest text-studio-primary">
                  Brief Transmitted Successfully
                </h3>
                <p className="text-xs text-studio-caption font-light max-w-md mx-auto leading-relaxed">
                  Your project strategy dossier has been queued. An official director will review the operational logic, align our availability framework, and follow up within 24 operational hours.
                </p>
                <button
                  id="reset-form-btn"
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 premium-interactive text-[10px] font-mono uppercase tracking-widest rounded-sm cursor-pointer"
                >
                  Submit Another Project Brief
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                      <Briefcase size={10} className="text-studio-muted" />
                      <span>Partner Name</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Marc Audemars"
                      className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                      <Mail size={10} className="text-studio-muted" />
                      <span>Direct Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. audemars@aethelgard.ch"
                      className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                    <Building size={10} className="text-studio-muted" />
                    <span>Company / Organization Name</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Aethelgard Watchmakers"
                    className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light"
                  />
                </div>

                {/* Project Brief */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-wider text-studio-caption flex items-center space-x-1">
                    <FileText size={10} className="text-studio-muted" />
                    <span>System Specifications or Custom Brief</span>
                  </label>
                  <textarea
                    name="projectBrief"
                    value={formData.projectBrief}
                    onChange={handleInputChange}
                    rows={8}
                    placeholder="Provide detailed specifications of your project. If you used our AI Consultant above, this field automatically synchronizes with your custom strategic brief."
                    className="w-full px-4 py-3 bg-studio-panel border border-studio-border text-xs text-studio-primary placeholder-studio-muted focus:outline-none focus:border-studio-caption rounded-sm font-light leading-relaxed resize-none"
                  />
                </div>

                <button
                  id="submit-brief-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 premium-interactive font-mono text-xs uppercase tracking-widest text-center rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Transmitting System Packets...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Client Submitted Dossier list */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-studio-panel border border-studio-border p-6 rounded-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-studio-caption block border-b border-studio-border pb-3">
                Client Console // ACTIVE BRIEF DESK
              </span>
              <p className="text-[11px] text-studio-caption leading-normal font-light">
                Once a diagnostic brief is transmitted, its parsing and structural review status is logged below. Submissions are persisted in your local application terminal for reference.
              </p>

              <div className="space-y-4 max-h-[380px] overflow-y-auto">
                <AnimatePresence mode="popLayout">
                  {submissions.length > 0 ? (
                    submissions.map((sub) => (
                      <motion.div
                        id={`submission-item-${sub.id}`}
                        key={sub.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="p-4 bg-studio-bg border border-studio-border rounded-sm space-y-3 relative"
                      >
                        <button
                          id={`delete-sub-${sub.id}`}
                          onClick={() => handleDeleteSubmission(sub.id)}
                          className="absolute top-4 right-4 text-studio-muted hover:text-red-400 transition-colors cursor-pointer bg-transparent border-0"
                          aria-label="Delete submitted brief"
                        >
                          <Trash2 size={12} />
                        </button>

                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-[9px] font-mono text-studio-primary px-1.5 py-0.5 bg-studio-panel border border-studio-border rounded-sm">
                              {sub.id}
                            </span>
                            <span className="text-[9px] font-mono text-studio-caption">{sub.timestamp}</span>
                          </div>
                          <h4 className="text-xs font-display font-medium text-studio-primary uppercase tracking-wider">
                            {sub.company}
                          </h4>
                          <p className="text-[10px] text-studio-caption font-light">
                            Intake Manager: <span className="text-studio-secondary">{sub.name}</span>
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-studio-border flex items-center justify-between text-[9px] font-mono">
                          <span className="text-studio-caption">DIAGNOSTICS STATUS</span>
                          <span className="text-studio-secondary animate-pulse">{sub.status}</span>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-12 border border-dashed border-studio-border rounded-sm text-center text-studio-muted flex flex-col items-center justify-center space-y-2">
                      <FileText size={18} className="stroke-1" />
                      <span className="text-[9px] font-mono tracking-widest uppercase">
                        No Briefs Queued Locally
                      </span>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
