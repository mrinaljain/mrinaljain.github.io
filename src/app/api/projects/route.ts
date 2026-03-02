import connectDB from "@/lib/db/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
   await connectDB();
   try {
      const projects = await Project.find({});
      return NextResponse.json(projects);
   } catch (err) {
      return NextResponse.json({ error: err })
   }

}

export async function POST(req: Request) {
   await connectDB();
   try {
      const body = await req.json();
      const project = await Project.create(body);
      return NextResponse.json(project);
   } catch (err) {
      return NextResponse.json({ error: err })
   }
}

export async function DELETE(req: Request) {
   await connectDB();
   try {
      const { id } = await req.json();
      const project = await Project.findByIdAndDelete(id);
      return NextResponse.json(project);
   } catch (err) {
      return NextResponse.json({ error: err })
   }
}

export async function PUT(req: Request) {
   await connectDB();
   try {
      const body = await req.json();
      const project = await Project.findByIdAndUpdate(body._id, body);
      return NextResponse.json(project);
   } catch (err) {
      return NextResponse.json({ error: err })
   }
}

export async function PATCH(req: Request) {
   await connectDB();
   try {
      const body = await req.json();
      const project = await Project.findByIdAndUpdate(body._id, body);
      return NextResponse.json(project);
   } catch (err) {
      return NextResponse.json({ error: err })
   }
}

