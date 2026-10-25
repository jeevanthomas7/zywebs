"use client";

import { useState, useEffect, useRef } from "react";

export function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
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
    setMenuOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "top-0 px-0 pointer-events-auto"
          : "top-5 sm:top-5 lg:top-8 px-3 sm:px-8 pointer-events-none"
      }`}
    >
      <div
        ref={containerRef}
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "w-full max-w-none pointer-events-auto"
            : "w-full max-w-[340px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1040px] pointer-events-auto"
        }`}
      >
        <nav
          className={`relative isolate flex items-center justify-between transition-all duration-300 ease-out ${
            scrolled
              ? "rounded-none border-b border-black/10 bg-white/90 backdrop-blur-md text-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-2 sm:py-2.5 px-4 sm:px-6 lg:px-12 w-full"
              : "rounded-xl sm:rounded-2xl border border-white/20 bg-black/10 backdrop-blur-md text-white shadow-2xl py-2 pl-4 pr-2 sm:py-2 sm:pl-5 sm:pr-2 gap-4"
          }`}
        >
          {/* Rotating Emerald Gradient Border on Hero Pill (fades out on scroll) */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute -inset-px block overflow-hidden rounded-[inherit] p-[1px] transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          >
            <span className="absolute left-1/2 top-1/2 block aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2">
              <span
                className="absolute inset-0 block animate-[spin_5s_linear_infinite] motion-reduce:animate-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #05966900 0deg, #05966900 180deg, #05966933 240deg, #05966999 290deg, #059669 330deg, #05966900 360deg)",
                }}
              />
            </span>
          </span>

          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
              className="flex items-center gap-2 transition-opacity hover:opacity-90 py-0.5 cursor-pointer"
            >
              <img
                src={scrolled ? "/logo/logoblack.png" : "/logo/logowhite.png"}
                alt="ZYWEBS"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-5 sm:h-6.5" : "h-4.5 sm:h-5.5"
                }`}
              />
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center gap-6 lg:gap-10 text-xs sm:text-[14px] lg:text-[15px] font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-neutral-800" : "text-white/90"
            }`}
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
              className={`transition-colors duration-200 ${
                scrolled
                  ? "font-semibold text-neutral-900 hover:text-[#059669]"
                  : "font-semibold text-white hover:text-emerald-400"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "hover:text-[#059669]"
                  : "hover:text-emerald-300 text-white/80"
              }`}
            >
              Services
            </a>
            <a
              href="#work"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "hover:text-[#059669]"
                  : "hover:text-emerald-300 text-white/80"
              }`}
            >
              Works
            </a>
            <a
              href="#about"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "hover:text-[#059669]"
                  : "hover:text-emerald-300 text-white/80"
              }`}
            >
              About Us
            </a>
            <a
              href="#blog"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "hover:text-[#059669]"
                  : "hover:text-emerald-300 text-white/80"
              }`}
            >
              Blog
            </a>
          </div>

          {/* Right: Signature Zywebs Contact Us Button */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={openContact}
              className="group inline-flex items-center gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-md shadow-[#059669]/15"
            >
              <span>Contact Us</span>
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white text-black transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="h-3 w-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
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
                  className="absolute h-3 w-3 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
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
            </button>
          </div>

          {/* Mobile Right: Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors active:scale-95 cursor-pointer ${
                scrolled
                  ? " text-neutral-800 hover:bg-neutral-200"
                  : " text-white hover:bg-white/20"
              }`}
            >
              {menuOpen ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-3.5 w-4"
                  viewBox="0 0 24 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <line x1="2" y1="3" x2="22" y2="3" />
                  <line x1="10" y1="9" x2="22" y2="9" />
                  <line x1="2" y1="15" x2="22" y2="15" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <nav
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) {
                setMenuOpen(false);
              }
            }}
            className={`absolute inset-x-2 sm:inset-x-4 top-full mt-2.5 overflow-hidden rounded-[24px] border p-4 shadow-2xl backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled
                ? "bg-white/95 border-black/10 text-neutral-800"
                : "bg-[#071311]/90 border-white/15 text-white"
            }`}
          >
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  window.location.href = "/";
                }}
                className={`block rounded-xl px-4 py-2.5 transition-colors ${
                  scrolled
                    ? "text-[#059669] bg-emerald-50 font-semibold"
                    : "text-emerald-400 bg-white/5 font-semibold"
                }`}
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 transition-colors ${
                  scrolled
                    ? "hover:bg-neutral-100 hover:text-[#059669]"
                    : "hover:bg-white/10 hover:text-white text-white/80"
                }`}
              >
                Services
              </a>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 transition-colors ${
                  scrolled
                    ? "hover:bg-neutral-100 hover:text-[#059669]"
                    : "hover:bg-white/10 hover:text-white text-white/80"
                }`}
              >
                Works
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 transition-colors ${
                  scrolled
                    ? "hover:bg-neutral-100 hover:text-[#059669]"
                    : "hover:bg-white/10 hover:text-white text-white/80"
                }`}
              >
                About Us
              </a>
              <a
                href="#blog"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 transition-colors ${
                  scrolled
                    ? "hover:bg-neutral-100 hover:text-[#059669]"
                    : "hover:bg-white/10 hover:text-white text-white/80"
                }`}
              >
                Blog
              </a>

              {/* Mobile Contact Us Button */}
              <button
                type="button"
                onClick={openContact}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[#059669] py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] shadow-lg shadow-[#059669]/25 active:scale-95 cursor-pointer"
              >
                <span>Contact Us</span>
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-3 w-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
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
                    className="absolute h-3 w-3 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
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
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header2;
