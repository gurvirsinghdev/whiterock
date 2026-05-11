import { menuItem } from "@/fields/menu-item";
import { Block } from "payload";

export const servicesBlock: Block = {
  slug: "service",
  labels: { singular: "Service", plural: "Services" },
  fields: [
    ...menuItem,
    {
      type: "text",
      name: "block_heading",
      label: "Block Heading",
      required: true,
      localized: true,
    },
    {
      type: "text",
      name: "block_subheading",
      label: "Block SubHeading",
      required: true,
      localized: true,
    },
    {
      type: "array",
      name: "services",
      label: "Services",
      fields: [
        {
          type: "relationship",
          relationTo: "services",
          name: "service",
        },
      ],
    },
  ],
};
