import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Submission } from "@/models/Submission";
import { sendBrevoEmail, esc } from "@/lib/brevo";

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
  const childAge = String(body.age ?? body.childAge ?? "").trim();
  const program = String(body.program ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  try {
    await connectDB();
    await Submission.create({ name, phone, childAge, program, message });
  } catch (e) {
    console.error("contact save failed", e);
    return NextResponse.json(
      { error: "Could not save right now. Please call or WhatsApp us." },
      { status: 500 }
    );
  }

  // Best-effort notification to the admin (never blocks the submission).
  try {
    const notify = process.env.NOTIFY_EMAIL || process.env.ADMIN_EMAIL;
    if (notify && process.env.BREVO_API_KEY) {
      await sendBrevoEmail({
        to: [{ email: notify }],
        subject: `New enquiry: ${name}`,
        htmlContent: `<h2>New enquiry — Little Elara Steps</h2>
<p><b>Name:</b> ${esc(name)}</p>
<p><b>Phone:</b> ${esc(phone)}</p>
<p><b>Child's age:</b> ${esc(childAge) || "-"}</p>
<p><b>Program:</b> ${esc(program) || "-"}</p>
<p><b>Message:</b> ${esc(message) || "-"}</p>`,
      });
    }
  } catch (e) {
    console.error("notify failed", e);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
