
import Image from "next/image";
import { experienceData } from "@/data/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ExperienceTimeline = () => {
   return (
      <div className="relative flex flex-col items-center gap-10 p-6">
         <h2 className="text-3xl font-semibold text-center mb-8">Experience</h2>

         {experienceData.map((exp, index) => (
            <div
               key={index}
               className="relative w-full md:w-2/3 bg-white shadow-lg rounded-lg p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-[-10px_10px_15px_-4px_rgba(0,0,0,0.25)]"
            >
               {/* Company Info Section */}
               <div className="flex items-center gap-4">
                  <Image src={exp.logo} width={56} height={56} alt={exp.company} className="w-14 h-14 rounded-md" />
                  <div>
                     <h2 className="text-xl font-bold">{exp.company}</h2>
                     <h3 className="text-md text-gray-600">{exp.designation}</h3>
                     <p className="text-sm text-gray-500">{exp.location} • {exp.year}</p>
                  </div>
               </div>

               {/* Project Highlights */}
               <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                  {exp.projects.map((project, idx) => (
                     <li key={idx}>{project}</li>
                  ))}
               </ul>

               {/* Technologies Used */}
               <div className="flex flex-wrap gap-4 mt-4 text-blue-600 text-lg">
                  {exp.technologies.map((icon, idx) => (
                     <FontAwesomeIcon key={idx} icon={icon} className="w-7 h-7" />
                  ))}
               </div>
            </div>
         ))}
      </div>


   );
};

export default ExperienceTimeline;
