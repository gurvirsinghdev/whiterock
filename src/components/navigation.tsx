"use client";
import { getImageUrl } from "@/lib/utils";
import { useAppContext } from "@/providers/AppProvider";
import { Media } from "@payload-types";
import { useState } from "react";
import Bounded from "./bounded";
import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Navigation() {
  const { settings, menu } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logo = settings?.metadata?.logo as Media;
  const logoFilename = logo?.filename ?? "";
  const logoAlt = logo?.alt || "WhiteRock Logo";
  const logoUrl = getImageUrl(logoFilename, {
    width: 145,
    height: 70,
    format: "avif",
  });

  return (
    <nav>
      <div></div>

      <Bounded className="p-4 flex items-center justify-between">
        <div>
          {/*eslint-disable-next-line*/}
          <img width={145} height={70} src={logoUrl} alt={logoAlt} />
        </div>

        <ul>
          {menu.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.link}
                className={cn(
                  "inline-block cursor-pointer",
                  "hover:text-primary hover:underline hover:underline-offset-2",
                  idx === 0 && "text-primary underline underline-offset-2",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Bounded>
    </nav>
  );
}
