/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows you to drop in any https image URL (e.g. your own CDN, Unsplash, etc).
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
