import { type Page } from "@payload-types";

export type PageBlocks = Page["blocks"];

export type PageBlockKeys = NonNullable<PageBlocks>[number]["blockType"];
export type PageBlock<TType extends PageBlockKeys> = Extract<
  NonNullable<PageBlocks>[number],
  { blockType: TType }
>;
