import type { ExperienceStatus, ExperienceTechnologyKey } from "@/types/experience";

export interface ExperienceSeedItem {
   company: string;
   logo: string;
   companyUrl?: string;
   designation: string;
   employmentType?: string;
   location: string;
   yearLabel: string;
   startDate: string;
   endDate?: string | null;
   isCurrent?: boolean;
   summary: string;
   projects: string[];
   technologyKeys: ExperienceTechnologyKey[];
   order: number;
   accentColor?: string;
   status?: ExperienceStatus;
   isFeatured?: boolean;
}

export const experienceSeedData: ExperienceSeedItem[] = [
   {
      company: "AMEX",
      logo: "/amex-logo.jpeg",
      companyUrl: "https://www.americanexpress.com/",
      designation: "Software Developer",
      employmentType: "Full-time",
      location: "Phoenix, AZ",
      yearLabel: "Apr 2024 – Present",
      startDate: "2024-04-01T00:00:00.000Z",
      endDate: null,
      isCurrent: true,
      summary: "Building scalable frontend and platform systems with a focus on quality, release velocity, and product reliability.",
      projects: [
         "Migrated legacy frontend code from jQuery to React, improving scalability and feature development speed.",
         "Implemented Jest and Cypress tests, increasing test coverage from 5% to 50% and reducing production bugs by 40%.",
         "Led a cross-functional team in Agile development, ensuring on-time project delivery.",
         "Built CI/CD pipelines for 6 platforms, reducing release time by 40% and increasing release frequency by 30%.",
         "Implemented a microservices architecture with NodeJS, Express, and MongoDB, cutting app response time by 20%."
      ],
      technologyKeys: ["react", "javascript", "nodejs", "git"],
      order: 1,
      accentColor: "#2563eb",
      status: "published",
      isFeatured: true,
   },
   {
      company: "STAGE OTT",
      logo: "/stage-logo.jpg",
      companyUrl: "https://www.stage.in/",
      designation: "Senior Software Developer",
      employmentType: "Full-time",
      location: "Noida, India",
      yearLabel: "May 2019 – Mar 2024",
      startDate: "2019-05-01T00:00:00.000Z",
      endDate: "2024-03-31T00:00:00.000Z",
      isCurrent: false,
      summary: "Led consumer OTT product engineering across streaming, growth, analytics, and payments for a high-scale media platform.",
      projects: [
         "Implemented secure video streaming with m3u8 signed cookies and DRM, reducing network latency by 40%.",
         "Developed deep link journey tracking for Facebook and Google, cutting customer acquisition costs by 20%.",
         "Created a user analytics system with Apache Airflow, improving engagement by 30%.",
         "Engineered an in-house payment aggregator, boosting successful payments by 35% and reducing drop-off by 20%.",
         "Built an A/B testing mechanism for payment flows, trailers, and thumbnails, increasing conversion rates by 25%."
      ],
      technologyKeys: ["flutter", "react", "nodejs", "aws", "git", "dart"],
      order: 2,
      accentColor: "#f97316",
      status: "published",
      isFeatured: true,
   },
   {
      company: "WittyFeed",
      logo: "/wittyfeed-logo.jpg",
      companyUrl: "https://www.wittyfeed.com/",
      designation: "Senior Web Developer",
      employmentType: "Full-time",
      location: "Indore, India",
      yearLabel: "Feb 2017 – Apr 2019",
      startDate: "2017-02-01T00:00:00.000Z",
      endDate: "2019-04-30T00:00:00.000Z",
      isCurrent: false,
      summary: "Built and standardized high-traffic consumer web products with strong performance, editorial tooling, and analytics integrations.",
      projects: [
         "Developed a high-traffic website using React, handling 200,000 concurrent users with a PageSpeed score of 99.",
         "Built an in-house blog editor with React and Redux, reducing blog creation time by 50%.",
         "Standardized codebases for 12-15 websites, reducing launch time by 60%.",
         "Restructured a TypeScript-based user dashboard integrating Facebook and Twitter APIs for content performance tracking."
      ],
      technologyKeys: ["react", "nodejs", "aws", "git"],
      order: 3,
      accentColor: "#16a34a",
      status: "published",
      isFeatured: true,
   },
   {
      company: "Arya.ai (Axis Bank)",
      logo: "/aryaai-logo.png",
      companyUrl: "https://arya.ai/",
      designation: "Web Developer",
      employmentType: "Full-time",
      location: "Mumbai, India",
      yearLabel: "Apr 2016 – Jan 2017",
      startDate: "2016-04-01T00:00:00.000Z",
      endDate: "2017-01-31T00:00:00.000Z",
      isCurrent: false,
      summary: "Worked on fintech interfaces and KYC workflows, improving signature detection and document-processing efficiency.",
      projects: [
         "Developed a signature detection system in React for document-based signature extraction.",
         "Integrated Arya’s KYC API for seamless ID verification, streamlining the KYC process.",
         "Redesigned a cheque scanning UI, improving manual processing efficiency by 40%."
      ],
      technologyKeys: ["angular", "nodejs", "git", "html5", "bootstrap", "css"],
      order: 4,
      accentColor: "#7c3aed",
      status: "published",
      isFeatured: true,
   },
   {
      company: "YallaSpree",
      logo: "/yallaspree-logo.jpeg",
      companyUrl: "https://www.linkedin.com/company/yallaspree/",
      designation: "Junior Frontend Engineer",
      employmentType: "Full-time",
      location: "Hyderabad, India",
      yearLabel: "Jan 2015 – Apr 2016",
      startDate: "2015-01-01T00:00:00.000Z",
      endDate: "2016-04-30T00:00:00.000Z",
      isCurrent: false,
      summary: "Focused on frontend performance, landing pages, lifecycle communications, and core engagement features.",
      projects: [
         "Developed a high-performance landing page, achieving a Google PageSpeed score of 99 and reducing bounce rates by 20%.",
         "Built HTML-based email marketing templates, improving top-of-funnel conversion.",
         "Enhanced user interaction features for comments, increasing time spent on the platform by 30%."
      ],
      technologyKeys: ["html5", "bootstrap", "css", "git"],
      order: 5,
      accentColor: "#db2777",
      status: "published",
      isFeatured: true,
   }
];