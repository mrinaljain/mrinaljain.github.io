import dbConnect from "@/app/lib/db/connect";
import Project from "@/app/lib/models/Project";
import { NextResponse } from "next/server";

export  async function GET() {
   await dbConnect();
   try {
      const projects = await Project.find({});
       NextResponse.json(projects);
   } catch (err:any) {
      NextResponse.json({error:err.message})
   }
   
}
