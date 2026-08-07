import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    contentDispositionType: "attachment",
  },
};

export default nextConfig;