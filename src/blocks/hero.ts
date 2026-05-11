import { menuItem } from "@/fields/menu-item";
import { Block } from "payload";

export const heroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero", plural: "Heros" },
  fields: [
    ...menuItem,
    {
      type: "text",
      name: "heading",
      label: "Heading",
      required: true,
      localized: true,
    },
    {
      type: "textarea",
      name: "subheading",
      label: "Sub Heading",
      localized: true,
    },
    {
      type: "upload",
      relationTo: "media",
      name: "background_image",
      label: "Background Image",
      required: true,
    },
    {
      type: "array",
      name: "buttons",
      label: "Buttons",
      required: true,
      fields: [
        {
          type: "text",
          name: "label",
          label: "Label",
          required: true,
          localized: true,
        },
        {
          type: "text",
          name: "url",
          label: "Url",
          required: true,
          localized: true,
        },
      ],
    },
  ],
};
