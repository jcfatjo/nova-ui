import type { LinkProps } from "./Link.types.ts";

export function getLinkClassList({ variant = "plain", colorPalette = "gray" }: LinkProps) {
  return `nova-link variant-${variant} color-palette-${colorPalette}`;
}
