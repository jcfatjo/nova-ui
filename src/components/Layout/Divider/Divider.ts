import type { DividerProps } from "./Divider.types.ts";

export function getDividerClassList(
  {
    orientation = "horizontal",
    position = "full",
    lineStyle = "solid",
    thickness = "sm",
    labelPlacement = "center",
    subheaderPlacement = "start",
  }: DividerProps,
  isShowLabel = false,
  isShowSubheader = false,
) {
  const dividerClassList = [
    "nova-divider",
    `orientation-${orientation}`,
    `line-style-${lineStyle}`,
    `thickness-${thickness}`,
  ];

  if (orientation === "horizontal") {
    dividerClassList.push(`position-${position}`);
  }

  if (isShowLabel) {
    dividerClassList.push(`with-label label-placement-${labelPlacement}`);
  }

  if (isShowSubheader) {
    dividerClassList.push(`subheader-placement-${subheaderPlacement}`);
  }

  return dividerClassList;
}
