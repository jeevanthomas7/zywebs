"use client";

import React, { useState } from "react";

const testimonials = [

 
  {
    name: "Sophia Martinez",
    role: "Creative Director, Verve Studio",
    tagline: "Lightning-fast turnaround, pixel-perfection & effortless communication.",
    quote:
      "Working with ZYWEBS was effortless. Their attention to detail, performance benchmarks, and bespoke design made our brand stand out in a crowded market. Truly world-class work.",
    image: "/img/food.png",
  },

   {
    name: "Alex Vance",
    role: "Founder & CEO, Apex Fintech",
    tagline: "Bespoke digital architecture, seamless UX & doubled conversions.",
    quote:
      "ZYWEBS transformed our digital presence completely. The new site not only looks stunning with high-end aesthetics, but our lead conversion rate doubled within the first month after launch.",
    image: "/img/port.png",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="w-full pt-12 sm:pt-16 lg:pt-36 pb-4 sm:pb-16 lg:pb-22 bg-white text-black"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        {/* Section Header: Left has Title, Right has Subtitle paragraph */}
        <div className="mb-8 lg:mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end text-center sm:text-left">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize tracking-tight text-black">
              What Our Clients Say
            </h2>
          </div>
          <p className="hidden sm:block max-w-md text-xs sm:text-sm text-black/60 leading-relaxed md:text-right">
            Real client feedback and success stories from brands we have helped launch and scale online.
          </p>
        </div>

        {/* 2-Box Testimonial Layout: Left Website/Client Image, Right Quote Data */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
        >
          {/* Left Box: Website / Client Image with Bottom Highlight Overlay */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#f4f4f5] min-h-[260px] sm:min-h-[290px] lg:min-h-[320px] flex items-end border border-black/10">
            <img
              key={`img-${currentIndex}`}
              src={current.image}
              alt={current.name}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out animate-in fade-in"
            />
            {/* Dark gradient vignette at bottom for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Bottom Overlay Badge */}
            <div className="relative z-10 p-4 sm:p-6 max-w-sm">
              <span className="inline-block bg-white text-black text-xs sm:text-[13px] font-medium px-3.5 py-2 rounded-lg shadow-sm leading-snug">
                {current.tagline}
              </span>
            </div>
          </div>

          {/* Right Box: Testimonial Quote, Author & Bottom-Right Navigation Arrows */}
          <div className="lg:col-span-7 rounded-xl sm:rounded-2xl bg-[#f4f4f5] border border-black/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] lg:min-h-[320px]">
            {/* Top Quote & Author */}
            <div key={`content-${currentIndex}`} className="animate-in fade-in duration-300">
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-black/90">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-8 sm:mt-10">
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-black/55 mt-0.5">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Bottom Row: Slide Indicators and Navigation Arrows */}
            <div className="mt-8 flex items-center justify-between pt-4">
              {/* Slide Counter / Dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 bg-[#059669]"
                        : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows in bottom-right */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-black/[0.06] hover:bg-[#059669] hover:text-white transition-colors duration-200 cursor-pointer text-black/80 active:scale-95"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-black/[0.06] hover:bg-[#059669] hover:text-white transition-colors duration-200 cursor-pointer text-black/80 active:scale-95"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
