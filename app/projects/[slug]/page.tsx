import Script from "next/script";
import { projectData } from "@/data/projectData";
import { generateProjectJsonLd } from "@/data/jsonLdProject";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
   const project = projectData.find(p => p.slug === params.slug);
   if (!project) return {};

   return {
      title: `${project.title} | Projects`,
      description: project.description,
      openGraph: {
         images: [`/projects/${project.slug}/opengraph-image`]
      }
   };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
   const project = projectData.find(p => p.slug === params.slug);
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
         <h1>Hello</h1>
         {/* project content here */}
      </>
   );
}
