import HeroBlock from "./hero-block";
import { PageBlocks } from "@/lib/intefaces";
import PartnersBlock from "./partners-block";

interface Props {
  blocks: PageBlocks;
}

export default function Blocks({ blocks }: Props) {
  return (blocks ?? []).map((block, idx) => {
    switch (block.blockType) {
      case "hero":
        return <HeroBlock key={block.id} block={block} />;

      case "partners":
        return <PartnersBlock key={block.id} block={block} />;

      default:
        return <p key={idx}>Component for this block not found!</p>;
    }
  });
}
