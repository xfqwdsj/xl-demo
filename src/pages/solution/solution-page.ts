import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { type IndustrySolution, industrySolutions } from "./solution-data.ts";
import { CORE_INDUSTRIES } from "../../data/marketing-taxonomy.ts";
import "../../components/app-card.ts";
import "../../components/app-hr.ts";
import "../../components/breadcrumb.ts";
import "../../components/logo-wall.ts";
import "../../components/page-hero.ts";
import "../../components/section-heading.ts";
import "../../components/section-cta.ts";
import "../../components/stat-strip.ts";
import "../../components/tab-filter-buttons.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("solution-page")
export class SolutionPage extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    .content-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 48px;
      align-items: start;
    }

    .content-left {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }

    .section-title {
      display: flex;
      align-items: baseline;
      gap: 10px;
    }

    .section-title iconify-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .section-title section-heading {
      flex: 1;
    }

    .pain-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .pain-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: rgb(from var(--error) r g b / 0.04);
      border-radius: 8px;
      color: var(--text);
      border: 1px solid rgb(from var(--error) r g b / 0.1);
    }

    .pain-item iconify-icon {
      color: var(--error);
      font-size: 20px;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .solution-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .solution-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 18px;
      background: rgb(from var(--primary) r g b / 0.04);
      border-radius: 8px;
      color: var(--text);
      border: 1px solid rgb(from var(--primary) r g b / 0.1);
    }

    .solution-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: var(--primary-strong);
      color: var(--white);
      border-radius: 50%;
      font-size: 14px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .effect-section {
      padding: 0;
      background: transparent;
      border-radius: 0;
      border: none;
    }

    .effect-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      color: var(--text-title);
    }

    .effect-title iconify-icon {
      color: var(--success);
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .effect-description {
      color: var(--text-body);
      line-height: 1.6;
    }

    .content-right {
      position: sticky;
      top: 100px;
    }

    .image-wrapper {
      border-radius: 12px;
      overflow: hidden;
    }

    .image-placeholder {
      aspect-ratio: 4/3;
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) r g b / 0.08) 0%,
        rgb(from var(--primary) r g b / 0.04) 100%
      );
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--primary);
    }

    .image-placeholder iconify-icon {
      font-size: 64px;
      opacity: 0.6;
    }

    .image-placeholder span {
      font-size: 16px;
      color: var(--text);
      opacity: 0.7;
    }

    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .content-right {
        position: static;
        order: -1;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    @media (max-width: 768px) {
      .content-grid {
        gap: 24px;
      }

      .content-left {
        gap: 24px;
      }

      .pain-item,
      .solution-item {
        padding: 12px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .pain-item iconify-icon,
      .solution-item .solution-number {
        align-self: flex-start;
      }

      .effect-section {
        padding: 20px;
      }

      .image-wrapper {
        padding: 20px;
      }
    }

    @media (max-width: 480px) {
      .pain-item,
      .solution-item {
        padding: 10px 14px;
      }

      .effect-section {
        padding: 16px;
      }

      .image-wrapper {
        padding: 16px;
      }

      .image-placeholder iconify-icon {
        font-size: 48px;
      }
    }
  `;

  @state()
  private activeTab = "catering";

  private get currentSolution(): IndustrySolution {
    return (
      industrySolutions.find((s) => s.id === this.activeTab) ||
      industrySolutions[0]
    );
  }

  render() {
    const solution = this.currentSolution;

    return html`
      <main class="page-container">
        <div class="section-container">
          <app-breadcrumb
            .items=${[
              { label: "首页", href: "/index.html" },
              { label: "行业解决方案" },
            ]}
          ></app-breadcrumb>

          <page-hero
            title="为不同行业量身定制"
            subtitle="无论您是餐饮、零售还是服务业，都有专属方案"
          ></page-hero>

          <tab-filter-buttons
            .activeId=${this.activeTab}
            .items=${industrySolutions.map((s) => ({
              id: s.id,
              label: s.name,
              icon: s.icon,
            }))}
            aria-label="行业选择"
            @tab-select=${(e: CustomEvent<string>) =>
              this.handleTabClick(e.detail)}
          ></tab-filter-buttons>

          <spacer-item height="32px"></spacer-item>

          <section
            role="tabpanel"
            id="panel-${solution.id}"
            aria-labelledby="tab-${solution.id}"
          >
            <div class="content-grid">
              <div class="content-left">
                <app-card padding="24px">
                  <div class="pain-section">
                    <div class="section-title">
                      <iconify-icon
                        icon="fa7-solid:triangle-exclamation"
                        style="color: var(--error)"
                      ></iconify-icon>
                      <section-heading
                        align="left"
                        title="场景痛点"
                      ></section-heading>
                    </div>
                    <spacer-item height="16px"></spacer-item>
                    <div class="pain-list">
                      ${solution.painPoints.map(
                        (point) => html`
                          <div class="pain-item">
                            <iconify-icon icon="${point.icon}"></iconify-icon>
                            <span>${point.text}</span>
                          </div>
                        `,
                      )}
                    </div>
                  </div>
                </app-card>

                <app-card padding="24px">
                  <div class="solution-section">
                    <div class="section-title">
                      <iconify-icon
                        icon="fa7-solid:lightbulb"
                        style="color: var(--primary)"
                      ></iconify-icon>
                      <section-heading
                        align="left"
                        title="解决方案"
                      ></section-heading>
                    </div>
                    <spacer-item height="16px"></spacer-item>
                    <div class="solution-list">
                      ${solution.solutions.map(
                        (step) => html`
                          <div class="solution-item">
                            <span class="solution-number">${step.number}</span>
                            <span>${step.text}</span>
                          </div>
                        `,
                      )}
                    </div>
                  </div>
                </app-card>

                <app-card padding="24px" variant="gradient-success">
                  <div class="effect-section">
                    <div class="section-title">
                      <iconify-icon
                        icon="fa7-solid:chart-simple"
                        style="color: var(--success)"
                      ></iconify-icon>
                      <section-heading
                        align="left"
                        title="效果展示"
                      ></section-heading>
                    </div>
                    <h3 class="effect-title">${solution.effectTitle}</h3>
                    <p class="effect-description">
                      ${solution.effectDescription}
                    </p>
                    <stat-strip
                      .items=${solution.stats.map((stat) => ({
                        value: stat.value,
                        label: stat.label,
                      }))}
                      item-min-width="120px"
                      tone="solid"
                    ></stat-strip>
                  </div>
                </app-card>
              </div>

              <div class="content-right">
                <app-card padding="24px" fill-height>
                  <div class="image-wrapper">
                    <div class="image-placeholder">
                      <iconify-icon icon="${solution.icon}"></iconify-icon>
                      <spacer-item height="16px"></spacer-item>
                      <span>${solution.name}界面示意图</span>
                    </div>
                  </div>
                </app-card>
              </div>
            </div>
          </section>

          <spacer-item height="44px"></spacer-item>

          <app-hr></app-hr>

          <spacer-item height="28px"></spacer-item>

          <logo-wall
            title="方案覆盖餐饮、零售、制造、服务等行业"
            .items=${CORE_INDUSTRIES.map((industry) => industry.name)}
          ></logo-wall>

          <spacer-item height="64px"></spacer-item>

          <section-cta
            title="找到适合您行业的解决方案了吗？"
            description="立即开始免费试用，体验智能财务管理带来的效率提升"
            primary-text="免费试用"
            primary-link="/register.html"
            secondary-text="查看客户案例"
            secondary-link="/cases.html"
          ></section-cta>
        </div>
      </main>
    `;
  }

  private handleTabClick(id: string) {
    this.activeTab = id;
  }
}
