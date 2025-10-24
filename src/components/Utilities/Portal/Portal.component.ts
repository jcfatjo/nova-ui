import type { BaseComponent } from "../../Base.component.ts";

class Portal extends HTMLElement implements BaseComponent {
  static is = "portal-component";

  static get observedAttributes() {
    return ["container", "disabled"];
  }

  private _container = "";

  get container(): string {
    return this._container;
  }

  set container(value: string) {
    this._container = value;
  }

  private _disabled = false;

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  public attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === "container") {
      this.container = newValue;
    }

    if (name === "disabled") {
      this.disabled = Boolean(newValue);
    }
  }

  public connectedCallback() {
    const containerElement = this._getContainerElement();
    containerElement?.append(...this.children);

    this.remove();
  }

  private _getContainerElement() {
    if (this.disabled) {
      return this.parentElement;
    }

    if (this.container) {
      return document.querySelector(this.container);
    }

    return document.body;
  }
}

customElements.define(Portal.is, Portal);
