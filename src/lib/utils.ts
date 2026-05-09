import { env } from "../../env";

export const formatSlug = (input: string = "") => {
  const slug = input
    .trim()
    .toLowerCase()
    .replace(/\s+/, "-")
    .replace(/[^a-z0-9/-]/g, "")
    .replace(/^\/+/, "");
  return `/${slug}`;
};

export const fetchPage = async (slug: string) => {
  const apiPath = "/api/pages?";
  const queryOptions = `where[slug][equals]=${slug}`;

  const requestUrl = `http://localhost:3000${apiPath}${queryOptions}`;
  const request = await fetch(requestUrl, { next: { revalidate: 0 } });
  return request.json();
};
