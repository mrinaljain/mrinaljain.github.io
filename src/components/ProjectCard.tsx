import type { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
   project: Project;
   showCodeButton?: boolean;
};

export default function ProjectCard({ project, showCodeButton = true }: ProjectCardProps) {
   return (
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
         <Link href={`/projects/${project.slug}`} className="block">
            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
               <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
               />
            </div>
         </Link>

         <div className="space-y-4 p-5">
            <div className="flex flex-wrap gap-2">
               {project.tags.slice(0, 4).map((tag) => (
                  <span
                     key={`${project.slug}-${tag}`}
                     className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            <Link href={`/projects/${project.slug}`} className="block">
               <h3 className="text-xl font-semibold tracking-tight text-slate-900">{project.name}</h3>
               <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p>
            </Link>

            <div className="flex flex-wrap gap-3 pt-1">
               <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
               >
                  View Project
               </Link>
               {project.liveUrl && (
                  <Link
                     href={project.liveUrl}
                     target="_blank"
                     rel="noreferrer"
                     className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                  >
                     Live Demo
                  </Link>
               )}
               {showCodeButton && project.githubUrl && (
                  <Link
                     href={project.githubUrl}
                     target="_blank"
                     rel="noreferrer"
                     className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                  >
                     View Code
                  </Link>
               )}
            </div>
         </div>
      </article>
   );
}