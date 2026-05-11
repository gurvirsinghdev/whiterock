import { env } from "@/env";

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

export type ImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  format?: "auto" | "webp" | "avif" | "jpeg";
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
};

export const getImageUrl = (filename: string, options: ImageOptions = {}) => {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const mediaHost = `https://media.${new URL(siteUrl).host}`;

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(options)) {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  }

  const optionsString = params.toString().replace(/&/g, ",");
  const sourceUrl = new URL(filename, mediaHost).toString();

  return `${siteUrl}/cdn-cgi/image/${optionsString}/${sourceUrl}`;
};
