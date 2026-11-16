"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function Header2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 z-50 px-3 sm:px-6 transition-[top] duration-300 ease-out ${
        scrolled
          ? "top-3 sm:top-4 lg:top-4"
          : "top-6 sm:top-6 lg:top-10"
      }`}
    >
      <div
        ref={containerRef}
        className="pointer-events-auto relative mx-auto w-full max-w-[320px] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[920px]"
      >
        <nav
          className="relative isolate flex min-h-[48px] items-center justify-between
          gap-4 sm:gap-6 rounded-full border border-white/15 bg-black/50
          py-1.5 pl-4 sm:pl-6 pr-1.5 text-white shadow-2xl backdrop-blur-xl
          sm:min-h-[56px] sm:py-2 sm:pr-2 transition-all duration-300"
        >
          {/* Rotating Conic Emerald Gradient Border */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px block overflow-hidden rounded-[inherit] p-[1px]"
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          >
            <span className="absolute left-1/2 top-1/2 block aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2">
              <span
                className="absolute inset-0 block animate-[spin_5s_linear_infinite] motion-reduce:animate-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #05966900 0deg, #05966900 180deg, #05966933 240deg, #05966999 290deg, #10b981 330deg, #05966900 360deg)",
                }}
              />
            </span>
          </span>

          {/* Logo */}
          <a
            href="/"
            className="shrink-0 flex items-center transition-opacity hover:opacity-90"
            aria-label="ZYWEBS Home"
          >
            <img
              src="/logo/logowhite.png"
              alt="ZYWEBS"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <a
              href="#hero"
              className="text-[13px] font-medium text-white transition-colors hover:text-emerald-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[13px] font-medium text-white/80 transition-colors hover:text-white"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-[13px] font-medium text-white/80 transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-[13px] font-medium text-white/80 transition-colors hover:text-white"
            >
              Work
            </a>
          </div>

          {/* Desktop Contact Us CTA */}
          <button
            onClick={openContact}
            type="button"
            className="hidden min-h-[36px] shrink-0 items-center justify-center rounded-full bg-[#f3f4ef] px-5 text-[12px] font-semibold text-[#0c1412] transition-all hover:bg-white hover:shadow-lg hover:shadow-emerald-500/10 active:scale-95 md:inline-flex cursor-pointer"
          >
            Contact Us
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={open}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute inset-x-0 top-full mt-2.5 overflow-hidden rounded-[24px] border border-white/15 bg-black/80 p-3 text-white shadow-2xl backdrop-blur-2xl md:hidden transition-all duration-200 ease-out origin-top ${
            open
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-white/10"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-[13px] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-[13px] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-[13px] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
          >
            Work
          </a>
          <button
            onClick={openContact}
            type="button"
            className="mt-2 flex w-full min-h-[42px] items-center justify-center rounded-full bg-[#f3f4ef] px-5 text-[12px] font-semibold text-[#0c1412] transition-colors hover:bg-white"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header2;
