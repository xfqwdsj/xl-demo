import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { teamMembers } from "./about-data.ts";
import "../../components/app-card.ts";
import "../../components/section-heading.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("about-team")
export class AboutTeam extends LitElement {
  static styles = css`
    ${introductionPageStyles}

    :host {
      display: block;
      padding: 64px 0;
      background: var(--surface-card);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .card {
      text-align: center;
    }

    .avatar {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin: 0 auto;
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) calc(r + 120) calc(g + 20) b / 0.88) 0%,
        var(--primary-strong) 100%
      );
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 700;
      color: #fff;
    }

    .avatar.purple {
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) calc(r + 110) g calc(b + 120) / 0.88) 0%,
        rgb(from var(--primary) calc(r + 70) calc(g - 50) calc(b + 100) / 0.94)
          100%
      );
    }

    .name {
      margin: 0;
      font-size: 17px;
      font-weight: 600;
      color: var(--text-title);
    }

    .title {
      margin: 0;
      font-size: 13px;
      color: var(--primary-strong);
      font-weight: 500;
    }

    .bio {
      margin: 0;
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    @media (max-width: 960px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <section class="section-container">
        <div>
          <section-heading
            title="核心团队"
            subtitle="汇聚互联网大厂、金融机构、科研院所顶尖人才，共同服务小微企业"
          ></section-heading>
        </div>

        <spacer-item height="36px"></spacer-item>

        <div class="grid">
          ${teamMembers.map(
            (m) => html`
              <app-card class="card" padding="28px">
                <div class="avatar ${m.purple ? "purple" : ""}">
                  ${m.initials}
                </div>

                <spacer-item height="16px"></spacer-item>

                <h3 class="name">${m.name}</h3>

                <spacer-item height="4px"></spacer-item>

                <div class="title">${m.title}</div>

                <spacer-item height="12px"></spacer-item>

                <p class="bio">${m.bio}</p>
              </app-card>
            `,
          )}
        </div>
      </section>
    `;
  }
}
