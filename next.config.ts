import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/almadrasa-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
