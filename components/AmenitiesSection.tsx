"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AmenityItem } from '../types';
import { RevealWrapper } from './ParallaxWrapper';

const amenities: AmenityItem[] = [
  { id: '1', title: 'THE POD ROOM', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200' },
  { id: '2', title: 'THE DINING LOUNGE', image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'SMART FILTRATION', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'CURATED F&B DISTRICT', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'ADJACENT PREMIER GYM', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'BARISTA-GRADE COFFEE & ARTISAN TEAS', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200' }
];

const AmenityTile: React.FC<{ item: AmenityItem; isSpanned: boolean; delay: number }> = ({ item, isSpanned, delay }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <RevealWrapper 
      key={item.id} 
      delay={delay} 
      className={isSpanned ? "lg:col-span-2" : "lg:col-span-1"}
    >
      <div ref={ref} className="relative group overflow-hidden h-[300px] lg:h-[350px]">
        <motion.img 
          src={item.image} 
          alt={item.title} 
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 w-full h-[130%] object-cover transition-transform duration-1000 group-hover:scale-125" 
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
        
        {/* Title Overlay Label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="bg-black/70 backdrop-blur-md px-8 py-4 border border-white/10 transform transition-transform duration-500 group-hover:scale-105">
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-center block whitespace-nowrap">
              {item.title}
            </span>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
};

const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-24 px-4 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Amenities Tiles */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((item, idx) => (
            <AmenityTile 
              key={item.id} 
              item={item} 
              isSpanned={idx === 0 || idx === 5} 
              delay={idx * 0.1} 
            />
          ))}
        </div>

        {/* Dark Descriptive Block */}
        <div className="bg-[#1a1c21] text-white p-8 md:p-12 lg:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[500px] lg:min-h-full">
          {/* Top Line Decoration */}
          <div className="w-full h-[1px] bg-white/20 mb-8 lg:mb-12"></div>
          
          <RevealWrapper className="flex-1 flex flex-col justify-center items-center">
            {/* Label with Diamonds */}
            <div className="flex items-center justify-center gap-4 mb-10">
               <div className="w-2 h-2 bg-white rotate-45"></div>
               <span className="text-white tracking-[0.4em] uppercase text-[10px] font-bold">Premium Amenities</span>
               <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-3xl xl:text-4xl serif mb-12 leading-[1.2] max-w-xs">
              A Glimpse Into Life At Workalyn
            </h2>
            
            {/* Description Text */}
            <p className="text-gray-400 text-sm leading-relaxed mb-16 max-w-sm font-light">
              Explore our thoughtfully designed interiors, collaborative zones, and vibrant work environments that bring people together and inspire everyday productivity.
            </p>
            
            {/* Action Button */}
            <button className="border border-white/40 text-white px-12 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a1c21] transition-all duration-500 shadow-xl shadow-white/5">
              View Our Spaces
            </button>
          </RevealWrapper>
          
          {/* Bottom Line Decoration */}
          <div className="w-full h-[1px] bg-white/20 mt-8 lg:mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
