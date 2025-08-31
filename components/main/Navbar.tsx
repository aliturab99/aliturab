

"use client";
import React, { useState } from "react";
import { FiHome, FiUser, FiLayers, FiGrid, FiMail } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home", icon: <FiHome size={24} /> },
  { name: "About", href: "#about", icon: <FiUser size={24} /> },
  { name: "Skills", href: "#skills", icon: <FiLayers size={24} /> },
  { name: "Projects", href: "#projects", icon: <FiGrid size={24} /> },
  { name: "Contact", href: "#contact", icon: <FiMail size={24} /> },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleNavClick = (name: string, href: string) => {
    setActive(name);
    if (typeof window !== "undefined") {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };


  return (
    <>
      {/* Floating Vertical Navbar (Desktop) */}
  <nav className="hidden md:flex fixed top-1/2 left-6 -translate-y-1/2 z-50 flex-col items-center gap-7 bg-gradient-to-br from-white/90 via-blue-100/80 to-purple-100/80 backdrop-blur-xl rounded-3xl shadow-2xl py-8 px-4 border border-gray-100">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.name, link.href)}
            className="group relative flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <span className="transition-transform duration-300 group-hover:scale-125 bg-white/80 rounded-full p-2 shadow-sm group-hover:bg-blue-100">
              {link.icon}
            </span>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 pointer-events-none whitespace-nowrap text-base font-semibold border border-blue-100">
              {link.name}
            </span>
            {active === link.name && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-[4px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-underline shadow"></span>
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Floating Navbar (Bottom) */}
  <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center gap-7 bg-gradient-to-br from-white/90 via-blue-100/80 to-purple-100/80 backdrop-blur-xl rounded-3xl shadow-2xl py-6 px-4 border border-gray-100">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.name, link.href)}
            className="group relative flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <span className="transition-transform duration-300 group-hover:scale-125 bg-white/80 rounded-full p-2 shadow-sm group-hover:bg-blue-100">
              {link.icon}
            </span>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap text-base font-semibold border border-blue-100">
              {link.name}
            </span>
            {active === link.name && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-[4px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-underline shadow"></span>
            )}
          </button>
        ))}
      </nav>

      {/* Animated underline keyframes (Tailwind custom) */}
      <style jsx global>{`
        .animate-underline {
          animation: underlineGrow 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes underlineGrow {
          0% { width: 0; opacity: 0; }
          100% { width: 100%; opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
