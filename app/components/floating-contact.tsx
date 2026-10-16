"use client";

import React from "react";

export function FloatingContact() {
  const phoneNumber = "+919495547850";
  const displayPhone = "+91 94955 47850";
  const whatsappMessage = encodeURIComponent(
    "Hi ZYWEBS, I'd like to get in touch about a web design/development project."
  );

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-auto"
    >
      {/* WhatsApp Floating Button with Font Awesome Icon */}
      <div className="group relative flex items-center justify-end">
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-neutral-900/95 px-3 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-sm border border-white/10 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 opacity-0 translate-x-2 md:block">
          Chat on WhatsApp
        </span>

        <a
          href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with ZYWEBS on WhatsApp"
          className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] active:scale-95"
        >
          {/* Subtle Ping Animation Ring */}
          <span className="absolute inset-0 rounded-lg bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          {/* Font Awesome WhatsApp Icon */}
          <i
            className="fa-brands fa-whatsapp text-3xl relative z-10 leading-none"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Call Floating Button with Font Awesome Icon */}
    
    </aside>
  );
}
