import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { GalleryItem } from "@/models/GalleryItem";
import { getAdminSession } from "@/lib/admin-auth";
import { uploadImage, cloudinaryConfigured } from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 4 * 1024 * 1024; // Vercel serverless body limit is ~4.5 MB

export async function GET() {
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectDB();
  const items = await GalleryItem.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!cloudinaryConfigured()) {
    return NextResponse.json({ error: "Cloudinary is not configured yet." }, { status: 500 });
  }

  const form = await req.formData();
  const file = form.get("file");
  const title = String(form.get("title") ?? "").trim();
  const caption = String(form.get("caption") ?? "").trim();

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Please choose an image." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "That file is not an image." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image is too large (max 4 MB)." }, { status: 400 });
  }

  try {
    const buf = Buffer.from(await file.arrayBuffer());
    const dataUri = `data:${file.type};base64,${buf.toString("base64")}`;
    const { url, publicId } = await uploadImage(dataUri);

    await connectDB();
    const last = await GalleryItem.findOne().sort({ order: -1 }).lean();
    const order = (last?.order ?? 0) + 1;
    await GalleryItem.create({ url, publicId, title, caption, order });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.error("gallery upload failed", e);
    return NextResponse.json({ error: "Upload failed. Try again." }, { status: 500 });
  }
}
