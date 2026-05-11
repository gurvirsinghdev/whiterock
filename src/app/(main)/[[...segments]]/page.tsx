import { Metadata } from "next";
import Blocks from "@/components/blocks";
import { formatSlug, joinSegments } from "@/lib/utils";
import { getPage, getPages, unstableGetSettings } from "@/lib/payload-actions";
import { locales } from "@/lib/locales";
import { AppContext, PrimaryMenu } from "@/providers/AppProvider";
import Navigation from "@/components/navigation";

type Props = {
  params: Promise<{
    segments: string[];
  }>;
};

export async function generateStaticParams() {
  const pages = await getPages();
  return locales.flatMap((locale) =>
    pages.map((slug) => ({
      segments: [locale, ...slug.split("/").filter(Boolean)],
    })),
  );
}

const splitIntoLocaleAndSlug = (segments: string[]) => {
  const [locale, ...pathSegments] = segments;
  const slug = joinSegments(pathSegments);
  return { locale, slug };
};

export default async function Page({ params }: Props) {
  const { segments } = await params;
  const { locale, slug } = splitIntoLocaleAndSlug(segments);

  const [settings, page] = await Promise.all([
    unstableGetSettings(),
    getPage(slug, locale),
  ]);

  const menu: PrimaryMenu = (page.blocks ?? [])
    .filter((block) => block.is_menu_item)
    .flatMap((block) => {
      return {
        label: block.menu_label!,
        link: formatSlug(block.menu_label!).replace(/^\//, "#"),
      };
    });

  console.log(menu);

  return (
    <AppContext value={{ settings, menu }}>
      <Navigation />
      <Blocks blocks={page.blocks} />
    </AppContext>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments } = await params;
  const { locale, slug } = splitIntoLocaleAndSlug(segments);
  const page = await getPage(slug, locale);
  return {
    title: page.page_title,
    description: page.meta_description,
    alternates: {
      canonical: `/en${slug}`,
      languages: locales.reduce(
        (acc, locale) => ({ ...acc, [locale]: `/${locale}${slug}` }),
        {},
      ),
    },
  };
}
