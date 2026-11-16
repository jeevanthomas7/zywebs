"use client";

import React from "react";

export function Hero2() {
  return (
    <section className="bg-transparent px-2 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5">
      <div
        className="relative isolate flex min-h-[760px] flex-col justify-end
                   overflow-hidden rounded-[18px] bg-[#929E95]
                   sm:min-h-[820px] sm:rounded-[24px]
                   lg:min-h-[calc(100svh-40px)]"
      >
        <img
          src="/img/herozy.png"
          alt="ZYWEBS digital studio"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Bottom to Top Subtle Gradient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10
                     bg-gradient-to-t from-black/40 via-black/35 to-black/20"
        />

        {/* Left to Right Gradient for enhanced text contrast */}
        <div
          className="pointer-events-none absolute inset-0 -z-10
                     bg-gradient-to-r from-black/40 via-black/20 to-transparent"
        />

        <div
          className="relative flex flex-1 flex-col justify-end
                     px-6 pb-8 pt-32 sm:px-10 sm:pb-10
                     lg:px-12 lg:pb-12 xl:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-[43%]
                       hidden items-center justify-between text-[18px]
                       font-light text-white/65 sm:inset-x-10 lg:flex lg:inset-x-12"
          >
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div className="text-white">
              <div className="mb-10 lg:mb-20 xl:mb-24">
                <p
                  className="mb-3 lg:mb-4 text-[9px] font-medium uppercase
                             tracking-[0.3em] text-white/75 sm:text-[11px]"
                >
                  Web Architecture &amp; Design
                </p>

                <h1
                  className="text-[80px] font-medium leading-[0.95]
                             tracking-tight sm:text-[90px]
                             lg:text-[110px] xl:text-[140px]"
                >
                  elevate
                  <span
                    className="ml-1 inline-block align-top
                               text-[24px] leading-[1.2]
                               sm:text-[32px] lg:text-[40px]"
                  >
                    ®
                  </span>
                </h1>

                <p
                  className="mt-4 pl-24 lg:pl-16 text-[13px] font-light
                             tracking-[0.03em] text-white/85
                             sm:pl-28 sm:text-[15px] lg:pl-40"
                >
                  Your digital presence
                </p>
              </div>

              <p
                className="max-w-[340px] text-[14px] font-light
                           leading-7 text-white/85 sm:text-[15px]"
              >
                — Crafting high-performance websites and bespoke digital platforms.
                Fast, responsive, and designed to turn visitors into long-term clients.
              </p>
            </div>

            <div className="w-full max-w-[340px] justify-self-start lg:max-w-none lg:justify-self-end">
              <div
                className="relative isolate flex min-h-[230px]
                           flex-col justify-between overflow-hidden
                           rounded-[16px] border border-white/10
                           bg-[#425B50] p-5 sm:min-h-[250px]"
              >
                <img
                  src="/img/ecom.png"
                  alt=""
                  className="absolute inset-0 -z-20 h-full
                             w-full object-cover object-center"
                />

                <div
                  className="absolute inset-0 -z-10
                             bg-gradient-to-b from-[#243C30]/75
                             via-[#243C30]/50 to-[#243C30]/75"
                />

                <h2
                  className="max-w-[220px] text-[16px] lg:text-[21px] font-light
                             leading-[1.25] tracking-[-0.035em] text-white"
                >
                  Thoughtful code.<br />
                  Measurable impact.
                </h2>

                <div className="mt-12 flex items-end justify-between gap-4">
                  <span className="text-[10px] text-white/75">
                    © {new Date().getFullYear()} ZYWEBS
                  </span>

                  <a
                    href="#services"
                    className="group inline-flex min-h-[38px]
                               shrink-0 items-center justify-center
                               gap-2 rounded-full bg-[#F5F3EE]
                               px-5 text-[11px] font-medium
                               text-[#1A211B] transition-colors
                               duration-300 hover:bg-white
                               focus-visible:outline
                               focus-visible:outline-2
                               focus-visible:outline-offset-4
                               focus-visible:outline-white"
                  >
                    View Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
