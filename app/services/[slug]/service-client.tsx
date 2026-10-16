"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface ServiceData {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  revealText: string;
  highlightWords: string[];
}

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const words = paragraph.querySelectorAll<HTMLSpanElement>("span.reveal-word");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      words.forEach((word) => {
        word.style.opacity = "1";
      });
      return;
    }

    let isVisible = false;
    let rafId = 0;

    const update = () => {
      if (!paragraph || !isVisible) return;
      const rect = paragraph.getBoundingClientRect();
      const height = window.innerHeight;
      const startY = height * 0.85;
      const endY = height * 0.15;
      const totalDist = startY - endY + rect.height;
      const currentDist = startY - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      const total = words.length;

      words.forEach((word, index) => {
        const wordProgress = Math.max(0, Math.min(1, progress * total - index));
        const opacity = 0.2 + wordProgress * 0.8;
        word.style.opacity = opacity.toFixed(3);
      });
    };

    const loop = () => {
      if (isVisible) update();
      rafId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) update();
      },
      { rootMargin: "250px 0px 250px 0px" }
    );

    observer.observe(paragraph);
    rafId = requestAnimationFrame(loop);

    const onScrollOrResize = () => {
      if (isVisible) update();
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [service.slug]);

  useEffect(() => {
    const container = imageContainerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let isVisible = false;
    let rafId = 0;

    const updateParallax = () => {
      if (!container || !img || !isVisible) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const translateY = (clamped - 0.5) * 80;
      img.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(1.08)`;
    };

    const loop = () => {
      if (isVisible) updateParallax();
      rafId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) updateParallax();
      },
      { rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(container);
    rafId = requestAnimationFrame(loop);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [service.slug]);

  const handleOpenContact = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  const isGreenWord = (word: string) => {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return service.highlightWords.some(
      (hw) => hw.toLowerCase().replace(/[^a-z0-9]/g, "") === clean
    );
  };

  const words = service.revealText.trim().split(/\s+/);

  return (
    <main className="w-full bg-white text-black min-h-screen pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24">
      <section className="w-full">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10 text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-3.5 sm:mb-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.25em]"
          >
            <Link
              href="/"
              className="text-neutral-500 hover:text-[#059669] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#059669]">/</span>
            <Link
              href="/#services"
              className="text-neutral-500 hover:text-[#059669] transition-colors"
            >
              Services
            </Link>
            <span className="text-[#059669]">/</span>
            <span className="text-[#059669]">{service.category}</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.12] max-w-4xl mx-auto">
            {service.name}
          </h1>

          <p className="mt-3.5 sm:mt-5 text-xs sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="w-full pt-12 sm:pt-16 lg:pt-22 pb-10 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#059669] mb-4 sm:mb-6">
              Overview & Philosophy
            </span>

            <p
              ref={paragraphRef}
              className="w-full text-lg sm:text-3xl lg:text-4xl font-normal leading-[1.4] lg:leading-[1.45] tracking-tight text-neutral-900"
            >
              {words.map((word, index) => {
                const highlighted = isGreenWord(word);
                return (
                  <React.Fragment key={index}>
                    <span
                      className={`reveal-word inline-block transition-opacity duration-150 ease-out ${
                        highlighted
                          ? "text-[#059669] font-medium"
                          : "text-neutral-900"
                      }`}
                      style={{ opacity: 0.2 }}
                    >
                      {word}
                    </span>
                    {index < words.length - 1 && " "}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-6 sm:py-10">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10">
          <div
            ref={imageContainerRef}
            className="relative aspect-[16/10] sm:aspect-[18/10] lg:aspect-[21/10] w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/10 bg-[#f4f4f5] shadow-2xl"
          >
            <img
              ref={imageRef}
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover transition-transform duration-100 ease-out will-change-transform"
              style={{ transform: "scale(1.08)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="w-full pt-12 sm:pt-16 pb-6 text-center">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleOpenContact}
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 sm:pl-7 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-lg shadow-[#059669]/20"
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

          <Link
            href="/#services"
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-lg border border-black/20 bg-transparent pl-5 pr-2 py-2 sm:pl-7 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 transition-all duration-300 hover:border-black/50 hover:bg-black/[0.04] active:scale-95 cursor-pointer shadow-sm"
          >
            <span>View All Services</span>
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-transparent text-black border border-black/20 transition-transform duration-300 group-hover:scale-105">
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
          </Link>
        </div>
      </section>
    </main>
  );
}
