import { cn } from "@/lib/cn";
import "./globals.css";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const bodyFont = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhiteRock Motors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("min-h-full antialiased", bodyFont.className)}>
        {children}
      </body>
    </html>
  );
}
