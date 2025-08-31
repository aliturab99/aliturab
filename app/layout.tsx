import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Turab",
  description: "Full Stack Developer | React JS | Node JS | Django | Next JS | Express JS | Angular JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white overflow-y-scroll overflow-x-hidden`}
      >
  <Navbar />
  {children}
      </body>
    </html>
  );
}
