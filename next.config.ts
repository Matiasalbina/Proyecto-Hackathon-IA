import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['objectstorage.us-phoenix-1.oraclecloud.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
