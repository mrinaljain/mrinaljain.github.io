import type { Project } from "./projectData";

export const generateProjectJsonLd = (project: Project) => {
   return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.title,
      description: project.description,
      datePublished: project.year,
      url: `https://mrinaljain.com/projects/${project.slug}`,
      image: `https://mrinaljain.com${project.image}`,
      author: {
         "@type": "Person",
         name: "Mrinal Jain",
         url: "https://mrinaljain.com",
      },
      keywords: project.techStack.join(", "),
      programmingLanguage: project.techStack.join(", "),
      isPartOf: {
         "@type": "CreativeWorkSeries",
         name: "Mrinal Jain's Project Portfolio",
         url: "https://mrinaljain.com/projects"
      }
   };
};
