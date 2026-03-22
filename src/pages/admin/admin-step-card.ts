import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { gapStyles } from "../../components/spacing.ts";
import { typographyStyles } from "./styles/typography.ts";

export interface StepItem {
  index: number;
  title: string;
  description: string;
}

@customElement("admin-step-card")
export class AdminStepCard extends LitElement {
  static styles = css`
    ${gapStyles}
    ${typographyStyles}
    :host {
      display: block;
    }

    p {
      margin: 0;
    }

    .steps {
      display: grid;
      gap: 10px;
    }

    .step {
      display: grid;
      grid-template-columns: 28px minmax(0, 1fr);
      gap: 12px;
      align-items: start;
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

    .step-item {
      display: flex;
      flex-direction: column;
    }
  `;

  @property({ type: Array })
  steps: StepItem[] = [];

  render() {
    return html`
      <div class="steps">
        ${this.steps.map(
          (step) => html`
            <div class="step">
              <div class="step-index">${step.index}</div>
              <div class="step-item gap-xs">
                <p class="text-title-sm">${step.title}</p>
                <p class="text-label">${step.description}</p>
              </div>
            </div>
          `,
        )}
      </div>
    `;
  }
}
