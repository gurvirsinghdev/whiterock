import { Metadata } from "next";
import Blocks from "@/components/blocks";
import { joinSegments } from "@/lib/utils";
import { getPage, getPages } from "@/lib/payload-actions";

type Props = {
  params: Promise<{
    segments: string[];
  }>;
};

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((slug) => ({
    segments: slug.split("/").filter(Boolean),
  }));
}

export default async function Page({ params }: Props) {
  const { segments } = await params;
  const slug = joinSegments(segments);
  const page = await getPage(slug);
  return <Blocks blocks={page.blocks} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments } = await params;
  const slug = joinSegments(segments);
  const page = await getPage(slug);
  return {
    title: page.page_title,
    description: page.meta_description,
  };
}
