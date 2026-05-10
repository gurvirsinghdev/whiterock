import { Block } from "payload";

export const partnersBlock: Block = {
  slug: "partners",
  labels: { singular: "Partner", plural: "Partners" },
  fields: [
    {
      type: "array",
      name: "logos",
      label: "Logos",
      fields: [
        { type: "upload", relationTo: "media", name: "logo", label: "Logo" },
      ],
    },
  ],
};
