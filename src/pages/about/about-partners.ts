import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { honors } from "./about-data.ts";
import "../../components/logo-wall.ts";
import "../../components/section-heading.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";
import { PARTNERS_BY_TYPE } from "../../data/marketing-taxonomy.ts";

@customElement("about-partners")
export class AboutPartners extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      display: block;
      padding: 64px 0;
      background: var(--surface-page);
    }

    .group-title {
      text-align: center;
      margin: 0;
      color: var(--text-muted);
      font-size: 14px;
    }

    .honors-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .honor-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px 20px;
      background: var(--surface-card);
      border: 1px solid var(--border-subtle);
      border-radius: 10px;
    }

    .honor-badge {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      border-radius: 10px;
      background: linear-gradient(
        135deg,
        rgb(from var(--warning) r g b / 0.16) 0%,
        rgb(from var(--warning) r g b / 0.28) 100%
      );
      border: 1px solid rgb(from var(--warning) r g b / 0.48);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .honor-badge iconify-icon {
      font-size: 22px;
      color: color-mix(in srgb, var(--warning) 70%, black);
    }

    .honor-name {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-title);
    }

    .honor-org {
      margin: 0;
      font-size: 12px;
      color: var(--text-muted);
    }

    @media (max-width: 960px) {
      .honors-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    const banks = PARTNERS_BY_TYPE["bank"];
    const techs = PARTNERS_BY_TYPE["tech"];
    const associations = PARTNERS_BY_TYPE["association"];

    return html`
      <section class="section-container">
        <div>
          <section-heading
            title="资质与荣誉"
            subtitle="获得权威机构认可，与行业头部伙伴深度合作"
          ></section-heading>
        </div>

        <spacer-item height="40px"></spacer-item>

        <logo-wall
          title="合作银行"
          .items=${banks.map((p) => p.name)}
        ></logo-wall>

        <spacer-item height="32px"></spacer-item>

        <logo-wall
          title="技术与行业合作伙伴"
          .items=${[...techs, ...associations].map((p) => p.name)}
        ></logo-wall>

        <spacer-item height="32px"></spacer-item>

        <p class="group-title">资质荣誉</p>

        <spacer-item height="20px"></spacer-item>

        <div class="honors-grid">
          ${honors.map(
            (h) => html`
              <div class="honor-item">
                <div class="honor-badge">
                  <iconify-icon icon="fa7-solid:award"></iconify-icon>
                </div>
                <div>
                  <p class="honor-name">${h.name}</p>
                  <spacer-item height="3px"></spacer-item>
                  <p class="honor-org">${h.org}</p>
                </div>
              </div>
            `,
          )}
        </div>
      </section>
    `;
  }
}
