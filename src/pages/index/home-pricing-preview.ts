import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import type { PricingCardPlan } from "../../components/pricing-plan-card.ts";
import "../../components/pricing-plan-card.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("home-pricing-preview")
export class HomePricingPreview extends LitElement {
  static styles = css`
    ${introductionPageStyles}

    :host {
      display: block;
      padding: 60px 0 80px;
      background: rgb(from var(--primary) r g b / 0.06);
    }

    h2 {
      margin: 0;
      text-align: center;
      font-size: 30px;
      color: var(--text-title);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .more {
      text-align: center;
    }

    .more a {
      color: var(--primary);
      text-decoration: none;
    }

    @media (max-width: 1080px) {
      .cards {
        grid-template-columns: 1fr;
      }
    }
  `;

  private readonly plans: PricingCardPlan[] = [
    {
      name: "免费版",
      price: "¥0/年",
      note: "永久免费",
      features: ["OCR识别基础版", "基础记账", "月度报表", "帮助中心"],
      mutedFeatures: ["融资信用报告", "银行专属顾问"],
      actionText: "立即注册",
      actionLink: "/register.html",
    },
    {
      name: "Pro版",
      price: "¥1,200/年",
      note: "适合成长型企业",
      features: [
        "全量OCR识别",
        "智能记账",
        "一键报税",
        "银行对账",
        "财务画像",
        "融资对接",
      ],
      actionText: "开始试用",
      actionLink: "/register.html",
      recommended: true,
    },
    {
      name: "Ultra版",
      price: "¥5,000/年起",
      note: "适合代账公司",
      features: [
        "Pro版全部能力",
        "批量账套管理",
        "多角色权限",
        "专属实施服务",
        "银行合作绿色通道",
      ],
      actionText: "联系销售",
      actionLink: "/pricing.html",
    },
  ];

  render() {
    return html`
      <section aria-labelledby="pricing-title">
        <div class="section-container">
          <h2 id="pricing-title">定价透明，按需选择</h2>

          <spacer-item height="32px"></spacer-item>

          <div class="cards">
            ${this.plans.map(
              (plan) =>
                html`<pricing-plan-card .plan=${plan}></pricing-plan-card>`,
            )}
          </div>

          <spacer-item height="24px"></spacer-item>

          <p class="more"><a href="/pricing.html">查看完整定价对比</a></p>
        </div>
      </section>
    `;
  }
}
