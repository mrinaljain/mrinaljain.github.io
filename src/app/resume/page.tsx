

import { Metadata } from "next";
import { structuredResumeJsonLd } from "@/src/data/jsonLdResume";
import Script from "next/script";
import Reffrences from "@/src/components/resume/Reffrences";
import Hobbies from "@/src/components/resume/Hobbies";
import Skills from "@/src/components/resume/Skills";
import Education from "@/src/components/resume/Education";
import Contact from "@/src/components/resume/Contact";
import Volunteer from "@/src/components/resume/Volunteer";
import Awards from "@/src/components/resume/Awards";
import Experience from "@/src/components/resume/Experience";
import "../../components/resume/Resume.css"
import About from "@/src/components/resume/About";
import DownloadResume from "@/src/components/resume/DownloadResume";
import Header from "@/src/components/resume/Header";

export const metadata: Metadata = {
   title: "Resume",
   description: "Mrinal Jain's resume as a Software Engineer with experience in OTT, B2C, Flutter, React, Node.js.",
}
export default function Resume() {
   return (
      <>
         <Script
            id="jsonld-resume"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredResumeJsonLd) }}
         />

         <div className="body w-auto min-h-screen pt-1">
            <div className="container mx-auto">
               <div className="w-full flex flex-col">
                  <Header />
               </div>
               <div className="flex flex-wrap">
                  <div className="w-full sm:w-7/12 px-3.5 flex flex-col">
                     <About />
                     <Experience />
                     <Awards />
                     <Volunteer />
                     {/* <Projects /> */}
                  </div>
                  <div className="w-full sm:w-5/12 px-3.5 flex flex-col">
                     <Contact />
                     <Education />
                     <Skills />
                     <Hobbies />
                     <Reffrences />
                  </div>
               </div>
            </div>
            <DownloadResume />
         </div>
      </>
   );
}
