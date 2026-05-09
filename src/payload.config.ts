import sharp from "sharp";
import { env } from "@/env";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Pages } from "@/collections/Pages";

export default buildConfig({
  sharp,
  collections: [Pages],
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: env.DB_URL,
    },
  }),
});
