import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { typographyStyles } from "./styles/typography.ts";

@customElement("admin-note-card")
export class AdminNoteCard extends LitElement {
  static styles = css`
    ${typographyStyles}
    :host {
      display: block;
    }

    p {
      margin: 0;
    }

    .note {
      border-radius: 12px;
      border: 1px solid rgb(from var(--border) r g b / 0.72);
      background: rgb(from var(--bg) r g b / 0.4);
      padding: 14px 16px;
    }

    .note.warning {
      background: rgb(from var(--warning) r g b / 0.1);
      border-color: rgb(from var(--warning) r g b / 0.32);
    }

    .note.success {
      background: rgb(from var(--success) r g b / 0.1);
      border-color: rgb(from var(--success) r g b / 0.28);
    }

    .note.error {
      background: rgb(from var(--error) r g b / 0.1);
      border-color: rgb(from var(--error) r g b / 0.32);
    }

    .note.primary {
      background: rgb(from var(--primary) r g b / 0.1);
      border-color: rgb(from var(--primary) r g b / 0.32);
    }

    .note ul {
      margin: 0;
      padding-left: 18px;
      color: var(--text);
      display: grid;
      gap: 6px;
      font-size: 13px;
    }

    .note li {
      line-height: 1.5;
    }

    .note .time {
      margin-top: 8px;
      font-size: 12px;
      color: var(--text-muted);
    }
  `;

  @property({ type: String })
  title = "";

  @property({ type: String })
  type: "normal" | "warning" | "success" | "error" | "primary" = "normal";

  @property({ type: String })
  content = "";

  @property({ type: Array })
  items: string[] = [];

  @property({ type: String })
  time = "";

  render() {
    const noteClass = `note ${this.type}`;

    return html`
      <div class="${noteClass}">
        ${this.title ? html`<p class="text-title-sm">${this.title}</p>` : ""}
        ${this.content ? html`<p class="text-label">${this.content}</p>` : ""}
        ${this.items.length > 0
          ? html`
              <ul>
                ${this.items.map((item) => html`<li>${item}</li>`)}
              </ul>
            `
          : ""}
        ${this.time ? html`<p class="time">${this.time}</p>` : ""}
      </div>
    `;
  }
}
