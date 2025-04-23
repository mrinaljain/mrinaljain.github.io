import { projectData } from "@/data/projectData";

export async function GET(request: Request,
   { params }: { params: Promise<{ slug: string }> }) {

   const { slug } = await params;

   const project = projectData.find(p => p.slug === slug);
   if (!project) return Response.json({ "status": false, "message": "No data found" });

   return Response.json({ "status": true, "data": project });
}