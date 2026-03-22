import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { type CustomerCase, customerCases, industries } from "./cases-data.ts";
import { CORE_INDUSTRIES } from "../../data/marketing-taxonomy.ts";
import "../../components/app-card.ts";
import "../../components/breadcrumb.ts";
import "../../components/page-hero.ts";
import "../../components/logo-wall.ts";
import "../../components/section-heading.ts";
import "../../components/section-cta.ts";
import "../../components/tab-filter-buttons.ts";
import "../../components/spacer-item.ts";
import "../../components/app-hr.ts";
import "./case-card.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";
import { buttonStyles } from "../../components/button.ts";

@customElement("cases-page")
export class CasesPage extends LitElement {
  static styles = css`
    ${buttonStyles}
    ${introductionPageStyles}
    :host {
      background: var(--surface-page);
      color: var(--text-body);
      --case-grid-gap: 24px;
      --empty-state-padding: 60px 20px;
      --empty-state-icon-size: 64px;
    }

    .case-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--case-grid-gap);
    }

    .empty-state {
      text-align: center;
      padding: var(--empty-state-padding);
    }

    .empty-state iconify-icon {
      font-size: var(--empty-state-icon-size);
      opacity: 0.5;
    }

    @media (max-width: 1024px) {
      .case-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
      }
    }

    @media (max-width: 768px) {
      .case-grid {
        gap: 16px;
      }

      .empty-state {
        padding: 40px 16px;
      }

      .empty-state iconify-icon {
        font-size: 48px;
      }
    }

    @media (max-width: 480px) {
      .case-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .empty-state {
        padding: 32px 12px;
      }

      .empty-state iconify-icon {
        font-size: 40px;
      }
    }
  `;

  @state()
  private activeFilter = "all";

  private get filteredCases(): CustomerCase[] {
    if (this.activeFilter === "all") {
      return customerCases;
    }
    return customerCases.filter((c) => c.industry === this.activeFilter);
  }

  render() {
    return html`
      <main class="page-container">
        <div class="section-container">
          <app-breadcrumb
            .items=${[
              { label: "首页", href: "/index.html" },
              { label: "客户案例" },
            ]}
          ></app-breadcrumb>

          <page-hero
            title="他们的选择，证明我们的价值"
            subtitle="超过50,000家小微企业信赖票据小灵，看看他们如何实现财务自动化"
          ></page-hero>

          <tab-filter-buttons
            .activeId=${this.activeFilter}
            .items=${industries.map((industry) => ({
              id: industry.id,
              label: industry.name,
              icon: industry.icon,
            }))}
            aria-label="行业筛选"
            @tab-select=${(e: CustomEvent<string>) =>
              this.handleFilterClick(e.detail)}
          ></tab-filter-buttons>

          <spacer-item height="28px"></spacer-item>

          <section-heading
            title="精选客户案例"
            subtitle="按行业查看小微企业如何通过票据小灵提升财务效率"
          ></section-heading>

          <spacer-item height="16px"></spacer-item>

          <section class="case-grid" aria-label="客户案例列表">
            ${this.filteredCases.length > 0
              ? this.filteredCases.map((caseItem) =>
                  this.renderCaseCard(caseItem),
                )
              : html`
                  <div class="empty-state">
                    <iconify-icon icon="fa7-solid:folder-open"></iconify-icon>

                    <spacer-item height="16px"></spacer-item>

                    <p>暂无该行业的案例</p>
                  </div>
                `}
          </section>

          <spacer-item height="44px"></spacer-item>

          <app-hr></app-hr>

          <spacer-item height="28px"></spacer-item>

          <logo-wall
            title="覆盖餐饮、零售、制造、服务等多个行业场景"
            .items=${CORE_INDUSTRIES.map((industry) => industry.name)}
          ></logo-wall>

          <spacer-item height="64px"></spacer-item>

          <section-cta
            title="想成为下一个成功案例吗？"
            description="立即注册免费试用，体验智能财务管理带来的效率提升"
            primary-text="免费试用"
            primary-link="/register.html"
          ></section-cta>
        </div>
      </main>
    `;
  }

  private handleFilterClick(id: string) {
    this.activeFilter = id;
  }

  private handleViewDetail(caseItem: CustomerCase) {
    alert(`查看案例详情：${caseItem.name}\n\n此功能正在开发中...`);
  }

  private renderCaseCard(caseItem: CustomerCase) {
    return html`
      <app-card padding="24px" fill-height>
        <case-card
          .caseData=${caseItem}
          .onViewDetail=${() => this.handleViewDetail(caseItem)}
        ></case-card>
      </app-card>
    `;
  }
}
