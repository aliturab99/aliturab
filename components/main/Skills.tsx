"use client";

import React from "react";
import SkillsBall3D from "./SkillsBall3D";

const Skills = () => {
  // Staggered fade-in for headline and description
  const headline = "Skills";
  const description = "I'm a full-stack developer with expertise in React, Next.js, Django, PostgreSQL, AWS, Docker, and more. Explore my skills in the interactive 3D ball below!";
  return (
    <section id="skills" className="w-full min-h-[100vh] bg-white flex flex-col items-center justify-center py-16 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center flex flex-wrap justify-center">
            {headline.split(" ").map((word, idx) => (
              <span
                key={word + idx}
                style={{
                  opacity: 0,
                  animation: `fadeInWord 0.7s cubic-bezier(0.4,0,0.2,1) forwards`,
                  animationDelay: `${idx * 0.2}s`,
                  marginRight: "0.5ch"
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 mx-auto"></div>
          <p className="text-lg text-gray-700 mb-6 text-center flex flex-wrap justify-center">
            {description.split(" ").map((word, idx) => (
              <span
                key={word + idx}
                style={{
                  opacity: 0,
                  animation: `fadeInWord 0.6s cubic-bezier(0.4,0,0.2,1) forwards`,
                  animationDelay: `${0.7 + idx * 0.07}s`,
                  marginRight: "0.5ch"
                }}
              >
                {word}
              </span>
            ))}
          </p>
          <div className="flex items-center gap-3 mb-6">
            <a
              href="https://www.linkedin.com/in/aliturab99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold text-base"
            >
              Connect on LinkedIn
            </a>
            <a
              href="#contact"
              className="text-purple-600 hover:underline font-semibold text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[500px]">
          <SkillsBall3D />
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

export default Skills;
