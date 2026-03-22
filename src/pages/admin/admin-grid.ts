import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { AdminGridType } from "./admin-grid-item.ts";

type AdminGridItemElement = HTMLElement & {
  type: AdminGridType;
};

@customElement("admin-grid")
export class AdminGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    @media (max-width: 960px) {
      .grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  @property({ type: String })
  type?: AdminGridType;

  @property({ type: Number })
  columns = 3;

  @property({ type: Number })
  gap = 12;

  render() {
    const gridStyle = `grid-template-columns: repeat(${this.columns}, minmax(0, 1fr)); gap: ${this.gap}px;`;

    return html`
      <div class="grid" style="${gridStyle}">
        <slot></slot>
      </div>
    `;
  }

  protected firstUpdated() {
    const slot = this.shadowRoot?.querySelector("slot");
    slot?.addEventListener("slotchange", () => this.syncChildType());
    this.syncChildType();
  }

  protected updated() {
    this.syncChildType();
  }

  private syncChildType() {
    const type = this.type;
    if (!type) return;
    const items = this.querySelectorAll(
      "admin-grid-item",
    ) as NodeListOf<AdminGridItemElement>;
    items.forEach((item) => {
      if (item.type) return;
      item.type = type;
    });
  }
}
