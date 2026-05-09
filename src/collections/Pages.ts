import { slugField } from "@/fields/slug";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "name",
  },
  access: { read: () => true },
  fields: [
    {
      type: "text",
      name: "name",
    },
    slugField,
    {
      type: "collapsible",
      label: "Page Metadata",
      fields: [
        {
          type: "text",
          name: "page_title",
          label: "Page Title",
          required: true,
        },
        {
          type: "textarea",
          name: "meta_description",
          label: "Meta Description",
        },
      ],
    },
  ],
};
