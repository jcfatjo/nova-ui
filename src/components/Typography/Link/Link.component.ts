import { BaseComponent } from "../../Base/Base.component.ts";

export class LinkComponent extends BaseComponent {
  public static is = "link-component";

  public connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define(LinkComponent.is, LinkComponent);
