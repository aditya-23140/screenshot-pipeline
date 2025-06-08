import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  basePath: "/screenshot-pipeline",
  assetPrefix: "/screenshot-pipeline/",
  images: {
    unoptimized: true, // for image compatibility
  },
  trailingSlash: true, // important for GitHub Pages
};

export default nextConfig;
