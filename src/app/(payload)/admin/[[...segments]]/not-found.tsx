import { generatePageMetadata, NotFoundPage } from "@payloadcms/next/views";
import { Metadata } from "next";
import config from "@payload-config";
import { importMap } from "@/app/(payload)/admin/importMap";

type Props = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export const generateMetadata = ({
  params,
  searchParams,
}: Props): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams });

export default function NotFound({ params, searchParams }: Props) {
  return NotFoundPage({ config, params, searchParams, importMap });
}
