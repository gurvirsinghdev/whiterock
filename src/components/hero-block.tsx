import { PageBlock } from "@/lib/intefaces";
import { Media } from "@payload-types";
import Bounded from "./bounded";
import Link from "next/link";

interface Props {
  block: PageBlock<"hero">;
}

export default function HeroBlock({ block }: Props) {
  const heroImage = block.background_image as Media;
  return (
    <section className="w-screen relative h-auto">
      <div>
        {/*eslint-disable-next-line*/}
        <img
          src={heroImage.url!}
          alt={heroImage.alt}
          style={{ height: "70svh" }}
          className="object-cover object-bottom-right w-full"
        />
        <div className="bg-black/75 lg:bg-black/80 absolute inset-0"></div>
        <div className="bg-primary/10 absolute inset-0"></div>
      </div>
      <Bounded className="absolute inset-0 flex">
        <div className="text-white p-4 flex flex-col items-start justify-center grow md:max-w-3/4 lg:max-w-4/7 space-y-2">
          <h1 className="font-black font-heading text-pretty leading-tight text-[1.75rem] md:text-[2.5rem] lg:text-[3rem]">
            {block.heading}
          </h1>
          <p className="text-pretty lg:max-w-6/7">{block.subheading}</p>

          <div className="space-x-4 mt-2">
            {block.buttons.map((button, idx) => (
              <Link href={button.url} key={idx}>
                <button className="bg-deep-teal cursor-pointer py-2 px-4 text-white rounded-sm border-2 border-primary/10">
                  {button.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
}
