import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { locales } from "./lib/locales";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const alreadyLocalized = locales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  );
  if (alreadyLocalized) return NextResponse.next();

  const fallbackLocalizedUrl = new URL(`/en${pathname}`, request.url);
  return NextResponse.redirect(fallbackLocalizedUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
