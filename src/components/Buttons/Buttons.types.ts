import type { BaseProps, ColorProps } from "../Components.types.ts";

type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Variant = "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";

type SpinnerPlacement = "start" | "end";

export type ButtonsBaseProps = {
  size?: Size;
  variant?: Variant;
  loading?: boolean;
  loadingText?: astroHTML.JSX.Element;
  spinner?: astroHTML.JSX.Element;
  spinnerPlacement?: SpinnerPlacement;
} & BaseProps & ColorProps;
