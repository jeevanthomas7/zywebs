"use client";

import React from "react";

const articles = [
  {
    category: "Web Development",
    date: "16/03/2026",
    title: "Architecting High-Performance Next.js Websites for Maximum Conversion",
    description:
      "How modern React 19 and Next.js architectures drastically improve core web vitals, speed up user journeys, and scale brand revenue.",
    image: "/img/web.png",
  },
  {
    category: "UI/UX & Web Design",
    date: "04/02/2026",
    title: "Crafting Intuitive Digital Interfaces That Captivate and Convert",
    description:
      "Design systems, minimalist aesthetics, and thoughtful micro-interactions that turn casual website visitors into lifelong customers.",
    image: "/img/ui.png",
  },
  {
    category: "E-Commerce Solutions",
    date: "09/06/2026",
    title: "Scaling Modern Online Stores with Seamless Checkout Architecture",
    description:
      "How modern e-commerce engineering, headless architectures, and frictionless checkout flows increase average order value.",
    image: "/img/ecom.png",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="w-full pt-12 sm:pt-16 lg:pt-22 pb-12 sm:pb-16 lg:pb-22 bg-white text-black"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-8 lg:mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end text-center sm:text-left">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
              Blog
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize tracking-tight text-black">
              Latest Articles
            </h2>
          </div>
          <p className="hidden sm:block max-w-md text-xs sm:text-sm text-black/60 leading-relaxed md:text-right">
            Engineering insights, design trends, and modern web strategies to help your brand stay ahead online.
          </p>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="group flex flex-col cursor-pointer transition-all duration-300"
            >
              {/* Article Image Container with Signature Rounded Corners */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 shadow-sm border border-black/[0.08]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Meta Row: Category Badge & Date */}
              <div className="mt-4 sm:mt-5 flex items-center justify-between gap-3">
                <span className="rounded-lg border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black/75 transition-colors duration-200 group-hover:border-[#059669] group-hover:bg-[#059669]/10 group-hover:text-[#059669]">
                  {item.category}
                </span>
                <span className="text-xs font-medium text-black/45">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-black transition-colors duration-200 group-hover:text-[#059669] leading-snug line-clamp-2">
                {item.title}
              </h3>

              {/* Description Excerpt: Exactly 2 lines with line-clamp-2 */}
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-black/60 line-clamp-2">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
