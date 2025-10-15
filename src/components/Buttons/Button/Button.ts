import type { ButtonProps } from "./Button.types.ts";

export function getButtonClassList({ size = "md", variant = "solid", colorPalette = "gray" }: ButtonProps) {
  return `nova-button size-${size} variant-${variant} color-palette-${colorPalette}`;
}
