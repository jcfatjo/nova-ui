import type { LinkProps } from "./Link.types.ts";

export function getClassList({ variant = "plain", colorPalette = "gray" }: LinkProps) {
  return `nova-link variant-${variant} color-palette-${colorPalette}`;
}
