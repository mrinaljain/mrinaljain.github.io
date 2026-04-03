import { getBaseUrl } from "@/lib/url";
import type { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ParamsShape = { slug?: string };
type Props = { params: ParamsShape | Promise<ParamsShape> };

async function resolveParams(params: ParamsShape | Promise<ParamsShape> | undefined) {
   if (!params) return null;
   try {
      const resolved = (await params) as ParamsShape;
      if (!resolved?.slug) return null;
      return resolved;
   } catch {
      return null;
   }
}

async function getProject(slug: string): Promise<Project | null> {
   try {
      const res = await fetch(`${getBaseUrl()}/api/projects/${slug}`, {
         next: { revalidate: 60 },
      });

      if (!res.ok) return null;
      const data = await res.json();
      return (data?.project ?? null) as Project | null;
   } catch {
      return null;
   }
}

export default async function ProjectDetailPage({ params }: Props) {
   const resolved = await resolveParams(params);
   if (!resolved?.slug) return notFound();

   const project = await getProject(resolved.slug);
   if (!project) return notFound();

   return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
         <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-80 w-full bg-slate-100">
               <Image src={project.imageUrl} alt={project.name} fill className="object-cover" sizes="100vw" />
            </div>

            <div className="space-y-6 p-8">
               <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                     <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {tag}
                     </span>
                  ))}
               </div>

               <h1 className="text-4xl font-bold tracking-tight text-slate-900">{project.name}</h1>
               <p className="text-base leading-7 text-slate-600">{project.description}</p>

               <div className="flex flex-wrap gap-3">
                  <Link
                     href="/projects"
                     className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                  >
                     Back to Projects
                  </Link>
                  {project.liveUrl && (
                     <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                     >
                        View Live
                     </Link>
                  )}
                  {project.githubUrl && (
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
         </div>
      </main>
   );
}
