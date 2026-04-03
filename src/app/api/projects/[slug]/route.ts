import connectDB from "@/lib/db/mongodb";
import Project from "@/models/Project";
import { toSlug } from "@/utils/slugify";
import { NextResponse } from "next/server";

type Params = {
   params: Promise<{ slug: string }> | { slug: string };
};

async function resolveSlug(params: Params["params"]) {
   const resolved = await params;
   return toSlug(String(resolved?.slug || "").trim());
}

export async function GET(_: Request, { params }: Params) {
   try {
      await connectDB();
      const slug = await resolveSlug(params);
      if (!slug) {
         return NextResponse.json({ ok: false, message: "slug is required" }, { status: 400 });
      }

      const project = await Project.findOne({ slug }).lean();
      if (!project) {
         return NextResponse.json({ ok: false, message: "Project not found" }, { status: 404 });
      }

      return NextResponse.json({ ok: true, project }, { status: 200 });
   } catch (error) {
      console.error("GET /api/projects/[slug] error:", error);
      return NextResponse.json({ ok: false, message: "Failed to fetch project" }, { status: 500 });
   }
}
