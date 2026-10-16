"use client";

import { useState } from "react";
import Link from "next/link";

function getContrastTextColor(hexColor: string) {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) || 0;
  const g = parseInt(hex.substring(2, 4), 16) || 0;
  const b = parseInt(hex.substring(4, 6), 16) || 0;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 140 ? "#000000" : "#ffffff";
}

const PRESET_COLORS = [
  { name: "Royal Blue", hex: "#2563EB", tag: "Blue" },
  { name: "Cobalt Blue", hex: "#0066FF", tag: "Blue" },
  { name: "Enterprise Emerald", hex: "#059669", tag: "Green" },
  { name: "Cyber Jade", hex: "#00D285", tag: "Green" },
  { name: "Signature Lime", hex: "#c6f432", tag: "Green" },
  { name: "Electric Violet", hex: "#7C3AED", tag: "Violet" },
  { name: "Modern Indigo", hex: "#6366F1", tag: "Violet" },
  { name: "Crimson Rose", hex: "#E11D48", tag: "Red" },
  { name: "Sunset Vermilion", hex: "#FF385C", tag: "Red" },
];

const LIGHT_BG_OPTIONS = [
  { name: "Exact White", hex: "#ffffff", desc: "Pure 100% White" },
  { name: "Studio Off-White", hex: "#f3f4ef", desc: "ZYWEBS Soft Gray-Ivory" },
  { name: "Warm Stone", hex: "#f5f5f0", desc: "Subtle Warm Neutral" },
  { name: "Soft Linen", hex: "#f8f8f6", desc: "Clean Minimalist" },
];

const SHOWCASE_DATA = {
  badge: "ZYWEBS DIGITAL STUDIO",
  titlePrefix: "Crafting modern websites that ",
  titleAccent: "scale your brand",
  titleSuffix: ".",
  description:
    "We combine high-performance engineering with minimalist design to build web applications that convert visitors into loyal clients.",
  stats: [
    { value: "99.8%", label: "Performance Score" },
    { value: "3.4x", label: "Conversion Lift" },
    { value: "45+", label: "Projects Delivered" },
  ],
  features: [
    "Bespoke Next.js & Tailwind Architecture",
    "Enterprise-Grade Speed & Technical SEO",
    "Tailored Modern UI with Smooth Interactions",
  ],
  buttons: {
    primary: "Start a Project",
    outline: "View Case Studies",
    pill: "Schedule a Call",
    ghost: "Explore Services",
  },
};

