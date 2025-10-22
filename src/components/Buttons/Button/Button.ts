import type { ButtonProps } from "./Button.types.ts";

export function getButtonClassList(
  {
    shape = "rounded",
    fill = "solid",
    size = "md",
    block = false,
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

  if (block) {
    buttonClassList.push("block-button");
  }

  if (iconOnly) {
    buttonClassList.push("icon-only");
  }

  return buttonClassList;
}
