"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Custom Business Website");
  const [details, setDetails] = useState("");

  useEffect(() => {
    setMounted(true);

    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const message = `*New Project Inquiry - ZYWEBS*%0A%0A*Name:* ${encodeURIComponent(
      fullName
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(
      email || "N/A"
    )}%0A*Service:* ${encodeURIComponent(
      service
    )}%0A*Details:* ${encodeURIComponent(details || "N/A")}`;

    // Open WhatsApp
    const waUrl = `https://wa.me/919495547850?text=${message}`;
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      // Reset form
      setFullName("");
      setPhone("");
      setEmail("");
      setDetails("");
    }, 2500);
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      style={{ zIndex: 99999999 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl lg:max-w-5xl rounded-xl sm:rounded-2xl bg-white shadow-2xl transition-all max-h-[90vh] flex flex-col lg:grid lg:grid-cols-12 overflow-y-auto border border-neutral-200"
      >
        {/* Close button (Floating top right) */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute right-3.5 top-3.5 text-black! z-30 flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer shadow-sm border border-white/20 backdrop-blur-md"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ========================================================================= */}
        {/* PANEL 1: CONTACT INFORMATION BOX                                          */}
        {/* Mobile: 1st (Top) | Desktop / LG: 1st (Left 5 Cols)                       */}
        {/* ========================================================================= */}
        <div className="order-1 lg:order-1 lg:col-span-5 w-full shrink-0 bg-gradient-to-br from-neutral-950 via-[#0a1411] to-neutral-950 p-5 sm:p-6 lg:p-8 text-white flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Ambient emerald backlight glow */}
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-[#059669]/15 blur-3xl" />
          <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#059669]/10 blur-2xl" />

          <div className="relative z-10 flex flex-col justify-between gap-5 lg:h-full">
            <div>
              {/* Studio Logo */}
              <div className="flex items-center gap-2">
                <img
                  src="/logo/logo.png"
                  alt="ZYWEBS"
                  className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(5,150,105,0.4)]"
                />
              </div>

              {/* Title & Short Clean Subtitle */}
              <h3 className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                Contact Information
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Connect with our team directly. We are ready to bring your ideas to life.
              </p>

              {/* Clean Contact Action Cards */}
              <div className="mt-5 flex flex-col gap-2.5">
                {/* 1. WhatsApp */}
                <a
                  href="https://wa.me/919495547850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-neutral-300 transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#059669]/20 text-[#34d399] transition-transform duration-200 group-hover:scale-105">
                    <i className="fa-brands fa-whatsapp text-base" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">WhatsApp</span>
                    <span className="font-medium text-white truncate">+91 94955 47850</span>
                  </div>
                </a>

                {/* 2. Phone */}
                <a
                  href="tel:+919495547850"
                  className="group flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-neutral-300 transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#059669]/20 text-[#34d399] transition-transform duration-200 group-hover:scale-105">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Phone</span>
                    <span className="font-medium text-white truncate">+91 94955 47850</span>
                  </div>
                </a>

                {/* 3. Email */}
                <a
                  href="https://gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-neutral-300 transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#059669]/20 text-[#34d399] transition-transform duration-200 group-hover:scale-105">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Email</span>
                    <span className="font-medium text-white truncate">gmail.com</span>
                  </div>
                </a>

                {/* 4. Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-neutral-300 transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#059669]/20 text-[#34d399] transition-transform duration-200 group-hover:scale-105">
                    <i className="fa-brands fa-instagram text-base" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Instagram</span>
                    <span className="font-medium text-white truncate">instagram.com</span>
                  </div>
                </a>

                {/* 5. Location (Thrissur, Kerala with Google Maps Link) */}
                <a
                  href="https://maps.google.com/?q=Thrissur,+Kerala,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-neutral-300 transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/10 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#059669]/20 text-[#34d399] transition-transform duration-200 group-hover:scale-105">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Location</span>
                    <span className="font-medium text-white truncate">Thrissur, Kerala, India</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Subtle Status */}
            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 pt-4 border-t border-white/10">
              <span className="inline-block h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Available for projects worldwide</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PANEL 2: PROJECT INQUIRY FORM                                             */}
        {/* Mobile: 2nd (Bottom) | Desktop / LG: 2nd (Right 7 Cols)                   */}
        {/* ========================================================================= */}
        <div className="order-2 lg:order-2 lg:col-span-7 w-full shrink-0 bg-white p-5 sm:p-6 lg:p-10 text-neutral-900 flex flex-col justify-between relative">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center my-auto">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#059669]/10 text-[#059669] text-3xl">
                ✓
              </div>
              <h3 className="mt-4 text-2xl font-bold text-neutral-900">
                Inquiry Sent!
              </h3>
              <p className="mt-2 text-sm text-neutral-600 max-w-xs">
                WhatsApp chat has opened. Our team will review your project and get back to you immediately.
              </p>
            </div>
          ) : (
            <div>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#059669]/30 bg-[#059669]/10 px-3 py-1 text-[11px] font-semibold text-[#059669]">
                <span>Get In Touch</span>
              </div>

              {/* Form Title & Subtitle */}
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                Start Your Project
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Fill in your details to connect directly with our development team.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3.5 sm:gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] focus:outline-none transition-all"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Custom Business Website">Custom Business Website</option>
                    <option value="E-Commerce Store">E-Commerce Store</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="UI/UX & Redesign">UI/UX & Redesign</option>
                    <option value="Speed & SEO Optimization">Speed & SEO Optimization</option>
                  </select>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Project Details & Goals
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your business, required features, or target timeline..."
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#059669] focus:ring-1 focus:ring-[#059669] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Signature Brand CTA Button with 45-degree arrow */}
                <button
                  type="submit"
                  className="group mt-2 w-full inline-flex items-center justify-center gap-3 rounded-lg bg-[#059669] pl-6 pr-2.5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-lg shadow-[#059669]/20"
                >
                  <span>Submit Inquiry</span>
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white text-black transition-transform duration-300 group-hover:scale-105">
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
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ContactModal;
