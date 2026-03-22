import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type CustomerCase } from "./cases-data.ts";
import { INDUSTRY_MAP } from "../../data/marketing-taxonomy.ts";
import { buttonStyles } from "../../components/button.ts";
import "../../components/spacer-item.ts";
import "../../components/stat-strip.ts";

@customElement("case-card")
export class CaseCard extends LitElement {
  static styles = css`
    ${buttonStyles}
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .card-logo {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--surface-subtle);
      color: var(--primary-strong);
      flex-shrink: 0;
    }

    .card-logo iconify-icon {
      font-size: 28px;
    }

    .card-info {
      flex: 1;
      min-width: 0;
    }

    .card-name {
      margin: 0 0 6px;
      font-size: 16px;
      font-weight: 600;
      color: var(--text-title);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .industry-tag {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      color: var(--white);
    }

    .card-scale {
      font-size: 12px;
      color: var(--text-muted);
    }

    .card-section {
      display: grid;
    }

    .section-label {
      font-size: 12px;
      color: var(--text-muted);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .section-label iconify-icon {
      font-size: 14px;
    }

    .section-text {
      font-size: 14px;
      color: var(--text);
      line-height: 1.6;
    }

    .stats-strip {
      --stat-strip-border: color-mix(in srgb, var(--border) 72%, white);
      --stat-strip-item-border: color-mix(in srgb, var(--border) 72%, white);
      --stat-strip-label-color: var(--text-muted);
      --stat-strip-value-size: 24px;
      --stat-strip-label-size: 12px;
    }

    .card-action {
      display: grid;
    }

    .card-bottom {
      margin-top: auto;
      display: grid;
      gap: 16px;
    }

    .card-action .btn {
      width: 100%;
      justify-content: center;
    }

    @media (max-width: 768px) {
      .card-header {
        gap: 12px;
      }

      .card-logo {
        width: 48px;
        height: 48px;
      }

      .card-logo iconify-icon {
        font-size: 24px;
      }

      .card-name {
        font-size: 15px;
      }

      .section-text {
        font-size: 13px;
      }
    }

    @media (max-width: 480px) {
      .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .card-info {
        width: 100%;
      }

      .card-name {
        white-space: normal;
        overflow: visible;
        text-overflow: clip;
      }

      .card-meta {
        flex-wrap: wrap;
        row-gap: 6px;
      }

      .section-text {
        -webkit-line-clamp: 3;
      }
  `;

  @property({ type: Object })
  caseData?: CustomerCase;

  @property({ type: Function })
  onViewDetail?: (caseItem: CustomerCase) => void;

  render() {
    if (!this.caseData) {
      return html``;
    }

    const caseItem = this.caseData;

    const industry = INDUSTRY_MAP[caseItem.industry];

    return html`
      <div class="card-header">
        <div class="card-logo">
          <iconify-icon icon="${caseItem.logo}"></iconify-icon>
        </div>
        <div class="card-info">
          <h3 class="card-name" title="${caseItem.name}">${caseItem.name}</h3>
          <div class="card-meta">
            <span class="industry-tag" style="background: ${industry.color}">
              ${industry.name}
            </span>
            <span class="card-scale">${caseItem.scale}</span>
          </div>
        </div>
      </div>

      <spacer-item height="16px"></spacer-item>

      <div class="card-section">
        <div class="section-label">
          <iconify-icon icon="fa7-solid:circle-exclamation"></iconify-icon>
          核心痛点
        </div>
        <p class="section-text">${caseItem.painPoints}</p>
      </div>

      <spacer-item height="16px"></spacer-item>

      <div class="card-section">
        <div class="section-label">
          <iconify-icon icon="fa7-solid:lightbulb"></iconify-icon>
          解决方案
        </div>
        <p class="section-text">${caseItem.solution}</p>
      </div>

      <div class="card-bottom">
        <stat-strip
          class="stats-strip"
          .items=${caseItem.stats.map((stat) => ({
            value: stat.value,
            label: stat.label,
          }))}
          tone="solid"
        ></stat-strip>

        <div class="card-action">
          <button class="btn btn-outline" @click=${this.handleViewDetail}>
            查看详情
          </button>
        </div>
      </div>
    `;
  }

  private handleViewDetail() {
    if (this.caseData && this.onViewDetail) {
      this.onViewDetail(this.caseData);
    }
  }
}
