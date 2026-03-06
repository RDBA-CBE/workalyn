"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AmenityItem } from "../types";
import { RevealWrapper } from "./ParallaxWrapper";

const amenities: AmenityItem[] = [
  {
    id: "1",
    title: "THE DINING LOUNGE",
    image: "/amenities/card-amentities1.png",
  },
  {
    id: "2",
    title: "THE POD ROOM",
    image: "/amenities/card-amentities2.png",
  },
  {
    id: "3",
    title: "BARISTA-GRADE COFFEE & ARTISAN TEAS",
    image: "/amenities/card-amentities3.png",
  },
  {
    id: "4",
    title: "CURATED F&B DISTRICT",
    image: "/amenities/card-amentities4.png",
  },
  {
    id: "5",
    title: "ADJACENT PREMIER GYM",
    image: "/amenities/card-amentities6.png",
  },
  {
    id: "6",
    title: "BANKING",
    image: "/workspace-solution/Image2.png",
  },
];

const AmenityTile: React.FC<{
  item: AmenityItem;
  isSpanned: boolean;
  delay: number;
}> = ({ item, isSpanned, delay }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <RevealWrapper
      key={item.id}
      delay={delay}
      className={isSpanned ? "lg:col-span-2" : "lg:col-span-1"}
    >
      <div
        ref={ref}
        className="relative group overflow-hidden h-[300px] lg:h-[300px]"
      >
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ y, scale: 1.2 }}
          className="absolute  w-[100%] h-[130%] object-cover transition-transform duration-1000 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition-colors duration-500"></div>

        {/* Title Overlay Label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="bg-black/40 px-6 py-3 border border-white/10 transform transition-transform duration-500 group-hover:scale-105">
            <span className="text-white font-bold uppercase tracking-[0.1em] text-center block ">
              {item.title}
            </span>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
};

const AmenitiesSectionCopy: React.FC = () => {
  return (
    <section className="section-wid">
      <div id="amenities" className="pb-24 ">
        <div className="flex flex-col xl:flex-row    gap-4">
          {/* Amenities Tiles */}
          <div className="w-full xl:w-3/4 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((item, idx) => (
                <AmenityTile
                  key={item.id}
                  item={item}
                  isSpanned={idx === 0 || idx === 5}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Dark Descriptive Block */}
          <div className="w-full xl:w-1/4 ">
            <div className="bg-[#1a1c21] text-white p-8 md:p-12 lg:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[500px] lg:min-h-full">
              {/* Top Line Decoration */}
              <div className="w-full h-[1px] bg-white/70 mb-8 lg:mb-12"></div>

              <RevealWrapper className="flex-1 flex flex-col justify-center items-center">
                {/* Label with Diamonds */}
                <div className="flex items-center  justify-center gap-4 mb-4">
                  <div className="pb-0 first-head text-white/90 flex items-center gap-4">
                    <span className="w-[7px] h-[7px] bg-[#fff] rotate-45 mt-[-1px] uppercase" />
                    Thoughtful amenities 
                    <span className="w-[7px] h-[7px] bg-[#fff] rotate-45 mt-[-1px]" />
                  </div>
                </div>

                {/* Main Heading */}
                <h2 className="!leading-[1.2] text-4xl md:text-5xl lg:text-3xl xl:text-[32px]  mb-8  ">
                  Designed to support focused, uninterrupted work.
                </h2>

                {/* Description Text */}
                <p className="mb-8 max-w-sm ">
                  Explore our thoughtfully designed interiors, collaborative
                  zones, and vibrant work environments that bring people
                  together and inspire everyday productivity.
                </p>

                {/* Action Button */}
                <a href="/amenities">
                  <button className="border border-white/40 text-white px-10 py-4 text-[14px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a1c21] transition-all duration-500 shadow-xl ">
                    View Our Spaces
                  </button>
                </a>
              </RevealWrapper>

              {/* Bottom Line Decoration */}
              <div className="w-full h-[1px] bg-white/70 mt-8 lg:mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSectionCopy;
