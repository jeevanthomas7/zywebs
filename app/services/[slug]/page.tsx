import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./service-client";

const servicesData: Record<
  string,
  {
    slug: string;
    name: string;
    category: string;
    tagline: string;
    image: string;
    revealText: string;
    highlightWords: string[];
  }
> = {
  "web-development": {
    slug: "web-development",
    name: "Web Development",
    category: "Custom Web Solutions",
    tagline:
      "High-performance, modern websites engineered to look sharp, load fast, and scale effortlessly.",
    image: "/img/web.png",
    revealText:
      "We build fast, secure, and highly scalable web applications crafted to deliver seamless digital experiences. From responsive front-ends built with Next.js and modern technologies to robust server-side architecture, every line of code is optimized for lightning-fast speed, bulletproof reliability, and measurable business growth. We do not just build websites; we engineer digital platforms that turn visitors into loyal clients.",
    highlightWords: [
      "scalable",
      "Next.js",
      "speed",
      "growth",
      "platforms",
      "clients",
    ],
  },
  "web-design": {
    slug: "web-design",
    name: "Web Design & UI/UX",
    category: "Experience Design",
    tagline:
      "Thoughtful visual identities and intuitive interfaces that captivate and convert.",
    image: "/img/ui.png",
    revealText:
      "Great design is more than aesthetics; it is the seamless bridge between human emotion and intuitive digital interaction. We craft bespoke user interfaces and immersive digital experiences that elevate your brand narrative. Rooted in deep user research, meticulous wireframing, and pixel-perfect design systems, we build interfaces that feel effortless to navigate and impossible to forget.",
    highlightWords: [
      "aesthetics",
      "bespoke",
      "narrative",
      "wireframing",
      "pixel-perfect",
      "effortless",
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    name: "E-Commerce Solutions",
    category: "Digital Commerce",
    tagline:
      "Frictionless online storefronts engineered to maximize sales and customer retention.",
    image: "/img/ecom.png",
    revealText:
      "We engineer high-converting digital storefronts that transform casual browsing into effortless checkout experiences. From bespoke custom catalog architectures and secure payment integrations to lightning-fast mobile optimization and automated inventory flows, our e-commerce platforms empower ambitious brands to sell worldwide with total confidence and superior customer loyalty.",
    highlightWords: [
      "high-converting",
      "storefronts",
      "checkout",
      "mobile",
      "confidence",
      "loyalty",
    ],
  },
  "performance-seo": {
    slug: "performance-seo",
    name: "Performance & SEO Optimization",
    category: "Search & Speed Optimization",
    tagline:
      "Dominate search rankings with blazing load speeds and technical SEO precision.",
    image: "/img/seo.png",
    revealText:
      "Speed and visibility are the twin engines of digital success. We supercharge your website performance with cutting-edge Core Web Vitals optimization, asset compression, and clean semantic architecture. Paired with in-depth technical SEO, structured schema data, and keyword authority strategies, we make sure your business outranks competitors and commands the top spots on Google search.",
    highlightWords: [
      "Speed",
      "success",
      "performance",
      "Core",
      "SEO",
      "Google",
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "web-development" },
    { slug: "web-design" },
    { slug: "ecommerce" },
    { slug: "performance-seo" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | ZYWEBS`,
    description: service.tagline,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.name} | ZYWEBS`,
      description: service.tagline,
      url: `https://zywebs.online/services/${slug}`,
      images: [
        {
          url: service.image,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ZYWEBS`,
      description: service.tagline,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
