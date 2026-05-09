import { fetchPage, joinSegments } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    segments: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { segments } = await params;
  const slug = joinSegments(segments);
  const page = await fetchPage(slug);
  return <pre>{JSON.stringify(page, null, 2)}</pre>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments } = await params;
  const slug = joinSegments(segments);
  const page = await fetchPage(slug);

  return {
    title: page.page_title,
    description: page.meta_description,
  };
}
