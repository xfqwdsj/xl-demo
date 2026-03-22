import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { PricingFaqItem } from "./pricing-data.ts";
import "../../components/section-heading.ts";

@customElement("pricing-faq")
export class PricingFaq extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .list {
      display: grid;
      gap: 14px;
    }

    .item {
      background: var(--surface-card);
      border: 1px solid var(--border-subtle);
      border-radius: 10px;
      padding: 16px 18px;
    }

    .question {
      margin: 0;
      color: var(--text-title);
      font-size: 16px;
      font-weight: 600;
    }

    .answer {
      margin: 8px 0 0;
      color: var(--text-body);
      font-size: 14px;
      line-height: 1.6;
    }
  `;

  @property({ attribute: false })
  items: PricingFaqItem[] = [];

  render() {
    return html`
      <section aria-label="常见问题">
        <div>
          <section-heading title="常见问题"></section-heading>
        </div>

        <spacer-item height="24px"></spacer-item>

        <div class="list">
          ${this.items.map(
            (item) => html`
              <article class="item">
                <p class="question">Q: ${item.question}</p>
                <p class="answer">A: ${item.answer}</p>
              </article>
            `,
          )}
        </div>
      </section>
    `;
  }
}
