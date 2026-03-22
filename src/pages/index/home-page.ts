import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../../components/spacer-item.ts";
import "../../components/section-cta.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("home-page")
export class HomePage extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      --page-padding-top: 0px;
      --page-padding-bottom: 0px;
      background: var(--surface-page);
      color: var(--text-body);
    }
  `;

  render() {
    return html`
      <main class="page-container">
        <home-hero></home-hero>
        <home-pain-points></home-pain-points>
        <home-features></home-features>
        <home-social-proof></home-social-proof>
        <home-pricing-preview></home-pricing-preview>

        <spacer-item height="64px"></spacer-item>

        <section-cta
          class="section-container"
          title="准备好让财务自动化了吗？"
          description="立即注册，体验票据识别、自动记账和融资对接的一站式流程。"
          primary-text="免费试用"
          primary-link="/register.html"
        ></section-cta>

        <spacer-item height="72px"></spacer-item>
      </main>
    `;
  }
}
