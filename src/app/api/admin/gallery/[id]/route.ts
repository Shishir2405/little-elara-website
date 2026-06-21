import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { GalleryItem } from "@/models/GalleryItem";
import { getAdminSession } from "@/lib/admin-auth";
import { deleteImage } from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = (await req.json().catch(() => ({}))) as {
    title?: string;
    caption?: string;
    order?: number;
  };
  const update: Record<string, unknown> = {};
  if (typeof body.title === "string") update.title = body.title;
  if (typeof body.caption === "string") update.caption = body.caption;
  if (typeof body.order === "number") update.order = body.order;

  await connectDB();
  await GalleryItem.findByIdAndUpdate(id, update);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  await connectDB();
  const item = await GalleryItem.findById(id);
  if (item?.publicId) {
    try {
      await deleteImage(item.publicId);
    } catch (e) {
      console.error("cloudinary delete failed", e);
    }
  }
  await GalleryItem.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
