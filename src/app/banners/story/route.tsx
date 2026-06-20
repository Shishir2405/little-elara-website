import { ImageResponse } from "next/og";
import { BannerArt } from "@/lib/banner";

// Instagram / WhatsApp story (1080x1920) — open /banners/story and save the image.
export function GET() {
  return new ImageResponse(BannerArt("story"), { width: 1080, height: 1920 });
}
