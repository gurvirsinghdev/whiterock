import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  sectionClassName?: string;
  containerClassName?: string;
}

export default function Bounded({
  children,
  disabled,
  sectionClassName,
  containerClassName,
}: Props) {
  return (
    <section className={cn("w-screen h-auto relative", sectionClassName)}>
      <div
        className={cn(
          containerClassName,
          "max-w-7xl mx-auto",
          disabled && "max-w-screen",
        )}
      >
        {children}
      </div>
    </section>
  );
}
