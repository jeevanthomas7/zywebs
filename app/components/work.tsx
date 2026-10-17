"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export function Work() {
  const [mounted, setMounted] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Taste of Malabar Caterers",
      tags: ["Business Website", "Web Development"],
      image: "/img/food.png",
      url: "https://www.tasteofmalabarcaterers.com/",
    },
    {
      title: "DOT-IN Premium Music Website ",
      tags: ["AI Website", "UI/UX Design"],
      image: "/img/dot.png",
      url: "https://dot-in.vercel.app/",
    },
    {
      title: "FullStack Developer Portfolio",
      tags: ["Personal Portfolio", "Web Development"],
      image: "/img/port.png",
      url: "https://www.jeevanthomas.online/",
    },
  ];

  return (
    <section
      id="work"
      className="w-full pt-12 sm:pt-16 lg:pt-22 pb-12 sm:pb-16 lg:pb-22 bg-white text-black overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="mb-8 lg:mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end text-center sm:text-left">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
              Our Portfolio
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize tracking-tight text-black">
              Latest Works
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous work"
              className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-lg border border-black/15 bg-white text-black hover:bg-[#059669] hover:text-white hover:border-[#059669] transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
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
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next work"
              className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-lg border border-black/15 bg-white text-black hover:bg-[#059669] hover:text-white hover:border-[#059669] transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
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

        <div>
          {mounted ? (
            <Swiper
              onSwiper={setSwiperInstance}
              slidesPerView={1.2}
              spaceBetween={16}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 1.6,
                  spaceBetween: 22,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 28,
                },
                1280: {
                  slidesPerView: 2.3,
                  spaceBetween: 32,
                },
              }}
              className="!overflow-visible"
            >
              {projects.map((item, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="group flex flex-col h-full">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[4/3] sm:aspect-[16/12] lg:aspect-[16/12] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#f4f4f5] border border-black/10 block cursor-pointer shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </a>

                    <div className="mt-3.5 sm:mt-4.5 flex flex-col gap-2 sm:gap-2.5">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium text-black/60 border border-black/15 bg-black/[0.02] px-2.5 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-black tracking-tight truncate group-hover:text-[#059669] transition-colors min-w-0 pr-1">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        </h3>

                        <div className="shrink-0">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-semibold text-black underline underline-offset-4 decoration-[#059669] hover:text-[#059669] transition-colors"
                          >
                            Visit site
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex gap-5 overflow-hidden">
              {projects.map((item, idx) => (
                <div key={idx} className="w-[85%] lg:w-[42%] shrink-0">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-[4/3] sm:aspect-[16/12] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#f4f4f5] border border-black/10 block cursor-pointer shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </a>
                  <div className="mt-3.5 flex flex-col gap-2">
                    <div className="flex gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs border border-black/15 px-2.5 py-0.5 rounded-md text-black/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-medium text-black truncate">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      </h3>
                      <div className="shrink-0">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-black underline underline-offset-4 decoration-[#059669] hover:text-[#059669] transition-colors"
                        >
                          Visit site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Work;
