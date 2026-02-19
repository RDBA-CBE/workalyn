"use client";

import React from 'react';
import { RevealWrapper } from './ParallaxWrapper';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Left: Info */}
            <div>
              <RevealWrapper>
                <h1 className="text-6xl serif text-dark-green mb-10">Get In Touch</h1>
                <p className="text-gray-500 mb-16 leading-relaxed font-light max-w-md">Whether you have a question about our memberships, locations, or want to discuss a custom suite, we're here to help.</p>
                
                <div className="space-y-12">
                   <div>
                     <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">General Inquiries</h3>
                     <p className="text-xl serif text-dark-green">hello@workalyn.com</p>
                     <p className="text-xl serif text-dark-green">(987) 654-3210</p>
                   </div>
                   <div>
                     <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Headquarters</h3>
                     <p className="text-xl serif text-dark-green">101 Market St, San Francisco</p>
                     <p className="text-xl serif text-dark-green">CA 94105, USA</p>
                   </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 p-12 shadow-sm">
              <RevealWrapper>
                <h2 className="text-2xl serif text-dark-green mb-10">Send Us A Message</h2>
                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors" />
                      <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors" />
                   </div>
                   <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors" />
                   <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors resize-none"></textarea>
                   <button className="w-full bg-dark-green text-white py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500">
                      Submit Inquiry
                   </button>
                </form>
              </RevealWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Interactive Map Placeholder</span>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
