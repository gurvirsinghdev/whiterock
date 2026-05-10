import { env } from "@/env";
import { locales } from "@/lib/locales";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = (await request.json()) as { secret?: string; slug?: string };
  if (body.secret !== env.REVALIDATE_SECRET) {
    return new Response("You are not allowed to perfom this action!", {
      status: 401,
    });
  }

  locales.forEach((locale) => {
    revalidatePath(`/${locale}${body.slug}`);
  });
  return Response.json({ status: true });
}
