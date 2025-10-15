import type { HeadingProps } from "./Heading.types.ts";

export function getHeadingClassList({ level = "2", colorPalette = "gray" }: HeadingProps) {
  return [
    "nova-heading",
    `level-${level}`,
    `color-palette-${colorPalette}`,
  ];
}
