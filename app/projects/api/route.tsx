import { type NextRequest } from "next/server";
import { projectData } from "@/data/projectData";

export function GET(request: NextRequest,
  ) {
   const searchParams = request.nextUrl.searchParams

   const year = searchParams.get('year')

   if(year){
      const filteredData = projectData.filter(project=> project.year === year)
      return Response.json(filteredData);

   }
   return Response.json(projectData);

}

export async function POST(request: Request){

const body = await request.json();

return Response.json(body)
}

  