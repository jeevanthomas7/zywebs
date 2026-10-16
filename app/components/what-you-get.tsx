"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const perks = [
  {
    id: "01",
    tag: "Design Architecture",
    name: "Custom UI/UX Design",
    des: "Bespoke design tailored specifically to your brand identity. Zero generic templates or recycled layouts.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "02",
    tag: "Next.js 16 Speed",
    name: "Blazing Performance",
    des: "Handcrafted with React 19 & Next.js for lightning-fast page transitions and near 100/100 Core Web Vitals.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    tag: "Responsive Engineering",
    name: "Mobile-First Design",
    des: "Fluid, pixel-perfect experiences optimized for iPhones, Androids, tablets, laptops, and ultra-wide displays.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "04",
    tag: "Google Search Ready",
    name: "SEO Optimization",
    des: "Structured metadata, OpenGraph cards, semantic HTML5, and schema markups for top Google search visibility.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: "05",
    tag: "Growth & Conversion",
    name: "Conversion Focused",
    des: "Strategic user journeys, clear value propositions, and magnetic CTAs engineered to turn visitors into clients.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    id: "06",
    tag: "Effortless Control",
    name: "Intuitive CMS Control",
    des: "Simple management dashboard so you can edit text, publish articles, and update content without touching code.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    id: "07",
    tag: "Modern Architecture",
    name: "Clean Scalable Code",
    des: "Modern component-driven architecture built to grow with your business, make integrations easy, and never break.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "08",
    tag: "Direct Communication",
    name: "1-on-1 Direct Support",
    des: "Direct communication with your lead developer, transparent milestones, prompt updates, and post-launch support.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export function WhatYouGet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <section
      id="what-you-get"
      className="relative w-full overflow-hidden bg-white pt-5 sm:pt-16 lg:pt-22 pb-4 sm:pb-16 lg:pb-22 text-black"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        {/* Section Header: Subheading, 1-Line Capitalized Heading, Underline Accent */}
        <div className="mx-auto mb-8 lg:mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#059669]">
            Deliverables
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize tracking-tight text-black">
            What You Get
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-[#059669]/60" />
        </div>

        {/* 3D Coverflow Feature Cards Slider (Non-clickable cards with autoplay & smooth drag) */}
        <div className="w-full !overflow-visible py-4 sm:py-6">
          {mounted && (
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              speed={750}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 14,
                stretch: 0,
                depth: 130,
                modifier: 1.25,
                slideShadows: false,
              }}
              className="swiper-gallery w-full !overflow-visible"
            >
              {perks.map((perk) => (
                <SwiperSlide
                  key={perk.id}
                  className="!w-[300px] sm:!w-[380px] lg:!w-[420px] !max-w-[calc(100%-40px)] rounded-2xl sm:rounded-3xl border border-black/10 bg-gradient-to-b from-white via-[#fcfdfa] to-[#f4f7f0] p-6 sm:p-8 shadow-xl shadow-black/[0.04] select-none flex flex-col justify-between min-h-[300px] sm:min-h-[330px]"
                >
                  <div>
                    {/* Top Row: Squircle Gradient Icon Badge + ID */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-black/10 bg-gradient-to-br from-white via-white to-[#edf3e8] text-neutral-800 shadow-sm">
                        <span className="text-[#059669]">{perk.icon}</span>
                      </div>

                      <span className="text-xs font-mono font-semibold tracking-wider text-black/40">
                        {perk.id}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div className="mt-6">
                      <span className="inline-block rounded-full border border-[#059669]/20 bg-[#059669]/10 px-3 py-0.5 text-[11px] font-semibold tracking-wide text-[#059669]">
                        {perk.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-lg sm:text-xl font-semibold text-black tracking-tight">
                      {perk.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-black/65">
                    {perk.des}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 flex justify-center text-center lg:mt-14">
          <button
            type="button"
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-lg shadow-[#059669]/20"
          >
            <span>Start a Project</span>
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-white text-black transition-transform duration-300 group-hover:scale-105">
              <svg
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
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
                className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
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

export default WhatYouGet;
