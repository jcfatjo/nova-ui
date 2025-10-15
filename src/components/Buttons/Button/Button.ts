import type { ButtonsBaseProps } from "../Buttons.types.ts";

export function getClassList({ size = "md", variant = "solid", colorPalette = "gray" }: Partial<ButtonsBaseProps>) {
  return `nova-button size-${size} variant-${variant} color-palette-${colorPalette}`;
}
