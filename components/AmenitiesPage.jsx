import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const solutions = [
  {
    title: "THE POD ROOM",
    desc: "A soundproof sanctuary for private calls, video interviews, or moments of quiet focus. Book on-demand, always available.",
    image: "/amenities/subpage/pod-room.webp",
  },
  {
    title: "THE DINING LOUNGE",
    desc: "Refined, not rushed. A dedicated space with full fridge, microwave, and sink—so you can enjoy your meal without leaving the building.",
    image: "/amenities/subpage/dining-lounge.webp",
  },
  {
    title: "BARISTA-GRADE COFFEE & ARTISAN TEAS",
    desc: "Single-origin espresso, loose-leaf teas, and chilled purified water. Always complimentary.",
    image: "/amenities/subpage/barista.webp",
  },
  {
    title: "SMART FILTRATION",
    desc: "No plastic bottles. No waste. Just pure, alkaline water on tap.",
    image: "/amenities/subpage/smart-filteration.webp",
  },
  {
    title: "ADJACENT PREMIER GYM",
    desc: "Step next door for a lunch-hour workout. Preferred member rates available exclusively for Workalyn members.",
    image: "/amenities/subpage/adjacent-premier-gym.webp",
  },
  {
    title: "CURATED F&B DISTRICT",
    desc: "From cherished Malaysian classics to Michelin-recommended dining, refined Western fare, and intimate cafés—all within 50 metres.",
    includes:
      "Your client’s next lunch isn’t just nearby; it’s an effortless, elevated stroll away.",
    image: "/amenities/subpage/curated-f&b-district.webp",
  },
];

const AmenitiesPage = () => {
  return (
    <div className="bg-[#f8fffe]">
      {/* HERO */}
   <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
            src="/amenities/subpage/amenities-banner.webp"
            className="w-full h-full object-cover"
            alt="About Header"
          />
        </ParallaxWrapper>
        <div className="relative z-10 text-center text-white px-6">
          <RevealWrapper>
            <h1 className="main-head  mb-6 text-white">Premium Amenities</h1>
            <p className="first-head text-white uppercase  font-bold">
              Details That Define Luxury.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* AMENITIES */}
   {/* AMENITIES – EDITORIAL GRID */}
<section className="pt-24 pb-20 section-wid">
  <div className="mx-auto">
    <RevealWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <ParallaxWrapper offset={20}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </ParallaxWrapper>
            </div>

            {/* Content */}
            <div className="p-8">
              <RevealWrapper>
                <h2 className="sub-head mb-4">{s.title}</h2>

                <p className="text-[#1B1C21]/90 leading-relaxed mb-4">
                  {s.desc}
                </p>

                {s.includes && (
                  <div className="mt-4 rounded-md border border-[#00998A]/25 bg-[#00998A]/5 px-4 py-3">
                    <p className="text-sm italic text-[#1B1C21]">
                      <span className="font-bold text-[#00998A] not-italic mr-1">
                        Note:
                      </span>
                      {s.includes}
                    </p>
                  </div>
                )}
              </RevealWrapper>
            </div>
          </div>
        ))}
      </div>
    </RevealWrapper>

    {/* GLOBAL CTA */}
<RevealWrapper>
  <div className="mt-32 rounded-2xl bg-[#00998A]/5 border border-[#00998A]/25 px-10 py-14 text-center">
    <p className="mb-6 text-xl text-[#1B1C21] font-medium">
      Experience a workspace where every detail is considered.
    </p>

    <a
      href="/contact"
      className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide text-[#00998A] group transition-all duration-300 hover:text-[#007f73]"
    >
      Enquire About Membership
      <svg
        className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  </div>
</RevealWrapper>
  </div>
</section>
    </div>
  );
};

export default AmenitiesPage;