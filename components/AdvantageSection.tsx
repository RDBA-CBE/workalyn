import React from "react";
import { motion } from "framer-motion";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const advantages = [
  {
    icon: "/Advantage-icon/instant-access.svg",
   
    title: "Instant Access",
    desc: "Seamless access from building parking to the Plaza Level workspace.",
  },
  {
     icon: "/Advantage-icon/natural-light.svg",
    
    title: "Natural Light",
    desc: "Floor-to-ceiling windows fill the workspace with natural light — a rarity in many office environments.",
  },
  { icon: "/Advantage-icon/effortless-flow.svg",
   
    title: "Effortless Flow",
    desc: "Restaurants, cafés, and fitness facilities are all within walking distance of your desk.",
  },
  {
    icon: "/Advantage-icon/exclusive-enclave.svg",
    title: "Exclusive Enclave",
    desc: "Situated within the established Bukit Damansara neighbourhood — offering calm without sacrificing centrality.",
  },
];

const AdvantageSection: React.FC = () => {
  return (
    <section className="section-b-bg">
      <div className="section-wid py-20 md:pt-28 md:pb-20 relative overflow-hidden">
        {/* Background decoration */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-1/2"></div> */}

        <div className="text-center mb-10 relative z-10">
          <RevealWrapper>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className=" first-head text-white flex items-center gap-4">
                <span className="w-[7px] h-[7px] bg-[#fff] rotate-45 mt-[-1px]"></span>{" "}
                THE WORKALYN DIFFERENCE{" "}
                <span className="w-[7px] h-[7px] bg-[#fff] rotate-45 mt-[-1px]"></span>
              </div>
              
            </div>
            <h2 className="main-head text-white mb-6 ">
              The Plaza Level Advantage
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed  tracking-wider">
             Located on the Plaza Level of Plaza Damansara, Workalyn offers direct ground access, eliminating unnecessary transitions and allowing workdays to begin the moment you arrive

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
                <p className="text-center text-white/80">
                  {adv.desc}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/30 transition-all duration-500"></div>
              </div>
            </ParallaxWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
