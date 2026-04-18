import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove or comment out the basePath and assetPrefix lines
};

export default nextConfig;