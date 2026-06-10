
"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

const slides = [
  {
    label: "COMMUNITY FIRST",
    title: "Collaborate With Like-Minded People Globally",
    highlight: "People",
    description: "Join a vibrant ecosystem of entrepreneurs, creatives, and tech innovators. Networking built into your routine.",
    image: "/work-images/zoom-banner.jpeg",
  },
  {
    label: "ARCHITECTURAL EXCELLENCE",
    title: "Discover Your New Creative Sanctuary Hub",
    highlight: "Sanctuary",
    description: "More than just a workspace. An environment designed to inspire clarity and catalyze your most ambitious goals.",
    image: "/work-images/Banner-img-2.webp",
  },
  // {
  //   label: "GLOBAL CONNECTIVITY",
  //   title: "Work From Anywhere In The World",
  //   highlight: "World",
  //   description: "Access our global network of premium hubs with a single membership. Your office follows you everywhere.",
  //   image: "/banner3.png",
  // }
];

const Hero: React.FC = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
  ref={containerRef}
  className="relative h-[65vh] lg:h-screen w-full bg-[#1a1c21] overflow-hidden"
>
  {/* Parallax Background */}
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ y: bgY }}
      className="absolute inset-0 z-0 h-full"
    >
      <div className="absolute inset-0 bg-black/45 z-10" />

      <img
        src={slides[current].image}
        alt="Workspace"
        className="w-full h-full object-cover object-center lg:object-left"
      />
    </motion.div>
  </AnimatePresence>

  {/* Main Content Area */}
  <motion.div
    style={{ opacity: contentOpacity }}
    className="relative z-20 h-full section-wid mx-auto w-full px-6 md:px-24 flex flex-col justify-center"
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        {/* Label */}
        <div className="flex items-center gap-4 mb-6 lg:mb-8">
          <div className="w-[5.5px] h-[5.5px] bg-[#fff] rotate-45 mt-[-1px]" />
          <span className="text-[#fff] tracking-[0.3em] uppercase text-[10px] md:text-[12px] font-semibold">
            {slides[current].label}
          </span>
          <div className="w-[5.5px] h-[5.5px] bg-[#fff] rotate-45 mt-[-1px]" />
        </div>

        {/* Title */}
        <h1 className="text-[38px] sm:text-[38px] md:text-[54px] lg:text-[64px] text-white mb-4 lg:mb-6 leading-[1.05] font-light serif">
          {slides[current].title}
        </h1>

        {/* Description */}
        <p className="text-white mb-8 max-w-xl leading-relaxed font-semibold hidden lg:block">
          {slides[current].description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => router.push('/workspaces')}
            className="bg-[#1B1C21] text-white px-5 py-2 lg:px-8 py-3 lg:py-4 text-[14px] lg:text-[16px] font-bold uppercase hover:bg-white hover:text-black transition-all duration-500 min-w-[180px] lg:min-w-[200px]"
          >
            Explore Spaces
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  </motion.div>

  {/* Left Sidebar: Scroll Indicator */}
  <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4">
    <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.4em] text-white font-bold rotate-180">
      SCROLL
    </span>
    <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#00998a]"
      />
    </div>
  </div>

  {/* Pagination */}
  <div className="absolute bottom-6 lg:bottom-12 left-6 md:left-24 z-30">
    <span className="text-2xl md:text-3xl text-[#00998a] serif font-bold">
      0{current + 1}
    </span>
    <span className="text-white/30 text-lg md:text-xl font-light ml-2">
      / 0{slides.length}
    </span>
  </div>

  {/* Navigation */}
  <div className="absolute bottom-6 lg:bottom-12 right-6 md:right-24 z-30 flex items-center gap-6 lg:gap-12">
    <div className="flex items-center gap-4">
      <button
        onClick={prevSlide}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
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
            strokeWidth="1.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rotate-45 transition-all duration-500 ${
              current === idx
                ? "bg-[#00998a] scale-125"
                : "bg-white/20"
            }`}
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
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
            strokeWidth="1.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
  );
};

export default Hero;
