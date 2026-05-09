import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  fields: [
    { type: "text", name: "alt", label: "Alternative Text", required: true },
  ],
};
