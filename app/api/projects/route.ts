import connectDB from "@/lib/db/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
   await connectDB();
   try {
      const projects = await Project.find({});
      NextResponse.json(projects);
   } catch (err) {
      NextResponse.json({ error: err })
   }

}
