import { updateTag } from "next/cache";
import { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "group",
      name: "metadata",
      label: "Metadata",
      fields: [
        {
          type: "upload",
          name: "logo",
          label: "Website Logo",
          relationTo: "media",
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        updateTag("settings");
      },
    ],
  },
};
