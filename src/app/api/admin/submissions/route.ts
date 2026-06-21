import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Submission } from "@/models/Submission";
import { getAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const items = await Submission.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ items });
}
