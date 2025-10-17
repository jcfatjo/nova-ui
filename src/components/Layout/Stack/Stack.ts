import type { StackProps } from "./Stack.types.ts";

export function getStackClassList(
  {
    direction = "col",
  }: StackProps,
) {
  return [
    "nova-stack",
    `direction-${direction}`,
  ];
}
