import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? process.env.NEXT_PUBLIC_BASE_PATH || "/RINO" : "";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath,
        images: { unoptimized: true },
        typescript: { tsconfigPath: "tsconfig.pages.json" },
      }
    : {}),
};

export default nextConfig;
