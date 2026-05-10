import { env } from "@/env";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Pages } from "@/collections/Pages";
import { Media } from "@/collections/Media";
import { locales } from "./lib/locales";
import { Services } from "./collections/Services";
import { r2Storage } from "@payloadcms/storage-r2";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const cloudflare = await getCloudflareContext({ async: true });

export default buildConfig({
  collections: [Pages, Media, Services],
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: env.DB_URL,
    },
  }),
  localization: {
    locales,
    fallback: true,
    defaultLocale: "en",
  },
  cors: ["http://localhost:3000", "https://whiterock-dev.gurvirsingh.me"],
  csrf: ["http://localhost:3000", "https://whiterock-dev.gurvirsingh.me"],
  plugins: [
    r2Storage({
      collections: { media: true },
      bucket: cloudflare.env.R2,
    }),
  ],
});
