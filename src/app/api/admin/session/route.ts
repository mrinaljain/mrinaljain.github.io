import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import type { AdminSessionResponse } from "@/types/admin";

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json<AdminSessionResponse>(
        { ok: true, authenticated: false },
        { status: 200 }
      );
    }

    return NextResponse.json<AdminSessionResponse>(
      { ok: true, authenticated: true, user: session.user },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/admin/session error:", err);
    return NextResponse.json<AdminSessionResponse>(
      { ok: false, authenticated: false },
      { status: 500 }
    );
  }
}
