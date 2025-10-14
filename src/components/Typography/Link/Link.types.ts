import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

export type Variant = "plain" | "underline";

type LinkBaseProps = {
  variant?: Variant;
  isExternal?: boolean;
} & BaseProps & ColorProps;

export type LinkProps = LinkBaseProps & HTMLAttributes<"a">;
