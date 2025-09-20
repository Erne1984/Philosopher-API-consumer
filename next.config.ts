import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iep.utm.edu",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
