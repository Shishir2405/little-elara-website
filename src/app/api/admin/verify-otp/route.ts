import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { Admin } from "@/models/Admin";
import { Otp } from "@/models/Otp";
import { hashOtp } from "@/lib/admin-auth";
import { signSession, SESSION_COOKIE } from "@/lib/session";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let email = "";
  let code = "";
  try {
    const body = (await req.json()) as { email?: string; code?: string };
    email = String(body.email ?? "")
      .toLowerCase()
      .trim();
    code = String(body.code ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!email || !code) {
    return NextResponse.json({ error: "Email and code are required." }, { status: 400 });
  }

  try {
    await connectDB();
    const otp = await Otp.findOne({ email });
    if (!otp) return NextResponse.json({ error: "Invalid or expired code." }, { status: 400 });

    if (otp.expiresAt < new Date()) {
      await otp.deleteOne();
      return NextResponse.json({ error: "Code expired. Request a new one." }, { status: 400 });
    }
    if ((otp.attempts ?? 0) >= 5) {
      await otp.deleteOne();
      return NextResponse.json(
        { error: "Too many attempts. Request a new code." },
        { status: 429 }
      );
    }
    if (otp.codeHash !== hashOtp(code)) {
      otp.attempts = (otp.attempts ?? 0) + 1;
      await otp.save();
      return NextResponse.json({ error: "Incorrect code." }, { status: 400 });
    }

    await otp.deleteOne();
    const admin = await Admin.findOne({ email });
    if (!admin) return NextResponse.json({ error: "Not authorized." }, { status: 403 });

    const token = await signSession(email);
    (await cookies()).set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("verify-otp failed", e);
    return NextResponse.json({ error: "Verification failed. Try again." }, { status: 500 });
  }
}
