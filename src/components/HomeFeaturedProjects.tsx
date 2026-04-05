import ProjectCard from "@/components/ProjectCard";
import { getBaseUrl } from "@/lib/url";
import type { Project } from "@/types/project";
import Link from "next/link";

async function getFeaturedProjects(): Promise<Project[]> {
   try {
      const res = await fetch(`${getBaseUrl()}/api/projects?featured=true&limit=6`, {
         next: { revalidate: 120 },
      });

      if (!res.ok) return [];

      const data = await res.json();
      return (data?.projects ?? []) as Project[];
   } catch {
      return [];
   }
}

const HomeFeaturedProjects = async () => {
   const projects = await getFeaturedProjects();

   return (
      <section className="bg-slate-50 py-16 px-6">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">All Creative Works.</h2>
            <p className="mt-3 text-slate-600">Here are some projects that I have worked on recently.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} showCodeButton={false} />
               ))}
            </div>

            <div className="mt-10 text-center">
               <Link
                  href="/projects"
                  className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
               >
                  Explore more →
               </Link>
            </div>
         </div>
      </section>
   );
};

export default HomeFeaturedProjects;
