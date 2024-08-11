'use client'
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants: any = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="w-full h-auto block md:hidden py-4 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#ffffff30] backdrop-blur-md z-50 px-6">
        <div className="font-bold relative text-center text-2xl pt-1 text-gray-300">
          <p>Ali Turab</p>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="absolute top-2 right-0"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              <FiMenu size={24} />
            </motion.button>
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                  }
                }
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
              className="bg-slate-600 w-[200px] p-3 absolute right-0 mt-2 rounded-lg"
            >
              <motion.li variants={itemVariants} className="py-2">
                <a href="#about" className="cursor-pointer text-lg">About me</a>
              </motion.li>
              <motion.li variants={itemVariants} className="py-2">
                <a href="#skills" className="cursor-pointer text-lg">Skills</a>
              </motion.li>
              <motion.li variants={itemVariants} className="py-2">
                <a href="#contact" className="cursor-pointer text-lg">Contact</a>
              </motion.li>
              <motion.li variants={itemVariants} className="py-2">
                <a href="/SyedYawarAliTurab.pdf" download className="bg-white text-lg px-4 py-1 rounded-xl">Resume</a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="w-full hidden md:flex h-auto py-4 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#ffffff30] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between">
          <a href="#about-me">
            <span className="font-bold text-md lg:text-xl text-gray-300">
              Ali Turab
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a href="#about" className="cursor-pointer text-sm lg:text-base text-gray-300">About me</a>
            <a href="#skills" className="cursor-pointer text-sm lg:text-base text-gray-300">Skills</a>
            <a href="#contact" className="cursor-pointer text-sm lg:text-base text-gray-300">Contact</a>
            <a href="/SyedYawarAliTurab.pdf" download className="bg-white px-4 py-1 rounded-xl text-sm lg:text-base">Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
