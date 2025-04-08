"use client";

import React, { JSX } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

interface SocialLink {
   id: string;
   href: string;
   icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
   { id: "linkedin", href: "https://www.linkedin.com/in/mrinaljain", icon: <FaLinkedin /> },
   { id: "github", href: "https://github.com/mrinaljain", icon: <FaGithub /> },
   { id: "twitter", href: "https://twitter.com/mrinaljain", icon: <FaTwitter /> },
   { id: "email", href: "mailto:jain.mrinal140@gmail.com", icon: <FaEnvelope /> },
   { id: "facebook", href: "https://www.facebook.com/TheIntrovertInfluencer/", icon: <FaFacebook /> },
];
function SocialLinks() {
  return (
      < div className = "mt-6 flex justify-center gap-6" >
      {
         socialLinks.map((link) => (
            <a
               key={link.id}
               href={link.href}
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 text-2xl transition"
            >
               {link.icon}
            </a>
         ))
      }
      </div >
  )
}

export default SocialLinks