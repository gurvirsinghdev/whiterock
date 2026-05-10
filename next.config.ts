import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["whiterock-dev.gurvirsingh.me"],
  serverExternalPackages: ["drizzle-kit", "pg-cloudflare"],
};

export default withPayload(nextConfig);
