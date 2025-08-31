"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Fetch the Lottie animation JSON data
        const fetchAnimation = async () => {
            try {
                const response = await fetch(
                    "https://lottie.host/952f2438-0ff9-4ca5-bb78-bf8ee9f88c78/uV8jTlBYz4.json"
                );
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Failed to load Lottie animation", error);
            }
        };

        fetchAnimation();
    }, []);

    // Form state and validation
    type FormState = { name: string; email: string; message: string };
    type FormErrors = { name?: string; email?: string; message?: string };
    const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email.";
        if (!form.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-white transition-colors duration-500">
            <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto px-4 py-12 md:py-24 gap-10 md:gap-20 items-center justify-center">
                {/* Contact Options */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left animate-fadeInUp">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Get in Touch</h2>
                    <div className="flex flex-col gap-6 w-full">
                        <a href="mailto:syedyawaraliturab@gmail.com" className="group flex items-center gap-4 py-2 px-4 rounded-xl bg-white shadow hover:scale-105 hover:shadow-blue-400 transition-all duration-300">
                            <MdEmail size={28} className="text-blue-500 group-hover:drop-shadow-[0_0_8px_#3b82f6]" />
                            <span className="font-semibold text-gray-800">syedyawaraliturab@gmail.com</span>
                        </a>
                        <a href="tel:+923232159603" className="group flex items-center gap-4 py-2 px-4 rounded-xl bg-white shadow hover:scale-105 hover:shadow-green-400 transition-all duration-300">
                            <FaPhone size={28} className="text-green-500 group-hover:drop-shadow-[0_0_8px_#22c55e]" />
                            <span className="font-semibold text-gray-800">+92 323-215-9603</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ali-turab-naqvi/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-2 px-4 rounded-xl bg-white shadow hover:scale-105 hover:shadow-blue-400 transition-all duration-300">
                            <FaLinkedin size={28} className="text-blue-700 group-hover:drop-shadow-[0_0_8px_#2563eb]" />
                            <span className="font-semibold text-gray-800">LinkedIn</span>
                        </a>
                        <a href="https://github.com/aliturab99" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-2 px-4 rounded-xl bg-white shadow hover:scale-105 hover:shadow-gray-400 transition-all duration-300">
                            <FaGithub size={28} className="text-gray-900 group-hover:drop-shadow-[0_0_8px_#6b7280]" />
                            <span className="font-semibold text-gray-800">GitHub</span>
                        </a>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="w-full md:w-2/3 flex flex-col items-center animate-fadeInUp delay-150">
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.message ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                            <button
                                type="submit"
                                className="mt-2 px-6 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:scale-105 hover:shadow-blue-400 transition-all duration-300"
                            >
                                Send ➤
                            </button>
                            {submitted && <span className="text-green-500 text-sm mt-2">Message sent! Thank you.</span>}
                        </form>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .animate-fadeInUp {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1) forwards;
                }
                .animate-fadeInUp.delay-150 {
                    animation-delay: 0.15s;
                }
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Contact;
