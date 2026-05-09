import sharp from "sharp";
import { env } from "@/env";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Pages } from "@/collections/Pages";
import { Media } from "@/collections/Media";

export default buildConfig({
  sharp,
  collections: [Pages, Media],
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: env.DB_URL,
    },
  }),
});
