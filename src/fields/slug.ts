import { formatSlug } from "@/lib/utils";
import { Field } from "payload";

export const slugField: Field = {
  type: "text",
  name: "slug",
  required: true,
  admin: {
    description: "URL-friendly identifier for a pathname.",
  },
  hooks: {
    beforeValidate: [({ value }) => formatSlug(value)],
  },
  validate: (value: string | null | undefined) => {
    if (!value) return "Slug is required!";
    if (!value.startsWith("/")) return "Slug must start with /";
    if (/\s/.test(value)) return "Slug cannot contain spaces.";
    return true;
  },
};
