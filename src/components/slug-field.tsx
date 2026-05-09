"use client";

import { formatSlug } from "@/lib/utils";
import { TextInput, useField } from "@payloadcms/ui";
import { TextFieldClientComponent } from "payload";

const SlugField: TextFieldClientComponent = ({ path, ...props }) => {
  const { value, setValue } = useField<string>({
    path,
  });

  return (
    <TextInput
      {...props}
      path={path}
      value={value}
      label={props.field.label}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(formatSlug(e.target.value))
      }
    />
  );
};

export default SlugField;
