import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { getPartnerNamesByType } from "../../data/marketing-taxonomy.ts";
import "../../components/app-card.ts";
import "../../components/logo-wall.ts";
import "../../components/section-heading.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

@customElement("home-social-proof")
export class HomeSocialProof extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      display: block;
      padding: 60px 0;
      background: var(--surface-card);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .card {
      height: 100%;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(
        160deg,
        rgb(from var(--primary) calc(r + 120) calc(g + 20) b / 0.88) 0%,
        var(--primary-strong) 100%
      );
      color: var(--white);
      font-size: 20px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .name {
      margin: 0;
      font-size: 16px;
      color: var(--text-title);
    }

    .role {
      margin: 0;
      font-size: 13px;
      color: var(--text-muted);
    }

    .quote {
      margin: 0;
      line-height: 1.7;
      color: var(--text-body);
      font-size: 14px;
    }

    .stars {
      margin: 0;
      color: var(--warning);
      letter-spacing: 0.2em;
      font-size: 16px;
    }

    .banks {
      border-top: 1px solid var(--border-subtle);
    }

    @media (max-width: 1080px) {
      .cards {
        grid-template-columns: 1fr;
      }
    }
  `;

  private readonly testimonials: Testimonial[] = [
    {
      name: "张老板",
      role: "某餐饮店店主",
      quote:
        "以前每月花3天整理票据，现在拍照就搞定，还能直接看到每月赚了多少，太省事了！",
    },
    {
      name: "王会计",
      role: "代账公司财务负责人",
      quote:
        "多个客户账套一起管理效率很高，自动记账后，团队可以把时间放在更有价值的财务分析上。",
    },
    {
      name: "李经理",
      role: "小微企业主理人",
      quote:
        "最惊喜的是融资对接功能，提交信用报告后很快就收到银行沟通，贷款流程顺畅很多。",
    },
  ];

  private readonly bankNames = getPartnerNamesByType("bank");

  render() {
    return html`
      <section aria-label="客户评价">
        <div class="section-container">
          <div>
            <section-heading
              title="真实客户评价"
              subtitle="来自餐饮、零售、服务行业的一线用户反馈"
            ></section-heading>
          </div>

          <spacer-item height="30px"></spacer-item>

          <div class="cards">
            ${this.testimonials.map(
              (item, index) => html`
                <app-card class="card" padding="22px">
                  <div class="head">
                    <span class="avatar">${item.name.slice(0, 1)}</span>
                    <div>
                      <p class="name">${item.name}</p>
                      <spacer-item height="4px"></spacer-item>
                      <p class="role">${item.role}</p>
                    </div>
                  </div>

                  <spacer-item height="14px"></spacer-item>

                  <p class="quote">${item.quote}</p>

                  <spacer-item height="12px"></spacer-item>

                  <p class="stars" aria-label="${index + 1}号用户评分五星">
                    ★★★★★
                  </p>
                </app-card>
              `,
            )}
          </div>

          <spacer-item height="52px"></spacer-item>

          <div class="banks" aria-label="合作银行">
            <spacer-item height="30px"></spacer-item>

            <logo-wall
              title="已与多家金融机构建立合作"
              .items=${this.bankNames}
            ></logo-wall>
          </div>
        </div>
      </section>
    `;
  }
}
