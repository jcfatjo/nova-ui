import type { HTMLAttributes } from "astro/types";

export type BaseProps = {
  as?: astroHTML.JSX.Element;
  asChild?: boolean;
} & HTMLAttributes<"div">
