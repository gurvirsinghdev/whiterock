import "@payloadcms/next/css";

import config from "@payload-config";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import { ServerFunctionClient } from "payload";
import { importMap } from "@/app/(payload)/admin/importMap";

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

type Props = {
  children: React.ReactNode;
};
export default function PayloadLayout({ children }: Props) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
