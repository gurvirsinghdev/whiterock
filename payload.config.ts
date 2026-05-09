import sharp from "sharp";
import { env } from "./env";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";

export default buildConfig({
  sharp,
  collections: [],
  secret: env.payload_secret,
  db: postgresAdapter({
    pool: {
      connectionString: env.database_url,
    },
  }),
});
