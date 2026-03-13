import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.midaid.com" }],
        destination: "https://midaid.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
