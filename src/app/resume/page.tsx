

import { Metadata } from "next";
import Script from "next/script";
import ResumeContent from "@/components/resume/ResumeContent";
import { getGitHubUser } from "@/lib/github";

import { structuredResumeJsonLd } from "@/data/jsonLdResume";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
   title: "Resume",
   description: "Mrinal Jain's resume as a Software Engineer with experience in OTT, B2C, Flutter, React, Node.js.",
   path: "/resume",
   type: "article",
});

export default async function Resume() {
   const GITHUB_USERNAME = 'mrinaljain';
   const gitHubUser = await getGitHubUser(GITHUB_USERNAME);
   
   return (
      <>
         <Script
            id="jsonld-resume"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredResumeJsonLd) }}
         />

         <ResumeContent gitHubUser={gitHubUser} />
      </>
   );
}
