import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

export type ContainerProps = {
  centerContent?: boolean;
  fluid?: boolean;
} & BaseProps & HTMLAttributes<"div">;
