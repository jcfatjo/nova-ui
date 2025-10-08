import { HIDDEN_ATTR } from "./Base.constants.ts";

export class BaseComponent extends HTMLElement {
  public static get observedAttributes() {
    return [""];
  }

  public connectedCallback() {
    this._initContent();
  }

  private _initContent() {
    if (!this.firstElementChild) {
      return;
    }

    if (this.hasAttributes()) {
      this.getAttributeNames().forEach(attr => {
        if (attr === HIDDEN_ATTR || BaseComponent.observedAttributes.includes(attr)) {
          return;
        }

        const value = this.getAttribute(attr);

        if (value) {
          this.firstElementChild?.setAttribute(attr, value);
        }
      });
    }

    this.replaceWith(this.firstElementChild);
  }
}
