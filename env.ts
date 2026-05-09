import { createEnv, str } from "next-safe-env";

export const env = createEnv({
  server: {
    database_url: str().default(process.env.DB_URL!),
    payload_secret: str().default("under-development"),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: str().default("http://localhost:3000"),
  },
  runtimeEnv: {
    database_url: process.env.DB_URL,
    payload_secret: process.env.PAYLOAD_SECRET,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
