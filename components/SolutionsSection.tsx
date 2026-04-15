"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SolutionItem } from "../types";
import { RevealWrapper } from "./ParallaxWrapper";

const solutions: SolutionItem[] = [
  {
    id: "1",
    title: "Hot Desk - Flexible Workspace Access.",
    description:
      "Arrive, connect, and work without long-term commitments. Ideal for consultants, independent professionals, and remote teams.",
    image: "/workspace-solution/Image1.png",
    rating: 4.9,
    reviews: 42,
    features: ["Day Pass — RM50", "Weekly Pass — RM199", "Monthly Pass — RM799"],
  },
  {
    id: "2",
    title: "FIXED DESK – For the Resident Professional",
    description:
      "A dedicated workstation within our shared workspace. Store your equipment and enjoy consistency without committing to a traditional lease.",
    image: "/workspace-solution/Image2.png",
    rating: 4.9,
    reviews: 128,
    features: ["Weekly Pass — RM249", "Monthly Pass — RM949", "Quarterly Pass — RM2499", "Biannual Pass — RM4499", "Annually Pass — RM7499"],
  },
  {
    id: "3",
    title: "PRIVATE CABIN – For the Discerning Team",
    description:
      "Private offices designed for teams who value focus and discretion. Fully furnished and shared only with your colleagues.",
    image: "/workspace-solution/Image3.png",
    rating: 4.8,
    reviews: 86,
    subtitle: "Monthly Plans",
    features: [
      "1 Pax — RM899",
      "2 Pax — RM1499",
      "3 Pax — RM2399",
      "4 Pax — RM3199",
      "6 Pax — RM4499"
    ],
  },
  {
    id: "4",
    title: "MEETING & EVENT SUITES – For the Moment That Matters",
    description:
      "First impressions are formed before a single word is spoken. Our meeting rooms are designed to communicate professionalism, preparation, and clarity.",
    image: "/workspace-solution/Image4.png",
    rating: 5.0,
    reviews: 64,
    groups: [
      {
        subtitle: "6 PAX",
        features: ["1 Hr: RM99", "4 Hr: RM329", "8 Hr: RM649"],
      },
      {
        subtitle: "10 PAX",
        features: ["1 Hr: RM169", "4 Hr: RM599", "8 Hr: RM999"],
      },
    ],
  }
];

const SolutionCard: React.FC<{ item: SolutionItem; idx: number }> = ({
  item,
  idx,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-stretch  transition-all duration-700 group overflow-hidden`}
    >
      {/* Image Side with Parallax */}
      <div className="lg:w-4/5 overflow-hidden relative h-[500px] lg:h-auto">
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ y: imgY, scale: 1.1 }}
          className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-115"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      {/* Text Side */}
      <div className="lg:w-2/5 p-12 md:p-16 flex flex-col justify-center bg-[#F0F0F0] relative z-10">
        <RevealWrapper>
          {/* <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 text-black`}
                // className={`w-5 h-5 ${i < 4 ? "text-black" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-[#1B1C21] ml-3 ">
              {item.rating} Reviews
            </span>
          </div> */}

          <h3 className="sub-head  uppercase  mb-4 ">
            {item.title}
          </h3>
          <p className="mb-4 leading-[1.8]">
            {item.description}
          </p>
              {/* Subtitle */}
{item.groups ? (
  item.groups.map((group, index) => (
    <div key={index} className="mb-6">
      {/* Subtitle */}
      {group.subtitle && (
        <h4 className="card-subtitle">{group.subtitle}</h4>
      )}

      {/* Features */}
      <ul className="space-y-3 mb-4">
        {group.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
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
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  ))
) : (
  <>
    {/* Subtitle */}
    {item.subtitle && (
      <h4 className="card-subtitle">{item.subtitle}</h4>
    )}

    {/* Features */}
    <ul className="space-y-3 mb-8">
      {item.features?.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
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
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </>
)}

          {/* <p className=" mb-10 border-t border-gray-300 pt-4">
            <span className="">Also Includes:</span> Ergonomic seating, high‑speed WiFi, unlimited coffee/tea, lounge access.
          </p> */}

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
  );
};

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:pt-36 section-wid">
      <div className="text-center mb-10">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="pb-0 first-head flex items-center gap-4">
              <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>{" "}
              Workspace Solutions{" "}
              <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
            </div>
          </div>
          <h2 className="main-head mb-6 ">
            Choose Your Way. Stay In Control
          </h2>
          <p className=" max-w-2xl mx-auto leading-relaxed font-light">
            Our workspace solutions are tailored to your business needs, whether
            you're a solo entrepreneur or a growing enterprise.
          </p>
        </RevealWrapper>
      </div>

      <div className="space-y-10">
        {solutions.map((item, idx) => (
          <SolutionCard key={item.id} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
