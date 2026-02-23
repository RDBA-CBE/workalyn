import React from "react";
import { motion } from "framer-motion";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const advantages = [
  {
    icon: "/about/icons/1.svg",

    title: "Private call pods",
    desc: "Private call pods upholstered in acoustic felt—because confidentiality is non‑negotiable.",
  },
  {
   icon: "/about/icons/2.svg",

    title: "A lounge ",
    desc: "A lounge with barista‑grade coffee, artisanal teas, and chilled purified water.",
  },
  {
    icon: "/about/icons/3.svg",

    title: "Dining alcoves",
    desc: "Dining alcoves with full fridge and microwave facilities—refined, not utilitarian.",
  },
  {
    icon: "/about/icons/4.svg",
    title: "Meeting suites",
    desc: "Meeting suites equipped with 4K video conferencing, designed to impress remote stakeholders.",
  },
];

const points = [
  {
    title: "Workalyn",
    desc: "Traditional High‑Rise Spaces",
    border: true,
  },
  {
    title: "Plaza Level – direct ground access",
    desc: "Upper floors – lift dependent",
    border: true,
  },
  {
    title: "No queues, no waiting",
    desc: "Peak‑hour lift congestion",
    border: true,
  },
  {
    title: "Natural light, high ceilings",
    desc: "Often limited window access",
    border: true,
  },
  {
    title: "Integrated with luxury F&B & gym",
    desc: "Isolated within office towers",
    border: true,
  },
  {
    title: "Residential enclave – quiet, exclusive",
    desc: "Commercial district – crowded, noisy",
    border: true,
  },
  {
    title: "Concierge‑level hospitality",
    desc: "Standardised, impersonal service",
    border: true,
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Parallax Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
            src="/about/about-banner.webp"
            className="w-full h-full object-cover"
            alt="About Header"
          />
        </ParallaxWrapper>
        <div className="relative z-10 text-center text-white px-6">
          <RevealWrapper>
            <h1 className="main-head  mb-6 text-white">About Us</h1>
            <p className="first-head text-white uppercase  font-bold">
              Designing the future of human connection
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="section-wid grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-6 md:px-12">
          <div>
            <RevealWrapper>
              <div className=" first-head flex items-center gap-4 mb-4">
                <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>{" "}
                Welcome{" "}
                <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
              </div>
              <h2 className="main-head mb-10 ">
                It started with a single desk and a vision for more.
              </h2>
              <div className="leading-[1.8]">
                <p>
                  We built Workalyn because we refused to believe that
                  productivity required isolation in a tower.
                </p>
                <p>
                  For years, we watched Kuala Lumpur’s most talented individuals
                  trade their most valuable asset—time—for the daily elevator
                  commute. They waited in crowded lobbies, pressed buttons, and
                  stared at closing doors, all before a single email was sent.
                </p>
                <p className="font-bold mt-4">
                  We asked ourselves: Why must the workspace be vertical?
                </p>
                <p>Workalyn is our answer.</p>

                <br />

                <p>
                  We searched for a location that embodied effortless elegance
                  and found it on the <strong>Plaza Level</strong> of an
                  exclusive residential enclave—surrounded by
                  Michelin‑recommended dining, a premier gym, and luxury retail.
                  Here, on the ground floor, we designed a coworking sanctuary
                  that feels less like an office and more like a private
                  members’ club.
                </p>

                <p>
                  This is not coworking. This is{" "}
                  <strong>Workalyn living.</strong>
                </p>

                <p>
                  We invite you to experience the difference. No lift queues. No
                  wasted minutes. Just pure, refined productivity—from the
                  moment you arrive.
                </p>
              </div>
            </RevealWrapper>
          </div>
          <ParallaxWrapper offset={40} direction="down">
            <div className="relative aspect-square">
              <img
                src="/about/welcome.webp"
                className="w-full h-full object-cover shadow-3xl"
                alt="Founder Story"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 -z-10"></div>
            </div>
          </ParallaxWrapper>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="bg-gray-50 py-32 overflow-hidden">
        <div className="section-wid px-6 md:px-24">
          <h2 className="main-head serif text-center mb-24 uppercase tracking-widest text-dark-green">
            Our Milestones
          </h2>
          <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between space-y-16 md:space-y-0">
            {[
              {
                year: "2018",
                text: "First location opened in San Francisco Market Street.",
              },
              { year: "2020", text: "Reached 50,000 active global members." },
              {
                year: "2023",
                text: "Expanded to European hubs in London and Paris.",
              },
              {
                year: "2026",
                text: "Launching our 50th premium workspace suite.",
              },
            ].map((m, i) => (
              <RevealWrapper
                key={i}
                delay={i * 0.1}
                className="md:w-1/5 relative pl-8 md:pl-0"
              >
                <div className="hidden md:block w-3 h-3 bg-gold rotate-45 mb-6"></div>
                <h3 className="sub-head serif text-gold mb-4">{m.year}</h3>
                <p className="text-sm text-gray-400 font-light">{m.text}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-b-bg">
        <div className="section-wid pt-28 pb-20 relative overflow-hidden">
          {/* Background decoration */}
          {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-1/2"></div> */}

          <div className="text-center mb-10 relative z-10">
            <RevealWrapper>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className=" first-head text-white flex items-center gap-4">
                  <span className="w-[7px] h-[7px] bg-[#fff] rotate-45 mt-[-1px]"></span>{" "}
                  OUR PHILOSOPHY{" "}
                  <span className="w-[7px] h-[7px] bg-[#fff] rotate-45 mt-[-1px]"></span>
                </div>
              </div>
              <h2 className="main-head text-white mb-6 ">
                Designed for Influence. Built for Connection.
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto leading-relaxed  tracking-wider">
                At Workalyn, we believe that environment shapes outcome. A
                sterile, impersonal office breeds mediocre work. A space that
                feels intentional, warm, and exclusive—that is where deals are
                signed, ideas are born, and legacies are built.
                <br />
                We reject the clichés of conventional coworking. You will not
                find beanbags, ping‑pong tables, or blaring music. Instead, you
                will discover:
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
            Every element is chosen to elevate your workday, never distract from
            it.
          </p>
        </div>
      </section>

      <section className="section-wid">
        <div className="pt-24 pb-20 px-0 xl:px-10 2xl:px-16 bg-white overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-20 items-center">
            {/* Left Side - Text */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <RevealWrapper>
                <div className="flex items-center gap-3 mb-4">
                  <div className="pb-0 first-head flex items-center gap-4">
                    <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]" />
                    WHY WORKALYN
                    <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]" />
                  </div>
                </div>

                <h2 className="main-head mb-4">
                  The Clear Alternative to High‑Rise Coworking
                </h2>

                <p className="mb-10 leading-[1.8]">
                  Workalyn offers what no other coworking space in Kuala Lumpur
                  can—a ground‑floor address that respects your time and
                  elevates your status.
                </p>

                <div className="space-y-4">
                  {points.slice(0, 2).map((p, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-6 items-start pt-4 pb-5 ${
                        p.border ? "border-b border-[#666666]/30" : ""
                      }`}
                    >
                      <img src="/why-workalyn-icon.svg" alt="" />
                      <div>
                        <h4 className="sub-head uppercase mb-2">{p.title}</h4>
                        <p className="leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealWrapper>
            </div>

            {/* Right Side - Image */}
            {/* <div className="relative w-full lg:w-1/2 flex-shrink-0">
              <ParallaxWrapper offset={40} className="z-10">
                <img
                  src="/why-workalyn.png"
                  className="w-full h-auto object-cover"
                  alt=""
                />
              </ParallaxWrapper>
            </div> */}

            <div className="w-full lg:w-1/2 flex-shrink-0">
              <RevealWrapper>
                <div className="space-y-4">
                  {points.slice(2, 7).map((p, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-6 items-start pt-4 pb-5 ${
                        p.border ? "border-b border-[#666666]/30" : ""
                      }`}
                    >
                      <img src="/why-workalyn-icon.svg" alt="" />
                      <div>
                        <h4 className="sub-head uppercase mb-2">{p.title}</h4>
                        <p className="leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealWrapper>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
