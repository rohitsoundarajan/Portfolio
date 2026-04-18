import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Portfolio', // Add this line
};

export default nextConfig;