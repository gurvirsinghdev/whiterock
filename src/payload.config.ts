import { env } from "@/env";
import { buildConfig } from "payload";
import { Pages } from "@/collections/Pages";
import { Media } from "@/collections/Media";
import { locales } from "./lib/locales";
import { Services } from "./collections/Services";
import { r2Storage } from "@payloadcms/storage-r2";
import {
  CloudflareContext,
  getCloudflareContext,
} from "@opennextjs/cloudflare";
import { sqliteD1Adapter } from "@payloadcms/db-d1-sqlite";
import { GetPlatformProxyOptions } from "wrangler";
import { SiteSettings } from "./collections/SiteSettings";

const getCloudflareContextFromWrangler =
  async (): Promise<CloudflareContext> => {
    return import(
      /* webpackIgnore: true */ `${"__wrangler".replaceAll("_", "")}`
    ).then(({ getPlatformProxy }) =>
      getPlatformProxy({
        environment: process.env.CLOUDFLARE_ENV,
        remoteBindings: isProduction,
      } satisfies GetPlatformProxyOptions),
    );
  };

const isProduction = process.env.NODE_ENV === "production";
const cloudflare = isProduction
  ? await getCloudflareContext({ async: true })
  : await getCloudflareContextFromWrangler();

export default buildConfig({
  globals: [SiteSettings],
  collections: [Pages, Media, Services],
  secret: env.PAYLOAD_SECRET,
  db: sqliteD1Adapter({ binding: cloudflare.env.D1 }),
  localization: {
    locales,
    fallback: true,
    defaultLocale: "en",
  },
  cors: ["http://localhost:3000", "https://whiterock.gurvirsingh.me"],
  csrf: ["http://localhost:3000", "https://whiterock.gurvirsingh.me"],
  plugins: [
    r2Storage({
      collections: { media: true },
      bucket: cloudflare.env.R2,
    }),
  ],
});
