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
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.77 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.43zM12.08 21.8a9.86 9.86 0 01-5.02-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.84 9.84 0 01-1.52-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.11 1.03 6.98 2.89a9.82 9.82 0 012.9 6.98c0 5.44-4.43 9.89-9.88 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.31 1.29.49 1.73.62.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
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
                        href="mailto:hello@workalyn.com"
                        className="hover:text-black transition"
                      >
                        hello@workalyn.com
                      </a>
                    </p>

                    {/* Phone */}
                    <p className="flex items-center gap-4">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.77 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.43zM12.08 21.8a9.86 9.86 0 01-5.02-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.84 9.84 0 01-1.52-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.11 1.03 6.98 2.89a9.82 9.82 0 012.9 6.98c0 5.44-4.43 9.89-9.88 9.89zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.31 1.29.49 1.73.62.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
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
