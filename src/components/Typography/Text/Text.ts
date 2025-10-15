import type { TextProps } from "./Text.types.ts";

export function getTextClassList({ size = "md", truncate = false, lineClamp, colorPalette = "gray" }: TextProps) {
  const classList = [
    "nova-text",
    `size-${size}`,
    `color-palette-${colorPalette}`,
  ];

  if (truncate) {
    classList.push("truncate");
  }

  if (lineClamp) {
    classList.push("line-clamp-[var(--line-clamp)]");
  }

  return classList;
}
