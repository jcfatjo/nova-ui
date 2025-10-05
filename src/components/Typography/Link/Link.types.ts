import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

type Variant = "plain" | "underline";

type LinkBaseProps = {
  variant?: Variant;
};

export type LinkProps = BaseProps & LinkBaseProps & HTMLAttributes<"a">;

export const LinkClasses = [
  "inline-flex",
  "items-center",
  "outline-none",
  "gap-1.5",
  "cursor-pointer",
  "rounded-xs",
  "text-gray-800",
];

export const VariantClasses = {
  plain: "hover:underline",
  underline: "underline",
};
