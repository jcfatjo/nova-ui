import { BaseColorComponent } from "../../Base/Color/BaseColor.component.ts";

export class ButtonComponent extends BaseColorComponent {
  public static is = "button-component";

  public connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define(ButtonComponent.is, ButtonComponent);
