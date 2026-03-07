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
    desc: "A dedicated workstation within our shared workspace. Store your equipment and enjoy a consistent workspace without committing to a traditional office lease. ",
    image: "/workspace-solution/Image2.png",
    features: [
      "Weekly Pass",
      "Monthly Pass",
      "3‑Month Tenure",
      "6‑Month Tenure",
    ],
    includes:
      "Consultants, startup teams, and professionals who prefer a consistent desk.",
  },
  {
    title: "PRIVATE CABIN – For the Discerning Team",
    price: "Inquire for Pricing",
    desc: "Private offices designed for teams that value focus and discretion. Fully furnished and shared exclusively with your colleagues. Best for: Boutique firms, consulting teams, and growing companies.",
    image: "/workspace-solution/Image3.png",
    features: ["2‑Table Cabin", "3‑Table Cabin", "4‑Table Cabin", "6‑Table Cabin"],
    includes:
      "Flexible pricing available per workstation or for the entire office.",
  },

  {
    title: "MEETING & EVENT SUITES – For the Moment That Matters",
    price: "Inquire for Pricing",
    desc: "First impressions are formed before a single word is spoken. Our meeting rooms communicate professionalism, preparation, and taste.",
    image: "/workspace-solution/Image4.png",
    features: [
      "6‑Seater Room",
      "10‑Seater Room",
      "Book by the hour – 2 hr | 4 hr | 8 hr",
    ],
    includes:
      "Client meetings, presentations, and team workshops.",
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
              Flexible workspace options designed around your schedule.
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

                    <div className="mb-8 rounded-lg border border-[#00998A]/25 bg-[#00998A]/5 px-5 py-4">
                      <p className="text leading-relaxed tracking-wide text-[#1B1C21] italic">
                        <span className="font-bold text-[#00998A] not-italic mr-1">
                          Best For:
                        </span>
                        <span className="text-[#1B1C21]">
                          {s.includes.replace(/^(\*?Includes:\s*)/i, "")}
                        </span>
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 font-semibold tracking-wide text-[#00998A] group transition-colors duration-300 hover:text-[#007f73]"
                    >
                      Enquire Now
                      <svg
                        className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
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
