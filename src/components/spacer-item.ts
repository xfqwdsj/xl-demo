import { customElement, property } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("spacer-item")
export class SpacerItem extends LitElement {
  @property({ type: String })
  width: string | number = 0;

  @property({ type: String })
  height: string | number = 0;

  render() {
    const style =
      (this.width ? `width:${this.width};` : "") +
      (this.height ? `height:${this.height};` : "");
    return html`<div style="${style}"></div>`;
  }
}
