import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

type Direction = "row" | "col";

export interface StackProps extends BaseProps, HTMLAttributes<"div"> {
  direction?: Direction;
}
