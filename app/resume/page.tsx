

import { Metadata } from "next";
import { structuredResumeJsonLd } from "@/data/jsonLdResume";
import Script from "next/script";
import Reffrences from "@/components/resume/Reffrences";
import Hobbies from "@/components/resume/Hobbies";
import Skills from "@/components/resume/Skills";
import Education from "@/components/resume/Education";
import Contact from "@/components/resume/Contact";
import Projects from "@/components/resume/Projects";
import Volunteer from "@/components/resume/Volunteer";
import Awards from "@/components/resume/Awards";
import Experience from "@/components/resume/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "../../components/resume/Resume.css"

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
                  <div id="photoHeader" className="text-center">
                     {/* PHOTO (AVATAR) */}
                     <div id="photo" className="inline-block justify-center mb-4 w-[162px] h-[162px]  rounded-full overflow-hidden p-[5px] bg-[#334960]">
                        <Image
                           src="./mrinal_jain.jpeg"
                           height={160}
                           width={160}
                           alt="avatar"
                           className="rounded-full border-4 shadow-md"
                        />
                     </div>
                     <div id="textHeader">
                        <h1 className=" ">
                           Mrinal Jain
                           <br />
                           <span className="">Web Developer</span>
                        </h1>
                     </div>
                  </div>
               </div>
               <div className="flex flex-wrap">
                  <div className="w-full sm:w-7/12 px-3.5 flex flex-col">
                     {/* ABOUT ME */}
                     <div className="box">
                        <h2 className='flex items-center mt-5 mb-2.5'>
                           <FontAwesomeIcon icon={faUser} className="inline-block w-5 h-5 mr-1.5" />
                           About
                        </h2>
                        <p>
                           I'm a full stack web developer who can build web and mobile apps from the ground up.
                           I've worked mostly at startups so I am used to wearing many hats. I am
                           a very product focused developer who prioritizes user feedback first
                           and foremost. I'm generally very flexible when investigating new roles.
                           I'm skilled in building developer communities, creating technical content, and delivering workshops, demos, and
                           open-source contributions.
                        </p>
                     </div>
                     <Experience />
                     <Awards />
                     <Volunteer />
                     <Projects />
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
         </div>

      </>
   );
}
