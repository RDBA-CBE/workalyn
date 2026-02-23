import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const solutions = [
  {
    title: "HOT DESK – For the Global Nomad",

    desc: "Arrive, connect, create—no strings attached. Perfect for consultants, creatives, and entrepreneurs who work on their own terms.",
    image: "/workspace-solution/Image1.png",
    features: ["1‑Day Pass", "7‑Day Pass", "Monthly Hot Desk"],
    includes:
      "Includes: Ergonomic seating, high‑speed WiFi, unlimited coffee/tea, lounge access.",
  },
  {
    title: "FIXED DESK – For the Resident Professional",
    price: "From $550 / mo",
    desc: "Your permanent workstation in our premium shared hall. Store your equipment, set your rhythm, and enjoy consistency without the long‑term lease.",
    image: "/workspace-solution/Image2.png",
    features: [
      "Weekly Pass",
      "Monthly Pass",
      "3‑Month Tenure",
      "6‑Month Tenure",
    ],
    includes:
      "*Includes: Lockable storage, ergonomic chair & round the clock accessibility.",
  },
  {
    title: "PRIVATE CABIN – For the Discerning Team",
    price: "Inquire for Pricing",
    desc: "YAbsolute privacy, absolute focus. Fully furnished rooms shared exclusively with your colleagues—no outsiders, no distractions. Choose your configuration:",
    image: "/workspace-solution/Image3.png",
    features: ["3‑Table Cabin", "4‑Table Cabin", "5‑Table Cabin"],
    includes:
      "Pricing per table, with flexible monthly or quarterly commitments. Custom tenures available upon request.",
  },

  {
    title: "MEETING & EVENT SUITES – For the Moment That Matters",
    price: "Inquire for Pricing",
    desc: "First impressions are formed before a single word is spoken. Our meeting rooms communicate professionalism, preparation, and taste.",
    image: "/workspace-solution/Image4.png",
    features: [
      "6‑Seater Room – Intimate and intelligent. Perfect for one‑on‑ones and small team syncs.",
      "10‑Seater Room – Command presence. Equipped with 4K video conferencing and wireless presentation.",
      "Book by the hour – 2 hr | 4 hr | 8 hr",
    ],
    includes:
      "*Includes: 65” 4K screen, whiteboard, flip chart, unlimited coffee/tea.*",
  },
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-[#f8fffe]">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
             src="/workspace-solution/subpage/workspace-banner.webp"
            className="w-full h-full object-cover"
            alt="About Header"
          />
        </ParallaxWrapper>
        <div className="relative z-10 text-center text-white px-6">
          <RevealWrapper>
            <h1 className="main-head  mb-6 text-white"> Workspace Solutions</h1>
            <p className="first-head text-white uppercase  font-bold">
              Membership Tiers as Fluid as Your Schedule
            </p>
          </RevealWrapper>
        </div>
      </section>
      <section className="pt-24 pb-20 section-wid">
        <div className=" mx-auto">
          {/* <RevealWrapper className="text-center mb-24">
            <h1 className="main-head serif text-dark-green mb-8">
              Workspace Solutions
            </h1>
            <p className="sub-head  max-w-2xl mx-auto leading-relaxed ">
              Membership Tiers as Fluid as Your Schedule
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
                      className="w-full aspect-[4/2] object-cover shadow-2xl"
                      alt={s.title}
                    />
                  </ParallaxWrapper>
                </div>
                <div className="lg:w-1/2">
                  <RevealWrapper>
                    {/* <span className="text-gold font-bold text-lg serif mb-4 block">{s.price}</span> */}
                    <h2 className="sub-head mb-6">{s.title}</h2>
                    <p className="mb-6  ">{s.desc}</p>
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

                    <p className="mb-8  ">{s.includes}</p>
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

export default SolutionsPage;
