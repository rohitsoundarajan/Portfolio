import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This tells Next.js to generate a static HTML site
  images: {
    unoptimized: true,   // GitHub doesn't support Next.js's dynamic image server
  },
  // IMPORTANT: If your repository is NOT named 'rohitsoundarajan.github.io'
  // and is instead something like 'portfolio', uncomment the line below:
  // basePath: '/portfolio', 
};

export default nextConfig;