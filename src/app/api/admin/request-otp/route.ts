import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Admin } from "@/models/Admin";
import { Otp } from "@/models/Otp";
import { generateOtp, hashOtp } from "@/lib/admin-auth";
import { sendBrevoEmail } from "@/lib/brevo";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let email = "";
  try {
    const body = (await req.json()) as { email?: string };
    email = String(body.email ?? "")
      .toLowerCase()
      .trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!email) return NextResponse.json({ error: "Email is required." }, { status: 400 });

  // Generic response so we never reveal whether an email is the admin.
  const generic = NextResponse.json({ ok: true });

  try {
    await connectDB();
    const admin = await Admin.findOne({ email });
    if (!admin) return generic;

    const code = generateOtp();
    await Otp.findOneAndUpdate(
      { email },
      {
        email,
        codeHash: hashOtp(code),
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        attempts: 0,
      },
      { upsert: true }
    );

    await sendBrevoEmail({
      to: [{ email, name: admin.name ?? "Admin" }],
      subject: "Your Little Elara Steps admin login code",
      htmlContent: `<p>Your one-time login code is:</p>
<h1 style="letter-spacing:6px;font-family:monospace">${code}</h1>
<p>This code expires in 10 minutes. If you did not request it, you can ignore this email.</p>`,
    });
    return generic;
  } catch (e) {
    console.error("request-otp failed", e);
    return NextResponse.json({ error: "Could not send the code. Try again." }, { status: 500 });
  }
}
