

import { Metadata } from "next";
import { structuredResumeJsonLd } from "@/data/jsonLdResume";
import Script from "next/script";
import ResumeSection from "@/components/ResumeSection";

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
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredResumeJsonLd) }}
         />

         <ResumeSection />

      </>
   );
}
