import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

type Size = "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

export interface HeadingProps extends BaseProps, ColorProps, HTMLAttributes<"p"> {
  size?: Size;
}
