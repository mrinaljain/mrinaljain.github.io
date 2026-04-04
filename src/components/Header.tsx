"use client"
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import ThemeToggle from "./ThemeToggle";

import Link from "next/link";

const navLinks = [
   { label: "Home", href: "/" },
   { label: "Gallery", href: "/gallery" },
   { label: "Resume", href: "/resume" },
   { label: "Videos", href: "/videos" },
   { label: "Talks", href: "/talk" },
   { label: "Blog", href: "/post" },
];

export default function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();
   const isHomePage = pathname === "/";
   const useSolidHeader = isScrolled || !isHomePage;

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 100) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 
        ${useSolidHeader ? "backdrop-blur-lg bg-white/65 dark:bg-black/40 shadow-lg" : "opacity-0"}
      `}
      >
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
               <span className="text-slate-900 dark:text-white text-2xl font-bold drop-shadow-md">Mrinal Jain</span>
            </Link>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-6 text-slate-900 dark:text-white text-base font-semibold drop-shadow-md">
               {navLinks.map(({ label, href }) => {
                  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

                  return (
                     <Link
                        key={href}
                        href={href}
                        className={isActive
                           ? "text-blue-600 dark:text-blue-400"
                           : "hover:text-slate-600 dark:hover:text-slate-300"}
                     >
                        {label}
                     </Link>
                  );
               })}
            </nav>

            <div className="hidden md:block">
               <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
               <ThemeToggle />
               <button
                  onClick={() => setIsOpen(true)}
                  aria-label="Open menu"
                  className="text-slate-900 dark:text-white text-2xl"
               >
                  <FaBars />
               </button>
            </div>
         </div>

         {/* Mobile Dropdown Menu */}
         <div
                  className={`fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/90 text-slate-900 dark:text-white 
          flex flex-col items-center justify-center space-y-8 text-2xl font-semibold 
          transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
         >
            <button
               onClick={() => setIsOpen(false)}
               aria-label="Close menu"
               className="absolute top-6 right-6 text-slate-900 dark:text-white text-3xl"
            >
               <FaTimes />
            </button>

            {navLinks.map(({ label, href }) => {
               const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

               return (
                  <Link
                     key={href}
                     href={href}
                     onClick={() => setIsOpen(false)}
                     className={isActive ? "text-blue-600 dark:text-blue-400" : undefined}
                  >
                     {label}
                  </Link>
               );
            })}
         </div>
      </header>
   );
}
