import sharp from "sharp";
import { env } from "@/env";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Pages } from "@/collections/Pages";
import { Media } from "@/collections/Media";
import { locales } from "./lib/locales";

export default buildConfig({
  sharp,
  collections: [Pages, Media],
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
});
