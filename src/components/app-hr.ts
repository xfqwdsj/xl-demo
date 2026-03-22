import { customElement } from "lit/decorators.js";
import { css, html, LitElement } from "lit";

@customElement("app-hr")
export class AppHr extends LitElement {
  static styles = css`
    hr {
      background-color: var(--border);
      border: none;
      height: 1px;
    }
  `;

  render() {
    return html`<hr />`;
  }
}
