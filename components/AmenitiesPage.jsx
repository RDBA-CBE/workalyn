import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const solutions = [
  {
    title: "THE POD ROOM",
    desc: " A soundproof space for private calls, video meetings, and focused work. Available on demand.",
    image: "/amenities/subpage/pod-room.webp",
  },
  {
    title: "THE DINING LOUNGE",
    desc: "A dedicated space with refrigerator, microwave, and sink — allowing members to take a break without leaving the building.",
    image: "/amenities/subpage/dining-lounge.webp",
  },
  {
    title: "BARISTA-GRADE COFFEE & ARTISAN TEAS",
    desc: "Single-origin espresso, loose-leaf teas, and chilled filtered water — available complimentary for members and guests.",
    image: "/amenities/subpage/barista.webp",
  },
  {
    title: "SMART FILTRATION",
    desc: "Filtered alkaline drinking water available throughout the workspace",
    image: "/amenities/subpage/smart-filteration.webp",
  },
  {
    title: "ADJACENT PREMIER GYM",
    desc: " Located next door, offering convenient lunchtime workouts with preferred member rates available for Workalyn members.",
    image: "/amenities/subpage/adjacent-premier-gym.webp",
  },
  {
    title: "CURATED F&B DISTRICT",
    desc: "From cherished Malaysian classics to Michelin-recommended dining, refined Western fare, and intimate cafés—all within a short walk.",
    includes:
      "Your client’s next lunch isn’t just nearby; it’s an effortless, elevated stroll away.",
    image: "/amenities/subpage/curated-f&b-district.webp",
  },

  {
    title: "Public Bank Branch & ATM",
    desc: "A Public Bank branch with full banking services and ATM facilities is located within a short walking distance",

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
            <h1 className="main-head  mb-6 text-white">Thoughtful Amenities</h1>
            <p className="first-head text-white uppercase  font-bold">
              Designed to support focused, professional work.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* AMENITIES */}
      {/* AMENITIES – EDITORIAL GRID */}
      <section className="pt-24 pb-20 section-wid bg-gray-50">
        <div className="mx-auto">
          <RevealWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="group relative bg-white shadow-md hover:shadow-xl transition-transform duration-500 transform hover:-translate-y-2"
                >
                  {/* Theme accent line */}
                  <div className="h-1 w-full bg-[#00998A] "></div>

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
                  <div className="p-6 md:p-8">
                    <RevealWrapper>
                      <h2 className="sub-head mb-4">{s.title}</h2>

                      <p className="text-gray-800 leading-relaxed mb-4">
                        {s.desc}
                      </p>

                      {s.includes && (
                        <div className="mt-4 rounded-md border border-[#00998A]/25 bg-[#00998A]/5 px-4 py-3">
                          <p className="text-sm italic text-gray-800">
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
            <div className="mt-20 relative max-w-4xl mx-auto px-8 py-12 bg-white/30 backdrop-blur-md border border-[#00998A]/20 shadow-lg text-center overflow-hidden">
              {/* Decorative floating circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#00998A]/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00998A]/10 rounded-full animate-pulse-slow"></div>

              <p className="mb-6 text-2xl md:text-3xl main-head">
                Experience a workspace where every detail is thoughtfully
                considered.
              </p>

              <div className="mt-4 rounded-md border border-[#00998A]/25 bg-[#00998A]/5 px-4 py-3 w-fit mx-auto mb-6">
                <p className="text-sm italic text-gray-800">
                  <span className="font-bold text-[#00998A] not-italic mr-1">
                    Note:
                  </span>
                  Coffee & tea are complimentary for all memberships and
                  bookings
                </p>
              </div>

              <a
                href="/contact"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00B3A3] to-[#007B72] text-white font-semibold text-lg md:text-xl rounded-full shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Enquire About Membership</span>
                <svg
                  className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:translate-x-2"
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
                {/* Animated overlay */}
                <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 transition-opacity duration-500 hover:opacity-20"></span>
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
