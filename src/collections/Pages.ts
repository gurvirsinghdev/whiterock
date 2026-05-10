import { heroBlock } from "@/blocks/hero";
import { partnersBlock } from "@/blocks/partners";
import { slugField } from "@/fields/slug";
import { invalidatePage } from "@/lib/isr";
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
          localized: true,
        },
        {
          type: "textarea",
          name: "meta_description",
          label: "Meta Description",
          localized: true,
        },
      ],
    },
    {
      type: "blocks",
      name: "blocks",
      label: "Blocks",
      blocks: [heroBlock, partnersBlock],
    },
  ],
  hooks: {
    afterChange: [
      ({ previousDoc, doc }) => {
        invalidatePage(doc.slug);
        if (previousDoc.slug && previousDoc.slug !== doc.slug)
          invalidatePage(previousDoc.slug);
      },
    ],
    afterDelete: [({ doc }) => invalidatePage(doc.slug)],
  },
};
