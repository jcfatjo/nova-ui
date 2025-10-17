import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

type Direction = "row" | "col";

export type StackProps = {
  direction?: Direction;
  horizontal?: boolean;
} & BaseProps & HTMLAttributes<"div">
