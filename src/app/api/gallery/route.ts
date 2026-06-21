import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { GalleryItem } from "@/models/GalleryItem";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Public: the homepage Gallery section fetches from here.
export async function GET() {
  try {
    if (!process.env.MONGODB_URI) return NextResponse.json({ items: [] });
    await connectDB();
    const items = await GalleryItem.find().sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json({ items });
  } catch (e) {
    console.error("gallery fetch failed", e);
    return NextResponse.json({ items: [] });
  }
}
