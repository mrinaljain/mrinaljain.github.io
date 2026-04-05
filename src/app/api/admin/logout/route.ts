import { NextResponse } from "next/server";
import { invalidateCurrentAdminSession } from "@/lib/admin-auth";

export async function POST() {
  try {
    await invalidateCurrentAdminSession();
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("POST /api/admin/logout error:", err);
    return NextResponse.json({ ok: false, message: "Unable to logout" }, { status: 500 });
  }
}
