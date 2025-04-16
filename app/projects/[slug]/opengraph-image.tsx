import { ImageResponse } from "next/og";
import { projectData } from "@/data/projectData";

export const runtime = "edge";
export const contentType = "image/png";

export default function OpengraphImage({ params }: { params: { slug: string } }) {
   const project = projectData.find(p => p.slug === params.slug);
   if (!project) return new Response("Not found", { status: 404 });

   return new ImageResponse(
      (
         <div style= {{
      background: "#1F2937",
      color: "white",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 60,
      fontSize: 48,
      fontWeight: "bold"
   }}>
      <div>{ project.title } </div>
      < div style = {{ fontSize: 24, fontWeight: 400, marginTop: 20 }}> { project.description } </div>
         </div>
    ),
{
   width: 1200,
      height: 630
}
  );
}
