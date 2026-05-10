import { cn } from "@/lib/cn";

interface Props {
  className?: string;
  as?: "div" | "section";
  children: React.ReactNode;
}

export default function Bounded({
  as: As = "div",
  children,
  className,
}: Props) {
  return <As className={cn(className, "max-w-7xl mx-auto")}>{children}</As>;
}
