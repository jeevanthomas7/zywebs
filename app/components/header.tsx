"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-none transition-[background-color,backdrop-filter,padding,box-shadow] duration-300 ease-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-2 sm:py-2.5"
          : "bg-transparent py-3.5 sm:py-4.5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="flex items-center gap-2 transition-opacity hover:opacity-90 py-0.5 cursor-pointer"
          >
            <img
              src="/logo/logoblack.png"
              alt="ZYWEBS"
              className="h-5 sm:h-6.5 w-auto object-contain transition-all duration-300"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-11 text-xs sm:text-[15px] font-medium text-neutral-800 tracking-wider">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className=" font-semibold transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#services"
            className="transition-colors duration-200 hover:text-[#059669]"
          >
            Services
          </a>
          <a
            href="#work"
            className="transition-colors duration-200 hover:text-[#059669]"
          >
            Works
          </a>
          <a
            href="#about"
            className="transition-colors duration-200 hover:text-[#059669]"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="transition-colors duration-200 hover:text-[#059669]"
          >
            Blog
          </a>
        </nav>

        {/* Right: Contact Us Button (Exact Hero design with brand green bg & white arrow badge) */}
        <div className="hidden md:flex items-center">
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

        {/* Mobile Right: Menu Icon Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-black/[0.04] p-2 text-neutral-800 transition-colors hover:bg-black/[0.08] active:scale-95"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Container */}
      {menuOpen && (
        <div className="md:hidden w-full px-4 pt-3 pb-5">
          <div className="w-full rounded-2xl border border-black/10 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col gap-3.5 text-sm font-medium text-neutral-800">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  window.location.href = "/";
                }}
                className="py-1 text-[#059669] font-semibold transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-[#059669]"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-[#059669]"
              >
                Works
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-[#059669]"
              >
                About Us
              </a>
              <a
                href="#blog"
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-[#059669]"
              >
                Blog
              </a>

              {/* Mobile Contact Us Button */}
              <button
                type="button"
                onClick={(e) => {
                  setMenuOpen(false);
                  openContact(e);
                }}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-[#059669] py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] shadow-md shadow-[#059669]/20 cursor-pointer"
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
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
