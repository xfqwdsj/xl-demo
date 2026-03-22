import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../components/app-card.ts";
import { gapStyles } from "../../components/spacing.ts";
import { typographyStyles } from "./styles/typography.ts";
import { statusStyles } from "./styles/status.ts";
import type { AdminStatus } from "./admin-status.ts";

export type AdminGridType = "info" | "compare" | "step" | "stat";
export type CompareChangeType = "increase" | "decrease" | "neutral";

const changeTypeToStatus: Record<CompareChangeType, AdminStatus> = {
  increase: "success",
  decrease: "warning",
  neutral: "primary",
};

@customElement("admin-grid-item")
export class AdminGridItem extends LitElement {
  static styles = css`
    ${gapStyles}
    ${typographyStyles}
    ${statusStyles}

    :host {
      display: block;
      min-width: 0;
    }

    p {
      margin: 0;
    }

    .helper {
      font-size: 12px;
      color: rgb(from var(--text) r g b / 0.68);
    }

    .change {
      font-weight: 500;
    }

    .step {
      display: grid;
      grid-template-columns: 28px minmax(0, 1fr);
      gap: 12px;
    }

    .step-index {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgb(from var(--primary) r g b / 0.12);
      color: var(--primary);
      font-size: 12px;
      font-weight: 700;
    }
  `;

  @property({ type: String })
  type?: AdminGridType;

  @property({ type: String, attribute: "change-type" })
  changeType: CompareChangeType = "neutral";

  @property({ type: String })
  size: "normal" | "sm" | "hero" = "normal";

  @property({ type: String, attribute: "extra-type" })
  extraType: AdminStatus = "success";

  render() {
    if (this.type === "compare") {
      return this.renderCompare();
    }

    if (this.type === "step") {
      return this.renderStep();
    }

    if (this.type === "stat") {
      return this.renderStat();
    }

    return this.renderInfo();
  }

  private renderInfo() {
    return html`
      <app-card padding="14px 16px" gap="var(--spacing-sm)">
        <p class="label"><slot name="label"></slot></p>
        <p class="value"><slot name="value"></slot></p>
        <p class="helper"><slot name="helper"></slot></p>
      </app-card>
    `;
  }

  private renderCompare() {
    return html`
      <app-card padding="14px 16px" gap="var(--spacing-sm)">
        <p class="label"><slot name="title"></slot></p>
        <p class="value"><slot name="current"></slot></p>
        <p class="change extra ${changeTypeToStatus[this.changeType]}">
          <slot name="previous"></slot>
          <span aria-hidden="true"> -> </span>
          <slot name="change"></slot>
        </p>
      </app-card>
    `;
  }

  private renderStep() {
    return html`
      <app-card padding="14px 16px">
        <div class="step">
          <div class="step-index"><slot name="index"></slot></div>
          <div class="gap-xs">
            <p class="text-title-sm"><slot name="title"></slot></p>
            <p class="text-label"><slot name="description"></slot></p>
          </div>
        </div>
      </app-card>
    `;
  }

  private renderStat() {
    const valueClass =
      this.size === "sm"
        ? "value"
        : this.size === "hero"
          ? "value-hero"
          : "value-lg";

    return html`
      <app-card padding="14px 16px" gap="var(--spacing-sm)">
        <p class="label"><slot name="label"></slot></p>
        <p class="${valueClass}"><slot name="value"></slot></p>
        <p class="extra ${this.extraType}"><slot name="extra"></slot></p>
      </app-card>
    `;
  }
}
