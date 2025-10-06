import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../../Components.types.ts";

type Variant = "plain" | "underline";

type LinkBaseProps = {
  variant?: Variant;
} & BaseProps & ColorProps;

export type LinkProps = LinkBaseProps & HTMLAttributes<"a">;
