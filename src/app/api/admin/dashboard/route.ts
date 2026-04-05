import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import type { AdminDashboardResponse } from "@/types/admin";

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json<AdminDashboardResponse>(
        { ok: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json<AdminDashboardResponse>(
      {
        ok: true,
        message: "Welcome to dashboard",
        user: session.user,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/admin/dashboard error:", err);
    return NextResponse.json<AdminDashboardResponse>(
      { ok: false, message: "Unable to load dashboard" },
      { status: 500 }
    );
  }
}
