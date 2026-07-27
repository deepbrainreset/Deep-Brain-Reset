import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Logo } from "./Logo";

interface HeroProps {
  onExploreClick: () => void;
  onWatchDemoreel: () => void;
}

export default function Hero({ onExploreClick, onWatchDemoreel }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

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

      // Layer 02: Main Artwork / Video Layer
      if (layer2Ref.current) {
        const l2MouseX = mouseX * 4;
        const l2MouseY = mouseY * 6;
        const l2Scroll = scrollY * 0.10;
        layer2Ref.current.style.transform = `translate3d(${l2MouseX}px, ${l2MouseY + l2Scroll}px, 0)`;
        
        // As the user scrolls, the video darkens slightly
        const mask = layer2Ref.current.querySelector(".banner-darken-mask") as HTMLDivElement | null;
        if (mask) {
          mask.style.opacity = `${scrollRatio * 0.75}`;
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-28 sm:pt-32 md:pt-36 lg:pt-32 pb-8 sm:pb-10"
    >
      {/* Layer 01: Background Grid Layer */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none select-none will-change-transform"
      >
        <div className="absolute inset-0 bg-grid-overlay opacity-[0.02]" />
      </div>

      {/* Layer 02: Cloudinary Video Hero / Demo Reel Background Loop */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 z-10 pointer-events-none select-none will-change-transform overflow-hidden"
      >
        {/* Background Demo Reel Video (Cloudinary CDN integration ready) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="https://res.cloudinary.com/dw4k14vmn/image/upload/v1782884366/ChatGPT_Image_1_jul_2026_02_25_30_m795ce.png"
            className="w-full h-full object-cover opacity-35 filter brightness-75 contrast-125 scale-105"
          >
            {/* Cloudinary high-end video loop reel source */}
            <source
              src="https://res.cloudinary.com/dw4k14vmn/video/upload/v1782884366/hero_reel.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Scroll-driven darken mask */}
        <div className="banner-darken-mask absolute inset-0 bg-black opacity-0 transition-opacity duration-300 pointer-events-none" />

        {/* Cinematic Vignettes & Gradient Shields */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/90 to-transparent" />

        {/* Animated Brand Emblem positioned subtly in background right */}
        <div className="absolute right-[-5vw] bottom-[10vh] lg:right-[2vw] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-[clamp(280px,50vw,460px)] h-[clamp(280px,50vw,460px)] opacity-20 pointer-events-none select-none mix-blend-screen filter blur-[0.5px]">
          <Logo
            className="w-full h-full aspect-square pointer-events-none opacity-100 select-none"
            isDecorative={true}
          />
        </div>
      </div>

      {/* Layer 03: Lighting & Particles */}
      <div
        ref={layer3Ref}
        className="absolute inset-0 z-20 pointer-events-none select-none will-change-transform overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vh] bg-blue-500/[0.03] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vh] bg-indigo-600/[0.025] rounded-full filter blur-[150px]" />
        
        {/* Physical dust particles */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Left-Aligned Premium Editorial Content Block */}
      <div className="relative z-40 flex-grow flex flex-col items-start justify-start lg:justify-center max-w-7xl mx-auto px-6 md:px-12 w-full text-left py-4 lg:py-0">
        <div ref={foregroundRef} className="space-y-6 sm:space-y-8 max-w-3xl select-none will-change-transform">
          
          {/* Badge & Headlines */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-zinc-300 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-light tracking-wider text-white uppercase leading-[1.12] sm:leading-[1.08] text-balance"
            >
              {t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-light text-zinc-300 tracking-[0.18em] max-w-2xl leading-relaxed uppercase"
            >
              {t.subtitle}
            </motion.p>

            {/* Core Pillars Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[10px] font-mono tracking-widest text-zinc-400 uppercase w-full"
            >
              <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3 py-2 rounded-sm backdrop-blur-md">
                <span className="text-white font-bold">01.</span> High-End AI/CGI
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3 py-2 rounded-sm backdrop-blur-md">
                <span className="text-white font-bold">02.</span> Enterprise Web
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3 py-2 rounded-sm backdrop-blur-md">
                <span className="text-white font-bold">03.</span> Autonomous AI
              </div>
            </motion.div>

            {/* Primary & Secondary Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-4 w-full sm:w-auto"
            >
              <button
                id="hero-view-selected-work"
                onClick={onExploreClick}
                className="px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold rounded-sm text-center shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer inline-flex items-center justify-center gap-2 border-0"
              >
                <span>{t.viewSelectedWork}</span>
                <span className="text-xs">→</span>
              </button>

              <button
                id="hero-watch-demoreel"
                onClick={onWatchDemoreel}
                className="px-8 py-4 border border-white/30 hover:border-white text-white bg-black/40 hover:bg-white/10 transition-all duration-300 font-mono text-[11px] uppercase tracking-[0.2em] rounded-sm text-center cursor-pointer inline-flex items-center justify-center gap-2.5 backdrop-blur-sm border-0"
              >
                <Play size={13} className="fill-white text-white" />
                <span>{t.watchDemoreel}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar: Video Reel Toggle + Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full z-40 relative px-6 md:px-12 pb-10 flex flex-row justify-between items-center text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase select-none">
        {/* Video Reel Controls (Play/Pause & Sound) */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="p-2 bg-white/5 border border-white/10 hover:border-white/40 rounded-full text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            title={isPlaying ? "Pause Reel" : "Play Reel"}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>

          <button
            onClick={toggleMute}
            className="p-2 bg-white/5 border border-white/10 hover:border-white/40 rounded-full text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          </button>
          <span className="hidden sm:inline text-zinc-500 text-[8px] tracking-[0.2em]">
            [ DEMO REEL // CLOUDINARY CDN ]
          </span>
        </div>

        {/* Scroll indicator */}
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

      {/* Embedded High-Performance CSS Animations */}
      <style>{`
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

