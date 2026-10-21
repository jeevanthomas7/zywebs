"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    description:
      "Modern websites crafted with a focus on design, performance, and results.",
  },
  {
    value: 10,
    suffix: "+",
    label: " Clients Work Completed",
    description:
      "Building strong relationships through reliable service and quality work.",
  },
  {
    value: 1,
    suffix: "+",
    label: "Years of Experience",
    description:
      "Creating modern, reliable digital solutions tailored to real business goals.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment",
    description:
      "Focused on quality, attention to detail, and delivering the best possible experience.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !imageRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
            const progress =
              (windowHeight - rect.top) / (windowHeight + rect.height);
            const translateY = (progress - 0.5) * -70;
            imageRef.current.style.transform = `translate3d(0, ${translateY.toFixed(
              2
            )}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-white pt-10 sm:pt-20 lg:pt-28 pb-0 sm:pb-20 lg:pb-24 text-black overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1 sm:col-span-6 flex flex-col">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
                About Us
              </p>

              <h2 className="mt-2 text-[32px] sm:text-4xl lg:text-6xl font-semibold tracking-tight text-black leading-[1.15]">
                Digital Experiences.
                <br />
                <span className="text-[#059669]">
                  Built to Make an Impact.
                </span>
              </h2>
            </div>

           

            <div className="hidden sm:block mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-black/65 max-w-2xl text-left">
              <p>
                We build modern, high-performance websites that combine thoughtful
                design with powerful technology. From bespoke business websites to
                custom web applications, we engineer digital solutions that elevate
                your brand and captivate your audience.
              </p>
              <p>
                Every detail is purposeful — blending minimalist aesthetics with
                lightning-fast load speeds, intuitive user journeys, and robust search
                engine optimization so your business builds trust, commands authority,
                and scales effortlessly online.
              </p>
            </div>

            <div className="hidden sm:flex mt-6 sm:mt-8 items-center justify-start">
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-lg shadow-[#059669]/20"
              >
                <span>More About Us</span>
                <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-white text-black transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-3 w-3 sm:h-3 sm:w-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
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
                    className="absolute h-3 w-3 sm:h-3 sm:w-3 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
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
            </div>
          </div>

          <div className="order-1 lg:order-2 sm:col-span-6 items-center justify-center relative">
            <div
              ref={imageRef}
              className="w-full max-w-3xl flex items-center justify-center transition-transform duration-75 ease-out will-change-transform"
            >
              <img
                src="/img/abt.png"
                alt="Digital Experiences - ZYWEBS"
                className="w-full h-auto object-contain lg:max-h-[520px] select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(5,150,105,0.1)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="mt-8 sm:mt-16 lg:mt-20 grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => {
            const isCommitment = stat.label === "Commitment";
            return (
              <div
                key={stat.label}
                className={`rounded-md sm:rounded-2xl border border-black/10 bg-black/[0.02] p-3 sm:p-5 lg:p-6 transition-all duration-300 hover:border-[#059669]/40 hover:bg-[#059669]/[0.02] flex flex-col justify-between ${
                  isCommitment ? "hidden sm:flex" : "flex"
                }`}
              >
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-black/85">
                  {counts[index]}
                  {stat.suffix}
                </div>

                <div className="mt-1 sm:mt-2 text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#059669]">
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
    </section>
  );
}

export default About;