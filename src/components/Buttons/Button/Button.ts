import type { ButtonProps } from "./Button.types.ts";

export function getClassList({ size = "md", variant = "solid", colorPalette = "gray" }: ButtonProps) {
  return `nova-button size-${size} variant-${variant} color-palette-${colorPalette}`;
}

export function getDisabledState({ disabled, loading }: ButtonProps) {
  return disabled || loading || undefined;
}
