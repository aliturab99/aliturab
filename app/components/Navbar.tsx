'use client'
import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
// import { FaSquareTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-800">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-xl" href="#">
                            Ali Turab
                        </a>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <GiHamburgerMenu className='text-lg text-white' />
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center bg-blueGray-800 lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden")} id="example-collapse-navbar">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                            <li className="inline-block relative">
                                <a className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="inline-block relative">
                                <a className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#projects">
                                    Projects
                                </a>
                            </li>
                            <li className="inline-block relative">
                                <a className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#blogs">
                                    Blogs
                                </a>
                            </li>
                            <li className="inline-block relative">
                                <a className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className="items-center">
                                <a className="flex bg-white text-black active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" href="https://www.creative-tim.com/product/notus-js?ref=njs-index" target="_blank">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
