import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../../components/stat-strip.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("about-mission")
export class AboutMission extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      display: block;
      padding: 64px 0;
      background: var(--surface-card);
    }

    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
    }

    .headline {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      color: var(--text-title);
      line-height: 1.3;
    }

    .headline em {
      font-style: normal;
      color: var(--primary-strong);
    }

    .body {
      margin: 0;
      font-size: 16px;
      line-height: 1.8;
      color: var(--text-body);
    }

    .visual {
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) r g b / 0.12) 0%,
        rgb(from var(--primary) r g b / 0.08) 100%
      );
      border: 1px solid var(--border-strong);
      border-radius: 16px;
      padding: 28px;
    }

    .visual-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--primary-strong);
      font-weight: 500;
      margin: 0;
    }

    .visual-label iconify-icon {
      font-size: 16px;
    }

    .avatars {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .avatar {
      aspect-ratio: 1;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: 700;
      color: #fff;
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) calc(r + 120) calc(g + 20) b / 0.88) 0%,
        var(--primary-strong) 100%
      );
    }

    .avatar.purple {
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) calc(r + 110) g calc(b + 120) / 0.88) 0%,
        rgb(from var(--primary) calc(r + 70) calc(g - 50) calc(b + 100) / 0.94)
          100%
      );
    }

    .visual-caption {
      margin: 0;
      font-size: 13px;
      color: var(--primary-strong);
      text-align: center;
    }

    .visual-divider {
      border-top: 1px solid var(--border-strong);
    }

    @media (max-width: 960px) {
      .hero {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `;

  private readonly stats = [
    { value: "50,000+", label: "服务企业" },
    { value: "100万+", label: "月处理票据" },
    { value: "95%+", label: "识别准确率" },
    { value: "10+", label: "合作银行" },
  ];

  private readonly avatars = [
    { initials: "张", purple: false },
    { initials: "李", purple: true },
    { initials: "王", purple: false },
    { initials: "刘", purple: true },
    { initials: "陈", purple: false },
    { initials: "赵", purple: true },
  ];

  render() {
    return html`
      <section class="section-container">
        <div class="hero">
          <div>
            <h2 class="headline">
              让小微财务<em>更简单</em>，<br />让数据变<em>信用</em>
            </h2>

            <spacer-item height="24px"></spacer-item>

            <p class="body">
              我们相信，每一家小微企业都值得拥有专业的财务服务。票据小灵成立于2023年，由来自阿里、腾讯、中科院的技术与产品人组成，专注用AI技术解决小微企业的财务难题。
            </p>

            <spacer-item height="16px"></spacer-item>

            <p class="body">
              从一张发票的拍照识别，到银行对账、纳税申报、融资对接——我们希望让每一位小微企业主从繁琐的财务工作中解放出来，把时间和精力放在真正重要的事情上。
            </p>
          </div>

          <div class="visual" aria-hidden="true">
            <div class="visual-label">
              <iconify-icon icon="fa7-solid:users"></iconify-icon>
              <span>我们的团队</span>
            </div>

            <spacer-item height="20px"></spacer-item>

            <div class="avatars">
              ${this.avatars.map(
                (a) =>
                  html`<div class="avatar ${a.purple ? "purple" : ""}">
                    ${a.initials}
                  </div>`,
              )}
            </div>

            <spacer-item height="16px"></spacer-item>

            <div class="visual-divider"></div>

            <spacer-item height="14px"></spacer-item>

            <p class="visual-caption">热爱财务科技、专注小微企业的团队</p>
          </div>
        </div>

        <spacer-item height="48px"></spacer-item>

        <stat-strip .items=${this.stats}></stat-strip>
      </section>
    `;
  }
}
