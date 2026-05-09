import { cn } from "@/lib/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Bounded({ children, className }: Props) {
  return <div className={cn(className, "max-w-7xl mx-auto")}>{children}</div>;
}
