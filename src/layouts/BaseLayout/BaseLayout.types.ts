import type { HTMLAttributes } from "astro/types";

export interface BaseLayoutProps extends HTMLAttributes<"html"> {
  title?: string;
  description?: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}
