"use client"
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const path = usePathname();
   const active = path.split("/")[1];
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 100) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      console.log("path", path);

      return () => window.removeEventListener("scroll", handleScroll);
   }, [path]);

   return (
      <header
         className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 
        ${isScrolled ? "backdrop-blur-lg bg-black/30 shadow-lg" : "opacity-0"}
      `}
      >
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
               <span className="text-white text-2xl font-bold drop-shadow-md">Mrinal Jain</span>
            </Link>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex space-x-8 text-white text-lg font-semibold drop-shadow-md">
               <Link href="/" className={`hover:text-gray-300 ${active === '' ? "text-purple-400" : ""} `}>Home</Link>
               <Link href="/projects" className="hover:text-gray-300">Projects</Link>
               <Link href="/talks" className="hover:text-gray-300">Talks</Link>
               <Link href="/resume" className="hover:text-gray-300">Resume</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="md:hidden text-white text-2xl"
            >
               {isOpen ? <FaTimes /> : <FaBars />}
            </button>
         </div>

         {/* Mobile Dropdown Menu */}
         <div
            className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white 
          flex flex-col items-center justify-center space-y-8 text-2xl font-semibold 
          transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
         >
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
         </div>
      </header>
   );
}
