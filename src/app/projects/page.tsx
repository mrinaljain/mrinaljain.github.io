import ProjectCard from "@/components/ProjectCard";
import { getBaseUrl } from "@/lib/url";
import type { Project } from "@/types/project";

async function getProjects(): Promise<Project[]> {
   try {
      const res = await fetch(`${getBaseUrl()}/api/projects`, {
         next: { revalidate: 60 },
      });

      if (!res.ok) return [];

      const data = await res.json();
      return (data?.projects ?? []) as Project[];
   } catch {
      return [];
   }
}

export default async function ProjectPage() {
   const projects = await getProjects();

   return (
      <div className="min-h-screen bg-slate-50 px-6 py-12">
         <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">All Creative Works.</h1>
            <p className="mt-3 text-slate-600">A collection of products I built across web and mobile.</p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} showCodeButton />
               ))}
            </div>
         </div>
      </div>
   );
}
 