export function Test() {
  const [activeColor, setActiveColor] = useState("#2563EB");
  const [lightBg, setLightBg] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  const contrastText = getContrastTextColor(activeColor);

  const copyCss = () => {
    navigator.clipboard.writeText(`--color-test: ${activeColor};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-screen flex flex-col font-sans">
      {/* Top Bar for Color Testing Controls */}
      <div className="w-full bg-neutral-900 text-white border-b border-neutral-800 px-4 py-3 sticky top-0 z-40 backdrop-blur-md bg-neutral-900/90">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="w-4 h-4 rounded-full ring-2 ring-white/20 transition-all duration-300 shadow-sm"
              style={{ backgroundColor: activeColor }}
            />
            <span className="text-xs uppercase tracking-widest font-semibold text-neutral-300">
              Brand Color Test Bench:
            </span>
            <span className="font-mono text-xs bg-neutral-800 px-2.5 py-1 rounded-md text-white border border-neutral-700">
              --color-test: {activeColor}
            </span>
          </div>

          {/* Quick Preset Selector */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            <span className="text-neutral-400 hidden sm:inline">Presets:</span>
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset.hex}
                type="button"
                onClick={() => setActiveColor(preset.hex)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all text-xs font-medium cursor-pointer ${
                  activeColor.toLowerCase() === preset.hex.toLowerCase()
                    ? "bg-neutral-800 text-white border-white/40 shadow-sm"
                    : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: preset.hex }}
                />
                <span>{preset.name}</span>
              </button>
            ))}

            <div className="flex items-center gap-1.5 ml-1">
              <input
                type="color"
                value={activeColor}
                onChange={(e) => setActiveColor(e.target.value)}
                className="w-7 h-7 rounded border border-neutral-700 bg-transparent cursor-pointer"
                title="Choose custom color"
              />
              <button
                type="button"
                onClick={copyCss}
                className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 text-xs transition-colors cursor-pointer"
              >
                {copied ? "Copied!" : "Copy CSS"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Split Screen: Left (bg-black) | Right (bg-white) */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* ======================================================== */}
        {/* LEFT SIDE: bg-black (DARK THEME)                        */}
        {/* ======================================================== */}
        <div className="bg-black text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 relative overflow-hidden">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[130px] opacity-25 transition-all duration-500"
            style={{ backgroundColor: activeColor }}
          />

          <div className="relative z-10 space-y-8">
            {/* 1. Badge & Tag Header */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest border border-neutral-800 bg-neutral-900/80 text-neutral-300">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: activeColor }}
                />
                <span>{SHOWCASE_DATA.badge}</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded border border-neutral-800 bg-neutral-950 text-neutral-400">
                LEFT: bg-black
              </span>
            </div>

            {/* 2. Headline & Paragraph */}
            <div className="space-y-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] transition-colors"
                style={{ color: activeColor }}
              >
                Digital Experiences That Convert
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white">
                {SHOWCASE_DATA.titlePrefix}
                <span
                  className="font-bold underline decoration-2 underline-offset-8 transition-colors"
                  style={{ color: activeColor }}
                >
                  {SHOWCASE_DATA.titleAccent}
                </span>
                {SHOWCASE_DATA.titleSuffix}
              </h2>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
                {SHOWCASE_DATA.description}
              </p>
            </div>

            {/* 3. Stats Row (Same on both) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm">
              {SHOWCASE_DATA.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div
                    className="text-2xl sm:text-3xl font-bold tracking-tight transition-colors"
                    style={{ color: activeColor }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Features Checklist (Same on both) */}
            <div className="space-y-2.5">
              {SHOWCASE_DATA.features.map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-sm text-neutral-300">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${activeColor}26`,
                      color: activeColor,
                    }}
                  >
                    ✓
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* 5. Buttons Suite (Primary button uses brand color as BG) */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Button Components (bg for primary button)
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                {/* Primary Button: Brand Color as Background */}
                <button
                  type="button"
                  style={{
                    backgroundColor: activeColor,
                    color: contrastText,
                    boxShadow: `0 0 25px ${activeColor}40`,
                  }}
                  className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
                >
                  <span>{SHOWCASE_DATA.buttons.primary}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

                {/* Secondary Outlined Button */}
                <button
                  type="button"
                  style={{
                    borderColor: activeColor,
                    color: activeColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = activeColor;
                    e.currentTarget.style.color = contrastText;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = activeColor;
                  }}
                  className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer bg-transparent"
                >
                  <span>{SHOWCASE_DATA.buttons.outline}</span>
                </button>

                {/* Pill with Brand Icon */}
                <button
                  type="button"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-700 bg-neutral-900/90 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-neutral-500 active:scale-95 cursor-pointer"
                >
                  <span>{SHOWCASE_DATA.buttons.pill}</span>
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: activeColor,
                      color: contrastText,
                    }}
                  >
                    <svg
                      className="h-3 w-3"
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

                {/* Ghost Text Button */}
                <button
                  type="button"
                  style={{ color: activeColor }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-80 active:scale-95 cursor-pointer bg-transparent px-2 py-1"
                >
                  <span>{SHOWCASE_DATA.buttons.ghost}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Card Info */}
          <div className="relative z-10 mt-10 pt-5 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>DARK MODE (bg-black)</span>
            <span style={{ color: activeColor }}>
              btn-bg: {activeColor}
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT SIDE: EXACT BG-WHITE (LIGHT THEME)                 */}
        {/* ======================================================== */}
        <div
          style={{ backgroundColor: lightBg }}
          className="text-black p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden transition-colors duration-300"
        >
          <div className="relative z-10 space-y-8">
            {/* 1. Badge & Tag Header with Light BG Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest border border-neutral-200 bg-neutral-100 text-neutral-800">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: activeColor }}
                />
                <span>{SHOWCASE_DATA.badge}</span>
              </div>

              {/* Light BG Selector */}
              <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full border border-neutral-200 text-xs">
                <span className="text-neutral-500 text-[10px] uppercase font-bold px-2">
                  BG:
                </span>
                {LIGHT_BG_OPTIONS.map((opt) => (
                  <button
                    key={opt.hex}
                    type="button"
                    onClick={() => setLightBg(opt.hex)}
                    className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      lightBg.toLowerCase() === opt.hex.toLowerCase()
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {opt.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Headline & Paragraph */}
            <div className="space-y-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] transition-colors"
                style={{ color: activeColor }}
              >
                Digital Experiences That Convert
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-neutral-950">
                {SHOWCASE_DATA.titlePrefix}
                <span
                  className="font-bold underline decoration-2 underline-offset-8 transition-colors"
                  style={{ color: activeColor }}
                >
                  {SHOWCASE_DATA.titleAccent}
                </span>
                {SHOWCASE_DATA.titleSuffix}
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg">
                {SHOWCASE_DATA.description}
              </p>
            </div>

            {/* 3. Stats Row (Same on both) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-sm">
              {SHOWCASE_DATA.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div
                    className="text-2xl sm:text-3xl font-bold tracking-tight transition-colors"
                    style={{ color: activeColor }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Features Checklist (Same on both) */}
            <div className="space-y-2.5">
              {SHOWCASE_DATA.features.map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-sm text-neutral-700">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${activeColor}22`,
                      color: activeColor,
                    }}
                  >
                    ✓
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* 5. Buttons Suite (Brand color as BG for primary button) */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Button Components (bg for primary button)
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                {/* Primary Button: Brand Color as Background */}
                <button
                  type="button"
                  style={{
                    backgroundColor: activeColor,
                    color: contrastText,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  }}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-black/10 px-6 py-3 text-sm font-bold transition-all duration-300 hover:brightness-95 active:scale-95 cursor-pointer"
                >
                  <span>{SHOWCASE_DATA.buttons.primary}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

                {/* Secondary Outlined Button */}
                <button
                  type="button"
                  style={{
                    borderColor: activeColor,
                    color: activeColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = activeColor;
                    e.currentTarget.style.color = contrastText;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = activeColor;
                  }}
                  className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer bg-transparent"
                >
                  <span>{SHOWCASE_DATA.buttons.outline}</span>
                </button>

                {/* Pill with Brand Icon */}
                <button
                  type="button"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-900 transition-all duration-300 hover:border-neutral-400 active:scale-95 cursor-pointer"
                >
                  <span>{SHOWCASE_DATA.buttons.pill}</span>
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: activeColor,
                      color: contrastText,
                    }}
                  >
                    <svg
                      className="h-3 w-3"
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

                {/* Ghost Text Button */}
                <button
                  type="button"
                  style={{ color: activeColor }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-80 active:scale-95 cursor-pointer bg-transparent px-2 py-1"
                >
                  <span>{SHOWCASE_DATA.buttons.ghost}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Card Info */}
          <div className="relative z-10 mt-10 pt-5 border-t border-black/10 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>
              RIGHT: {lightBg === "#ffffff" ? "Exact White (#ffffff)" : `Soft Light (${lightBg})`}
            </span>
            <span style={{ color: activeColor }} className="font-bold">
              btn-bg: {activeColor}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom helper bar */}
      <div className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-800 px-6 py-3 text-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span>Configured in</span>
          <code className="text-neutral-200 font-mono">app/globals.css</code>
          <span>as</span>
          <code
            className="font-mono font-bold"
            style={{ color: activeColor }}
          >
            --color-test: {activeColor}
          </code>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-neutral-300 hover:text-white transition-colors underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Test;
