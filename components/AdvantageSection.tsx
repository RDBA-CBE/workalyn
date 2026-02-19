
import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper, ParallaxWrapper } from './ParallaxWrapper';

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
      </svg>
    ),
    title: "Instant Access",
    desc: "Seamless entry to all our premium workspaces worldwide, with 24/7 flexibility."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    title: "Natural Light",
    desc: "Floor-to-ceiling windows designed to maximize daylight and boost your focus."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
      </svg>
    ),
    title: "Effortless Flow",
    desc: "Intelligently designed floor plans that facilitate movement and spontaneous meetings."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    title: "Exclusive Enclave",
    desc: "Private suites and quiet zones curated for executives and focused deep work sessions."
  }
];

const AdvantageSection: React.FC = () => {
  return (
    <section className="bg-dark-green py-32 px-4 md:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="text-center mb-24 relative z-10">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-2 h-2 bg-gold rotate-45"></div>
             <span className="text-gold tracking-[0.2em] uppercase text-[10px] font-bold">Advantage</span>
             <div className="w-2 h-2 bg-gold rotate-45"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6 serif">The Plaza Level Advantage</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
            Curated environments that prioritize your performance, mental clarity, and professional connectivity.
          </p>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {advantages.map((adv, idx) => (
          <ParallaxWrapper 
            key={adv.title} 
            offset={idx % 2 === 0 ? 30 : 60} 
            direction={idx % 2 === 0 ? 'up' : 'down'}
          >
            <div className="bg-white/5 border border-white/10 p-10 h-full hover:bg-white/10 transition-all duration-500 group relative">
              <div className="mb-8 flex justify-center">
                <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                  {adv.icon}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest text-center mb-6">{adv.title}</h3>
              <p className="text-gray-400 text-xs text-center leading-relaxed font-light">{adv.desc}</p>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/30 transition-all duration-500"></div>
            </div>
          </ParallaxWrapper>
        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;
