import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { path: string; label: string }[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/locations', label: 'Locations' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/workspaces', label: 'Workspaces' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  /* =====================
     Nav Item Component
     ===================== */
  const NavItem: React.FC<{ path: string; label: string }> = ({ path, label }) => {
    const isActive = location.pathname === path || (path === '/' && location.pathname === '/');
    return (
      <li>
        <button
          onClick={() => handleNavClick(path)}
          className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 serif relative pb-1
            ${isActive
              ? 'text-emerald-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-emerald-600'
              : 'text-gray-800 hover:text-emerald-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-600 hover:after:w-full after:transition-all'}`}
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
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-4 md:py-6 flex justify-between items-center">
        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-5 text-gray-800">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-emerald-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-emerald-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.982 0h-3.97v16h3.97v-8.399c0-4.67 6.029-5.052 6.029 0V24h3.988v-10.131c0-7.88-8.922-7.593-11.018-3.714V8z" />
            </svg>
          </a>
        </div>

        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3"
        >
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            Workalyn
          </span>
        </button>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Phone (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-gray-800">
            <span className="text-sm font-medium">(987) 654-3210</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* =====================
          DESKTOP NAV
         ===================== */}
      <nav className="hidden md:flex justify-center py-5">
        <ul className="flex gap-10">
          {navLinks.map((link) => (
            <NavItem
              key={link.path}
              path={link.path}
              label={link.label}
            />
          ))}
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
            className="md:hidden bg-white overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-lg font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-emerald-600' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
