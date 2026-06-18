import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // Strict mode for React 19
  reactStrictMode: true,
  // Enable compression
  compress: true,
  // Power by header removal for security
  poweredByHeader: false,
};

export default nextConfig;
