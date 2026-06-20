import { ImageResponse } from "next/og";
import { BannerArt } from "@/lib/banner";

// Instagram post / WhatsApp status (1080x1080) — open /banners/instagram and save the image.
export function GET() {
  return new ImageResponse(BannerArt("square"), { width: 1080, height: 1080 });
}
