
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealWrapper } from './ParallaxWrapper';

const AboutSection: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-24 bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-[1440px] mx-auto">
        
        {/* Left: Overlapping Parallax Images */}
        <div className="relative h-[500px] md:h-[600px]">
          <motion.div style={{ y: img1Y }} className="absolute top-0 left-0 w-4/5 h-4/5 z-10 shadow-3xl">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
              alt="Workspace"
            />
          </motion.div>
          <motion.div style={{ y: img2Y }} className="absolute bottom-0 right-0 w-3/5 h-1/2 z-20 border-[12px] border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover"
              alt="Meeting"
            />
          </motion.div>
          <div className="absolute -left-10 top-1/2 w-40 h-40 bg-gold/5 rounded-full -z-10 blur-3xl" />
        </div>

        {/* Right: Narrative Content */}
        <div>
          <RevealWrapper>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">The Workalyn Standard</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-dark-green leading-[1.1] mb-10 serif">
              Crafted For Success, Built For You
            </h2>
            <div className="space-y-8 text-gray-500 font-light leading-relaxed mb-12">
              <p>We don't just provide space; we curate environments that foster deep work and spontaneous collaboration. Every detail, from the acoustics to the lighting, is architecturally optimized for professional performance.</p>
              <p>Founded on the principle that your environment dictates your output, Workalyn has become the sanctuary for the world's most ambitious freelancers and enterprise teams.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gray-100">
              <div>
                <h4 className="text-4xl font-bold text-dark-green serif mb-2">120+</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Global Hubs</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-dark-green serif mb-2">50k+</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Visionaries</p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
