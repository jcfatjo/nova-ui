import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Variant = "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";

type SpinnerPlacement = "start" | "end";

type ButtonLoadingProps = {
  loading?: boolean;
  loadingText?: astroHTML.JSX.Element;
  spinner?: astroHTML.JSX.Element;
  spinnerPlacement?: SpinnerPlacement;
};

type ButtonBaseProps = {
  size?: Size;
  variant?: Variant;
} & ButtonLoadingProps;

export type ButtonProps = BaseProps & ButtonBaseProps & HTMLAttributes<"button">

export const BUTTON_CLASS_LIST = [
  "inline-flex",
  "appearance-none",
  "items-center",
  "justify-center",
  "select-none",
  "relative",
  "rounded-sm",
  "whitespace-nowrap",
  "align-middle",
  "border-1",
  "cursor-pointer",
  "outline-0",
  "leading-5",
  "isolate",
  "font-medium",
  "transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,translate,transform]",
  "duration-200",
];

export const SizeClassLists = {
  "2xs": ["h-6", "min-w-6", "text-xs", "px-2", "gap-1"],
  xs: ["h-8", "min-w-8", "text-xs", "px-2.5", "gap-1"],
  sm: ["h-9", "min-w-9", "text-sm", "px-3.5", "gap-2"],
  md: ["h-10", "min-w-10", "text-sm", "px-4", "gap-2"],
  lg: ["h-11", "min-w-11", "text-base", "px-5", "gap-3"],
  xl: ["h-12", "min-w-12", "text-base", "px-5", "gap-2.5"],
  "2xl": ["h-16", "min-w-16", "text-lg", "px-7", "gap-3"],
};

export const VariantClassLists = {
  solid: ["border-transparent", "bg-teal-600", "text-white", "hover:bg-teal-600/90"],
  subtle: ["border-transparent", "bg-teal-100", "text-teal-700", "hover:bg-teal-200"],
  surface: ["border-teal-200", "bg-teal-100", "text-teal-700", "hover:bg-teal-200"],
  outline: ["border-teal-200", "text-teal-700", "hover:bg-teal-100"],
  ghost: ["border-transparent", "text-teal-700", "hover:bg-teal-100"],
  plain: ["border-transparent", "text-teal-700"],
};
