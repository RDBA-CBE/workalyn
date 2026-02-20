import React from "react";
import { RevealWrapper, ParallaxWrapper } from "./ParallaxWrapper";

const points = [
  {
    title: "Traditional High-Rise Spaces",
    desc: "Secure, fully furnished offices ideal for teams seeking privacy with flexibility.",
    border: true,
  },
  {
    title: "Often Limited Window Access",
    desc: "Your own desk in a shared workspace—perfect for consistency and focus.",
    border: true,
  },
  {
    title: "Isolated Within Office Towers",
    desc: "Work on your own terms with hot desks and day passes.",
    border: true,
  },
  {
    title: "Meeting & Event Spaces",
    desc: "Modern rooms designed for meetings, workshops, and presentations.",
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
              Why WorkAlyn
              <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]" />
            </div>
          </div>

          <h2 className="main-head mb-4">
            The Clear Alternative To High-Rise Coworking
          </h2>

          <p className="mb-4 leading-[1.8]">
            From focused individual work to team collaboration, our
            workspaces are flexible, functional, and thoughtfully designed
            to help you perform at your best.
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
