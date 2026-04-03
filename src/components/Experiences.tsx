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
import connectDB from "@/lib/db/mongodb";
import { ExperienceModel } from "@/models/Experience";

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

type ExperienceDocument = {
   _id: { toString(): string };
   company: string;
   slug: string;
   logo: string;
   companyUrl?: string;
   designation: string;
   employmentType?: string;
   location: string;
   yearLabel: string;
   startDate?: Date;
   endDate?: Date | null;
   isCurrent?: boolean;
   summary?: string;
   projects?: string[];
   technologyKeys?: ExperienceTechnologyKey[];
   order: number;
   accentColor?: string;
   status: "draft" | "published";
   isFeatured?: boolean;
};

function serializeExperience(doc: ExperienceDocument): Experience {
   return {
      id: doc._id.toString(),
      company: doc.company,
      slug: doc.slug,
      logo: doc.logo,
      companyUrl: doc.companyUrl,
      designation: doc.designation,
      employmentType: doc.employmentType,
      location: doc.location,
      yearLabel: doc.yearLabel,
      startDate: doc.startDate ? new Date(doc.startDate).toISOString() : undefined,
      endDate: doc.endDate ? new Date(doc.endDate).toISOString() : null,
      isCurrent: doc.isCurrent,
      summary: doc.summary,
      projects: doc.projects ?? [],
      technologyKeys: doc.technologyKeys ?? [],
      order: doc.order,
      accentColor: doc.accentColor,
      status: doc.status,
      isFeatured: doc.isFeatured,
   };
}

async function getExperiences(): Promise<ExperienceApiResponse> {
   try {
      await connectDB();
      const docs = await ExperienceModel.find({ status: "published" })
         .sort({ order: 1, startDate: -1, createdAt: -1 })
         .lean<ExperienceDocument[]>();

      return {
         ok: true,
         experiences: docs.map(serializeExperience),
      };
   } catch {
      return {
         ok: false,
         experiences: [],
      };
   }
}

const ExperienceTimeline = async () => {
   const { ok, experiences } = await getExperiences();

   return (
      <div className="relative flex flex-col items-center gap-10 p-6">
         <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 bg-black rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
               Experience
            </h2>
         </div>

         {!ok && <p className="text-sm text-red-500">Unable to load experiences</p>}
         {ok && experiences.length === 0 && (
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
      </div>
   );
};

export default ExperienceTimeline;
