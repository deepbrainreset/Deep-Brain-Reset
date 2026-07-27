import React, { useState } from "react";
import { Play, Calendar, ArrowRight, Film, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { trackEvent } from "../utils/analytics";

interface DemoreelSectionProps {
  onWatchDemoreel: () => void;
  onViewCaseStudy: (id: string) => void;
}

export default function DemoreelSection({ onWatchDemoreel, onViewCaseStudy }: DemoreelSectionProps) {
  const { language } = useLanguage();
  const dT = translations.demoreel[language];
  const [thumbUrl, setThumbUrl] = useState("https://img.youtube.com/vi/qYsoxQ7BWiI/maxresdefault.jpg");

  const projectsList = [
    { id: "axon-revolution", title: "AXON Revolution" },
    { id: "axon-drive", title: "AXON — Drive Beyond Reality" },
    { id: "con-la-tuya", title: "Con La Tuya Contribuyente" },
    { id: "menu-noir", title: "Menu Noir" },
    { id: "sucupam", title: "Sucupam" },
    { id: "emilia-marsicano", title: "Emilia Marsicano" },
  ];

  const handleBookingClick = () => {
    trackEvent("demoreel_booking_clicked", { source: "section_cta" });
    trackEvent("calendar_booking_clicked", { source: "demoreel_section" });
    window.open("https://calendar.app.google/KxqkRxocP421jXka7", "_blank", "noopener,noreferrer");
  };

  const handleWatchClick = () => {
    trackEvent("demoreel_cta_clicked", { source: "dedicated_section" });
    onWatchDemoreel();
  };

  return (
    <section id="demoreel" className="py-24 md:py-32 bg-studio-bg border-t border-studio-border relative overflow-hidden">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 bg-grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-studio-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12 md:space-y-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-studio-primary" />
            <span className="text-xs font-mono tracking-widest text-studio-primary uppercase">
              03 // {dT.sectionLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight uppercase leading-tight">
            {dT.mainTitle}
          </h2>

          <p className="text-sm md:text-base text-studio-caption font-light leading-relaxed max-w-2xl">
            {dT.description}
          </p>
        </div>

        {/* Main 16:9 Interactive Demoreel Card */}
        <div 
          onClick={handleWatchClick}
          className="group relative w-full aspect-video rounded-2xl bg-[#08080A] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer shadow-2xl shadow-black/80"
        >
          {/* YouTube High-Res Thumbnail with fallback */}
          <img
            src={thumbUrl}
            alt="Deep Brain Reset Studio Demoreel"
            onError={() => setThumbUrl("https://img.youtube.com/vi/qYsoxQ7BWiI/hqdefault.jpg")}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
            loading="lazy"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:via-black/20 transition-colors duration-500" />

          {/* Electric Blue Signal Line Traveling Frame Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none p-[1px]" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="99"
              height="99"
              rx="2"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="0.8"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 stroke-dash-travel"
            />
          </svg>

          {/* Central Play Control & Branding Badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-6">
            <motion.div 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-studio-primary text-black flex items-center justify-center shadow-2xl shadow-studio-primary/40 group-hover:bg-white transition-colors"
            >
              <Play size={32} className="ml-1 fill-black" />
            </motion.div>

            <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/15 rounded-full">
              <Film size={14} className="text-studio-primary" />
              <span className="text-xs font-mono tracking-widest text-white uppercase font-medium">
                {dT.watchCta}
              </span>
            </div>
          </div>

          {/* Bottom Left Specs Label */}
          <div className="absolute bottom-6 left-6 md:left-8 hidden sm:flex items-center space-x-3">
            <span className="text-[10px] font-mono tracking-widest text-studio-primary bg-black/70 px-2.5 py-1 rounded border border-white/10 uppercase">
              4K ULTRA HD // STEREO
            </span>
            <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase">
              DEEP BRAIN RESET OFFICIAL REEL
            </span>
          </div>
        </div>

        {/* Dual Actions & Project Gateways */}
        <div className="pt-4 space-y-10 border-t border-white/5">
          {/* Section Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              onClick={handleWatchClick}
              className="px-8 py-4 bg-studio-primary text-black font-mono text-xs uppercase tracking-widest font-semibold rounded hover:bg-white transition-all shadow-xl shadow-studio-primary/20 flex items-center justify-center space-x-3 cursor-pointer border-0"
            >
              <Play size={16} className="fill-black" />
              <span>{dT.watchCta}</span>
            </button>

            <button
              onClick={handleBookingClick}
              className="px-8 py-4 bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-widest font-medium rounded hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center space-x-3 cursor-pointer"
            >
              <Calendar size={16} className="text-studio-primary" />
              <span>{dT.startProjectCta}</span>
            </button>
          </div>

          {/* Explore Projects Gateway Prompt */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono tracking-widest text-studio-caption uppercase">
                {dT.exploreProjectsPrompt}
              </span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
              {projectsList.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    trackEvent("demoreel_case_study_clicked", { caseStudyId: proj.id });
                    onViewCaseStudy(proj.id);
                  }}
                  className="px-3 py-2.5 bg-studio-panel/60 border border-white/5 hover:border-studio-primary/40 text-studio-caption hover:text-white rounded text-[11px] font-mono truncate text-left transition-all hover:bg-white/5 cursor-pointer flex items-center justify-between group"
                >
                  <span className="truncate">{proj.title}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-studio-primary shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Style for electric blue traveling border */}
      <style>{`
        @keyframes strokeTravel {
          0% {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
          }
          100% {
            stroke-dasharray: 400;
            stroke-dashoffset: 0;
          }
        }
        .stroke-dash-travel {
          animation: strokeTravel 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
