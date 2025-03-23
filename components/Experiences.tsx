import Image from "next/image";

const experiences = [
   {
      id: 1,
      company: "STAGE",
      role: "Engineering Manager",
      duration: "2022 - Present",
      logo: "/stage-logo.png",
      description: "Leading frontend architecture, optimizing performance, and ensuring seamless user experience.",
   },
   {
      id: 2,
      company: "Meta (Facebook)",
      role: "Community Manager",
      duration: "2020 - 2022",
      logo: "/meta-logo.png",
      description: "Managed developer communities, organized events, and enhanced engagement strategies.",
   },
   {
      id: 3,
      company: "Mozilla",
      role: "Developer Advocate",
      duration: "2018 - 2020",
      logo: "/mozilla-logo.png",
      description: "Promoted open web technologies and contributed to developer outreach programs.",
   },
];

export default function Experiences() {
   return (
      <section className="bg-gray-900 py-16 px-6 md:px-12">
         <h2 className="text-4xl font-bold text-center text-white mb-10">
            Experience
         </h2>

         <div className="relative border-l-4 border-gray-500 ml-5">
            {experiences.map((exp, index) => (
               <div key={exp.id} className="mb-10 ml-6 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 top-2 w-10 h-10 bg-white border-4 border-gray-500 rounded-full flex items-center justify-center">
                     <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={30}
                        height={30}
                        className="rounded-full"
                     />
                  </div>

                  {/* Card */}
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-lg shadow-lg transition hover:scale-105 hover:bg-opacity-20">
                     <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                     <p className="text-sm text-gray-300">{exp.company}</p>
                     <p className="text-sm text-gray-400">{exp.duration}</p>
                     <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
