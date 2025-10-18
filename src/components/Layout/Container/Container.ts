import type { ContainerProps } from "./Container.types.ts";

export function getContainerClassList(
  {
    centerContent,
    fluid,
  }: ContainerProps,
) {
  const classList = ["nova-container"];

  if (centerContent) {
    classList.push("center-content");
  }

  if (fluid) {
    classList.push("fluid");
  }

  return classList;
}
