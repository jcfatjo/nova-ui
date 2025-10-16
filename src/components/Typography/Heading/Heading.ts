import type { HeadingProps } from "./Heading.types.ts";

export function getHeadingClassList({ size = "xl", colorPalette = "gray" }: HeadingProps) {
  return [
    "nova-heading",
    `size-${size}`,
    `color-palette-${colorPalette}`,
  ];
}
