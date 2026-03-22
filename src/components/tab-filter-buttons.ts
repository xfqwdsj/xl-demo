import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface TabFilterItem {
  id: string;
  label: string;
  icon?: string;
}

@customElement("tab-filter-buttons")
export class TabFilterButtons extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .buttons-container {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .tab-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 8px 16px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--white);
      color: var(--text);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
      text-align: center;
      min-width: auto;
    }

    .tab-btn:hover {
      border-color: #1677ff;
      color: #1677ff;
    }

    .tab-btn.active {
      border-color: #1677ff;
      background: #1677ff;
      color: #fff;
    }

    .tab-btn iconify-icon {
      font-size: 18px;
    }

    @media (max-width: 600px) {
      .buttons-container {
        gap: 8px;
        flex-direction: column;
        align-items: stretch;
      }
    }
  `;

  @property({ type: String })
  activeId = "";

  @property({ type: Array })
  items: TabFilterItem[] = [];

  @property({ type: String, attribute: "aria-label" })
  ariaLabel = "标签筛选";

  render() {
    return html`
      <nav class="buttons-container" aria-label="${this.ariaLabel}">
        ${this.items.map(
          (item) => html`
            <button
              class="tab-btn ${this.activeId === item.id ? "active" : ""}"
              role="tab"
              aria-selected="${this.activeId === item.id}"
              aria-controls="panel-${item.id}"
              @click=${() => this.handleClick(item.id)}
            >
              ${item.icon
                ? html`<iconify-icon icon="${item.icon}"></iconify-icon>`
                : null}
              ${item.label}
            </button>
          `,
        )}
      </nav>
    `;
  }

  private handleClick(id: string) {
    this.activeId = id;
    this.dispatchEvent(
      new CustomEvent("tab-select", {
        detail: id,
        bubbles: true,
        composed: true,
      }),
    );
  }
}
