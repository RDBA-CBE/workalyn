
import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper, ParallaxWrapper } from './ParallaxWrapper';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Parallax Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-dark-green">
        <ParallaxWrapper offset={100} className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="About Header" />
        </ParallaxWrapper>
        <div className="relative z-10 text-center text-white px-6">
          <RevealWrapper>
            <h1 className="text-6xl md:text-8xl serif mb-6">Our Legacy</h1>
            <p className="text-gold tracking-[0.5em] uppercase text-xs font-bold">Designing the future of human connection</p>
          </RevealWrapper>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <RevealWrapper>
              <h2 className="text-4xl md:text-5xl serif text-dark-green mb-10 leading-tight">It started with a single desk and a vision for more.</h2>
              <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                <p>Founded in 2018, Workalyn emerged from a desire to bridge the gap between sterile corporate environments and chaotic coffee shops. We saw a world where freelancers and established teams were searching for the same thing: inspiration.</p>
                <p>Today, our mission remains unchanged. We build ecosystems that empower professionals to do their best work while being part of something larger than themselves.</p>
              </div>
            </RevealWrapper>
          </div>
          <ParallaxWrapper offset={40} direction="down">
             <div className="relative aspect-square">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover shadow-3xl" alt="Founder Story" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 -z-10"></div>
             </div>
          </ParallaxWrapper>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-24">
          <h2 className="text-3xl serif text-center mb-24 uppercase tracking-widest text-dark-green">Our Milestones</h2>
          <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between space-y-16 md:space-y-0">
             {[
               { year: '2018', text: 'First location opened in San Francisco Market Street.' },
               { year: '2020', text: 'Reached 50,000 active global members.' },
               { year: '2023', text: 'Expanded to European hubs in London and Paris.' },
               { year: '2026', text: 'Launching our 50th premium workspace suite.' }
             ].map((m, i) => (
               <RevealWrapper key={i} delay={i * 0.1} className="md:w-1/5 relative pl-8 md:pl-0">
                  <div className="hidden md:block w-3 h-3 bg-gold rotate-45 mb-6"></div>
                  <h3 className="text-4xl serif text-gold mb-4">{m.year}</h3>
                  <p className="text-sm text-gray-400 font-light">{m.text}</p>
               </RevealWrapper>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
