import { menuItem } from "@/fields/menu-item";
import { Block } from "payload";

export const partnersBlock: Block = {
  slug: "partners",
  labels: { singular: "Partner", plural: "Partners" },
  fields: [
    ...menuItem,
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
