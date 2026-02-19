
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="bg-[#1a1c21] text-white pt-24 pb-10 px-6 md:px-24 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-[-5%] top-[10%] opacity-[0.03] select-none pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 464C160 464 96 368 96 256C96 144 160 48 256 48C352 48 416 144 416 256C416 368 352 464 256 464ZM256 80C192 80 128 160 128 256C128 352 192 432 256 432C320 432 384 352 384 256C384 160 320 80 256 80Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-20">
          
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-white">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-white transition-colors">Our Legacy</button></li>
              <li><button onClick={() => navigate('/locations')} className="hover:text-white transition-colors">Locations</button></li>
              <li><button onClick={() => navigate('/gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              <li><button onClick={() => navigate('/workspaces')} className="hover:text-white transition-colors">Workspace Solutions</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-white">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-400 font-light">
              <li>
                <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Phone:</span>
                <span className="text-white">(987) 654-3210</span>
              </li>
              <li>
                <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Email:</span>
                <span className="text-white">pinehillsuppor@pinehills.com</span>
              </li>
              <li>
                <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Address:</span>
                <span className="text-white leading-relaxed">123 Main Street, Suite 101 Cityville, CA 90001</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand Assets */}
          <div className="flex flex-col items-start md:items-end md:text-right md:border-l border-white/10 md:pl-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="text-white">
                <svg width="48" height="48" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 464C160 464 96 368 96 256C96 144 160 48 256 48C352 48 416 144 416 256C416 368 352 464 256 464ZM256 80C192 80 128 160 128 256C128 352 192 432 256 432C320 432 384 352 384 256C384 160 320 80 256 80Z" fill="currentColor" opacity="0.3"/>
                  <path d="M256 128C200 128 160 200 160 256C160 312 200 384 256 384C312 384 352 312 352 256C352 200 312 128 256 128Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-4xl font-bold tracking-tighter uppercase text-white">Workalyn</span>
            </div>

            <div className="flex gap-8 mb-12">
              <a href="#" className="text-white hover:text-emerald-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-emerald-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>

            <div className="flex gap-8 text-[11px] font-medium tracking-wider text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        <div className="text-center text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
          Copyright 2026 © Workalyn. Concept by Repute
        </div>
      </div>
    </footer>
  );
};

export default Footer;
