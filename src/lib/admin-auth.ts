import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { Types } from "mongoose";
import { cookies } from "next/headers";
import connectDB from "@/lib/db/mongodb";
import { AdminSessionModel } from "@/models/AdminSession";
import { UserModel } from "@/models/User";
import type { AdminAuthenticatedSession, AdminUserPublic } from "@/types/admin";

const ADMIN_SESSION_COOKIE_NAME = "admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

function toTokenHash(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function hashAdminPassword(plainPassword: string): string {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(plainPassword, salt, 64).toString("hex");
  return `scrypt$${salt}$${derived}`;
}

export function verifyAdminPassword(plainPassword: string, storedHash: string): boolean {
  const [algo, salt, expectedHash] = storedHash.split("$");

  if (algo !== "scrypt" || !salt || !expectedHash) {
    return false;
  }

  const computed = scryptSync(plainPassword, salt, 64);
  const expected = Buffer.from(expectedHash, "hex");

  if (computed.length !== expected.length) {
    return false;
  }

  return timingSafeEqual(computed, expected);
}

async function ensureBootstrapAdminFromEnv(username: string, password: string): Promise<void> {
  const hasAnyAdmin = await UserModel.exists({ userType: "admin" });
  if (hasAnyAdmin) {
    return;
  }

  const envUsername = process.env.ADMIN_USERNAME?.trim().toLowerCase();
  const envPassword = process.env.ADMIN_PASSWORD;

  if (!envUsername || !envPassword) {
    return;
  }

  if (username !== envUsername || password !== envPassword) {
    return;
  }

  await UserModel.create({
    username: envUsername,
    passwordHash: hashAdminPassword(envPassword),
    displayName: "Admin",
    userType: "admin",
    isActive: true,
  });
}

function mapAdminUser(doc: {
  _id: { toString(): string };
  username: string;
  displayName?: string;
}): AdminUserPublic {
  return {
    id: doc._id.toString(),
    username: doc.username,
    displayName: doc.displayName,
  };
}

export async function authenticateAdminCredentials(
  usernameInput: string,
  password: string
): Promise<AdminUserPublic | null> {
  await connectDB();

  const username = usernameInput.trim().toLowerCase();
  await ensureBootstrapAdminFromEnv(username, password);

  const user = await UserModel.findOne({ username, isActive: true, userType: "admin" })
    .select("_id username displayName passwordHash")
    .lean<{
      _id: { toString(): string };
      username: string;
      displayName?: string;
      passwordHash: string;
    } | null>();

  if (!user) {
    return null;
  }

  if (!verifyAdminPassword(password, user.passwordHash)) {
    return null;
  }

  return mapAdminUser(user);
}

export async function createAdminSession(userId: string): Promise<{ token: string; expiresAt: Date }> {
  await connectDB();

  const token = randomBytes(48).toString("hex");
  const tokenHash = toTokenHash(token);
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await AdminSessionModel.create({
    userId: new Types.ObjectId(userId),
    tokenHash,
    expiresAt,
  });

  return { token, expiresAt };
}

export async function setAdminSessionCookie(token: string, expiresAt: Date): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function clearAdminSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  });
}

export async function getAdminSession(): Promise<AdminAuthenticatedSession | null> {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  const tokenHash = toTokenHash(token);

  const session = await AdminSessionModel.findOne({
    tokenHash,
    expiresAt: { $gt: new Date() },
  })
    .select("userId expiresAt")
    .lean<{ userId: Types.ObjectId; expiresAt: Date } | null>();

  if (!session) {
    await clearAdminSessionCookie();
    return null;
  }

  const user = await UserModel.findOne({
    _id: session.userId,
    isActive: true,
    userType: "admin",
  })
    .select("_id username displayName")
    .lean<{
      _id: { toString(): string };
      username: string;
      displayName?: string;
    } | null>();

  if (!user) {
    await AdminSessionModel.deleteOne({ tokenHash });
    await clearAdminSessionCookie();
    return null;
  }

  return {
    user: mapAdminUser(user),
    expiresAt: session.expiresAt.toISOString(),
  };
}

export async function invalidateCurrentAdminSession(): Promise<void> {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE_NAME)?.value;

  if (token) {
    const tokenHash = toTokenHash(token);
    await AdminSessionModel.deleteOne({ tokenHash });
  }

  await clearAdminSessionCookie();
}
