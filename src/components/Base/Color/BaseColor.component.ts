import type { ColorPalette } from "../../Components.types.ts";
import { BaseComponent } from "../Base.component.ts";
import { COMPONENTS_STYLES_ID } from "./BaseColor.constants.ts";
import type { StyleDeclaration } from "./BaseColor.types.ts";

export class BaseColorComponent extends BaseComponent {
  public static override get observedAttributes() {
    return ["color-palette"];
  }

  private _colorPalette: ColorPalette = "gray";

  public get colorPalette() {
    return this._colorPalette;
  }

  public set colorPalette(value: ColorPalette) {
    this._colorPalette = value;
  }

  public connectedCallback() {
    super.connectedCallback();
    this._initColorPalette();
  }

  public attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "color-palette") {
      this.colorPalette = newValue as ColorPalette;
    }
  }

  protected addStyleDeclaration(styleDeclaration: StyleDeclaration) {
    const cssStyleSheet = this._getCssStyleSheet();

    if (!cssStyleSheet) {
      return;
    }

    const cssRule = this._getCssRule(cssStyleSheet) as CSSStyleRule;

    if (cssRule) {
      return;
    }

    this._addRules(cssStyleSheet, styleDeclaration);
  }

  private _initColorPalette() {
    const styleDeclaration: StyleDeclaration = {
      selector: `.color-palette-${this.colorPalette}`,
      rules: [
        { property: "--nova-color-palette-50", value: `var(--nova-color-${this.colorPalette}-50)` },
        { property: "--nova-color-palette-100", value: `var(--nova-color-${this.colorPalette}-100)` },
        { property: "--nova-color-palette-200", value: `var(--nova-color-${this.colorPalette}-200)` },
        { property: "--nova-color-palette-300", value: `var(--nova-color-${this.colorPalette}-300)` },
        { property: "--nova-color-palette-400", value: `var(--nova-color-${this.colorPalette}-400)` },
        { property: "--nova-color-palette-500", value: `var(--nova-color-${this.colorPalette}-500)` },
        { property: "--nova-color-palette-600", value: `var(--nova-color-${this.colorPalette}-600)` },
        { property: "--nova-color-palette-700", value: `var(--nova-color-${this.colorPalette}-700)` },
        { property: "--nova-color-palette-800", value: `var(--nova-color-${this.colorPalette}-800)` },
        { property: "--nova-color-palette-900", value: `var(--nova-color-${this.colorPalette}-900)` },
        { property: "--nova-color-palette-950", value: `var(--nova-color-${this.colorPalette}-950)` },
        { property: "--nova-color-palette-contrast", value: `var(--nova-color-${this.colorPalette}-contrast)` },
        { property: "--nova-color-palette-fg", value: `var(--nova-color-${this.colorPalette}-fg)` },
        { property: "--nova-color-palette-subtle", value: `var(--nova-color-${this.colorPalette}-subtle)` },
        { property: "--nova-color-palette-muted", value: `var(--nova-color-${this.colorPalette}-muted)` },
        { property: "--nova-color-palette-emphasized", value: `var(--nova-color-${this.colorPalette}-emphasized)` },
        { property: "--nova-color-palette-solid", value: `var(--nova-color-${this.colorPalette}-solid)` },
        { property: "--nova-color-palette-focus-ring", value: `var(--nova-color-${this.colorPalette}-focus-ring)` },
      ],
    };

    this.addStyleDeclaration(styleDeclaration);
  }

  private _getCssStyleSheet() {
    const styleElement = document.getElementById(COMPONENTS_STYLES_ID) as HTMLStyleElement | null;

    if (styleElement) {
      return styleElement.sheet;
    }

    const componentsStyleElement = document.createElement("style");
    componentsStyleElement.id = COMPONENTS_STYLES_ID;
    document.head.appendChild(componentsStyleElement);

    return componentsStyleElement.sheet;
  }

  private _getCssRule(styleSheet: CSSStyleSheet) {
    const cssRules = styleSheet.cssRules;

    return cssRules[Symbol.iterator]().find(rule => {
      return rule instanceof CSSStyleRule && rule.selectorText === `.color-palette-${this.colorPalette}`;
    });
  }

  private _addRules(styleSheet: CSSStyleSheet, styleDeclaration: StyleDeclaration) {
    styleDeclaration.rules.forEach(rule => {
      styleSheet.insertRule(
        `${styleDeclaration.selector} { ${rule.property}: ${rule.value}; }`,
        styleSheet.cssRules.length,
      );
    });
  }
}
