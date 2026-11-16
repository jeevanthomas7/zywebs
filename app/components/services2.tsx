"use client";

import React from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  url: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "We build fast, responsive websites and scalable web applications using modern frameworks to deliver exceptional, high-converting digital experiences.",
    image: "/img/web.png",
    url: "/services/web-development",
  },
  {
    title: "Web Design & UI/UX",
    description:
      "We craft clean, intuitive interfaces that combine modern aesthetics with seamless interactions, giving your brand a distinct and authoritative presence.",
    image: "/img/ui.png",
    url: "/services/web-design",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "We engineer custom online stores with lightning-fast catalog search, frictionless checkout flows, and payment integrations built for high volume.",
    image: "/img/ecom.png",
    url: "/services/ecommerce",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "We optimize Core Web Vitals, server response times, and semantic SEO structure so your business ranks higher and converts visitors instantly.",
    image: "/img/seo.png",
    url: "/services/performance-seo",
  },
];

export function Services2() {
  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <section
      id="services"
      className="px-3 sm:px-6 lg:px-[60px] pb-16 sm:pb-24 pt-10 sm:pt-16 transition-colors duration-150"
    >
      {/* Services Header */}
      <div className="mb-10 lg:mb-20 grid items-end gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-500">
            Our Services
          </p>

          <h2 className="mt-4 text-[34px] sm:text-[46px] lg:text-[62px] font-light leading-[1.1] tracking-[-0.04em] text-[var(--services-heading,#ffffff)] transition-colors duration-150">
            Every business deserves<br />
            <span className="opacity-60">
              a world-class web presence.
            </span>
          </h2>
        </div>

        <p className="max-w-[440px] text-[14px] leading-7 text-[var(--services-heading,#ffffff)] opacity-75 sm:text-[15px] lg:justify-self-end lg:pb-1 lg:text-[16px] transition-colors duration-150">
          From high-performance corporate platforms to scalable web applications and e-commerce stores,
          we build digital solutions that feel effortless to use and are engineered to grow with your business.
        </p>
      </div>

      {/* Services Cards with Parallax Fixed Background Panels */}
      <div className="space-y-4 sm:space-y-14 lg:space-y-20">
        {servicesData.map((service, index) => (
          <article
            key={service.title}
            data-service-panel
            style={{
              backgroundImage: `url('${service.image}')`,
            }}
            className="relative isolate bg-fixed flex min-h-[320px]
                       items-center justify-center overflow-hidden
                       rounded-[10px] sm:rounded-[18px] bg-[#071913] bg-cover bg-center
                       bg-no-repeat px-6 py-20
                       sm:min-h-[480px] sm:px-10
                       lg:min-h-[640px] lg:py-28 shadow-2xl border border-white/10"
          >
            {/* Gradient Overlays for High Legibility */}
            <div
              className="pointer-events-none absolute inset-0
                         bg-gradient-to-t from-black/85
                         via-black/55 to-black/40"
            />
            <div
              className="pointer-events-none absolute inset-0
                         bg-black/30"
            />

            {/* Panel Content */}
            <div className="relative z-10 mx-auto w-full max-w-[920px] text-center text-white px-2">
              <h3
                id={`service-heading-${index}`}
                className="text-[32px] sm:text-[46px] lg:text-[58px] font-light
                           leading-[1.2] tracking-[-0.025em] drop-shadow-md"
              >
                {service.title}
              </h3>

              <p
                className="mx-auto mt-5 max-w-[620px]
                           text-[13px] font-light leading-relaxed
                           text-white/85 sm:text-[16px] sm:leading-8 drop-shadow-sm"
              >
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={openContact}
                  type="button"
                  className="group inline-flex min-h-[46px] sm:min-h-[50px] shrink-0 items-center justify-center
                             gap-3 rounded-full border border-white/60 bg-transparent
                             px-7 text-[13px] sm:text-[14px] font-medium text-white shadow-sm
                             transition-all duration-300 hover:border-emerald-400
                             hover:bg-emerald-400 hover:text-black cursor-pointer active:scale-95"
                >
                  <span>Let's Build Together</span>
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
                </button>

                <Link
                  href={service.url}
                  className="inline-flex min-h-[46px] sm:min-h-[50px] shrink-0 items-center justify-center
                             rounded-full bg-white/10 px-5 text-[13px] font-medium text-white/90
                             backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services2;
