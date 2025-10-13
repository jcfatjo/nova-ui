import type { HTMLAttributes } from "astro/types";
import type { ColorProps, OldBaseProps } from "../../Components.types.ts";

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
} & OldBaseProps & ColorProps & ButtonLoadingProps;

export type ButtonProps = ButtonBaseProps & HTMLAttributes<"button">
