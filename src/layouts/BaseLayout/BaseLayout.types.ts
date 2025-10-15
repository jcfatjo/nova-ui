import type { HTMLAttributes } from "astro/types";

export type BaseLayoutProps = {
  title?: string;
  description?: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
} & HTMLAttributes<"html">
