import { env } from "@/env";

export const invalidatePage = async (slug: string) => {
  const webhookURL = `${env.NEXT_PUBLIC_SITE_URL}/api/revalidate`;
  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      slug,
      secret: env.REVALIDATE_SECRET,
    }),
  });
};
