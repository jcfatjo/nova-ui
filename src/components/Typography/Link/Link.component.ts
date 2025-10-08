import { BaseColorComponent } from "../../Base/Color/BaseColor.component.ts";
import type { Variant } from "./Link.types.ts";

export class LinkComponent extends BaseColorComponent {
  public static is = "link-component";

  public static override get observedAttributes() {
    return [...BaseColorComponent.observedAttributes, "variant"];
  }

  private _variant: Variant = "plain";

  public get variant() {
    return this._variant;
  }

  public set variant(value: Variant) {
    this._variant = value;
  }

  public attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "variant") {
      this.variant = (newValue as Variant) || "plain";
    } else {
      super.attributeChangedCallback(name, oldValue, newValue);
    }
  }

  public connectedCallback() {
    super.connectedCallback();
    this._initStyles();
  }

  private _initStyles() {
    const styleDeclaration = {
      selector: `.variant-${this.variant}.color-palette-${this.colorPalette} a`,
      rules: [
        { property: "--mix-textDecorationColor", value: `color-mix(in srgb, currentColor 20%, transparent)` },
      ],
    };

    this.addStyleDeclaration(styleDeclaration);
  }
}

customElements.define(LinkComponent.is, LinkComponent);
