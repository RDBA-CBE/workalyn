"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SolutionItem } from '../types';
import { RevealWrapper } from './ParallaxWrapper';

const solutions: SolutionItem[] = [
  {
    id: '1',
    title: 'Memberships',
    description: 'Perfect for startups and freelancers who need flexible access to professional environments without fixed costs.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviews: 42
  },
  {
    id: '2',
    title: 'Private Office',
    description: 'Fully furnished private suites for teams of all sizes, offering privacy and your own company culture within our community.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviews: 128
  },
  {
    id: '3',
    title: 'Fixed Desk',
    description: 'Your dedicated desk in a shared area. Ideal for individuals who want consistency and a focused place to work every day.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviews: 86
  },
  {
    id: '4',
    title: 'Flexi Desk',
    description: 'Unlimited access to open seating in any of our common areas. Drop in, plug in, and get to work on your own terms.',
    image: 'https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviews: 64
  }
];

const SolutionCard: React.FC<{ item: SolutionItem; idx: number }> = ({ item, idx }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 items-stretch bg-white shadow-sm hover:shadow-2xl transition-all duration-700 group overflow-hidden border border-gray-100`}>
      {/* Image Side with Parallax */}
      <div className="lg:w-3/5 overflow-hidden relative h-[450px] lg:h-auto">
        <motion.img 
          src={item.image} 
          alt={item.title} 
          style={{ y: imgY, scale: 1.1 }}
          className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-115"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      
      {/* Text Side */}
      <div className="lg:w-2/5 p-12 md:p-16 flex flex-col justify-center bg-white relative z-10">
        <RevealWrapper>
          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'text-black' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[10px] font-bold text-gray-500 ml-3 uppercase tracking-widest">{item.rating} / 5.0 Rating</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl text-dark-green font-bold uppercase tracking-[0.1em] mb-8 serif">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
            {item.description}
          </p>
          
          <button className="flex items-center gap-6 bg-dark-green text-white px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase w-fit hover:bg-gold transition-all duration-300 group/btn shadow-lg shadow-dark-green/10">
            Enquire Now
            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </RevealWrapper>
      </div>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-4 md:px-24 bg-[#fcfbf7]">
      <div className="text-center mb-24">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-2 h-2 bg-gold rotate-45"></div>
             <span className="text-gold tracking-[0.2em] uppercase text-[10px] font-bold">Workspace Solutions</span>
             <div className="w-2 h-2 bg-gold rotate-45"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-dark-green mb-6 serif">Choose Your Way. Stay In Control</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Our workspace solutions are tailored to your business needs, whether you're a solo entrepreneur or a growing enterprise.
          </p>
        </RevealWrapper>
      </div>

      <div className="space-y-16">
        {solutions.map((item, idx) => (
          <SolutionCard key={item.id} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
