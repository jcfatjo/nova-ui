import type { HTMLAttributes } from "astro/types";
import type { BaseProps } from "../../Components.types.ts";

type Orientation = "horizontal" | "vertical";

type Position = "full" | "inset" | "middle";

type LineStyle = "solid" | "dashed" | "dotted";

type Thickness = "xs" | "sm" | "md" | "lg" | "xl";

type LabelPlacement = "start" | "center" | "end";

type SubheaderPlacement = "start" | "end";

export interface DividerProps extends BaseProps, HTMLAttributes<"div"> {
  orientation?: Orientation;
  position?: Position;
  lineStyle?: LineStyle;
  thickness?: Thickness;
  labelPlacement?: LabelPlacement;
  subheaderPlacement?: SubheaderPlacement;
}
