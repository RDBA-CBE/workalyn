"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  /* =====================
     Nav Item Component
     ===================== */
  const NavItem: React.FC<{ path: string; label: string }> = ({
    path,
    label,
  }) => {
    const isActive = pathname === path;
    return (
      <li>
        <button
          onClick={() => handleNavClick(path)}
          className={`text-[16px] xl:text-[20px] uppercase  transition-all duration-300 serif relative
            ${
              isActive
                ? "text-[#00998A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00998A]"
                : "text-[#1B1C21] hover:text-[#00998A] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00998A] hover:after:w-full after:transition-all"
            }`}
        >
          {label}
        </button>
      </li>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* =====================
          TOP BAR
         ===================== */}
      <div className="section-wid py-4 md:py-6 flex justify-between items-center">
        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-3 text-gray-800">
          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaInstagram className="text-[24px]" />
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaLinkedin className="text-[24px]" />
          </a>

          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaFacebook className="text-[24px]" />
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            <FaTwitter className="text-[24px]" />
          </a>
        </div>

        {/* Logo */}
        <button onClick={() => handleNavClick("/")}>
          <img src="/workalyn-logo-color.svg" alt="Workalyn" />
        </button>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex text-md font-medium text-gray-800 font-sans">
            <FaPhone className="text-[18px] me-3 mt-1" />{" "}
            <a href="tel:60312345678">(603) 1234 5678</a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="section-wid border-t-2 border-gray-200" />

      {/* =====================
          DESKTOP NAV
         ===================== */}
      <nav className="hidden lg:flex justify-center py-4">
        <ul className="flex items-center gap-8">
          <NavItem path="/about" label="About" />{" "}
          <div className="w-[5.5px] h-[5.5px] bg-[#00998A] rotate-45"></div>
          <NavItem path="/workspaces" label="Workspaces Solutions" />{" "}
          <div className="w-[5.5px] h-[5.5px] bg-[#00998A] rotate-45"></div>
          <NavItem path="/amenities" label="Amenities" />{" "}
          <div className="w-[5.5px] h-[5.5px] bg-[#00998A] rotate-45"></div>
          <NavItem
            path="/community-and-clientele"
            label="Community & Clientele"
          />{" "}
          <div className="w-[5.5px] h-[5.5px] bg-[#00998A] rotate-45"></div>
          <NavItem path="/contact" label="Contact Us" />
        </ul>
      </nav>

      {/* =====================
          MOBILE NAV
         ===================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              <button
                onClick={() => handleNavClick("/about")}
                className={`text-lg font-bold uppercase tracking-widest ${
                  pathname === "/about" ? "text-emerald-600" : "text-gray-800"
                }`}
              >
                About
              </button>

              <button
                onClick={() => handleNavClick("/amenities")}
                className={`text-lg font-bold uppercase tracking-widest ${
                  pathname === "/amenities"
                    ? "text-emerald-600"
                    : "text-gray-800"
                }`}
              >
                Amenities
              </button>

              <button
                onClick={() => handleNavClick("/workspaces")}
                className={`text-lg font-bold uppercase tracking-widest ${
                  pathname === "/workspaces"
                    ? "text-emerald-600"
                    : "text-gray-800"
                }`}
              >
                Workspaces
              </button>

              <button
                onClick={() => handleNavClick("/community-and-clientele")}
                className={`text-lg font-bold uppercase tracking-widest ${
                  pathname === "/community-and-clientele"
                    ? "text-emerald-600"
                    : "text-gray-800"
                }`}
              >
                Community & Clientele
              </button>

              <button
                onClick={() => handleNavClick("/contact")}
                className={`text-lg font-bold uppercase tracking-widest ${
                  pathname === "/contact" ? "text-emerald-600" : "text-gray-800"
                }`}
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
