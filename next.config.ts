import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true, // ⚠️ This disables type checking on build
  },
  // webpack: (config, { isServer }) => {
  //   // Disable filesystem caching
  //   config.cache = false;

  //   return config;
  // },
};

export default nextConfig;
