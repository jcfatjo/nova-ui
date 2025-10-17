import type { ButtonProps } from "./Button.types.ts";

export function getButtonClassList(
  {
    shape = "rounded",
    fill = "solid",
    size = "md",
    colorPalette = "amber",
    iconOnly,
  }: ButtonProps,
) {
  const buttonClassList = [
    "nova-button",
    `shape-${shape}`,
    `fill-${fill}`,
    `size-${size}`,
    `color-palette-${colorPalette}`,
  ];

  if (iconOnly) {
    buttonClassList.push("icon-only");
  }

  return buttonClassList;
}
