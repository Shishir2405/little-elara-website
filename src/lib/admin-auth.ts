import { cookies } from "next/headers";
import { createHmac, randomInt } from "crypto";
import { SESSION_COOKIE, verifySession, type SessionPayload } from "./session";

/** 6-digit numeric OTP. */
export function generateOtp(): string {
  return String(randomInt(0, 1_000_000)).padStart(6, "0");
}

/** HMAC the OTP so we never store the raw code. */
export function hashOtp(code: string): string {
  return createHmac("sha256", process.env.AUTH_SECRET || "")
    .update(code)
    .digest("hex");
}

/** Returns the admin session from the cookie, or null. */
export async function getAdminSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}
