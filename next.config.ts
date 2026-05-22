import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";  // ← sem o 2

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {},  
};

export default withContentlayer(nextConfig);