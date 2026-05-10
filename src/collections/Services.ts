import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name",
  },
  access: { read: () => true },
  fields: [
    {
      type: "text",
      name: "name",
      label: "name",
      required: true,
      localized: true,
    },
    {
      type: "upload",
      relationTo: "media",
      name: "image",
      label: "Image",
      required: true,
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      required: true,
      localized: true,
    },
  ],
};
