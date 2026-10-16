import Link from "next/link";

const services = [
   {
    name: "Web Development",
    des: "We build fast, responsive websites and scalable web applications using modern technologies to deliver exceptional digital experiences.",
    url: "/services/web-development",
    image: "/img/web.png",
  },
  {
    name: "Web Design & UI/UX",
    des: "We craft clean, intuitive interfaces that combine premium aesthetics with seamless user experiences, bringing your brand vision to life.",
    url: "/services/web-design",
    image: "/img/ui.png",
  },
 
  {
    name: "E-Commerce Solutions",
    des: "We develop seamless online shopping experiences with elegant storefronts, intuitive navigation, and streamlined checkout journeys.",
    url: "/services/ecommerce",
    image: "/img/ecom.png",
  },
  {
    name: "Performance & SEO Optimization",
    des: "We optimize website speed, technical SEO, accessibility, and performance to create faster experiences and improve search visibility.",
    url: "/services/performance-seo",
    image: "/img/seo.png",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-white pt-16 sm:pt-16 lg:pt-22 pb-5  sm:pb-16 lg:pb-22 text-black"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="mb-12 lg:mb-20 grid gap-6 sm:gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end text-center sm:text-left">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#059669]">
              Our Services
            </p>

            <h2 className="mt-2 text-4xl sm:text-5xl lg:text-8xl font-semibold capitalize tracking-tight text-black">
              Services We Provide
            </h2>
          </div>

          <p className="hidden sm:block max-w-xl text-sm sm:text-base leading-relaxed text-black/65">
            From first impression to final conversion, we create digital experiences that make your
            business effortless to trust and built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-10 lg:gap-16">
          {services.map((service) => (
            <article
              key={service.name}
              className="relative isolate min-h-[360px] sm:min-h-[480px] lg:min-h-[640px] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <div
                className="absolute inset-0 -z-20 rounded-xl sm:rounded-2xl bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="absolute inset-0 -z-10 bg-black/40" />

              <div className="flex w-full flex-col items-center justify-center px-4 sm:px-8 py-10 sm:py-16 text-center text-white lg:px-12">
                <h3 className="max-w-4xl text-3xl sm:text-5xl lg:text-7xl font-medium leading-[1.05] tracking-[-0.03em] sm:tracking-[-0.05em]">
                  {service.name}
                </h3>

                <p className="mt-3 sm:mt-6 max-w-2xl text-xs sm:text-base leading-snug sm:leading-relaxed text-white/85 line-clamp-2 sm:line-clamp-none px-2 sm:px-0">
                  {service.des}
                </p>

                <Link
                  href={service.url}
                  className="group mt-5 sm:mt-8 inline-flex items-center gap-2.5 sm:gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] active:scale-95 shadow-lg shadow-[#059669]/20"
                >
                  <span>Explore service</span>
                  <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-white text-black transition-transform duration-300 group-hover:scale-105">
                    <svg
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <svg
                      className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}