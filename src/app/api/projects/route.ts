import connectDB from "@/lib/db/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
import { toSlug } from "@/utils/slugify";

function parseTags(tags: unknown, legacyStack: unknown): string[] {
   if (Array.isArray(tags)) return tags.map((tag) => String(tag).trim()).filter(Boolean);
   if (typeof tags === "string") return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
   if (Array.isArray(legacyStack)) return legacyStack.map((tag) => String(tag).trim()).filter(Boolean);
   if (typeof legacyStack === "string") return legacyStack.split(",").map((tag) => tag.trim()).filter(Boolean);
   return [];
}

async function makeUniqueSlug(base: string): Promise<string> {
   const seed = base || "project";
   let slug = seed;
   let index = 1;

   while (await Project.findOne({ slug }).lean()) {
      index += 1;
      slug = `${seed}-${index}`;
   }

   return slug;
}

export async function GET(req: Request) {
   try {
      await connectDB();
      const { searchParams } = new URL(req.url);

      const onlyFeatured = searchParams.get("featured") === "true";
      const limitParam = Number(searchParams.get("limit") || "0");
      const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, 50) : 0;

      const query = onlyFeatured ? { featured: true } : {};
      const dbQuery = Project.find(query).sort({ featured: -1, order: 1, createdAt: -1 }).lean();
      if (limit > 0) dbQuery.limit(limit);

      const projects = await dbQuery;
      return NextResponse.json({ ok: true, projects }, { status: 200 });
   } catch (error) {
      console.error("GET /api/projects error:", error);
      return NextResponse.json({ ok: false, message: "Failed to fetch projects" }, { status: 500 });
   }
}

export async function POST(req: Request) {
   try {
      await connectDB();
      const body = await req.json();

      const name = String(body?.name || "").trim();
      const description = String(body?.description || "").trim();
      const imageUrl = String(body?.imageUrl || body?.imageArr?.[0] || "").trim();

      if (!name || !description || !imageUrl) {
         return NextResponse.json(
            { ok: false, message: "name, description and imageUrl are required" },
            { status: 400 }
         );
      }

      const requestedSlug = String(body?.slug || body?.command || "").trim();
      const slug = await makeUniqueSlug(toSlug(requestedSlug || name));
      const tags = parseTags(body?.tags, body?.stack);

      const project = await Project.create({
         name,
         slug,
         description,
         tags,
         imageUrl,
         githubUrl: body?.githubUrl ? String(body.githubUrl).trim() : undefined,
         liveUrl: body?.liveUrl ? String(body.liveUrl).trim() : undefined,
         featured: Boolean(body?.featured),
         order: Number.isFinite(Number(body?.order)) ? Number(body.order) : 0,
      });

      return NextResponse.json({ ok: true, project }, { status: 201 });
   } catch (error) {
      console.error("POST /api/projects error:", error);
      return NextResponse.json({ ok: false, message: "Failed to create project" }, { status: 500 });
   }
}

export async function DELETE(req: Request) {
   try {
      await connectDB();
      const { id } = await req.json();
      const project = await Project.findByIdAndDelete(id);
      return NextResponse.json({ ok: true, project }, { status: 200 });
   } catch (err) {
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
   }
}

export async function PUT(req: Request) {
   try {
      await connectDB();
      const body = await req.json();
      const tags = parseTags(body?.tags, body?.stack);
      const project = await Project.findByIdAndUpdate(
         body._id,
         {
            ...body,
            tags,
            slug: body?.slug ? toSlug(String(body.slug)) : undefined,
         },
         { new: true }
      );
      return NextResponse.json({ ok: true, project }, { status: 200 });
   } catch (err) {
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
   }
}

export async function PATCH(req: Request) {
   try {
      await connectDB();
      const body = await req.json();
      const tags = parseTags(body?.tags, body?.stack);
      const project = await Project.findByIdAndUpdate(
         body._id,
         {
            ...body,
            tags,
            slug: body?.slug ? toSlug(String(body.slug)) : undefined,
         },
         { new: true }
      );
      return NextResponse.json({ ok: true, project }, { status: 200 });
   } catch (err) {
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
   }
}

