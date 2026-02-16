import TerminalProjectCard from "@/components/TerminalProjectCard";
import { sideProjects } from "@/data/projects";

export default function ProjectPage() {
   return (
      <div className="min-h-screen bg-black text-white py-12 px-6">
         <h1 className="text-3xl font-bold mb-6">💻 Side Projects</h1>

         <div className="grid md:grid-cols-2 gap-6">
            {sideProjects.map((project) => (
               <TerminalProjectCard key={project.command} {...project} />
            ))}
         </div>
      </div>
   );
}
 