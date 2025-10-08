import colors from "tailwindcss/colors";

export type BaseProps = {
  as?: astroHTML.JSX.Element;
  asChild?: boolean;
};

type NestedColorKeys<T> = {
  [K in keyof T]: T[K] extends object ? K : never
}[keyof T];

export type ColorPalette = NestedColorKeys<typeof colors>;

export type ColorProps = {
  colorPalette?: ColorPalette;
};
