"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
   faAngular,
   faAws,
   faBootstrap,
   faCss,
   faDartLang,
   faFlutter,
   faGitAlt,
   faHtml5,
   faJs,
   faNodeJs,
   faReact,
   type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type {
   Experience,
   ExperienceApiResponse,
   ExperienceTechnologyKey,
} from "@/types/experience";

const technologyIcons: Record<ExperienceTechnologyKey, IconDefinition> = {
   angular: faAngular,
   aws: faAws,
   bootstrap: faBootstrap,
   css: faCss,
   dart: faDartLang,
   flutter: faFlutter,
   git: faGitAlt,
   html5: faHtml5,
   javascript: faJs,
   nodejs: faNodeJs,
   react: faReact,
};

const ExperienceTimeline = () => {
   const [experiences, setExperiences] = useState<Experience[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      let isMounted = true;

      async function fetchExperiences() {
         try {
            const response = await fetch("/api/experiences");

            if (!response.ok) {
               throw new Error("Failed to fetch experiences");
            }

            const data = (await response.json()) as ExperienceApiResponse;

            if (isMounted) {
               setExperiences(data.experiences ?? []);
            }
         } catch (fetchError) {
            if (isMounted) {
               setError(fetchError instanceof Error ? fetchError.message : "Unable to load experiences");
            }
         } finally {
            if (isMounted) {
               setLoading(false);
            }
         }
      }

      fetchExperiences();

      return () => {
         isMounted = false;
      };
   }, []);

   return (
      <section id="experience" className="relative flex flex-col items-center gap-10 p-6">
         <h2 className="text-3xl font-semibold text-center mb-8">Experience</h2>

         {loading && <p className="text-sm text-gray-500">Loading experience...</p>}
         {!loading && error && <p className="text-sm text-red-500">{error}</p>}
         {!loading && !error && experiences.length === 0 && (
            <p className="text-sm text-gray-500">No experience entries available.</p>
         )}

         {experiences.map((exp) => (
            <article
               key={exp.id}
               className="relative w-full md:w-2/3 bg-white shadow-lg rounded-lg p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-[-10px_10px_15px_-4px_rgba(0,0,0,0.25)]"
               style={exp.accentColor ? { borderTop: `4px solid ${exp.accentColor}` } : undefined}
            >
               <div className="flex items-center gap-4">
                  <Image src={exp.logo} width={56} height={56} alt={exp.company} className="w-14 h-14 rounded-md" />
                  <div>
                     {exp.companyUrl ? (
                        <a
                           href={exp.companyUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl font-bold hover:underline"
                        >
                           {exp.company}
                        </a>
                     ) : (
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                     )}
                     <p className="text-md text-gray-600">{exp.designation}</p>
                     <p className="text-sm text-gray-500">
                        {exp.location} • {exp.yearLabel}
                     </p>
                  </div>
               </div>

               {exp.summary && (
                  <p className="mt-4 text-sm text-gray-700">{exp.summary}</p>
               )}

               <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                  {exp.projects.map((project) => (
                     <li key={project}>{project}</li>
                  ))}
               </ul>

               <div className="flex flex-wrap gap-4 mt-4 text-blue-600 text-lg">
                  {exp.technologyKeys.map((key) => {
                     const icon = technologyIcons[key];
                     if (!icon) {
                        return null;
                     }

                     return <FontAwesomeIcon key={key} icon={icon} className="w-7 h-7" title={key} />;
                  })}
               </div>
            </article>
         ))}
      </section>
   );
};

export default ExperienceTimeline;
