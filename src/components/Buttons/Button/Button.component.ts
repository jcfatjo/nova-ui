import { BaseComponent } from "../../Base/Base.component.ts";

export class ButtonComponent extends BaseComponent {
  public static is = "button-component";

  public connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define(ButtonComponent.is, ButtonComponent);
