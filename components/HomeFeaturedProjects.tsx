import TerminalProjectCard from "@/components/TerminalProjectCard";
import Link from "next/link";

const HomeFeaturedProjects = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, { cache: "no-store" });
   console.log("res", res);

   const projects: any[] = [];

   return (
      <section className="bg-gray-100 py-12 px-6">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">✨ Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {projects.map((project) => (
                  <TerminalProjectCard key={project.command} {...project} />
               ))}
            </div>
            {/* View All Projects Button */}
            <div className="mt-10 text-center">
               <Link
                  href="/projects"
                  className="inline-block bg-blue-600 text-white px-5 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
               >
                  View All Projects →
               </Link>
            </div>
         
         </div>
         
      </section>
   );
};

export default HomeFeaturedProjects;
