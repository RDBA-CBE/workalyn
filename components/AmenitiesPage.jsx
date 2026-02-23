import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const solutions = [
  {
    title: "THE POD ROOM",

    desc: "A soundproof sanctuary for private calls, video interviews, or moments of quiet focus. Book on‑demand, always available.",
    image: "/amenities/subpage/pod-room.webp",
  },

  {
    title: "THE DINING LOUNGE",

    desc: "Refined, not rushed. A dedicated space with full fridge, microwave, and sink—so you can enjoy your meal without leaving the building.",
    image: "/amenities/subpage/dining-lounge.webp",
  },
  {
    title: "BARISTA‑GRADE COFFEE & ARTISAN TEAS",

    desc: "Single‑origin espresso, loose‑leaf teas, and chilled purified water. Always complimentary.",
    image: "/amenities/subpage/barista.webp",
  },
  {
    title: "SMART FILTRATION",

    desc: "No plastic bottles. No waste. Just pure, alkaline water on tap.",
     image: "/amenities/subpage/smart-filteration.webp",
  },

  {
    title: "ADJACENT PREMIER GYM",

    desc: "Step next door for a lunch‑hour workout. Preferred member rates available exclusively for Workalyn members.",
     image: "/amenities/subpage/adjacent-premier-gym.webp",
  },

  {
    title: "CURATED F&B DISTRICT",

    desc: "From cherished Malaysian classics to distinguished South and North Indian kitchens, Michelin‑recommended dining rooms, refined Western fare, and intimate cafés and bars—all within 50 metres. ",
    includes:
      "Your client’s next lunch isn’t just nearby; it’s an effortless, elevated stroll away.",

    image: "/amenities/subpage/curated-f&b-district.webp",
  },
];

const AmenitiesPage = () => {
  return (
    <div className="bg-[#f8fffe]">
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

      <section className="pt-24 pb-20 section-wid">
        <div className=" mx-auto">
          {/* <RevealWrapper className="text-center mb-24">
            <h1 className="main-head serif text-dark-green mb-8">
               PREMIUM AMENITIES
            </h1>
            <p className="sub-head  max-w-2xl mx-auto leading-relaxed ">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              
            </p>
            
          </RevealWrapper> */}

          <div className="space-y-10">
            {solutions.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2">
                  <ParallaxWrapper offset={30}>
                    <img
                      src={s.image}
                      className="w-full object-cover shadow-2xl"
                      alt={s.title}
                    />
                  </ParallaxWrapper>
                </div>
                <div className="lg:w-1/2">
                  <RevealWrapper>
                    {/* <span className="text-gold font-bold text-lg serif mb-4 block">{s.price}</span> */}
                    <h2 className="sub-head mb-6">{s.title}</h2>
                    <p className="mb-6  ">{s.desc}</p>
                    {s.features && (
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-3   tracking-wider"
                          >
                            <svg
                              className="w-5 h-5 text-[#00998A] flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.includes && <p className="mb-8  ">{s.includes}</p>}
                    <a href="/contact">
                      <button className="flex items-center gap-6 bg-[#1B1C21] text-white  font-semibold px-6 py-4   w-fit hover:bg-gold transition-all duration-300 group/btn shadow-lg shadow-dark-green/10">
                        Enquire Now
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </RevealWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
