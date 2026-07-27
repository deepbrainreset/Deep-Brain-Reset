import React, { useEffect, useRef, useState } from "react";
import { X, Play, ExternalLink, Calendar, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { trackEvent } from "../utils/analytics";

interface DemoreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy?: (id: string) => void;
}

export default function DemoreelModal({ isOpen, onClose, onViewCaseStudy }: DemoreelModalProps) {
  const { language } = useLanguage();
  const dT = translations.demoreel[language];
  const [hasError, setHasError] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Capture trigger focus & handle body scroll lock + Escape key
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      setHasError(false);

      trackEvent("demoreel_modal_opened", { language });
      trackEvent("demoreel_play_started", { videoId: "qYsoxQ7BWiI" });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [isOpen, onClose, language]);

  const handleBookingClick = () => {
    trackEvent("demoreel_booking_clicked", { source: "modal_conversion" });
    trackEvent("calendar_booking_clicked", { source: "demoreel_modal" });
    window.open("https://calendar.app.google/KxqkRxocP421jXka7", "_blank", "noopener,noreferrer");
  };

  const handleExploreCaseStudies = () => {
    trackEvent("demoreel_case_study_clicked", { source: "modal_error_fallback" });
    onClose();
    const workEl = document.getElementById("work");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/92 backdrop-blur-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={dT.sectionLabel}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          ref={modalContentRef}
          className="relative w-full max-w-5xl my-auto bg-[#0A0A0C] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-studio-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060608]/80">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-studio-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-studio-primary uppercase">
                {dT.sectionLabel} // 4K CINEMATIC REEL
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-studio-caption hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-0 bg-transparent"
              aria-label={dT.closeModal}
            >
              <X size={20} />
            </button>
          </div>

          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
            {!hasError ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/qYsoxQ7BWiI?autoplay=1&rel=0&enablejsapi=1&modestbranding=1"
                title="Deep Brain Reset Studio Demoreel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onError={() => setHasError(true)}
              />
            ) : (
              /* Localized Error Fallback */
              <div className="p-8 text-center max-w-lg space-y-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                  <AlertTriangle size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-mono tracking-wider text-white uppercase">
                    {dT.errorTitle}
                  </h4>
                  <p className="text-xs text-studio-caption leading-relaxed font-light">
                    {dT.errorDesc}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="https://youtu.be/qYsoxQ7BWiI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-studio-primary text-black font-mono text-xs uppercase tracking-wider rounded font-medium hover:bg-white transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{dT.watchOnYoutube}</span>
                    <ExternalLink size={14} />
                  </a>
                  <button
                    onClick={handleExploreCaseStudies}
                    className="w-full sm:w-auto px-5 py-2.5 bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-wider rounded hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {dT.viewCaseStudies}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Post-Video Conversion CTA Block */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-[#0C0D12] via-[#090A0D] to-[#0C0D12] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left max-w-xl">
              <span className="text-[11px] font-mono tracking-widest text-studio-primary uppercase block">
                {dT.modalLikeWhatYouSee}
              </span>
              <p className="text-xs md:text-sm text-studio-caption font-light leading-relaxed">
                {dT.modalSubtext}
              </p>
            </div>

            <button
              onClick={handleBookingClick}
              className="w-full md:w-auto px-6 py-3.5 bg-studio-primary text-black font-mono text-xs uppercase tracking-widest font-semibold rounded hover:bg-white transition-all shadow-lg shadow-studio-primary/20 flex items-center justify-center space-x-2.5 shrink-0 cursor-pointer border-0"
            >
              <Calendar size={15} />
              <span>{dT.modalBookCta}</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
