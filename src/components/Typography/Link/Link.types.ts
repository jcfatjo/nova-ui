import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

export type Underline = "never" | "hover" | "always";

export type LinkProps = {
  underline?: Underline;
  external?: boolean;
} & BaseProps & ColorProps & HTMLAttributes<"a">;
