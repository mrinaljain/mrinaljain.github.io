"use client";

import "../../components/resume/Resume.css";
import Reffrences from "@/components/resume/Reffrences";
import Hobbies from "@/components/resume/Hobbies";
import Skills from "@/components/resume/Skills";
import Education from "@/components/resume/Education";
import Contact from "@/components/resume/Contact";
import Volunteer from "@/components/resume/Volunteer";
import Awards from "@/components/resume/Awards";
import Experience from "@/components/resume/Experience";
import About from "@/components/resume/About";
import DownloadResume from "@/components/resume/DownloadResume";
import Header from "@/components/resume/Header";
import { GitHubUser } from "@/lib/github";

interface ResumeContentProps {
  gitHubUser: GitHubUser | null;
}

export default function ResumeContent({ gitHubUser }: ResumeContentProps) {
  return (
    <div className="body w-auto min-h-screen pt-1">
      <div className="container mx-auto">
        <div className="w-full flex flex-col">
          <Header gitHubUser={gitHubUser} />
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
  );
}
