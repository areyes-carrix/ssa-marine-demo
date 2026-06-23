import type { NextConfig } from "next";

const repoName = "ssa-marine-demo";

const nextConfig: NextConfig = {
  output: "export",

  basePath:
    process.env.NODE_ENV === "production"
      ? `/${repoName}`
      : "",

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? `/${repoName}/`
      : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;