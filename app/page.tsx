import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { WhatYouGet } from "@/components/what-you-get";
import { Technologies } from "@/components/technologies";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { ContactCta } from "@/components/contact-cta";
import { Blog } from "./components/blog";
import Test from "./components/test";
import { Hero2 } from "./components/hero2";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. Hero */}
      <Hero />

      {/* <Hero2 /> */}

      {/* 2. About */}
      <About />

      {/* 3. Services */}
      <Services />

      {/* 4. Latest Works */}
      <Work />

      {/* 5. What You Get */}
      <WhatYouGet />

      {/* 6. Technologies */}
      {/* <Technologies /> */}

      {/* 7. FAQ */}
      <Faq />

       {/* 10. CTA Section */}
      {/* <ContactCta /> */}

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Blog */}
      <Blog />
    </main>
  );
}