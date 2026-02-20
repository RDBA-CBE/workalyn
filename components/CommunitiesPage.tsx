import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const solutions = [
  {
    title: "THE POD ROOM",

    desc: "A soundproof sanctuary for private calls, video interviews, or moments of quiet focus. Book on‑demand, always available.",
    image: "/workspace-solution/Image1.png",
  },

  {
    title: "THE DINING LOUNGE",

    desc: "Refined, not rushed. A dedicated space with full fridge, microwave, and sink—so you can enjoy your meal without leaving the building.",
    image: "/workspace-solution/Image1.png",
  },
  {
    title: "BARISTA‑GRADE COFFEE & ARTISAN TEAS",

    desc: "Single‑origin espresso, loose‑leaf teas, and chilled purified water. Always complimentary.",
    image: "/workspace-solution/Image1.png",
  },
  {
    title: "SMART FILTRATION",

    desc: "No plastic bottles. No waste. Just pure, alkaline water on tap.",
    image: "/workspace-solution/Image1.png",
  },

  {
    title: "ADJACENT PREMIER GYM",

    desc: "Step next door for a lunch‑hour workout. Preferred member rates available exclusively for Workalyn members.",
    image: "/workspace-solution/Image1.png",
  },

  {
    title: "CURATED F&B DISTRICT",

    desc: "From cherished Malaysian classics to distinguished South and North Indian kitchens, Michelin‑recommended dining rooms, refined Western fare, and intimate cafés and bars—all within 50 metres. ",
    includes:
      "Your client’s next lunch isn’t just nearby; it’s an effortless, elevated stroll away.",

    image: "/workspace-solution/Image1.png",
  },
];

const advantages = [
  {
    icon: "/Advantage-icon/instant-access.svg",

    title: "Private call pods",
    desc: "Legal consultants preparing for trial in the quiet of a private cabin.",
  },
  {
    icon: "/Advantage-icon/natural-light.svg",

    title: "A lounge ",
    desc: "Tech founders scaling their startups from a dedicated desk.",
  },
  {
    icon: "/Advantage-icon/effortless-flow.svg",

    title: "Dining alcoves",
    desc: "CEOs hosting board meetings in our 10‑seater suites.",
  },
  {
    icon: "/Advantage-icon/exclusive-enclave.svg",
    title: "Meeting suites",
    desc: "Global nomads touching down in KL for a week, armed with a 7‑day pass.",
  },
];

const CommunitiesPage = () => {
  return (
    <div className="bg-[#f8fffe]">
      <section className="pt-24 pb-20 ">
        <div className=" mx-auto">
          <RevealWrapper className="text-center mb-24">
            <h1 className="main-head serif text-dark-green mb-8">
              Community & Clientele
            </h1>
            <p className="sub-head  max-w-2xl mx-auto leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
           
          </RevealWrapper>

          <section className="section-b-bg">
            <div className="section-wid pt-28 pb-20 relative overflow-hidden">
              {/* Background decoration */}
              {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-1/2"></div> */}

              <div className="text-center mb-10 relative z-10">
                <RevealWrapper>
                  
                  <h2 className="main-head text-white mb-6 ">
                    The Visionaries, The Executives, The Entrepreneurs
                  </h2>
                  <p className="text-white/80 max-w-2xl mx-auto leading-relaxed  tracking-wider">
                    Workalyn is home to a carefully cultivated membership of individual professionals, boutique firms, and corporate teams who value time, taste, and trajectory.
                  </p>
                </RevealWrapper>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {advantages.map((adv, idx) => (
                  <ParallaxWrapper
                    key={adv.title}
                    // offset={idx % 2 === 0 ? 30 : 60}
                    // direction={idx % 2 === 0 ? "up" : "down"}
                  >
                    <div className="bg-white/5  p-10 h-full hover:bg-white/10 transition-all duration-500 group relative">
                      <div className="mb-8 flex justify-center">
                        <div className="flex flex-col items-center justify-center gap-5">
                          {/* {adv.icon} */}
                          <img src={adv.icon} alt="" />
                          {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                          <div className="w-[7px] h-[7px] bg-[#00998A] rotate-45  "></div>{" "}
                        </div>
                      </div>

                      <h3 className="text-white sub-head uppercase  text-center mb-6">
                        {adv.title}
                      </h3>
                      <p className="text-center text-white/80">{adv.desc}</p>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/30 transition-all duration-500"></div>
                    </div>
                  </ParallaxWrapper>
                ))}
              </div>

              <p className="text-white/80 max-w-2xl mx-auto leading-relaxed  tracking-wider text-center mt-10">
               What unites them is a refusal to compromise. They choose Workalyn because it offers the prestige of a private office with the agility of a flexible membership—all without stepping into a high‑rise elevator.
              </p>
            </div>
          </section>

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

export default CommunitiesPage;
