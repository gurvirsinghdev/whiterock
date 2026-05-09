import { PageBlock } from "@/lib/intefaces";
import Bounded from "./bounded";

interface Props {
  block: PageBlock<"hero">;
}

export default function HeroBlock({ block }: Props) {
  return <Bounded>{block.heading}</Bounded>;
}
