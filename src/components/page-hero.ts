import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-hero")
export class PageHero extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      text-align: center;
      padding: 8px 0 32px;
    }

    h1 {
      margin: 0;
      font-size: 32px;
      color: #1f1f1f;
      font-weight: 700;
      line-height: 1.3;
    }

    .subtitle {
      margin: 10px 0 0;
      color: #8c8c8c;
      font-size: 16px;
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 26px;
      }
    }
  `;

  @property({ type: String })
  title = "";

  @property({ type: String })
  subtitle = "";

  render() {
    return html`
      <header class="hero">
        <h1>${this.title}</h1>
        ${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : null}
      </header>
    `;
  }
}
