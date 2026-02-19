"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper } from './ParallaxWrapper';

const galleryImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen">
      <section className="py-24 px-6 md:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <RevealWrapper>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-gold rotate-45"></div>
              <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">Visual Showcase</span>
              <div className="w-2 h-2 bg-gold rotate-45"></div>
            </div>
            <h1 className="text-5xl md:text-7xl serif text-dark-green mb-8">Workalyn Life</h1>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
              Experience the atmosphere of our premium spaces through this curated visual journey. 
              Every corner is designed to inspire the next generation of industry leaders.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((src, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.05}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden shadow-xl rounded-sm ${idx % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-dark-green/20 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div>
                </div>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* Grid footer */}
      <section className="py-24 text-center bg-white">
        <RevealWrapper>
           <h2 className="text-3xl serif text-dark-green mb-10">See these spaces in person</h2>
           <button className="bg-dark-green text-white px-12 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold transition-all duration-300">
             Book A Physical Tour
           </button>
        </RevealWrapper>
      </section>
    </div>
  );
};

export default Gallery;
