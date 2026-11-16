"use client";

import React, { useEffect, useRef } from "react";
import { Hero2 } from "./hero2";
import { About2 } from "./about2";
import { Services2 } from "./services2";

/**
 * HeroAbout2Container
 * Replicates photography theme: Starts white, dynamically transitions
 * background to deep black as the user scrolls past the Hero section.
 */
export function HeroAbout2Container() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;

    const updateBackground = () => {
      if (frame !== null) return;

      frame = requestAnimationFrame(() => {
        frame = null;
        if (!containerRef.current || !heroRef.current) return;

        const hero = heroRef.current.getBoundingClientRect();
        const distance = Math.max(hero.height * 0.75, 1);
        const progress = Math.min(1, Math.max(0, -hero.top / distance));

        // Smoothstep easing: 3x^2 - 2x^3
        const eased = progress * progress * (3 - 2 * progress);
        const shade = Math.round(255 * (1 - eased));

        containerRef.current.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
      });
    };

    updateBackground();
    window.addEventListener("scroll", updateBackground, { passive: true });
    window.addEventListener("resize", updateBackground, { passive: true });

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateBackground);
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white transition-colors duration-75 w-full"
    >
      <div ref={heroRef} className="[&>section]:!bg-transparent">
        <Hero2 />
      </div>

      <div className="[&>section]:!bg-transparent">
        <About2 />
      </div>
    </div>
  );
}

/**
 * Services2Container
 * Replicates photography theme: Starts black with white heading,
 * dynamically transitions background to white as user scrolls through
 * the service panels, adjusting --services-heading contrast simultaneously.
 */
export function Services2Container() {
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    let observer: ResizeObserver | null = null;

    const updateBackground = () => {
      if (frame !== null) return;

      frame = requestAnimationFrame(() => {
        frame = null;
        if (!containerRef.current || !servicesRef.current) return;

        const cards = servicesRef.current.querySelectorAll<HTMLElement>(
          "[data-service-panel]"
        );
        if (cards.length === 0) return;

        const secondCard = cards[1] || cards[0];
        const lastCard = cards[cards.length - 1];

        const second = secondCard.getBoundingClientRect();
        const last = lastCard.getBoundingClientRect();
        const viewport = window.innerHeight;

        const distance = Math.max(1, last.top - second.top + viewport * 0.1);
        const progress = Math.min(
          1,
          Math.max(0, (viewport * 0.85 - second.top) / distance)
        );

        // Smoothstep easing
        const eased = progress * progress * (3 - 2 * progress);
        const shade = Math.round(255 * eased);
        const textShade = Math.round(255 - 232 * eased);

        containerRef.current.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
        containerRef.current.style.setProperty(
          "--services-heading",
          `rgb(${textShade}, ${textShade}, ${textShade})`
        );
      });
    };

    updateBackground();
    window.addEventListener("scroll", updateBackground, { passive: true });
    window.addEventListener("resize", updateBackground, { passive: true });

    if (servicesRef.current && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => updateBackground());
      observer.observe(servicesRef.current);
    }

    return () => {
      observer?.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateBackground);
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black transition-colors duration-150 [--services-heading:#ffffff] [&_section]:!bg-transparent w-full"
    >
      <div ref={servicesRef}>
        <Services2 />
      </div>
    </div>
  );
}

export default function Home2Sequence() {
  return (
    <>
      <HeroAbout2Container />
      <Services2Container />
    </>
  );
}
