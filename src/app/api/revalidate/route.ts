import { env } from "@/env";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  if (body.secret !== env.REVALIDATE_SECRET) {
    return new Response("You are not allowed to perfom this action!", {
      status: 401,
    });
  }

  revalidatePath(body.slug);
  return Response.json({ status: true });
}
