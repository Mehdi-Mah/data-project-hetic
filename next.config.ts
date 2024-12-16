import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactStrictMode: true, // Active l'usage du App Router (Next.js 13+)
  },
};

export default nextConfig;
