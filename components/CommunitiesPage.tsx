import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";
import { features } from "process";

const solutions = [
  {
    title: "Hot Desk",

    features: ["1‑Day Pass", "7‑Day Pass", "Monthly Pass"],
    includes: "Ideal For : Nomads, freelancers",
    image: "/community/hot-desk.webp",
  },

  {
    title: "Fixed Desk",

    features: ["Weekly Pass", "Monthly Pass", " 3‑Month Pass", "6‑Month Pass"],
    includes: "Ideal For : Long‑term residents",
    image: "/community/fixed-desk.webp",
  },

  {
    title: "Private Cabin",
    features: ["3, 4, or 5 tables", "Per‑table billing"],
    includes: "Ideal For : Teams requiring privacy",
    image: "/community/private-cabin.webp",
  },

  {
    title: "Meeting Room",
    features: ["6 or 10 seats", " 1/4/8 hr blocks"],
    includes: "Ideal For : Client meetings, workshops",
    image: "/community/meeting-event-suites.webp",
  },
];

const advantages = [
  {
    icon: "/community/icon/1.svg",

    title: "Private call pods",
    desc: "Legal consultants preparing for trial in the quiet of a private cabin.",
  },
  {
    icon: "/community/icon/2.svg",

    title: "A lounge ",
    desc: "Tech founders scaling their startups from a dedicated desk.",
  },
  {
    icon: "/community/icon/3.svg",

    title: "Dining alcoves",
    desc: "CEOs hosting board meetings in our 10‑seater suites.",
  },
  {
    icon: "/community/icon/4.svg",
    title: "Meeting suites",
    desc: "Global nomads touching down in KL for a week, armed with a 7‑day pass.",
  },
];

const CommunitiesPage = () => {
  return (
    <div className="bg-[#f8fffe]">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
            src="/community/community-banner.webp"
            className="w-full h-full object-cover"
            alt="About Header"
          />
        </ParallaxWrapper>
        <div className="relative z-10 text-center text-white px-6">
          <RevealWrapper>
            <h1 className="main-head  mb-6 text-white">
              Community & Clientele
            </h1>
            <p className="first-head text-white uppercase  font-bold">
              DetLorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </RevealWrapper>
        </div>
      </section>
      <section className="pt-24  ">
        <div className=" mx-auto">
          {/* <RevealWrapper className="text-center mb-24">
            <h1 className="main-head   mb-8">Community & Clientele</h1>
            <p className="sub-head  max-w-2xl mx-auto leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </RevealWrapper> */}

          <section className="">
            <div className="section-wid   relative overflow-hidden">
              {/* Background decoration */}
              {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-1/2"></div> */}

              <div className="text-center mb-10 relative z-10">
                <RevealWrapper>
                  <h2 className="main-head  mb-6 ">
                    The Visionaries, The Executives, The Entrepreneurs
                  </h2>
                  <p className="max-w-2xl mx-auto leading-relaxed  tracking-wider">
                    Workalyn is home to a carefully cultivated membership of
                    individual professionals, boutique firms, and corporate
                    teams who value time, taste, and trajectory.
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
                    <div className="bg-[#00998a]/20  p-10 h-full hover:bg-[#00998a]/10 transition-all duration-500 group relative">
                      <div className="mb-8 flex justify-center">
                        <div className="flex flex-col items-center justify-center gap-5">
                          {/* {adv.icon} */}
                          <img src={adv.icon} alt="" />
                          {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                          <div className="w-[7px] h-[7px] bg-black rotate-45  "></div>{" "}
                        </div>
                      </div>

                      <h3 className=" sub-head uppercase  text-center mb-6">
                        {adv.title}
                      </h3>
                      <p className="text-center ">{adv.desc}</p>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black group-hover:border-black/30 transition-all duration-500"></div>
                    </div>
                  </ParallaxWrapper>
                ))}
              </div>

              <p className=" max-w-2xl mx-auto leading-relaxed  tracking-wider text-center mt-10">
                What unites them is a refusal to compromise. They choose
                Workalyn because it offers the prestige of a private office with
                the agility of a flexible membership—all without stepping into a
                high‑rise elevator.
              </p>
            </div>
          </section>

          <div className="space-y-10 pt-24 pb-20 section-wid">
            <RevealWrapper className="text-center mb-14">
              <h1 className="main-head  ">Membership at a Glance</h1>
              {/* <p className="sub-head  max-w-2xl mx-auto leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p> */}
            </RevealWrapper>

            {solutions.map((s: any, i) => (
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
                    <h2 className="sub-head mb-6">{s.title}</h2>
                    <p className="mb-6  ">{s?.desc}</p>
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

export default CommunitiesPage;
