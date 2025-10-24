import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

export interface PortalProps extends BaseProps, HTMLAttributes<"div"> {
  container?: string;
  disabled?: boolean;
}
