import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

export type Size = "xs" | "sm" | "md" | "lg";

export type TextProps = {
  size?: Size;
  truncate?: boolean;
  lineClamp?: number;
} & BaseProps & ColorProps & HTMLAttributes<"p">;
