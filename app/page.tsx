import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Hero2 } from "@/components/hero2";
import { About2 } from "@/components/about2";
import { Services2 } from "@/components/services2";
import {
  HeroAbout2Container,
  Services2Container,
} from "@/components/home2-transition-section";
import { Work } from "@/components/work";
import { WhatYouGet } from "@/components/what-you-get";
import { Technologies } from "@/components/technologies";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { ContactCta } from "@/components/contact-cta";
import { Blog } from "./components/blog";

export default function Home() {
  return (
    <main className="w-full">
      {/* 
      <HeroAbout2Container />
      <Services2Container />
      */}

      
        <Hero />
        <About />
        <Services />
      

      {/* 4. Latest Works */}
      <Work />

      {/* 5. What You Get */}
      <WhatYouGet />

      {/* 6. Technologies */}
      {/* <Technologies /> */}

      {/* 7. FAQ */}
      <Faq />

      {/* 8. CTA Section */}
      {/* <ContactCta /> */}

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Blog */}
      <Blog />
    </main>
  );
}