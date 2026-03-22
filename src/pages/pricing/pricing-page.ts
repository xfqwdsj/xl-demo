import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { pricingFaqs, pricingPlans } from "./pricing-data.ts";
import "../../components/breadcrumb.ts";
import "../../components/logo-wall.ts";
import "../../components/page-hero.ts";
import "../../components/pricing-plan-card.ts";
import "../../components/section-cta.ts";
import "./pricing-faq.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("pricing-page")
export class PricingPage extends LitElement {
  static styles = css`
    ${introductionPageStyles}

    :host {
      background: var(--surface-page);
      color: var(--text-body);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
      align-items: stretch;
    }

    .trust-wall {
      border-top: 1px solid var(--border-subtle);
    }

    @media (max-width: 1080px) {
      .cards {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <main class="page-container">
        <div class="section-container">
          <app-breadcrumb
            .items=${[
              { label: "首页", href: "/index.html" },
              { label: "定价方案" },
            ]}
          ></app-breadcrumb>

          <page-hero
            title="选择适合您的方案"
            subtitle="透明定价，免费版起步，支持随业务增长灵活升级"
          ></page-hero>

          <spacer-item height="32px"></spacer-item>

          <section class="cards" aria-label="定价方案卡片">
            ${pricingPlans.map(
              (plan) =>
                html` <pricing-plan-card .plan=${plan}></pricing-plan-card>`,
            )}
          </section>

          <spacer-item height="40px"></spacer-item>

          <div class="trust-wall" aria-label="服务保障">
            <spacer-item height="24px"></spacer-item>

            <logo-wall
              title="支付与服务保障"
              .items=${[
                "7天退款保障",
                "企业级数据加密",
                "SLA可用性承诺",
                "专属客户成功",
                "多银行合作",
                "发票与合同支持",
              ]}
            ></logo-wall>
          </div>

          <spacer-item height="46px"></spacer-item>

          <pricing-faq .items=${pricingFaqs}></pricing-faq>

          <spacer-item height="64px"></spacer-item>

          <section-cta
            variant="primary"
            title="还有疑问？联系我们的顾问"
            description=""
            primary-text="预约演示"
            primary-link="/about.html"
            secondary-text="在线咨询"
            secondary-link="/about.html"
          ></section-cta>
        </div>
      </main>
    `;
  }
}
