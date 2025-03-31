"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Experience.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
interface Experience {
   company: string;
   logo: string;
   designation: string;
   location: string;
   year: string;
   projects: string[];
}
const ExperienceTimeline = () => {
   const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      sectionsRef.current.forEach((section, index) => {
         if (section) {
            gsap.fromTo(
               section,
               { opacity: 0, y: 100, scale: 0.9 },
               {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                  delay: index * 0.2,
                  scrollTrigger: {
                     trigger: section,
                     start: "top 85%",
                     end: "top 50%",
                     toggleActions: "play none none none",
                  },
               }
            );
         }
      });
   }, []);

   const experienceData: Experience[] = [
      {
         company: "AMEX",
         logo: "path/to/amex-logo.png",
         designation: "Software Developer",
         location: "Phoenix, AZ",
         year: "Apr 2024 – Present",
         projects: [
            "Migrated legacy frontend code from jQuery to React, improving scalability and feature development speed.",
            "Implemented Jest and Cypress tests, increasing test coverage from 5% to 50% and reducing production bugs by 40%.",
            "Led a cross-functional team in Agile development, ensuring on-time project delivery.",
            "Built CI/CD pipelines for 6 platforms, reducing release time by 40% and increasing release frequency by 30%.",
            "Implemented a microservices architecture with NodeJS, Express, and MongoDB, cutting app response time by 20%."
         ]
      },
      {
         company: "STAGE OTT",
         logo: "path/to/stage-logo.png",
         designation: "Senior Software Developer",
         location: "Noida, India",
         year: "May 2019 – Mar 2024",
         projects: [
            "Implemented secure video streaming with m3u8 signed cookies and DRM, reducing network latency by 40%.",
            "Developed deep link journey tracking for Facebook and Google, cutting customer acquisition costs by 20%.",
            "Created a user analytics system with Apache Airflow, improving engagement by 30%.",
            "Engineered an in-house payment aggregator, boosting successful payments by 35% and reducing drop-off by 20%.",
            "Built an A/B testing mechanism for payment flows, trailers, and thumbnails, increasing conversion rates by 25%."
         ]
      },
      {
         company: "WittyFeed",
         logo: "path/to/wittyfeed-logo.png",
         designation: "Senior Web Developer",
         location: "Indore, India",
         year: "Feb 2017 – Apr 2019",
         projects: [
            "Developed a high-traffic website using React, handling 200,000 concurrent users with a PageSpeed score of 99.",
            "Built an in-house blog editor with React and Redux, reducing blog creation time by 50%.",
            "Standardized codebases for 12-15 websites, reducing launch time by 60%.",
            "Restructured a TypeScript-based user dashboard integrating Facebook and Twitter APIs for content performance tracking."
         ]
      },
      {
         company: "Arya.ai (Axis Bank)",
         logo: "path/to/aryaai-logo.png",
         designation: "Web Developer",
         location: "Mumbai, India",
         year: "Apr 2016 – Jan 2017",
         projects: [
            "Developed a signature detection system in React for document-based signature extraction.",
            "Integrated Arya’s KYC API for seamless ID verification, streamlining the KYC process.",
            "Redesigned a cheque scanning UI, improving manual processing efficiency by 40%."
         ]
      },
      {
         company: "YallaSpree",
         logo: "path/to/yallaspree-logo.png",
         designation: "Junior Frontend Engineer",
         location: "Hyderabad, India",
         year: "Jan 2015 – Apr 2016",
         projects: [
            "Developed a high-performance landing page, achieving a Google PageSpeed score of 99 and reducing bounce rates by 20%.",
            "Built HTML-based email marketing templates, improving top-of-funnel conversion.",
            "Enhanced user interaction features for comments, increasing time spent on the platform by 30%."
         ]
      }
   ];

   return (
      <div className={styles.timelineContainer}>
         {experienceData.map((exp, index) => (
            <div
               key={index}
               ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
               }}
               className={styles.experienceCard}
            >
               <div className={styles.cardHeader}>
                  <Image src={exp.logo} alt={`${exp.company} logo`} className={styles.companyLogo} />
                  <div>
                     <h2 className={styles.companyName}>{exp.company}</h2>
                     <p className={styles.year}>{exp.year}</p>
                  </div>
               </div>
               <h3 className={styles.role}>{exp.designation}</h3>
               <p className={styles.location}>{exp.location}</p>
               <ul className={styles.projectList}>
                  {exp.projects.map((point, idx) => (
                     <li key={idx}>{point}</li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
   );
};

export default ExperienceTimeline;
