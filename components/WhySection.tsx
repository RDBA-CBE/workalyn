
import React from 'react';
import { RevealWrapper, ParallaxWrapper } from './ParallaxWrapper';

const points = [
  { title: "Traditional High-Rise Spaces", desc: "Secure, fully furnished offices ideal for teams seeking privacy with flexibility." },
  { title: "Often Limited Window Access", desc: "Your own desk in a shared workspace—perfect for consistency and focus." },
  { title: "Isolated Within Office Towers", desc: "Work on your own terms with hot desks and day passes." },
  { title: "Meeting & Event Spaces", desc: "Modern rooms designed for meetings, workshops, and presentations." }
];

const WhySection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Text */}
        <div>
          <RevealWrapper>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-gold rotate-45"></div>
              <span className="text-gold tracking-[0.2em] uppercase text-[10px] font-bold">Why Workalyn?</span>
              <div className="w-2 h-2 bg-gold rotate-45"></div>
            </div>
            <h2 className="text-5xl text-dark-green mb-8 leading-tight serif">
              The Clear Alternative To High-Rise Coworking
            </h2>
            <p className="text-gray-500 text-sm mb-12 leading-relaxed max-w-lg">
              From focused individual work to team collaboration, our workspaces are flexible, functional, and thoughtfully designed to help you perform at your best.
            </p>
            
            <div className="space-y-10">
              {points.map((p, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="mt-1">
                    <div className="w-4 h-4 border-2 border-dark-green rotate-45 group-hover:bg-gold group-hover:border-gold transition-colors"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-dark-green mb-2">{p.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
        
        {/* Right Side - Collage */}
        <div className="relative h-[600px]">
          <ParallaxWrapper offset={40} className="absolute top-0 right-0 w-3/4 h-3/4 z-10">
             <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-sm shadow-xl" />
          </ParallaxWrapper>
          <ParallaxWrapper offset={60} direction="down" className="absolute bottom-0 left-0 w-3/5 h-2/5 z-20">
             <img src="https://images.unsplash.com/photo-1600508774444-423ba712129a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-sm shadow-2xl border-4 border-white" />
          </ParallaxWrapper>
          <div className="absolute top-1/2 left-0 w-1/4 h-1/4 border border-gold/30 -z-10 translate-x-12"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
