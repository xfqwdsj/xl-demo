import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export type AdminStatusTone =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

@customElement("admin-status-badge")
export class AdminStatusBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      border-radius: 50vh;
      padding: 2px 10px;
      font-size: 12px;
      line-height: 20px;
      color: #fff;
      white-space: nowrap;
    }

    .success {
      background: #52c41a;
    }

    .warning {
      background: #faad14;
    }

    .error {
      background: #f5222d;
    }

    .info {
      background: #1890ff;
    }

    .neutral {
      background: #8c8c8c;
    }
  `;

  @property({ type: String })
  tone: AdminStatusTone = "neutral";

  @property({ type: String })
  label = "状态";

  render() {
    return html`<span class="badge ${this.tone}">${this.label}</span>`;
  }
}
