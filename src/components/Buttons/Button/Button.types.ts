import type { HTMLAttributes } from "astro/types";
import type { ButtonsBaseProps } from "../Buttons.types.ts";

type IconButtonBaseProps = {
  icon?: boolean;
} & ButtonsBaseProps;

export type ButtonProps = IconButtonBaseProps & HTMLAttributes<"button">
