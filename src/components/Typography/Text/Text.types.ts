import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

type Size = "xs" | "sm" | "md" | "lg";

export interface TextProps extends BaseProps, ColorProps, HTMLAttributes<"p"> {
  size?: Size;
  truncate?: boolean;
  lineClamp?: number;
}
