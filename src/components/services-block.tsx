import { PageBlock } from "@/lib/intefaces";
import Bounded from "./bounded";
import { Media, Service } from "@payload-types";
import { formatSlug, getImageUrl } from "@/lib/utils";

type Props = {
  block: PageBlock<"service">;
};
export default function ServicesBlock({ block }: Props) {
  return (
    <Bounded as="section" className="p-4 space-y-4">
      <div
        id={
          !block.is_menu_item
            ? undefined
            : formatSlug(block.menu_label!).replace(/^\//, "")
        }
      >
        <h2 className="font-heading font-medium text-lg">
          {block.block_heading}
        </h2>
        <p>{block.block_subheading}</p>
      </div>

      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6">
        {block.services
          ?.filter(
            (item): item is { service: Service } =>
              item.service != null && typeof item.service !== "number",
          )
          .map(({ service }) => (
            <div key={service.id} className="space-y-4">
              <div className="aspect-square relative w-full rounded-md md:aspect-video overflow-hidden">
                <div className="absolute -z-10 inset-0 animate-pulse bg-neutral-200 "></div>
                {/*eslint-disable-next-line*/}
                <img
                  src={getImageUrl((service.image as Media).filename!, {
                    width: 720,
                    format: "webp",
                    quality: 70,
                  })}
                  alt={(service.image as Media).alt ?? "Service Image"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg font-heading font-medium leading-2 pt-2">
                {service.name}
              </h4>
              <div className="space-y-2">
                {service.description.split("\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Bounded>
  );
}
