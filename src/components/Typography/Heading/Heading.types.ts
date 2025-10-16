import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

export type Size = "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

export type HeadingProps = {
  size?: Size;
} & BaseProps & ColorProps & HTMLAttributes<"p">;
