import { fetchPage } from "@/lib/utils";
import { Metadata } from "next";

export default async function Page() {
  return (
    <div>
      <span>Hello, World!</span>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPage("/");
  const data = page.docs?.[0];
  return {
    title: data?.page_title,
    description: data?.meta_description,
  };
}
