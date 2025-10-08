import colors from "tailwindcss/colors";
import type { ColorPalette } from "./Components.types.ts";

export const DISABLED_CLASS_LIST = [
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
];

export const COLORS: ColorPalette[] = Object.entries(colors)
.filter(([_, value]) => typeof value === "object" && value !== null)
.map(([name]) => name as ColorPalette);
