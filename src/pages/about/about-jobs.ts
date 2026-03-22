import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { jobOpenings } from "./about-data.ts";
import { buttonStyles } from "../../components/button.ts";
import "../../components/app-card.ts";
import "../../components/section-heading.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("about-jobs")
export class AboutJobs extends LitElement {
  static styles = css`
    ${buttonStyles}
    ${introductionPageStyles}
    :host {
      display: block;
      padding: 64px 0;
      background: var(--surface-card);
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-width: 800px;
      margin: 0 auto;
    }

    .job-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }

    .job-title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--text-title);
    }

    .job-meta {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      color: var(--text-muted);
    }

    .meta-item iconify-icon {
      font-size: 12px;
    }

    .tags {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .tag {
      padding: 2px 10px;
      border-radius: 4px;
      background: var(--surface-subtle);
      color: var(--primary-strong);
      font-size: 12px;
      font-weight: 500;
    }

    .btn-apply {
      flex-shrink: 0;
      padding: 8px 20px;
      font-size: 14px;
      white-space: nowrap;
      align-self: center;
    }

    .footer {
      text-align: center;
    }
  `;

  render() {
    return html`
      <section class="section-container">
        <div>
          <section-heading
            title="加入我们"
            subtitle="一起用技术让小微企业的财务管理更简单、更智能"
          ></section-heading>
        </div>

        <spacer-item height="36px"></spacer-item>

        <div class="list">
          ${jobOpenings.map(
            (job) => html`
              <app-card padding="22px 24px">
                <div class="job-row">
                  <div>
                    <h3 class="job-title">${job.title}</h3>

                    <spacer-item height="8px"></spacer-item>

                    <div class="job-meta">
                      <span class="meta-item">
                        <iconify-icon icon="fa7-solid:building"></iconify-icon>
                        ${job.department}
                      </span>
                      <span class="meta-item">
                        <iconify-icon
                          icon="fa7-solid:location-dot"
                        ></iconify-icon>
                        ${job.location}
                      </span>
                      <span class="meta-item">
                        <iconify-icon icon="fa7-solid:clock"></iconify-icon>
                        ${job.type}
                      </span>
                    </div>

                    <spacer-item height="10px"></spacer-item>

                    <div class="tags">
                      ${job.tags.map(
                        (tag) => html`<span class="tag">${tag}</span>`,
                      )}
                    </div>
                  </div>
                  <a
                    href="#"
                    class="btn btn-outline btn-apply"
                    @click=${(e: Event) => {
                      e.preventDefault();
                      alert("请发送简历至 hr@piaojuxiaoling.com");
                    }}
                  >
                    立即申请
                  </a>
                </div>
              </app-card>
            `,
          )}
        </div>

        <spacer-item height="28px"></spacer-item>

        <div class="footer">
          <a
            href="#"
            class="btn btn-outline"
            @click=${(e: Event) => {
              e.preventDefault();
              alert("更多职位请发邮件至 hr@piaojuxiaoling.com");
            }}
          >
            查看全部职位
          </a>
        </div>
      </section>
    `;
  }
}
