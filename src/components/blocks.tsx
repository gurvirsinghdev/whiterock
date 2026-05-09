import HeroBlock from "./hero-block";
import { PageBlocks } from "@/lib/intefaces";

interface Props {
  blocks: PageBlocks;
}

export default function Blocks({ blocks }: Props) {
  return blocks.map((block) => {
    switch (block.blockType) {
      case "hero":
        return <HeroBlock key={block.id} block={block} />;

      default:
        return (
          <p key={block.id}>Component for {block.blockType} block not found!</p>
        );
    }
  });
}
