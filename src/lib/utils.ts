export const formatSlug = (input: string = "") => {
  const slug = input
    .trim()
    .toLowerCase()
    .replace(/\s+/, "-")
    .replace(/[^a-z0-9/-]/g, "")
    .replace(/^\/+/, "");
  return `/${slug}`;
};

export const joinSegments = (segments: string[] | undefined) => {
  return "/" + (segments ?? []).join("/");
};

export const getPageCahceTag = (slug: string) => `page:${slug}`;
