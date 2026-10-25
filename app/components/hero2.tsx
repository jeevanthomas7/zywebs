"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function Hero2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger smooth fade-in and settle animation immediately on mount
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative p-1.5 sm:p-2 lg:p-2.5 bg-white overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Outer picture frame with rounded container: Exactly full viewport minus outer padding on all screens */}
      <div className="relative h-[calc(100svh-12px)] sm:h-[calc(100svh-16px)] lg:h-[calc(100vh-20px)] rounded-xl sm:rounded-2xl lg:rounded-[24px] overflow-hidden bg-[#06110f] flex items-end border border-black/5">
        
        {/* Background Image Container with guaranteed fade-in and zoom-settle animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/img/herozy.png"
            alt="ZYWEBS Digital Studio - Modern Web Architecture"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center lg:object-right select-none pointer-events-none transition-all duration-[1500ms] ease-out ${
              mounted
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-[1.08] blur-[6px]"
            }`}
          />

          {/* Light, subtle gradient overlay strictly over the image inside */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent sm:from-black/65 sm:via-black/20 sm:to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container: Anchored cleanly to the bottom with fixed padding adapting to all screens */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full pb-25 sm:pb-25 lg:pb-30 pt-20 sm:pt-24">
          
          <div className="max-w-2xl text-left">
            
            {/* 1. Sub-heading / Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm mb-2.5 sm:mb-3.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white/95">
                ZYWEBS DIGITAL STUDIO
              </span>
            </div>

            {/* 2. Exactly 2-Line Heading (All White, No Brand Color) */}
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] sm:leading-[1.1] mb-2.5 sm:mb-3.5 drop-shadow-md">
              Build Your <br />
              <span>Digital Presence.</span>
            </h1>

            {/* 3. Description Paragraph (2 lines, clean, legible) */}
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl mb-4 sm:mb-6 font-normal drop-shadow-sm line-clamp-2">
              High-performance web architecture engineered for ambitious brands. Designed to look sharp, load under 1 second, and convert visitors into clients.
            </p>

            {/* 4. Two Buttons: Compact auto-width on mobile (NOT full width) */}
            <div className="flex flex-row sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 w-fit">
              {/* Primary Button: Brand Color */}
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#059669] pl-4 sm:pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-md shadow-[#059669]/15 w-auto"
              >
                <span>Explore Services</span>
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white text-black transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-3 w-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                  <svg
                    className="absolute h-3 w-3 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </a>

              {/* Secondary Button: Background Transparent with same arrow */}
              <button
                type="button"
                onClick={handleContactClick}
                className="group inline-flex items-center gap-3 rounded-lg border border-white/30 bg-transparent pl-4 sm:pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-95 cursor-pointer shadow-sm w-auto"
              >
                <span>Contact Us Now</span>
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white text-black transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-3 w-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                  <svg
                    className="absolute h-3 w-3 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero2;
