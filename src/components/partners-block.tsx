import { PageBlock } from "@/lib/intefaces";
import Bounded from "./bounded";
import Marquee from "react-fast-marquee";
import { Media } from "@payload-types";
import { getImageUrl } from "@/lib/utils";

type Props = {
  block: PageBlock<"partners">;
};

export default function PartnersBlock({ block }: Props) {
  return (
    <Bounded as="section">
      <Marquee speed={40} gradient={true} autoFill>
        {block.logos?.map(({ logo }) => (
          <div key={(logo as Media).id} className="relative h-24 w-32 mx-4">
            {/*eslint-disable-next-line*/}
            <img
              src={getImageUrl((logo as Media).filename!, {
                width: 256,
                format: "avif",
                quality: 60,
              })}
              alt={(logo as Media).alt ?? "Partner Logo"}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </Bounded>
  );
}
