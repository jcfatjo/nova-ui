import type { LinkProps } from "./Link.types.ts";

export function getLinkClassList({ underline = "hover", colorPalette = "gray" }: LinkProps) {
  return [
    "nova-link",
    `underline-${underline}`,
    `color-palette-${colorPalette}`,
  ];
}
