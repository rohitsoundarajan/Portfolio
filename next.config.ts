import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add these two lines (Case Sensitive!)
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio', 
};

export default nextConfig;