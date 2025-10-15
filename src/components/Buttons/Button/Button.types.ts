import type { ButtonsBaseProps } from "../Buttons.types.ts";

type IconButtonBaseProps = {
  icon?: boolean;
};

export type ButtonProps = ButtonsBaseProps & IconButtonBaseProps;
