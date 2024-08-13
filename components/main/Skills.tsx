"use client";

import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const { scrollY } = useViewportScroll();

  // Define parallax transformations
  const yVideo = useTransform(scrollY, [0, 500], [0, -50]);
  const xSkills = useTransform(scrollY, [0, 500], [0, 30]);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center md:gap-3 h-full md:relative md:overflow-hidden md:pb-20 md:py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.div
        style={{ y: yVideo }}
        className="absolute top-0 left-0 w-full h-full z-[-10] opacity-30 flex items-center justify-center bg-cover"
      >
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </motion.div>

      <SkillText />

      <h2 className="text-white text-2xl my-5">Front-End Skills</h2>
      <div className="flex flex-row flex-wrap justify-center md:gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <h2 className="text-white text-2xl my-5">Back-End Skills</h2>
      <div className="flex flex-row flex-wrap justify-center md:gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <h2 className="text-white text-2xl my-5">Full Stack Skills</h2>
      <div className="flex flex-row flex-wrap justify-center md:gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
