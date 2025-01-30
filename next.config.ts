import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
