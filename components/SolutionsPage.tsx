
import React from 'react';
import { RevealWrapper, ParallaxWrapper } from './ParallaxWrapper';

const solutions = [
  {
    title: "The Lounge Membership",
    price: "From $250 / mo",
    desc: "Access to all our common areas and collaborative zones globally.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
    features: ["24/7 Access", "High-speed Wi-Fi", "Free Coffee & Tea", "Community Events"]
  },
  {
    title: "Dedicated Desk",
    price: "From $550 / mo",
    desc: "Your own permanent spot in a shared office environment.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    features: ["Private Locker", "Ergonomic Chair", "Mail Handling", "Print Services"]
  },
  {
    title: "Private Suite",
    price: "Inquire for Pricing",
    desc: "Fully enclosed office spaces for teams of 4 to 50+.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    features: ["Custom Branding", "Meeting Room Credits", "Dedicated Support", "Secure Network"]
  }
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-[#fcfbf7]">
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-[1440px] mx-auto">
          <RevealWrapper className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl serif text-dark-green mb-8">Workspace Solutions</h1>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
              We offer flexible plans designed to scale with your business. Choose the environment that best fits your workflow.
            </p>
          </RevealWrapper>

          <div className="space-y-24">
            {solutions.map((s, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                   <ParallaxWrapper offset={30}>
                      <img src={s.image} className="w-full aspect-[4/3] object-cover shadow-2xl" alt={s.title} />
                   </ParallaxWrapper>
                </div>
                <div className="lg:w-1/2">
                  <RevealWrapper>
                    <span className="text-gold font-bold text-lg serif mb-4 block">{s.price}</span>
                    <h2 className="text-4xl serif text-dark-green mb-6">{s.title}</h2>
                    <p className="text-gray-500 mb-10 leading-relaxed font-light">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                       {s.features.map(f => (
                         <li key={f} className="flex items-center gap-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                           <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                           {f}
                         </li>
                       ))}
                    </ul>
                    <button className="bg-dark-green text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold transition-all duration-300">
                       Book A Tour
                    </button>
                  </RevealWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
