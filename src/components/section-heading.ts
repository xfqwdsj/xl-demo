import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("section-heading")
export class SectionHeading extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .wrap {
      text-align: center;
    }

    h2 {
      margin: 0;
      font-size: 30px;
      font-weight: 700;
      color: #1f1f1f;
      line-height: 1.35;
    }

    p {
      margin: 12px auto 0;
      max-width: 560px;
      font-size: 16px;
      color: #8c8c8c;
      line-height: 1.6;
    }

    :host([align="left"]) .wrap {
      text-align: left;
    }

    :host([align="left"]) p {
      margin-left: 0;
      margin-right: 0;
    }
  `;

  @property({ type: String })
  title = "";

  @property({ type: String })
  subtitle = "";

  @property({ type: String, reflect: true })
  align: "left" | "center" = "center";

  render() {
    return html`
      <div class="wrap">
        <h2>${this.title}</h2>
        ${this.subtitle ? html`<p>${this.subtitle}</p>` : null}
      </div>
    `;
  }
}
