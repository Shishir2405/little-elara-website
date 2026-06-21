import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the tracing root to this project (a stray lockfile in $HOME otherwise confuses Next).
  outputFileTracingRoot: __dirname,
  images: {
    // Allows you to drop in any https image URL (e.g. your own CDN, Unsplash, etc).
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
