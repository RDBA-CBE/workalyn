
import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper } from './ParallaxWrapper';

const cityHubs = [
  {
    city: "San Francisco",
    name: "Embarcadero Hub",
    address: "101 Market St, SF 94105",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800",
    features: ["Waterfront Views", "Tech Enclave", "Rooftop Garden"]
  },
  {
    city: "New York City",
    name: "Madison Avenue Suites",
    address: "590 Madison Ave, NY 10022",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
    features: ["Elite District", "Historic Building", "Premium Lounge"]
  },
  {
    city: "London",
    name: "Mayfair Collective",
    address: "42 Berkeley Square, London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    features: ["Business Concierge", "Private Library", "Art-deco Design"]
  },
  {
    city: "Tokyo",
    name: "Minato Sky Tower",
    address: "Roppongi Hills, Minato City",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
    features: ["Robotic Concierge", "Zen Garden", "High-speed Fiber"]
  }
];

const Locations: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="relative h-[400px] flex items-center justify-center bg-dark-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Locations Banner" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <h1 className="text-5xl md:text-7xl serif mb-6">Global Presence</h1>
             <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold">Discover our curated ecosystem of elite workspaces</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cityHubs.map((hub, idx) => (
            <RevealWrapper key={hub.name} delay={idx * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={hub.image} 
                    alt={hub.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 shadow-lg">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark-green">{hub.city}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl serif text-dark-green mb-2">{hub.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{hub.address}</p>
                    <div className="flex flex-wrap gap-2">
                      {hub.features.map(f => (
                        <span key={f} className="text-[9px] uppercase tracking-widest border border-gray-100 px-3 py-1.5 rounded-full text-gray-500">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-dark-green/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <svg className="w-4 h-4 text-dark-green group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 text-center">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl serif text-dark-green mb-8">Ready to grow your business with us?</h2>
          <button className="bg-dark-green text-white px-12 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold transition-all duration-300">
             Contact Expansion Team
          </button>
        </RevealWrapper>
      </section>
    </div>
  );
};

export default Locations;
