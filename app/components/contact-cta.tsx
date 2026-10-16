"use client";

import React, { useEffect, useRef } from "react";

export function ContactCta() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const openModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <section
      className="relative min-h-[500px] sm:min-h-[600px] lg:h-[90vh] flex items-center justify-center overflow-hidden select-none  py-16"
      style={{ clipPath: "inset(0)" }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.4;
        }}
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      >
        <source src="/video/cta.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] -z-10" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-10 relative z-10 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-widest leading-[1.15] mb-6">
          Unlock Your Digital
          <br />
          Potential Today<span className="text-[#059669]">.</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-700 font-light leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
          Design thinking and deep user insights drive us to build simple, high quality
          products by starting from the customer and working backward.
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={openModal}
            className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 sm:pl-8 sm:pr-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-lg shadow-[#059669]/20"
          >
            <span>Get a Quote</span>
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-white text-black transition-transform duration-300 group-hover:scale-105">
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

          <button
            type="button"
            onClick={openModal}
            className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-lg border border-neutral-900/25 bg-transparent pl-5 pr-2 py-2 sm:pl-8 sm:pr-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg border border-neutral-900/20 bg-transparent text-neutral-900 transition-transform duration-300 group-hover:scale-105">
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
    </section>
  );
}

export default ContactCta;
