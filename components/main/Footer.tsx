import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        {
            href: "https://github.com/aliturab99",
            icon: <FaGithub />, label: "GitHub", color: "hover:text-gray-300"
        },
        {
            href: "https://www.linkedin.com/in/ali-turab-naqvi/",
            icon: <FaLinkedin />, label: "LinkedIn", color: "hover:text-blue-400"
        },
        {
            href: "https://twitter.com/yawaraliturab",
            icon: <FaTwitter />, label: "Twitter", color: "hover:text-blue-300"
        },
    ];

    return (
        <footer className="w-full px-4 py-6 bg-black/70 backdrop-blur-md border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="text-sm text-center md:text-left opacity-80">
                © 2025 Syed Yawar Ali Turab. All rights reserved.
            </div>
            <div className="flex gap-6 items-center justify-center">
                {socialLinks.map((link, idx) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={`transition-all duration-200 text-xl opacity-80 hover:opacity-100 ${link.color}`}
                        style={{ display: "flex" }}
                    >
                        <span className="inline-block hover:scale-110 transition-transform duration-200">
                            {link.icon}
                        </span>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer