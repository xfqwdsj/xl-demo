import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../../components/app-card.ts";
import "../../components/section-heading.ts";
import "../../components/stat-strip.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

interface FeatureItem {
  icon:
    | "scan"
    | "calculator"
    | "file-arrow-up"
    | "bank"
    | "chart-line"
    | "handshake";
  name: string;
  description: string;
}

@customElement("home-features")
export class HomeFeatures extends LitElement {
  static styles = css`
    ${introductionPageStyles}

    :host {
      display: block;
      padding: 60px 0;
      background: var(--surface-subtle);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .card {
      height: 100%;
    }

    .icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: var(--surface-soft);
      color: var(--primary-strong);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
    }

    h3 {
      margin: 0;
      font-size: 16px;
      color: var(--text-title);
    }

    p {
      margin: 0;
      font-size: 14px;
      line-height: 1.7;
      color: var(--text-body);
    }

    @media (max-width: 1080px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private readonly features: FeatureItem[] = [
    {
      icon: "scan",
      name: "OCR票据识别",
      description: "发票、收据、银行回单，拍照即识别，准确率95%+",
    },
    {
      icon: "calculator",
      name: "智能记账",
      description: "自动匹配会计科目，生成规范凭证，无需手工录入",
    },
    {
      icon: "file-arrow-up",
      name: "一键报税",
      description: "自动生成申报表，直连电子税务局，一键完成申报",
    },
    {
      icon: "bank",
      name: "银行对账",
      description: "银企直联流水同步，智能匹配差异，对账无忧",
    },
    {
      icon: "chart-line",
      name: "财务画像",
      description: "五维信用评分，经营状况一目了然，银行认可",
    },
    {
      icon: "handshake",
      name: "融资对接",
      description: "信用报告一键生成，直通银行贷款，利率更优",
    },
  ];

  private readonly metrics = [
    { value: "50,000+", label: "服务小微企业" },
    { value: "1,200万张", label: "累计处理票据" },
    { value: "30+家", label: "合作金融机构" },
    { value: "3倍", label: "平均融资成功率提升" },
  ];

  render() {
    return html`
      <section aria-label="核心功能">
        <div class="section-container">
          <div>
            <section-heading
              title="核心能力全覆盖，财务自动化一步到位"
              subtitle="从票据采集到融资对接，完整覆盖小微企业财务核心流程"
            ></section-heading>
          </div>

          <spacer-item height="32px"></spacer-item>

          <div class="grid">
            ${this.features.map(
              (feature) => html`
                <app-card class="card">
                  <div class="icon">${this.renderIcon(feature.icon)}</div>

                  <spacer-item height="14px"></spacer-item>

                  <h3>${feature.name}</h3>

                  <spacer-item height="10px"></spacer-item>

                  <p>${feature.description}</p>
                </app-card>
              `,
            )}
          </div>

          <spacer-item height="48px"></spacer-item>

          <div aria-label="服务数据">
            <stat-strip .items=${this.metrics} tone="solid"></stat-strip>
          </div>
        </div>
      </section>
    `;
  }

  private renderIcon(name: FeatureItem["icon"]) {
    const iconMap: Record<FeatureItem["icon"], string> = {
      scan: "fa7-solid:barcode",
      calculator: "fa7-solid:calculator",
      "file-arrow-up": "fa7-solid:file-arrow-up",
      bank: "fa7-solid:building-columns",
      "chart-line": "fa7-solid:chart-line",
      handshake: "fa7-solid:handshake",
    };

    return html`<iconify-icon
      icon="${iconMap[name]}"
      width="26"
      height="26"
    ></iconify-icon>`;
  }
}
