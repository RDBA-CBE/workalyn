"use client";

import React from "react";
import { ParallaxWrapper, RevealWrapper } from "./ParallaxWrapper";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
            src="/Contact/Contact-banner.webp"
            className="w-full h-full object-cover"
            alt="About Header"
          />
        </ParallaxWrapper>
        <div className="relative z-10 text-center text-white px-6">
          <RevealWrapper>
            <h1 className="main-head  mb-6 text-white">Visit Workalyn</h1>
            <p className="first-head text-white uppercase  font-bold">
              Plaza Level, Plaza Damansara, Bukit Damansara, Kuala Lumpur
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section className="py-12">
        <div className="section-wid px-6 md:px-24">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="main-head mb-4">
              A Professional Workspace in Plaza Damansara
            </h1>
            <p className="text-[#666666]">
              Whether you’re exploring workspace options or planning a visit,
              our team will be happy to assist
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left: Info */}
            <RevealWrapper>
              <div className="space-y-10">
                <div>
                  <h3 className="sub-head uppercase mb-4">
                    Workalyn at Plaza Damansara
                  </h3>
                  <p className="font-sans text-[#666666] leading-relaxed">
                    PL 02 & 03, Block A, Plaza Damansara,
                    <br />
                    Jalan Medan Setia 1,
                    <br />
                    Bukit Damansara, 50490 Kuala Lumpur
                  </p>
                </div>

                <div>
                  <h3 className="sub-head uppercase mb-4">Operating Hours</h3>
                  <p className="font-sans text-[#666666] leading-relaxed">
                    <b> Monday – Friday: </b>8:00 AM – 8:00 PM
                    <br />
                    <b>Saturday:</b> 9:00 AM – 5:00 PM
                    <br />
                    <b>Sunday & Public Holidays:</b> By Appointment Only
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Right: Contact */}
            <RevealWrapper>
              <div className="relative bg-gray-50 p-12 shadow-sm h-full flex flex-col justify-center border-l-4 border-[#00998A]">
                {/* Highlighted Heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00998A]/10 text-[#00998A] group">
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                      />
                    </svg>
                  </span>

                  <h3 className="sub-head uppercase text-[#00998A] tracking-wide">
                    General Enquiry
                  </h3>
                </div>

                {/* Contact Details */}
                {/* Contact Details */}
                <p className="text-[#666666] hover:text-[#000] mb-4 transition-colors">
                  <a
                    href="mailto:hello@workalyn.com"
                    className="inline-flex items-center gap-4 group"
                  >
                    {/* Email Icon */}
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#00998A]/10 text-[#00998A] transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </span>

                    <span className="text-base group-hover:underline">
                      hello@workalyn.com
                    </span>
                  </a>
                </p>

                <p className="text-[#666666] hover:text-[#000] transition-colors">
                  <a
                    href="tel:60312345678"
                    className="inline-flex items-center gap-4 group"
                  >
                    {/* Phone Icon */}
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#00998A]/10 text-[#00998A] transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.2 1.1a11.04 11.04 0 005.52 5.52l1.1-2.2a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                        />
                      </svg>
                    </span>

                    <span className="text-base group-hover:underline">
                      +60 3 2011 2865 
                    </span>
                  </a>
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Tour Invitation Section */}
      <section className="bg-gray-50 py-24">
        <div className="section-wid px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Right side: Image */}
            <div className="relative h-full w-full">
              <RevealWrapper className="w-full h-full">
                <img
                  src="/Contact/experience-workalyn.webp"
                  alt="A modern and bright meeting room at Workalyn"
                  className="w-full h-full object-cover shadow-xl rounded-md"
                />
              </RevealWrapper>
            </div>

            {/* Left side: Text */}
            <div className="text-center lg:text-left">
              <RevealWrapper>
                <h2 className="main-head mb-6">
                  Experience Workalyn. One Floor Down, One Step Ahead.
                </h2>
                <p className="max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4 text-gray-700">
                  We invite you to experience Workalyn on the Plaza Level of
                  Plaza Damansara — a workspace designed with natural light,
                  thoughtful amenities, and a calm professional atmosphere.
                </p>
                {/* <p className="max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12 text-gray-700">
                  We invite you to visit our Plaza Level sanctuary. Walk through
                  our doors, feel the natural light, and taste the coffee. Meet
                  our community and imagine your business thriving here.
                </p> */}

                <div className="inline-block rounded-xl border border-gray-200 bg-white px-10 py-8">
                  <h3 className="sub-head uppercase mb-5 tracking-wide">
                    Schedule a Private Tour
                  </h3>

                  <div className="space-y-4 text-gray-700 text-base">
                    {/* Time */}
                    <p className="flex items-center gap-4">
                      <svg
                        className="w-5 h-5 text-gray-700 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7v5l3 2"
                        />
                      </svg>
                      Monday–Saturday · By appointment
                    </p>

                    {/* Email */}
                    <p className="flex items-center gap-4">
                      <svg
                        className="w-5 h-5 text-gray-700 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7l9 6 9-6"
                        />
                      </svg>
                      <a
                        href="mailto:hello@workalyn.my"
                        className="hover:text-black transition"
                      >
                        hello@workalyn.my
                      </a>
                    </p>

                    {/* Phone */}
                    <p className="flex items-center gap-4">
                      <svg
                        className="w-5 h-5 text-gray-700 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5.5l3-1.5 4 4-1.5 3a14 14 0 006 6l3-1.5 4 4-1.5 3A20 20 0 013 5.5z"
                        />
                      </svg>
                      <a
                        href="tel:+60320112865"
                        className="hover:text-black transition"
                      >
                        +60 3 2011 2865 
                      </a>
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ContactPage;
