import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const solutions = [
  {
    title: "The POD Room",
    desc: " A soundproof space for private calls, video meetings, and focused work. Available on demand.",
    image: "/work-images/amenities-in-3.png",
  },
  {
    title: "The Dining Lounge",
    desc: "A dedicated space with refrigerator, microwave, and sink — allowing members to take a break without leaving the building.",
    image: "/work-images/amen-dining.webp",
  },
  {
    title: "Barista-Grade Coffee & Artisan Teas",
    desc: "Single-origin espresso, loose-leaf teas, and chilled filtered water — available complimentary for members and guests.",
    image: "/work-images/amenities-in-5.png",
  },
  {
    title: "Coway Water Filter",
    desc: "Filtered alkaline drinking water available throughout the workspace",
    image: "/work-images/amenities-in-1.png",
  },
  {
    title: "Adjacent Premier Gym",
    desc: " Located next door, offering convenient lunchtime workouts with preferred member rates available for Workalyn members.",
    image: "/work-images/amenities-in-7.png",
  },
  

  {
    title: "Public Bank & CIMB Bank Branch with ATM.",
    desc: "A Public Bank branch with full banking services and ATM facilities is located within a short walking distance",

    image: "/work-images/img-8.jpeg",
  },
  {
    title: "Curated F&B District",
    desc: "From cherished Malaysian classics to Michelin-recommended dining, refined Western fare, and intimate cafés—all within a short walk.",
    includes:
      "Your client’s next lunch isn’t just nearby; it’s an effortless, elevated stroll away.",
    image: "/work-images/img-7.jpeg",
    categories: [
      {
        items: ["Dominos Pizza", "Aliyaa", "Brasa", "Cekik", "Tasty Chapathi", "GulaiNya", "Stefania Osteria", "Char Line Asado Bar", "Jaaii KL Restaurant", "Gyusei Gyukatsu Wagyu-Steakhouse"]
      },
      {
        items: ["Huckleberry", "Croisserie Artisan"]
      },
      {
        items: ["Sams", "Sticky Wicket", "Union", "Elli Rocks", "Rockafellas", "Chica Bonita @ Republik"]
      }
    ]
  },
];

const AmenitiesPage = () => {
  return (
    <div className="bg-[#f8fffe]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
            src="/work-images/Amenities-banner.webp"
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
              {solutions.map((s, i) => {
                const isLast = i === solutions.length - 1;
                return (
                  <div
                    key={i}
                    className={`group relative bg-white shadow-md hover:shadow-xl transition-all duration-500 transform ${
                      isLast
                        ? "col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col lg:flex-row"
                        : "flex flex-col hover:-translate-y-2"
                    }`}
                  >
                    {/* Theme accent line */}
                    <div className="h-1 w-full bg-[#00998A] absolute top-0 left-0 z-10"></div>

                    {/* Image */}
                    <div className={`relative overflow-hidden ${isLast ? "w-full md:w-1/7" : ""}`}>
                      <ParallaxWrapper offset={20} className="h-full">
                        <img
                          src={s.image}
                          alt={s.title}
                          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                            isLast ? "h-full min-h-[260px]" : "h-[260px]"
                          }`}
                        />
                      </ParallaxWrapper>
                    </div>

                    {/* Content */}
                    <div className={`p-6 md:p-8 ${isLast ? "w-full md:w-6/7 md:p-12 flex flex-col justify-center" : ""}`}>
                      <RevealWrapper>
                        <h2 className="sub-head mb-4">{s.title}</h2>

                        <p className="text-gray-800 leading-relaxed mb-4">
                          {s.desc}
                        </p>

                        {isLast && s.categories && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 my-2">
                            {/* Column 1: Dining */}
                            <ul className="space-y-2 text-sm text-gray-700">
                              {s.categories[0].items.map((item) => (
                                <li key={item} className="flex items-center gap-2">
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
                                  {item}
                                </li>
                              ))}
                            </ul>
                            {/* Column 2: Cafes and Bars */}
                            <div className="space-y-6">
                              {s.categories.slice(1).map((cat, idx) => (
                                <ul key={idx} className="space-y-2 text-sm text-gray-700">
                                  {cat.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
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
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              ))}
                            </div>
                          </div>
                        )}

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
                );
              })}
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
