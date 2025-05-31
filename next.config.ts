import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true, // ⚠️ This disables type checking on build
  },
};

export default nextConfig;
