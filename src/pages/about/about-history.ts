import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { milestones } from "./about-data.ts";
import "../../components/section-heading.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("about-history")
export class AboutHistory extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      display: block;
      padding: 64px 0;
      background: var(--surface-page);
    }

    .timeline {
      position: relative;
      max-width: 680px;
      margin: 0 auto;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 5px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(
        180deg,
        var(--primary-strong) 0%,
        rgb(from var(--primary) calc(r + 70) calc(g - 50) calc(b + 100) / 0.94)
          100%
      );
      border-radius: 2px;
    }

    .item {
      position: relative;
      display: flex;
      align-items: flex-start;
    }

    .dot {
      position: absolute;
      left: 6px;
      top: 5px;
      transform: translateX(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--primary-strong);
      border: 2px solid var(--surface-page);
      box-shadow: 0 0 0 2px var(--primary-strong);
    }

    .date {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .year {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-strong);
    }

    .month {
      font-size: 13px;
      color: var(--text-muted);
    }

    .item-title {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: var(--text-title);
    }

    .item-desc {
      margin: 0;
      font-size: 14px;
      color: var(--text-body);
      line-height: 1.6;
    }
  `;

  render() {
    return html`
      <section class="section-container">
        <div>
          <section-heading
            title="发展历程"
            subtitle="从零到一，一步一个脚印，为小微企业持续创造价值"
          ></section-heading>
        </div>

        <spacer-item height="40px"></spacer-item>

        <div class="timeline">
          ${milestones.map(
            (m, index) => html`
              <div class="item">
                <div class="dot"></div>

                <spacer-item width="32px"></spacer-item>

                <div>
                  <div class="date">
                    <span class="year">${m.year}</span>
                    <span class="month">${m.month}</span>
                  </div>

                  <spacer-item height="4px"></spacer-item>

                  <h3 class="item-title">${m.title}</h3>

                  <spacer-item height="4px"></spacer-item>

                  <p class="item-desc">${m.description}</p>
                </div>
              </div>

              ${index < milestones.length - 1
                ? html`<spacer-item height="36px"></spacer-item>`
                : null}
            `,
          )}
        </div>
      </section>
    `;
  }
}
