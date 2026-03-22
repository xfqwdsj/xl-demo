import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { buttonStyles } from "../../components/button.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("home-hero")
export class HomeHero extends LitElement {
  static styles = css`
    ${buttonStyles}
    ${introductionPageStyles}

    :host {
      display: block;
      background: linear-gradient(
        135deg,
        var(--surface-subtle) 0%,
        var(--surface-card) 55%,
        rgb(from var(--primary) r g b / 0.08) 100%
      );
    }

    .section-container {
      min-height: 600px;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 40px;
      align-items: center;
    }

    .title {
      margin: 0;
      font-size: 36px;
      line-height: 1.35;
      color: var(--text-title);
    }

    .subtitle {
      margin: 0;
      font-size: 18px;
      color: var(--text-body);
    }

    .actions {
      display: flex;
      gap: 12px;
    }

    .actions .btn {
      padding: 10px 22px;
      border-radius: 8px;
    }

    .actions .btn-outline {
      background: var(--surface-card);
    }

    .mock {
      background: var(--surface-card);
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      box-shadow: var(--shadow-soft);
      padding: 16px;
    }

    .mock-top {
      display: flex;
      gap: 6px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .dot.red {
      background: var(--error);
    }

    .dot.yellow {
      background: var(--warning);
    }

    .dot.green {
      background: var(--success);
    }

    .chart {
      border-radius: 10px;
      background: linear-gradient(
        180deg,
        rgb(from var(--primary) r g b / 0.06) 0%,
        rgb(from var(--primary) r g b / 0.14) 100%
      );
      border: 1px solid var(--border-subtle);
      min-height: 240px;
      position: relative;
      overflow: hidden;
    }

    .bar {
      position: absolute;
      bottom: 24px;
      width: 26px;
      border-radius: 6px 6px 0 0;
      background: linear-gradient(
        180deg,
        rgb(from var(--primary) calc(r + 80) calc(g + 20) b / 0.86) 0%,
        var(--primary-strong) 100%
      );
    }

    .line {
      position: absolute;
      left: 30px;
      right: 30px;
      top: 34%;
      height: 0;
      border-top: 2px dashed rgb(from var(--primary) r g b / 0.45);
    }

    @media (max-width: 960px) {
      .section-container {
        min-height: auto;
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <section aria-labelledby="hero-title">
        <spacer-item height="60px"></spacer-item>

        <div class="section-container">
          <div>
            <h1 id="hero-title" class="title">
              让小微财务更简单，让数据变信用
            </h1>

            <spacer-item height="20px"></spacer-item>

            <p class="subtitle">
              票据自动识别 · 智能记账 · 一键报税 · 融资对接
            </p>

            <spacer-item height="32px"></spacer-item>

            <div class="actions">
              <a href="/register.html" class="btn btn-primary">免费开始使用</a>
              <button
                class="btn btn-outline"
                type="button"
                @click=${this.openDemo}
              >
                观看演示视频
              </button>
            </div>
          </div>
          <div class="mock" role="img" aria-label="产品仪表盘示意图">
            <div class="mock-top">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>

            <spacer-item height="14px"></spacer-item>

            <div class="chart">
              <div class="line"></div>
              <span class="bar" style="left: 16%; height: 80px"></span>
              <span class="bar" style="left: 30%; height: 126px"></span>
              <span class="bar" style="left: 44%; height: 98px"></span>
              <span class="bar" style="left: 58%; height: 160px"></span>
              <span class="bar" style="left: 72%; height: 188px"></span>
            </div>
          </div>
        </div>

        <spacer-item height="60px"></spacer-item>
      </section>
    `;
  }

  private openDemo() {
    alert("演示视频功能为静态占位，可在后续接入真实视频地址。");
  }
}
