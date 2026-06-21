import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Submission } from "@/models/Submission";
import { getAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STATUSES = ["new", "contacted", "archived"] as const;

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = (await req.json().catch(() => ({}))) as { status?: string };
  const status = String(body.status ?? "");
  if (!STATUSES.includes(status as (typeof STATUSES)[number])) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  await connectDB();
  const updated = await Submission.findByIdAndUpdate(id, { status }, { new: true }).lean();
  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await connectDB();
  await Submission.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
