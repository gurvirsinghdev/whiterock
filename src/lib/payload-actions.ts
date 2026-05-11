import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const getPage = async (slug: string, locale: string) => {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: "pages",
    page: 1,
    limit: 1,
    where: { slug: { equals: slug } },

    // @ts-expect-error If the provided locale is invalid, the fallback locale would be used!
    locale,
    fallbackLocale: "en",
  });

  const page = data.docs[0];
  if (!page) notFound();
  return page;
};

export const getSettings = async () => {
  const payload = await getPayload({ config });
  return payload.findGlobal({
    slug: "site-settings",
  });
};
export const unstableGetSettings = unstable_cache(
  getSettings,
  ["settings-cache"],
  {
    tags: ["settings"],
  },
);

export const getPages = async () => {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: "pages",
    pagination: false,
    select: { slug: true },
  });
  return data.docs.map((page) => page.slug);
};
