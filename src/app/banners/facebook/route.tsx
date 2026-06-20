import { ImageResponse } from "next/og";
import { BannerArt } from "@/lib/banner";

// Facebook cover / banner — open /banners/facebook and right-click "Save image".
export function GET() {
  return new ImageResponse(BannerArt("facebook"), { width: 1640, height: 624 });
}
