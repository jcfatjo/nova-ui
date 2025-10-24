import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

export interface ContainerProps extends BaseProps, HTMLAttributes<"div"> {
  centerContent?: boolean;
  fluid?: boolean;
}
