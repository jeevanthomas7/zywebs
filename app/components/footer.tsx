"use client";

import React, { useState, useEffect } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="sticky bottom-0 z-0 w-full bg-white px-1 sm:px-3 py-1 sm:py-3">
      <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 text-white border border-white/10 px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 isolate flex flex-col justify-between">
        <div className="relative w-full overflow-hidden select-none py-6 sm:py-10 lg:py-12 flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-4xl h-32 sm:h-48 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.35)_0%,rgba(5,150,105,0.12)_45%,transparent_75%)] blur-3xl -z-10"
          />

          <h2 className="relative z-10 w-full text-center font-black uppercase tracking-tight sm:tracking-normal leading-none text-[clamp(2.1rem,11.5vw,11.5rem)] drop-shadow-[0_4px_30px_rgba(52,211,153,0.3)] select-none flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-6">
            {[
              { word: "ZYWEBS", startIndex: 0 },
              { word: "STUDIO", startIndex: 6 },
            ].map((part) => (
              <span key={part.word} className="inline-flex">
                {part.word.split("").map((char, charIdx) => {
                  const globalIdx = part.startIndex + charIdx;
                  const isTopGreen = globalIdx % 2 === 0;

                  return (
                    <span
                      key={globalIdx}
                      className={`inline-block ${
                        isTopGreen
                          ? "bg-gradient-to-b from-[#34d399] via-[#a7f3d0] to-white bg-clip-text text-transparent"
                          : "bg-gradient-to-t from-[#34d399] via-[#a7f3d0] to-white bg-clip-text text-transparent"
                      }`}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-4 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center">
            <a href="#" className="inline-block group/logo">
              <img
                src="/logo/logo.png"
                alt="ZYWEBS"
                className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105 drop-shadow-[0_2px_8px_rgba(5,150,105,0.35)]"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white/70">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm transition-all duration-200 hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/10"
            >
              <i className="fa-brands fa-instagram" />
            </a>

            <a
              href="https://wa.me/919495547850"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm transition-all duration-200 hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/10"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>

            <a
              href="tel:+919495547850"
              aria-label="Phone"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm transition-all duration-200 hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/10"
            >
              <i className="fa-solid fa-phone" />
            </a>

            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm transition-all duration-200 hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/10"
            >
              <i className="fa-regular fa-envelope" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm transition-all duration-200 hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/10"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm transition-all duration-200 hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/10"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>

          <div className="text-[11px] sm:text-xs text-neutral-400 font-normal">
            © {currentYear} ZYWEBS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
