import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "elara_admin_session";

function secret() {
  return new TextEncoder().encode(process.env.AUTH_SECRET || "");
}

export type SessionPayload = { email: string; role: "admin" };

export async function signSession(email: string): Promise<string> {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret());
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  if (!process.env.AUTH_SECRET) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    if (payload.role !== "admin" || typeof payload.email !== "string") return null;
    return { email: payload.email, role: "admin" };
  } catch {
    return null;
  }
}
