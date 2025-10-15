import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

export type Variant = "plain" | "underline";

export type LinkProps = {
  variant?: Variant;
  isExternal?: boolean;
} & BaseProps & ColorProps & HTMLAttributes<"a">;
