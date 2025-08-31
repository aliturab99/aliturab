"use client";

import React from "react";
import FloatingProfile from "./FloatingProfile";
// Removed framer-motion imports
import Image from "next/image";

const HeroContent = () => {
  // Removed framer-motion parallax logic

  // Staggered fade-in for headline
  const headline = "Ali Turab";
  const subheadline = "Full Stack Developer | React | Django | Next.js";
  const buttons = [
    { label: "View Projects", href: "#projects", className: "bg-blue-600 hover:bg-blue-700" },
    { label: "Contact Me", href: "#contact", className: "bg-purple-600 hover:bg-purple-700" }
  ];
  return (
    <section className="flex items-center justify-center h-[100vh] w-full bg-white overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-stretch justify-center">
        {/* Content - 50% */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-10 md:py-14 px-4 gap-8 rounded-3xl border border-gray-100 backdrop-blur-xl text-center bg-white/80">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 flex flex-wrap justify-center">
            {headline.split(" ").map((word, idx) => (
              <span
                key={word + idx}
                style={{
                  opacity: 0,
                  animation: `fadeInWord 0.7s cubic-bezier(0.4,0,0.2,1) forwards`,
                  animationDelay: `${idx * 0.25}s`,
                  marginRight: "0.5ch"
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-700 flex flex-wrap justify-center">
            {subheadline.split(" ").map((word, idx) => (
              <span
                key={word + idx}
                style={{
                  opacity: 0,
                  animation: `fadeInWord 0.6s cubic-bezier(0.4,0,0.2,1) forwards`,
                  animationDelay: `${0.7 + idx * 0.15}s`,
                  marginRight: "0.5ch"
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center">
            {buttons.map((btn, idx) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`px-8 py-3 rounded-xl text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-center ${btn.className}`}
                style={{
                  opacity: 0,
                  animation: `fadeInWord 0.7s cubic-bezier(0.4,0,0.2,1) forwards`,
                  animationDelay: `${1.5 + idx * 0.3}s`,
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        {/* Profile Image - 50% */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/49/c6/e1/49c6e1672b1f53fcd21d17ebebeabab1.jpg"
            alt="Developer Illustration"
            className="w-full h-full object-cover rounded-none"
            style={{ width: '100%', height: '100%' }}
            loading="eager"
          />
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInWord {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroContent;
