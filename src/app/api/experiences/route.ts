import { NextResponse } from "next/server";
import { experienceSeedData } from "@/data/experience";
import connectDB from "@/lib/db/mongodb";
import { ExperienceModel } from "@/models/Experience";
import type { Experience, ExperienceStatus, ExperienceTechnologyKey } from "@/types/experience";
import { toSlug } from "@/utils/slugify";

type ExperienceDocument = {
  _id: { toString(): string };
  company: string;
  slug: string;
  logo: string;
  companyUrl?: string;
  designation: string;
  employmentType?: string;
  location: string;
  yearLabel: string;
  startDate?: Date;
  endDate?: Date | null;
  isCurrent?: boolean;
  summary?: string;
  projects?: string[];
  technologyKeys?: ExperienceTechnologyKey[];
  order: number;
  accentColor?: string;
  status: ExperienceStatus;
  isFeatured?: boolean;
};

function serializeExperience(doc: ExperienceDocument): Experience {
  return {
    id: doc._id.toString(),
    company: doc.company,
    slug: doc.slug,
    logo: doc.logo,
    companyUrl: doc.companyUrl,
    designation: doc.designation,
    employmentType: doc.employmentType,
    location: doc.location,
    yearLabel: doc.yearLabel,
    startDate: doc.startDate ? new Date(doc.startDate).toISOString() : undefined,
    endDate: doc.endDate ? new Date(doc.endDate).toISOString() : null,
    isCurrent: doc.isCurrent,
    summary: doc.summary,
    projects: doc.projects ?? [],
    technologyKeys: doc.technologyKeys ?? [],
    order: doc.order,
    accentColor: doc.accentColor,
    status: doc.status,
    isFeatured: doc.isFeatured,
  };
}

function toYearLabel(startDate?: string, endDate?: string | null, isCurrent?: boolean) {
  if (!startDate) {
    return isCurrent ? "Present" : "";
  }

  const start = new Date(startDate);
  const startLabel = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  if (!endDate || isCurrent) {
    return `${startLabel} – Present`;
  }

  const end = new Date(endDate);
  const endLabel = end.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return `${startLabel} – ${endLabel}`;
}

async function ensureUniqueSlug(baseSlug: string) {
  let slug = baseSlug;
  let counter = 1;

  while (await ExperienceModel.findOne({ slug }).lean()) {
    counter += 1;
    slug = `${baseSlug}-${counter}`;
  }

  return slug;
}

async function seedExperiencesIfEmpty() {
  const count = await ExperienceModel.countDocuments();
  if (count > 0) {
    return;
  }

  const seededDocs = await Promise.all(
    experienceSeedData.map(async (item) => ({
      ...item,
      slug: await ensureUniqueSlug(toSlug(`${item.company}-${item.designation}`)),
      status: item.status ?? "published",
      isFeatured: item.isFeatured ?? true,
      isCurrent: item.isCurrent ?? !item.endDate,
      yearLabel: item.yearLabel || toYearLabel(item.startDate, item.endDate, item.isCurrent),
    }))
  );

  await ExperienceModel.insertMany(seededDocs);
}

export async function GET() {
  try {
    await connectDB();
    await seedExperiencesIfEmpty();

    const experiences = await ExperienceModel.find({ status: "published" })
      .sort({ order: 1, startDate: -1, createdAt: -1 })
      .lean<ExperienceDocument[]>();

    return NextResponse.json(
      { ok: true, experiences: experiences.map(serializeExperience) },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/experiences error:", error);

    return NextResponse.json(
      { ok: false, experiences: [] },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body?.company || !body?.designation || !body?.location || !body?.logo) {
      return NextResponse.json(
        {
          ok: false,
          message: "company, designation, location, and logo are required",
        },
        { status: 400 }
      );
    }

    const status: ExperienceStatus = body.status === "draft" ? "draft" : "published";
    const startDate = body.startDate ? new Date(body.startDate) : undefined;
    const endDate = body.endDate ? new Date(body.endDate) : null;
    const isCurrent = typeof body.isCurrent === "boolean" ? body.isCurrent : !endDate;
    const yearLabel =
      typeof body.yearLabel === "string" && body.yearLabel.trim().length > 0
        ? body.yearLabel.trim()
        : toYearLabel(body.startDate, body.endDate, isCurrent);

    const baseSlug = toSlug(body.slug || `${body.company}-${body.designation}`);
    const slug = await ensureUniqueSlug(baseSlug);

    const created = await ExperienceModel.create({
      company: String(body.company).trim(),
      slug,
      logo: String(body.logo).trim(),
      companyUrl: body.companyUrl ? String(body.companyUrl).trim() : undefined,
      designation: String(body.designation).trim(),
      employmentType: body.employmentType ? String(body.employmentType).trim() : undefined,
      location: String(body.location).trim(),
      yearLabel,
      startDate,
      endDate,
      isCurrent,
      summary: body.summary ? String(body.summary).trim() : undefined,
      projects: Array.isArray(body.projects)
        ? body.projects.map((project: string) => String(project).trim()).filter(Boolean)
        : [],
      technologyKeys: Array.isArray(body.technologyKeys)
        ? body.technologyKeys.map((key: string) => String(key))
        : [],
      order: typeof body.order === "number" ? body.order : 0,
      accentColor: body.accentColor ? String(body.accentColor).trim() : undefined,
      status,
      isFeatured:
        typeof body.isFeatured === "boolean" ? body.isFeatured : true,
    });

    return NextResponse.json(
      { ok: true, experience: serializeExperience(created.toObject()) },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("POST /api/experiences error:", error);

    return NextResponse.json(
      { ok: false, message: "Failed to create experience" },
      { status: 500 }
    );
  }
}