"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    description: "Modern web platforms crafted with a focus on design, speed, and real results.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Clients Served",
    description: "Long-term relationships built on transparent communication and quality delivery.",
  },
  {
    value: 1,
    suffix: "+",
    label: "Years of Experience",
    description: "Creating modern, reliable digital solutions tailored to ambitious brand goals.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Commitment",
    description: "Obsessed with pixel-perfection, sub-second speeds, and scalable architecture.",
  },
];

function StatCard({ stat }: { stat: StatItem }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(stat.value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const duration = 2000;

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(stat.value * eased));

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(stat.value);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <article
      ref={cardRef}
      className="flex min-h-[140px] flex-col justify-between
                 rounded-xl sm:rounded-[18px] border border-white/5
                 bg-white/[0.04] p-4 sm:p-6 md:min-h-[220px] lg:min-h-[250px]
                 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06]"
    >
      <p
        className="text-[36px] sm:text-[46px] lg:text-[60px] font-light leading-none
                   tabular-nums tracking-[-0.055em] text-white"
      >
        <span className="sr-only">{stat.value}{stat.suffix}</span>
        <span aria-hidden="true">
          {count.toLocaleString("en-US")}
          <span className="text-emerald-400">{stat.suffix}</span>
        </span>
      </p>

      <div className="mt-6 sm:mt-8">
        <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white/90">
          {stat.label}
        </h3>
        <p className="hidden sm:block mt-2 text-[12px] lg:text-[13px] leading-relaxed text-white/45">
          {stat.description}
        </p>
      </div>
    </article>
  );
}

export function About2() {
  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <section id="about" className="px-2 pb-3 pt-0 sm:px-5 sm:pb-5 sm:pt-0 bg-transparent">
      <div
        className="overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#000000]
                   px-4 py-12 sm:px-8 sm:py-20 lg:px-[60px] lg:py-28 text-white"
      >
        <div className="w-full">
          {/* Top Intro Section */}
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-14 xl:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-[65%]">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-emerald-400 sm:text-[11px]">
                About ZYWEBS
              </p>

              <h2 className="text-[30px] font-light leading-[1.2] tracking-tight sm:text-[38px] lg:text-[46px] xl:text-[52px]">
                <span>
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block origin-center animate-[spin_8s_linear_infinite] text-emerald-400"
                  >
                    ✳
                  </span>
                  Your digital presence, honestly crafted. Every
                </span>
                <span className="mt-1 block text-white/45">
                  line of code, every pixel perfected.
                </span>
              </h2>

              <p className="mt-6 max-w-[660px] text-[13px] font-light leading-relaxed text-white/60 sm:text-[16px] sm:leading-8 lg:text-[17px]">
                At ZYWEBS, web engineering begins with understanding your story and audience.
                We craft fast, custom websites and high-converting web applications designed
                with clean aesthetics, fluid animations, and solid technical foundations that
                help ambitious brands stand out and scale effortlessly.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="group inline-flex min-h-[46px] sm:min-h-[50px] shrink-0 items-center
                             justify-center gap-3 rounded-full border border-white/60 bg-white
                             px-6 sm:px-8 text-[13px] sm:text-[14px] font-medium text-black
                             shadow-sm transition-all duration-300 hover:border-emerald-400
                             hover:bg-emerald-400 hover:text-black cursor-pointer"
                >
                  <span>Explore Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <button
                  onClick={openContact}
                  type="button"
                  className="inline-flex min-h-[46px] sm:min-h-[50px] shrink-0 items-center
                             justify-center rounded-full border border-white/20 bg-transparent
                             px-6 text-[13px] font-medium text-white transition-colors
                             hover:border-white/50 hover:bg-white/10 cursor-pointer"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="flex w-full items-center justify-center lg:w-[32%]">
              <div className="relative flex w-full items-center justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-center">
                  <Image
                    src="/img/abt.png"
                    alt="ZYWEBS Web Development Architecture"
                    width={500}
                    height={500}
                    className="h-auto w-full object-contain drop-shadow-2xl"
                  />
                  {/* Subtle inner emerald glow */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-16 md:gap-4">
            {statsData.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2;
