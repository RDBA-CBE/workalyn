"use client";

import React from "react";
import { RevealWrapper } from "./ParallaxWrapper";

const stats = [
  { number: "32", label: "Fixed Desks" },
  { number: "22", label: "Hot Desks" },
  { number: "6", label: "Private Cabins" },
  { number: "2", label: "Meeting Rooms" },
  { number: "1", label: "Pantry Lounge" },
];

const SpaceSnapshot: React.FC = () => {
  return (
    <section className="section-b-bg overflow-hidden">
      <div className="section-wid py-20 md:pt-28 md:pb-20 relative overflow-hidden">
        <RevealWrapper className="flex flex-col items-center text-center mb-10 md:mb-12">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light serif leading-[1.2] mb-4">
            Where work meets understated luxury.
          </h2>
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase mt-2">
            Your private corner of Plaza Damansara's elite neighbourhood.
          </p>
        </RevealWrapper>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-10 md:mb-12" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8">
          {stats.map((stat, idx) => (
            <RevealWrapper key={stat.label} delay={idx * 0.08}>
              <div
                className={`flex flex-col items-center text-center px-4 ${
                  idx < stats.length - 1
                    ? "lg:border-r border-white/10"
                    : ""
                }`}
              >
                <span className="text-4xl md:text-5xl text-white serif font-light mb-2">
                  {stat.number}
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#00998A] font-semibold">
                  {stat.label}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mt-10 md:mt-12" />
      </div>
    </section>
  );
};

export default SpaceSnapshot;
