import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  webpack: (config) => {
    return config; // Ensure Webpack is used
  },
};

export default nextConfig;
