import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

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
  },
];

const WhySection: React.FC = () => {
  return (
    <section className="section-wid">
  <div className="py-24 px-0 xl:px-10 2xl:px-16 bg-white overflow-hidden">
    <div className="flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-20 items-center">
      
      {/* Left Side - Text */}
      <div className="w-full lg:w-2/5 flex-shrink-0">
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

          <p className="mb-4 leading-[1.8]">
            Workalyn offers what no other coworking space in Kuala Lumpur can—a ground‑floor address that respects your time and elevates your status.

          </p>

          <div className="space-y-4">
            {points.map((p, idx) => (
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
      <div className="relative w-full lg:w-3/5 flex-shrink-0">
        <ParallaxWrapper offset={40} className="z-10">
          <img
            src="/why-workalyn.png"
            className="w-full h-auto object-cover"
            alt=""
          />
        </ParallaxWrapper>
      </div>

      

    </div>
  </div>
</section>
  );
};

export default WhySection;
