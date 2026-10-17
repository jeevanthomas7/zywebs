import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import { ContactModal } from "@/components/contact-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zywebs.online"),
  title: {
    default: "ZYWEBS | Premium Web Development & Digital Design Studio",
    template: "%s | ZYWEBS",
  },
  description:
    "ZYWEBS is a modern web development studio crafting high-performance websites, custom web applications, e-commerce stores, and UI/UX digital experiences that scale.",
  keywords: [
    "ZYWEBS",
    "Web Development",
    "Web Design",
    "UI/UX Design",
    "Next.js Development",
    "Ecommerce Website",
    "SEO Optimization",
    "Web Development Studio",
    "Custom Websites",
    "Performance Optimization",
  ],
  authors: [{ name: "ZYWEBS", url: "https://zywebs.online" }],
  creator: "ZYWEBS",
  publisher: "ZYWEBS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zywebs.online",
    siteName: "ZYWEBS",
    title: "ZYWEBS | Premium Web Development & Digital Design Studio",
    description:
      "Crafting high-performance websites, bespoke e-commerce platforms, and intuitive UI/UX experiences engineered to convert.",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "ZYWEBS Web Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYWEBS | Premium Web Development & Digital Design Studio",
    description:
      "Crafting high-performance websites, bespoke e-commerce platforms, and intuitive UI/UX experiences engineered to convert.",
    images: ["/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ZYWEBS",
  url: "https://zywebs.online",
  logo: "https://zywebs.online/logo/logo.png",
  image: "https://zywebs.online/logo/logo.png",
  description:
    "ZYWEBS builds modern websites, custom web applications, and premium digital experiences.",
  telephone: "+919495547850",
  sameAs: [
    "https://instagram.com",
    "https://wa.me/919495547850",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} font-sans antialiased bg-[#0c1412]`}>
        <SmoothScroll />
        <Header />
        <div className="relative z-10 bg-[#f3f4ef] min-h-screen">
          {children}
        </div>
        <Footer />
        <FloatingContact />
        <ContactModal />
      </body>
    </html>
  );
}