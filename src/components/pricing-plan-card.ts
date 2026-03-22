import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./button.ts";
import type { FeatureCheckItem } from "./feature-check-list.ts";
import "./app-card.ts";
import "./feature-check-list.ts";
import "./spacer-item.ts";
import { classMap } from "lit/directives/class-map.js";

export interface PricingCardPlan {
  name: string;
  price: string;
  note: string;
  features: string[];
  mutedFeatures?: string[];
  actionText: string;
  actionLink: string;
  recommended?: boolean;
}

@customElement("pricing-plan-card")
export class PricingPlanCard extends LitElement {
  static styles = css`
    ${buttonStyles}
    :host {
      display: block;
    }

    .card {
      position: relative;
    }

    .card.recommended {
      transform: translateY(-4px);
    }

    .tag {
      position: absolute;
      right: 16px;
      top: 16px;
      background: var(--primary);
      color: var(--white);
      border-radius: 50vh;
      font-size: 12px;
      padding: 4px 10px;
    }

    .name {
      margin: 0;
      color: var(--text-title);
      font-size: 20px;
    }

    .price {
      margin: 14px 0 6px;
      font-size: 34px;
      color: var(--primary-strong);
      font-weight: 700;
    }

    .note {
      margin: 0;
      color: var(--text);
      font-size: 14px;
    }

    .btn {
      display: inline-flex;
      width: 100%;
      padding: 10px 16px;
      text-align: center;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }

    @media (max-width: 1080px) {
      .card.recommended {
        transform: none;
      }
    }
  `;

  @property({ attribute: false })
  plan: PricingCardPlan | null = null;

  render() {
    if (!this.plan) return null;

    const cardClasses = {
      card: true,
      recommended: this.plan.recommended == true,
    };

    const buttonClasses = {
      btn: true,
      "btn-primary": this.plan.recommended == true,
      "btn-shadow": this.plan.recommended == true,
      "btn-outline": !this.plan.recommended,
    };

    return html`
      <app-card
        class=${classMap(cardClasses)}
        padding="24px"
        .borderColor=${this.plan.recommended ? "var(--primary)" : undefined}
        .shadow=${this.plan.recommended
          ? "0 12px 26px color-mix(in srgb, var(--primary) 20%, transparent)"
          : undefined}
      >
        ${this.plan.recommended
          ? html`<span class="tag">最受欢迎</span>`
          : nothing}
        <h3 class="name">${this.plan.name}</h3>
        <p class="price">${this.plan.price}</p>
        <p class="note">${this.plan.note}</p>
        <spacer-item height="16px"></spacer-item>
        <a href="${this.plan.actionLink}" class=${classMap(buttonClasses)}>
          ${this.plan.actionText}
        </a>
        <spacer-item height="24px"></spacer-item>
        <feature-check-list
          .items=${this.toCheckItems(this.plan)}
        ></feature-check-list>
      </app-card>
    `;
  }

  private toCheckItems(plan: PricingCardPlan): FeatureCheckItem[] {
    return [
      ...plan.features.map((text) => ({ text })),
      ...(plan.mutedFeatures ?? []).map((text) => ({ text, muted: true })),
    ];
  }
}
