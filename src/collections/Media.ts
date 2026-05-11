import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    mimeTypes: ["image/*"],
  },
  access: { read: () => true },
  fields: [
    {
      type: "text",
      name: "alt",
      label: "Alternative Text",
      required: true,
      localized: true,
    },
  ],
};
