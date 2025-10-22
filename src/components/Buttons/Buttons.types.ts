import type { HTMLAttributes } from "astro/types";
import type { BaseProps, ColorProps } from "../Components.types.ts";

type Shape = "sharp" | "rounded" | "circular";

type Fill = "solid" | "tonal" | "surface" | "outline" | "clear" | "text";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type SpinnerPlacement = "start" | "end";

interface ButtonsLoadingProps {
  loading?: boolean;
  loadingText?: astroHTML.JSX.Element;
  loadingSpinner?: astroHTML.JSX.Element;
  spinnerPlacement?: SpinnerPlacement;
}

export interface ButtonsBaseProps extends BaseProps, ButtonsLoadingProps, ColorProps, HTMLAttributes<"button"> {
  shape?: Shape;
  fill?: Fill;
  size?: Size;
  block?: boolean;
}
