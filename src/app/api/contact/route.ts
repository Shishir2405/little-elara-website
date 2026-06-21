import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Submission } from "@/models/Submission";
import { sendBrevoEmail } from "@/lib/brevo";
import { adminEnquiryEmail, userConfirmationEmail } from "@/lib/emails";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "")
    .trim()
    .toLowerCase();
  const childAge = String(body.age ?? body.childAge ?? "").trim();
  const program = String(body.program ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  try {
    await connectDB();
    await Submission.create({ name, phone, email, childAge, program, message });
  } catch (e) {
    console.error("contact save failed", e);
    return NextResponse.json(
      { error: "Could not save right now. Please call or WhatsApp us." },
      { status: 500 }
    );
  }

  const data = { name, email, phone, childAge, program, message };

  // 1) Notify the business inbox (best-effort).
  try {
    if (process.env.BREVO_API_KEY) {
      const adminTo = process.env.NOTIFY_EMAIL || process.env.ADMIN_EMAIL || SITE.email;
      const mail = adminEnquiryEmail(data);
      await sendBrevoEmail({
        to: [{ email: adminTo }],
        subject: mail.subject,
        htmlContent: mail.html,
      });
    }
  } catch (e) {
    console.error("admin notify failed", e);
  }

  // 2) Confirmation to the parent (best-effort, only if they gave an email).
  try {
    if (email && process.env.BREVO_API_KEY) {
      const mail = userConfirmationEmail(data);
      await sendBrevoEmail({
        to: [{ email, name }],
        subject: mail.subject,
        htmlContent: mail.html,
      });
    }
  } catch (e) {
    console.error("user confirmation failed", e);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
