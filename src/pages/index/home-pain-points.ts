import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../../components/app-card.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

interface PainPoint {
  icon: "file-text" | "arrows-clockwise" | "shield-check" | "hand-coins";
  title: string;
  description: string;
}

@customElement("home-pain-points")
export class HomePainPoints extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      display: block;
      padding: 60px 0;
      background: var(--surface-card);
    }

    .section-title {
      margin: 0;
      font-size: 30px;
      color: var(--text-title);
      text-align: center;
    }

    .section-subtitle {
      margin: 0 auto;
      max-width: 720px;
      text-align: center;
      color: var(--text-body);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 24px;
    }

    .card {
      height: 100%;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--surface-soft);
      color: var(--primary-strong);
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    h3 {
      margin: 0;
      font-size: 18px;
      color: var(--text-title);
    }

    p {
      margin: 0;
      color: var(--text-body);
      font-size: 14px;
      line-height: 1.7;
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

  private readonly items: PainPoint[] = [
    {
      icon: "file-text",
      title: "票据处理耗时",
      description: "每月40小时整理票据？拍照即自动识别，效率提升80%",
    },
    {
      icon: "arrows-clockwise",
      title: "业财数据脱节",
      description: "账实不符对账难？数据自动同步，差错率趋近于零",
    },
    {
      icon: "shield-check",
      title: "财税合规风险",
      description: "怕漏税怕罚款？智能预警合规风险，申报零失误",
    },
    {
      icon: "hand-coins",
      title: "融资通道受阻",
      description: "缺抵押难贷款？经营数据变信用，融资成功率提升3倍",
    },
  ];

  render() {
    return html`
      <section aria-labelledby="pain-title">
        <div class="section-container">
          <h2 id="pain-title" class="section-title">
            你正在经历的财务难题，我们都懂
          </h2>

          <spacer-item height="12px"></spacer-item>

          <p class="section-subtitle">
            从票据识别到融资对接，围绕小微企业常见痛点提供一站式解决方案。
          </p>

          <spacer-item height="34px"></spacer-item>

          <div class="grid">
            ${this.items.map(
              (item) => html`
                <app-card class="card" hoverable>
                  <div class="icon">${this.renderIcon(item.icon)}</div>

                  <spacer-item height="16px"></spacer-item>

                  <h3>${item.title}</h3>

                  <spacer-item height="10px"></spacer-item>

                  <p>${item.description}</p>
                </app-card>
              `,
            )}
          </div>
        </div>
      </section>
    `;
  }

  private renderIcon(name: PainPoint["icon"]) {
    const iconMap: Record<PainPoint["icon"], string> = {
      "file-text": "fa7-solid:file-lines",
      "arrows-clockwise": "fa7-solid:arrows-rotate",
      "shield-check": "fa7-solid:shield-halved",
      "hand-coins": "fa7-solid:hand-holding-dollar",
    };

    return html`<iconify-icon
      icon="${iconMap[name]}"
      width="30"
      height="30"
    ></iconify-icon>`;
  }
}
