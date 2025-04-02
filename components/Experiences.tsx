"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./Experience.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faJs,
   faReact,
   faNodeJs,
   faHtml5,
   faCss3,
   faAws,
   faGitAlt,
   faDocker,
   faBootstrap,
   faPython,
   IconDefinition
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);
interface Experience {
   company: string;
   logo: string;
   designation: string;
   location: string;
   year: string;
   projects: string[];
   technologies: IconDefinition[];
}
const ExperienceTimeline = () => {
   const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      sectionsRef.current.forEach((section,) => {
         if (section) {
            gsap.fromTo(
               section,
               { opacity: 0, x: 50 },
               {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  scrollTrigger: {
                     trigger: section,
                     start: "top 80%",
                     end: "top 30%",
                     scrub: true
                  }
               }
            );
         }
      });
   }, []);

   // const scrollToSection = (index: number) => {
   //    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
   // };
   const experienceData: Experience[] = [
      {
         company: "AMEX",
         logo: "/amex-logo.jpeg",
         designation: "Software Developer",
         location: "Phoenix, AZ",
         year: "Apr 2024 – Present",
         projects: [
            "Migrated legacy frontend code from jQuery to React, improving scalability and feature development speed.",
            "Implemented Jest and Cypress tests, increasing test coverage from 5% to 50% and reducing production bugs by 40%.",
            "Led a cross-functional team in Agile development, ensuring on-time project delivery.",
            "Built CI/CD pipelines for 6 platforms, reducing release time by 40% and increasing release frequency by 30%.",
            "Implemented a microservices architecture with NodeJS, Express, and MongoDB, cutting app response time by 20%."
         ],
         technologies: [faReact, faJs, faNodeJs, faAws, faGitAlt]

      },
      {
         company: "STAGE OTT",
         logo: "/stage-logo.jpg",
         designation: "Senior Software Developer",
         location: "Noida, India",
         year: "May 2019 – Mar 2024",
         projects: [
            "Implemented secure video streaming with m3u8 signed cookies and DRM, reducing network latency by 40%.",
            "Developed deep link journey tracking for Facebook and Google, cutting customer acquisition costs by 20%.",
            "Created a user analytics system with Apache Airflow, improving engagement by 30%.",
            "Engineered an in-house payment aggregator, boosting successful payments by 35% and reducing drop-off by 20%.",
            "Built an A/B testing mechanism for payment flows, trailers, and thumbnails, increasing conversion rates by 25%."
         ],
         technologies: [faReact, faDocker, faNodeJs, faAws, faGitAlt]

      },
      {
         company: "WittyFeed",
         logo: "/wittyfeed-logo.jpg",
         designation: "Senior Web Developer",
         location: "Indore, India",
         year: "Feb 2017 – Apr 2019",
         projects: [
            "Developed a high-traffic website using React, handling 200,000 concurrent users with a PageSpeed score of 99.",
            "Built an in-house blog editor with React and Redux, reducing blog creation time by 50%.",
            "Standardized codebases for 12-15 websites, reducing launch time by 60%.",
            "Restructured a TypeScript-based user dashboard integrating Facebook and Twitter APIs for content performance tracking."
         ],
         technologies: [faReact, faNodeJs, faAws, faGitAlt]

      },
      {
         company: "Arya.ai (Axis Bank)",
         logo: "/aryaai-logo.png",
         designation: "Web Developer",
         location: "Mumbai, India",
         year: "Apr 2016 – Jan 2017",
         projects: [
            "Developed a signature detection system in React for document-based signature extraction.",
            "Integrated Arya’s KYC API for seamless ID verification, streamlining the KYC process.",
            "Redesigned a cheque scanning UI, improving manual processing efficiency by 40%."
         ],
         technologies: [faReact, faNodeJs, faAws, faGitAlt]

      },
      {
         company: "YallaSpree",
         logo: "/yallaspree-logo.jpeg",
         designation: "Junior Frontend Engineer",
         location: "Hyderabad, India",
         year: "Jan 2015 – Apr 2016",
         projects: [
            "Developed a high-performance landing page, achieving a Google PageSpeed score of 99 and reducing bounce rates by 20%.",
            "Built HTML-based email marketing templates, improving top-of-funnel conversion.",
            "Enhanced user interaction features for comments, increasing time spent on the platform by 30%."
         ],
         technologies: [faReact, faPython, faBootstrap, faHtml5, faCss3, faNodeJs, faAws, faGitAlt]

      }
   ];

   return (
      <div className="relative flex flex-col items-center gap-6 p-6">
         {/* Timeline Line */}
         {/* <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-500 rounded-lg"></div> */}
         <h2 className="text-3xl font-semibold text-center mb-8">Experience</h2>

         {experienceData.map((exp, index) => (
            <div key={index} className="relative flex items-start">
               {/* Clickable Timeline Dot */}
               {/* <button
                  className="absolute left-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => scrollToSection(index)}
               ></button> */}

               {/* Experience Card */}
               <div
                  ref={(el) => {
                     if (el) sectionsRef.current[index] = el;
                  }} className={`w-full max-w-xl bg-white shadow-lg rounded-lg p-6 flex transition-transform duration-300 hover:scale-105  ml-6 
                     ${index % 2 === 0 ? "self-start" : "self-end"}`}
               >
                  {/* Left Section: Company Logo */}
                  <div className="w-16 flex-shrink-0">
                     <Image src={exp.logo} width={56} height={56} alt={exp.company} className="w-14 h-14 rounded-md" />
                  </div>

                  {/* Right Section: Details */}
                  <div className="flex-grow ml-4">
                     <h2 className="text-xl font-bold">{exp.company}</h2>
                     <h3 className="text-md text-gray-600">{exp.designation}</h3>
                     <p className="text-sm text-gray-500">{exp.location} • {exp.year}</p>

                     {/* Project Highlights */}
                     <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                        {exp.projects.map((project, idx) => (
                           <li key={idx}>{project}</li>
                        ))}
                     </ul>

                     {/* Technologies Used */}
                     <div className="flex flex-wrap gap-3 mt-4 text-blue-600 text-lg">
                        {exp.technologies.map((icon, idx) => (
                           <FontAwesomeIcon key={idx} icon={icon} className="w-6 h-6" />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ExperienceTimeline;
