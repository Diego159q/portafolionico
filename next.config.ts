import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    contentDispositionType: "inline",
  },
};

export default nextConfig;
