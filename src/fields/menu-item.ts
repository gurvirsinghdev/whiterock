import { Field } from "payload";

export const menuItem: Field[] = [
  {
    type: "checkbox",
    name: "is_menu_item",
    label: "Is Menu Item",
    defaultValue: false,
  },
  {
    type: "text",
    name: "menu_label",
    label: "Menu Label",
    localized: true,
    admin: {
      condition: (_, siblingData) => siblingData?.is_menu_item,
    },
    // @ts-expect-error Maybe Package Issue!
    validate: (value, { siblingData }) => {
      if (siblingData?.is_menu_item && !value) {
        return "Please provide a label for menu bar.";
      }
      return true;
    },
  },
];
