import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";

export const getPage = async (slug: string) => {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: "pages",
    page: 1,
    limit: 1,
    where: { slug: { equals: slug } },
  });

  const page = data.docs[0];
  if (!page) notFound();
  return page;
};

export const getPages = async () => {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: "pages",
    pagination: false,
    select: { slug: true },
  });
  return data.docs.map((page) => page.slug);
};
