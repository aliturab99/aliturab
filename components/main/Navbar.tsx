'use client'
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemVariants: any = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const handleResumeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-auto block md :hidden py-4 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#ffffff30] backdrop-blur-md z-50 px-10">
        <div className="font-bold relative text-center ml-[10px] md:hidden block text-3xl pt-3 text-gray-300">
          <p>Ali Turab</p>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu absolute top-3 right-0"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMenu size={20} />
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
              className="bg-slate-600 w-full p-3"
            >
              <motion.li variants={itemVariants}>
                <a href="#about" className="cursor-pointer text-lg">About me</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#skills" className="cursor-pointer text-lg">Skills</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#contact" className="cursor-pointer text-lg">Contact</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={handleResumeClick}
                  className="bg-white text-lg px-4 py-1 rounded-xl"
                >
                  Resume
                </button>
              </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
      </div>

      <div className="w-full hidden md:flex h-auto py-4 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#ffffff30] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="#about-me">
            <span className="font-bold ml-[10px] hidden md:block md:text-md lg:text-xl text-gray-300">
              Ali Turab
            </span>
          </a>

          <div className="h-full hidden md:flex flex-row items-center justify-between gap-5 w-[50%]">
            <div className="flex items-center justify-around w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm">
              <a href="#about" className="cursor-pointer">About me</a>
              <a href="#skills" className="cursor-pointer">Skills</a>
              <a href="#contact" className="cursor-pointer">Contact</a>
            </div>
          </div>

          <button
            onClick={handleResumeClick}
            className="bg-white hidden md:flex px-4 py-1 rounded-xl"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-[999] inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-80 md:w-96 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">Resume</h2>
            <p>Your resume content goes here.</p>
            <a href="/SyedYawarAliTurab.pdf" download className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">Download Resume</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
