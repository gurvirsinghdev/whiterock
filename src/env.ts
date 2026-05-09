import * as z from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DB_URL: z.url(),
    PAYLOAD_SECRET: z.string().default("under-development"),
    REVALIDATE_SECRET: z.string().default("under-development"),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().default("http://localhost:3000"),
  },
  runtimeEnv: {
    DB_URL: process.env.DB_URL,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
