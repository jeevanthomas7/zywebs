"use client";

import React, { useEffect, useRef, useState } from "react";

const aboutText =
  "At ZYWEBS, we turn bold ideas into exceptional digital experiences. By combining minimalist aesthetics with powerful technology, we create bespoke websites and web applications that reflect your brand and move your business forward. From intuitive interfaces to seamless performance across every device, every detail is designed with purpose — helping your business build trust, engage audiences, and grow online.";

export const HIGHLIGHTED_GREEN_WORDS = [
  "exceptional",
  "digital",
  "experiences",
  "powerful",
  "technology",
  "build",
  "trust",
];

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Projects Completed",
    description:
      "Modern websites crafted with a focus on design, performance, and results.",
  },
  {
    value: 5,
    suffix: "+",
    label: "Happy Clients",
    description:
      "Building strong relationships through reliable service and quality work.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment",
    description:
      "Focused on quality, attention to detail, and delivering the best possible experience.",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Experience",
    description:
      "Creating modern, reliable digital solutions tailored to real business goals.",
  },
];

export function About() {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

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
  }, []);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    let frameId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        const startTime = performance.now();
        const duration = 1600;

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 4);

          setCounts(
            stats.map((stat) => Math.round(stat.value * easedProgress))
          );

          if (progress < 1) {
            frameId = requestAnimationFrame(animate);
          }
        };

        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  const isGreenWord = (word: string) => {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return HIGHLIGHTED_GREEN_WORDS.some(
      (hw) => hw.toLowerCase().replace(/[^a-z0-9]/g, "") === clean
    );
  };

  const words = aboutText.trim().split(/\s+/);

  return (
    <section
      id="about"
      className="w-full bg-white pt-10 sm:pt-16 lg:pt-22 sm:pb-16 lg:pb-22 text-black overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="mb-8 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#059669] text-center sm:text-left">
            About Us
          </p>

          <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-wider text-center sm:text-left">
            <span className="text-black">Who We Are </span>
          </h2>
        </div>

        <div className="w-full">
          <p
            ref={paragraphRef}
            className="w-full text-xl sm:text-4xl lg:text-4xl font-normal leading-[1.3] lg:leading-[1.4] tracking-tight"
          >
            {words.map((word, index) => {
              const highlighted = isGreenWord(word);
              return (
                <React.Fragment key={index}>
                  <span
                    className={`reveal-word inline-block transition-opacity duration-150 ease-out ${
                      highlighted
                        ? "text-[#059669] font-medium"
                        : "text-black"
                    }`}
                    style={{ opacity: 0.2 }}
                  >
                    {word}
                  </span>
                  {index < words.length - 1 ? " " : ""}
                </React.Fragment>
              );
            })}
          </p>
        </div>

        <div className="mt-14 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div
              ref={statsRef}
              className="grid grid-cols-3 lg:grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => {
                const isCommitment = stat.label === "Commitment";
                return (
                  <div
                    key={stat.label}
                    className={`rounded-xl sm:rounded-2xl border border-black/10 bg-black/[0.02] p-3 sm:p-5 lg:p-6 transition-all duration-300 hover:border-[#059669]/40 hover:bg-[#059669]/[0.02] flex flex-col justify-between ${
                      isCommitment ? "hidden lg:flex" : "flex"
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black/85">
                      {counts[index]}
                      {stat.suffix}
                    </div>

                    <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#059669]">
                      {stat.label}
                    </div>

                    <p className="mt-2 text-xs leading-5 text-black/55 hidden sm:block">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center">
            <div className="relative flex items-center justify-center p-2 sm:p-4">
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#059669]/10 blur-3xl" />

              <img
                src="/logo/icon.png"
                alt="ZYWEBS Z Logo"
                className="relative h-44 sm:h-56 lg:h-72 w-auto object-contain animate-float drop-shadow-[0_15px_35px_rgba(5,150,105,0.25)] select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;