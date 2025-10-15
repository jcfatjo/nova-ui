import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

export type Level = "1" | "2" | "3" | "4" | "5" | "6";

export type HeadingProps = {
  level?: Level;
} & BaseProps & ColorProps & HTMLAttributes<"p">;
