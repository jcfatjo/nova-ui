import { HIDDEN_ATTRIBUTE } from "../Buttons/Button/Button.constants.ts";

export class BaseComponent extends HTMLElement {
  public connectedCallback() {
    this._initContent();
  }

  private _initContent() {
    if (!this.firstElementChild) {
      return;
    }

    if (this.hasAttributes()) {
      this.getAttributeNames().forEach(attr => {
        if (attr === HIDDEN_ATTRIBUTE) {
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
