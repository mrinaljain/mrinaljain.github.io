import {
   faJs,
   faReact,
   faNodeJs,
   faHtml5,
   faCss,
   faAws,
   faGitAlt,
   faAngular,
   faBootstrap,
   faDartLang,
   faFlutter,
   IconDefinition
} from "@fortawesome/free-brands-svg-icons";

export interface ExperienceItem {
   company: string;
   logo: string;
   designation: string;
   location: string;
   year: string;
   projects: string[];
   technologies: IconDefinition[];
}

export const experienceData: ExperienceItem[] = [
   {
      company: "Lowe's",
      logo: "/lowes-logo.png",
      designation: "Senior Flutter Developer",
      location: "Charlotte, NC",
      year: "June 2025 – Present",
      projects: [

      ],
      technologies: [faFlutter, faDartLang, faJs, faNodeJs, faGitAlt]

   },
   {
      company: "American Express",
      logo: "/amex-logo.jpeg",
      designation: "Software Developer",
      location: "New York, NY",
      year: "Apr 2024 – June 2025",
      projects: [
         "Migrated legacy frontend code from jQuery to React, improving scalability and feature development speed.",
         "Implemented Jest and Cypress tests, increasing test coverage from 5% to 50% and reducing production bugs by 40%.",
         "Led a cross-functional team in Agile development, ensuring on-time project delivery.",
         "Built CI/CD pipelines for 6 platforms, reducing release time by 40% and increasing release frequency by 30%.",
         "Implemented a microservices architecture with NodeJS, Express, and MongoDB, cutting app response time by 20%."
      ],
      technologies: [faReact, faJs, faNodeJs, faGitAlt]

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
      technologies: [faFlutter, faReact, faNodeJs, faAws, faGitAlt, faDartLang]

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
      technologies: [faAngular, faNodeJs, faGitAlt, faHtml5, faBootstrap, faCss,]

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
      technologies: [faHtml5, faBootstrap, faCss, faGitAlt]

   }
];