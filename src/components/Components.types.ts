import colors from "tailwindcss/colors";

export interface BaseProps {
  as?: astroHTML.JSX.Element;
}

type NestedColorKeys<T> = {
  [K in keyof T]: T[K] extends object ? K : never
}[keyof T];

type ColorPalette = NestedColorKeys<typeof colors>;

export interface ColorProps {
  colorPalette?: ColorPalette;
}
