"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#1a1c21]">
      <div
        id="contact"
        className=" section-wid text-white pt-16 pb-6  relative overflow-hidden"
      >
        {/* Background Watermark */}
        <div className="absolute left-[0%] top-[10%]  select-none pointer-events-none">
          <img src="/workalyn-logo-icon.svg" alt="" />
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-15 mb-20">
            {/* Column 1: Navigation */}
            <div>
              <p className="text-[15px] font-bold uppercase tracking-[0.1em] mb-8 text-white">
                Navigation
              </p>
              <ul className="space-y-2 text-white/70 text-[15px]">
                <li>
                  <button
                    onClick={() => router.push("/")}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/about")}
                    className="hover:text-white transition-colors"
                  >
                    Our Story
                  </button>
                </li>
                 <li>
                  <button
                    onClick={() => router.push("/workspaces")}
                    className="hover:text-white transition-colors"
                  >
                    Workspace
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/amenities")}
                    className="hover:text-white transition-colors"
                  >
                    Amenities
                  </button>
                </li>
               
                {/* <li>
                  <button
                    onClick={() => router.push("/community-and-clientele")}
                    className="hover:text-white transition-colors"
                  >
                    Community & Clientele
                  </button>
                </li> */}
                <li>
                  <button
                    onClick={() => router.push("/book-a-tour")}
                    className="hover:text-white transition-colors"
                  >
                    Book a tour
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div>
              <p className="text-[15px] font-bold uppercase tracking-[0.1em] mb-8 text-white">
                Contact
              </p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <span className="text-[15px] block text-white/70 tracking-widest mb-1">
                    Phone:{" "}
                    <a
                      href="tel:+60312345678
"
                      className="hover:text-white transition-colors"
                    >
                      +603 1234 5678

                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-[15px] block text-white/70 tracking-widest mb-1">
                    Email:{" "}
                    <a
                      href="mailto:hello@workalyn.com"
                      className="hover:text-white transition-colors"
                    >
                      hello@workalyn.com

                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-[15px] block text-white/70 tracking-widest mb-1">
                    Address: PL 02 & 03, Block A,
Plaza Damansara,
Jalan Medan Setia 1,
Bukit Damansara,
50490 Kuala Lumpur

                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Brand Assets */}
            <div className="flex flex-col items-start md:border-l md:border-l-[1.4px] border-white/20 md:pl-16">
              {" "}
              <div className="flex items-center gap-4 mb-10">
                <div className="text-white">
                  <img src="/workalyn-logo-white.svg" alt="" />
                </div>
              </div>
              <div className="flex gap-8 mb-12">
                <a
                  href="https://www.instagram.com/workalyn/" target="_blank"
                  className="text-white hover:text-emerald-500 transition-colors"
                >
                  <FaInstagram className="text-[25px]" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-emerald-500 transition-colors"
                >
                  <FaLinkedin className="text-[25px]" />
                </a>
                <a
                  href="https://www.facebook.com/people/Workalyn/61579702261230/" target="_blank"
                  className="text-white hover:text-emerald-500 transition-colors"
                >
                  <FaFacebook className="text-[25px]" />
                </a>
              
              </div>
              <div className="flex gap-3 text-[15px]  tracking-wider text-white/70">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Notice
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-[1.4px] bg-white/20 mb-8"></div>

          <div className="text-center text-[14px] font-bold tracking-[0.1em] text-white/50 uppercase">
            Copyright 2026 © Workalyn. Concept <a href="https://irepute.in/" target="_blank" className="lowercase">by repute</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
