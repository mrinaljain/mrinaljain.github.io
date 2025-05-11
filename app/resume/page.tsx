

import { Metadata } from "next";
import { structuredResumeJsonLd } from "@/data/jsonLdResume";
import Script from "next/script";
import Reffrences from "@/components/resume/Reffrences";
import Hobbies from "@/components/resume/Hobbies";
import Skills from "@/components/resume/Skills";
import Education from "@/components/resume/Education";
import Contact from "@/components/resume/Contact";
import Volunteer from "@/components/resume/Volunteer";
import Awards from "@/components/resume/Awards";
import Experience from "@/components/resume/Experience";
import "../../components/resume/Resume.css"
import About from "@/components/resume/About";
import DownloadResume from "@/components/resume/DownloadResume";
import Header from "@/components/resume/Header";

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
