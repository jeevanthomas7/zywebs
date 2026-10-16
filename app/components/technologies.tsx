"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: string; // CDN or SVG path
  badgeBg?: string;
  badgeText?: string;
}

const technologies: TechItem[] = [
  // Row 1 from reference image
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  // Row 2 from reference image
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "GSAP",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/greensock.svg",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg",
  },
  {
    name: "Three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  {
    name: "Swiper.js",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/swiper.svg",
  },
  {
    name: "Lucide Icons",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lucide.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // Row 3: Modern ecosystem tools
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
];

export function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full px-2 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 bg-white text-black"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-black/10 pb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
              Technologies We Work With
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold capitalize tracking-tight text-black">
              Technologies & Tools
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-black/60 leading-relaxed md:text-right">
            We build reliable, high-speed digital products using modern frameworks and battle-tested industry tools.
          </p>
        </div>

        {/* Tech Grid (8 columns on desktop, exactly like reference image) */}
        <div className="mt-12 grid grid-cols-6  md:grid-cols-6 lg:grid-cols-10 gap-3 sm:gap-4 lg:gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#059669] hover:shadow-xl hover:shadow-black/5 aspect-square"
            >
              {/* Tech Icon */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  className="max-h-9 max-w-9 sm:max-h-10 sm:max-w-10 object-contain"
                />
              </div>

              {/* Tech Name */}
              <span className="mt-3 text-xs sm:text-[13px] font-medium text-black text-center tracking-tight transition-colors group-hover:text-black">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
