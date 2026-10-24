"use client";

import React, { useState, useEffect } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);
  const [glowX, setGlowX] = useState(50);
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const moveGlow = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const b = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - b.left) / b.width) * 100));
    setGlowX(x);
    setGlowing(true);
  };

  return (
    <footer className="sticky bottom-0 z-0 w-full bg-white px-1 sm:px-3 py-1 sm:py-3">
      <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 text-white border border-white/10 px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 isolate flex flex-col justify-between">
        <div
          onPointerMove={moveGlow}
          onPointerLeave={() => setGlowing(false)}
          className="relative w-full overflow-hidden select-none py-6 sm:py-10 lg:py-14 flex items-center justify-center cursor-default"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              style={{
                left: `${glowX}%`,
                opacity: glowing ? 0.7 : 0,
              }}
              className="absolute -bottom-36 h-[260px] w-[600px] -translate-x-1/2 rounded-full bg-[#059669] blur-[100px] transition-[left,opacity] duration-500 ease-out sm:-bottom-48 sm:h-[350px] sm:w-[850px] lg:-bottom-60 lg:h-[450px] lg:w-[1100px]"
            />
          </div>

          <h2 className="relative z-10 w-full text-center font-black uppercase tracking-tight sm:tracking-normal leading-none text-[clamp(2.1rem,11.5vw,11.5rem)] text-white/90 select-none flex items-center justify-center flex-row gap-x-3 sm:gap-x-6 transition-colors duration-300">
            <span>ZYWEBS</span>
            <span>STUDIO</span>
          </h2>
        </div>

        <div className="mt-4 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center hidden sm:flex">
            <a href="#" className="inline-block group/logo">
              <img
                src="/logo/logowhite.png"
                alt="ZYWEBS"
                className="h-4 sm:h-5.5 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105 drop-shadow-[0_2px_8px_rgba(5,150,105,0.35)]"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white/70">
            <a
              href="https://www.instagram.com/zywebs.online"
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
              href="mailto:zywebsstudio@gmail.com"
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
