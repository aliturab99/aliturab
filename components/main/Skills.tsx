"use client";

import React from "react";

import SkillsBall3D from "./SkillsBall3D";

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-[100vh] bg-white flex flex-col items-center justify-center py-16 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">Skills</h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 mx-auto"></div>
          <p className="text-lg text-gray-700 mb-6 text-center">
            I&apos;m a full-stack developer with expertise in React, Next.js, Django, PostgreSQL, AWS, Docker, and more. Explore my skills in the interactive 3D ball below!
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
    </section>
  );
};

export default Skills;
