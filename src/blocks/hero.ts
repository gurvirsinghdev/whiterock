import { Block } from "payload";

export const heroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero", plural: "Heros" },
  fields: [
    { type: "text", name: "heading", label: "Heading", required: true },
    { type: "textarea", name: "subheading", label: "Sub Heading" },
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
        { type: "text", name: "label", label: "Label", required: true },
        { type: "text", name: "url", label: "Url", required: true },
      ],
    },
  ],
};
