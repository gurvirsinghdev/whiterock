import { env } from "@/env";
import { Page } from "@payload-types";
import { notFound } from "next/navigation";

export const formatSlug = (input: string = "") => {
  const slug = input
    .trim()
    .toLowerCase()
    .replace(/\s+/, "-")
    .replace(/[^a-z0-9/-]/g, "")
    .replace(/^\/+/, "");
  return `/${slug}`;
};

export const fetchPage = async (slug: string): Promise<Page> => {
  const apiPath = "/api/pages?";
  const queryOptions = `where[slug][equals]=${slug}`;

  const requestUrl = `${env.NEXT_PUBLIC_SITE_URL}${apiPath}${queryOptions}`;
  const request = await fetch(requestUrl, { next: { revalidate: 0 } });
  const pageData = await request.json();

  const page = pageData.docs?.[0] as Page | undefined;
  if (!page) throw notFound();
  return page;
};

export const joinSegments = (segments: string[] | undefined) => {
  return "/" + (segments ?? []).join("/");
};
