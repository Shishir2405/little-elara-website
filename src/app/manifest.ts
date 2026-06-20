import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Inclusive Day Care & Pre School`,
    short_name: SITE.name,
    description:
      "Inclusive day care & pre school in New Ashok Nagar, East Delhi. Play-based learning and individual support for every child.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6FBFE",
    theme_color: "#F6FBFE",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "any" },
    ],
  };
}
