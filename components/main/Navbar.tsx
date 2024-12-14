'use client'
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from '../../public/logo.png'
import Image from 'next/image';



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
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-800">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <a href="/"><Image src={Logo} alt="Ali Turab" className=" w-[100] md:w-[200px] lg:w-[300px] h-[100px] object-cover" /> </a>
          </div>
          <div className=" flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none bg-blueGray-800" id="example-collapse-navbar">
            <ul className="hidden md:flex flex-row list-none lg:ml-auto items-center">
              <li className="flex items-center">
                <a className="text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.linkedin.com/in/ali-turab-naqvi/" target="_blank"><FaLinkedin className="text-2xl" /></a>
              </li>
              <li className="flex items-center">
                <a className="text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://github.com/aliturab99" target="_blank"><FaGithub className="text-2xl" /></a>
              </li>
              <li className="flex items-center">
                <a className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"  href="/SyedYawarAliTurab.pdf" download>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
