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
  title: {
    default: "ZYWEBS | Web Development Studio",
    template: "%s | ZYWEBS",
  },
  description: "ZYWEBS builds modern websites and premium digital experiences.",
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
      </head>
      <body className={`${roboto.variable} font-sans antialiased bg-[#0c1412]`}>
        <SmoothScroll />
        <Header />
        {/* Main Page Content Wrapper (Layers above the sticky footer to create the un-overlapping curtain reveal effect) */}
        <div className="relative z-10 bg-[#f3f4ef] min-h-screen ">
          {children}
        </div>
        <Footer />
        <FloatingContact />
        <ContactModal />
      </body>
    </html>
  );
}