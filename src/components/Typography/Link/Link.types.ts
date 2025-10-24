import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

type Underline = "never" | "hover" | "always";

export interface LinkProps extends BaseProps, ColorProps, HTMLAttributes<"a"> {
  underline?: Underline;
  external?: boolean;
}
