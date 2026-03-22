import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./button.ts";

@customElement("section-cta")
export class SectionCta extends LitElement {
  static styles = css`
    ${buttonStyles}
    :host {
      display: block;
    }

    .cta {
      text-align: center;
      padding: 40px;
      border-radius: var(--radius-lg);
    }

    .cta.primary {
      background: var(--surface-strong);
      color: var(--white);
    }

    .cta.secondary {
      background: var(--surface-page);
      color: var(--text-title);
    }

    h2 {
      margin: 0 0 12px;
      font-size: 24px;
    }

    p {
      margin: 0 0 24px;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .cta.primary .btn-primary {
      background: var(--surface-card);
      color: var(--primary-strong);
      border: none;
      padding: 12px 28px;
      font-weight: 600;
    }

    .cta.primary .btn-primary:hover {
      background: color-mix(in srgb, var(--surface-card) 85%, var(--border));
    }

    .cta.primary .btn-secondary {
      background: transparent;
      color: var(--white);
      border: 2px solid var(--white);
      padding: 10px 26px;
    }

    .cta.primary .btn-secondary:hover {
      background: rgb(from var(--white) r g b / 0.1);
    }

    .cta.secondary .btn-primary {
      background: var(--primary-strong);
      color: var(--white);
      border: none;
      padding: 12px 28px;
      font-weight: 600;
    }

    .cta.secondary .btn-primary:hover {
      background: rgb(
        from var(--primary-strong) calc(r + 40) calc(g + 30) calc(b + 20)
      );
    }

    .cta.secondary .btn-secondary {
      background: transparent;
      color: var(--primary-strong);
      border: 2px solid var(--primary-strong);
      padding: 10px 26px;
    }

    .cta.secondary .btn-secondary:hover {
      background: rgb(from var(--primary) r g b / 0.1);
    }

    .cta.compact {
      padding: 28px 24px;
    }

    .cta.compact h2 {
      font-size: 22px;
    }
  `;

  @property({ type: String })
  variant: "primary" | "secondary" = "primary";

  @property({ type: Boolean })
  compact = false;

  @property({ type: String })
  title = "准备好让财务自动化了吗？";

  @property({ type: String })
  description = "立即注册，体验票据识别、自动记账和融资对接的一站式流程。";

  @property({ type: String, attribute: "primary-text" })
  primaryText = "免费试用";

  @property({ type: String, attribute: "primary-link" })
  primaryLink = "/register.html";

  @property({ type: String, attribute: "secondary-text" })
  secondaryText = "";

  @property({ type: String, attribute: "secondary-link" })
  secondaryLink = "";

  render() {
    const classes = `cta ${this.variant} ${this.compact ? "compact" : ""}`;

    return html`
      <section class="${classes}" aria-label="开始使用">
        <h2>${this.title}</h2>
        ${this.description ? html`<p>${this.description}</p>` : null}
        <div class="cta-buttons">
          <a href="${this.primaryLink}" class="btn btn-primary">
            ${this.primaryText}
          </a>
          ${this.secondaryText
            ? html`
                <a href="${this.secondaryLink}" class="btn btn-secondary">
                  ${this.secondaryText}
                </a>
              `
            : null}
        </div>
      </section>
    `;
  }
}
