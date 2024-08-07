"use client";

import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
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
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
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

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <motion.div
            key={index}
            style={{ x: xSkills }}
            className="flex-shrink-0"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <motion.div
            key={index}
            style={{ x: xSkills }}
            className="flex-shrink-0"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <motion.div
            key={index}
            style={{ x: xSkills }}
            className="flex-shrink-0"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <motion.div
            key={index}
            style={{ x: xSkills }}
            className="flex-shrink-0"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <motion.div
            key={index}
            style={{ x: xSkills }}
            className="flex-shrink-0"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
