/* eslint-disable react/no-unescaped-entities */


import { Metadata } from "next";

export const metadata: Metadata ={
   title: "Resume",
   description: "Mrinal Jain's resume as a Software Engineer with experience in OTT, B2C, Flutter, React, Node.js.",
}
export default function Resume() {
   // const jsonLdData = {
   //    "@context": "https://schema.org",
   //    "@type": "Person",
   //    "name": "Mrinal Jain",
   //    "jobTitle": "Software Developer",
   //    "url": "https://mrinaljain.com",
   //    "sameAs": [
   //       "https://www.linkedin.com/in/mrinaljain",
   //       "https://github.com/mrinaljain"
   //    ],
   //    "contactPoint": {
   //       "@type": "ContactPoint",
   //       "telephone": "+1-732-829-8338",
   //       "contactType": "customer service",
   //       "areaServed": "US",
   //       "availableLanguage": "English"
   //    },
   //    "address": {
   //       "@type": "PostalAddress",
   //       "streetAddress": "Brunswick, NJ",
   //       "addressCountry": "US"
   //    },
   //    "workExperience": [
   //       {
   //          "@type": "Organization",
   //          "name": "AMEX",
   //          "jobTitle": "Software Developer",
   //          "startDate": "2024-04-01",
   //          "endDate": "Present",
   //          "description": "Migrated frontend from jQuery to React, improving scalability and accelerating feature deployment, now supporting 1M+ user interactions monthly."
   //       },
   //       {
   //          "@type": "Organization",
   //          "name": "STAGE OTT",
   //          "jobTitle": "Senior Software Developer",
   //          "startDate": "2019-05-01",
   //          "endDate": "2024-03-31",
   //          "description": "Implemented secure video streaming using M3U8 signed cookies and DRM, reducing latency by 40% and featured on Shark Tank India."
   //       }
   //    ],
   //    "skills": [
   //       "JavaScript (ES6+)", "React", "Redux", "TypeScript", "Flutter", "HTML", "CSS", "JQuery", "Tailwind", "Bootstrap", "NodeJS", "Express", "MongoDB"
   //    ],
   //    "education": [
   //       {
   //          "@type": "EducationalOccupationalCredential",
   //          "degree": "Bachelor of Technology in Computer Science",
   //          "school": {
   //             "@type": "CollegeOrUniversity",
   //             "name": "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
   //          },
   //          "startDate": "2011-06-01",
   //          "endDate": "2015-06-01"
   //       }
   //    ]
   // };
   return (
      <>
         {/* <Helmet>
            <script type="application/ld+json">
               {JSON.stringify(jsonLdData)}
            </script>
         </Helmet> */}

         <div className="max-w-screen-xl mx-auto px-4 py-8">
            <header className="text-center">
               <h1 className="text-4xl font-bold text-gray-800">Mrinal Jain</h1>
               <p className="text-lg text-gray-600">Software Developer | FrontEnd & BackEnd Expert</p>
               <p className="mt-2 text-gray-500">
                  Brunswick, NJ · 732-829-8338 · <a href="mailto:jain.mrinal140@gmail.com" className="text-blue-500">jain.mrinal140@gmail.com</a>
               </p>
               <p className="text-gray-500">
                  <a href="https://linkedin.com/in/mrinaljain" className="text-blue-500">linkedin.com/in/mrinaljain</a> ·
                  <a href="https://github.com/mrinaljain" className="text-blue-500">github.com/mrinaljain</a> ·
                  <a href="https://mrinaljain.com" className="text-blue-500">mrinaljain.com</a>
               </p>
            </header>

            <section className="mt-8">
               <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 text-gray-700">
                  <span>JavaScript (ES6+)</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span>TypeScript</span>
                  <span>Flutter</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JQuery</span>
                  <span>Tailwind</span>
                  <span>Bootstrap</span>
                  <span>NodeJS</span>
                  <span>Express</span>
                  <span>MongoDB</span>
               </div>
            </section>

            <section className="mt-8">
               <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>

               <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Software Developer</h3>
                  <p className="text-gray-600">AMEX · Phoenix, AZ | Apr 2024 - Present</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                     <li>Migrated frontend from jQuery to React, improving scalability and accelerating feature deployment, now supporting 1M+ user interactions monthly.</li>
                     <li>Built CI/CD pipelines for 6 platforms, reducing release time by 40% and increasing release frequency by 30%.</li>
                     <li>Optimized app performance with a microservices architecture using NodeJS, Express, and MongoDB, decreasing response time by 20%.</li>
                  </ul>
               </div>

               <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800">Senior Software Developer</h3>
                  <p className="text-gray-600">STAGE OTT · Noida, India | May 2019 - Mar 2024</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                     <li>Implemented secure video streaming using M3U8 signed cookies and DRM, reducing latency by 40% and featured on Shark Tank India.</li>
                     <li>Authored deep link journey tracking for Facebook and Google Ads, lowering customer acquisition costs by 20%.</li>
                     <li>Developed user analytics system with Apache Airflow, boosting user engagement by 30% through actionable user insights.</li>
                     <li>Orchestrated an in-house payment aggregator, enabling users to complete and retry transactions with minimal steps, resulting in a 35% increase in successful payments.</li>
                  </ul>
               </div>
            </section>

            <section className="mt-8">
               <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
               <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology in Computer Science</h3>
                  <p className="text-gray-600">Rajiv Gandhi Proudyogiki Vishwavidyalaya, Indore, India | Jun 2015</p>
               </div>
            </section>

            <section className="mt-8">
               <h2 className="text-2xl font-semibold text-gray-800">Awards & Achievements</h2>
               <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Featured on Shark Tank India Season 2.</li>
                  <li>30 Under 30 Most Influential Techie of Indore.</li>
                  <li>Contributed to Mozilla.org’s Firefox OS project.</li>
                  <li>Featured by Facebook India as Developer Circle Lead of the Year.</li>
                  <li>Featured on Firebase Showcase by Google.</li>
                  <li>Leading Developer community of 5k+ developers in Central India.</li>
                  <li>Founding Organiser of Wittyhacks - Central India's first-ever 36-hour hackathon hosted in Indore.</li>
               </ul>
            </section>
         </div>



      </>
   );
}
