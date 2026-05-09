import { type Page } from "@payload-types";

export type PageBlocks = Page["blocks"];

export type PageBlockKeys = Page["blocks"][number]["blockType"];
export type PageBlock<TType extends PageBlockKeys> = Extract<
  Page["blocks"][number],
  { blockType: TType }
>;
