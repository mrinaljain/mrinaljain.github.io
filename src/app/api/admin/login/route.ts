import { NextResponse } from "next/server";
import {
  authenticateAdminCredentials,
  createAdminSession,
  setAdminSessionCookie,
} from "@/lib/admin-auth";
import type { AdminLoginRequest, AdminLoginResponse } from "@/types/admin";

function badRequest(message: string) {
  return NextResponse.json<AdminLoginResponse>({ ok: false, message }, { status: 400 });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<AdminLoginRequest>;
    const username = body.username?.trim();
    const password = body.password;

    if (!username || !password) {
      return badRequest("Username and password are required");
    }

    const user = await authenticateAdminCredentials(username, password);
    if (!user) {
      return NextResponse.json<AdminLoginResponse>(
        { ok: false, message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const { token, expiresAt } = await createAdminSession(user.id);
    await setAdminSessionCookie(token, expiresAt);

    return NextResponse.json<AdminLoginResponse>({ ok: true, user }, { status: 200 });
  } catch (err) {
    console.error("POST /api/admin/login error:", err);
    return NextResponse.json<AdminLoginResponse>(
      { ok: false, message: "Unable to login right now" },
      { status: 500 }
    );
  }
}
