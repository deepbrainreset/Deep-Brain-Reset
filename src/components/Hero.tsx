import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Logo } from "./Logo";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const t = translations.hero[language];

  useEffect(() => {
    // Graceful check for prefers-reduced-motion to fully disable performance-heavy parallax
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1] relative to screen center
      targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;
    const updateTick = () => {
      // Smooth linear interpolation (lerp) for ultra-fluid, cinema-grade movement
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      const scrollY = window.scrollY;
      const viewHeight = window.innerHeight || 800;
      const scrollRatio = Math.min(1, scrollY / viewHeight);

      // Layer 01: Background Grid Layer
      if (layer1Ref.current) {
        const l1MouseX = mouseX * 2;
        const l1MouseY = mouseY * 3;
        const l1Scroll = scrollY * 0.06;
        layer1Ref.current.style.transform = `translate3d(${l1MouseX}px, ${l1MouseY + l1Scroll}px, 0)`;
      }

      // Layer 02: Main Artwork (Official banner, object-contain, no cropping)
      if (layer2Ref.current) {
        const l2MouseX = mouseX * 4;
        const l2MouseY = mouseY * 6;
        const l2Scroll = scrollY * 0.10;
        layer2Ref.current.style.transform = `translate3d(${l2MouseX}px, ${l2MouseY + l2Scroll}px, 0)`;
        
        // As the user scrolls, the banner darkens slightly, and subtle grid fades in
        const mask = layer2Ref.current.querySelector(".banner-darken-mask") as HTMLDivElement | null;
        if (mask) {
          mask.style.opacity = `${scrollRatio * 0.65}`;
        }
        
        const scrollGrid = layer2Ref.current.querySelector(".banner-scroll-grid") as HTMLDivElement | null;
        if (scrollGrid) {
          scrollGrid.style.opacity = `${scrollRatio * 0.12}`;
        }
      }

      // Layer 03: Lighting & Particles
      if (layer3Ref.current) {
        const l3MouseX = mouseX * 6;
        const l3MouseY = mouseY * 9;
        const l3Scroll = scrollY * 0.14;
        layer3Ref.current.style.transform = `translate3d(${l3MouseX}px, ${l3MouseY + l3Scroll}px, 0)`;
      }

      // Layer 04: Overlay Vignette
      if (layer4Ref.current) {
        const l4MouseX = mouseX * 8;
        const l4MouseY = mouseY * 12;
        const l4Scroll = scrollY * 0.18;
        layer4Ref.current.style.transform = `translate3d(${l4MouseX}px, ${l4MouseY + l4Scroll}px, 0)`;
      }

      // Foreground text scroll-slide, mouse movement, and fade out
      if (foregroundRef.current) {
        const textScrollOpacity = Math.max(0, 1 - scrollRatio * 1.5);
        const textScrollY = -scrollY * 0.18;
        const textMouseX = mouseX * 3;
        const textMouseY = mouseY * 4;
        foregroundRef.current.style.transform = `translate3d(${textMouseX}px, ${textMouseY + textScrollY}px, 0)`;
        foregroundRef.current.style.opacity = `${textScrollOpacity}`;
      }

      animationFrameId = requestAnimationFrame(updateTick);
    };

    animationFrameId = requestAnimationFrame(updateTick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Safe client-side check for loading state of prefers-reduced-motion to avoid flash of scaling
  const prefersReducedMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white"
    >
      {/* Layer 01: Background Grid Layer */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none select-none will-change-transform"
      >
        <div className="absolute inset-0 bg-grid-overlay opacity-[0.015]" />
      </div>

      {/* Layer 02: Main Artwork Layer (Unobstructed Animated Logo as Background Artwork) */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 z-10 pointer-events-none select-none will-change-transform flex items-center justify-end overflow-hidden"
      >
        {/* Scroll-driven overlays */}
        <div className="banner-darken-mask absolute inset-0 bg-black opacity-0 transition-opacity duration-300 pointer-events-none" />
        <div className="banner-scroll-grid absolute inset-0 bg-grid-overlay opacity-0 transition-opacity duration-300 pointer-events-none" />
        
        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/85 to-transparent" />

        {/* Animated video lens logo positioned on the right side to prevent overlap with the editorial headline */}
        <div className="absolute lg:relative right-[-10vw] bottom-[60px] lg:right-auto lg:bottom-auto w-[clamp(300px,85vw,420px)] h-[clamp(300px,85vw,420px)] lg:w-[45%] lg:h-full flex items-center justify-center px-4 lg:px-12 opacity-[0.85] lg:opacity-[0.85] pointer-events-none select-none mix-blend-normal filter-none">
          <Logo
            className="w-full h-full max-w-full max-h-full lg:w-[75%] lg:h-[75%] lg:max-w-[75%] lg:max-h-[75%] aspect-square pointer-events-none opacity-100 select-none"
            isDecorative={true}
          />
        </div>
      </div>

      {/* Layer 03: Lighting & Particles */}
      <div
        ref={layer3Ref}
        className="absolute inset-0 z-20 pointer-events-none select-none will-change-transform overflow-hidden"
      >
        {/* Soft atmospheric blue highlights (low opacity) */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] bg-blue-500/[0.025] rounded-full filter blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vh] bg-blue-600/[0.015] rounded-full filter blur-[140px]" />
        
        {/* Subtle physical floating dust particles */}
        <div className="absolute inset-0 opacity-40">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>
      </div>

      {/* Layer 04: Vignette Overlay */}
      <div
        ref={layer4Ref}
        className="absolute inset-0 z-30 pointer-events-none select-none will-change-transform overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Top spacer (to prevent header overlaps) */}
      <div className="h-24 z-40 relative pointer-events-none" />

      {/* Left-Aligned Premium Editorial Content Block */}
      <div className="relative z-40 flex-grow flex flex-col items-start justify-center max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <div ref={foregroundRef} className="space-y-8 max-w-2xl select-none will-change-transform">
          
          {/* Typography & Interactive Actions */}
          <div className="space-y-6 flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-light tracking-widest text-white uppercase leading-none"
            >
              {t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-light text-zinc-400 tracking-[0.25em] max-w-xl leading-relaxed uppercase"
            >
              {t.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start justify-start gap-6 pt-4 w-full sm:w-auto"
            >
              <button
                id="hero-explore-work"
                onClick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-10 py-4 border border-white text-[10px] uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all duration-300 font-mono font-medium rounded-sm w-48 sm:w-auto text-center cursor-pointer bg-transparent"
              >
                <span>{t.exploreButton}</span>
              </button>
              
              <button
                id="hero-start-project"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-10 py-4 bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-[0.25em] text-zinc-300 hover:border-white hover:text-white transition-all duration-300 font-mono rounded-sm w-48 sm:w-auto text-center cursor-pointer"
              >
                <span>{t.contactButton}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Informational bar */}
      <div className="max-w-7xl mx-auto w-full z-40 relative px-6 md:px-12 pb-12 flex flex-col sm:flex-row justify-end items-start sm:items-center text-[9px] font-mono tracking-[0.35em] text-zinc-500 uppercase gap-4 sm:gap-0 select-none pointer-events-none">
        <div 
          className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors cursor-pointer pointer-events-auto" 
          onClick={onExploreClick}
        >
          <span>{t.scrollIndicator}</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={10} />
          </motion.div>
        </div>
      </div>

      {/* Embedded High-Performance CSS Animations (Hardware-accelerated) */}
      <style>{`
        @keyframes cinematic-zoom {
          0% {
            transform: scale(1.0);
          }
          100% {
            transform: scale(1.02);
          }
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1px);
        }
        .particle-1 {
          width: 2px;
          height: 2px;
          top: 20%;
          left: 30%;
          animation: float-particle-1 25s infinite linear;
        }
        .particle-2 {
          width: 1.5px;
          height: 1.5px;
          top: 60%;
          left: 15%;
          animation: float-particle-2 28s infinite linear;
        }
        .particle-3 {
          width: 2px;
          height: 2px;
          top: 40%;
          left: 75%;
          animation: float-particle-3 32s infinite linear;
        }
        .particle-4 {
          width: 1px;
          height: 1px;
          top: 80%;
          left: 60%;
          animation: float-particle-4 26s infinite linear;
        }

        @keyframes float-particle-1 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translate(40px, -60px) rotate(360deg); opacity: 0; }
        }
        @keyframes float-particle-2 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.25; }
          85% { opacity: 0.25; }
          100% { transform: translate(-30px, -50px) rotate(-360deg); opacity: 0; }
        }
        @keyframes float-particle-3 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          12% { opacity: 0.35; }
          88% { opacity: 0.35; }
          100% { transform: translate(50px, -80px) rotate(180deg); opacity: 0; }
        }
        @keyframes float-particle-4 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.2; }
          80% { opacity: 0.2; }
          100% { transform: translate(-20px, -40px) rotate(-180deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

