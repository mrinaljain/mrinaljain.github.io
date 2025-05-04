import Script from "next/script";
import { projectData } from "@/data/projectData";
import { generateProjectJsonLd } from "@/data/jsonLdProject";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
   params: Promise<{ slug: string }>;
   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}
export async function generateMetadata({ params }: Props) {
   const { slug } = await params;

   const project = projectData.find(p => p.slug === slug);
   if (!project) return {};

   return {
      title: `${project.title} | Projects`,
      description: project.description,
      openGraph: {
         images: [`/projects/${project.slug}/opengraph-image`]
      }
   };
}

export default async function ProjectPage({ params, searchParams }: Props) {
   const { slug } = await params;
   const { lang = "en" } = await searchParams;
   const project = projectData.find(p => p.slug === slug);
   if (!project) return notFound();

   const jsonLd = generateProjectJsonLd(project);

   return (
      <>
         <Script
            id="jsonld-project"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <h1>Hello on : {lang}</h1>
         <ul>
            <li><Link href={`/projects/${slug}?lang="en"`}> English</Link></li>
            <li><Link href={`/projects/${slug}?lang="hin"`}>Hindi</Link></li>

         </ul>
      </>
   );
}
