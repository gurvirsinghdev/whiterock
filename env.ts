import { createEnv, str } from "next-safe-env";

export const env = createEnv({
  server: {
    database_url: str(),
    payload_secret: str().default("under-development"),
  },
  client: {},
  runtimeEnv: {
    database_url: process.env.DB_URL,
    payload_secret: process.env.PAYLOAD_SECRET,
  },
});
