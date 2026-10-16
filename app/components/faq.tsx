"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "How long does a website project usually take?",
    answer:
      "Most custom website projects take between 2 to 4 weeks depending on scope, page count, and custom features. We provide a clear milestone roadmap during our initial discovery call.",
  },
  {
    id: "02",
    question: "What is your pricing model and how much does it cost?",
    answer:
      "We offer transparent, fixed-scope pricing based on your project goals and required features. Every proposal includes detailed deliverables with zero hidden costs or surprises.",
  },
  {
    id: "03",
    question: "Do you build custom websites or use templates?",
    answer:
      "Every project is 100% custom-crafted to reflect your unique brand identity. We design tailored UI/UX in Figma and engineer high-performance code with Next.js and Tailwind CSS.",
  },
  {
    id: "04",
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Absolutely. Every website we build is fully responsive across all device screen sizes and optimized for fast load speeds, Core Web Vitals, and technical on-page SEO best practices.",
  },
  {
    id: "05",
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes! We provide ongoing support plans covering speed monitoring, security patches, regular backups, and content updates so your website continues running smoothly.",
  },
  {
    id: "06",
    question: "Can I easily update and manage website content myself?",
    answer:
      "Yes. We can integrate an intuitive headless CMS (such as Sanity, Strapi, or WordPress API) or provide streamlined management so you can update text and images effortlessly.",
  },
];

export function Faq() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-contact-modal"));
    }
  };

  return (
    <section
      id="faq"
      className="w-full pt-12 sm:pt-16 lg:pt-22 pb-12 sm:pb-16 lg:pb-40 bg-white text-black"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        {/* Section Header: Subheading & Heading on Left, Paragraph Description on Right */}
        <div className="mb-8 lg:mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end text-center sm:text-left">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize tracking-tight text-black">
              Frequently Asked Questions
            </h2>
          </div>

          <p className="hidden sm:block max-w-md text-xs sm:text-sm text-black/60 leading-relaxed md:text-right">
            Everything you need to know about our design, engineering process,
            timelines, and post-launch maintenance.
          </p>
        </div>

        {/* 2-Column Grid with 6 Common Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={faq.id}
                className={`group rounded-xl sm:rounded-2xl border transition-all duration-300 p-5 sm:p-7 ${
                  isOpen
                    ? "bg-gradient-to-b from-white via-[#fcfdfa] to-[#edf4e8] border-[#059669] shadow-lg shadow-[#059669]/10 ring-1 ring-[#059669]/20"
                    : "bg-gradient-to-b from-white via-[#fcfdfa] to-[#f4f7f0] border-black/10 hover:border-[#059669]/40 hover:shadow-md shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded-lg border mt-0.5 shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#059669]/15 border-[#059669] text-[#059669]"
                          : "bg-gradient-to-br from-white via-white to-[#edf3e8] border-black/10 text-black/60 group-hover:border-[#059669]/40"
                      }`}
                    >
                      {faq.id}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-black tracking-tight leading-snug group-hover:text-[#059669] transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus / Minus Toggle Button */}
                  <span
                    className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#059669] text-white border-[#059669] rotate-45 shadow-sm"
                        : "bg-white text-black/70 border-black/15 group-hover:border-[#059669] group-hover:text-[#059669]"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>

                {/* Animated Collapsible Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-black/10"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm leading-relaxed text-black/70 pl-9 sm:pl-11">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}

export default Faq;
