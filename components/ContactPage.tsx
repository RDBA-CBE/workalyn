"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxWrapper, RevealWrapper } from "./ParallaxWrapper";

const testimonials = [
  {
    quote:
      "Workalyn isn't just an office; it's a strategic advantage. The Plaza Level access means I'm in and out without delay, and the environment itself commands respect. It's where my most critical work gets done.",
    name: "Ahmad Zulkifli",
    title: "CEO, Quantum Ventures",
    image: "/testimonials/ahmad.webp",
    rating: 4.9,
  },
  {
    quote:
      "The attention to detail at Workalyn is unparalleled. From the ergonomic chairs to the ambient lighting, every element is designed for focus. It has fundamentally changed how my team collaborates.",
    name: "Dr. Arina Sofea",
    title: "Founder, BioInnovate",
    image: "/testimonials/arina.webp",
    rating: 4.9,
  },
  {
    quote:
      "As a creative professional, the aesthetic and atmosphere are crucial. Workalyn provides a sophisticated backdrop that impresses clients and inspires my best work. The community is an added bonus.",
    name: "Chen Wei",
    title: "Lead Architect, Urban Form",
    image: "/testimonials/chen.webp",
    rating: 4.9,
  },
];

const ContactPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
          <img
            src="/work-images/Book-a-tour-banner.webp"
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
          <div className="w-full">
            <RevealWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
                {/* Location Card */}
                <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[#00998A]/10 rounded-full flex items-center justify-center mb-6 text-[#00998A] group-hover:bg-[#00998A] group-hover:text-white transition-colors duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="sub-head uppercase mb-4 text-lg tracking-wide text-gray-900">
                    Workalyn at Plaza Damansara
                  </h3>
                  <p className="font-sans text-[#666666] leading-relaxed text-lg">
                    PL 02 & 03, Block A, Plaza Damansara,
                    <br />
                    Jalan Medan Setia 1,
                    <br />
                    Bukit Damansara, <br className="block md:hidden"/> 50490 Kuala Lumpur
                  </p>
                </div>

                {/* Hours Card */}
                <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[#00998A]/10 rounded-full flex items-center justify-center mb-6 text-[#00998A] group-hover:bg-[#00998A] group-hover:text-white transition-colors duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="sub-head uppercase mb-4 text-lg tracking-wide text-gray-900">
                    Operating Hours
                  </h3>
                  <p className="font-sans text-[#666666] leading-relaxed text-lg space-y-2">
                    <span className="block mb-2">
                      <span className="font-semibold text-gray-900">Monday – Friday:</span> <br  className="block md:hidden "/> 9:00 AM – 6:00 PM
                    </span>
                    {/* <span className="block mb-2">
                      <span className="font-semibold text-gray-900">Saturday:</span> 9:00 AM – 5:00 PM
                    </span> */}
                    <span className="block">
                      <span className="font-semibold text-gray-900">Weekends & Public Holidays:</span> Closed
                    </span>

                    
                  </p>
                  <div className="mt-4 rounded-md border border-[#00998A]/25 bg-[#00998A]/5 px-4 py-3 w-fit mx-auto ">
                    <p className="text-sm italic text-gray-800">
                      <span className="font-bold text-[#00998A] not-italic mr-1">
                        Note:
                      </span>
                      24/7 accesss for Private Cabins & Fixed Desk customers
                    </p>
                  </div>
                </div>
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
                  src="/work-images/image-3.jpg"
                  alt="A modern and bright meeting room at Workalyn"
                  className="w-full h-full object-cover shadow-xl rounded-md"
                />
              </RevealWrapper>
            </div>

            {/* Left side: Text */}
            <div className="text-center lg:text-left" id="book-a-tour">
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
                    {/* <p className="flex items-center gap-4">
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
                    </p> */}

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
                        className="w-5 h-5 text-gray-700 flex-shrink-0"
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
                  <div className="mt-4 rounded-md border border-[#00998A]/25 bg-[#00998A]/5 px-4 py-3 w-fit mx-auto ">
                    <p className="text-sm italic text-gray-800">
                      <span className="font-bold text-[#00998A] not-italic mr-1">
                        Note:
                      </span>
                      Coffee & tea are complimentary for all memberships and
                      bookings
                    </p>
                  </div>

                  {/* <a
                    href="#"
                    className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00B3A3] to-[#007B72] text-white font-semibold text-lg md:text-xl rounded-full shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-hidden mt-6"
                  >
                    <span className="relative z-10">Book a tour</span>
                    <svg
                      className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:translate-x-2"
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
                  
                    <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 transition-opacity duration-500 hover:opacity-20"></span>
                  </a> */}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      {/* <section className="py-16 ">
        <div className="section-wid px-6 md:px-24">
       
          <RevealWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="pb-0 first-head flex items-center gap-4">
                  <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
                  VOICES OF WORKALYN
                  <span className="w-[7px] h-[7px] bg-[#00998A] rotate-45 mt-[-1px]"></span>
                </div>
              </div>
              <h2 className="main-head">Testimonials</h2>
            </div>
          </RevealWrapper>

         
          <div className="relative max-w-3xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="flex flex-col items-center">
                  

                  <p className="text-xl md:text-2xl leading-relaxed text-[#1B1C21] mb-8 serif">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 text-black`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-[#1B1C21] ml-3 ">
                      {testimonials[currentTestimonial].rating} Reviews
                    </span>
                  </div>
                  <h4 className="sub-head uppercase tracking-widest">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-[#666666]">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

           
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-100px] w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-300 hover:shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-100px] w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-300 hover:shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section> */}

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <span className="text-gray-400 sub-head  font-bold uppercase tracking-widest"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7914412825344!2d101.6538016!3d3.1496478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49001f8ed3bb%3A0xafa3d9f88e938c4f!2sWorkalyn!5e0!3m2!1sen!2sin!4v1781153658489!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Plaza Damansara Location"
          />
          {/* </span> */}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
