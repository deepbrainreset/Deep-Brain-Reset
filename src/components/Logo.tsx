import React, { useState, useEffect } from "react";

interface LogoProps {
  className?: string;
  isDecorative?: boolean;
}

export function Logo({ className = "", isDecorative = false }: LogoProps) {
  const [gifLoaded, setGifLoaded] = useState(false);

  const staticUrl = "https://res.cloudinary.com/dw4k14vmn/image/upload/pg_1/v1782902241/Logo_ihknu5.png";
  const gifUrl = "https://res.cloudinary.com/dw4k14vmn/image/upload/v1782902241/Logo_ihknu5.gif";

  useEffect(() => {
    const img = new Image();
    img.src = gifUrl;
    img.onload = () => {
      setGifLoaded(true);
    };
  }, []);

  return (
    <div 
      className={`relative select-none pointer-events-none ${className}`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      {/* Static Fallback (First frame, displayed immediately) */}
      <img
        src={staticUrl}
        alt={isDecorative ? "" : "Deep Brain Reset"}
        aria-hidden={isDecorative ? "true" : undefined}
        loading="eager"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
          gifLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: "translate3d(0,0,0)" }}
      />

      {/* Animated GIF Logo (Loaded in the background, transitions seamlessly) */}
      <img
        src={gifUrl}
        alt={isDecorative ? "" : "Deep Brain Reset"}
        aria-hidden={isDecorative ? "true" : undefined}
        loading="eager"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
          gifLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(0,0,0)" }}
      />
    </div>
  );
}
