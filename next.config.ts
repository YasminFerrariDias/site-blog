import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer"

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {}, 
};

export default withContentlayer(nextConfig);