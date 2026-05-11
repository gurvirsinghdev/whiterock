import "./globals.css";
import { cn } from "@/lib/cn";
import { DM_Sans, Poppins } from "next/font/google";

const bodyFont = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
});
const headingFont = Poppins({
  weight: ["500", "900"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "min-h-full antialiased",
          bodyFont.className,
          headingFont.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
